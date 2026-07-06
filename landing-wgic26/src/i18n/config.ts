export const locales = ["en", "es", "ca", "pt", "fr"] as const;

export type AppLocale = (typeof locales)[number];

export const defaultLocale: AppLocale = "en";
export const localeCookieName = "NEXT_LOCALE";
export const localeManualCookieName = "NEXT_LOCALE_MANUAL";

export function isValidLocale(value: string | undefined): value is AppLocale {
  return !!value && locales.includes(value as AppLocale);
}
