import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { defaultLocale, isValidLocale, localeCookieName } from '@/i18n/config';
import { fetchProgram } from '@/lib/program-api';

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');

  if (!id || !/^\d+$/.test(id)) {
    return NextResponse.json({ error: 'Invalid session id' }, { status: 400 });
  }

  try {
    const cookieLocale = (await cookies()).get(localeCookieName)?.value;
    const locale = isValidLocale(cookieLocale) ? cookieLocale : defaultLocale;

    const data = await fetchProgram<{
      speakers?: unknown[];
      presenters?: unknown[];
      moderators?: unknown[];
    }>('session.php', locale, { idsession: id });

    return NextResponse.json({
      speakers: data.speakers || [],
      presenters: data.presenters || [],
      moderators: data.moderators || [],
    });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch session' }, { status: 502 });
  }
}
