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

function localeFromAcceptLanguage(header: string | null) {
  if (!header) return null;
  const normalized = header.toLowerCase();
  if (normalized.includes("ca")) return "ca";
  if (normalized.includes("pt")) return "pt";
  if (normalized.includes("fr")) return "fr";
  if (normalized.includes("es")) return "es";
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
  const response = NextResponse.next();

  // Respect a manual language choice; otherwise detect from the browser/region.
  if (request.cookies.get(localeManualCookieName)?.value) {
    return response;
  }

  const preferred = detectPreferredLocale(request);
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
