"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { Supporter } from "@/data/supporters";

interface SupportersCarouselProps {
  supporters: Supporter[];
  visibleCount?: number;
  secondsPerItem?: number;
  variant?: "dark" | "light";
  // Caja fija del logo (alto + ancho). Por defecto, igual al tier "Media Partners".
  logoBoxClassName?: string;
}

export function SupportersCarousel({
  supporters,
  visibleCount = 5,
  secondsPerItem = 3,
  variant = "dark",
  logoBoxClassName = "h-9 w-20 md:h-12 md:w-24",
}: SupportersCarouselProps) {
  // Precargar logos para evitar que aparezcan vacíos al inicio.
  useEffect(() => {
    supporters.forEach((supporter) => {
      const img = new window.Image();
      img.src = supporter.src;
    });
  }, [supporters]);

  const isLight = variant === "light";

  if (supporters.length <= visibleCount) {
    return (
      <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-12">
        {supporters.map((supporter) => (
          <a
            key={supporter.href}
            href={supporter.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 flex items-center justify-center ${logoBoxClassName}`}
          >
            <Image
              src={supporter.src}
              alt={supporter.alt}
              width={280}
              height={200}
              loading="eager"
              className={`h-full w-full object-contain ${supporter.imageClassName ?? ""}`}
            />
          </a>
        ))}
      </div>
    );
  }

  const track = [...supporters, ...supporters, ...supporters];
  const duration = supporters.length * secondsPerItem;

  return (
    <div className="relative w-full overflow-hidden min-h-[80px]">
      <div
        className={`flex items-center gap-6 md:gap-10 lg:gap-12 animate-supporter-scroll will-change-transform ${isLight ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animationDuration: `${duration}s`,
          width: "max-content",
          backfaceVisibility: "hidden",
        }}
      >
        {track.map((supporter, i) => (
          <a
            key={`${supporter.href}-${i}`}
            href={supporter.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 flex items-center justify-center ${logoBoxClassName}`}
          >
            <Image
              src={supporter.src}
              alt={supporter.alt}
              width={280}
              height={200}
              loading="eager"
              className={`h-full w-full object-contain ${supporter.imageClassName ?? ""}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
