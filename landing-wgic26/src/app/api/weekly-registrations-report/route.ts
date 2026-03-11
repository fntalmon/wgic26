import { NextRequest, NextResponse } from 'next/server';
import { ImapFlow } from 'imapflow';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TARGET_SUBJECT = 'Registered account';
const WEEKLY_DAYS_BACK = 7;
const DEFAULT_DAILY_TEST_DAYS_BACK = 1;

type ReportMode = 'weekly' | 'daily-test';

type MailConfig = {
  imapHost: string;
  imapPort: number;
  imapUser: string;
  imapPass: string;
  imapMailbox: string;
  smtpHost: string;
  smtpPort: number;
  smtpSecure: boolean;
  smtpUser: string;
  smtpPass: string;
  recipients: string[];
  dailyTestRecipients: string[];
  from: string;
  cronSecret?: string;
};

function getConfig(): MailConfig {
  const imapHost = process.env.ZOHO_IMAP_HOST ?? 'imap.zoho.com';
  const imapPort = Number(process.env.ZOHO_IMAP_PORT ?? '993');
  const imapUser = process.env.ZOHO_IMAP_USER ?? '';
  const imapPass = process.env.ZOHO_IMAP_PASS ?? '';
  const imapMailbox = process.env.ZOHO_IMAP_MAILBOX ?? 'Sent';

  const smtpHost = process.env.ZOHO_SMTP_HOST ?? 'smtp.zoho.com';
  const smtpPort = Number(process.env.ZOHO_SMTP_PORT ?? '465');
  const smtpSecure = String(process.env.ZOHO_SMTP_SECURE ?? 'true').toLowerCase() === 'true';
  const smtpUser = process.env.ZOHO_SMTP_USER ?? '';
  const smtpPass = process.env.ZOHO_SMTP_PASS ?? '';

  const recipients = (process.env.WEEKLY_REPORT_RECIPIENTS ?? '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);

  const dailyTestRecipients = (process.env.DAILY_TEST_RECIPIENTS ?? '')
    .split(',')
    .map((email) => email.trim())
    .filter(Boolean);

  const from = process.env.WEEKLY_REPORT_FROM ?? smtpUser;
  const cronSecret = process.env.CRON_SECRET;

  if (!imapUser || !imapPass) {
    throw new Error('Missing IMAP credentials: ZOHO_IMAP_USER / ZOHO_IMAP_PASS');
  }

  if (!smtpUser || !smtpPass) {
    throw new Error('Missing SMTP credentials: ZOHO_SMTP_USER / ZOHO_SMTP_PASS');
  }

  if (!recipients.length) {
    throw new Error('Missing recipients: WEEKLY_REPORT_RECIPIENTS');
  }

  return {
    imapHost,
    imapPort,
    imapUser,
    imapPass,
    imapMailbox,
    smtpHost,
    smtpPort,
    smtpSecure,
    smtpUser,
    smtpPass,
    recipients,
    dailyTestRecipients,
    from,
    cronSecret,
  };
}

function getReportMode(request: NextRequest): ReportMode {
  const mode = request.nextUrl.searchParams.get('mode');
  return mode === 'daily-test' ? 'daily-test' : 'weekly';
}

function getDaysBackForMode(mode: ReportMode): number {
  if (mode === 'daily-test') {
    const configured = Number(process.env.DAILY_REPORT_DAYS ?? DEFAULT_DAILY_TEST_DAYS_BACK);
    return Number.isFinite(configured) && configured > 0 ? configured : DEFAULT_DAILY_TEST_DAYS_BACK;
  }

  return WEEKLY_DAYS_BACK;
}

function getRecipientsForMode(config: MailConfig, mode: ReportMode): string[] {
  if (mode === 'daily-test') {
    return config.dailyTestRecipients;
  }

  return config.recipients;
}

function isAuthorized(request: NextRequest, cronSecret?: string): boolean {
  if (!cronSecret) {
    return true;
  }

  const authHeader = request.headers.get('authorization') ?? '';
  const queryToken = request.nextUrl.searchParams.get('token') ?? '';
  return authHeader === `Bearer ${cronSecret}` || queryToken === cronSecret;
}

function buildSinceDate(daysBack: number): Date {
  const now = new Date();
  return new Date(now.getTime() - daysBack * 24 * 60 * 60 * 1000);
}

async function countRegistrations(config: MailConfig, daysBack: number): Promise<number> {
  const sinceDate = buildSinceDate(daysBack);
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

  let total = 0;

  try {
    await client.connect();
    await client.mailboxOpen(config.imapMailbox);

    const sequence = await client.search({
      since: sinceDate,
      header: { subject: TARGET_SUBJECT },
    });

    if (sequence && sequence.length > 0) {
      for await (const message of client.fetch(sequence, { envelope: true })) {
      const subject = (message.envelope?.subject ?? '').trim();
      const receivedAt = message.envelope?.date;

      if (!receivedAt) {
        continue;
      }

      if (subject === TARGET_SUBJECT && receivedAt >= sinceDate) {
        total += 1;
      }
      }
    }
  } finally {
    await client.logout().catch(() => undefined);
  }

  return total;
}

async function sendReportEmail(config: MailConfig, total: number, daysBack: number, recipients: string[], mode: ReportMode): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: config.smtpSecure,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  const now = new Date();
  const sinceDate = buildSinceDate(daysBack);

  const subjectPrefix = mode === 'daily-test' ? '[TEST DIARIO] ' : '';
  const subject = `${subjectPrefix}Reporte de registros: ${total}`;
  const text = [
    `Modo: ${mode}`,
    `Registros últimos ${daysBack} días: ${total}`,
    `Desde: ${sinceDate.toISOString()}`,
    `Hasta: ${now.toISOString()}`,
    `Filtro de asunto exacto: ${TARGET_SUBJECT}`,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
      <h2 style="margin-bottom: 8px;">${mode === 'daily-test' ? '[TEST] ' : ''}Reporte de registros</h2>
      <p style="margin: 0 0 12px;">Registros de los últimos <strong>${daysBack} días</strong>:</p>
      <p style="font-size: 28px; margin: 0 0 16px;"><strong>${total}</strong></p>
      <p style="margin: 0;">Modo: <strong>${mode}</strong></p>
      <p style="margin: 0;">Desde: ${sinceDate.toISOString()}</p>
      <p style="margin: 4px 0 0;">Hasta: ${now.toISOString()}</p>
      <p style="margin: 12px 0 0; color: #666;">Filtro aplicado: asunto exacto "${TARGET_SUBJECT}"</p>
    </div>
  `;

  await transporter.sendMail({
    from: config.from,
    to: recipients.join(', '),
    subject,
    text,
    html,
  });
}

export async function GET(request: NextRequest) {
  try {
    const config = getConfig();
    const mode = getReportMode(request);
    const daysBack = getDaysBackForMode(mode);
    const recipients = getRecipientsForMode(config, mode);

    if (!isAuthorized(request, config.cronSecret)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!recipients.length) {
      return NextResponse.json({ error: 'No recipients configured for this mode' }, { status: 400 });
    }

    const total = await countRegistrations(config, daysBack);
    await sendReportEmail(config, total, daysBack, recipients, mode);

    return NextResponse.json({
      ok: true,
      mode,
      total,
      days: daysBack,
      subject: TARGET_SUBJECT,
      recipients,
    });
  } catch (error) {
    console.error('Weekly registrations report failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
