import { Redis } from '@upstash/redis';

const TOTAL_UNIQUE_KEY = 'newsletter:metrics:total_unique';
const DAILY_PREFIX = 'newsletter:metrics:day:';
const WEEKLY_PREFIX = 'newsletter:metrics:week:';
const SUBSCRIBER_PREFIX = 'newsletter:subscriber:';

type RecordSubscriptionInput = {
  email: string;
  phone?: string;
  subscribedAt?: Date;
};

type RecordSubscriptionResult = {
  tracked: boolean;
  isNewSubscriber: boolean;
};

type WeeklyCount = {
  week: string;
  count: number;
};

export type Subscriber = {
  email: string;
  phone: string | null;
  subscribedAt: string;
};

export type NewsletterStats = {
  source: 'redis' | 'disabled';
  days: number;
  weeks: number;
  lastDaysUnique: number;
  totalUnique: number;
  weekly: WeeklyCount[];
};

let redisClient: Redis | null | undefined;

function getRedisClient(): Redis | null {
  if (redisClient !== undefined) {
    return redisClient;
  }

  const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

  if (url && token) {
    redisClient = new Redis({ url, token });
    return redisClient;
  }

  redisClient = null;
  return redisClient;
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

function pad2(value: number): string {
  return String(value).padStart(2, '0');
}

function toDayKey(date: Date): string {
  const year = date.getUTCFullYear();
  const month = pad2(date.getUTCMonth() + 1);
  const day = pad2(date.getUTCDate());
  return `${year}-${month}-${day}`;
}

function getIsoWeekInfo(date: Date): { year: number; week: number } {
  const utc = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const day = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - day);

  const year = utc.getUTCFullYear();
  const yearStart = new Date(Date.UTC(year, 0, 1));
  const diffInDays = Math.floor((utc.getTime() - yearStart.getTime()) / 86_400_000);
  const week = Math.ceil((diffInDays + 1) / 7);

  return { year, week };
}

function toWeekKey(date: Date): string {
  const { year, week } = getIsoWeekInfo(date);
  return `${year}-W${pad2(week)}`;
}

function parsePositiveInteger(value: number, fallback: number): number {
  if (!Number.isFinite(value) || value <= 0) {
    return fallback;
  }

  return Math.floor(value);
}

function asNumber(value: unknown): number {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  return 0;
}

function getDateMinusDays(days: number): Date {
  const now = new Date();
  const result = new Date(now);
  result.setUTCDate(result.getUTCDate() - days);
  return result;
}

function getWeekLabels(weeks: number): string[] {
  const labels: string[] = [];

  for (let i = weeks - 1; i >= 0; i -= 1) {
    labels.push(toWeekKey(getDateMinusDays(i * 7)));
  }

  return labels;
}

export async function recordNewsletterSubscription(input: RecordSubscriptionInput): Promise<RecordSubscriptionResult> {
  const redis = getRedisClient();
  if (!redis) {
    return { tracked: false, isNewSubscriber: false };
  }

  const email = normalizeEmail(input.email);
  const subscribedAt = input.subscribedAt ?? new Date();
  const subscriberKey = `${SUBSCRIBER_PREFIX}${email}`;

  const createResult = await redis.set(
    subscriberKey,
    JSON.stringify({
      email,
      phone: input.phone ?? null,
      subscribedAt: subscribedAt.toISOString(),
    }),
    { nx: true },
  );

  const isNewSubscriber = createResult === 'OK';
  if (!isNewSubscriber) {
    return { tracked: true, isNewSubscriber: false };
  }

  const dayKey = `${DAILY_PREFIX}${toDayKey(subscribedAt)}`;
  const weekKey = `${WEEKLY_PREFIX}${toWeekKey(subscribedAt)}`;

  await Promise.all([redis.incr(TOTAL_UNIQUE_KEY), redis.incr(dayKey), redis.incr(weekKey)]);

  return { tracked: true, isNewSubscriber: true };
}

export async function getNewsletterStats(daysInput = 7, weeksInput = 12): Promise<NewsletterStats> {
  const redis = getRedisClient();
  const days = Math.min(parsePositiveInteger(daysInput, 7), 90);
  const weeks = Math.min(parsePositiveInteger(weeksInput, 12), 104);

  if (!redis) {
    return {
      source: 'disabled',
      days,
      weeks,
      lastDaysUnique: 0,
      totalUnique: 0,
      weekly: [],
    };
  }

  const dayKeys: string[] = [];
  for (let i = 0; i < days; i += 1) {
    dayKeys.push(`${DAILY_PREFIX}${toDayKey(getDateMinusDays(i))}`);
  }

  const weekLabels = getWeekLabels(weeks);
  const weekKeys = weekLabels.map((label) => `${WEEKLY_PREFIX}${label}`);

  const [totalRaw, dayValuesRaw, weekValuesRaw] = await Promise.all([
    redis.get<unknown>(TOTAL_UNIQUE_KEY),
    dayKeys.length ? redis.mget(...dayKeys) : Promise.resolve([]),
    weekKeys.length ? redis.mget(...weekKeys) : Promise.resolve([]),
  ]);

  const dayValues = (dayValuesRaw as unknown[]).map(asNumber);
  const weekValues = (weekValuesRaw as unknown[]).map(asNumber);

  const weekly = weekLabels.map((week, index) => ({
    week,
    count: weekValues[index] ?? 0,
  }));

  return {
    source: 'redis',
    days,
    weeks,
    lastDaysUnique: dayValues.reduce((acc, value) => acc + value, 0),
    totalUnique: asNumber(totalRaw),
    weekly,
  };
}

export async function getAllSubscribers(): Promise<{ source: 'redis' | 'disabled'; subscribers: Subscriber[] }> {
  const redis = getRedisClient();
  if (!redis) {
    return { source: 'disabled', subscribers: [] };
  }

  const keys: string[] = [];
  let cursor = 0;

  do {
    const result = await redis.scan(cursor, { match: `${SUBSCRIBER_PREFIX}*`, count: 100 });
    cursor = Number(result[0]);
    keys.push(...result[1]);
  } while (cursor !== 0);

  if (keys.length === 0) {
    return { source: 'redis', subscribers: [] };
  }

  const values = await redis.mget<unknown[]>(...keys);

  const subscribers: Subscriber[] = [];
  for (const value of values) {
    if (!value || typeof value !== 'object') continue;
    const v = value as Record<string, unknown>;
    if (typeof v.email === 'string' && typeof v.subscribedAt === 'string') {
      subscribers.push({
        email: v.email,
        phone: typeof v.phone === 'string' ? v.phone : null,
        subscribedAt: v.subscribedAt,
      });
    }
  }

  subscribers.sort((a, b) => new Date(b.subscribedAt).getTime() - new Date(a.subscribedAt).getTime());

  return { source: 'redis', subscribers };
}