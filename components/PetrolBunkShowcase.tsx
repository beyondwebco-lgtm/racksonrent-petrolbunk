"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import {
  Stethoscope,
  ShoppingBag,
  Sparkles,
  Apple,
  HeartHandshake,
  Zap,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Tag,
  ShieldCheck,
  Users,
  Layers,
  Headphones,
  MapPin,
  ArrowRight,
  Store,
  Building2,
} from "lucide-react";
import {
  SHOWCASE_CATEGORIES,
  SHOWCASE_TRUST_ITEMS,
  ShowcaseCategory,
} from "@/data/showcase";

interface PetrolBunkShowcaseProps {
  onSelectCategoryAction?: (
    role: "bunk-owner" | "brand-merchant",
    prefillData: { spaceType?: string; category?: string }
  ) => void;
}

export default function PetrolBunkShowcase({
  onSelectCategoryAction,
}: PetrolBunkShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const showcaseRef = useRef<HTMLDivElement>(null);

  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Stethoscope,
    ShoppingBag,
    Sparkles,
    Apple,
    HeartHandshake,
    Zap,
    ShieldCheck,
    Users,
    Layers,
    Headphones,
    MapPin,
  };

  const activeCategory: ShowcaseCategory = SHOWCASE_CATEGORIES[activeIndex];

  const handleNext = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_CATEGORIES.length);
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(
      (prev) => (prev - 1 + SHOWCASE_CATEGORIES.length) % SHOWCASE_CATEGORIES.length
    );
    setTimeout(() => setIsAnimating(false), 450);
  }, [isAnimating]);

  // Autoplay rotation every 7 seconds
  useEffect(() => {
    if (isAutoplayPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [handleNext, isAutoplayPaused]);

  // Keyboard Arrow Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "SELECT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }
      if (e.key === "ArrowRight") {
        handleNext();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  // Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const handleCtaPrimaryClick = () => {
    if (onSelectCategoryAction) {
      onSelectCategoryAction("bunk-owner", {
        spaceType: activeCategory.spaceTypePrimary,
      });
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleCtaSecondaryClick = () => {
    if (onSelectCategoryAction) {
      onSelectCategoryAction("brand-merchant", {
        category: activeCategory.categorySecondary,
      });
    }
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="py-16 sm:py-24 bg-[#FFFDF5] border-b border-[#F0E2E4] relative overflow-hidden"
      id="startups"
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-4 py-1.5 text-xs sm:text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            For Startups & Retail Brands
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            <span>Explore Retail Rack Formats at Petrol Pumps</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            Launch or expand your offline presence through affordable retail spaces at high-footfall petrol pump locations.
          </p>
        </div>

        {/* Category Tab Bar */}
        <div className="mb-10 flex items-center justify-center">
          <div className="flex gap-2 overflow-x-auto pb-2 pt-1 px-2 max-w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {SHOWCASE_CATEGORIES.map((cat, idx) => {
              const IconComp = iconMap[cat.iconName] || Layers;
              const isActive = idx === activeIndex;
              return (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(idx);
                    setTimeout(() => setIsAnimating(false), 450);
                  }}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-extrabold border transition-all flex-shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#6B0F1A] text-[#FFF6A3] border-[#F4E409] shadow-md scale-105"
                      : "bg-white text-[#6B0F1A] border-[#F0E2E4] hover:bg-[#FFF6A3]/50"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-[#F4E409]" : "text-[#6B0F1A]"}`} />
                  <span>{cat.shortName}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Showcase Panel */}
        <div
          ref={showcaseRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="relative bg-white rounded-3xl border-2 border-[#6B0F1A] p-6 sm:p-10 shadow-[0_24px_70px_rgba(11,30,54,0.12)] overflow-hidden"
        >
            {/* Right Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#F0E2E4] bg-[#FFF6A3]/20 shadow-[0_16px_40px_rgba(11,30,54,0.10)] aspect-3/4 sm:aspect-4/3 lg:aspect-3/4 group">
                {/* Arrow Controls Overlaid on Image */}
                <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous category"
                    className="w-9 h-9 rounded-full bg-[#6B0F1A]/90 text-[#FFF6A3] border border-[#F4E409] flex items-center justify-center shadow-md hover:bg-[#3D0710] hover:text-[#F4E409] transition-all cursor-pointer active:scale-95 backdrop-blur-xs"
                  >
                    <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next category"
                    className="w-9 h-9 rounded-full bg-[#6B0F1A]/90 text-[#FFF6A3] border border-[#F4E409] flex items-center justify-center shadow-md hover:bg-[#3D0710] hover:text-[#F4E409] transition-all cursor-pointer active:scale-95 backdrop-blur-xs"
                  >
                    <ChevronRight className="w-5 h-5 stroke-[2.5]" />
                  </button>
                </div>

                <Image
                  key={activeCategory.id}
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={`object-cover transition-all duration-500 group-hover:scale-105 ${
                    isAnimating ? "opacity-40 scale-102" : "opacity-100 scale-100"
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 bg-[#3D0710] text-white px-5 py-3 rounded-2xl border-2 border-[#F4E409] shadow-xl flex items-center justify-between text-sm sm:text-base font-bold tracking-wide z-10">
                  <span className="truncate">{activeCategory.title} Space</span>
                  <ArrowRight className="w-5 h-5 text-[#F4E409] flex-shrink-0 ml-2" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Supporting Strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 border-t border-[#F0E2E4]">
          {SHOWCASE_TRUST_ITEMS.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#F0E2E4] shadow-2xs"
              >
                <div className="p-2 rounded-xl bg-[#FFF6A3] text-[#6B0F1A] flex-shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[#6B0F1A] leading-tight">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-[#5F5F5F] font-bold mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
