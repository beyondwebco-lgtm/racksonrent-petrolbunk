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
  Users
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { JOURNEY_STEPS } from "@/data/journey";

function HowItWorksContent() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");
  const [activeTab, setActiveTab] = useState<"all" | "bunk-owner" | "brand">("all");

  useEffect(() => {
    if (roleParam === "bunk-owner") {
      setActiveTab("bunk-owner");
      setTimeout(() => {
        const el = document.getElementById("explore-journey");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (roleParam === "brand") {
      setActiveTab("brand");
      setTimeout(() => {
        const el = document.getElementById("explore-journey");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [roleParam]);

  const stepImages = [
    "/images/step_1_visit.png",
    "/images/step_2_space.png",
    "/images/step_3_setup.png",
    "/images/step_4_showcase.png",
    "/images/step_5_select.png",
    "/images/step_6_purchase.png",
    "/images/step_7_grow.png",
  ];

  const stepIcons = [
    <UserCheck key="1" className="w-5 h-5" />,
    <Maximize2 key="2" className="w-5 h-5" />,
    <Store key="3" className="w-5 h-5" />,
    <Eye key="4" className="w-5 h-5" />,
    <MessageCircle key="5" className="w-5 h-5" />,
    <ShoppingBag key="6" className="w-5 h-5" />,
    <TrendingUp key="7" className="w-5 h-5" />,
  ];

  // Role tag mapping
  const stepTargetRoles = [
    "all",          // Step 1
    "bunk-owner",   // Step 2
    "brand",        // Step 3
    "brand",        // Step 4
    "brand",        // Step 5
    "all",          // Step 6
    "all",          // Step 7
  ];

  const filteredSteps = JOURNEY_STEPS.filter((_, idx) => {
    if (activeTab === "all") return true;
    const target = stepTargetRoles[idx];
    return target === "all" || target === activeTab;
  });

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
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-[#6B0F1A] hover:text-[#3D0710] bg-[#FFF6A3]/60 px-4 py-1.5 rounded-full border border-[#F0E2E4] mb-6 transition-all hover:bg-[#FFF6A3]"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
            </Link>
            
            <div className="flex justify-center mb-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#6B0F1A] px-4 py-1 text-xs font-extrabold text-[#FFF6A3]">
                <Sparkles className="w-3.5 h-3.5 text-[#F4E409]" /> Step-by-Step Retail Partnership
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
                <span className="text-xs sm:text-sm font-extrabold text-[#3D0710]">7 Simple Steps</span>
              </div>

              <div className="absolute bottom-4 right-4 sm:right-6 bg-[#6B0F1A] text-[#FFF6A3] px-3.5 py-1.5 rounded-xl border border-[#F4E409]/40 shadow-md flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#F4E409]" />
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
                className="bg-white p-5 rounded-2xl border border-[#F0E2E4] shadow-2xs hover:shadow-md hover:border-[#F4E409]/60 transition-all duration-300"
              >
                <div className="p-2.5 rounded-xl bg-[#FFF6A3]/60 inline-block mb-3">
                  {card.icon}
                </div>
                <h3 className="text-base font-extrabold text-[#6B0F1A] mb-1">{card.title}</h3>
                <p className="text-xs text-[#5F5F5F] leading-relaxed font-medium">{card.description}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Interactive Steps Timeline */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" id="explore-journey">
        
        {/* Role Filter Tabs */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6B0F1A] mb-3">
              Explore the Journey
            </h2>
            <p className="text-sm sm:text-base text-[#5F5F5F] font-medium mb-6">
              Select your perspective to see how the process works for you
            </p>

            <div className="inline-flex p-1.5 rounded-2xl bg-white border border-[#F0E2E4] shadow-xs flex-wrap justify-center gap-1">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-[#6B0F1A] text-[#FFF6A3] shadow-xs"
                    : "text-[#5F5F5F] hover:text-[#6B0F1A] hover:bg-[#FFF6A3]/40"
                }`}
              >
                All 7 Steps
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("bunk-owner")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  activeTab === "bunk-owner"
                    ? "bg-[#6B0F1A] text-[#FFF6A3] shadow-xs"
                    : "text-[#5F5F5F] hover:text-[#6B0F1A] hover:bg-[#FFF6A3]/40"
                }`}
              >
                For Petrol Pump Owners
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("brand")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                  activeTab === "brand"
                    ? "bg-[#6B0F1A] text-[#FFF6A3] shadow-xs"
                    : "text-[#5F5F5F] hover:text-[#6B0F1A] hover:bg-[#FFF6A3]/40"
                }`}
              >
                For Retail Brands & Startups
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Connected Vertical Timeline */}
        <div className="relative space-y-12 sm:space-y-16">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#6B0F1A] via-[#F4E409] to-[#6B0F1A] opacity-30 pointer-events-none" />

          {filteredSteps.map((step, index) => {
            const isEven = index % 2 === 0;
            const originalIndex = step.stepNumber - 1;

            return (
              <ScrollReveal key={step.stepNumber}>
                <div className={`relative flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-12`}>
                  
                  {/* Step Card Content */}
                  <div className="flex-1 w-full">
                    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#F0E2E4] shadow-md hover:shadow-lg transition-all duration-300 relative group overflow-hidden">
                      <div className="absolute top-0 left-0 w-2 h-full bg-[#6B0F1A] group-hover:bg-[#F4E409] transition-colors duration-300" />
                      
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#6B0F1A] text-[#FFF6A3] flex items-center justify-center font-black text-sm shadow-xs">
                          {step.stepNumber}
                        </div>
                        <div className="p-2 rounded-lg bg-[#FFF6A3] text-[#6B0F1A]">
                          {stepIcons[originalIndex]}
                        </div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-[#6B0F1A] bg-[#FFF6A3]/60 px-3 py-1 rounded-full border border-[#F0E2E4] ml-auto">
                          {step.visualTag}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#6B0F1A] mb-2">
                        {step.title}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-[#1F1F1F] font-bold mb-3 leading-relaxed">
                        {step.shortDescription}
                      </p>

                      <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed font-medium">
                        {step.detailedDescription}
                      </p>
                    </div>
                  </div>

                  {/* Step Image Visual Container */}
                  <div className="flex-1 w-full max-w-sm mx-auto">
                    <div className="relative bg-white rounded-2xl p-3 border border-[#F0E2E4] shadow-md overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#FFF6A3]/20">
                        <Image
                          src={stepImages[originalIndex]}
                          alt={step.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          className="object-contain p-4 group-hover:scale-108 transition-transform duration-500 ease-out"
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </section>

      {/* Classic Final CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-gradient-to-br from-[#6B0F1A] via-[#3D0710] to-[#6B0F1A] rounded-[2.5rem] p-8 sm:p-14 text-center shadow-2xl relative overflow-hidden border-2 border-[#F4E409]/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4E409]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#F4E409] px-4 py-1 text-xs font-extrabold text-[#3D0710] mb-4">
                <Sparkles className="w-3.5 h-3.5" /> Start Today
              </span>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">
                Ready to Turn Space Into Opportunity?
              </h2>
              
              <p className="text-[#FFF6A3] text-sm sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
                Whether you own a petrol bunk or want to expand your retail brand, we connect you for mutual success.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-[#F4E409] px-7 py-3.5 text-sm sm:text-base font-black text-[#3D0710] shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Building2 className="w-5 h-5" />
                  List Your Space
                </Link>

                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-2xl bg-white/10 border-2 border-white/20 px-7 py-3.5 text-sm sm:text-base font-black text-white hover:bg-white/20 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Store className="w-5 h-5 text-[#FFF6A3]" />
                  Showcase Your Brand
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

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
