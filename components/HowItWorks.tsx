import React from "react";
import { Store, Search, Calendar, ShoppingBag, TrendingUp, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "1 — List Petrol Pump Space",
      description: "Petrol pump owners list unused forecourt racks, shelves, counters, or kiosk space.",
      icon: Store,
    },
    {
      number: 2,
      title: "2 — Browse Pump Spaces",
      description: "Startups and retail brands discover verified fuel station locations across city and highway routes.",
      icon: Search,
    },
    {
      number: 3,
      title: "3 — Connect & Agree Terms",
      description: "Select a suitable pump spot and agree on transparent monthly rental terms.",
      icon: Calendar,
    },
    {
      number: 4,
      title: "4 — Set Up Display & Sell",
      description: "Install your branded rack or kiosk where daily commuters and drivers see and buy your products.",
      icon: ShoppingBag,
    },
    {
      number: 5,
      title: "5 — Shared Success",
      description: "Fuel station owners earn steady extra rent while brands achieve high-visibility physical growth.",
      icon: TrendingUp,
    },
  ];

  const handleExploreProcess = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFBCC]/30 border-y border-[#F0E2E4]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeader
          badge="SEE HOW IT WORKS"
          title={
            <>
              How It <span className="text-[#B8913A]">Works</span>
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              Discover how petrol pump spaces become high-visibility product display opportunities.
            </span>
          }
        />

        {/* 5 Step Cards with Desktop Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div key={step.number} className="relative flex flex-col group">
                <div className="rounded-3xl border border-[#F0E2E4] bg-[#FFFDF5] p-5 shadow-[0_12px_35px_rgba(116,2,2,0.06)] flex flex-col items-center text-center relative group-hover:-translate-y-1.5 group-hover:scale-[1.01] group-hover:border-[#740202]/50 group-hover:shadow-[0_20px_45px_rgba(116,2,2,0.12)] transition-all duration-300 h-full">
                  
                  {/* Step Number Circle */}
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#740202] font-black text-[#FAFA33] mb-4 shadow-sm text-base border-2 border-[#FAFA33] group-hover:scale-110 group-hover:bg-[#FAFA33] group-hover:text-[#740202] group-hover:border-[#740202] transition-all duration-300">
                    {step.number}
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#FFFBCC] mb-3 text-[#740202] group-hover:bg-[#740202] group-hover:text-[#FAFA33] transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>

                  <h3 className="text-base font-black text-[#740202] mb-2 group-hover:text-[#B8913A] transition-colors">
                    {step.title}
                  </h3>

                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-xs sm:text-sm text-[#1F1F1F] leading-relaxed font-medium"
                  >
                    {step.description}
                  </p>
                </div>

                {/* Connecting Desktop Arrow */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 p-1 rounded-full bg-[#FAFA33] text-[#740202] shadow-sm border border-[#740202]/20 group-hover:translate-x-1 group-hover:bg-[#740202] group-hover:text-[#FAFA33] transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Explore the Process CTA */}
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={handleExploreProcess}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FAFA33] px-8 py-3.5 text-sm sm:text-base font-extrabold text-[#740202] border border-[#740202]/20 shadow-sm hover:bg-[#740202] hover:text-[#FAFA33] hover:shadow-md active:scale-95 transition-all cursor-pointer"
          >
            <span>Explore the Process</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

