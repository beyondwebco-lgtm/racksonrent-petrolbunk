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
      className="section-padding bg-[var(--yellow-soft)] border-b border-[var(--border)] relative overflow-hidden"
      id="startups"
      onMouseEnter={() => setIsAutoplayPaused(true)}
      onMouseLeave={() => setIsAutoplayPaused(false)}
    >
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-reveal-up">
          <span className="inline-flex rounded-full bg-[var(--yellow-pale)] px-3.5 py-1 text-xs font-extrabold text-[var(--charcoal)] border border-[var(--border)]">
            For Startups & Retail Brands
          </span>
          <h2 className="section-title-dm mt-2.5 text-[var(--maroon)]">
            <span>Explore Retail Rack Formats at Petrol Pumps</span>
          </h2>
          <p className="body-copy mx-auto mt-2 max-w-2xl text-[var(--text-muted)]">
            Launch or expand your offline presence through affordable retail spaces at high-footfall petrol pump locations.
          </p>
        </div>

        {/* Category Tab Bar */}
        <div className="mb-6 sm:mb-8 flex items-center justify-center animate-reveal-up-delay-1">
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
                      ? "bg-[var(--black)] text-[var(--yellow)] border-[var(--black)] shadow-md scale-105"
                      : "bg-white text-[var(--text-muted)] border-[var(--border)] hover:bg-[var(--yellow-pale)] hover:text-[var(--black)]"
                  }`}
                >
                  <IconComp className={`w-4 h-4 ${isActive ? "text-[var(--yellow)]" : ""}`} />
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
          className="card-base animate-reveal-up-delay-2 p-6 sm:p-10 !border-[var(--maroon)]"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column */}
            <div
              className={`lg:col-span-7 space-y-6 transition-all duration-450 ${
                isAnimating ? "opacity-30 scale-98 translate-x-2" : "opacity-100 scale-100 translate-x-0"
              }`}
            >
              <div>
                <span className="inline-flex rounded-full bg-[var(--yellow)] px-3.5 py-1 text-xs font-black text-[var(--black)] border border-[var(--yellow-hover)]">
                  {activeCategory.eyebrow}
                </span>
                <h3 className="font-archivo mt-3 text-2xl sm:text-3xl lg:text-4xl font-black text-[var(--maroon)] leading-snug">
                  {activeCategory.title}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-[var(--text-muted)] leading-relaxed font-medium">
                  {activeCategory.description}
                </p>
              </div>

              {/* Suitable Products */}
              <div>
                <span className="block text-xs font-extrabold text-[var(--maroon)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5" />
                  <span>Suitable Products</span>
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {activeCategory.suitableFor.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-[var(--yellow-pale)] text-[var(--text)] text-xs font-bold border border-[var(--border)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <span className="block text-xs font-extrabold text-[var(--maroon)] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Key Benefits</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeCategory.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text)] font-extrabold">
                      <CheckCircle2 className="w-4 h-4 text-[var(--maroon)] flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={handleCtaPrimaryClick}
                  className="btn-primary"
                >
                  <Building2 className="w-4 h-4" />
                  <span>{activeCategory.primaryCta}</span>
                </button>

                <button
                  type="button"
                  onClick={handleCtaSecondaryClick}
                  className="btn-secondary"
                >
                  <Store className="w-4 h-4 text-[var(--yellow)]" />
                  <span>{activeCategory.secondaryCta}</span>
                </button>
              </div>

            </div>

            {/* Right Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-[var(--border)] bg-[var(--yellow-pale)] shadow-[0_16px_40px_rgba(17,17,17,0.10)] h-[360px] sm:h-[400px] lg:h-[440px] max-[850px]:lg:h-[380px] w-full group">
                {/* Left Navigation Arrow */}
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous category"
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--black)]/90 text-white border-2 border-[var(--yellow)] flex items-center justify-center shadow-lg hover:bg-[var(--black)] hover:text-[var(--yellow)] hover:scale-110 transition-all cursor-pointer active:scale-95 backdrop-blur-xs"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
                </button>

                {/* Right Navigation Arrow */}
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next category"
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[var(--black)]/90 text-white border-2 border-[var(--yellow)] flex items-center justify-center shadow-lg hover:bg-[var(--black)] hover:text-[var(--yellow)] hover:scale-110 transition-all cursor-pointer active:scale-95 backdrop-blur-xs"
                >
                  <ChevronRight className="w-6 h-6 stroke-[2.5]" />
                </button>

                <Image
                  key={activeCategory.id}
                  src={activeCategory.image}
                  alt={activeCategory.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={`object-cover object-top transition-all duration-500 group-hover:scale-105 ${
                    isAnimating ? "opacity-40 scale-102" : "opacity-100 scale-100"
                  }`}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

                <div className="absolute bottom-3 left-3 right-3 bg-[var(--black)] text-white px-4 py-2.5 rounded-xl border-2 border-[var(--yellow)] shadow-xl flex items-center justify-between text-xs sm:text-sm font-bold tracking-wide z-10">
                  <span className="truncate">{activeCategory.title} Space</span>
                  <ArrowRight className="w-4 h-4 text-[var(--yellow)] flex-shrink-0 ml-2" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Supporting Strip */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-6 border-t border-[var(--border)] animate-reveal-up-delay-2">
          {SHOWCASE_TRUST_ITEMS.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[var(--border)] shadow-sm"
              >
                <div className="p-2 rounded-xl bg-[var(--yellow-pale)] text-[var(--maroon)] flex-shrink-0">
                  <IconComp className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold text-[var(--text)] leading-tight">
                    {item.label}
                  </h4>
                  <p className="text-[10px] text-[var(--text-muted)] font-bold mt-0.5">
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
