import React from "react";
import { UserCheck, Maximize2, Store, Eye, MessageCircle, ShoppingBag, TrendingUp, ArrowRight } from "lucide-react";
import { JOURNEY_STEPS } from "@/data/journey";

export default function HowItWorks() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    UserCheck,
    Maximize2,
    Store,
    Eye,
    MessageCircle,
    ShoppingBag,
    TrendingUp,
  };

  return (
    <section className="py-16 sm:py-24 bg-[#F1F5F9]/50 border-y border-[#E2E8F0]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-extrabold text-[#0B1E36] border border-[#E2E8F0]">
            7-Step Process
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1E36] md:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475569] md:text-lg font-medium">
            A simple, step-by-step model connecting petrol pump owners with startups and retail brands.
          </p>
        </div>

        {/* 7 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {JOURNEY_STEPS.map((step, idx) => {
            const IconComp = iconMap[step.iconName] || Store;
            return (
              <div key={step.stepNumber} className="relative flex flex-col group">
                <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_35px_rgba(11,30,54,0.06)] flex flex-col items-center text-center relative group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:border-[#0B1E36]/50 group-hover:shadow-[0_20px_45px_rgba(11,30,54,0.12)] transition-all duration-300 h-full">
                  
                  {/* Step Number Circle */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1E36] font-black text-[#FEF9C3] mb-5 shadow-sm text-lg border-2 border-[#F4E409] group-hover:scale-110 group-hover:bg-[#F4E409] group-hover:text-[#061221] group-hover:border-[#0B1E36] transition-all duration-300">
                    {step.stepNumber}
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF9C3] mb-4 text-[#0B1E36] group-hover:bg-[#0B1E36] group-hover:text-[#FEF9C3] transition-colors duration-300">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-black text-[#0B1E36] mb-2 group-hover:text-[#061221] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#475569] leading-relaxed font-medium">
                    {step.shortDescription}
                  </p>
                </div>

                {/* Desktop Connecting Arrow */}
                {idx < JOURNEY_STEPS.length - 1 && (idx + 1) % 4 !== 0 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-1.5 rounded-full bg-[#F4E409] text-[#061221] shadow-sm border border-[#0B1E36]/20 group-hover:translate-x-1.5 group-hover:bg-[#061221] group-hover:text-[#F4E409] transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

