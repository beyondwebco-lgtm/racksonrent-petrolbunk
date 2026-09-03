"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { POPULAR_CATEGORIES, CategoryItem } from "@/data/categories";

export default function PopularCategories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const totalItems = POPULAR_CATEGORIES.length;

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  // Autoplay timer (4.5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffDistance = touchStartX - touchEndX;

    if (diffDistance > 40) {
      nextSlide();
    } else if (diffDistance < -40) {
      prevSlide();
    }
    setTouchStartX(null);
  };

  // Card click handler
  const handleCardClick = (diff: number) => {
    if (diff === 0) {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else if (diff === 1) {
      nextSlide();
    } else if (diff === -1) {
      prevSlide();
    }
  };

  return (
    <section className="section-padding bg-[#FFFDF5] overflow-hidden" id="products">
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 animate-reveal-up">
          <span className="inline-flex rounded-full bg-[#FFFBCC] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[#650000] border border-[#F0E2E4] shadow-xs">
            Products &amp; Categories
          </span>
          <h2 className="section-title-dm mt-4 text-[#650000]">
            Popular Product Categories
          </h2>
          <p className="body-copy mx-auto mt-3 max-w-2xl text-[#5F5F5F]">
            Explore example products and health essentials featured across partner retail spaces.
          </p>
        </div>

        {/* Slideshow Container */}
        <div
          className="relative max-w-5xl mx-auto px-2 sm:px-4 py-4 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous categories"
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#650000] text-white border-2 border-[#650000] flex items-center justify-center shadow-lg transition-all hover:bg-[#800000] hover:scale-105 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next categories"
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#650000] text-white border-2 border-[#650000] flex items-center justify-center shadow-lg transition-all hover:bg-[#800000] hover:scale-105 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
          </button>

          {/* Slideshow Track Container */}
          <div className="relative w-full h-[460px] sm:h-[510px] flex items-center justify-center overflow-hidden">
            {POPULAR_CATEGORIES.map((cat: CategoryItem, index: number) => {
              let diff = index - activeIndex;

              // Handle circular looping so end/start items wrap around smoothly
              if (diff > totalItems / 2) {
                diff -= totalItems;
              } else if (diff < -totalItems / 2) {
                diff += totalItems;
              }

              // Display only active card, previous card, and next card
              if (Math.abs(diff) > 1) {
                return null;
              }

              const isMaroon = index % 2 === 0;
              const isCentered = diff === 0;
              const translateXVal = diff * 75;
              const scaleVal = isCentered ? 1 : 0.35;
              const opacityVal = isCentered ? 1 : 0.5;
              const filterVal = isCentered ? "blur(0px)" : "blur(4px)";
              const zIndexVal = isCentered ? 30 : 10;

              return (
                <div
                  key={cat.id}
                  onClick={() => handleCardClick(diff)}
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateXVal}%) scale(${scaleVal})`,
                    opacity: opacityVal,
                    filter: filterVal,
                    zIndex: zIndexVal,
                    transition: "transform 600ms cubic-bezier(0.25, 1, 0.5, 1), opacity 600ms ease, filter 600ms ease",
                  }}
                  className={`group absolute top-1/2 left-1/2 w-[82vw] max-w-[310px] sm:max-w-[350px] h-[430px] sm:h-[480px] cursor-pointer rounded-[24px] shadow-2xl overflow-hidden border-2 transition-all duration-300 ${
                    isMaroon
                      ? "border-[#650000] shadow-[#650000]/20"
                      : "border-[#E6D900] shadow-[#E6D900]/20"
                  }`}
                >
                  {/* Full-Length Background Image */}
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    quality={85}
                    sizes="(max-width: 640px) 82vw, 350px"
                    loading="lazy"
                    className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  />

                  {/* Top Subtle Vignette */}
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                  {/* Badge */}
                  {cat.badge && (
                    <div className="absolute top-4 left-4 z-20">
                      <span
                        className={`inline-flex items-center text-[11px] sm:text-xs font-extrabold px-3 py-1 rounded-full shadow-md backdrop-blur-md border ${
                          isMaroon
                            ? "bg-[#650000]/90 text-white border-white/20"
                            : "bg-[#FAFA33] text-[#650000] border-[#E6D900]"
                        }`}
                      >
                        {cat.badge}
                      </span>
                    </div>
                  )}

                  {/* Bottom Gradient Scrim Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F0202] via-[#1F0202]/75 via-35% to-transparent pointer-events-none" />

                  {/* Content Overlay: Main Title and Explore Spaces */}
                  <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end">
                    {/* Main Title */}
                    <h3 className="font-bold text-xl sm:text-2xl text-white leading-tight mb-4 drop-shadow-md group-hover:text-[#FAFA33] transition-colors">
                      {cat.name}
                    </h3>

                    {/* Explore Spaces Action */}
                    <div className="flex items-center">
                      <div
                        className={`inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold px-4 py-2.5 rounded-full transition-all duration-300 shadow-lg ${
                          isMaroon
                            ? "bg-[#FAFA33] text-[#650000] hover:bg-white group-hover:shadow-[#FAFA33]/30"
                            : "bg-white text-[#650000] hover:bg-[#FAFA33] group-hover:shadow-white/30"
                        }`}
                      >
                        <span>Explore Spaces</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {POPULAR_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === activeIndex
                    ? "w-8 bg-[#650000]"
                    : "w-2.5 bg-[#650000]/25 hover:bg-[#650000]/50"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

