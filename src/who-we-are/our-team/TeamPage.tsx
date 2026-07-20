"use client";

import TeamHero from "./TeamHero/TeamHero";
import TeamCulture from "./TeamCulture/TeamCulture";
import TeamDepartments from "./TeamDepartments/TeamDepartments";
import TeamGallery from "./TeamGallery/TeamGallery";
import CorporateCTA from "@/src/who-we-are/about-us/CorporateCTA/CorporateCTA";

export default function TeamPage() {
  return (
    <main className="bg-app-bg text-app-text min-h-screen">
      <TeamHero />
      <TeamCulture />
      <TeamDepartments />
      <TeamGallery />
      <CorporateCTA 
        tag="Careers"
        heading="Build your career with 1400+ engineers."
        description="Join a team that values craftsmanship, continuous learning and real enterprise impact — across India and the UAE."
        buttonText="Explore Careers"
        sectionId="team_cta"
        editablePrefix="team.cta"
      />
    </main>
  );
}