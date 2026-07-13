"use client";

import React from "react";
import HeroSection from "@/src/what-we-do/industries/HeroSection/HeroSection";
import IndustryGrid from "@/src/what-we-do/industries/IndustryGrid/IndustryGrid";
import ComplexProblems from "@/src/what-we-do/industries/ComplexProblems/ComplexProblems";
import TechnicalCapabilities from "./industries/TechnicalCapabilities/TechnicalCapabilities";
import ImpactSection from "@/src/what-we-do/industries/ImpactSection/ImpactSection";
import ComplianceSection from "./industries/ComplianceSection/ComplianceSection";
import TestimonialSection from "./industries/TestimonialSection/TestimonialSection";
import CTASection from "./industries/CTASection/CTASection";

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
