"use client";

import React from "react";
import HeroSection from "./coe/HeroSection/HeroSection";
import CoEOverview from "./coe/CoEOverview/CoEOverview";
import CoEAccordion from "./coe/CoEAccordion/CoEAccordion";
import InnovationLabs from "./coe/InnovationLabs/InnovationLabs";
import ResearchPapers from "./coe/ResearchPapers/ResearchPapers";
// Shared components
import ImpactSection from "./ImpactSection/ImpactSection";
import ComplianceSection from "./ComplianceSection/ComplianceSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import CTASection from "./CTASection/CTASection";

export default function CoEPageContent() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <HeroSection />
      <div className="bg-[#FFFFFF]">
        <CoEOverview />
      </div>
      <CoEAccordion />
      <InnovationLabs />
      <ResearchPapers />
      <ImpactSection />
      <ComplianceSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}