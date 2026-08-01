"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, Phone } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { JOURNEY_STEPS } from "@/data/journey";

export default function HowItWorksPage() {
  const stepImages = [
    "/images/step_1_visit.png",
    "/images/step_2_space.png",
    "/images/step_3_setup.png",
    "/images/step_4_showcase.png",
    "/images/step_5_select.png",
    "/images/step_6_purchase.png",
    "/images/step_7_grow.png",
  ];

  return (
    <div className="bg-[#FFFDF5] min-h-screen pt-12 sm:pt-20 pb-24">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#6B0F1A] hover:text-[#3D0710] mb-6 transition-colors">
              <ArrowRight className="w-4 h-4 rotate-180" /> Back to Home
            </Link>
            <h1 className="text-4xl font-extrabold tracking-tight text-[#6B0F1A] md:text-6xl mb-6">
              How It Works
            </h1>
            <p className="text-lg leading-relaxed text-[#5F5F5F] md:text-xl font-medium">
              From unused petrol pump space to a powerful retail display opportunity.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={200}>
          <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-[#F0E2E4]">
            <Image
              src="/images/hero_how_it_works.png"
              alt="Professional petrol station retail display"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </ScrollReveal>
      </section>

      {/* Steps Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-32">
        <div className="space-y-24 sm:space-y-32">
          {JOURNEY_STEPS.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <ScrollReveal key={step.stepNumber}>
                <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                  
                  {/* Image Side */}
                  <div className="flex-1 w-full max-w-md mx-auto relative group">
                    <div className="absolute inset-0 bg-[#F4E409]/20 rounded-[2.5rem] transform rotate-3 scale-105 transition-transform group-hover:rotate-6"></div>
                    <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl border border-[#F0E2E4] aspect-square flex items-center justify-center p-8">
                      <Image
                        src={stepImages[index]}
                        alt={step.title}
                        width={500}
                        height={500}
                        className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-500 ease-out"
                      />
                    </div>
                  </div>

                  {/* Text Side */}
                  <div className="flex-1 w-full text-center md:text-left">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#6B0F1A] text-[#FFFDF5] font-black text-2xl mb-6 shadow-md shadow-[#6B0F1A]/20">
                      {step.stepNumber}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#6B0F1A] mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-[#5F5F5F] leading-relaxed font-medium mb-6">
                      {step.shortDescription}
                    </p>
                    <p className="text-base text-[#5F5F5F]/80 leading-relaxed">
                      {step.detailedDescription}
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="bg-[#6B0F1A] rounded-[2rem] p-10 sm:p-16 text-center shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#3D0710] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-extrabold text-[#FFFDF5] md:text-5xl mb-6">
                Ready to Turn Space Into Opportunity?
              </h2>
              <p className="text-[#FFF6A3] text-lg mb-10 max-w-2xl mx-auto font-medium">
                Join our network of petrol pump owners and retail startups today.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#F4E409] px-8 py-4 text-base font-extrabold text-[#3D0710] shadow-lg hover:bg-white hover:-translate-y-0.5 transition-all duration-300"
                >
                  <MessageSquare className="w-5 h-5" />
                  Partner With Us
                </Link>
                <Link
                  href="/#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-extrabold text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
