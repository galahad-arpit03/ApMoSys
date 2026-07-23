"use client";

import React from "react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

export default function CustomerStoriesIntro() {
  return (
    <SectionThemeWrapper sectionId="customer_stories_intro" defaultTheme="light">
      {() => {
        return (
          <section className="py-12 border-b transition-colors duration-300 bg-white border-gray-100 text-[#121212]">
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 text-left">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800">
                <EditableText
                  path="customer.stories.intro.heading1"
                  fallback="Transforming Delivery Models &"
                  as="span"
                />
                <br />
                <EditableText
                  path="customer.stories.intro.heading2"
                  fallback="Unlocking Business Value"
                  as="span"
                  className="text-emerald-500"
                />
              </h2>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mt-8 sm:mt-10">
                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
                  <EditableText
                    path="customer.stories.intro.col1"
                    fallback="Customer-focused narratives showing how ApMoSys helps organizations modernize delivery, improve quality, and unlock measurable value."
                    as="span"
                    multiline
                  />
                </p>

                <p className="text-base sm:text-lg leading-7 sm:leading-8 font-medium text-black">
                  <EditableText
                    path="customer.stories.intro.col2"
                    fallback="From core banking modernizations to high-scale e-commerce platforms, our customer stories showcase real-world engineering solutions and quantifiable outcomes."
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
