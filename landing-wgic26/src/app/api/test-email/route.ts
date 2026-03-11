import { NextRequest, NextResponse } from 'next/server';
import { ImapFlow } from 'imapflow';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const TARGET_SUBJECT = 'Registered account';

async function testEmail(request: NextRequest) {
  try {
    // Validar que solo el usuario pueda acceder
    // Aceptar token como header o query param
    let testToken = request.headers.get('x-test-token');
    if (!testToken) {
      testToken = request.nextUrl.searchParams.get('token');
    }
    
    const validTestToken = process.env.TEST_EMAIL_TOKEN || 'test-123';

    if (testToken !== validTestToken) {
      return NextResponse.json(
        { error: 'Unauthorized. Use ?token=xyz or x-test-token header' },
        { status: 401 }
      );
    }

    // Obtener credenciales
    const imapHost = process.env.ZOHO_IMAP_HOST || 'imap.zoho.com';
    const imapPort = Number(process.env.ZOHO_IMAP_PORT || '993');
    const imapUser = process.env.ZOHO_IMAP_USER || '';
    const imapPass = process.env.ZOHO_IMAP_PASS || '';

    const smtpHost = process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com';
    const smtpPort = Number(process.env.ZOHO_SMTP_PORT || '465');
    const smtpSecure = String(process.env.ZOHO_SMTP_SECURE || 'true').toLowerCase() === 'true';
    const smtpUser = process.env.ZOHO_SMTP_USER || '';
    const smtpPass = process.env.ZOHO_SMTP_PASS || '';

    const testRecipients = (process.env.DAILY_TEST_RECIPIENTS || '')
      .split(',')
      .map((email) => email.trim())
      .filter(Boolean);

    // DEBUG: Log values
    console.log('=== TEST EMAIL DEBUG ===');
    console.log('imapHost:', imapHost);
    console.log('imapUser:', imapUser);
    console.log('imapPass exists:', !!imapPass);
    console.log('smtpUser:', smtpUser);
    console.log('smtpPass exists:', !!smtpPass);
    console.log('testRecipients:', testRecipients);
    console.log('========================');

    if (!imapUser || !imapPass) {
      throw new Error('Missing IMAP credentials');
    }

    if (!smtpUser || !smtpPass) {
      throw new Error('Missing SMTP credentials');
    }

    if (!testRecipients.length) {
      throw new Error('Missing test recipients (DAILY_TEST_RECIPIENTS)');
    }

    // Paso 1: Conectar a IMAP y contar registros
    let registrationCount = 0;
    const sinceDate = new Date();
    sinceDate.setDate(sinceDate.getDate() - 10); // Último día

    const imapClient = new ImapFlow({
      host: imapHost,
      port: imapPort,
      secure: true,
      auth: {
        user: imapUser,
        pass: imapPass,
      },
      logger: false,
    });

    try {
      await imapClient.connect();
      await imapClient.mailboxOpen('Sent');

      const sequence = await imapClient.search({
        since: sinceDate,
        header: { subject: TARGET_SUBJECT },
      });

      if (sequence && sequence.length > 0) {
        for await (const message of imapClient.fetch(sequence, { envelope: true })) {
          const subject = (message.envelope?.subject ?? '').trim();
          const receivedAt = message.envelope?.date;

          if (!receivedAt) {
            continue;
          }

          if (subject === TARGET_SUBJECT && receivedAt >= sinceDate) {
            registrationCount += 1;
          }
        }
      }
    } finally {
      await imapClient.logout().catch(() => undefined);
    }

    // Paso 2: Enviar email de prueba
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const now = new Date();
    const subject = '[TEST] Reporte de registros: ' + registrationCount;
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto;">
        <h2 style="color: #d97706; margin-bottom: 12px;">🧪 TEST EMAIL - Funcionalidad Completa</h2>
        
        <div style="background: #fef3c7; padding: 12px; border-radius: 8px; margin: 16px 0; border-left: 4px solid #d97706;">
          <p style="margin: 0; color: #92400e;">
            ✅ IMAP conectado exitosamente<br/>
            ✅ Conteo de registros completado<br/>
            ✅ SMTP funcionando
          </p>
        </div>

        <h3 style="margin-top: 24px; margin-bottom: 12px;">Resultados:</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background: #f3f4f6;">
            <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Registros (últimas 24h):</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb; font-size: 20px; font-weight: bold; color: #059669;">${registrationCount}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Desde:</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${sinceDate.toLocaleString()}</td>
          </tr>
          <tr style="background: #f3f4f6;">
            <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Hasta:</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;">${now.toLocaleString()}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #e5e7eb;"><strong>Asunto buscado:</strong></td>
            <td style="padding: 8px; border: 1px solid #e5e7eb;"><code>"${TARGET_SUBJECT}"</code></td>
          </tr>
        </table>

        <p style="margin-top: 24px; color: #666; font-size: 12px;">
          Este email es solo para ti. El reporte semanal real se enviará a otros destinatarios.
        </p>
      </div>
    `;

    await transporter.sendMail({
      from: smtpUser,
      to: testRecipients.join(', '),
      subject,
      html,
    });

    return NextResponse.json({
      ok: true,
      message: 'Test email sent successfully!',
      registrationCount,
      recipients: testRecipients,
      imapStatus: 'connected',
      smtpStatus: 'sent',
      periodDays: 1,
    });
  } catch (error) {
    console.error('Test email failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  return testEmail(request);
}

export async function POST(request: NextRequest) {
  return testEmail(request);
}
