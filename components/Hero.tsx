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
    { text: "Extra space, extra earnings", icon: <TrendingUp className="w-4 h-4 text-[#0B1E36]" /> },
    { text: "Low investment, high growth", icon: <ShieldCheck className="w-4 h-4 text-[#0B1E36]" /> },
    { text: "Ready customer access", icon: <Lock className="w-4 h-4 text-[#0B1E36]" /> },
    { text: "More products for customers", icon: <CheckCircle2 className="w-4 h-4 text-[#0B1E36]" /> },
    { text: "A win-win model for both partners", icon: <Building2 className="w-4 h-4 text-[#0B1E36]" /> },
  ];

  return (
    <section className="relative pt-8 pb-12 lg:pt-16 lg:pb-20 bg-[radial-gradient(circle_at_80%_20%,rgba(11,30,54,0.06),transparent_40%),linear-gradient(180deg,#f8fafc_0%,#f1f5f9_50%,#f8fafc_100%)] border-b border-[#E2E8F0]" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#FEF9C3] px-4 py-1.5 text-xs sm:text-sm font-extrabold text-[#0B1E36] border border-[#E2E8F0]">
                Small Space. Big Opportunity.
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-[#0B1E36] leading-[1.15]">
              Turn Unused Petrol Pump Space{" "}
              <span className="bg-[#F4E409] text-[#061221] px-3 py-1 rounded-xl inline-block mt-1 border border-[#0B1E36]/20">
                Into a New Business Opportunity
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-2xl font-medium">
              Racks on Rent connects petrol pump owners with startups and retail brands. Rent unused space, showcase quality products, increase customer footfall, and create an additional source of income.
            </p>

            {/* 5 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              {benefitItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-white p-2.5 rounded-xl border border-[#E2E8F0] shadow-2xs">
                  <div className="p-1.5 rounded-lg bg-[#FEF9C3] flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#0F172A]">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="relative pt-4">
              <div className="w-16 h-0.5 bg-[#0B1E36]/30 rounded-full animate-accent-line mb-3" />

              <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-4 z-10">
                
                {/* Primary CTA: List Your Space */}
                <button
                  type="button"
                  onClick={() => handleRoleClick("bunk-owner")}
                  onMouseMove={handleMouseMoveBtn1}
                  onMouseLeave={handleMouseLeaveBtn1}
                  className="animate-cta-btn-1 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl bg-[#F4E409] border-2 border-[#0B1E36]/20 px-6 py-3.5 text-[#061221] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.018] hover:shadow-[0_14px_30px_rgba(11,30,54,0.22)] active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />

                  <div
                    style={{
                      transform: `translate(${btn1Pos.x}px, ${btn1Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-base font-black">
                      <Building2 className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>List Your Space</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-80 mt-0.5">
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
                  className="animate-cta-btn-2 flex-1 relative overflow-hidden inline-flex flex-col items-center justify-center gap-0.5 rounded-2xl border-2 border-[#0B1E36] bg-[#0B1E36] px-6 py-3.5 text-[#FEF9C3] shadow-md transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:scale-[1.018] hover:shadow-[0_14px_30px_rgba(11,30,54,0.35)] active:scale-[0.97] focus:outline-none cursor-pointer group"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out bg-gradient-to-r from-transparent via-[#F4E409]/30 to-transparent pointer-events-none" />

                  <div
                    style={{
                      transform: `translate(${btn2Pos.x}px, ${btn2Pos.y}px)`,
                    }}
                    className="transition-transform duration-200 ease-out flex flex-col items-center justify-center w-full"
                  >
                    <div className="flex items-center gap-2 text-base font-black">
                      <Store className="w-5 h-5 text-[#FEF9C3] group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>Showcase Your Brand</span>
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4E409] mt-0.5">
                      For Startups & Retail Brands
                    </span>
                  </div>
                </button>

              </div>
            </div>
          </div>

          {/* Right Column: Petrol Bunk Image */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="animate-hero-video-entrance rounded-[2rem] border-2 border-[#E2E8F0] bg-white p-3 shadow-[0_24px_70px_rgba(11,30,54,0.12)] relative overflow-hidden transition-all duration-350 hover:scale-[1.015] hover:shadow-[0_28px_80px_rgba(11,30,54,0.18)] hover:border-[#F4E409]/60 group">
                <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#FEF9C3]/30">
                  <Image
                    src="/images/hero-petrolbunk.png"
                    alt="Modern Petrol Bunk Rack Store"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                    className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    style={{
                      transform: `translateY(${scrollY * 0.04}px)`,
                    }}
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

                  <div className="absolute bottom-6 right-6 bg-[#061221] text-white px-5 py-2.5 rounded-full border-2 border-[#F4E409] shadow-xl flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide z-10">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F4E409] animate-ping" />
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
