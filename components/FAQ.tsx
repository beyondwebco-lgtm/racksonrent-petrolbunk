"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { EIGHT_FAQS, FAQItem } from "@/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="section-padding bg-[#FFFDF5]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 animate-reveal-up">
          <span className="inline-flex rounded-full bg-[#FFFBCC] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Frequently Asked Questions
          </span>
          <h2 className="section-title-dm mt-2.5 text-[#6B0F1A]">
            Everything You Need to Know
          </h2>
          <p className="body-copy mx-auto mt-2 max-w-2xl text-[#5F5F5F]">
            Find quick answers to common questions about subletting retail space at petrol pumps.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5 animate-reveal-up-delay-1">
          {EIGHT_FAQS.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border-2 border-[#F0E2E4] bg-white shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-5 py-3 sm:py-3.5 flex items-center justify-between text-left gap-3.5 cursor-pointer hover:bg-[#FFFBCC]/50 transition-colors"
                >
                  <span className="font-extrabold text-sm sm:text-base text-[#6B0F1A] flex items-center gap-2.5">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 ${isOpen ? 'text-[#6B0F1A]' : 'text-[#6B0F1A]'}`} />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#6B0F1A]" : "text-[#6B0F1A]"
                    }`}
                  />
                </button>

                <div
                  id={`faq-content-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-6 sm:px-6 pt-3 text-[#5F5F5F] text-sm sm:text-base leading-relaxed border-t border-[#F0E2E4] bg-[#FFFDF5] font-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
