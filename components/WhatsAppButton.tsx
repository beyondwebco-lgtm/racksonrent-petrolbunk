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
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-[#F4E409] hover:bg-[#061221] text-[#061221] hover:text-[#F4E409] px-4 py-3 rounded-full shadow-xl border border-[#0B1E36]/30 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#FEF9C3] cursor-pointer"
    >
      <MessageCircle className="w-6 h-6 fill-current text-current" />
      <span className="font-extrabold text-sm hidden sm:inline-block pr-1">
        Enquire on WhatsApp
      </span>
    </a>
  );
}

