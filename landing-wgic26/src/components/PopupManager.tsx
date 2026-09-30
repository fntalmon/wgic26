"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NewsletterPopup } from "@/components/NewsletterPopup";

const NEWSLETTER_KEY = "wgic26-newsletter-popup-dismissed";
const SHOW_DELAY_MS = 4000;

// Muestra como máximo un pop-up por página (el de newsletter).
// Se marca como mostrado al aparecer (localStorage).
export function PopupManager() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const shownForPath = useRef<string | null>(null);

  useEffect(() => {
    if (shownForPath.current === pathname) return;
    // Nunca interrumpir el embudo de registro con pop-ups.
    if (pathname.startsWith("/registration")) return;

    if (localStorage.getItem(NEWSLETTER_KEY)) return;

    const timer = setTimeout(() => {
      localStorage.setItem(NEWSLETTER_KEY, "1");
      shownForPath.current = pathname;
      setActive(true);
    }, SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [pathname]);

  const dismiss = () => setActive(false);

  return <>{active && <NewsletterPopup onDismiss={dismiss} />}</>;
}
