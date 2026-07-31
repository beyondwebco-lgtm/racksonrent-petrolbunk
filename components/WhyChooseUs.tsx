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
    <section className="py-16 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0]" id="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex rounded-full bg-[#FEF9C3] px-4 py-1.5 text-sm font-extrabold text-[#0B1E36] border border-[#E2E8F0]">
            Platform Advantages
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B1E36] md:text-5xl">
            Why Choose Racks on Rent?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#475569] md:text-lg font-medium">
            We provide a simple, transparent platform connecting petrol pump owners with retail entrepreneurs.
          </p>
        </div>

        {/* 6 Advantage Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_REASONS.map((item) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group rounded-3xl border-2 border-[#E2E8F0] bg-white p-6 shadow-[0_12px_35px_rgba(11,30,54,0.06)] hover:shadow-[0_20px_50px_rgba(11,30,54,0.14)] hover:border-[#0B1E36]/50 transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEF9C3] mb-5 shadow-xs group-hover:bg-[#0B1E36] transition-colors duration-300">
                    <IconComp className="w-8 h-8 text-[#0B1E36] group-hover:text-[#FEF9C3] group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <h3 className="text-xl font-black text-[#0B1E36] mb-2.5 group-hover:text-[#061221] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#475569] leading-relaxed font-medium">
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

