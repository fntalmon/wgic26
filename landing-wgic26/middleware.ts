import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isValidLocale, localeCookieName } from "@/i18n/config";

function detectPreferredLocale(request: NextRequest) {
  const existing = request.cookies.get(localeCookieName)?.value;
  if (isValidLocale(existing)) {
    return existing;
  }

  const header = request.headers.get("accept-language");
  if (!header) {
    return defaultLocale;
  }

  const normalized = header.toLowerCase();
  if (normalized.includes("es")) {
    return "es";
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const current = request.cookies.get(localeCookieName)?.value;

  if (!isValidLocale(current)) {
    response.cookies.set(localeCookieName, detectPreferredLocale(request), {
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365,
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|img).*)"],
};
