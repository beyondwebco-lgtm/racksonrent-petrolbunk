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
    if (onSelectRole) {
      onSelectRole(role);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMouseMoveBtn1 = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const shiftX = Math.max(-3, Math.min(3, relX * 0.04));
    const shiftY = Math.max(-3, Math.min(3, relY * 0.04));
    setBtn1Pos({ x: shiftX, y: shiftY });
  };

  const handleMouseLeaveBtn1 = () => {
    setBtn1Pos({ x: 0, y: 0 });
  };

  const handleMouseMoveBtn2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const shiftX = Math.max(-3, Math.min(3, relX * 0.04));
    const shiftY = Math.max(-3, Math.min(3, relY * 0.04));
    setBtn2Pos({ x: shiftX, y: shiftY });
  };

  const handleMouseLeaveBtn2 = () => {
    setBtn2Pos({ x: 0, y: 0 });
  };

  // Parallax scroll listener for image content
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
    { text: "Extra space, extra earnings", icon: <TrendingUp className="w-4 h-4 text-[#6B0F1A]" /> },
    { text: "Low investment, high growth", icon: <ShieldCheck className="w-4 h-4 text-[#6B0F1A]" /> },
    { text: "Ready customer access", icon: <Lock className="w-4 h-4 text-[#6B0F1A]" /> },
    { text: "More products for customers", icon: <CheckCircle2 className="w-4 h-4 text-[#6B0F1A]" /> },
    { text: "A win-win model for both partners", icon: <Building2 className="w-4 h-4 text-[#6B0F1A]" /> },
  ];

  return (
    <section className="relative py-4 lg:py-6 xl:py-8 bg-[radial-gradient(circle_at_80%_20%,rgba(11,30,54,0.06),transparent_40%),linear-gradient(180deg,#FFFDF5_0%,#FFF6A3_50%,#FFFDF5_100%)] border-b border-[#F0E2E4]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-3.5 sm:space-y-4">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#FFF6A3] px-3.5 py-1 text-xs font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
                Small Space. Big Opportunity.
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-[#6B0F1A] leading-[1.12]">
              Turn Unused Petrol Pump Space{" "}
              <span className="bg-[#F4E409] text-[#3D0710] px-2.5 py-0.5 rounded-xl inline-block mt-0.5 border border-[#6B0F1A]/20">
                Into a New Business Opportunity
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#5F5F5F] leading-snug sm:leading-relaxed max-w-xl font-medium">
              Racks on Rent connects petrol pump owners with startups and retail brands. Rent unused space, showcase quality products, increase customer footfall, and create an additional source of income.
            </p>

            {/* 5 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {benefitItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 bg-white/90 backdrop-blur-xs px-2.5 py-1.5 rounded-xl border border-[#F0E2E4] shadow-2xs">
                  <div className="p-1 rounded-lg bg-[#FFF6A3] flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs font-extrabold text-[#1F1F1F] leading-tight">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="relative pt-1 sm:pt-2">
              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-3 z-10">
                
                {/* Primary CTA: List Your Space */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("bunk-owner")}
                  onMouseMove={handleMouseMoveBtn1}
                  onMouseLeave={handleMouseLeaveBtn1}
                  className="animate-cta-btn-1 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl bg-[#F4E409] border-2 border-[#6B0F1A]/20 px-5 py-2.5 sm:py-3 text-[#3D0710] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[0_12px_24px_rgba(11,30,54,0.2)] active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                  <div
                    style={{
                      transform: `translate(${btn1Pos.x}px, ${btn1Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-sm sm:text-base font-black">
                      <Building2 className="w-4.5 h-4.5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>List Your Space</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider opacity-80 mt-0.5">
                      For Petrol Pump Owners
                    </span>
                  </div>
                </button>

                {/* Secondary CTA: Showcase Your Brand */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("brand-merchant")}
                  onMouseMove={handleMouseMoveBtn2}
                  onMouseLeave={handleMouseLeaveBtn2}
                  className="animate-cta-btn-2 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl border-2 border-[#6B0F1A] bg-[#6B0F1A] px-5 py-2.5 sm:py-3 text-[#FFF6A3] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.015] hover:shadow-[0_12px_24px_rgba(11,30,54,0.3)] active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[#F4E409]/30 to-transparent pointer-events-none" />

                  <div
                    style={{
                      transform: `translate(${btn2Pos.x}px, ${btn2Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-sm sm:text-base font-black">
                      <Store className="w-4.5 h-4.5 text-[#FFF6A3] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>Showcase Your Brand</span>
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#F4E409] mt-0.5">
                      For Startups & Retail Brands
                    </span>
                  </div>
                </button>

              </div>
            </div>
          </div>

          {/* Right Column: Petrol Bunk Video */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative mx-auto">
              <div className="animate-hero-video-entrance rounded-2xl sm:rounded-[1.75rem] border-2 border-[#F0E2E4] bg-white p-1.5 shadow-[0_20px_50px_rgba(11,30,54,0.12)] relative overflow-hidden transition-all duration-350 hover:scale-[1.015] hover:shadow-[0_28px_80px_rgba(11,30,54,0.18)] hover:border-[#F4E409]/60 group">
                <div className="relative aspect-video max-h-[360px] sm:max-h-[380px] lg:max-h-[400px] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#FFF6A3]/30">
                  <video
                    src="/videos/hero-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    style={{
                      transform: `translateY(${scrollY * 0.04}px)`,
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 right-4 bg-[#3D0710] text-white px-3.5 py-1.5 rounded-full border-2 border-[#F4E409] shadow-xl flex items-center gap-2 text-xs font-bold tracking-wide z-10">
                    <span className="w-2 h-2 rounded-full bg-[#F4E409] animate-ping" />
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
