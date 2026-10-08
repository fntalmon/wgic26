import { defaultLocale, type AppLocale } from "@/i18n/config";

export const PROGRAM_API_BASE = "https://networking.barter.es/programapi";
export const PROGRAM_TOKEN = "3a10b5a8a9c3c728dd5ac31703c7095a";
export const PROGRAM_EVENT_ID = "562";

// The event only has Spanish and English configured (event.php -> languages).
// English is the API default; other site locales (ca, pt, fr) fall back to it.
const PROGRAM_LANGUAGE_IDS: Partial<Record<AppLocale, number>> = { es: 1 };

type Json = Record<string, unknown>;
type Params = Record<string, string | number>;

function isEmpty(value: unknown) {
  return value === null || value === undefined || value === "";
}

function buildUrl(endpoint: string, params: Params, languageId?: number) {
  const query = new URLSearchParams({
    ...Object.fromEntries(
      Object.entries(params).map(([k, v]) => [k, String(v)])
    ),
    idevent: PROGRAM_EVENT_ID,
    token: PROGRAM_TOKEN,
  });
  if (languageId) query.set("idlanguage", String(languageId));
  return `${PROGRAM_API_BASE}/${endpoint}?${query.toString()}`;
}

/** Items in lists are matched by their first `id*` property (idsession, idtrack...). */
function idKey(item: Json) {
  return Object.keys(item).find((k) => k.startsWith("id"));
}

/**
 * Overlays `translated` on top of `base`, ignoring empty translated values so
 * untranslated fields keep their English text. Arrays of objects are merged
 * item by item using their id property.
 */
function overlay(base: unknown, translated: unknown): unknown {
  if (isEmpty(translated)) return base;

  if (Array.isArray(base) && Array.isArray(translated)) {
    const first = base.find((x) => x && typeof x === "object") as Json | undefined;
    const key = first && idKey(first);
    if (!key) return base;
    const byId = new Map(
      translated
        .filter((x): x is Json => !!x && typeof x === "object")
        .map((x) => [String(x[key]), x])
    );
    return base.map((item) => {
      const match = byId.get(String((item as Json)[key]));
      return match ? overlay(item, match) : item;
    });
  }

  if (
    base && typeof base === "object" && !Array.isArray(base) &&
    translated && typeof translated === "object" && !Array.isArray(translated)
  ) {
    const result: Json = { ...(base as Json) };
    for (const [k, v] of Object.entries(translated as Json)) {
      result[k] = k in result ? overlay(result[k], v) : v;
    }
    return result;
  }

  return translated;
}

async function request<T>(url: string, revalidate: number): Promise<T> {
  const res = await fetch(url, { next: { revalidate } });
  if (!res.ok) throw new Error(`Program API ${res.status}: ${url.split("?")[0]}`);
  return res.json();
}

/**
 * Fetches a program API endpoint in the visitor's language. The English
 * response is always the base so anything not yet translated in the program
 * backend (titles, tracks, bios...) still shows up instead of going blank.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchProgram<T = any>(
  endpoint: string,
  locale: AppLocale | string,
  params: Params = {},
  revalidate = 60
): Promise<T> {
  const languageId = PROGRAM_LANGUAGE_IDS[locale as AppLocale];
  const base = request<T>(buildUrl(endpoint, params), revalidate);
  if (!languageId || locale === defaultLocale) return base;

  const [en, localized] = await Promise.all([
    base,
    request<T>(buildUrl(endpoint, params, languageId), revalidate).catch(() => null),
  ]);
  return (localized ? overlay(en, localized) : en) as T;
}
