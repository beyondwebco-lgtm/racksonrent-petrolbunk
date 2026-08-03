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
  // Replaced with single unified timeline from PREMIUM_STEPS

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

      {/* Premium 6-Step Unified Timeline */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24" id="explore-journey">
        
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#6B0F1A] mb-3">
              Explore the Journey
            </h2>
            <p className="text-sm sm:text-base text-[#5F5F5F] font-medium mb-6">
              A simple, transparent process for shared growth
            </p>
          </div>
        </ScrollReveal>

        <div className="relative space-y-16 sm:space-y-24">
          {/* Vertical Connecting Line */}
          <div className="hidden md:block absolute left-[30px] top-8 bottom-8 w-1 bg-gradient-to-b from-[#6B0F1A] via-[#F4E409] to-[#6B0F1A] opacity-20 pointer-events-none" />

          {PREMIUM_STEPS.map((step, index) => {
            return (
              <ScrollReveal key={step.stepNumber} delayMs={index * 100}>
                <div className="relative flex flex-col md:flex-row items-stretch gap-8 lg:gap-12 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#F0E2E4] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:border-[#6B0F1A]/20 transition-all duration-500">
                  
                  {/* Progress Dot */}
                  <div className="hidden md:flex absolute -left-10 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#F4E409] border-[3px] border-white shadow-sm z-10" />

                  {/* Left Side: Content (45%) */}
                  <div className="w-full md:w-[45%] flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-4xl lg:text-5xl font-black text-[#6B0F1A]/20">
                        {step.stepNumber}
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-widest text-[#6B0F1A] bg-[#FFF6A3]/60 px-3 py-1 rounded-full border border-[#F4E409]/30">
                        HOW IT WORKS
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#6B0F1A] mb-4 leading-tight">
                      {step.title}
                    </h3>
                    
                    <p className="text-base text-[#5F5F5F] font-medium mb-6 leading-relaxed">
                      {step.shortDescription}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {step.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] shrink-0 mt-0.5" />
                          <span className="text-sm font-semibold text-[#1F1F1F] leading-snug">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="inline-flex items-center gap-2 bg-[#FFF6A3]/30 border border-[#F4E409]/40 rounded-2xl px-5 py-3 mt-auto self-start">
                      <Sparkles className="w-5 h-5 text-[#6B0F1A]" />
                      <span className="text-sm font-extrabold text-[#3D0710]">
                        {step.featuredHighlight}
                      </span>
                    </div>
                  </div>

                  {/* Right Side: Image (55%) */}
                  <div className="w-full md:w-[55%] relative mt-6 md:mt-0">
                    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[450px] rounded-2xl overflow-hidden border border-[#F0E2E4] shadow-inner group">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                        sizes="(max-width: 768px) 100vw, 55vw"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
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
