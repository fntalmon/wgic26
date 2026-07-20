"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { EarlyBirdPopup } from "@/components/EarlyBirdPopup";
import { NewsletterPopup } from "@/components/NewsletterPopup";

// Reutiliza la clave histórica del early bird para no volver a mostrarlo
// a quienes ya lo cerraron antes de la rotación.
const EARLY_BIRD_KEY = "wgic26-early-bird-popup-dismissed";
const NEWSLETTER_KEY = "wgic26-newsletter-popup-dismissed";
const SHOW_DELAY_MS = 4000;

type PopupId = "early-bird" | "newsletter";

// Muestra como máximo un pop-up por página, rotando: primero early bird,
// en la siguiente navegación el de newsletter, y después ninguno más.
// Cada pop-up se marca como mostrado al aparecer (localStorage).
export function PopupManager() {
  const pathname = usePathname();
  const [active, setActive] = useState<PopupId | null>(null);
  const shownForPath = useRef<string | null>(null);

  useEffect(() => {
    if (shownForPath.current === pathname) return;

    const earlyBirdShown = localStorage.getItem(EARLY_BIRD_KEY);
    const newsletterShown = localStorage.getItem(NEWSLETTER_KEY);
    const next: PopupId | null = !earlyBirdShown
      ? "early-bird"
      : !newsletterShown
        ? "newsletter"
        : null;
    if (!next) return;

    const timer = setTimeout(() => {
      localStorage.setItem(
        next === "early-bird" ? EARLY_BIRD_KEY : NEWSLETTER_KEY,
        "1",
      );
      shownForPath.current = pathname;
      setActive(next);
    }, SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  const dismiss = () => setActive(null);

  return (
    <>
      {active === "early-bird" && <EarlyBirdPopup onDismiss={dismiss} />}
      {active === "newsletter" && <NewsletterPopup onDismiss={dismiss} />}
    </>
  );
}
