"use client";

import React from "react";
import EventsHero from "./components/EventsHero";
import EventsIntro from "./components/EventsIntro";
import UpcomingEventsGrid from "./components/UpcomingEventsGrid";
import PastWebinarsReplay from "./components/PastWebinarsReplay";
import AnnualConferences from "./components/AnnualConferences";
import CorporateCTA from "@/src/who-we-are/about-us/CorporateCTA/CorporateCTA";

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-white">
      <EventsHero />
      <EventsIntro />
      <UpcomingEventsGrid />
      <PastWebinarsReplay />
      <AnnualConferences />
      
      <CorporateCTA
        tag="Events & Summits"
        heading="Connect With Our Technology Leaders"
        description="Schedule a private briefing or roundtable session with ApMoSys quality engineering and platform automation architects."
        buttonText="Request Event Briefing"
        sectionId="events_cta"
        editablePrefix="events.cta"
      />
    </main>
  );
}
