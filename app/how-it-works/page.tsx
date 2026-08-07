"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  UserCheck, 
  Maximize2, 
  Store, 
  Eye, 
  MessageCircle, 
  ShoppingBag, 
  TrendingUp, 
  CheckCircle2, 
  Sparkles, 
  Building2, 
  Zap, 
  ShieldCheck,
  Users,
  X
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

function HowItWorksContent() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const [activeTab, setActiveTab] = useState<"bunk-owner" | "brand">("bunk-owner");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (roleParam === "brand") {
      setActiveTab("brand");
      setTimeout(() => {
        const el = document.getElementById("explore-journey");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      setActiveTab("bunk-owner");
      if (roleParam === "bunk-owner") {
        setTimeout(() => {
          const el = document.getElementById("explore-journey");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [roleParam]);

  const featureCards = [
    {
      icon: <Zap className="w-6 h-6 text-[#6B0F1A]" />,
      title: "Fast Setup",
      description: "Get display racks active in high-traffic petrol pump spaces within days.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#6B0F1A]" />,
      title: "Built-In Footfall",
      description: "Tap into thousands of daily vehicle owners and commuters stopping by.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-[#6B0F1A]" />,
      title: "Passive Bunk Income",
      description: "Monetize underutilized forecourt corners into recurring monthly rent.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#6B0F1A]" />,
      title: "Low Risk Growth",
      description: "Showcase products with minimal overhead and zero permanent construction.",
    },
  ];

  return (
    <div className="bg-[#FFFDF5] min-h-screen pt-8 sm:pt-14 pb-20">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 sm:mb-20">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#6B0F1A] hover:text-[#3D0710] bg-[#FFFBCC]/60 px-4 py-1.5 rounded-full border border-[#F0E2E4] mb-6 transition-all hover:bg-[#FFFBCC]"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
            </Link>
            
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6B0F1A] px-4 py-1 text-xs font-extrabold text-[#FFFBCC]">
                <Sparkles className="w-3.5 h-3.5 text-[#FDFF00]" /> Step-by-Step Retail Partnership
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#6B0F1A] mb-4">
              How It Works
            </h1>
            <p className="text-base sm:text-lg leading-relaxed text-[#5F5F5F] max-w-2xl mx-auto font-medium">
              Transforming unused petrol pump space into a high-visibility, high-earning retail display opportunity.
            </p>
          </div>
        </ScrollReveal>

        {/* Optimized Sleek Hero Image Container */}
        <ScrollReveal delayMs={150}>
          <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-xl border-2 border-[#F0E2E4] bg-white group">
            <div className="relative aspect-[16/9] max-h-[340px] sm:max-h-[380px] w-full overflow-hidden">
              <Image
                src="/images/hero_how_it_works.png"
                alt="Professional petrol station retail display"
                fill
                priority
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

              {/* Floating Badges */}
              <div className="absolute bottom-4 left-4 sm:left-6 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#F0E2E4] shadow-md flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#6B0F1A]" />
                <span className="text-xs sm:text-sm font-extrabold text-[#3D0710]">6 Simple Steps</span>
              </div>

              <div className="absolute bottom-4 right-4 sm:right-6 bg-[#6B0F1A] text-[#FFFBCC] px-3.5 py-1.5 rounded-xl border border-[#FDFF00]/40 shadow-md flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#FDFF00]" />
                <span className="text-xs sm:text-sm font-extrabold">Win-Win Partnership</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Feature Highlights Banner */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {featureCards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white p-5 rounded-2xl border border-[#F0E2E4] shadow-2xs hover:shadow-md hover:border-[#FDFF00]/60 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-[#FFFBCC]/60 inline-block mb-3">
                  {card.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#6B0F1A] mb-1">{card.title}</h3>
                <p className="text-xs text-[#5F5F5F] leading-relaxed font-medium">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Infographic Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" id="explore-journey">
        
        {/* Role Filter Tabs */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#6B0F1A] mb-3">
              Explore the Journey
            </h2>
            <p className="text-sm sm:text-base text-[#5F5F5F] font-medium mb-6">
              Select your perspective to view the detailed step-by-step process infographic
            </p>

            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#F0E2E4] shadow-xs flex-wrap justify-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("bunk-owner")}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  activeTab === "bunk-owner"
                    ? "bg-[#6B0F1A] text-[#FFFBCC] shadow-md"
                    : "text-[#5F5F5F] hover:text-[#6B0F1A] hover:bg-[#FFFBCC]/40"
                }`}
              >
                For Petrol Pump Owners
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("brand")}
                className={`px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  activeTab === "brand"
                    ? "bg-[#6B0F1A] text-[#FFFBCC] shadow-md"
                    : "text-[#5F5F5F] hover:text-[#6B0F1A] hover:bg-[#FFFBCC]/40"
                }`}
              >
                For Retail Brands &amp; Startups
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Infographic Photo Card Container */}
        <ScrollReveal delayMs={100}>
          <div className="bg-white rounded-3xl border-2 border-[#F0E2E4] p-4 sm:p-8 shadow-xl relative overflow-hidden group">
            
            {/* Header Badge & Title */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-4 border-b border-[#F0E2E4]">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-[#6B0F1A] bg-[#FFFBCC] px-3.5 py-1 rounded-full border border-[#FDFF00]/40 mb-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#6B0F1A]" />
                  {activeTab === "bunk-owner" ? "Petrol Pump Owners Guide" : "Entrepreneurs & Brands Guide"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#6B0F1A]">
                  {activeTab === "bunk-owner"
                    ? "Sublet Space. Share Success."
                    : "Your Product. Your Brand. Your Growth."}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#FFFBCC] text-[#3D0710] border border-[#FDFF00] text-xs font-extrabold hover:bg-[#FDFF00] transition-all cursor-pointer shadow-xs"
                >
                  <Maximize2 className="w-4 h-4 text-[#6B0F1A]" />
                  <span>Full Screen View</span>
                </button>
                
                <a
                  href={activeTab === "bunk-owner" ? "/images/how-it-works-owners.jpg" : "/images/how-it-works-entrepreneurs.jpg"}
                  download={activeTab === "bunk-owner" ? "RacksOnRent_Owners_Infographic.jpg" : "RacksOnRent_Entrepreneurs_Infographic.jpg"}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6B0F1A] text-white border border-[#520a13] text-xs font-extrabold hover:bg-[#3D0710] transition-all cursor-pointer shadow-xs"
                >
                  <ArrowRight className="w-4 h-4 text-[#FDFF00]" />
                  <span>Download Guide</span>
                </a>
              </div>
            </div>

            {/* Main Infographic Image */}
            <div
              onClick={() => setIsModalOpen(true)}
              className="relative w-full rounded-2xl overflow-hidden border border-[#F0E2E4] bg-[#FFFDF5] cursor-zoom-in shadow-inner group/img transition-all duration-300 hover:shadow-2xl"
            >
              <Image
                src={activeTab === "bunk-owner" ? "/images/how-it-works-owners.jpg" : "/images/how-it-works-entrepreneurs.jpg"}
                alt={activeTab === "bunk-owner" ? "How It Works for Petrol Pump Owners Infographic" : "How It Works for Entrepreneurs Infographic"}
                width={1200}
                height={1800}
                priority
                className="w-full h-auto object-contain transition-transform duration-500 group-hover/img:scale-[1.01]"
              />

              <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover/img:opacity-100 transition-opacity bg-[#3D0710] text-[#FFFBCC] border border-[#FDFF00] px-5 py-2.5 rounded-full text-xs font-extrabold shadow-2xl flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-[#FDFF00]" />
                  Click to Expand Full Screen
                </span>
              </div>
            </div>

            {/* Bottom Caption Bar */}
            <div className="mt-6 pt-4 border-t border-[#F0E2E4] flex flex-col sm:flex-row items-center justify-between text-xs font-bold text-[#5F5F5F] gap-2">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#6B0F1A]" />
                <span>6 Easy Steps to Turn Petrol Pump Space Into Steady Income</span>
              </span>
              <span className="text-[#6B0F1A] font-extrabold cursor-pointer hover:underline" onClick={() => setIsModalOpen(true)}>
                Tap Image for High Resolution View →
              </span>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Classic Final CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#6B0F1A] via-[#3D0710] to-[#6B0F1A] rounded-[2.5rem] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden border-2 border-[#FDFF00]/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FDFF00]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FDFF00] px-4 py-1 text-xs font-extrabold text-[#3D0710] mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Start Today
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Ready to Turn Space Into Opportunity?
              </h2>
              
              <p className="text-[#FFFBCC] text-sm sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
                Whether you own a petrol bunk or want to expand your retail brand, we connect you for mutual success.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FDFF00] px-7 py-3.5 text-sm sm:text-base font-black text-[#3D0710] shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Building2 className="w-5 h-5" />
                  List Your Space
                </Link>

                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border-2 border-white/20 px-7 py-3.5 text-sm sm:text-base font-black text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Store className="w-5 h-5 text-[#FFFBCC]" />
                  Showcase Your Brand
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 animate-fade-in">
          
          {/* Close Button Header */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex items-center gap-3">
            <a
              href={activeTab === "bunk-owner" ? "/images/how-it-works-owners.jpg" : "/images/how-it-works-entrepreneurs.jpg"}
              download={activeTab === "bunk-owner" ? "RacksOnRent_Owners_Infographic.jpg" : "RacksOnRent_Entrepreneurs_Infographic.jpg"}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FDFF00] text-[#3D0710] text-xs font-black hover:bg-white transition shadow-lg"
            >
              Download High Res
            </a>
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="p-2.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#3D0710] transition-all cursor-pointer shadow-lg"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Image Container */}
          <div className="relative max-w-5xl w-full max-h-[90vh] overflow-auto rounded-2xl p-2 bg-[#FFFDF5]/10 border border-white/20">
            <Image
              src={activeTab === "bunk-owner" ? "/images/how-it-works-owners.jpg" : "/images/how-it-works-entrepreneurs.jpg"}
              alt="High resolution infographic preview"
              width={1400}
              height={2100}
              className="w-full h-auto object-contain rounded-xl shadow-2xl mx-auto"
            />
          </div>

        </div>
      )}

    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <Suspense
      fallback={
        <div className="bg-[#FFFDF5] min-h-screen py-24 text-center font-bold text-[#6B0F1A]">
          Loading How It Works...
        </div>
      }
    >
      <HowItWorksContent />
    </Suspense>
  );
}
