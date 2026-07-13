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
      <CorporateCTA />
    </main>
  );
}