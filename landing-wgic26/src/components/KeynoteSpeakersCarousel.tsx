"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface Speaker {
  id: string;
  image: string;
  name: string;
}

const DEFAULT_AUTOPLAY_DELAY = 3000;

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("") || "?";

export function KeynoteSpeakersCarousel({
  speakers,
  autoPlayDelay = DEFAULT_AUTOPLAY_DELAY,
}: {
  speakers: Speaker[];
  autoPlayDelay?: number;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);

  const advance = useCallback(() => {
    if (!emblaApi) return;
    if (emblaApi.canScrollNext()) {
      emblaApi.scrollNext();
    } else {
      emblaApi.scrollTo(0);
    }
  }, [emblaApi]);

  const startAutoplay = useCallback(() => {
    if (!emblaApi) return;
    stopAutoplay();
    autoplayRef.current = setInterval(advance, autoPlayDelay);
  }, [emblaApi, advance, autoPlayDelay, stopAutoplay]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;

    startAutoplay();

    const handlePointerDown = () => stopAutoplay();
    emblaApi.on("pointerDown", handlePointerDown);

    return () => {
      stopAutoplay();
      emblaApi.off("pointerDown", handlePointerDown);
    };
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const scrollTo = useCallback(
    (index: number) => {
      stopAutoplay();
      emblaApi?.scrollTo(index);
      startAutoplay();
    },
    [emblaApi, startAutoplay, stopAutoplay],
  );

  const scrollPrev = useCallback(() => {
    stopAutoplay();
    emblaApi?.scrollPrev();
    startAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  const scrollNext = useCallback(() => {
    stopAutoplay();
    emblaApi?.scrollNext();
    startAutoplay();
  }, [emblaApi, startAutoplay, stopAutoplay]);

  return (
    <div className="flex flex-col gap-6">
      <div
        className="overflow-hidden"
        ref={emblaRef}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        <div className="flex gap-4 sm:gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative shrink-0 grow-0 min-w-0 basis-full sm:basis-[calc((100%-1*1.5rem)/2)] lg:basis-[calc((100%-3*1.5rem)/4)] aspect-3/4 overflow-hidden rounded-md"
            >
              {speaker.image ? (
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-white/10 grid place-items-center text-4xl font-semibold text-white/80">
                  {getInitials(speaker.name)}
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="h-0.5 w-8 bg-potus mb-3 transition-all duration-500 group-hover:w-[calc(100%-2rem)]" />
                <span className="uppercase text-sm sm:text-base font-semibold text-white leading-tight block">
                  {speaker.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-6 bg-potus" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-opacity disabled:opacity-30 hover:bg-white/10"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-opacity disabled:opacity-30 hover:bg-white/10"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
