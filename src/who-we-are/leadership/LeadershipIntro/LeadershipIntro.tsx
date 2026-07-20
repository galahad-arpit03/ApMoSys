"use client";
import { leadershipintroData } from "./LeadershipIntroData";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function LeadershipIntro() {
  return (
    <SectionThemeWrapper sectionId="leadership_intro" defaultTheme="light">
      {() => {
        return (
          <section className="py-12 border-b transition-colors duration-300 bg-white border-gray-100 text-[#121212]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800">
                Driving Growth Through Vision,
                <br/> Experience & Innovation
              </h2>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-8 sm:mt-10">
                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
                  At ApMoSys, leadership is built on a strong foundation of
                  industry expertise, technological excellence, and a relentless
                  commitment to customer success. Our executive team brings
                  decades of experience across banking, enterprise technology,
                  quality engineering, digital transformation, and business
                  leadership.
                </p>

                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
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
