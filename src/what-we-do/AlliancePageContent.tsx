"use client";

import React from "react";
import HeroSection from "./alliance/HeroSection/ HeroSection";
import AllianceOverview from "./alliance/AllianceOverview/AllianceOverview";
import AllianceBenefits from "./alliance/AllianceBenefits/AllianceBenefits";
import PartnerTypes from "./alliance/PartnerTypes/PartnerTypes";
import FeaturedPartners from "./alliance/FeaturedPartners/FeaturedPartners";
// Shared components
import ImpactSection from "./services/ImpactSection/ImpactSection";
import ComplianceSection from "./services/ComplianceSection/ComplianceSection";
import TestimonialSection from "./services/TestimonialSection/TestimonialSection";
import CTASection from "./industries/CTASection/CTASection";
import CorporateCTA from "../who-we-are/about-us/CorporateCTA/CorporateCTA";

export default function AlliancePageContent() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <HeroSection />
      <div className="bg-[#FFFFFF]">
        <AllianceOverview />
      </div>
      <AllianceBenefits />
      <PartnerTypes />
      <FeaturedPartners />
      {/* <ImpactSection />
      <ComplianceSection />
      <TestimonialSection /> */}
      <CorporateCTA />
    </div>
  );
}