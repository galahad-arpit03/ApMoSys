"use client";

import LeadershipHero from "./LeadershipHero/LeadershipHero";
import LeadershipIntro from "./LeadershipIntro/LeadershipIntro";
import ExecutiveTeam from "./ExecutiveTeam/ExecutiveTeam";
import LeadershipValues from "./LeadershipValues/LeadershipValues";
import LeadershipVision from "./LeadershipVision/LeadershipVision";
import CorporateCTA from "@/src/who-we-are/about-us/CorporateCTA/CorporateCTA";

export default function LeadershipPage() {
  return (
    <main className="bg-app-bg text-app-text min-h-screen">
      <LeadershipHero />
      <LeadershipIntro />
      <ExecutiveTeam />
      <LeadershipValues />
      <LeadershipVision />
      <CorporateCTA 
        tag="Leadership"
        heading="Meet Our Experts"
        description="Connect with our leadership team to discuss strategic partnerships, digital transformation, and enterprise growth."
        buttonText="Contact Leadership"
        sectionId="leadership_cta"
        editablePrefix="leadership.cta"
      />
    </main>
  );
}