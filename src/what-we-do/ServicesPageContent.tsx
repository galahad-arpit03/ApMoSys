// src/what-we-do/ServicesPageContent.tsx
"use client";

import React from "react";
import HeroSection from "./services/HeroSection/HeroSection";
import ServicesOverview from "./services/ServicesOverview/ServicesOverview";
import ServiceApproach from "./services/ServiceApproach/ServiceApproach";
import ServiceBenefits from "./services/ServiceBenefits/ServiceBenefits";
import ServiceProcess from "./services/ServiceProcess/ServiceProcess";
// Shared components (keep imports as-is)
import ImpactSection from "./industries/ImpactSection/ImpactSection";
import ComplianceSection from "./industries/ComplianceSection/ComplianceSection";
import TestimonialSection from "./industries/TestimonialSection/TestimonialSection";
import CTASection from "./industries/CTASection/CTASection";

export default function ServicesPageContent() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <HeroSection />
      <div className="bg-[#FFFFFF]">
        <ServicesOverview />
      </div>
      <ServiceApproach />
      <div className="bg-[#FFFFFF]">
        <ServiceBenefits />
      </div>
      <ServiceProcess />
      <ImpactSection />
      <ComplianceSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}