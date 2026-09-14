"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
}

interface ParcoGallerySliderProps {
  images: GalleryItem[];
  interval?: number;
}

export const ParcoGallerySlider: React.FC<ParcoGallerySliderProps> = ({
  images,
  interval = 2800,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  // Fast & Continuous Autoplay timer
  useEffect(() => {
    if (!images || images.length <= 1) return;

    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [interval, nextSlide, images.length]);

  // Keyboard accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe Handlers for Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 40) {
      nextSlide();
    } else if (distance < -40) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!images || images.length === 0) return null;

  const currentPhoto = images[currentIndex];

  return (
    <div
      className="relative w-full select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-roledescription="carousel"
      aria-label="Total PARCO Station Photography Gallery"
    >
      {/* Full-Width Cinema Viewport with Smooth Horizontal Sliding Track */}
      <div className="relative w-full h-[400px] sm:h-[500px] md:h-[560px] lg:h-[640px] xl:h-[700px] bg-[#07090C] overflow-hidden rounded-xs">
        {/* Sliding flex track */}
        <div
          className="flex h-full w-full transition-transform duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, idx) => (
            <div
              key={img.src}
              className="relative min-w-full h-full flex-shrink-0 flex items-center justify-center overflow-hidden"
            >
              {/* Subtle ambient blur behind */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src={img.src}
                  alt=""
                  fill
                  unoptimized
                  priority
                  sizes="100vw"
                  className="object-cover object-center blur-3xl opacity-25 scale-110"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-[#07090C]/50" />
              </div>

              {/* 100% Complete Uncropped Foreground Photo */}
              <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-6 lg:p-8 z-10">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  unoptimized
                  priority
                  sizes="100vw"
                  className="object-contain object-center drop-shadow-2xl"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Bottom Scrim for Caption */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#07090C]/90 via-[#07090C]/40 to-transparent pointer-events-none z-20" />

        {/* Clean Live Caption */}
        <div className="absolute bottom-7 sm:bottom-9 left-4 sm:left-10 lg:left-14 right-20 sm:right-32 z-30 pointer-events-none transition-opacity duration-300">
          <p className="text-sm sm:text-base lg:text-lg text-neutral-100 font-normal tracking-wide leading-relaxed drop-shadow-md max-w-2xl">
            {currentPhoto.caption}
          </p>
        </div>

        {/* Minimal Floating Navigation Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl group"
          aria-label="Previous slide"
        >
          <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl group"
          aria-label="Next slide"
        >
          <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Minimal Segmented Progress Bar Indicator */}
        <div className="absolute bottom-2.5 sm:bottom-3.5 left-4 sm:left-10 right-4 sm:right-10 z-30 flex items-center gap-1.5 sm:gap-2">
          {images.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className="flex-1 py-1 focus:outline-none group"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div className="relative h-[2.5px] sm:h-[3px] w-full rounded-full bg-white/25 overflow-hidden transition-all group-hover:bg-white/40">
                  <div
                    className={`h-full rounded-full bg-parco-red transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
