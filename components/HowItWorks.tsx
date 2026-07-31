import React from "react";
import Image from "next/image";
import { JOURNEY_STEPS } from "@/data/journey";

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF6A3]/50 border-y border-[#F0E2E4]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            7-Step Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#5F5F5F] md:text-lg font-medium">
            A simple, step-by-step model connecting petrol pump owners with startups and retail brands.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Steps List */}
          <div className="flex-1 w-full space-y-8 max-w-2xl mx-auto lg:mx-0">
            {JOURNEY_STEPS.map((step) => (
              <div key={step.stepNumber} className="flex gap-4 sm:gap-6 group">
                <div className="flex-shrink-0 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#6B0F1A] font-black text-[#FFF6A3] shadow-md text-xl border-2 border-[#F4E409] group-hover:scale-110 group-hover:bg-[#F4E409] group-hover:text-[#3D0710] group-hover:border-[#6B0F1A] transition-all duration-300">
                  {step.stepNumber}
                </div>
                <div className="pt-1 sm:pt-2">
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#6B0F1A] mb-1.5 group-hover:text-[#3D0710] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-medium">
                    {step.shortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="flex-1 w-full max-w-2xl mx-auto lg:mx-0 lg:sticky lg:top-24">
            <div className="relative w-full aspect-[4/3] sm:aspect-square lg:aspect-[4/5] xl:aspect-[3/4] rounded-3xl overflow-hidden border-[6px] border-white shadow-[0_20px_50px_rgba(11,30,54,0.1)] group">
              <Image 
                src="/images/howitworks.jpeg" 
                alt="How it works model" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

