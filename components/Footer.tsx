import React from "react";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-[#520a13] bg-[#3D0710] text-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#520a13]">

          {/* Prominently Enlarged Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
              {/* Square Rack-Icon Logo */}
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white p-0.5 border border-[#F0E2E4] shadow-2xs">
                <Image
                  src="/images/logo.png"
                  alt="Racks on Rent Logo Icon"
                  fill
                  sizes="(max-width: 640px) 44px, 48px"
                  priority
                  className="object-contain"
                />
              </div>

              {/* Separate Horizontal Logo Lockup */}
              <div className="flex flex-col justify-center">
                {/* Main Brand Title */}
                <div className="flex items-baseline font-black tracking-tighter leading-none text-xl sm:text-2xl">
                  <span className="text-white font-black italic">Racks</span>
                  <span className="text-[#F7E200] font-bold italic lowercase mx-1 text-[0.8em]" style={{ fontFamily: "Georgia, serif" }}>on</span>
                  <span className="text-[#F7E200] font-black italic">Rent</span>
                </div>

                {/* Tagline */}
                <div className="flex items-center gap-1 mt-0.5 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.18em] leading-none whitespace-nowrap">
                  <span className="h-[1.5px] w-3 bg-[#F7E200] inline-block" />
                  <span className="text-white">SUBLET SPACE.</span>
                  <span className="text-[#F7E200]">SHARE SUCCESS.</span>
                  <span className="h-[1.5px] w-3 bg-[#F7E200] inline-block" />
                </div>
              </div>
            </div>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-[#F7E200] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold">
            <a
              href={SITE_CONFIG.telLink}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#F7E200] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F7E200]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <span className="text-[#F0E2E4]/40">•</span>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
              <span>WhatsApp</span>
            </a>

            <span className="text-[#F0E2E4]/40">•</span>

            <a
              href={SITE_CONFIG.mailtoLink}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#F7E200] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F7E200]" />
              <span>{SITE_CONFIG.email}</span>
            </a>

            <span className="text-[#F0E2E4]/40">•</span>

            <a
              href={SITE_CONFIG.mailtoSecondaryLink}
              className="inline-flex items-center gap-1.5 text-white/90 hover:text-[#F7E200] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F7E200]" />
              <span>{SITE_CONFIG.emailSecondary}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-white/60 font-medium">
          <p>© 2026 Racks on Rent. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
