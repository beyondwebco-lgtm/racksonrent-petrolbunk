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
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FEF9C3] px-4 py-1.5 text-sm font-extrabold text-[#0B1E36] border border-[#E2E8F0]">
            Transparent Pricing
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1E36] md:text-5xl">
            Simple & Transparent Options
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475569] md:text-lg font-medium">
            No hidden commissions. Direct, transparent terms tailored for petrol pump owners and retail brands.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {PRICING_TIERS.map((tier: PricingTier) => (
            <div
              key={tier.id}
              className={`rounded-3xl border-2 p-8 flex flex-col justify-between transition-all relative ${
                tier.highlighted
                  ? "border-[#0B1E36] bg-[#FEF9C3]/30 shadow-[0_16px_40px_rgba(11,30,54,0.12)]"
                  : "border-[#E2E8F0] bg-white shadow-[0_12px_35px_rgba(11,30,54,0.06)]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0B1E36] text-[#FEF9C3] text-xs font-black px-4 py-1 rounded-full border border-[#F4E409]">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#0B1E36]">
                      {tier.targetRole}
                    </span>
                    <h3 className="text-2xl font-black text-[#0B1E36] mt-1">
                      {tier.title}
                    </h3>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#FEF9C3] text-[#0B1E36]">
                    {tier.roleType === "bunk-owner" ? <Building2 className="w-6 h-6" /> : <Store className="w-6 h-6" />}
                  </div>
                </div>

                <div className="my-6 pb-6 border-b border-[#E2E8F0]">
                  <span className="text-4xl font-black text-[#0B1E36]">
                    {tier.priceDisplay}
                  </span>
                  <span className="text-sm font-bold text-[#475569] ml-2">
                    / {tier.period}
                  </span>
                  <p className="text-xs text-[#475569] mt-2 font-medium">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#15803D] flex-shrink-0" />
                      <span className="text-sm font-extrabold text-[#0F172A]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlePricingClick(tier.roleType)}
                className={`w-full py-4 px-6 rounded-full font-extrabold transition-all shadow-xs cursor-pointer text-center ${
                  tier.highlighted
                    ? "bg-[#F4E409] text-[#061221] border border-[#0B1E36]/20 hover:bg-[#061221] hover:text-[#F4E409]"
                    : "bg-[#0B1E36] text-[#FEF9C3] hover:bg-[#061221] hover:text-[#F4E409]"
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
