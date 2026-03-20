import { NextRequest, NextResponse } from 'next/server';
import { ImapFlow } from 'imapflow';
import { recordNewsletterSubscription } from '@/lib/newsletter-metrics';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

type BackfillConfig = {
  imapHost: string;
  imapPort: number;
  imapUser: string;
  imapPass: string;
  imapMailbox: string;
  allowedSubjects: string[];
  ignoredRecipients: Set<string>;
  defaultSince: Date;
  secrets: string[];
};

type HistoricalEvent = {
  email: string;
  subscribedAt: Date;
  subject: string;
};

function describeSecret(value: string): string {
  const trimmed = value.trim();
  if (!trimmed) {
    return 'empty';
  }

  const last4 = trimmed.slice(-4);
  return `len:${trimmed.length}|tail:${last4}`;
}

function getConfig(): BackfillConfig {
  const imapHost = process.env.ZOHO_IMAP_HOST ?? 'imap.zoho.com';
  const imapPort = Number(process.env.ZOHO_IMAP_PORT ?? '993');
  const imapUser = process.env.ZOHO_USER ?? process.env.ZOHO_IMAP_USER ?? '';
  const imapPass = process.env.ZOHO_PASS ?? process.env.ZOHO_IMAP_PASS ?? '';
  const imapMailbox = process.env.ZOHO_IMAP_MAILBOX ?? 'Sent';
  const subjectListRaw =
    process.env.NEWSLETTER_BACKFILL_SUBJECTS ?? 'Subscription confirmation - WGIC26,New Newsletter Subscription - WGIC26';
  const allowedSubjects = subjectListRaw
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);

  const ignoredRecipientsRaw =
    process.env.NEWSLETTER_BACKFILL_IGNORED_RECIPIENTS ??
    [process.env.NEWSLETTER_RECIPIENT_EMAIL, process.env.ZOHO_USER].filter(Boolean).join(',');
  const ignoredRecipients = new Set(
    ignoredRecipientsRaw
      .split(',')
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean),
  );

  const defaultSinceRaw = process.env.NEWSLETTER_BACKFILL_SINCE ?? '2024-01-01T00:00:00.000Z';
  const parsedSince = new Date(defaultSinceRaw);
  const defaultSince = Number.isNaN(parsedSince.getTime()) ? new Date('2024-01-01T00:00:00.000Z') : parsedSince;

  if (!imapUser || !imapPass) {
    throw new Error('Missing IMAP credentials: ZOHO_USER/ZOHO_PASS');
  }

  if (!allowedSubjects.length) {
    throw new Error('Missing backfill subjects: NEWSLETTER_BACKFILL_SUBJECTS');
  }

  return {
    imapHost,
    imapPort,
    imapUser,
    imapPass,
    imapMailbox,
    allowedSubjects,
    ignoredRecipients,
    defaultSince,
    secrets: [process.env.NEWSLETTER_BACKFILL_SECRET, process.env.CRON_SECRET]
      .filter((value): value is string => Boolean(value && value.trim()))
      .map((value) => value.trim()),
  };
}

function isAuthorized(request: NextRequest, secrets: string[]): boolean {
  if (!secrets.length) {
    return true;
  }

  const authHeader = request.headers.get('authorization') ?? '';
  const queryToken = request.nextUrl.searchParams.get('token') ?? '';
  return secrets.some((secret) => authHeader === `Bearer ${secret}` || queryToken === secret);
}

function parseSinceDate(request: NextRequest, fallback: Date): Date {
  const sinceParam = request.nextUrl.searchParams.get('since');
  if (!sinceParam) {
    return fallback;
  }

  const parsed = new Date(sinceParam);
  if (Number.isNaN(parsed.getTime())) {
    return fallback;
  }

  return parsed;
}

function isExecuteMode(request: NextRequest): boolean {
  const executeParam = request.nextUrl.searchParams.get('execute');
  return executeParam === '1' || executeParam === 'true';
}

function getAddressEmail(address: unknown): string | null {
  if (!address || typeof address !== 'object') {
    return null;
  }

  const maybeAddress = (address as { address?: string }).address;
  if (!maybeAddress) {
    return null;
  }

  return maybeAddress.trim().toLowerCase();
}

async function collectHistoricalEvents(config: BackfillConfig, sinceDate: Date) {
  const client = new ImapFlow({
    host: config.imapHost,
    port: config.imapPort,
    secure: true,
    auth: {
      user: config.imapUser,
      pass: config.imapPass,
    },
    logger: false,
  });

  const allowedSubjectSet = new Set(config.allowedSubjects);
  const events: HistoricalEvent[] = [];
  let scanned = 0;
  let matched = 0;

  try {
    await client.connect();
    await client.mailboxOpen(config.imapMailbox);

    const sequence = await client.search({ since: sinceDate });
    if (sequence && sequence.length > 0) {
      for await (const message of client.fetch(sequence, { envelope: true })) {
        scanned += 1;

        const envelope = message.envelope;
        const subject = (envelope?.subject ?? '').trim();
        if (!allowedSubjectSet.has(subject)) {
          continue;
        }

        const subscribedAt = envelope?.date;
        if (!subscribedAt || subscribedAt < sinceDate) {
          continue;
        }

        const recipientList = envelope?.to ?? [];
        const email = recipientList
          .map(getAddressEmail)
          .find((value): value is string => Boolean(value && value.includes('@')));

        if (!email) {
          continue;
        }

        if (config.ignoredRecipients.has(email)) {
          continue;
        }

        matched += 1;
        events.push({
          email,
          subscribedAt,
          subject,
        });
      }
    }
  } finally {
    await client.logout().catch(() => undefined);
  }

  return { scanned, matched, events };
}

export async function POST(request: NextRequest) {
  try {
    const config = getConfig();

    const authHeader = request.headers.get('authorization') ?? '';
    const queryToken = request.nextUrl.searchParams.get('token') ?? '';
    const headerToken = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : '';

    console.info('newsletter-backfill auth debug', {
      path: request.nextUrl.pathname,
      host: request.headers.get('host') ?? 'unknown',
      hasAuthorizationHeader: Boolean(authHeader),
      hasBearerPrefix: authHeader.startsWith('Bearer '),
      hasQueryToken: Boolean(queryToken),
      headerTokenMeta: headerToken ? describeSecret(headerToken) : 'missing',
      queryTokenMeta: queryToken ? describeSecret(queryToken) : 'missing',
      configuredSecretsMeta: config.secrets.map(describeSecret),
    });

    if (!isAuthorized(request, config.secrets)) {
      console.warn('newsletter-backfill unauthorized request', {
        path: request.nextUrl.pathname,
        host: request.headers.get('host') ?? 'unknown',
      });
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const sinceDate = parseSinceDate(request, config.defaultSince);
    const execute = isExecuteMode(request);
    const historical = await collectHistoricalEvents(config, sinceDate);

    if (!execute) {
      return NextResponse.json({
        ok: true,
        mode: 'preview',
        scanned: historical.scanned,
        matched: historical.matched,
        sample: historical.events.slice(0, 10),
        hint: 'Use ?execute=true to persist into Redis',
      });
    }

    let inserted = 0;
    let alreadyExisting = 0;

    for (const event of historical.events) {
      const result = await recordNewsletterSubscription({
        email: event.email,
        subscribedAt: event.subscribedAt,
      });

      if (result.tracked && result.isNewSubscriber) {
        inserted += 1;
      } else {
        alreadyExisting += 1;
      }
    }

    return NextResponse.json({
      ok: true,
      mode: 'execute',
      since: sinceDate.toISOString(),
      scanned: historical.scanned,
      matched: historical.matched,
      inserted,
      alreadyExisting,
      processed: historical.events.length,
    });
  } catch (error) {
    console.error('Newsletter backfill failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}