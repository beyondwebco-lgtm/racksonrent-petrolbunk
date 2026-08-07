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
    <section className="section-padding bg-[#FFFDF5]" id="choose-role">
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-reveal-up">
          <span className="inline-flex rounded-full bg-[#FFFBCC] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Role Selection
          </span>
          <h2 className="section-title-archivo mt-2.5 text-[#6B0F1A]">
            Choose What Best Describes You
          </h2>
        </div>

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto animate-reveal-up-delay-1">
          {ROLE_CARDS.map((card, idx) => {
            const isBunkOwner = card.role === "bunk-owner";
            const isMaroon = idx % 2 === 0;

            return (
              <div
                key={card.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between group shadow-lg transition-all duration-300 ${
                  isMaroon
                    ? "bg-[#6B0F1A] text-white border-2 border-[#520a13]"
                    : "bg-[#FAFA33] text-[#3D0710] border-2 border-[#E6D900]"
                }`}
              >
                <div>
                  <div
                    className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl mb-4 sm:mb-5 shadow-xs ${
                      isMaroon
                        ? "bg-[#FAFA33] text-[#3D0710] border border-[#E6D900]"
                        : "bg-[#6B0F1A] text-white border border-[#520a13]"
                    }`}
                  >
                    {isBunkOwner ? <Building2 className="w-5 h-5 sm:w-6 sm:h-6" /> : <Store className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>

                  <h3
                    className={`text-xl sm:text-2xl font-extrabold tracking-tight mb-2 sm:mb-3 ${
                      isMaroon ? "text-white" : "text-[#3D0710]"
                    }`}
                  >
                    {card.heading}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5 font-medium ${
                      isMaroon ? "text-white/80" : "text-[#3D0710]/80"
                    }`}
                  >
                    {card.text}
                  </p>

                  {/* 2-Column Bullet Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {card.benefits.map((benefit, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isMaroon ? "text-[#FAFA33]" : "text-[#6B0F1A]"
                          }`}
                        />
                        <span
                          className={`text-xs sm:text-[13px] font-bold leading-snug ${
                            isMaroon ? "text-white/95" : "text-[#3D0710]"
                          }`}
                        >
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRoleClick(card.role)}
                  className={`w-full mt-auto ${isBunkOwner ? "btn-primary" : "btn-secondary"}`}
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
