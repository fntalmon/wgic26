import { NextRequest, NextResponse } from 'next/server';

const API_BASE = 'https://networking.barter.es/programapi';
const TOKEN = '3a10b5a8a9c3c728dd5ac31703c7095a';
const EVENT_ID = '562';

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');

  if (!id || !/^\d+$/.test(id)) {
    return NextResponse.json({ error: 'Invalid session id' }, { status: 400 });
  }

  try {
    const res = await fetch(
      `${API_BASE}/session.php?idsession=${id}&idevent=${EVENT_ID}&token=${TOKEN}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch session' }, { status: 502 });
    }

    const data = await res.json();

    return NextResponse.json({
      speakers: data.speakers || [],
      presenters: data.presenters || [],
      moderators: data.moderators || [],
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch session' }, { status: 502 });
  }
}
