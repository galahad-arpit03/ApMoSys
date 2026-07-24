import React from "react";
import dynamic from "next/dynamic";

// Eagerly loaded components (Above the fold)
import Hero from "./Hero/Hero";
import TrustedBy from "./TrustedBy/TrustedBy";
import AboutApmosys from "./AboutApmosys/AboutApmosys";

// Lazy-loaded components (Below the fold)
const CoreServices = dynamic(() => import("./CoreServices/CoreServices"));
const Industries = dynamic(() => import("./Industries/Industries"));
const CoESection = dynamic(() => import("./CoESection/CoESection"));
const ProductsInnovations = dynamic(() => import("./ProductsInnovations/ProductsInnovations"));
const WhyApmosys = dynamic(() => import("./WhyApmosys/WhyApmosys"));
const SuccessMetrics = dynamic(() => import("./SuccessMetrics/SuccessMetrics"));
const AwardsCertifications = dynamic(() => import("./AwardsCertifications/AwardsCertifications"));
const LatestInsights = dynamic(() => import("./LatestInsights/LatestInsights"));
const MilestonesTimeline = dynamic(() => import("@/src/who-we-are/about-us/MilestonesTimeline/MilestonesTimeline"));
const ExecutiveTeam = dynamic(() => import("@/src/who-we-are/leadership/ExecutiveTeam/ExecutiveTeam"));
const CareersCTA = dynamic(() => import("./CareersCTA/CareersCTA"));
const InquirySection = dynamic(() => import("@/src/contact-us/InquirySection/InquirySection"));

export default function LandingPage() {
  return (
    <div className="relative bg-[#0A1128] overflow-x-hidden w-full max-w-[100vw]">
      {/* Above the fold - loaded instantly */}
      <Hero />
      <TrustedBy />
      <AboutApmosys />

      {/* Core Offerings & Value - loaded on scroll */}
      <CoreServices />
      <Industries />
      <CoESection />
      <ProductsInnovations />
      <WhyApmosys />
      <SuccessMetrics />
      <AwardsCertifications />
      <LatestInsights />
      
      {/* Deep Dives (Moved to bottom for better conversion UX) */}
      <MilestonesTimeline />
      <ExecutiveTeam />
      
      {/* Footer CTAs */}
      <CareersCTA />
      <div className="bg-white">
        {/* <InquirySection /> */}
      </div>
    </div>
  );
}