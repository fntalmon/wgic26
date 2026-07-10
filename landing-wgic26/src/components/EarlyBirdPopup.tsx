"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const DISMISS_KEY = "wgic26-early-bird-popup-dismissed";
const SHOW_DELAY_MS = 4000;

export function EarlyBirdPopup() {
  const t = useTranslations("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISS_KEY)) return;

    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  const dismiss = () => {
    setOpen(false);
    localStorage.setItem(DISMISS_KEY, "1");
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
      onClick={dismiss}
    >
      <div
        className="relative w-full max-w-md bg-cactus shadow-[inset_0px_0px_0px_2px_black] p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={dismiss}
          aria-label={t("earlyBirdPopupClose")}
          className="absolute top-4 right-4 text-white/70 transition-colors hover:text-potus"
        >
          <X className="size-5" />
        </button>

        <div className="inline-flex items-center gap-2 bg-potus text-black text-[10px] font-bold uppercase tracking-[2px] px-3 py-1">
          <Zap className="size-3 fill-black" />
          {t("earlyBirdPopupEyebrow")}
        </div>

        <h2 className="mt-5 text-2xl md:text-3xl font-bold text-white uppercase leading-tight">
          {t("earlyBirdPopupTitle")}
        </h2>

        <p className="mt-3 text-sm text-white/80 leading-relaxed">
          {t("earlyBirdPopupBody")}
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link href="/registration" onClick={dismiss}>
            <Button variant="default" size="lg">
              {t("earlyBirdPopupCta")}
            </Button>
          </Link>
          <button
            type="button"
            onClick={dismiss}
            className="text-xs text-white/60 uppercase tracking-[2px] underline underline-offset-4 hover:text-white"
          >
            {t("earlyBirdPopupDismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}
