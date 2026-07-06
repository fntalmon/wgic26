"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

interface EarlyBirdBannerProps {
  namespace?: "home" | "registrationPage";
}

export function EarlyBirdBanner({ namespace = "home" }: EarlyBirdBannerProps) {
  const t = useTranslations(namespace);
  return (
    <div className="w-full flex justify-center py-6 px-4">
      <Link
        href="/registration"
        className="bg-transparent text-white py-5 px-7 text-center font-light uppercase tracking-[4px] text-[11px] border border-[#2e4a3b] transition-all duration-500 ease hover:border-[#eeff00] hover:text-[#eeff00]"
      >
        {t("earlyBirdBanner")}
      </Link>
    </div>
  );
}
