import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";
import { defaultLocale, isValidLocale, localeCookieName } from "./config";

export default getRequestConfig(async () => {
  let locale = defaultLocale;
  try {
    const cookieStore = await cookies();
    const localeFromCookie = cookieStore.get(localeCookieName)?.value;
    if (isValidLocale(localeFromCookie)) {
      locale = localeFromCookie;
    }
  } catch {
    // During static build, cookies() may not be available
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
