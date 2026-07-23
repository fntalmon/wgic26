"use client";

import { useEffect, useState, useCallback, type ReactNode } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BannerSlide {
  /** Imagen para desktop / tablet (≥414 px). */
  desktop: string;
  /** Imagen para mobile (<414 px). */
  mobile: string;
  /** Texto alternativo accesible. */
  alt: string;
  /** Si se define, el slide será clickeable. */
  href?: string;
  /** Contenido (texto/CTA) superpuesto a la imagen. */
  content?: ReactNode;
  /** Lado de la imagen donde ubicar el contenido (según la zona "tranquila" de la foto). */
  contentAlign?: "left" | "right";
  /** Agrega un velo oscuro extra de ese lado (o arriba), para fotos sin zona tranquila natural o con cielo muy claro. */
  scrimSide?: "left" | "right" | "top";
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
      className="relative w-full h-[calc(100dvh-5rem)] min-h-120 md:h-[calc(100dvh-5.5rem)] lg:h-[calc(100dvh-8rem)] overflow-hidden bg-black rounded-b-2xl md:rounded-b-4xl"
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
            {/* Desktop: cover, anclado arriba para preservar la zona "tranquila" de cada foto donde va el texto. */}
            <div className="hidden min-[414px]:block absolute inset-0">
              <Image
                src={encodeURI(slide.desktop)}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
            {/* Mobile: cover también, para llenar el banner a pantalla completa sin huecos. */}
            <div className="absolute inset-0 block min-[414px]:hidden">
              <Image
                src={encodeURI(slide.mobile)}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover object-top"
                sizes="100vw"
              />
            </div>
            {/* Tinte de marca: unifica el tono de las 3 fotos y mejora contraste con los controles. */}
            <div className="absolute inset-0 bg-cactus/15 mix-blend-multiply" />
            <div className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
            {/* Velo extra para fotos sin zona tranquila natural donde apoyar el texto. */}
            {slide.scrimSide === "left" && (
              <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/10 to-transparent" />
            )}
            {slide.scrimSide === "right" && (
              <div className="absolute inset-0 bg-linear-to-l from-black/60 via-black/10 to-transparent" />
            )}
            {slide.scrimSide === "top" && (
              <div className="absolute inset-0 bg-linear-to-b from-black/55 via-black/10 to-transparent" />
            )}
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

            {slide.content && (
              <div
                className={cn(
                  "absolute inset-0 z-10 flex items-start px-6 py-6 sm:px-14 sm:py-10 md:px-20 md:py-14 lg:px-24 lg:py-16",
                  slide.contentAlign === "right"
                    ? "justify-end text-right"
                    : "justify-start text-left",
                )}
              >
                <div className="max-w-72 sm:max-w-sm md:max-w-lg lg:max-w-xl">
                  {slide.content}
                </div>
              </div>
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
            className="hidden sm:flex absolute z-20 left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="hidden sm:flex absolute z-20 right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          {/* Dots inferiores */}
          <div className="absolute z-20 flex space-x-3 -translate-x-1/2 bottom-[30px] left-1/2">
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
                    ? "bg-white"
                    : "bg-white/50 hover:bg-white/80",
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
