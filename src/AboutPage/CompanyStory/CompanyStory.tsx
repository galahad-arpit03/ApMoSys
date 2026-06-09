"use client";

import { useContentStore } from "@/src/admin/store/adminStore";

export default function CompanyStory() {
  const { content } = useContentStore();

  return (
    <section className="py-24 border-b border-[#1F1F1F]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <span className="text-primary-red text-xs uppercase font-bold">
              {content.about.story.sectionLabel}
            </span>

            <h2 className="font-heading text-5xl font-extrabold mt-4 mb-8">
              {content.about.story.heading}
            </h2>

            <p className="text-[#A0A0A0] leading-relaxed mb-6">
              {content.about.story.paragraph1}
            </p>

            <p className="text-[#A0A0A0] leading-relaxed">
              {content.about.story.paragraph2}
            </p>
          </div>

          <div className="space-y-6">

            {[
              "2009 - Company Founded",
              "2012 - Enterprise QA Expansion",
              "2017 - Automation Transformation",
              "2021 - AI Engineering Launch",
              "2025 - Global Delivery Network"
            ].map((item,index)=>(
              <div
                key={index}
                className="border-l-2 border-primary-red pl-6 py-2"
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