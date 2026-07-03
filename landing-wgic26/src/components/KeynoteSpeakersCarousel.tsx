"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface Speaker {
  id: string;
  image: string;
  name: string;
}

export function KeynoteSpeakersCarousel({ speakers }: { speakers: Speaker[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

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

  return (
    <div className="flex flex-col gap-6">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 sm:gap-6">
          {speakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group relative shrink-0 grow-0 basis-[62%] sm:basis-[36%] md:basis-[28%] lg:basis-[22%] aspect-3/4 overflow-hidden rounded-md"
            >
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                sizes="(min-width: 1024px) 22vw, (min-width: 768px) 28vw, (min-width: 640px) 36vw, 62vw"
                className="object-cover grayscale transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:scale-105"
              />
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
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-6 bg-potus" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canScrollPrev}
            aria-label="Previous"
            className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center transition-opacity disabled:opacity-30 hover:bg-white/10"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            onClick={() => emblaApi?.scrollNext()}
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
