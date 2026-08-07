import React from "react";
import Link from "next/link";
import { ArrowRight, Store, Zap } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="section-padding bg-[#3D0710] overflow-hidden" id="how-it-works">
      <div className="container-main">
        
        <div className="relative rounded-3xl border border-[#520a13] bg-[#6B0F1A] shadow-xl overflow-hidden group p-6 sm:p-10 text-center animate-reveal-up">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFF100]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFF100]/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FFF100]">
                <Zap className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-[#FFF100]/20 flex items-center justify-center text-[#FFF100]">
                <Store className="w-5 h-5" />
              </div>
            </div>

            <h2 className="section-title-archivo text-white mb-3">
              See How It Works
            </h2>
            
            <p className="max-w-xl mx-auto text-sm leading-relaxed text-white/80 md:text-base font-medium mb-6">
              Discover how petrol pump spaces become high-visibility product display opportunities.
            </p>

            <Link 
              href="/how-it-works"
              className="btn-primary group"
            >
              Explore the Process
              <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
