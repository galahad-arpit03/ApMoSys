"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { serviceIconMap, defaultServiceIcon } from "../icons";
import { useContentStore } from "@/src/admin/store/adminStore";

export default function ServiceBenefits() {
  const { content } = useContentStore();
  const benefitItems = content.services?.benefits?.items || [];

  return (
    <SectionThemeWrapper sectionId="services_benefits" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-16 lg:py-24 border-t transition-colors duration-300 relative overflow-hidden ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white border-gray-100"
            }`}
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Split Header – matching landing page pattern */}
              <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-5">
                  {/* <span className={`text-[#2563EB] uppercase tracking-[0.25em] text-xs font-semibold`}>
                    Why Choose Us
                  </span> */}
                  <h2
                    className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-normal mt-4 leading-[1.1] ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <EditableText
                      path="services.benefits.heading"
                      fallback="Delivering Measurable Business Outcomes"
                      as="span"
                    />
                  </h2>
                </div>
                <div className="lg:col-span-7">
                  <p
                    className={`text-base lg:text-lg leading-relaxed ${
                      isDark ? "text-gray-300" : "text-[#5A5A5A]"
                    }`}
                  >
                    <EditableText
                      path="services.benefits.description"
                      fallback="Our engineering services are designed to deliver tangible value across your entire software delivery lifecycle — from development to production."
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </div>

              {/* Benefits Grid – dynamically renders all items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {benefitItems.map((benefit, idx) => {
                  const IconComponent =
                    serviceIconMap[benefit.icon] || defaultServiceIcon;
                  return (
                    <motion.div
                      key={benefit.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className={`group relative bg-white border border-gray-200 rounded-md p-8 text-center hover:border-[#2563EB]/30 hover:shadow-lg transition-all hover:-translate-y-1 ${
                        isDark
                          ? "bg-slate-700/50 border-slate-600 hover:border-[#2563EB]/40"
                          : "bg-white border-gray-200"
                      }`}
                    >
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-md border flex items-center justify-center mx-auto mb-5 transition-colors ${
                          isDark
                            ? "bg-[#2563EB]/20 border-[#2563EB]/30 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
                            : "bg-[#2563EB]/10 border-[#2563EB]/20 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
                        }`}
                      >
                        <IconComponent className="w-7 h-7" strokeWidth={1.5} />
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-lg font-bold mb-3 transition-colors ${
                          isDark
                            ? "text-white group-hover:text-[#2563EB]"
                            : "text-black group-hover:text-[#2563EB]"
                        }`}
                      >
                        <EditableText
                          path={`services.benefits.items.${idx}.title`}
                          fallback={benefit.title}
                          as="span"
                        />
                      </h3>

                      {/* Description */}
                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-gray-300" : "text-[#5A5A5A]"
                        }`}
                      >
                        <EditableText
                          path={`services.benefits.items.${idx}.description`}
                          fallback={benefit.description}
                          as="span"
                          multiline
                        />
                      </p>

                      {/* Decorative bottom line */}
                      <div
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                          isDark ? "bg-[#2563EB]" : "bg-[#2563EB]"
                        }`}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}