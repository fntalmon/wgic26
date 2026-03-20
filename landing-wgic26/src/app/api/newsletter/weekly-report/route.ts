import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getNewsletterStats } from '@/lib/newsletter-metrics';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function isAuthorized(request: NextRequest): boolean {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return true;
  }

  const authHeader = request.headers.get('authorization') ?? '';
  const queryToken = request.nextUrl.searchParams.get('token') ?? '';
  return authHeader === `Bearer ${cronSecret}` || queryToken === cronSecret;
}

function getRecipients(request: NextRequest): string[] {
  const toOverride = request.nextUrl.searchParams.get('to');
  if (toOverride) {
    return toOverride
      .split(',')
      .map((value) => value.trim())
      .filter(Boolean);
  }

  const recipientsRaw =
    process.env.NEWSLETTER_WEEKLY_REPORT_RECIPIENTS ??
    process.env.WEEKLY_REPORT_RECIPIENTS ??
    process.env.NEWSLETTER_RECIPIENT_EMAIL ??
    '';

  return recipientsRaw
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
}

function toPositiveInteger(value: string | null, fallback: number): number {
  const parsed = Number(value ?? fallback);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }

  return Math.floor(parsed);
}

function getDefaultWeeks(): number {
  const envDefault = process.env.NEWSLETTER_WEEKLY_DEFAULT_WEEKS ?? process.env.WEEKLY_REPORT_WEEKS;
  return Math.min(toPositiveInteger(envDefault ?? null, 12), 104);
}

function isValidIsoWeek(value: string | null): value is string {
  if (!value) {
    return false;
  }

  return /^\d{4}-W\d{2}$/.test(value.trim());
}

function getCurrentIsoWeekLabel(): string {
  const now = new Date();
  const utc = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const day = utc.getUTCDay() || 7;
  utc.setUTCDate(utc.getUTCDate() + 4 - day);
  const year = utc.getUTCFullYear();
  const yearStart = new Date(Date.UTC(year, 0, 1));
  const diffInDays = Math.floor((utc.getTime() - yearStart.getTime()) / 86_400_000);
  const week = Math.ceil((diffInDays + 1) / 7);

  return `${year}-W${String(week).padStart(2, '0')}`;
}

function getRequestedWindow(request: NextRequest) {
  const weeks = Math.min(toPositiveInteger(request.nextUrl.searchParams.get('weeks'), getDefaultWeeks()), 104);
  const startWeekParam = request.nextUrl.searchParams.get('startWeek');
  const endWeekParam = request.nextUrl.searchParams.get('endWeek');

  const startWeek = isValidIsoWeek(startWeekParam) ? startWeekParam : null;
  const endWeek = isValidIsoWeek(endWeekParam) ? endWeekParam : getCurrentIsoWeekLabel();

  if (!startWeek) {
    return {
      weeks,
      startWeek: null as string | null,
      endWeek: null as string | null,
      hasCustomWindow: false,
    };
  }

  return {
    weeks: 104,
    startWeek,
    endWeek,
    hasCustomWindow: true,
  };
}

function parseIsoWeekLabel(isoWeek: string): { year: number; week: number } | null {
  const match = /^(\d{4})-W(\d{2})$/.exec(isoWeek.trim());
  if (!match) {
    return null;
  }

  return {
    year: Number(match[1]),
    week: Number(match[2]),
  };
}

function getIsoWeekStartDate(year: number, week: number): Date {
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const jan4Weekday = jan4.getUTCDay() || 7;
  const week1Monday = new Date(jan4);
  week1Monday.setUTCDate(jan4.getUTCDate() - jan4Weekday + 1);

  const weekStart = new Date(week1Monday);
  weekStart.setUTCDate(week1Monday.getUTCDate() + (week - 1) * 7);
  return weekStart;
}

function formatDayMonth(date: Date): string {
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  return `${day}/${month}`;
}

function formatWeekRangeLabel(isoWeek: string): string {
  const parsed = parseIsoWeekLabel(isoWeek);
  if (!parsed) {
    return isoWeek;
  }

  const start = getIsoWeekStartDate(parsed.year, parsed.week);
  const end = new Date(start);
  end.setUTCDate(start.getUTCDate() + 6);

  return `${formatDayMonth(start)}-${formatDayMonth(end)}`;
}

function toDisplayWeekly(weekly: Array<{ week: string; count: number }>) {
  return weekly.map((item) => ({
    ...item,
    displayWeek: formatWeekRangeLabel(item.week),
  }));
}

function getEmailTransport() {
  if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
    return {
      transporter: nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      }),
      enforcedFrom: process.env.GMAIL_USER,
    };
  }

  if (process.env.ZOHO_USER && process.env.ZOHO_PASS) {
    return {
      transporter: nodemailer.createTransport({
        host: 'smtppro.zoho.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.ZOHO_USER,
          pass: process.env.ZOHO_PASS,
        },
        tls: {
          rejectUnauthorized: false,
        },
      }),
      enforcedFrom: process.env.ZOHO_USER,
    };
  }

  if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
    return {
      transporter: nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587', 10),
        secure: process.env.SMTP_PORT === '465',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      }),
      enforcedFrom: process.env.SMTP_USER,
    };
  }

  return null;
}

function getFromEmail(enforcedFrom?: string): string {
  if (enforcedFrom) {
    return enforcedFrom;
  }

  return (
    process.env.NEWSLETTER_WEEKLY_REPORT_FROM ||
    process.env.WEEKLY_REPORT_FROM ||
    process.env.GMAIL_USER ||
    process.env.ZOHO_USER ||
    process.env.SMTP_USER ||
    'noreply@wgic26.barcelona'
  );
}

function buildWeeklyRows(weekly: Array<{ displayWeek: string; count: number }>): string {
  if (!weekly.length) {
    return '<tr><td colspan="2" style="padding:8px;border:1px solid #ddd;">No data yet</td></tr>';
  }

  return weekly
    .map(
      (item) =>
        `<tr><td style="padding:8px;border:1px solid #ddd;">${item.displayWeek}</td><td style="padding:8px;border:1px solid #ddd;text-align:right;">${item.count}</td></tr>`,
    )
    .join('');
}

function buildChartConfig(weekly: Array<{ displayWeek: string; count: number }>, weeks: number) {
  const maxCount = Math.max(0, ...weekly.map((item) => item.count));
  const yMax = Math.max(4, maxCount + 1);

  return {
    type: 'bar',
    data: {
      labels: weekly.map((item) => item.displayWeek),
      datasets: [
        {
          label: 'New subscribers',
          data: weekly.map((item) => item.count),
          backgroundColor: '#2d7b5a',
          borderRadius: 4,
        },
        // Hidden zero baseline dataset to force y-axis to include 0 in all QuickChart runtimes.
        {
          label: 'baseline',
          data: weekly.map(() => 0),
          backgroundColor: 'rgba(0,0,0,0)',
          borderColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
          barThickness: 0,
          categoryPercentage: 0,
          barPercentage: 0,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: true,
          text: `WGIC26 Newsletter - Last ${weeks} weeks`,
          color: '#1a1a1a',
          font: {
            size: 16,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          min: 0,
          max: yMax,
          ticks: {
            precision: 0,
            stepSize: 1,
          },
        },
        // QuickChart may use Chart.js v2 on some render paths.
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              min: 0,
              max: yMax,
              stepSize: 1,
            },
          },
        ],
      },
    },
  };
}

async function buildWeeklyChartAttachment(
  weekly: Array<{ displayWeek: string; count: number }>,
  weeks: number,
) {
  const chartConfig = buildChartConfig(weekly, weeks);
  const params = new URLSearchParams({
    width: '960',
    height: '420',
    format: 'png',
    version: '4',
    backgroundColor: 'white',
    chart: JSON.stringify(chartConfig),
  });

  const chartUrl = `https://quickchart.io/chart?${params.toString()}`;

  try {
    const response = await fetch(chartUrl, { cache: 'no-store' });
    if (!response.ok) {
      return { chartUrl, attachment: null };
    }

    const imageBuffer = Buffer.from(await response.arrayBuffer());
    return {
      chartUrl,
      attachment: {
        filename: 'newsletter-weekly.png',
        content: imageBuffer,
        contentType: 'image/png',
        cid: 'newsletter-weekly-chart',
      },
    };
  } catch {
    return { chartUrl, attachment: null };
  }
}

async function sendWeeklyReportEmail(recipients: string[], weeks: number) {
  const transport = getEmailTransport();
  if (!transport) {
    throw new Error('No email transport configured for weekly newsletter report');
  }

  const stats = await getNewsletterStats(7, weeks);
  const now = new Date();
  const displayWeekly = toDisplayWeekly(stats.weekly);
  const rows = buildWeeklyRows(displayWeekly);
  const chart = await buildWeeklyChartAttachment(displayWeekly, stats.weeks);
  const chartBlock = chart.attachment
    ? '<img src="cid:newsletter-weekly-chart" alt="Weekly subscriptions chart" style="width:100%;max-width:960px;border:1px solid #e5e5e5;border-radius:8px;" />'
    : `<img src="${chart.chartUrl}" alt="Weekly subscriptions chart" style="width:100%;max-width:960px;border:1px solid #e5e5e5;border-radius:8px;" />`;

  const subject = `WGIC26 Newsletter: ${stats.lastDaysUnique} this week | total ${stats.totalUnique}`;
  const text = [
    `New subscribers (last 7 days): ${stats.lastDaysUnique}`,
    `Total unique subscribers: ${stats.totalUnique}`,
    `Generated at: ${now.toISOString()}`,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 720px; margin: 0 auto;">
      <h2>WGIC26 - Weekly newsletter report</h2>
      <p><strong>New subscribers (last 7 days):</strong> ${stats.lastDaysUnique}</p>
      <p><strong>Total unique subscribers:</strong> ${stats.totalUnique}</p>
      <h3>Weekly chart (last ${stats.weeks} weeks)</h3>
      <div style="margin-bottom: 20px;">
        ${chartBlock}
      </div>
      <h3>Weekly history (last ${stats.weeks} weeks)</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th style="padding:8px;border:1px solid #ddd;text-align:left;">Week range</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:right;">New</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
      <p style="margin-top:16px;color:#666;">Generated at: ${now.toISOString()}</p>
    </div>
  `;

  await transport.transporter.sendMail({
    from: getFromEmail(transport.enforcedFrom),
    to: recipients.join(', '),
    subject,
    text,
    html,
    attachments: chart.attachment ? [chart.attachment] : undefined,
  });

  const { source, ...statsWithoutSource } = stats;
  void source;

  return {
    ...statsWithoutSource,
    weekly: displayWeekly.map((item) => ({ week: item.displayWeek, count: item.count })),
    recipients,
    sentAt: now.toISOString(),
  };
}

function filterWindow(
  weekly: Array<{ week: string; count: number }>,
  startWeek: string,
  endWeek: string,
): Array<{ week: string; count: number }> {
  return weekly.filter((item) => item.week >= startWeek && item.week <= endWeek);
}

async function sendCustomWindowReportEmail(
  recipients: string[],
  startWeek: string,
  endWeek: string,
) {
  const transport = getEmailTransport();
  if (!transport) {
    throw new Error('No email transport configured for weekly newsletter report');
  }

  const stats = await getNewsletterStats(7, 104);
  const now = new Date();
  const windowWeekly = filterWindow(stats.weekly, startWeek, endWeek);
  const displayWeekly = toDisplayWeekly(windowWeekly);
  const rows = buildWeeklyRows(displayWeekly);
  const chart = await buildWeeklyChartAttachment(displayWeekly, displayWeekly.length || 1);
  const chartBlock = chart.attachment
    ? '<img src="cid:newsletter-weekly-chart" alt="Weekly subscriptions chart" style="width:100%;max-width:960px;border:1px solid #e5e5e5;border-radius:8px;" />'
    : `<img src="${chart.chartUrl}" alt="Weekly subscriptions chart" style="width:100%;max-width:960px;border:1px solid #e5e5e5;border-radius:8px;" />`;

  const windowTotal = windowWeekly.reduce((acc, item) => acc + item.count, 0);
  const subject = `WGIC26 Newsletter: window ${startWeek} to ${endWeek} | total ${stats.totalUnique}`;
  const text = [
    `Window: ${startWeek} to ${endWeek}`,
    `New subscribers in selected window: ${windowTotal}`,
    `Total unique subscribers: ${stats.totalUnique}`,
    `Generated at: ${now.toISOString()}`,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 720px; margin: 0 auto;">
      <h2>WGIC26 - Newsletter report</h2>
      <p><strong>Window:</strong> ${startWeek} to ${endWeek}</p>
      <p><strong>New subscribers in selected window:</strong> ${windowTotal}</p>
      <p><strong>Total unique subscribers:</strong> ${stats.totalUnique}</p>
      <h3>Weekly chart (selected window)</h3>
      <div style="margin-bottom: 20px;">
        ${chartBlock}
      </div>
      <h3>Weekly history (selected window)</h3>
      <table style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th style="padding:8px;border:1px solid #ddd;text-align:left;">Week range</th>
            <th style="padding:8px;border:1px solid #ddd;text-align:right;">New</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
      <p style="margin-top:16px;color:#666;">Generated at: ${now.toISOString()}</p>
    </div>
  `;

  await transport.transporter.sendMail({
    from: getFromEmail(transport.enforcedFrom),
    to: recipients.join(', '),
    subject,
    text,
    html,
    attachments: chart.attachment ? [chart.attachment] : undefined,
  });

  return {
    ok: true,
    weeks: displayWeekly.length,
    window: { startWeek, endWeek },
    windowTotal,
    totalUnique: stats.totalUnique,
    weekly: displayWeekly.map((item) => ({ week: item.displayWeek, count: item.count })),
    recipients,
    sentAt: now.toISOString(),
  };
}

async function handleRequest(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const recipients = getRecipients(request);
    const windowConfig = getRequestedWindow(request);
    if (!recipients.length) {
      return NextResponse.json({ error: 'No recipients configured' }, { status: 400 });
    }

    const result = windowConfig.hasCustomWindow && windowConfig.startWeek && windowConfig.endWeek
      ? await sendCustomWindowReportEmail(recipients, windowConfig.startWeek, windowConfig.endWeek)
      : await sendWeeklyReportEmail(recipients, windowConfig.weeks);
    return NextResponse.json({ ok: true, ...result });
  } catch (error) {
    console.error('Newsletter weekly report failed:', error);
    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}

export async function GET(request: NextRequest) {
  return handleRequest(request);
}

export async function POST(request: NextRequest) {
  return handleRequest(request);
}