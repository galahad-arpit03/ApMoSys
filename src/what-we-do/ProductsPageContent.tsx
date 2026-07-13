"use client";

import React from "react";
import HeroSection from "./products/HeroSection/HeroSection";
import ProductsOverview from "./products/ProductsOverview/ProductsOverview";
import ProductBenefits from "./products/ProductBenefits/ProductBenefits";
import ProductCategories from "./products/ProductCategories/ProductCategories";
// Shared components
import ImpactSection from "./ImpactSection/ImpactSection";
import ComplianceSection from "./ComplianceSection/ComplianceSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import CTASection from "./CTASection/CTASection";

export default function ProductsPageContent() {
  return (
    <div className="bg-[#121212] min-h-screen">
      <HeroSection />
      <div className="bg-[#FFFFFF]">
        <ProductsOverview />
      </div>
      <ProductBenefits />
      <ProductCategories />
      <ImpactSection />
      <ComplianceSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}