import React from "react";
import dynamic from "next/dynamic";

// Static imports (above the fold)
import HeroSection from "@/src/what-we-do/services/ai-engineering/HeroSection/HeroSection";
import OverviewSection from "@/src/what-we-do/services/ai-engineering/OverviewSection/OverviewSection";
import CorporateCTA from "@/src/who-we-are/about-us/CorporateCTA/CorporateCTA";

// Lazy-loaded components (below the fold)
const BenefitsSection = dynamic(
  () => import("@/src/what-we-do/services/ai-engineering/BenefitsSection/BenefitsSection")
);
const ProcessSection = dynamic(
  () => import("@/src/what-we-do/services/ai-engineering/ProcessSection/ProcessSection")
);
const ImpactSection = dynamic(
  () => import("@/src/what-we-do/services/ai-engineering/ImpactSection/ImpactSection")
);
// const CTASection = dynamic(
//   () => import("@/src/what-we-do/services/ai-engineering/CTASection/CTASection")
// );

export default function AIEngineeringPage() {
  return (
    <div className="relative bg-white overflow-x-hidden w-full max-w-[100vw]">
      <HeroSection />
      <OverviewSection />
      <BenefitsSection />
      <ProcessSection />
      <ImpactSection />
      {/* <CTASection /> */}
      <CorporateCTA />
    </div>
  );
}