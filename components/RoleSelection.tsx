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
    <section className="section-padding bg-white" id="choose-role">
      <div className="container-main">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-reveal-up">
          <span className="inline-flex rounded-full bg-[var(--yellow-pale)] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[var(--charcoal)] border border-[var(--border)]">
            Role Selection
          </span>
          <h2 className="section-title-archivo mt-2.5 text-[var(--maroon)]">
            Choose What Best Describes You
          </h2>
        </div>

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto animate-reveal-up-delay-1">
          {ROLE_CARDS.map((card) => {
            const isBunkOwner = card.role === "bunk-owner";
            return (
              <div
                key={card.id}
                className="card-base flex flex-col justify-between group"
              >
                <div>
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-[var(--yellow-soft)] text-[var(--maroon)] mb-4 sm:mb-5 shadow-xs border border-[var(--border)]">
                    {isBunkOwner ? <Building2 className="w-5 h-5 sm:w-6 sm:h-6" /> : <Store className="w-5 h-5 sm:w-6 sm:h-6" />}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--maroon)] mb-2 sm:mb-3">
                    {card.heading}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed mb-4 sm:mb-5 font-medium">
                    {card.text}
                  </p>

                  {/* 2-Column Bullet Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                    {card.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[var(--maroon)] flex-shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-[13px] font-bold text-[var(--text)] leading-snug">{benefit}</span>
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
