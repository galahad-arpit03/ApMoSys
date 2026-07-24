"use client";

import React from "react";
import dynamic from "next/dynamic";

// Eagerly loaded components (Above the fold)
import CustomerStoriesHero from "./components/CustomerStoriesHero";
import CustomerStoriesIntro from "./components/CustomerStoriesIntro";

// Lazy-loaded components (Below the fold)
const FeaturedCaseStudies = dynamic(() => import("./components/FeaturedCaseStudies"));
const ImpactSnapshotsGrid = dynamic(() => import("./components/ImpactSnapshotsGrid"));
const ClientTestimonialsView = dynamic(() => import("./components/ClientTestimonialsView"));
const CorporateCTA = dynamic(() => import("@/src/who-we-are/about-us/CorporateCTA/CorporateCTA"));

export default function CustomerStoriesPage() {
  return (
    <div className="relative bg-[#0A1128] overflow-x-hidden w-full max-w-[100vw]">
      {/* Above the fold - loaded instantly */}
      <CustomerStoriesHero />
      <CustomerStoriesIntro />
      
      {/* Below the fold - loaded on scroll */}
      <FeaturedCaseStudies />
      <ImpactSnapshotsGrid />
      <ClientTestimonialsView />
      
      <div className="bg-white">
        <CorporateCTA
          tag="Customer Stories"
          heading="Ready to Write Your Transformation Story?"
          description="Connect with our enterprise engineering team to evaluate your current release maturity and build a custom quality roadmap."
          buttonText="Schedule Executive Consultation"
          sectionId="customer_stories_cta"
          editablePrefix="customer.stories.cta"
        />
      </div>
    </div>
  );
}
