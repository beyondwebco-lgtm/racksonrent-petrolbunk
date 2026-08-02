"use client";

import React from "react";
import { CheckCircle2, Building2, Store } from "lucide-react";
import { PRICING_TIERS, PricingTier } from "@/data/pricing";

interface PricingProps {
  onSelectRole?: (role: "bunk-owner" | "brand-merchant") => void;
}

export default function Pricing({ onSelectRole }: PricingProps) {
  const handlePricingClick = (roleType: "bunk-owner" | "brand-merchant") => {
    if (onSelectRole) {
      onSelectRole(roleType);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Transparent Pricing
          </span>
          <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#6B0F1A] md:text-4xl lg:text-[clamp(2.25rem,3.2vw,3.5rem)]">
            Simple & Transparent Options
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#5F5F5F] md:text-base font-medium">
            No hidden commissions. Direct, transparent terms tailored for petrol pump owners and retail brands.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier: PricingTier) => (
            <div
              key={tier.id}
              className={`rounded-3xl border-2 p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                tier.highlighted
                  ? "border-[#6B0F1A] bg-[#FFF6A3]/30 shadow-[0_16px_40px_rgba(11,30,54,0.12)]"
                  : "border-[#F0E2E4] bg-white shadow-[0_12px_35px_rgba(11,30,54,0.06)]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B0F1A] text-[#FFF6A3] text-xs font-black px-4 py-1 rounded-full border border-[#F4E409]">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#6B0F1A]">
                      {tier.targetRole}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#6B0F1A] mt-0.5">
                      {tier.title}
                    </h3>
                  </div>

                  <div className="p-2.5 rounded-2xl bg-[#FFF6A3] text-[#6B0F1A]">
                    {tier.roleType === "bunk-owner" ? <Building2 className="w-5 h-5" /> : <Store className="w-5 h-5" />}
                  </div>
                </div>

                <div className="my-4 pb-4 border-b border-[#F0E2E4]">
                  <span className="text-3xl sm:text-4xl font-black text-[#6B0F1A]">
                    {tier.priceDisplay}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#5F5F5F] ml-2">
                    / {tier.period}
                  </span>
                  <p className="text-xs text-[#5F5F5F] mt-1 font-medium">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#6B0F1A] flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-extrabold text-[#1F1F1F]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlePricingClick(tier.roleType)}
                className={`w-full py-3 px-6 rounded-full font-extrabold text-xs sm:text-sm transition-all shadow-xs cursor-pointer text-center ${
                  tier.highlighted
                    ? "bg-[#F4E409] text-[#3D0710] border border-[#6B0F1A]/20 hover:bg-[#3D0710] hover:text-[#F4E409]"
                    : "bg-[#6B0F1A] text-[#FFF6A3] hover:bg-[#3D0710] hover:text-[#F4E409]"
                }`}
              >
                {tier.ctaLabel}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
