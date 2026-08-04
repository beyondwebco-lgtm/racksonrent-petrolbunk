"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { POPULAR_CATEGORIES, CategoryItem } from "@/data/categories";

export default function PopularCategories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const updateScrollButtons = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      // Give a little buffer for rounding errors in scrollWidth
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      updateScrollButtons();
      // Ensure we check after images might have loaded
      setTimeout(updateScrollButtons, 500);
      
      scrollEl.addEventListener("scroll", updateScrollButtons, { passive: true });
      window.addEventListener("resize", updateScrollButtons);
      return () => {
        scrollEl.removeEventListener("scroll", updateScrollButtons);
        window.removeEventListener("resize", updateScrollButtons);
      };
    }
  }, [updateScrollButtons]);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Scroll by roughly one viewport width of the carousel minus a bit to show next card
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll faster than mouse movement
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="section-padding bg-[var(--yellow-soft)] overflow-hidden" id="products">
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 animate-reveal-up">
          <span className="inline-flex rounded-full bg-white px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[var(--charcoal)] border border-[var(--border)] shadow-sm">
            Products & Categories
          </span>
          <h2 className="section-title-dm mt-4 text-[var(--charcoal)]">
            Popular Product Categories
          </h2>
          <p className="body-copy mx-auto mt-3 max-w-2xl text-[var(--text-muted)]">
            Explore example products and health essentials featured across partner retail spaces.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel px-2 sm:px-4 animate-reveal-up-delay-1 max-w-[1400px] mx-auto">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous categories"
            className={`absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[var(--yellow)] text-[var(--black)] border-2 border-[var(--black)] flex items-center justify-center shadow-lg transition-all cursor-pointer ${
              !canScrollLeft
                ? "opacity-0 invisible"
                : "opacity-100 visible hover:bg-[var(--yellow-hover)] hover:scale-105"
            }`}
          >
            <ChevronLeft className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next categories"
            className={`absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-[var(--yellow)] text-[var(--black)] border-2 border-[var(--black)] flex items-center justify-center shadow-lg transition-all cursor-pointer ${
              !canScrollRight
                ? "opacity-0 invisible"
                : "opacity-100 visible hover:bg-[var(--yellow-hover)] hover:scale-105"
            }`}
          >
            <ChevronRight className="w-7 h-7 stroke-[2.5]" />
          </button>

          {/* Carousel Track */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 px-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {POPULAR_CATEGORIES.map((cat: CategoryItem) => {
              return (
                <div
                  key={cat.id}
                  className="category-card flex-shrink-0 w-[85vw] max-w-[300px] sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] snap-start text-left bg-white rounded-[24px] border border-[var(--border)] shadow-sm hover:shadow-xl hover:border-[var(--black)] transition-all duration-300 flex flex-col group overflow-hidden"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[4/3] bg-[#F8F9FA] p-6 border-b border-[var(--border)] overflow-hidden flex items-center justify-center">
                    {cat.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-extrabold bg-[var(--yellow)] text-[var(--black)] px-2.5 py-1 rounded-full border border-[var(--black)] z-10 shadow-sm">
                        {cat.badge}
                      </span>
                    )}

                    <Image
                      src={cat.image}
                      alt={cat.alt}
                      fill
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 25vw"
                      loading="lazy"
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500 z-0"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between bg-white">
                    <div>
                      <h3 className="font-bold text-lg sm:text-xl text-[var(--charcoal)] group-hover:text-[var(--maroon)] transition-colors mb-2">
                        {cat.name}
                      </h3>

                      <p className="text-sm text-[var(--text-muted)] leading-relaxed font-medium line-clamp-3 mb-5">
                        {cat.description}
                      </p>
                    </div>

                    <button className="flex items-center text-sm font-extrabold text-[var(--charcoal)] group-hover:text-[var(--maroon)] transition-colors mt-auto pt-2 border-t border-gray-100">
                      <span>Explore Spaces</span>
                      <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
