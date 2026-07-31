"use client";

import React, { useState } from "react";
import Hero from "@/components/Hero";
import HeroStats from "@/components/HeroStats";
import SpaceSearch from "@/components/SpaceSearch";
import AboutUs from "@/components/AboutUs";
import PetrolBunkShowcase from "@/components/PetrolBunkShowcase";
import PopularCategories from "@/components/PopularCategories";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import RoleSelection from "@/components/RoleSelection";
import SpaceTypes from "@/components/SpaceTypes";
import Pricing from "@/components/Pricing";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
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
        <AboutUs />
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
