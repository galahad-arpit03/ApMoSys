"use client";
import { leadershipvisionData } from "./LeadershipVisionData";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function LeadershipVision() {
  return (
    <SectionThemeWrapper sectionId="leadership_vision" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-16 sm:py-20 lg:py-24 transition-colors duration-300 ${isDark ? "bg-[#0F0F0F]" : "bg-white"}`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className={`border rounded-xl p-6 sm:p-10 md:p-16 shadow-sm transition-colors duration-300 ${
                isDark ? "bg-[#161616] border-[#2A2A2A]" : "bg-gray-50 border-gray-200"
              }`}>

                <div className="text-center">
                  <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs sm:text-sm font-bold">
                    Leadership Vision
                  </span>

                  <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mt-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Building the Future of Enterprise Engineering
                  </h2>

                  <p className={`text-base sm:text-lg leading-7 sm:leading-8 mt-6 sm:mt-8 max-w-4xl mx-auto ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                    Our vision is to create a future where intelligent
                    engineering, automation, and innovation enable
                    organizations to achieve operational excellence at scale.
                    Through strategic leadership, continuous innovation, and
                    customer-centric thinking, we strive to help enterprises
                    navigate complex technological challenges and unlock new
                    opportunities for growth.
                  </p>
                </div>

                <div className="grid gap-8 md:grid-cols-3 mt-10 sm:mt-16 relative">
                  {/* Optional dividers for aesthetic if needed */}
                  <div className={`hidden md:block absolute top-0 bottom-0 left-1/3 w-[1px] ${isDark ? "bg-[#2A2A2A]" : "bg-gray-200"}`} />
                  <div className={`hidden md:block absolute top-0 bottom-0 right-1/3 w-[1px] ${isDark ? "bg-[#2A2A2A]" : "bg-gray-200"}`} />
                  
                  <div className="text-center px-4">
                    <div className="text-3xl lg:text-4xl font-bold text-[#B40001] mb-4">
                      Innovation
                    </div>
                    <p className={`${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                      Continuously advancing technology and engineering
                      practices to solve tomorrow's challenges.
                    </p>
                  </div>

                  <div className="text-center px-4">
                    <div className="text-3xl lg:text-4xl font-bold text-[#B40001] mb-4">
                      Excellence
                    </div>
                    <p className={`${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                      Delivering exceptional quality, reliability, and
                      measurable business outcomes for every client.
                    </p>
                  </div>

                  <div className="text-center px-4">
                    <div className="text-3xl lg:text-4xl font-bold text-[#B40001] mb-4">
                      Impact
                    </div>
                    <p className={`${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                      Creating meaningful value through digital transformation,
                      intelligent automation, and trusted partnerships.
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
