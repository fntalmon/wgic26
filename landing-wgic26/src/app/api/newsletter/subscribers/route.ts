import { NextResponse } from 'next/server';
import { getAllSubscribers } from '@/lib/newsletter-metrics';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const { source, subscribers } = await getAllSubscribers();

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
