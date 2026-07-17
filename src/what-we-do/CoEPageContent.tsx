"use client";

import React from "react";
import HeroSection from "./coe/HeroSection/HeroSection";
import CoEOverview from "./coe/CoEOverview/CoEOverview";
import CoEAccordion from "./coe/CoEAccordion/CoEAccordion";
import InnovationLabs from "./coe/InnovationLabs/InnovationLabs";
import ResearchPapers from "./coe/ResearchPapers/ResearchPapers";
// Shared components
import ImpactSection from "./services/ImpactSection/ImpactSection";
import ComplianceSection from "./services/ComplianceSection/ComplianceSection";
import TestimonialSection from "./services/TestimonialSection/TestimonialSection";
import CTASection from "./industries/CTASection/CTASection";
import CorporateCTA from "../who-we-are/about-us/CorporateCTA/CorporateCTA";

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
      {/* <ImpactSection />
      <ComplianceSection />
      <TestimonialSection /> */}
      <CorporateCTA />
    </div>
  );
}