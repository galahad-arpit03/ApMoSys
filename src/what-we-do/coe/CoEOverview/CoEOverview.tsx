"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";
import { coesIconMap, defaultCoEIcon } from "../icons";

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

export default function CoEOverview() {
  const { content } = useContentStore();
  const coeItems = content.coe?.overview?.items || [];

  const fallbackItems = [
    {
      id: "1",
      title: "Functional Center of Excellence",
      shortName: "FCoE",
      description:
        "Certified testing engineers and quality consultants possessing specialized skillsets, domain experience, and tools expertise to add value in pursuit of excellence.",
      icon: "functional",
    },
    {
      id: "2",
      title: "Performance Center of Excellence",
      shortName: "PCoE",
      description:
        "Navigate challenges, achieve your performance goals, and deliver a rapid, responsive, and reliable experience that delights your customers.",
      icon: "performance",
    },
    {
      id: "3",
      title: "Automation Center of Excellence",
      shortName: "ACoE",
      description:
        "Leverage the power of automation to reduce manual effort, improve reliability, increase repeatability, and identify issues as they are introduced.",
      icon: "automation",
    },
    {
      id: "4",
      title: "AI Center of Excellence",
      shortName: "AICoE",
      description:
        "Dedicated research and implementation lab for integrating predictive analytics, NLP, and advanced machine learning models into enterprise workflows.",
      icon: "ai",
    },
    {
      id: "5",
      title: "Banking Center of Excellence",
      shortName: "BCoE",
      description:
        "Deep domain expertise in core banking, payments, and compliance testing, ensuring zero-defect releases for financial institutions.",
      icon: "banking",
    },
    {
      id: "6",
      title: "Insurance Center of Excellence",
      shortName: "ICoE",
      description:
        "Specialized frameworks for Policy Admin Systems, Claims Processing, and Underwriting validation tailored for the insurance sector.",
      icon: "insurance",
    },
  ];

  const items = coeItems.length > 0 ? coeItems : fallbackItems;

  return (
    <section id="coe-grid" className="py-10 lg:py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Split Header – No Eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              <EditableText
                path="coe.overview.heading"
                fallback="Specialized Innovation Labs"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              <EditableText
                path="coe.overview.description"
                fallback="Our Centers of Excellence are dedicated innovation hubs that establish best practices, develop specialized tools, and drive thought leadership across critical domains."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Tabular Grid – Light Theme - Spacious */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full border-t border-b border-gray-200">
          {items.map((item, idx) => {
            const IconComponent = coesIconMap[item.icon] || defaultCoEIcon;
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
                {/* Icon - Slightly larger */}
                <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Text Content - More breathing room */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base xl:text-lg font-medium text-black leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                      <EditableText
                        path={`coe.overview.items.${idx}.title`}
                        fallback={item.title}
                        as="span"
                      />
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-[#2563EB] transition-colors whitespace-nowrap">
                      <EditableText
                        path={`coe.overview.items.${idx}.shortName`}
                        fallback={item.shortName}
                        as="span"
                      />
                    </span>
                  </div>
                  {/* Description - Always visible, updated font size */}
                  <p className="text-[13px] xl:text-[14px] text-[#5A5A5A] leading-snug">
                    <EditableText
                      path={`coe.overview.items.${idx}.description`}
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