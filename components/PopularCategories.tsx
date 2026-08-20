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
          <div className="relative w-full h-[450px] sm:h-[490px] flex items-center justify-center overflow-hidden">
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
                    transition: "transform 600ms ease, opacity 600ms ease, filter 600ms ease",
                  }}
                  className={`absolute top-1/2 left-1/2 w-[82vw] max-w-[300px] sm:max-w-[340px] cursor-pointer rounded-[24px] shadow-xl overflow-hidden border transition-shadow duration-300 flex flex-col ${
                    isMaroon
                      ? "bg-[#650000] text-white border-[#650000]"
                      : "bg-[#FAFA33] text-[#650000] border-[#E6D900]"
                  }`}
                >
                  {/* Image Container */}
                  <div
                    className={`relative w-full aspect-[4/3] p-3 overflow-hidden flex items-center justify-center bg-white ${
                      isMaroon ? "border-b border-[#650000]" : "border-b border-[#E6D900]"
                    }`}
                  >
                    {cat.badge && (
                      <span
                        className={`absolute top-3 right-3 text-[10px] font-extrabold px-2.5 py-1 rounded-full z-10 shadow-xs ${
                          isMaroon
                            ? "bg-[#FAFA33] text-[#650000] border border-[#E6D900]"
                            : "bg-[#650000] text-white border border-[#650000]"
                        }`}
                      >
                        {cat.badge}
                      </span>
                    )}

                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      quality={70}
                      sizes="(max-width: 640px) 82vw, 340px"
                      loading="lazy"
                      className="object-contain p-2 hover:scale-105 transition-transform duration-500 z-0"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between min-h-[170px]">
                    <div>
                      <h3
                        className={`font-bold text-lg sm:text-xl transition-colors mb-2 ${
                          isMaroon ? "text-white" : "text-[#650000]"
                        }`}
                      >
                        {cat.name}
                      </h3>

                      <p
                        className={`text-xs sm:text-sm leading-relaxed font-medium line-clamp-3 mb-4 ${
                          isMaroon ? "text-white/80" : "text-[#650000]/80"
                        }`}
                      >
                        {cat.description}
                      </p>
                    </div>

                    <div
                      className={`flex items-center text-xs sm:text-sm font-extrabold transition-colors pt-2 ${
                        isMaroon
                          ? "text-[#FAFA33] border-t border-white/10"
                          : "text-[#650000] border-t border-[#650000]/15"
                      }`}
                    >
                      <span>Explore Spaces</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
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

