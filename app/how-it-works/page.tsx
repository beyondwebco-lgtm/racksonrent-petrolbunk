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
import { PREMIUM_STEPS } from "@/data/journey";

function HowItWorksContent() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");

  useEffect(() => {
    if (roleParam) {
      setTimeout(() => {
        const el = document.getElementById("explore-journey");
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" id="explore-journey">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6B0F1A] mb-4">
              Explore the Journey
            </h2>
            <p className="text-base sm:text-lg text-[#5F5F5F] font-medium max-w-2xl mx-auto">
              A streamlined, proven process connecting spaces with brands for mutual success.
            </p>
          </div>
        </ScrollReveal>

        {/* Connected Vertical Timeline */}
        <div className="relative space-y-12 sm:space-y-20 lg:space-y-24 pl-6 md:pl-0">
          
          {/* Vertical Connecting Line (Hidden on small mobile if preferred, but let's keep it left aligned on mobile, center on desktop) */}
          <div className="absolute left-[38px] md:left-1/2 top-4 bottom-4 w-1 md:-translate-x-1/2 bg-gradient-to-b from-[#6B0F1A]/20 via-[#F4E409]/80 to-[#6B0F1A]/20 rounded-full" />

          {PREMIUM_STEPS.map((step, index) => {
            return (
              <ScrollReveal key={step.stepNumber} delayMs={index * 100}>
                <div className="relative flex flex-col md:flex-row items-center gap-8 lg:gap-16 group">
                  
                  {/* Center Dot Indicator */}
                  <div className="absolute left-0 md:left-1/2 top-8 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#FFFDF5] border-4 border-[#F4E409] shadow-[0_0_15px_rgba(244,228,9,0.5)] z-10 group-hover:scale-125 group-hover:border-[#6B0F1A] transition-all duration-500 flex items-center justify-center">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#6B0F1A] group-hover:bg-[#F4E409] transition-colors duration-500" />
                  </div>

                  {/* Left Side: Content Box (45%) */}
                  <div className="w-full md:w-[45%] md:pr-10 lg:pr-14 md:text-right pl-8 md:pl-0 flex flex-col md:items-end z-10 pt-2 md:pt-0">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4E409]/20 border border-[#F4E409]/30 rounded-full mb-4">
                      <Sparkles className="w-3.5 h-3.5 text-[#6B0F1A]" />
                      <span className="text-[10px] font-bold text-[#6B0F1A] uppercase tracking-wider">How It Works</span>
                    </div>
                    
                    <div className="flex items-center md:flex-row-reverse gap-4 mb-4">
                      <span className="text-4xl lg:text-6xl font-black text-[#6B0F1A]/10 leading-none">
                        {step.stepNumber}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-extrabold text-[#3D0710] leading-tight">
                        {step.title}
                      </h3>
                    </div>

                    <p className="text-base lg:text-lg text-[#5F5F5F] font-medium leading-relaxed mb-6 md:text-right text-left">
                      {step.shortDescription}
                    </p>

                    <ul className="space-y-3 mb-8 w-full">
                      {step.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex md:flex-row-reverse items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] shrink-0 mt-0.5" />
                          <span className="text-sm lg:text-base text-[#1F1F1F] font-semibold text-left md:text-right">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="bg-[#FFF6A3]/40 border border-[#F4E409]/50 rounded-2xl p-4 w-full md:w-auto shadow-sm">
                      <p className="text-sm lg:text-base font-extrabold text-[#6B0F1A] text-left md:text-right">
                        {step.featuredHighlight}
                      </p>
                    </div>
                  </div>

                  {/* Right Side: Image Box (55%) */}
                  <div className="w-full md:w-[55%] md:pl-10 lg:pl-14 pl-8 md:pl-0">
                    <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#F0E2E4] shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_8px_40px_rgb(107,15,26,0.1)] group-hover:border-[#6B0F1A]/20 transition-all duration-700">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105 group-hover:-rotate-1"
                        sizes="(max-width: 768px) 100vw, 55vw"
                      />
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
