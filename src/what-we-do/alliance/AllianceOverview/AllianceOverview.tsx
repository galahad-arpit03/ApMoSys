// src/what-we-do/alliance/AllianceOverview/AllianceOverview.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";
import { allianceIconMap, defaultAllianceIcon } from "../icons";

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
    <section id="partners" className="py-16 lg:py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            {/* <span className="text-[#2563EB] uppercase tracking-[0.25em] text-xs font-semibold">
              <EditableText
                path="alliance.overview.label"
                fallback="Our Alliances"
                as="span"
              />
            </span> */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black mt-4 leading-[1.1]">
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

        {/* Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, idx) => {
            const IconComponent = allianceIconMap[item.icon] || defaultAllianceIcon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group relative bg-white border border-gray-200 rounded-md p-8 hover:border-[#2563EB]/30 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                </div>

                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#2563EB] transition-colors">
                  <EditableText
                    path={`alliance.overview.items.${idx}.title`}
                    fallback={item.title}
                    as="span"
                  />
                </h3>

                <p className="text-sm text-[#5A5A5A] leading-relaxed">
                  <EditableText
                    path={`alliance.overview.items.${idx}.description`}
                    fallback={item.description}
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