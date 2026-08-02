import React from "react";
import { Target, BadgePercent, PieChart, HeartHandshake, Users, Rocket, ShieldCheck } from "lucide-react";
import { WHY_CHOOSE_US_REASONS } from "@/data/whyChooseUs";

export default function WhyChooseUs() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Target,
    BadgePercent,
    PieChart,
    HeartHandshake,
    Users,
    Rocket,
  };

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-[#FFFDF5] border-t border-[#F0E2E4]" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="inline-flex rounded-full bg-[#FFF6A3] px-3.5 py-1 text-xs sm:text-sm font-extrabold text-[#6B0F1A] border border-[#F0E2E4]">
            Platform Advantages
          </span>
          <h2 className="mt-2.5 text-2xl font-extrabold tracking-tight text-[#6B0F1A] md:text-4xl lg:text-[clamp(2.25rem,3.2vw,3.5rem)]">
            Why Choose Racks on Rent?
          </h2>
          <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-[#5F5F5F] md:text-base font-medium">
            We provide a simple, transparent platform connecting petrol pump owners with retail entrepreneurs.
          </p>
        </div>

        {/* 6 Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {WHY_CHOOSE_US_REASONS.map((item) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-3xl border-2 border-[#F0E2E4] bg-white p-5 lg:p-6 shadow-[0_12px_35px_rgba(11,30,54,0.06)] hover:shadow-[0_20px_50px_rgba(11,30,54,0.14)] hover:border-[#6B0F1A]/50 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF6A3] mb-4 shadow-xs group-hover:bg-[#6B0F1A] transition-colors duration-300">
                    <IconComp className="w-5.5 h-5.5 text-[#6B0F1A] group-hover:text-[#FFF6A3] group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-lg font-black text-[#6B0F1A] mb-2 group-hover:text-[#3D0710] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F5F5F] leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

