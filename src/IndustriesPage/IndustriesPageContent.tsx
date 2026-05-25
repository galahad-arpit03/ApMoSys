"use client";

import React from "react";
import HeroSection from "@/src/IndustriesPage/HeroSection/HeroSection";
import IndustryGrid from "@/src/IndustriesPage/IndustryGrid/IndustryGrid";
import ComplexProblems from "@/src/IndustriesPage/ComplexProblems/ComplexProblems";
import TechnicalCapabilities from "@/src/IndustriesPage/TechnicalCapabilities/TechnicalCapabilities";
import ImpactSection from "@/src/IndustriesPage/ImpactSection/ImpactSection";
import ComplianceSection from "@/src/IndustriesPage/ComplianceSection/ComplianceSection";
import TestimonialSection from "@/src/IndustriesPage/TestimonialSection/TestimonialSection";
import CTASection from "@/src/IndustriesPage/CTASection/CTASection";

export default function IndustriesPageContent() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <HeroSection />
      <div className="bg-[#FAFAFA]">
        <IndustryGrid />
        <ComplexProblems />
      </div>
      <TechnicalCapabilities />
      <ImpactSection />
      <ComplianceSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}
