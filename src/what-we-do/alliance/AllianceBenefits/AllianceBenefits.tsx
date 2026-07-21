"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";
import { allianceIconMap, defaultAllianceIcon } from "../icons";

// Helper to determine border classes based on grid position (2 columns)
const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-[#1A264A] ";

  const isLastRow = idx >= total - 2;
  if (!isLastRow) classes += "border-b ";

  if (idx % 2 === 0 && idx + 1 < total) classes += "border-r ";

  return classes;
};

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
    <section className="py-10 lg:py-16 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col xl:flex-row items-start gap-12 xl:gap-20">
          {/* LHS: Sticky Header & Paragraph */}
          <div className="xl:w-[350px] shrink-0">
            <div className="sticky top-32">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1] mb-6 lg:mb-8">
                <EditableText
                  path="alliance.benefits.heading"
                  fallback="Building a Stronger Ecosystem Together"
                  as="span"
                />
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-gray-300 max-w-xl xl:max-w-none">
                <EditableText
                  path="alliance.benefits.description"
                  fallback="Our alliance partners benefit from a collaborative ecosystem that drives mutual growth, innovation, and customer success."
                  as="span"
                  multiline
                />
              </p>
            </div>
          </div>

          {/* RHS: Tabular Grid (2 Columns) */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full border-t border-b border-[#1A264A]">
              {items.map((benefit, idx) => {
                const IconComponent = allianceIconMap[benefit.icon] || defaultAllianceIcon;
                return (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className={`group flex items-start gap-4 p-6 xl:p-10 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer ${getBorderClasses(idx, items.length)}`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow min-w-0">
                      <h3 className="text-base xl:text-lg font-medium text-white mb-2 leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                        <EditableText
                          path={`alliance.benefits.items.${idx}.title`}
                          fallback={benefit.title}
                          as="span"
                        />
                      </h3>
                      <p className="text-[13px] xl:text-[14px] text-gray-300 leading-snug opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-3 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out">
                        <EditableText
                          path={`alliance.benefits.items.${idx}.description`}
                          fallback={benefit.description}
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
        </div>
      </div>
    </section>
  );
}