"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Slide = {
  id: string;
  desktopImage: string;
  mobileImage: string;
  alt: string;
  link: string;
};

type HeroSliderProps = {
  slides: Slide[];
  autoPlayInterval?: number;
};

export function HeroSlider({ slides, autoPlayInterval = 5000 }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-advance slides
  useEffect(() => {
    if (isPaused || slides.length <= 1) return;

    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPaused, goToNext, autoPlayInterval, slides.length]);

  if (slides.length === 0) return null;

  const currentSlide = slides[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Spacer for aspect ratio */}
      <div className="hidden lg:block w-full aspect-[3/1]" />
      <div className="block lg:hidden w-full aspect-[4/5]" />

      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Link href={currentSlide.link} className="block">
            {/* Desktop Image */}
            <div className="hidden lg:block relative w-full aspect-[3/1]">
              <Image
                src={currentSlide.desktopImage}
                alt={currentSlide.alt}
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
            </div>

            {/* Mobile Image */}
            <div className="block lg:hidden relative w-full aspect-[4/5]">
              <Image
                src={currentSlide.mobileImage}
                alt={currentSlide.alt}
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
            </div>
          </Link>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/80 hover:bg-white text-text-primary transition-colors duration-200 rounded-none"
            aria-label="Previous slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 lg:w-6 lg:h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/80 hover:bg-white text-text-primary transition-colors duration-200 rounded-none"
            aria-label="Next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 lg:w-6 lg:h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* Slide Indicators */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 lg:gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white scale-110"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
