"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { X, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsletterPopupProps {
  onDismiss: () => void;
}

export function NewsletterPopup({ onDismiss }: NewsletterPopupProps) {
  const t = useTranslations("home");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
      role="dialog"
      aria-modal="true"
      onClick={onDismiss}
    >
      <div
        className="relative w-full max-w-md bg-cactus shadow-[inset_0px_0px_0px_2px_black] p-8 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onDismiss}
          aria-label={t("newsletterPopupClose")}
          className="absolute top-4 right-4 text-white/70 transition-colors hover:text-potus"
        >
          <X className="size-5" />
        </button>

        <div className="inline-flex items-center gap-2 bg-potus text-black text-[10px] font-bold uppercase tracking-[2px] px-3 py-1">
          <Mail className="size-3" />
          {t("newsletterPopupEyebrow")}
        </div>

        <h2 className="mt-5 text-2xl md:text-3xl font-bold text-white uppercase leading-tight">
          {t("newsletterPopupTitle")}
        </h2>

        <p className="mt-3 text-sm text-white/80 leading-relaxed">
          {t("newsletterPopupBody")}
        </p>

        <div className="mt-7 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <Link href="/#newsletter" onClick={onDismiss}>
            <Button variant="default" size="lg">
              {t("newsletterPopupCta")}
            </Button>
          </Link>
          <button
            type="button"
            onClick={onDismiss}
            className="text-xs text-white/60 uppercase tracking-[2px] underline underline-offset-4 hover:text-white"
          >
            {t("newsletterPopupDismiss")}
          </button>
        </div>
      </div>
    </div>
  );
}
