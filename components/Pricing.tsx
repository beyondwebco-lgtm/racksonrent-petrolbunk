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
    <section className="section-padding bg-[#FFFDF5] border-t border-[#F0E2E4]" id="pricing">
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-reveal-up">
          <span className="inline-flex rounded-full bg-[#FFFBCC] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Transparent Pricing
          </span>
          <h2 className="section-title-archivo mt-2.5 text-[#6B0F1A]">
            Simple &amp; Transparent Options
          </h2>
          <p className="body-copy mx-auto mt-2 max-w-2xl text-[#5F5F5F]">
            No hidden commissions. Direct, transparent terms tailored for petrol pump owners and retail brands.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto animate-reveal-up-delay-1">
          {PRICING_TIERS.map((tier: PricingTier, idx: number) => {
            const isMaroon = idx % 2 === 0;
            return (
              <div
                key={tier.id}
                className={`rounded-3xl border-2 p-6 sm:p-7 flex flex-col justify-between transition-all relative shadow-lg ${
                  isMaroon
                    ? "bg-[#6B0F1A] text-white border-[#520a13]"
                    : "bg-[#FDFF00] text-[#3D0710] border-[#E6D900]"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#6B0F1A] text-white text-xs font-black px-4 py-1 rounded-full border border-[#520a13] shadow-xs">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex items-center justify-between gap-4 mb-3">
                    <div>
                      <span className={`text-xs font-extrabold uppercase tracking-wider ${isMaroon ? "text-[#FDFF00]" : "text-[#6B0F1A]"}`}>
                        {tier.targetRole}
                      </span>
                      <h3 className={`text-xl sm:text-2xl font-black mt-0.5 ${isMaroon ? "text-white" : "text-[#3D0710]"}`}>
                        {tier.title}
                      </h3>
                    </div>

                    <div className={`p-2.5 rounded-2xl ${isMaroon ? "bg-[#FDFF00] text-[#3D0710] border border-[#E6D900]" : "bg-[#6B0F1A] text-white border border-[#520a13]"}`}>
                      {tier.roleType === "bunk-owner" ? <Building2 className="w-5 h-5" /> : <Store className="w-5 h-5" />}
                    </div>
                  </div>

                  <div className={`my-4 pb-4 border-b ${isMaroon ? "border-white/10" : "border-[#3D0710]/15"}`}>
                    <span className={`text-3xl sm:text-4xl font-black ${isMaroon ? "text-white" : "text-[#3D0710]"}`}>
                      {tier.priceDisplay}
                    </span>
                    <span className={`text-xs sm:text-sm font-bold ml-2 ${isMaroon ? "text-white/80" : "text-[#3D0710]/80"}`}>
                      / {tier.period}
                    </span>
                    <p className={`text-xs mt-1 font-medium ${isMaroon ? "text-white/80" : "text-[#3D0710]/80"}`}>
                      {tier.description}
                    </p>
                  </div>

                  <div className="space-y-2 mb-6">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${isMaroon ? "text-[#FDFF00]" : "text-[#6B0F1A]"}`} />
                        <span className={`text-xs sm:text-sm font-extrabold ${isMaroon ? "text-white/95" : "text-[#3D0710]"}`}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handlePricingClick(tier.roleType)}
                  className={`w-full mt-auto ${isMaroon ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {tier.ctaLabel}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
