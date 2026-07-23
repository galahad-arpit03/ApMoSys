"use client";

import React from "react";
import CustomerStoriesHero from "./components/CustomerStoriesHero";
import CustomerStoriesIntro from "./components/CustomerStoriesIntro";
import FeaturedCaseStudies from "./components/FeaturedCaseStudies";
import ImpactSnapshotsGrid from "./components/ImpactSnapshotsGrid";
import ClientTestimonialsView from "./components/ClientTestimonialsView";
import CorporateCTA from "@/src/who-we-are/about-us/CorporateCTA/CorporateCTA";

export default function CustomerStoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <CustomerStoriesHero />
      <CustomerStoriesIntro />
      <FeaturedCaseStudies />
      <ImpactSnapshotsGrid />
      <ClientTestimonialsView />
      
      <CorporateCTA
        tag="Customer Stories"
        heading="Ready to Write Your Transformation Story?"
        description="Connect with our enterprise engineering team to evaluate your current release maturity and build a custom quality roadmap."
        buttonText="Schedule Executive Consultation"
        sectionId="customer_stories_cta"
        editablePrefix="customer.stories.cta"
      />
    </main>
  );
}
