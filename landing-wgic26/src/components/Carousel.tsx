"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"

interface CarouselProps {
  images: string[]
  alt?: string
}

export default function Carousel({ images, alt = "carousel image" }: CarouselProps) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  // Preload images to avoid slow switching when user clicks
  useEffect(() => {
    images.forEach((src) => {
      const img = new window.Image()
      img.src = encodeURI(src)
    })
  }, [images])

  useEffect(() => {
    if (isPaused) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000)
    return () => clearInterval(id)
  }, [images.length, isPaused])

  function prev() {
    setIndex((i) => (i - 1 + images.length) % images.length)
  }

  function next() {
    setIndex((i) => (i + 1) % images.length)
  }

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      <div
        className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg bg-black/5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Image
          src={encodeURI(images[index])}
          alt={`${alt} ${index + 1}`}
          fill={false}
          width={1600}
          height={900}
          className="w-full h-full object-cover"
          priority={index === 0}
        />
      </div>

      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
      >
        ◀
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
      >
        ▶
      </button>

      <div className="mt-2 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2 h-2 rounded-full ${i === index ? "bg-yellow-500" : "bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  )
}
