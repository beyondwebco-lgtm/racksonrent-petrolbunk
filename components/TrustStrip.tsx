import React from "react";
import { Building2, Store, MapPin, ShieldCheck } from "lucide-react";
import { TRUST_STRIP_ITEMS } from "@/data/stats";

export default function TrustStrip() {
  const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Building2,
    Store,
    MapPin,
    ShieldCheck,
  };

  return (
    <div className="bg-[#3D0710] text-white py-3 sm:py-4 border-y border-[#520a13] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {TRUST_STRIP_ITEMS.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || ShieldCheck;
            return (
              <div
                key={idx}
                className="group flex items-center justify-center gap-2.5 p-3 rounded-2xl bg-[#6B0F1A]/80 border border-white/10 hover:bg-[#6B0F1A] hover:border-[#F7E200]/40 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <IconComp className="w-5 h-5 text-[#F7E200] group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs sm:text-sm font-bold text-white/90 group-hover:text-white">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
