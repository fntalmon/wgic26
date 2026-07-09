import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  localeCookieName,
  localeManualCookieName,
} from "@/i18n/config";

const SPANISH_SPEAKING_COUNTRIES = new Set([
  "ES", "MX", "AR", "CO", "PE", "CL", "VE", "EC", "BO", "PY", "UY", "CR", "PA",
  "GT", "HN", "SV", "NI", "DO", "CU", "PR",
]);

const PORTUGUESE_SPEAKING_COUNTRIES = new Set([
  "PT", "BR", "AO", "MZ", "CV", "GW", "ST", "TL",
]);

const FRENCH_SPEAKING_COUNTRIES = new Set([
  "FR", "BE", "CH", "CA", "MC", "LU", "CD", "CI", "SN", "ML", "BF", "NE", "TG",
  "BJ", "GA", "CM", "MG", "MA", "DZ", "TN", "HT", "RE", "GP", "MQ", "GF", "PF",
  "NC", "WF", "PM",
]);

function localeFromCountry(countryCode: string | null) {
  if (!countryCode) return null;
  const code = countryCode.toUpperCase();
  if (SPANISH_SPEAKING_COUNTRIES.has(code)) return "es";
  if (PORTUGUESE_SPEAKING_COUNTRIES.has(code)) return "pt";
  if (FRENCH_SPEAKING_COUNTRIES.has(code)) return "fr";
  return null;
}

const SUPPORTED_HEADER_LOCALES = new Set(["ca", "pt", "fr", "es"]);

function localeFromAcceptLanguage(header: string | null) {
  if (!header) return null;

  // Parse "es-AR,es;q=0.9,en-CA;q=0.8" into primary subtags ordered by
  // quality, e.g. ["es", "es", "en"], and match the first supported one.
  // Matching on the full primary subtag (not a raw substring) avoids false
  // positives like "en-CA" being mistaken for Catalan ("ca").
  const entries = header
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";q=");
      const quality = qPart ? parseFloat(qPart) : 1;
      return { primary: tag.trim().toLowerCase().split("-")[0], quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { primary } of entries) {
    if (SUPPORTED_HEADER_LOCALES.has(primary)) return primary;
  }

  return null;
}

function detectPreferredLocale(request: NextRequest) {
  // First honour the browser's language preference when it matches one of
  // our supported locales (e.g. Catalan in Spain, Portuguese in Brazil).
  const headerLocale = localeFromAcceptLanguage(
    request.headers.get("accept-language")
  );
  if (headerLocale) return headerLocale;

  // Fall back to country-level detection (Vercel / Cloudflare / common proxy headers).
  const countryCode =
    request.headers.get("x-vercel-ip-country") ??
    request.headers.get("cf-ipcountry") ??
    request.headers.get("x-country");
  return localeFromCountry(countryCode) ?? defaultLocale;
}

export function middleware(request: NextRequest) {
  // Respect a manual language choice; otherwise detect from the browser/region.
  if (request.cookies.get(localeManualCookieName)?.value) {
    return NextResponse.next();
  }

  const preferred = detectPreferredLocale(request);

  // Mutate the incoming request's cookie too, not just the outgoing response's,
  // so the current request's server render already sees the detected locale
  // instead of falling back to defaultLocale for the first page view.
  request.cookies.set(localeCookieName, preferred);

  const response = NextResponse.next({ request });
  response.cookies.set(localeCookieName, preferred, {
    path: "/",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 365,
  });

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|img).*)"],
};
