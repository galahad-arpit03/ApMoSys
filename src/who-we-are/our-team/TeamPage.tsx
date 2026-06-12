"use client";

import TeamHero from "./TeamHero/TeamHero";
import TeamCulture from "./TeamCulture/TeamCulture";
import TeamDepartments from "./TeamDepartments/TeamDepartments";
import TeamGallery from "./TeamGallery/TeamGallery";

export default function TeamPage() {
  return (
    <main className="bg-[#0F0F0F] text-white">
      <TeamHero />
      <TeamCulture />
      <TeamDepartments />
      <TeamGallery />
    </main>
  );
}