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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                <div className="lg:col-span-5 lg:sticky lg:top-32">
                  <span className="text-[#B40001] uppercase tracking-[0.2em] text-xs font-bold flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-[#B40001]"></span>
                    Our Vision
                  </span>

                  <h2 className={`text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] mt-6 ${isDark ? "text-white" : "text-gray-900"}`}>
                    Engineering <br/> The Future.
                  </h2>

                  <p className={`text-lg leading-relaxed mt-8 ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                    Our vision is to create a future where intelligent
                    engineering, automation, and innovation enable
                    organizations to achieve operational excellence at scale.
                  </p>
                </div>

                <div className="lg:col-span-6 lg:col-start-7 space-y-10">
                  {/* Item 1 */}
                  <div className="relative group pl-8 sm:pl-12 border-l border-[#B40001]/20 hover:border-[#B40001] transition-colors duration-500">
                    <div className="absolute -left-[3px] top-2 w-[5px] h-0 bg-[#B40001] group-hover:h-12 transition-all duration-500"></div>
                    <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(180,0,1,0.3)] group-hover:[-webkit-text-stroke:1px_rgba(180,0,1,1)] transition-all duration-500 mb-4 select-none">
                      01
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                      Innovation First
                    </h3>
                    <p className={`text-lg leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                      Continuously advancing technology and engineering
                      practices to solve tomorrow's challenges. We build for resilience and scale.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="relative group pl-8 sm:pl-12 border-l border-[#B40001]/20 hover:border-[#B40001] transition-colors duration-500">
                    <div className="absolute -left-[3px] top-2 w-[5px] h-0 bg-[#B40001] group-hover:h-12 transition-all duration-500"></div>
                    <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(180,0,1,0.3)] group-hover:[-webkit-text-stroke:1px_rgba(180,0,1,1)] transition-all duration-500 mb-4 select-none">
                      02
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                      Uncompromising Excellence
                    </h3>
                    <p className={`text-lg leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                      Delivering exceptional quality, reliability, and
                      measurable business outcomes for every client. Excellence is our baseline.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="relative group pl-8 sm:pl-12 border-l border-[#B40001]/20 hover:border-[#B40001] transition-colors duration-500">
                    <div className="absolute -left-[3px] top-2 w-[5px] h-0 bg-[#B40001] group-hover:h-12 transition-all duration-500"></div>
                    <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(180,0,1,0.3)] group-hover:[-webkit-text-stroke:1px_rgba(180,0,1,1)] transition-all duration-500 mb-4 select-none">
                      03
                    </div>
                    <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"}`}>
                      Global Impact
                    </h3>
                    <p className={`text-lg leading-relaxed ${isDark ? "text-neutral-400" : "text-gray-600"}`}>
                      Creating meaningful value through digital transformation,
                      intelligent automation, and trusted partnerships across the globe.
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
