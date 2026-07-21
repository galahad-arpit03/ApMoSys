"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";
import { allianceIconMap, defaultAllianceIcon } from "../icons";

const features = [
  {
    id: "1",
    title: "Endorsed Service Partner of the Year",
    description:
      "Recognized by Dynatrace for excellence in delivering observability and AIOps solutions to enterprise customers.",
    icon: "trophy",
  },
  {
    id: "2",
    title: "Rising Star in Automation",
    description:
      "Awarded by Automation Anywhere for outstanding contributions to intelligent automation and RPA implementation.",
    icon: "star",
  },
  {
    id: "3",
    title: "CMMI Maturity Level 3",
    description:
      "Achieved CMMI Maturity Level 3 Certification, demonstrating our commitment to process excellence and quality delivery.",
    icon: "clipboard",
  },
  {
    id: "4",
    title: "Multiple IEEE Publications",
    description:
      "Published multiple research papers in Springer and IEEE journals on AI, automation, and quality engineering.",
    icon: "filetext",
  },
];

export default function FeaturedPartners() {
  const { content } = useContentStore();
  const featuredItems = content.alliance?.featured?.items || features;

  return (
    <section className="py-10 lg:py-16 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1]">
              <EditableText
                path="alliance.featured.heading"
                fallback="Recognized Excellence in Partnerships"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              <EditableText
                path="alliance.featured.description"
                fallback="Our partnerships have been recognized with industry awards, certifications, and publications that validate our commitment to excellence."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featuredItems.map((feature, idx) => {
            const IconComponent = allianceIconMap[feature.icon] || defaultAllianceIcon;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-[#121B38] border border-[#1A264A] rounded-md p-8 transition-all hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)]"
              >
                <div className="w-14 h-14 rounded-md border border-[#2563EB]/30 bg-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                </div>

                <h3 className="text-base xl:text-lg font-medium text-white mb-3 leading-tight group-hover:text-[#2563EB] transition-colors">
                  <EditableText
                    path={`alliance.featured.items.${idx}.title`}
                    fallback={feature.title}
                    as="span"
                  />
                </h3>

                <p className="text-[13px] xl:text-[14px] text-gray-300 leading-snug">
                  <EditableText
                    path={`alliance.featured.items.${idx}.description`}
                    fallback={feature.description}
                    as="span"
                    multiline
                  />
                </p>

                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}