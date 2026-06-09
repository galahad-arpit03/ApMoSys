import AboutHero from "./AboutHero/AboutHero";
import CompanyStory from "./CompanyStory/CompanyStory";
import MissionVision from "./MissionVision/MissionVision";
import GlobalPresence from "./GlobalPresence/GlobalPresence";
import StatsSection from "./StatsSection/StatsSection";

export default function AboutPage() {
  return (
    <main className="bg-[#121212] text-white">
      <AboutHero />
      <CompanyStory />
      <MissionVision />
      <GlobalPresence />
      <StatsSection />
    </main>
  );
}