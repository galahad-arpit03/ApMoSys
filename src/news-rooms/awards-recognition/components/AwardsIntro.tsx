"use client";

import React from "react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

export default function AwardsIntro() {
  return (
    <SectionThemeWrapper sectionId="awards_intro" defaultTheme="light">
      {() => {
        return (
          <section className="py-12 border-b transition-colors duration-300 bg-white border-gray-100 text-[#121212]">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800">
                <EditableText
                  path="awards.intro.heading1"
                  fallback="Recognized Delivery Quality &"
                  as="span"
                />
                <br />
                <EditableText
                  path="awards.intro.heading2"
                  fallback="Process Governance"
                  as="span"
                  className="text-amber-500"
                />
              </h2>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-8 sm:mt-10">
                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
                  <EditableText
                    path="awards.intro.col1"
                    fallback="Recognition for delivery quality, certifications, ecosystem partnerships, and contributions to enterprise technology outcomes."
                    as="span"
                    multiline
                  />
                </p>

                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
                  <EditableText
                    path="awards.intro.col2"
                    fallback="Our credentials reflect rigorous compliance, repeatable engineering processes, and industry validation across quality engineering, automation, and cloud transformation."
                    as="span"
                    multiline
                  />
                </p>
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
