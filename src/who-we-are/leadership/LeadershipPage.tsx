"use client";

import LeadershipHero from "./LeadershipHero/LeadershipHero";
import LeadershipIntro from "./LeadershipIntro/LeadershipIntro";
import ExecutiveTeam from "./ExecutiveTeam/ExecutiveTeam";
import LeadershipValues from "./LeadershipValues/LeadershipValues";
import LeadershipVision from "./LeadershipVision/LeadershipVision";

export default function LeadershipPage() {
  return (
    <main className="bg-app-bg text-app-text min-h-screen">
      <LeadershipHero />
      <LeadershipIntro />
      <ExecutiveTeam />
      <LeadershipValues />
      <LeadershipVision />
    </main>
  );
}