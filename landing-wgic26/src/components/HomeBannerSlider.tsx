"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BannerSlide {
  /** Imagen para desktop / tablet (≥640 px). */
  desktop: string;
  /** Imagen para mobile (<640 px). */
  mobile: string;
  /** Texto alternativo accesible. */
  alt: string;
  /** Si se define, el slide será clickeable. */
  href?: string;
}

interface HomeBannerSliderProps {
  slides: BannerSlide[];
  /** Intervalo de autoplay en ms. Por defecto 5000 ms. */
  interval?: number;
}

export function HomeBannerSlider({
  slides,
  interval = 5000,
}: HomeBannerSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((i) => (i + 1) % slides.length);
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrent((i) => (i - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Preload de imágenes para evitar saltos en el primer ciclo.
  useEffect(() => {
    slides.forEach((slide) => {
      const desktop = new window.Image();
      desktop.src = encodeURI(slide.desktop);
      const mobile = new window.Image();
      mobile.src = encodeURI(slide.mobile);
    });
  }, [slides]);

  useEffect(() => {
    if (isPaused || slides.length <= 1) return undefined;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [isPaused, interval, next, slides.length]);

  if (!slides.length) return null;

  return (
    <div
      className="relative w-full aspect-640/816 sm:aspect-2700/1208 overflow-hidden bg-white rounded-b-2xl md:rounded-b-4xl"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Home banner"
    >
      {slides.map((slide, i) => {
        const isActive = i === current;

        const images = (
          <>
            {/* Desktop / tablet crop, banner ya trae su propio texto y logos. */}
            <div className="hidden sm:block absolute inset-0">
              <Image
                src={encodeURI(slide.desktop)}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-contain"
                sizes="100vw"
              />
            </div>
            {/* Crop dedicado para mobile. */}
            <div className="absolute inset-0 block sm:hidden">
              <Image
                src={encodeURI(slide.mobile)}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-contain"
                sizes="100vw"
              />
            </div>
          </>
        );

        return (
          <div
            key={i}
            className={cn(
              "absolute inset-0 transition-opacity duration-700 ease-in-out",
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none",
            )}
          >
            {slide.href ? (
              <a
                href={slide.href}
                className="block w-full h-full"
                aria-label={slide.alt}
              >
                {images}
              </a>
            ) : (
              images
            )}
          </div>
        );
      })}

      {slides.length > 1 && (
        <>
          {/* Flechas laterales (solo en tablet/desktop) */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="hidden sm:flex absolute z-20 left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm text-monstera items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="hidden sm:flex absolute z-20 right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/10 hover:bg-black/20 backdrop-blur-sm text-monstera items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots inferiores */}
          <div className="absolute z-20 flex space-x-3 -translate-x-1/2 bottom-3.5 left-1/2">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === current ? "true" : undefined}
                className={cn(
                  "w-3 h-3 rounded-full transition-colors",
                  i === current
                    ? "bg-potus"
                    : "bg-black/20 hover:bg-black/40",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
