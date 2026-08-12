"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Zap } from "lucide-react";

interface EarlyBirdBannerProps {
  namespace?: "home" | "registrationPage";
  compact?: boolean;
  fixedBottom?: boolean;
}

export function EarlyBirdBanner({
  namespace = "home",
  compact = false,
  fixedBottom = false,
}: EarlyBirdBannerProps) {
  const t = useTranslations(namespace);
  return (
    <div
      className={`w-full flex justify-center px-4 bg-cactus ${compact ? "py-2" : "py-6"} ${
        fixedBottom ? "fixed bottom-0 left-0 z-50 border-t border-white/15" : ""
      }`}
    >
      <Link
        href="/registration"
        className={`group inline-flex items-center gap-3 bg-potus text-black text-center font-bold uppercase tracking-[2px] shadow-[inset_0px_0px_0px_2px_black] transition-transform duration-300 ease hover:-translate-x-1 hover:-translate-y-1 ${
          compact ? "py-2 px-4 text-[10px] md:text-xs" : "py-4 px-7 text-xs md:text-sm"
        }`}
      >
        <Zap className="size-4 shrink-0 fill-black" />
        {t("earlyBirdBanner")}
      </Link>
    </div>
  );
}
