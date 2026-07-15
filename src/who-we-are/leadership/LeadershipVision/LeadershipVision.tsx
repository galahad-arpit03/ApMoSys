"use client";
import { leadershipvisionData } from "./LeadershipVisionData";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function LeadershipVision() {
  return (
    <SectionThemeWrapper sectionId="leadership_vision" defaultTheme="light">
      {() => {
        return (
          <section className="py-12 transition-colors duration-300 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">

                <div className="lg:col-span-5 lg:sticky lg:top-32">
                  <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-slate-800">
                    Engineering <br/> The Future.
                  </h2>

                  <p className="text-lg font-medium leading-relaxed mt-8 text-black">
                    Our vision is to create a future where intelligent
                    engineering, automation, and innovation enable
                    organizations to achieve operational excellence at scale.
                  </p>
                </div>

                <div className="lg:col-span-6 lg:col-start-7 space-y-10">
                  {/* Item 1 */}
                  <div className="relative group pl-8 sm:pl-12 border-l border-slate-300 hover:border-slate-800 transition-colors duration-500">
                    <div className="absolute -left-[3px] top-2 w-[5px] h-0 bg-slate-800 group-hover:h-12 transition-all duration-500"></div>
                    <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(30,41,59,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(30,41,59,1)] transition-all duration-500 mb-4 select-none">
                      01
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800">
                      Innovation First
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-black">
                      Continuously advancing technology and engineering
                      practices to solve tomorrow's challenges. We build for resilience and scale.
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="relative group pl-8 sm:pl-12 border-l border-slate-300 hover:border-slate-800 transition-colors duration-500">
                    <div className="absolute -left-[3px] top-2 w-[5px] h-0 bg-slate-800 group-hover:h-12 transition-all duration-500"></div>
                    <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(30,41,59,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(30,41,59,1)] transition-all duration-500 mb-4 select-none">
                      02
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800">
                      Uncompromising Excellence
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-black">
                      Delivering exceptional quality, reliability, and
                      measurable business outcomes for every client. Excellence is our baseline.
                    </p>
                  </div>

                  {/* Item 3 */}
                  <div className="relative group pl-8 sm:pl-12 border-l border-slate-300 hover:border-slate-800 transition-colors duration-500">
                    <div className="absolute -left-[3px] top-2 w-[5px] h-0 bg-slate-800 group-hover:h-12 transition-all duration-500"></div>
                    <div className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text [-webkit-text-stroke:1px_rgba(30,41,59,0.2)] group-hover:[-webkit-text-stroke:1px_rgba(30,41,59,1)] transition-all duration-500 mb-4 select-none">
                      03
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800">
                      Global Impact
                    </h3>
                    <p className="text-lg font-medium leading-relaxed text-black">
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
