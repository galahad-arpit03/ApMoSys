"use client";

import CommunityHero from "./CommunityHero/CommunityHero";
import CSRSection from "./CSRSection/CSRSection";
import Initiatives from "./Initiatives/Initiatives";
import EventsSection from "./EventsSection/EventsSection";
import CorporateCTA from "@/src/who-we-are/about-us/CorporateCTA/CorporateCTA";

export default function CommunityPage() {
  return (
    <main className="bg-app-bg text-app-text min-h-screen">
      <CommunityHero />
      <CSRSection />
      <Initiatives />
      <EventsSection />
      <CorporateCTA />
    </main>
  );
}