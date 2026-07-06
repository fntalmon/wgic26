"use client";

import Image from "next/image";

interface Supporter {
  href: string;
  src: string;
  alt: string;
  heightClass: string;
}

interface SupportersCarouselProps {
  supporters: Supporter[];
  visibleCount?: number;
  secondsPerItem?: number;
}

export function SupportersCarousel({
  supporters,
  visibleCount = 5,
  secondsPerItem = 3,
}: SupportersCarouselProps) {
  if (supporters.length <= visibleCount) {
    return (
      <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-12">
        {supporters.map((supporter) => (
          <a
            key={supporter.href}
            href={supporter.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={supporter.src}
              alt={supporter.alt}
              width={280}
              height={200}
              className={`${supporter.heightClass} w-auto object-contain`}
            />
          </a>
        ))}
      </div>
    );
  }

  const track = [...supporters, ...supporters];
  const duration = supporters.length * secondsPerItem;

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex items-center gap-6 md:gap-10 lg:gap-12 animate-supporter-scroll"
        style={{ animationDuration: `${duration}s`, width: "max-content" }}
      >
        {track.map((supporter, i) => (
          <a
            key={`${supporter.href}-${i}`}
            href={supporter.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center justify-center"
          >
            <Image
              src={supporter.src}
              alt={supporter.alt}
              width={280}
              height={200}
              className={`${supporter.heightClass} w-auto object-contain`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
