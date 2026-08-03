"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { COMPACT_SPACE_TYPES } from "@/data/spaceTypes";

export default function SpaceTypes() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToIndex = useCallback((index: number) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    
    // Calculate the width of one item + gap. Assuming consistent sizing.
    // For a more robust approach, we can get the child element's width.
    const child = container.children[0] as HTMLElement;
    if (child) {
      const scrollPosition = index * (child.offsetWidth + 24); // 24px is gap-6
      container.scrollTo({
        left: scrollPosition,
        behavior: "smooth"
      });
      setActiveIndex(index);
    }
  }, []);

  const handleNext = useCallback(() => {
    const nextIndex = (activeIndex + 1) % COMPACT_SPACE_TYPES.length;
    scrollToIndex(nextIndex);
  }, [activeIndex, scrollToIndex]);

  const handlePrev = useCallback(() => {
    const prevIndex = activeIndex === 0 ? COMPACT_SPACE_TYPES.length - 1 : activeIndex - 1;
    scrollToIndex(prevIndex);
  }, [activeIndex, scrollToIndex]);

  // Sync active index on manual scroll
  const handleScroll = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollPosition = container.scrollLeft;
    
    const child = container.children[0] as HTMLElement;
    if (child) {
      const itemWidth = child.offsetWidth + 24;
      const newIndex = Math.round(scrollPosition / itemWidth);
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < COMPACT_SPACE_TYPES.length) {
        setActiveIndex(newIndex);
      }
    }
  }, [activeIndex]);

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [handleNext, isHovered]);

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#FFF6A3]/30 border-y border-[#F0E2E4] overflow-hidden" id="space-types">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex rounded-full bg-white px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Available Formats
          </span>
          <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#6B0F1A] md:text-4xl lg:text-[clamp(2.25rem,3.2vw,3.5rem)]">
            What Kind of Space Can Be Offered?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#5F5F5F] md:text-base font-medium">
            Explore popular petrol pump space options that suit display racks, shelves, counters, and kiosks.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 p-2.5 sm:p-3 rounded-full bg-white border border-[#F0E2E4] text-[#6B0F1A] shadow-lg hover:bg-[#6B0F1A] hover:text-[#FFF6A3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B0F1A]"
            aria-label="Previous space type"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 p-2.5 sm:p-3 rounded-full bg-white border border-[#F0E2E4] text-[#6B0F1A] shadow-lg hover:bg-[#6B0F1A] hover:text-[#FFF6A3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#6B0F1A]"
            aria-label="Next space type"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Scrollable Track */}
          <div 
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-5 sm:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-3 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {COMPACT_SPACE_TYPES.map((item) => (
              <div
                key={item.id}
                className="snap-center shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-3xl border border-[#F0E2E4] bg-white shadow-[0_12px_35px_rgba(11,30,54,0.06)] hover:shadow-[0_24px_60px_rgba(107,15,26,0.12)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#6B0F1A]/30 flex flex-col group overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-48 sm:h-52 lg:h-56 w-full overflow-hidden bg-gray-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                {/* Content Section (Bottom) */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-[#6B0F1A] mb-2 group-hover:text-[#3D0710] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed font-medium mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-xs sm:text-sm font-bold text-[#6B0F1A] group-hover:text-[#F4E409] transition-colors mt-auto">
                    Explore Space <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {COMPACT_SPACE_TYPES.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index 
                    ? 'w-8 h-2.5 bg-[#6B0F1A]' 
                    : 'w-2.5 h-2.5 bg-[#6B0F1A]/20 hover:bg-[#6B0F1A]/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

        </div>

      </div>

      {/* Global Style to hide scrollbar for webkit */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
      `}} />
    </section>
  );
}
