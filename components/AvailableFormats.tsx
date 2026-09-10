"use client";

import React from "react";
import { Store, Layers, ShoppingBag, Sparkles, Maximize, ShieldCheck, ArrowRight } from "lucide-react";
import { COMPACT_SPACE_TYPES } from "@/data/spaceTypes";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface AvailableFormatsProps {
  onSelectSpace?: (spaceName: string) => void;
}

export default function AvailableFormats({ onSelectSpace }: AvailableFormatsProps) {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Store,
    Layers,
    ShoppingBag,
    Sparkles,
    Maximize,
    ShieldCheck,
  };

  const handleExplore = (spaceName: string) => {
    if (onSelectSpace) {
      onSelectSpace(spaceName);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="formats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="AVAILABLE FORMATS"
          title={
            <>
              What Kind of Space <span className="text-[#B8913A]">Can Be Offered?</span>
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              Explore popular petrol pump space options that suit display racks, shelves, counters, and kiosks.
            </span>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPACT_SPACE_TYPES.map((space) => {
            const IconComp = iconMap[space.iconName] || Store;
            return (
              <div
                key={space.id}
                className="group rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-6 shadow-[0_12px_35px_rgba(116,2,2,0.06)] hover:shadow-[0_20px_50px_rgba(116,2,2,0.14)] hover:border-[#740202]/50 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFBCC] mb-5 shadow-xs group-hover:bg-[#740202] transition-colors duration-300">
                    <IconComp className="w-8 h-8 text-[#740202] group-hover:text-[#FAFA33] group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-black italic text-[#740202] mb-2.5 group-hover:text-[#B8913A] transition-colors">
                    {space.name}
                  </h3>
                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-medium"
                  >
                    {space.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0E2E4]">
                  <button
                    type="button"
                    onClick={() => handleExplore(space.name)}
                    className="w-full inline-flex items-center justify-between text-sm sm:text-base font-bold text-[#740202] group-hover:text-[#B8913A] transition-colors duration-300 cursor-pointer"
                  >
                    <span>Explore Space</span>
                    <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
