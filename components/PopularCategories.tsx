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
    <section className="section-padding bg-white overflow-hidden" id="products">
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-reveal-up">
          <span className="inline-flex rounded-full bg-[var(--yellow-pale)] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[var(--charcoal)] border border-[var(--border)]">
            Products & Categories
          </span>
          <h2 className="section-title-dm mt-2.5 text-[var(--maroon)]">
            Popular Product Categories
          </h2>
          <p className="body-copy mx-auto mt-2 max-w-2xl text-[var(--text-muted)]">
            Explore example products and health essentials featured across partner retail spaces.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel px-2 sm:px-4 animate-reveal-up-delay-1">
          
          {/* Left Arrow Button */}
          <button
            type="button"
            onClick={() => handleScroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous categories"
            className={`absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[var(--yellow)] text-[var(--black)] border-2 border-[var(--black)] flex items-center justify-center shadow-lg transition-all cursor-pointer ${
              !canScrollLeft
                ? "opacity-30 cursor-not-allowed pointer-events-none border-[var(--border)] bg-[var(--border)] text-white"
                : "hover:bg-[var(--yellow-hover)] hover:scale-105"
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
            className={`absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-[var(--yellow)] text-[var(--black)] border-2 border-[var(--black)] flex items-center justify-center shadow-lg transition-all cursor-pointer ${
              !canScrollRight
                ? "opacity-30 cursor-not-allowed pointer-events-none border-[var(--border)] bg-[var(--border)] text-white"
                : "hover:bg-[var(--yellow-hover)] hover:scale-105"
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
                  className="category-card flex-shrink-0 w-[82vw] max-w-[280px] sm:w-[calc(50%-10px)] md:w-[calc(33.333%-14px)] lg:w-[calc(25%-15px)] snap-start text-left card-base flex flex-col justify-between group cursor-pointer relative overflow-hidden h-full min-h-[340px] p-5 !border-[var(--border)] hover:!border-[var(--black)]"
                >
                  {cat.badge && (
                    <span className="absolute top-7 right-7 text-[10px] font-extrabold bg-[var(--yellow)] text-[var(--black)] px-2.5 py-1 rounded-full border border-[var(--black)] z-10 shadow-sm">
                      {cat.badge}
                    </span>
                  )}

                  <div>
                    {/* Prominent Studio Product Photo (1:1 Square Container) */}
                    <div className="relative w-full aspect-square rounded-2xl bg-[#111] border border-[var(--border)] overflow-hidden mb-4 group-hover:border-[var(--black)] transition-colors">
                      <Image
                        src={cat.image}
                        alt={cat.alt}
                        fill
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 33vw, 25vw"
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <h3 className="font-extrabold text-base text-[var(--maroon)] group-hover:text-[var(--maroon-dark)] transition-colors mb-1.5 leading-snug">
                      {cat.name}
                    </h3>

                    <p className="text-xs text-[var(--text-muted)] leading-relaxed font-medium line-clamp-2">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-xs font-extrabold text-[var(--maroon)] group-hover:text-[var(--maroon-dark)]">
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
