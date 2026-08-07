import React from "react";
import { Users, ShieldCheck, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function TopBar() {
  return (
    <div className="bg-[#3D0710] text-white text-xs border-b border-[#520a13] py-1.5 px-4 sm:px-6 lg:px-8 font-medium">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side */}
        <div className="flex items-center gap-1.5 text-white/80">
          <Users className="w-3.5 h-3.5 text-[#FDFF00]" />
          <span>{SITE_CONFIG.topBarTextLeft}</span>
        </div>

        {/* Centre Side */}
        <div className="hidden md:flex items-center gap-1.5 text-white/70">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FDFF00]" />
          <span>{SITE_CONFIG.topBarTextCenter}</span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 ml-auto sm:ml-0">
          <a
            href={SITE_CONFIG.telLink}
            className="flex items-center gap-1 text-white/80 hover:text-[#FDFF00] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#FDFF00]" />
            <span>{SITE_CONFIG.phoneFormatted}</span>
          </a>

          <a
            href={SITE_CONFIG.mailtoLink}
            className="hidden sm:flex items-center gap-1 text-white/80 hover:text-[#FDFF00] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#FDFF00]" />
            <span>{SITE_CONFIG.email}</span>
          </a>

          <a
            href={SITE_CONFIG.mailtoSecondaryLink}
            className="hidden lg:flex items-center gap-1 text-white/80 hover:text-[#FDFF00] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#FDFF00]" />
            <span>{SITE_CONFIG.emailSecondary}</span>
          </a>
        </div>

      </div>
    </div>
  );
}

