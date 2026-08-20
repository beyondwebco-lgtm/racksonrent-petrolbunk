"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import SpaceSearch from "@/components/SpaceSearch";

import dynamic from "next/dynamic";

const PetrolBunkShowcase = dynamic(() => import("@/components/PetrolBunkShowcase"));
const PopularCategories = dynamic(() => import("@/components/PopularCategories"));
const HowItWorks = dynamic(() => import("@/components/HowItWorks"));
const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"));
const RoleSelection = dynamic(() => import("@/components/RoleSelection"));
const SpaceTypes = dynamic(() => import("@/components/SpaceTypes"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const EnquiryForm = dynamic(() => import("@/components/EnquiryForm"));
const FAQ = dynamic(() => import("@/components/FAQ"));
import TrustStrip from "@/components/TrustStrip";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomePage() {
  const [selectedRole, setSelectedRole] = useState<"bunk-owner" | "brand-merchant" | "general">("bunk-owner");
  const [searchValues, setSearchValues] = useState<{
    location?: string;
    spaceType?: string;
    rackSize?: string;
    category?: string;
  }>({});

  const handleRoleSelect = (role: "bunk-owner" | "brand-merchant") => {
    setSelectedRole(role);
  };

  const handleSearchSelect = (params: {
    location: string;
    spaceType: string;
    rackSize: string;
    category: string;
  }) => {
    setSearchValues(params);
    setSelectedRole("brand-merchant");
  };

  const handleShowcaseSelect = (
    role: "bunk-owner" | "brand-merchant",
    prefillData: { spaceType?: string; category?: string }
  ) => {
    setSelectedRole(role);
    setSearchValues((prev) => ({
      ...prev,
      spaceType: prefillData.spaceType || prev.spaceType,
      category: prefillData.category || prev.category,
    }));
  };

  return (
    <>
      <Hero onSelectRole={handleRoleSelect} />
      <HeroStats />

      <ScrollReveal>
        <SpaceSearch onSearch={handleSearchSelect} />
      </ScrollReveal>



      <ScrollReveal>
        <PetrolBunkShowcase onSelectCategoryAction={handleShowcaseSelect} />
      </ScrollReveal>

      <ScrollReveal>
        <PopularCategories />
      </ScrollReveal>

      <ScrollReveal>
        <SpaceTypes />
      </ScrollReveal>

      <ScrollReveal>
        <HowItWorks />
      </ScrollReveal>

      <ScrollReveal>
        <RoleSelection onSelectRole={handleRoleSelect} />
      </ScrollReveal>

      <ScrollReveal>
        <WhyChooseUs />
      </ScrollReveal>

      <ScrollReveal>
        <Pricing onSelectRole={handleRoleSelect} />
      </ScrollReveal>

      <ScrollReveal>
        <EnquiryForm
          selectedRole={selectedRole}
          initialSearchValues={searchValues}
          onRoleChange={(r) => setSelectedRole(r)}
        />
      </ScrollReveal>

      <ScrollReveal>
        <FAQ />
      </ScrollReveal>

      <TrustStrip />
    </>
  );
}
