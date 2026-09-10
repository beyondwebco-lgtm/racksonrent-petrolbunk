"use client";

import React from "react";
import { Store, ShoppingBag, CheckCircle2, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ROLE_CARDS } from "@/data/benefits";

interface RoleSelectionProps {
  onSelectRole?: (role: "gym-owner" | "wellness") => void;
}

export default function RoleSelection({ onSelectRole }: RoleSelectionProps) {
  const handleRoleAction = (role: "gym-owner" | "wellness") => {
    if (onSelectRole) {
      onSelectRole(role);
    }
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="role-selection">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="ROLE SELECTION"
          title={
            <>
              Choose What <span className="text-[#B8913A]">Best Describes You</span>
            </>
          }
          subtitle={
            <span
              style={{ fontFamily: "'Playfair Display', serif" }}
              className="text-lg sm:text-[22px] font-medium not-italic text-[#1F1F1F] leading-relaxed block"
            >
              Discover tailored benefits for petrol pump owners looking to monetise extra space and startups seeking prime offline retail footfall.
            </span>
          }
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {ROLE_CARDS.map((card) => {
            const isOwner = card.role === "gym-owner";
            const IconComp = isOwner ? Store : ShoppingBag;

            return (
              <div
                key={card.id}
                className="rounded-3xl border-2 border-[#F0E2E4] bg-[#FFFDF5] p-6 sm:p-8 shadow-[0_16px_45px_rgba(116,2,2,0.08)] hover:shadow-[0_24px_60px_rgba(116,2,2,0.16)] hover:border-[#740202]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFFBCC] shadow-xs text-[#740202]">
                      <IconComp className="w-7 h-7" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black italic text-[#740202] leading-tight">
                        {card.heading}
                      </h3>
                    </div>
                  </div>

                  <p
                    style={{ fontFamily: "'Playfair Display', serif" }}
                    className="text-sm sm:text-base text-[#1F1F1F] leading-relaxed font-medium mb-6"
                  >
                    {card.text}
                  </p>

                  <div className="space-y-3 pt-2">
                    {card.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-[#1F1F1F]">
                        <CheckCircle2 className="w-4 h-4 text-[#B8913A] flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#F0E2E4]">
                  <button
                    type="button"
                    onClick={() => handleRoleAction(card.role)}
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-full py-3.5 px-6 font-extrabold text-sm sm:text-base border shadow-sm transition-all duration-200 cursor-pointer ${
                      isOwner
                        ? "bg-[#FAFA33] text-[#740202] border-[#740202]/20 hover:bg-[#740202] hover:text-[#FAFA33]"
                        : "bg-[#740202] text-[#FAFA33] border-[#740202] hover:bg-[#500101] hover:text-[#FAFA33]"
                    }`}
                  >
                    <span>{card.ctaLabel}</span>
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
