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
    <section className="section-padding bg-[var(--yellow-soft)] border-t border-[var(--border)]" id="pricing">
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-reveal-up">
          <span className="inline-flex rounded-full bg-[var(--yellow-pale)] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[var(--charcoal)] border border-[var(--border)]">
            Transparent Pricing
          </span>
          <h2 className="section-title-archivo mt-2.5 text-[var(--maroon)]">
            Simple & Transparent Options
          </h2>
          <p className="body-copy mx-auto mt-2 max-w-2xl text-[var(--text-muted)]">
            No hidden commissions. Direct, transparent terms tailored for petrol pump owners and retail brands.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto animate-reveal-up-delay-1">
          {PRICING_TIERS.map((tier: PricingTier) => (
            <div
              key={tier.id}
              className={`rounded-3xl border-2 p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                tier.highlighted
                  ? "border-[var(--black)] bg-white shadow-[0_16px_40px_rgba(17,17,17,0.12)] scale-[1.02]"
                  : "border-[var(--border)] bg-white shadow-[0_12px_35px_rgba(17,17,17,0.05)] hover:border-[var(--black)]"
              }`}
            >
              {tier.highlighted && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[var(--black)] text-[var(--yellow)] text-xs font-black px-4 py-1 rounded-full border border-[var(--yellow)]">
                  Most Popular
                </span>
              )}

              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[var(--charcoal)]">
                      {tier.targetRole}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[var(--maroon)] mt-0.5">
                      {tier.title}
                    </h3>
                  </div>

                  <div className={`p-2.5 rounded-2xl ${tier.highlighted ? 'bg-[var(--yellow)] text-[var(--black)] border border-[var(--black)]' : 'bg-[var(--yellow-soft)] text-[var(--maroon)] border border-[var(--border)]'}`}>
                    {tier.roleType === "bunk-owner" ? <Building2 className="w-5 h-5" /> : <Store className="w-5 h-5" />}
                  </div>
                </div>

                <div className="my-4 pb-4 border-b border-[var(--border)]">
                  <span className="text-3xl sm:text-4xl font-black text-[var(--maroon)]">
                    {tier.priceDisplay}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[var(--text-muted)] ml-2">
                    / {tier.period}
                  </span>
                  <p className="text-xs text-[var(--text-muted)] mt-1 font-medium">
                    {tier.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {tier.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <CheckCircle2 className={`w-4 h-4 flex-shrink-0 ${tier.highlighted ? 'text-[var(--maroon)]' : 'text-[var(--text-muted)]'}`} />
                      <span className="text-xs sm:text-sm font-extrabold text-[var(--text)]">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => handlePricingClick(tier.roleType)}
                className={`w-full mt-auto ${tier.highlighted ? 'btn-primary' : 'btn-secondary'}`}
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
