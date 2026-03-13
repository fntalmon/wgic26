"use client";

import { localeCookieName, locales, type AppLocale } from "@/i18n/config";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const labelByLocale: Record<AppLocale, string> = {
  en: "EN",
  es: "ES",
};

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLocale = (nextLocale: AppLocale) => {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/20 p-1">
      {locales.map((item) => {
        const isActive = locale === item;

        return (
          <button
            key={item}
            type="button"
            onClick={() => changeLocale(item)}
            disabled={isPending}
            className={`min-w-9 rounded-full px-2 py-1 text-xs font-medium transition-colors ${
              isActive
                ? "bg-white text-black"
                : "bg-transparent text-white hover:bg-white/15"
            }`}
            aria-pressed={isActive}
          >
            {labelByLocale[item]}
          </button>
        );
      })}
    </div>
  );
}
