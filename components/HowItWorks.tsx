import React from "react";
import Link from "next/link";
import { ArrowRight, Store, Zap } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 bg-[#FFF6A3]/50 border-y border-[#F0E2E4]" id="how-it-works">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-white rounded-[2rem] border border-[#F0E2E4] shadow-xl overflow-hidden group p-8 sm:p-12 text-center">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#F4E409]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#6B0F1A]/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#6B0F1A]/10 flex items-center justify-center text-[#6B0F1A]">
                <Zap className="w-6 h-6" />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#F4E409]/30 flex items-center justify-center text-[#3D0710]">
                <Store className="w-6 h-6" />
              </div>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-4xl lg:text-5xl mb-4">
              See How It Works
            </h2>
            
            <p className="max-w-xl mx-auto text-base leading-relaxed text-[#5F5F5F] md:text-lg font-medium mb-8">
              Discover how petrol pump spaces become high-visibility product display opportunities.
            </p>

            <Link 
              href="/how-it-works"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#6B0F1A] px-8 py-4 text-base font-extrabold text-[#FFFDF5] shadow-lg hover:bg-[#3D0710] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore the Process
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

