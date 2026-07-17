"use client";

import React from "react";
import HeroSection from "@/src/what-we-do/industries/HeroSection/HeroSection";
import IndustryGrid from "@/src/what-we-do/industries/IndustryGrid/IndustryGrid";
import ComplexProblems from "@/src/what-we-do/industries/ComplexProblems/ComplexProblems";
import TechnicalCapabilities from "./industries/TechnicalCapabilities/TechnicalCapabilities";
import ImpactSection from "@/src/what-we-do/services/ImpactSection/ImpactSection";
import ComplianceSection from "./services/ComplianceSection/ComplianceSection";
import TestimonialSection from "./services/TestimonialSection/TestimonialSection";
import CTASection from "./industries/CTASection/CTASection";
import CorporateCTA from "../who-we-are/about-us/CorporateCTA/CorporateCTA";

export default function IndustriesPageContent() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <HeroSection />
      <div className="bg-[#FAFAFA]">
        <IndustryGrid />
        <ComplexProblems />
      </div>
      <TechnicalCapabilities />
      {/* <ImpactSection />
      <ComplianceSection />
      <TestimonialSection /> */}
      <CorporateCTA />
    </div>
  );
}
