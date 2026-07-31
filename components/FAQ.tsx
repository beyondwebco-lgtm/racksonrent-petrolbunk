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
    <section className="py-16 sm:py-24 bg-[#F8FAFC]" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FEF9C3] px-4 py-1.5 text-sm font-extrabold text-[#0B1E36] border border-[#E2E8F0]">
            Frequently Asked Questions
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1E36] md:text-5xl">
            Everything You Need to Know
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475569] md:text-lg font-medium">
            Find quick answers to common questions about subletting retail space at petrol pumps.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {EIGHT_FAQS.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border-2 border-[#E2E8F0] bg-white shadow-xs overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 sm:py-5 flex items-center justify-between text-left gap-4 cursor-pointer hover:bg-[#FEF9C3]/30 transition-colors"
                >
                  <span className="font-extrabold text-base sm:text-lg text-[#0B1E36] flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-[#0B1E36] flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0B1E36] flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0B1E36]" : ""
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
                    <div className="px-5 pb-6 sm:px-6 pt-3 text-[#475569] text-sm sm:text-base leading-relaxed border-t border-[#E2E8F0] bg-[#F8FAFC] font-medium">
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
