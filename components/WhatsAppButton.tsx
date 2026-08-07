"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/data/config";

export default function WhatsAppButton() {
  return (
    <a
      href={SITE_CONFIG.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enquire on WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-full shadow-2xl border-2 border-[#128C7E]/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 cursor-pointer"
    >
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-current flex-shrink-0" />
      <span className="font-extrabold text-xs sm:text-sm hidden sm:inline-block pr-0.5">
        Enquire on WhatsApp
      </span>
    </a>
  );
}

