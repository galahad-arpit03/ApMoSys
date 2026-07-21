"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { serviceIconMap, defaultServiceIcon } from "../icons";
import { useContentStore } from "@/src/admin/store/adminStore";

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

export default function ServiceBenefits() {
  const { content } = useContentStore();
  const benefitItems = content.services?.benefits?.items || [];

  return (
    <section className="py-10 lg:py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header – No Eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              <EditableText
                path="services.benefits.heading"
                fallback="Delivering Measurable Business Outcomes"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              <EditableText
                path="services.benefits.description"
                fallback="Our engineering services are designed to deliver tangible value across your entire software delivery lifecycle — from development to production."
                as="span"
                multiline
              />
            </p>
          </div>
        </div>

        {/* Tabular Grid – Light Theme */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full border-t border-b border-gray-200">
          {benefitItems.map((benefit, idx) => {
            const IconComponent = serviceIconMap[benefit.icon] || defaultServiceIcon;
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className={`group flex items-start gap-4 p-5 xl:p-8 hover:bg-gray-50/50 transition-all duration-300 cursor-pointer ${getBorderClasses(
                  idx,
                  benefitItems.length
                )}`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <IconComponent className="w-5 h-5" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div className="flex-grow min-w-0">
                  <h3 className="text-base xl:text-lg font-medium text-black mb-1 leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                    <EditableText
                      path={`services.benefits.items.${idx}.title`}
                      fallback={benefit.title}
                      as="span"
                    />
                  </h3>
                  <p className="text-[13px] xl:text-[14px] text-[#5A5A5A] leading-snug">
                    <EditableText
                      path={`services.benefits.items.${idx}.description`}
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
    </section>
  );
}