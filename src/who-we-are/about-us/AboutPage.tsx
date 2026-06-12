"use client";
import React from "react";
import AboutHero from "./AboutHero/AboutHero";
import StatsSection from "./StatsSection/StatsSection";
import StorySection from "./StorySection/StorySection";
import CoreValues from "./CoreValues/CoreValues";
import MilestonesTimeline from "./MilestonesTimeline/MilestonesTimeline";
import CorporateCTA from "./CorporateCTA/CorporateCTA";

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <AboutHero />
      <StatsSection />
      <StorySection />
      <CoreValues />
      <MilestonesTimeline />
      <CorporateCTA />
    </main>
  );
}
