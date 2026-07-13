"use client";

import React from "react";
import HeroSection from "./products/HeroSection/HeroSection";
import ProductsOverview from "./products/ProductsOverview/ProductsOverview";
import ProductBenefits from "./products/ProductBenefits/ProductBenefits";
import ProductCategories from "./products/ProductCategories/ProductCategories";
// Shared components
import ImpactSection from "./industries/ImpactSection/ImpactSection";
import ComplianceSection from "./industries/ComplianceSection/ComplianceSection";
import TestimonialSection from "./industries/TestimonialSection/TestimonialSection";
import CTASection from "./industries/CTASection/CTASection";

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