"use client";

import { useContentStore } from "@/src/admin/store/adminStore";

export default function CompanyStory() {
  const { content } = useContentStore();

  return (
    <section className="py-16 sm:py-20 lg:py-24 border-b border-[#1F1F1F]">

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">

          <div>
            <span className="text-primary-red text-xs uppercase font-bold">
              {content.about.story.sectionLabel}
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mt-4 mb-8">
              {content.about.story.heading}
            </h2>

            <p className="text-[#A0A0A0] leading-relaxed mb-6">
              {content.about.story.paragraph1}
            </p>

            <p className="text-[#A0A0A0] leading-relaxed">
              {content.about.story.paragraph2}
            </p>
          </div>

          <div className="space-y-5 sm:space-y-6">

            {[
              "2009 - Company Founded",
              "2012 - Enterprise QA Expansion",
              "2017 - Automation Transformation",
              "2021 - AI Engineering Launch",
              "2025 - Global Delivery Network"
            ].map((item,index)=>(
              <div
                key={index}
                className="border-l-2 border-primary-red pl-4 sm:pl-6 py-2"
              >
                <p className="font-semibold">{item}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
