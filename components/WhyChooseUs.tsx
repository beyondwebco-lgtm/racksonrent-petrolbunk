import React from "react";
import {
  MapPin,
  Store,
  IndianRupee,
  Handshake,
  Megaphone,
  ChartNoAxesCombined,
  ArrowUpRight,
  ShieldCheck,
  LucideProps,
} from "lucide-react";
import { WHY_CHOOSE_US_REASONS, WhyChooseUsReason } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ComponentType<LucideProps>> = {
    MapPin,
    Store,
    IndianRupee,
    Handshake,
    Megaphone,
    ChartNoAxesCombined,
  };

  return (
    <section
      className="relative overflow-hidden bg-[#FFFCF4] border-t border-[#F0E2E4] py-14 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 advantages-section"
      id="why-choose-us"
    >
      {/* Decorative Ambient Background Shapes */}
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#FFF2A8]/30 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#7A1220]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <span className="inline-flex items-center rounded-full border border-[#E8D676] bg-[#FFF2A8] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[#7A1220]">
            Platform Advantages
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] text-[#76131F]">
            Why Choose Racks on Rent?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base lg:text-lg leading-relaxed text-neutral-600 font-medium">
            A simple platform helping petrol pump owners monetise unused space while giving brands access to high-visibility retail locations.
          </p>
        </div>

        {/* 6 Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {WHY_CHOOSE_US_REASONS.map((item: WhyChooseUsReason) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            const isFeatured = item.isFeatured;

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border p-5 sm:p-6 shadow-[0_12px_40px_rgba(76,18,24,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_55px_rgba(76,18,24,0.12)] min-h-[210px] lg:min-h-[190px] flex h-full flex-col justify-between ${
                  isFeatured
                    ? "border-[#7A1220]/30 bg-gradient-to-br from-white to-[#FFF9DC]"
                    : "border-[#7A1220]/10 bg-white/90 hover:border-[#7A1220]/30"
                }`}
              >
                <div>
                  {/* Top Row: Two-Tone Icon + Featured Badge / Hover Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF2A8] text-[#7A1220] transition-all duration-300 group-hover:bg-[#7A1220] group-hover:text-[#FFF2A8] group-hover:scale-105 flex-shrink-0">
                      <IconComp size={23} strokeWidth={1.8} />
                    </div>

                    {isFeatured && item.badge ? (
                      <span className="inline-flex items-center rounded-full bg-[#7A1220] px-3 py-1 text-[11px] font-bold text-[#FFF2A8] tracking-wider uppercase shadow-xs">
                        {item.badge}
                      </span>
                    ) : (
                      <ArrowUpRight className="h-4 w-4 text-[#76131F] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                    )}
                  </div>

                  {/* Card Title & Description */}
                  <h3 className="text-xl font-semibold tracking-[-0.015em] text-[#76131F]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[15px] leading-6 text-neutral-600 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
