import React from "react";
import { Users, ShieldCheck, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function TopBar() {
  return (
    <div className="bg-[#0B1E36] text-white text-xs border-b border-[#061221] py-2 px-4 sm:px-6 lg:px-8 font-medium">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side */}
        <div className="flex items-center gap-1.5 text-[#FEF9C3]">
          <Users className="w-3.5 h-3.5 text-[#F4E409]" />
          <span>{SITE_CONFIG.topBarTextLeft}</span>
        </div>

        {/* Centre Side */}
        <div className="hidden md:flex items-center gap-1.5 text-white/90">
          <ShieldCheck className="w-3.5 h-3.5 text-[#F4E409]" />
          <span>{SITE_CONFIG.topBarTextCenter}</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <a
            href={SITE_CONFIG.telLink}
            className="flex items-center gap-1 hover:text-[#F4E409] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#F4E409]" />
            <span>{SITE_CONFIG.phoneFormatted}</span>
          </a>

          <a
            href={SITE_CONFIG.mailtoLink}
            className="hidden sm:flex items-center gap-1 hover:text-[#F4E409] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#F4E409]" />
            <span>{SITE_CONFIG.email}</span>
          </a>
        </div>

      </div>
    </div>
  );
}

