import React from "react";
import Image from "next/image";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/config";

export default function Footer() {
  return (
    <footer className="border-t border-[#0B1E36] bg-[#061221] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#0B1E36]">
          
          {/* Prominently Enlarged Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-[#F4E409]/60 shadow-md flex-shrink-0 bg-white p-1">
              <Image
                src="/images/logo.jpeg"
                alt="Racks on Rent Logo"
                fill
                sizes="(max-width: 640px) 56px, 64px"
                className="object-contain"
              />
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-black text-white block leading-none">
                Racks<span className="text-[#F4E409]">on</span>Rent
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-[#FEF9C3] uppercase tracking-wider block mt-1">
                {SITE_CONFIG.tagline}
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-bold">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#FEF9C3] hover:text-[#F4E409] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct Contact Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-bold">
            <a
              href={SITE_CONFIG.telLink}
              className="inline-flex items-center gap-1.5 text-[#F8FAFC] hover:text-[#F4E409] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#F4E409]" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>

            <span className="text-[#0B1E36]">•</span>

            <a
              href={SITE_CONFIG.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[#F8FAFC] hover:text-[#F4E409] transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#F4E409] fill-current" />
              <span>WhatsApp</span>
            </a>

            <span className="text-[#0B1E36]">•</span>

            <a
              href={SITE_CONFIG.mailtoLink}
              className="inline-flex items-center gap-1.5 text-[#F8FAFC] hover:text-[#F4E409] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#F4E409]" />
              <span>{SITE_CONFIG.email}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 text-center text-xs text-[#FEF9C3]/80 font-medium">
          <p>© 2026 Racks on Rent. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

