"use client";

import CommunityHero from "./CommunityHero/CommunityHero";
import CSRSection from "./CSRSection/CSRSection";
import Initiatives from "./Initiatives/Initiatives";
import EventsSection from "./EventsSection/EventsSection";

export default function CommunityPage() {
  return (
    <main className="bg-[#0F0F0F] text-white">
      <CommunityHero />
      <CSRSection />
      <Initiatives />
      <EventsSection />
    </main>
  );
}