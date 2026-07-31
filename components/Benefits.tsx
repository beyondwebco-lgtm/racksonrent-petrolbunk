import React from "react";
import { CheckCircle2, Building2, Store } from "lucide-react";
import { BENEFITS_COMPARISON } from "@/data/benefits";

export default function Benefits() {
  const { petrolPumpOwners, startups } = BENEFITS_COMPARISON;

  return (
    <section className="py-16 sm:py-24 bg-[#F8FAFC]" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FEF9C3] px-4 py-1.5 text-sm font-extrabold text-[#0B1E36] border border-[#E2E8F0]">
            Win-Win Partnership
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1E36] md:text-5xl">
            One Partnership. Shared Growth.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475569] md:text-lg font-medium">
            Discover how space subletting delivers immediate advantages to both petrol pump owners and retail startups.
          </p>
        </div>

        {/* 2-Column Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Petrol Pump Owner */}
          <div className="rounded-3xl border-2 border-[#E2E8F0] bg-white p-8 shadow-[0_12px_35px_rgba(11,30,54,0.06)] hover:border-[#0B1E36]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#E2E8F0] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF9C3] text-[#0B1E36]">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#0B1E36]">
                  {petrolPumpOwners.title}
                </h3>
              </div>

              <div className="space-y-4">
                {petrolPumpOwners.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#15803D] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Startup or Retail Entrepreneur */}
          <div className="rounded-3xl border-2 border-[#E2E8F0] bg-white p-8 shadow-[0_12px_35px_rgba(11,30,54,0.06)] hover:border-[#0B1E36]/30 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 border-b border-[#E2E8F0] pb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FEF9C3] text-[#0B1E36]">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-black text-[#0B1E36]">
                  {startups.title}
                </h3>
              </div>

              <div className="space-y-4">
                {startups.points.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#15803D] flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-extrabold text-[#0F172A]">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

