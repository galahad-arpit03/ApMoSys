"use client";

import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import MindsetSection from "./MindsetSection/MindsetSection";
import GrowthSection from "./GrowthSection/GrowthSection";
import LifeSection from "./LifeSection/LifeSection";
import OpeningsSection from "./OpeningsSection/OpeningsSection";
import RoadmapSection from "./RoadmapSection/RoadmapSection";
import NextGenSection from "./NextGenSection/NextGenSection";
import PortfolioSection from "./PortfolioSection/PortfolioSection";
import FAQSection from "./FAQSection/FAQSection";

export default function CareersPage() {
  return (
    <>
      <HeroSection />
      <MindsetSection />
      <GrowthSection />
      <LifeSection />
      <OpeningsSection />
      <RoadmapSection />
      <NextGenSection />
      <PortfolioSection />
      <FAQSection />
    </>
  );
}
