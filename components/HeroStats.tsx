"use client";

import React from "react";
import { Layers, Store, TrendingUp } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function HeroStats() {
  const statsList = [
    {
      id: "spaces",
      targetNumber: 500,
      prefix: "",
      suffix: "+",
      label: "Petrol Pump Spaces",
      icon: <Layers className="w-6 h-6 text-[#F4E409] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      id: "brands",
      targetNumber: 1000,
      prefix: "",
      suffix: "+",
      label: "Startups Connected",
      icon: <Store className="w-6 h-6 text-[#F4E409] group-hover:scale-110 transition-transform duration-300" />,
    },
    {
      id: "earnings",
      targetNumber: 5,
      prefix: "₹ ",
      suffix: " Lakhs+",
      label: "Income Generated",
      icon: <TrendingUp className="w-6 h-6 text-[#F4E409] group-hover:scale-110 transition-transform duration-300" />,
    },
  ];

  return (
    <div className="bg-[#0B1E36] text-white py-6 border-y border-[#061221] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center divide-y sm:divide-y-0 sm:divide-x divide-[#061221]/60">
          {statsList.map((stat) => (
            <div
              key={stat.id}
              className="pt-4 sm:pt-0 flex flex-col items-center justify-center space-y-1 p-3 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#061221]/40 group cursor-default"
            >
              <div className="p-2.5 rounded-2xl bg-[#061221]/50 mb-1 group-hover:bg-[#061221] transition-colors">
                {stat.icon}
              </div>
              <span className="text-3xl sm:text-4xl font-black text-[#F4E409] tracking-tight">
                <AnimatedCounter
                  targetNumber={stat.targetNumber}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  durationMs={1200}
                />
              </span>
              <span className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

