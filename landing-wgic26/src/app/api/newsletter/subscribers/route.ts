import { NextRequest, NextResponse } from 'next/server';
import { getAllSubscribers } from '@/lib/newsletter-metrics';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function escapeCsv(value: string | null): string {
  if (value === null || value === undefined) return '';
  const str = String(value).replace(/"/g, '""');
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str}"`;
  }
  return str;
}

function toCsv(subscribers: { email: string; phone: string | null; subscribedAt: string }[]): string {
  const lines: string[] = ['Email,Phone,Date'];
  for (const s of subscribers) {
    const date = new Date(s.subscribedAt).toLocaleDateString('es-ES');
    lines.push(`${escapeCsv(s.email)},${escapeCsv(s.phone)},${date}`);
  }
  return lines.join('\n');
}

function toHtml(subscribers: { email: string; phone: string | null; subscribedAt: string }[]): string {
  const rows = subscribers
    .map(
      (s) => `
    <tr>
      <td>${s.email}</td>
      <td>${s.phone ?? '—'}</td>
      <td>${new Date(s.subscribedAt).toLocaleDateString('es-ES')}</td>
    </tr>`,
    )
    .join('');

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Newsletter Subscribers - WGIC26</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 40px; background: #f5f5f5; }
    .container { max-width: 900px; margin: 0 auto; background: white; padding: 32px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    h1 { margin: 0 0 8px; font-size: 24px; color: #2d5a27; }
    .meta { color: #666; font-size: 14px; margin-bottom: 24px; }
    table { width: 100%; border-collapse: collapse; font-size: 14px; }
    th, td { padding: 10px 12px; text-align: left; border-bottom: 1px solid #e5e5e5; }
    th { background: #f0f8f0; font-weight: 600; color: #2d5a27; position: sticky; top: 0; }
    tr:hover { background: #fafafa; }
    td:nth-child(3) { white-space: nowrap; }
    .actions { margin-top: 24px; }
    .actions a { display: inline-block; padding: 8px 16px; background: #2d5a27; color: white; text-decoration: none; border-radius: 4px; font-size: 14px; }
    .actions a:hover { background: #1e3f1a; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📧 Newsletter Subscribers</h1>
    <div class="meta">WGIC26 · ${subscribers.length} subscribers · Generated ${new Date().toLocaleDateString('es-ES')}</div>
    <table>
      <thead>
        <tr><th>Email</th><th>Phone</th><th>Date</th></tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
    <div class="actions">
      <a href="?format=csv">⬇ Download CSV</a>
    </div>
  </div>
</body>
</html>`;
}

export async function GET(request: NextRequest) {
  try {
    const { source, subscribers } = await getAllSubscribers();
    const format = request.nextUrl.searchParams.get('format') ?? 'json';

    if (format === 'csv') {
      const csv = toCsv(subscribers);
      return new NextResponse(csv, {
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="wgic26-subscribers-${new Date().toISOString().slice(0, 10)}.csv"`,
        },
      });
    }

    if (format === 'html') {
      const html = toHtml(subscribers);
      return new NextResponse(html, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    return NextResponse.json({
      ok: true,
      source,
      count: subscribers.length,
      subscribers,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Newsletter subscribers export failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
