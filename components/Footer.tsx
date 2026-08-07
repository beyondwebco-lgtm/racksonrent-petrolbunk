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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="w-4 h-4 text-[#25D366] fill-current"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
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
