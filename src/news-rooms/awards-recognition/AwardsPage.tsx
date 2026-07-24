"use client";

import React from "react";
import AwardsHero from "./components/AwardsHero";
import IndustryAwardsShowcase from "./components/IndustryAwardsShowcase";
import CertificationsBadgeGrid from "./components/CertificationsBadgeGrid";
import AwardsIntro from "./components/AwardsIntro";
import PartnerAccoladesWall from "./components/PartnerAccoladesWall";
import CorporateCTA from "@/src/who-we-are/about-us/CorporateCTA/CorporateCTA";

export default function AwardsPage() {
  return (
    <main className="min-h-screen bg-[#121212]">
      <AwardsHero />
      <IndustryAwardsShowcase />
      <CertificationsBadgeGrid />
      <AwardsIntro />
      <PartnerAccoladesWall />
      
      <CorporateCTA
        tag="Awards & Credentials"
        heading="Partner With a Recognized Technology Leader"
        description="Learn how our certified delivery standards and award-winning QA frameworks safeguard your enterprise software initiatives."
        buttonText="View Compliance Datasheet"
        sectionId="awards_cta"
        editablePrefix="awards.cta"
      />
    </main>
  );
}
