// src/news-rooms/events/EventsPage.tsx
"use client";

import React from "react";
import EventsHero from "./components/EventsHero";
import EventsCategories from "./components/EventsCategories";
import UpcomingEventsGrid from "./components/UpcomingEventsGrid";
import EventTimeline from "./components/EventTimeline";
import EventsImpactStats from "./components/EventsImpactStats";
import PastEventsHighlights from "./components/PastEventsHighlights";
import EventsCTASection from "./components/EventsCTASection";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <EventsHero />
      <EventsCategories />
      <UpcomingEventsGrid />
      <EventTimeline />
      {/* <EventsImpactStats /> */}
      <PastEventsHighlights />
      <EventsCTASection />
    </main>
  );
}