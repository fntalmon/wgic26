"use client";

import { useState, useRef, useEffect } from "react";
import { localeCookieName, locales, type AppLocale } from "@/i18n/config";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { ChevronDown } from "lucide-react";

const labelByLocale: Record<AppLocale, string> = {
  en: "English",
  es: "Español",
};

export function LanguageSwitcher() {
  const locale = useLocale() as AppLocale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const changeLocale = (nextLocale: AppLocale) => {
    if (nextLocale === locale) {
      setOpen(false);
      return;
    }

    document.cookie = `${localeCookieName}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;

    startTransition(() => {
      router.refresh();
    });
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        disabled={isPending}
        className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-black/20 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/15 transition-colors"
      >
        {labelByLocale[locale]}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute right-0 mt-1 w-28 rounded-lg border border-white/20 bg-black/90 backdrop-blur-xl py-1 shadow-lg z-50">
          {locales.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => changeLocale(item)}
              className={`w-full px-3 py-2 text-left text-sm transition-colors ${
                locale === item
                  ? "text-white font-medium"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {labelByLocale[item]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
