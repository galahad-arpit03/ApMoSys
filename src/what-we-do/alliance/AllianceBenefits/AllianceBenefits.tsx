// src/what-we-do/alliance/AllianceBenefits/AllianceBenefits.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";
import { allianceIconMap, defaultAllianceIcon } from "../icons";

export default function AllianceBenefits() {
  const { content } = useContentStore();
  const benefitItems = content.alliance?.benefits?.items || [];

  const fallbackBenefits = [
    {
      id: "1",
      title: "Accelerated Innovation",
      description:
        "Leverage cutting-edge technologies and solutions through our strategic partnerships to accelerate your digital transformation.",
      icon: "innovation",
    },
    {
      id: "2",
      title: "Deep Domain Expertise",
      description:
        "Access specialized knowledge and industry expertise through our consulting and technology alliances.",
      icon: "expertise",
    },
    {
      id: "3",
      title: "Global Reach",
      description:
        "Extend your enterprise capabilities with our global network of partners and delivery centers worldwide.",
      icon: "global",
    },
    {
      id: "4",
      title: "Integrated Solutions",
      description:
        "Benefit from seamlessly integrated solutions that combine the best of ApMoSys and partner technologies.",
      icon: "integrated",
    },
  ];

  const items = benefitItems.length > 0 ? benefitItems : fallbackBenefits;

  return (
    <section className="py-16 lg:py-24 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            {/* <span className="text-[#2563EB] uppercase tracking-[0.25em] text-xs font-semibold">
              <EditableText
                path="alliance.benefits.label"
                fallback="Why Partner"
                as="span"
              />
            </span> */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-4 leading-[1.1]">
              <EditableText
                path="alliance.benefits.heading"
                fallback="Building a Stronger Ecosystem Together"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              <EditableText
                path="alliance.benefits.description"
                fallback="Our alliance partners benefit from a collaborative ecosystem that drives mutual growth, innovation, and customer success."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((benefit, idx) => {
            const IconComponent = allianceIconMap[benefit.icon] || defaultAllianceIcon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-[#121B38] border border-[#1A264A] rounded-md p-8 transition-all hover:-translate-y-1 hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)]"
              >
                <div className="w-14 h-14 rounded-md border border-[#2563EB]/30 bg-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#2563EB] transition-colors">
                  <EditableText
                    path={`alliance.benefits.items.${idx}.title`}
                    fallback={benefit.title}
                    as="span"
                  />
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  <EditableText
                    path={`alliance.benefits.items.${idx}.description`}
                    fallback={benefit.description}
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