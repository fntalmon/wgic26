import { NextRequest, NextResponse } from 'next/server';
import { getNewsletterStats } from '@/lib/newsletter-metrics';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function toPositiveInteger(value: string | null, fallback: number): number {
  const parsed = Number(value ?? fallback);
  if (!Number.isFinite(parsed) || parsed <= 0) {
    return fallback;
  }

  return Math.floor(parsed);
}

function isAuthorized(request: NextRequest): boolean {
  const secret = process.env.NEWSLETTER_STATS_SECRET;
  if (!secret) {
    return true;
  }

  const authHeader = request.headers.get('authorization') ?? '';
  const queryToken = request.nextUrl.searchParams.get('token') ?? '';
  return authHeader === `Bearer ${secret}` || queryToken === secret;
}

export async function GET(request: NextRequest) {
  try {
    if (!isAuthorized(request)) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const days = toPositiveInteger(request.nextUrl.searchParams.get('days'), 7);
    const weeks = toPositiveInteger(request.nextUrl.searchParams.get('weeks'), 12);
    const stats = await getNewsletterStats(days, weeks);

    return NextResponse.json({
      ok: true,
      ...stats,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Newsletter stats failed:', error);

    return NextResponse.json(
      {
        ok: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}