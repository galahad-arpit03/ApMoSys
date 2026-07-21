"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import { useContentStore } from "@/src/admin/store/adminStore";
import { productIconMap, defaultProductIcon } from "../icons";

// Helper to determine border classes based on grid position
const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-[#1A264A] ";

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

export default function ProductBenefits() {
  const { content } = useContentStore();
  const benefitItems = content.products?.benefits?.items || [];

  return (
    <section className="py-10 lg:py-16 bg-[#0A1128] border-t border-[#1A264A] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col xl:flex-row items-start gap-12 xl:gap-20">
          {/* LHS: Sticky Header & Paragraph */}
          <div className="xl:w-[350px] shrink-0">
            <div className="sticky top-32">
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1] mb-6 lg:mb-8">
                <EditableText
                  path="products.benefits.heading"
                  fallback="Built for Enterprise Excellence"
                  as="span"
                />
              </h2>
              <p className="text-base lg:text-lg leading-relaxed text-gray-300 max-w-xl xl:max-w-none">
                <EditableText
                  path="products.benefits.description"
                  fallback="Every product in the ApMoSys suite is engineered to solve complex enterprise challenges — delivering security, scalability, and intelligent automation at every level."
                  as="span"
                  multiline
                />
              </p>
            </div>
          </div>

          {/* RHS: Tabular Grid (3 Columns) */}
          <div className="flex-grow">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full border-t border-b border-[#1A264A]">
              {benefitItems.map((benefit, idx) => {
                const IconComponent = productIconMap[benefit.icon] || defaultProductIcon;
                return (
                  <motion.div
                    key={benefit.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05, duration: 0.5 }}
                    className={`group flex items-start gap-4 p-6 xl:p-10 hover:bg-white/[0.02] transition-all duration-300 cursor-pointer ${getBorderClasses(idx, benefitItems.length)}`}
                  >
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 rounded-md bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                    </div>

                    {/* Text Content */}
                    <div className="flex-grow min-w-0">
                      <h3 className="text-base xl:text-lg font-medium text-white mb-2 leading-tight group-hover:text-[#2563EB] transition-colors duration-300">
                        <EditableText
                          path={`products.benefits.items.${idx}.title`}
                          fallback={benefit.title}
                          as="span"
                        />
                      </h3>
                      <p className="text-[13px] xl:text-[14px] text-gray-300 leading-snug opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-3 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out">
                        <EditableText
                          path={`products.benefits.items.${idx}.description`}
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