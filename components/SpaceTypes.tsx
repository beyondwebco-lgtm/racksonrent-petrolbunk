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
    <section className="section-padding bg-[#FFFDF5] border-y border-[#F0E2E4] overflow-hidden" id="space-types">
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-reveal-up">
          <span className="inline-flex rounded-full bg-[#FFFBCC] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Available Formats
          </span>
          <h2 className="section-title-dm mt-2.5 text-[#6B0F1A]">
            What Kind of Space Can Be Offered?
          </h2>
          <p className="body-copy mx-auto mt-2 max-w-2xl text-[#5F5F5F]">
            Explore popular petrol pump space options that suit display racks, shelves, counters, and kiosks.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto animate-reveal-up-delay-1"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)}
          onTouchEnd={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-6 z-10 p-2.5 sm:p-3 rounded-full bg-[#6B0F1A] border-2 border-[#FFF100] text-white shadow-lg hover:bg-[#FFF100] hover:text-[#3D0710] hover:border-[#E6D900] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFF100]"
            aria-label="Previous space type"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-6 z-10 p-2.5 sm:p-3 rounded-full bg-[#6B0F1A] border-2 border-[#FFF100] text-white shadow-lg hover:bg-[#FFF100] hover:text-[#3D0710] hover:border-[#E6D900] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FFF100]"
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
                className="snap-center shrink-0 w-[85vw] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] h-[400px] sm:h-[450px] card-base hover:!border-[#6B0F1A] flex flex-col group overflow-hidden !p-0 relative"
              >
                {/* Full-bleed Image */}
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D0710]/95 via-[#3D0710]/40 to-transparent transition-opacity duration-300" />
                
                {/* Content Section (Overlaid at Bottom) */}
                <div className="absolute inset-0 p-5 sm:p-6 flex flex-col justify-end z-10 text-white">
                  <div>
                    <h3 className="font-extrabold text-lg sm:text-xl text-white mb-2 group-hover:text-[#FFF100] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-medium mb-4 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center text-xs sm:text-sm font-bold text-[#FFF100] group-hover:text-white transition-colors">
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
                    ? 'w-8 h-2.5 bg-[#FFF100]' 
                    : 'w-2.5 h-2.5 bg-[#F0E2E4] hover:bg-[#5F5F5F]'
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
