"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Zap } from "lucide-react";

interface EarlyBirdBannerProps {
  namespace?: "home" | "registrationPage";
}

export function EarlyBirdBanner({ namespace = "home" }: EarlyBirdBannerProps) {
  const t = useTranslations(namespace);
  return (
    <div className="w-full flex justify-center py-6 px-4 bg-cactus">
      <Link
        href="/registration"
        className="group inline-flex items-center gap-3 bg-potus text-black py-4 px-7 text-center font-bold uppercase tracking-[2px] text-xs md:text-sm shadow-[inset_0px_0px_0px_2px_black] transition-transform duration-300 ease hover:-translate-x-1 hover:-translate-y-1"
      >
        <Zap className="size-4 shrink-0 fill-black" />
        {t("earlyBirdBanner")}
      </Link>
    </div>
  );
}
