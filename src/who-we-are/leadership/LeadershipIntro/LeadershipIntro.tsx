"use client";
import { leadershipintroData } from "./LeadershipIntroData";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function LeadershipIntro() {
  return (
    <SectionThemeWrapper sectionId="leadership_intro" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`pt-8 pb-10 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 border-b transition-colors duration-300 ${isDark ? "bg-[#0F0F0F] border-[#222]" : "bg-white border-gray-200"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

              {/* <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">
                Leadership Excellence
              </span> */}

              <h2 className={`text-3xl sm:text-4xl md:text-5xl font-medium leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                Driving Growth Through Vision,
                <br/> <span className="text-[#B40001]">Experience & Innovation</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-8 sm:mt-10">
                <p className={`text-base sm:text-lg leading-7 sm:leading-8 ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                  At ApMoSys, leadership is built on a strong foundation of
                  industry expertise, technological excellence, and a relentless
                  commitment to customer success. Our executive team brings
                  decades of experience across banking, enterprise technology,
                  quality engineering, digital transformation, and business
                  leadership.
                </p>

                <p className={`text-base sm:text-lg leading-7 sm:leading-8 ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                  Together, they guide the organization in delivering innovative
                  solutions, fostering a culture of continuous learning, and
                  empowering enterprises to accelerate their digital
                  transformation journeys with confidence.
                </p>
              </div>

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
