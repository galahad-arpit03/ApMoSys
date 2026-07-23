"use client";

import React from "react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

export default function EventsIntro() {
  return (
    <SectionThemeWrapper sectionId="events_intro" defaultTheme="light">
      {() => {
        return (
          <section className="py-12 border-b transition-colors duration-300 bg-white border-gray-100 text-[#121212]">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800">
                <EditableText
                  path="events.intro.heading1"
                  fallback="Knowledge Sharing &"
                  as="span"
                />
                <br />
                <EditableText
                  path="events.intro.heading2"
                  fallback="Industry Collaboration"
                  as="span"
                  className="text-primary-red"
                />
              </h2>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-8 sm:mt-10">
                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
                  <EditableText
                    path="events.intro.col1"
                    fallback="Conferences, webinars, roundtables, and knowledge-sharing programs where ApMoSys connects with enterprise technology leaders to explore modern quality engineering practices."
                    as="span"
                    multiline
                  />
                </p>

                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
                  <EditableText
                    path="events.intro.col2"
                    fallback="From executive discussions on AI adoption risks to technical deep-dives into test automation and DevOps quality gates, our sessions bring practical engineering lessons to global delivery teams."
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
