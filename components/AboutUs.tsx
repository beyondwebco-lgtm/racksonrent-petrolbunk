"use client";

import React from "react";
import {
  Sparkles,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  Building2,
  Store,
  Compass,
} from "lucide-react";

export default function AboutUs() {
  const coreValues = [
    {
      name: "Innovation",
      desc: "Driving the future of commercial petrol pump space utilization through creative retail display solutions.",
      icon: Zap,
    },
    {
      name: "Trust",
      desc: "Building long-lasting rental relationships through integrity, transparency, and reliability.",
      icon: ShieldCheck,
    },
    {
      name: "Growth",
      desc: "Creating win-win opportunities that enable space owners and startups to achieve sustainable success.",
      icon: TrendingUp,
    },
    {
      name: "Collaboration",
      desc: "Connecting petrol pump establishments and emerging retail brands through a mutually beneficial ecosystem.",
      icon: Users,
    },
    {
      name: "Excellence",
      desc: "Delivering exceptional service, seamless setup experiences, and professional support at every stage.",
      icon: Award,
    },
  ];

  const supportingPoints = [
    "Monetise unused petrol pump space",
    "Help emerging brands reach offline customers",
    "Improve the customer experience",
    "Create additional income for both partners",
    "Build long-term business partnerships",
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF5] border-b border-[#F0E2E4]" id="petrol-pump-owners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FFFBCC] px-4 py-1.5 text-xs sm:text-sm font-bold text-[#6B0F1A] border border-[#F0E2E4]">
            <Sparkles className="w-3.5 h-3.5 text-[#6B0F1A]" />
            <span>For Petrol Pump Owners & Startups</span>
          </span>
          
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#6B0F1A] md:text-5xl leading-tight">
            One Space. Two Businesses. <span className="bg-[#FFF100] text-[#3D0710] px-3 py-0.5 rounded-xl inline-block border border-[#6B0F1A]/20">Endless Possibilities.</span>
          </h2>
          
          <p className="mt-4 text-lg font-bold text-[#3D0710] sm:text-xl max-w-3xl mx-auto">
            Racks on Rent transforms unused spaces inside petrol pumps into affordable retail opportunities. Petrol pump owners earn rental income without making a major investment, while startups gain access to high-footfall locations and ready customers.
          </p>
        </div>

        {/* Intro Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-stretch">
          
          {/* Main Intro Text */}
          <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-[#6B0F1A] p-6 sm:p-8 shadow-[0_16px_40px_rgba(11,30,54,0.08)] flex flex-col justify-between">
            <div>
              <span className="text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider block mb-2">
                About the Partnership
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-[#6B0F1A] mb-4">
                Monetise Space & Empower Retail Startups
              </h3>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-medium mb-4">
                At <strong className="text-[#6B0F1A]">RACKS ON RENT</strong>, we connect petrol pump owners who have underutilized commercial space with ambitious startups, helmet brands, safety gear makers, and retail entrepreneurs.
              </p>
              <p className="text-sm sm:text-base text-[#5F5F5F] leading-relaxed font-medium">
                By unlocking unused forecourt space and retail corners, petrol pump owners create an additional source of income while providing customers with valuable products like helmets, riding gear, and accessories.
              </p>
            </div>

            {/* Supporting Points Badge List */}
            <div className="mt-6 pt-6 border-t border-[#F0E2E4]">
              <span className="text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider block mb-3 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-[#6B0F1A]" />
                <span>Key Objectives</span>
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {supportingPoints.map((point, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-[#FFFBCC]/60 p-2 rounded-xl border border-[#6B0F1A]/10">
                    <CheckCircle2 className="w-4 h-4 text-[#6B0F1A] flex-shrink-0" />
                    <span className="text-xs font-bold text-[#3D0710]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Purpose & Value Right Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Our Purpose Card */}
            <div className="bg-[#6B0F1A] text-[#FFFBCC] rounded-3xl p-6 sm:p-8 shadow-md border-2 border-[#6B0F1A] flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 rounded-xl bg-[#FFF100] text-[#3D0710]">
                    <Compass className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#FFF100]">
                    Our Core Model
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-extrabold text-[#FFFBCC] mb-3">
                  Sublet Space. Share Success.
                </h4>
                <p className="text-xs sm:text-sm text-[#FFFDF5]/90 leading-relaxed font-medium">
                  Petrol pump owners earn rental income from underutilised commercial space without taking operational risks. Startups gain physical storefront exposure in prime locations with zero heavy capital investment.
                </p>
              </div>
            </div>

            {/* Win-Win Card */}
            <div className="bg-[#FFFBCC] text-[#3D0710] rounded-3xl p-6 sm:p-8 shadow-md border-2 border-[#6B0F1A]/30">
              <div className="flex items-center gap-2 mb-3">
                <div className="p-2 rounded-xl bg-[#6B0F1A] text-[#FFFBCC]">
                  <Store className="w-5 h-5" />
                </div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#6B0F1A]">
                  A Win-Win Partnership
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#1F1F1F] leading-relaxed font-bold">
                &quot;Every petrol pump sees daily footfall from commuters refuelling their vehicles. Racks on Rent allows space owners to monetize this footfall while giving quality brands real-world retail presence.&quot;
              </p>
            </div>

          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Vision (Maroon Card) */}
          <div className="bg-[#6B0F1A] text-white rounded-3xl border-2 border-[#520a13] p-6 sm:p-8 shadow-md relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#FFF100] text-[#3D0710] border border-[#E6D900]">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#FFF100] uppercase tracking-wider block">
                  Future Roadmap
                </span>
                <h3 className="text-xl font-extrabold text-white">Our Vision</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-medium">
              To build India&apos;s leading petrol pump rack rental marketplace, transforming underutilized commercial spaces into thriving retail opportunities for startups and entrepreneurs.
            </p>
          </div>

          {/* Mission (Yellow Card) */}
          <div className="bg-[#FFF100] text-[#3D0710] rounded-3xl border-2 border-[#E6D900] p-6 sm:p-8 shadow-md relative overflow-hidden group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-[#6B0F1A] text-white border border-[#520a13]">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider block">
                  Our Commitment
                </span>
                <h3 className="text-xl font-extrabold text-[#3D0710]">Our Mission</h3>
              </div>
            </div>
            <p className="text-sm sm:text-base text-[#3D0710]/90 leading-relaxed font-bold">
              To simplify offline retail expansion for startups while creating steady rental income streams for petrol pump owners through transparent, hassle-free space-sharing partnerships.
            </p>
          </div>

        </div>

        {/* Our Core Values */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold text-[#6B0F1A] uppercase tracking-wider block">
              What Drives Us
            </span>
            <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-[#6B0F1A]">
              Our Core Values
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreValues.map((val, idx) => {
              const IconComponent = val.icon;
              const isMaroon = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl p-5 shadow-xs transition-all hover:-translate-y-1 flex flex-col justify-between ${
                    isMaroon
                      ? "bg-[#6B0F1A] text-white border border-[#520a13]"
                      : "bg-[#FFF100] text-[#3D0710] border border-[#E6D900]"
                  }`}
                >
                  <div>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                        isMaroon
                          ? "bg-[#FFF100] text-[#3D0710] border border-[#E6D900]"
                          : "bg-[#6B0F1A] text-white border border-[#520a13]"
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h4 className={`font-extrabold text-base mb-2 ${isMaroon ? "text-white" : "text-[#3D0710]"}`}>
                      {val.name}
                    </h4>
                    <p className={`text-xs leading-relaxed font-medium ${isMaroon ? "text-white/80" : "text-[#3D0710]/80"}`}>
                      {val.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

