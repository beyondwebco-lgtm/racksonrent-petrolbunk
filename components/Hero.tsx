"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Store, TrendingUp, ShieldCheck, Lock, CheckCircle2, Building2 } from "lucide-react";

interface HeroProps {
  onSelectRole?: (role: "bunk-owner" | "brand-merchant") => void;
}

export default function Hero({ onSelectRole }: HeroProps) {
  const [btn1Pos, setBtn1Pos] = useState({ x: 0, y: 0 });
  const [btn2Pos, setBtn2Pos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  const handleRoleClick = (role: "bunk-owner" | "brand-merchant") => {
    if (onSelectRole) onSelectRole(role);
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleMouseMoveBtn = (
    e: React.MouseEvent<HTMLButtonElement>,
    setter: (pos: { x: number; y: number }) => void
  ) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    setter({
      x: Math.max(-3, Math.min(3, relX * 0.04)),
      y: Math.max(-3, Math.min(3, relY * 0.04)),
    });
  };

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 768 && window.scrollY < 800) {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefitItems = [
    { text: "Extra space, extra earnings",        icon: <TrendingUp    className="w-3.5 h-3.5" /> },
    { text: "Low investment, high growth",         icon: <ShieldCheck   className="w-3.5 h-3.5" /> },
    { text: "Ready customer access",               icon: <Lock          className="w-3.5 h-3.5" /> },
    { text: "More products for customers",         icon: <CheckCircle2  className="w-3.5 h-3.5" /> },
    { text: "A win-win model for both partners",   icon: <Building2     className="w-3.5 h-3.5" /> },
  ];

  return (
    <section
      className="relative py-3 lg:py-5 xl:py-6 bg-white border-b border-[#E8E3D5]"
      id="hero"
    >
      {/* Subtle decorative shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFFBCC]/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3 relative z-10">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#FFFBCC] px-3 py-0.5 text-[11px] sm:text-xs font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
                Small Space. Big Opportunity.
              </span>
            </div>

            {/* Archivo Black hero heading */}
            <h1 className="font-archivo text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-black tracking-tight text-[#3D0710] leading-[1.08]">
              Turn Unused Petrol Pump Space{" "}
              <span className="bg-[#FFF100] text-[#3D0710] px-2 py-0.5 rounded-lg inline-block mt-0.5 border border-[#E6D900]">
                Into a New Business Opportunity
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed max-w-lg font-medium">
              Racks on Rent connects petrol pump owners with startups and retail brands. Rent unused space, showcase quality products, increase customer footfall, and create an additional source of income.
            </p>

            {/* 5 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-0.5">
              {benefitItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5 bg-[#FFFDF5] px-2 py-1 rounded-lg border border-[#F0E2E4] shadow-xs">
                  <div className="p-0.5 rounded-md bg-[#FFFBCC] flex-shrink-0 text-[#6B0F1A]">
                    {item.icon}
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold text-[#1F1F1F] leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="relative pt-1">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 z-10">
                
                {/* Primary CTA: List Your Space */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("bunk-owner")}
                  onMouseMove={(e) => handleMouseMoveBtn(e, setBtn1Pos)}
                  onMouseLeave={() => setBtn1Pos({ x: 0, y: 0 })}
                  className="animate-cta-btn-1 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-xl bg-[#FFF100] border-2 border-[#E6D900] px-4 py-2 sm:py-2.5 text-[#3D0710] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#F2E500] hover:shadow-md active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                  <div
                    style={{ transform: `translate(${btn1Pos.x}px, ${btn1Pos.y}px)` }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black text-[#3D0710]">
                      <Building2 className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>List Your Space</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#3D0710]/80 mt-0.5">
                      For Petrol Pump Owners
                    </span>
                  </div>
                </button>

                {/* Secondary CTA: Showcase Your Brand */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("brand-merchant")}
                  onMouseMove={(e) => handleMouseMoveBtn(e, setBtn2Pos)}
                  onMouseLeave={() => setBtn2Pos({ x: 0, y: 0 })}
                  className="animate-cta-btn-2 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-xl border-2 border-[#520a13] bg-[#6B0F1A] px-4 py-2 sm:py-2.5 text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3D0710] hover:shadow-md active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[#FFF100]/20 to-transparent pointer-events-none" />
                  <div
                    style={{ transform: `translate(${btn2Pos.x}px, ${btn2Pos.y}px)` }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm font-black">
                      <Store className="w-4 h-4 text-[#FFF100] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>Showcase Your Brand</span>
                    </div>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-[#FFF100] mt-0.5">
                      For Startups &amp; Retail Brands
                    </span>
                  </div>
                </button>

              </div>
            </div>
          </div>

          {/* Right Column: Petrol Bunk Video */}
          <div className="lg:col-span-6 relative mt-3 lg:mt-0">
            <div className="relative mx-auto">
              <div className="animate-hero-video-entrance rounded-xl sm:rounded-2xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-1 shadow-[0_16px_40px_rgba(61,7,16,0.1)] relative overflow-hidden transition-all duration-350 hover:scale-[1.015] hover:shadow-[0_20px_50px_rgba(61,7,16,0.15)] hover:border-[#FFF100]/50 group">
                <div className="relative aspect-video max-h-[300px] sm:max-h-[340px] lg:max-h-[350px] w-full rounded-lg sm:rounded-xl overflow-hidden bg-[#FFFBCC]/30">
                  <video
                    src="/videos/hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    style={{ transform: `translateY(${scrollY * 0.04}px)` }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D0710]/70 via-[#3D0710]/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 right-3 bg-[#3D0710] text-white px-3 py-1 rounded-full border border-[#FFF100] shadow-md flex items-center gap-1.5 text-[11px] font-bold tracking-wide z-10">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFF100] animate-ping" />
                    <span>Petrol Bunk Retail Partnership</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
