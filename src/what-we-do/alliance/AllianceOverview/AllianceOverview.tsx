// src/what-we-do/alliance/AllianceOverview/AllianceOverview.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";
import { allianceIconMap, defaultAllianceIcon } from "../icons";

// Helper to determine border classes based on grid position
const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";

  if (idx < total - 1) classes += "border-b ";

  if (idx === total - 2) classes += "sm:border-b-0 ";
  if (idx % 2 === 0) classes += "sm:border-r ";
  else classes += "sm:border-r-0 ";

  if (idx >= total - 3) classes += "lg:border-b-0 ";
  else classes += "lg:border-b ";

  if ((idx + 1) % 3 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
};

export default function AllianceOverview() {
  const { content } = useContentStore();
  const allianceItems = content.alliance?.overview?.items || [];

  const fallbackItems = [
    {
      id: "1",
      title: "Technology Partnerships",
      description:
        "Strategic partnerships with leading technology providers to deliver integrated, best-in-class solutions for enterprise transformation.",
      icon: "tech",
    },
    {
      id: "2",
      title: "Consulting Alliances",
      description:
        "Collaborations with global consulting firms to bring deep industry expertise and implementation excellence to complex transformation programs.",
      icon: "consulting",
    },
    {
      id: "3",
      title: "Industry Alliances",
      description:
        "Partnerships with industry associations and standards bodies to drive innovation and shape the future of enterprise technology.",
      icon: "industry",
    },
    {
      id: "4",
      title: "Academic Alliances",
      description:
        "Collaborations with leading academic institutions to advance research, develop talent, and foster innovation in emerging technologies.",
      icon: "academic",
    },
    {
      id: "5",
      title: "Channel Partnerships",
      description:
        "A global network of channel partners who extend our reach and deliver our solutions to enterprises worldwide.",
      icon: "channel",
    },
    {
      id: "6",
      title: "Innovation Alliances",
      description:
        "Strategic collaborations with startups and innovation labs to bring cutting-edge technologies and fresh perspectives to enterprise challenges.",
      icon: "innovation",
    },
  ];

  const items = allianceItems.length > 0 ? allianceItems : fallbackItems;

  return (
    <section id="partners" className="py-16 lg:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header – No Eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.1]">
              <EditableText
                path="alliance.overview.heading"
                fallback="Strategic Partnerships for Enterprise Success"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              <EditableText
                path="alliance.overview.description"
                fallback="Our alliances bring together the world's best technologies, expertise, and innovation to deliver comprehensive solutions that drive enterprise transformation."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Tabular Grid – Light Theme - Spacious */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full border-t border-b border-gray-200">
          {items.map((item, idx) => {
            const IconComponent = allianceIconMap[item.icon] || defaultAllianceIcon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`group flex items-start gap-5 p-6 xl:p-10 hover:bg-gray-50/50 transition-all duration-300 cursor-pointer ${getBorderClasses(
                  idx,
                  items.length
                )}`}
              >
                {/* Icon - Larger */}
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Text Content - More breathing room */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-base xl:text-lg font-medium text-black mb-2 leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                    <EditableText
                      path={`alliance.overview.items.${idx}.title`}
                      fallback={item.title}
                      as="span"
                    />
                  </h3>
                  {/* Description - Always visible, larger font */}
                  <p className="text-sm xl:text-base text-[#5A5A5A] leading-relaxed">
                    <EditableText
                      path={`alliance.overview.items.${idx}.description`}
                      fallback={item.description}
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}