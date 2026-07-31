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
  const [hasDragged, setHasDragged] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftPos, setScrollLeftPos] = useState(0);

  const updateScrollButtons = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 5);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
    }
  }, []);

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      updateScrollButtons();
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
      const cardElement = scrollRef.current.querySelector(".category-card");
      const cardWidth = cardElement ? (cardElement as HTMLElement).offsetWidth : 280;
      const gap = 20;
      const scrollAmount = (cardWidth + gap) * (window.innerWidth >= 1024 ? 2 : 1);

      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeftPos(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
    scrollRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleCategoryClick = () => {
    if (hasDragged) return;
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] overflow-hidden" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-4 py-1.5 text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Products & Categories
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            Popular Product Categories
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Explore example products and health essentials featured across partner retail spaces.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel px-2 sm:px-4">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous categories"
            className={`absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#6B0F1A] text-[#FFF6A3] border-2 border-[#F4E409] flex items-center justify-center shadow-lg transition-all cursor-pointer ${
              !canScrollLeft
                ? "opacity-30 cursor-not-allowed pointer-events-none"
                : "hover:bg-[#3D0710] hover:text-[#F4E409] hover:scale-105"
            }`}
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Right Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("right")}
            disabled={!canScrollRight}
            aria-label="Next categories"
            className={`absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[#6B0F1A] text-[#FFF6A3] border-2 border-[#F4E409] flex items-center justify-center shadow-lg transition-all cursor-pointer ${
              !canScrollRight
                ? "opacity-30 cursor-not-allowed pointer-events-none"
                : "hover:bg-[#3D0710] hover:text-[#F4E409] hover:scale-105"
            }`}
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>

          {/* Carousel Track */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className={`flex gap-4 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth py-4 px-4 sm:px-8 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ${
              isDragging ? "cursor-grabbing" : "cursor-grab"
            }`}
          >
            {POPULAR_CATEGORIES.map((cat: CategoryItem) => {
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={handleCategoryClick}
                  className="category-card flex-shrink-0 w-[82vw] max-w-[280px] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] snap-start text-left rounded-3xl border border-[#F0E2E4] bg-white p-5 shadow-[0_8px_25px_rgba(11,30,54,0.05)] hover:shadow-[0_16px_40px_rgba(11,30,54,0.12)] hover:border-[#6B0F1A]/40 transition-all hover:-translate-y-1 flex flex-col justify-between group cursor-pointer relative overflow-hidden h-full min-h-[340px]"
                >
                  {cat.badge && (
                    <span className="absolute top-7 right-7 text-[10px] font-extrabold bg-[#F4E409] text-[#3D0710] px-2.5 py-1 rounded-full border border-[#6B0F1A]/20 z-10 shadow-xs">
                      {cat.badge}
                    </span>
                  )}

                  <div>
                    {/* Prominent Studio Product Photo (1:1 Square Container) */}
                    <div className="relative w-full aspect-square rounded-2xl bg-[#FFFDF5] border border-[#F0E2E4] overflow-hidden p-3 mb-4 flex items-center justify-center group-hover:border-[#6B0F1A]/30 transition-colors">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        fill
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="font-extrabold text-base text-[#6B0F1A] group-hover:text-[#3D0710] transition-colors mb-1.5 leading-snug">
                      {cat.name}
                    </h3>

                    <p className="text-xs text-[#5F5F5F] leading-relaxed font-medium line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#F0E2E4] flex items-center justify-between text-xs font-extrabold text-[#6B0F1A] group-hover:text-[#3D0710]">
                    <span>Explore Spaces</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}


