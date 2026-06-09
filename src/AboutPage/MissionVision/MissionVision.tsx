"use client";

import { useContentStore } from "@/src/admin/store/adminStore";

export default function MissionVision() {

  const { content } = useContentStore();

  return (
    <section className="py-24 border-b border-[#1F1F1F]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-8">

          <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-10 rounded-xl">
            <h3 className="font-heading text-3xl font-bold mb-6">
              {content.about.mission.heading}
            </h3>

            <p className="text-[#A0A0A0] leading-relaxed">
              {content.about.mission.description}
            </p>
          </div>

          <div className="bg-[#1F1F1F] border border-[#3A3A3A] p-10 rounded-xl">
            <h3 className="font-heading text-3xl font-bold mb-6">
              {content.about.vision.heading}
            </h3>

            <p className="text-[#A0A0A0] leading-relaxed">
              {content.about.vision.description}
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}