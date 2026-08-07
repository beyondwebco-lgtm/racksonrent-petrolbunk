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
      className="relative overflow-hidden bg-[var(--surface-warm)] border-t border-[var(--border)] section-padding"
      id="why-choose-us"
    >
      {/* Decorative Ambient Background Shapes */}
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[var(--yellow)]/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[var(--maroon)]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 container-main">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12 animate-reveal-up">
          <span className="inline-flex items-center rounded-full border border-[var(--yellow-hover)] bg-[var(--yellow-soft)] px-4 py-1.5 text-xs sm:text-sm font-semibold text-[var(--maroon)]">
            Platform Advantages
          </span>
          <h2 className="section-title-archivo mt-3 text-[var(--maroon)]">
            Why Choose Racks on Rent?
          </h2>
          <p className="body-copy mx-auto mt-3 max-w-2xl text-[var(--text-muted)] font-medium">
            A simple platform helping petrol pump owners monetise unused space while giving brands access to high-visibility retail locations.
          </p>
        </div>

        {/* 6 Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 animate-reveal-up-delay-1">
          {WHY_CHOOSE_US_REASONS.map((item: WhyChooseUsReason, idx: number) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            const isMaroon = idx % 2 === 0;

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-3xl p-6 min-h-[210px] lg:min-h-[190px] flex h-full flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isMaroon
                    ? "bg-[#6B0F1A] text-white border border-[#520a13] hover:border-[#FAFA33]"
                    : "bg-[#FAFA33] text-[#3D0710] border border-[#E6D900] hover:border-[#6B0F1A]"
                }`}
              >
                <div>
                  {/* Top Row: Two-Tone Icon + Featured Badge / Hover Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 flex-shrink-0 ${
                        isMaroon
                          ? "bg-[#FAFA33] text-[#3D0710] border border-[#E6D900] group-hover:bg-white group-hover:scale-105"
                          : "bg-[#6B0F1A] text-white border border-[#520a13] group-hover:bg-[#3D0710] group-hover:scale-105"
                      }`}
                    >
                      <IconComp size={23} strokeWidth={1.8} />
                    </div>

                    {item.badge ? (
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-bold tracking-wider uppercase shadow-xs ${
                          isMaroon
                            ? "bg-[#FAFA33] text-[#3D0710] border border-[#E6D900]"
                            : "bg-[#6B0F1A] text-white border border-[#520a13]"
                        }`}
                      >
                        {item.badge}
                      </span>
                    ) : (
                      <ArrowUpRight
                        className={`h-5 w-5 opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100 ${
                          isMaroon ? "text-[#FAFA33]" : "text-[#6B0F1A]"
                        }`}
                      />
                    )}
                  </div>

                  {/* Card Title & Description */}
                  <h3
                    className={`card-title font-black transition-colors ${
                      isMaroon ? "text-white group-hover:text-[#FAFA33]" : "text-[#3D0710] group-hover:text-[#6B0F1A]"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2.5 text-[15px] leading-6 font-medium ${
                      isMaroon ? "text-white/80" : "text-[#3D0710]/80"
                    }`}
                  >
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
