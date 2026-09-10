"use client";

import React from "react";
import { CheckCircle2, Store, ShoppingBag, ArrowRight } from "lucide-react";
import { PRICING_TIERS } from "@/data/pricing";
import { SectionHeader } from "@/components/ui/SectionHeader";

interface PricingProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function Pricing({ onSelectRole }: PricingProps) {
  const handleCta = (roleType: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(roleType);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFBCC]/20 border-t border-[#F0E2E4]" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="TRANSPARENT PRICING"
          title={
            <>
              Simple & <span className="text-[#B8913A]">Transparent Options</span>
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              No hidden commissions. Direct, transparent terms tailored for petrol pump owners and retail brands.
            </span>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {PRICING_TIERS.map((tier) => {
            const isOwner = tier.roleType === "gym-owner";
            const IconComp = isOwner ? Store : ShoppingBag;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl border-2 p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                  tier.highlighted
                    ? "border-[#740202] bg-[#FFFDF5] shadow-[0_20px_55px_rgba(116,2,2,0.14)]"
                    : "border-[#F0E2E4] bg-[#FFFDF5] shadow-[0_12px_35px_rgba(116,2,2,0.06)] hover:border-[#740202]/50 hover:shadow-[0_20px_50px_rgba(116,2,2,0.12)]"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3.5 right-6 bg-[#FAFA33] text-[#740202] text-xs font-black px-4 py-1 rounded-full border border-[#740202]/20 shadow-xs uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#740202] mb-2">
                    <IconComp className="w-4 h-4" />
                    <span>{tier.targetRole}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black italic text-[#740202] mb-3">
                    {tier.title}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-4 pb-4 border-b border-[#F0E2E4]">
                    <span className="text-3xl sm:text-4xl font-black text-[#740202]">
                      {tier.priceDisplay}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#5F5F5F] uppercase">
                      / {tier.period}
                    </span>
                  </div>

                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-medium mb-6"
                  >
                    {tier.description}
                  </p>

                  <div className="space-y-3">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#1F1F1F]">
                        <CheckCircle2 className="w-4 h-4 text-[#B8913A] flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F0E2E4]">
                  <button
                    type="button"
                    onClick={() => handleCta(tier.roleType)}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-6 font-extrabold text-sm sm:text-base border shadow-sm transition-all duration-200 cursor-pointer ${
                      tier.highlighted
                        ? "bg-[#FAFA33] text-[#740202] border-[#740202]/20 hover:bg-[#740202] hover:text-[#FAFA33]"
                        : "bg-[#740202] text-[#FAFA33] border-[#740202] hover:bg-[#500101] hover:text-[#FAFA33]"
                    }`}
                  >
                    <span>{tier.ctaLabel}</span>
                    <ArrowRight className="w-4 h-4" />
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
