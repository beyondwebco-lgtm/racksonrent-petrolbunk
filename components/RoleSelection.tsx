"use client";

import React from "react";
import { CheckCircle2, Building2, Store } from "lucide-react";
import { ROLE_CARDS } from "@/data/benefits";

interface RoleSelectionProps {
  onSelectRole?: (role: "bunk-owner" | "brand-merchant") => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  const handleRoleClick = (role: "bunk-owner" | "brand-merchant") => {
    if (onSelectRole) {
      onSelectRole(role);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5]" id="choose-role">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-4 py-1.5 text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Role Selection
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl">
            Choose What Best Describes You
          </h2>
        </div>

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ROLE_CARDS.map((card) => {
            const isBunkOwner = card.role === "bunk-owner";
            return (
              <div
                key={card.id}
                className="rounded-3xl border-2 border-[#F0E2E4] bg-white p-8 shadow-[0_12px_35px_rgba(11,30,54,0.06)] hover:shadow-[0_20px_50px_rgba(11,30,54,0.14)] hover:border-[#6B0F1A]/40 transition-all hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FFF6A3] text-[#6B0F1A] mb-6 shadow-xs">
                    {isBunkOwner ? <Building2 className="w-6 h-6" /> : <Store className="w-6 h-6" />}
                  </div>

                  <h3 className="text-2xl font-black text-[#6B0F1A] mb-3">
                    {card.heading}
                  </h3>

                  <p className="text-base text-[#5F5F5F] leading-relaxed mb-6 font-medium">
                    {card.text}
                  </p>

                  <div className="space-y-3 mb-8">
                    {card.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#6B0F1A] flex-shrink-0" />
                        <span className="text-sm font-extrabold text-[#1F1F1F]">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRoleClick(card.role)}
                  className={`w-full py-3.5 px-6 rounded-full font-extrabold transition-all shadow-xs cursor-pointer text-center ${
                    isBunkOwner
                      ? "bg-[#F4E409] text-[#3D0710] border border-[#6B0F1A]/20 hover:bg-[#3D0710] hover:text-[#F4E409]"
                      : "bg-[#6B0F1A] text-[#FFF6A3] hover:bg-[#3D0710] hover:text-[#F4E409]"
                  }`}
                >
                  {card.ctaLabel}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
