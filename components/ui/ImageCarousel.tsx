"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  interval?: number;
  aspectRatio?: string;
  badgeText?: string;
  showCaption?: boolean;
  className?: string;
  objectFit?: "cover" | "contain";
  objectPosition?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  interval = 4000,
  aspectRatio = "aspect-[4/3]",
  badgeText,
  showCaption = false,
  className = "",
  objectFit = "cover",
  objectPosition = "object-center",
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (!images || images.length === 0) return null;

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div className={`relative w-full ${aspectRatio} rounded-sm overflow-hidden bg-neutral-100 border border-neutral-200/80`}>
        {images.map((img, idx) => (
          <div
            key={img.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              priority={idx === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`${objectFit === "contain" ? "object-contain" : "object-cover"} ${objectPosition}`}
            />
          </div>
        ))}

        {badgeText && (
          <span className="absolute top-2.5 left-2.5 z-20 bg-white/95 text-pso-green text-[10px] font-medium px-2 py-0.5 rounded-sm border border-neutral-200 shadow-xs">
            {badgeText}
          </span>
        )}

        {/* Carousel indicator dots */}
        {images.length > 1 && (
          <div className="absolute bottom-2.5 right-2.5 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2 py-1 rounded-full">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  idx === currentIndex ? "bg-white w-3.5" : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Prev / Next controls on hover */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-white/80 hover:bg-white text-neutral-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-xs"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </>
        )}
      </div>

      {showCaption && images[currentIndex]?.caption && (
        <p className="text-xs text-[#574F41] pt-2 leading-snug transition-opacity duration-300">
          {images[currentIndex].caption}
        </p>
      )}
    </div>
  );
};
