// src/what-we-do/coe/CoEOverview/CoEOverview.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import { useContentStore } from "@/src/admin/store/adminStore";
import { coesIconMap, defaultCoEIcon } from "../icons";

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
      title: "Banking CoE",
      shortName: "BCoE",
      description:
        "Deep domain expertise in core banking, payments, and compliance testing, ensuring zero-defect releases for financial institutions.",
      icon: "banking",
    },
    {
      id: "6",
      title: "Insurance CoE",
      shortName: "ICoE",
      description:
        "Specialized frameworks for Policy Admin Systems, Claims Processing, and Underwriting validation tailored for the insurance sector.",
      icon: "insurance",
    },
  ];

  const items = coeItems.length > 0 ? coeItems : fallbackItems;

  return (
    <SectionThemeWrapper sectionId="coe_overview" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="coe-grid"
            className={`py-16 lg:py-24 transition-colors duration-300 relative overflow-hidden ${
              isDark
                ? "bg-[#0A1128] text-white"
                : "bg-white text-[#121212]"
            }`}
          >
            {/* Subtle background glow */}
            <div className={`absolute inset-0 pointer-events-none ${
              isDark ? "opacity-[0.05]" : "opacity-[0.03]"
            }`}>
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full blur-[120px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              {/* Split Header */}
              <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                <div className="lg:col-span-5">
                  {/* <span className="text-[#2563EB] uppercase tracking-[0.25em] text-xs font-semibold">
                    <EditableText
                      path="coe.overview.label"
                      fallback="Our CoEs"
                      as="span"
                    />
                  </span> */}
                  <h2
                    className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-normal mt-4 leading-[1.1] ${
                      isDark ? "text-white" : "text-black"
                    }`}
                  >
                    <EditableText
                      path="coe.overview.heading"
                      fallback="Specialized Innovation Labs"
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
                      path="coe.overview.description"
                      fallback="Our Centers of Excellence are dedicated innovation hubs that establish best practices, develop specialized tools, and drive thought leadership across critical domains."
                      as="span"
                      multiline
                    />
                  </p>
                </div>
              </div>

              {/* CoE Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {items.map((item, idx) => {
                  const IconComponent = coesIconMap[item.icon] || defaultCoEIcon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className={`group relative rounded-md p-8 transition-all hover:-translate-y-1 ${
                        isDark
                          ? "bg-[#121B38] border border-[#1A264A] hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)]"
                          : "bg-white border border-gray-200 hover:border-[#2563EB]/30 hover:shadow-lg"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`p-2 rounded-md transition-colors ${
                            isDark
                              ? "bg-[#2563EB]/20 text-[#2563EB]"
                              : "bg-[#2563EB]/10 text-[#2563EB]"
                          }`}
                        >
                          <IconComponent className="w-6 h-6" strokeWidth={1.5} />
                        </div>
                        <span
                          className={`text-xs font-bold uppercase tracking-widest ${
                            isDark ? "text-gray-400" : "text-gray-500"
                          }`}
                        >
                          <EditableText
                            path={`coe.overview.items.${idx}.shortName`}
                            fallback={item.shortName}
                            as="span"
                          />
                        </span>
                      </div>

                      <h3
                        className={`text-xl font-bold mb-3 transition-colors ${
                          isDark
                            ? "text-white group-hover:text-[#2563EB]"
                            : "text-black group-hover:text-[#2563EB]"
                        }`}
                      >
                        <EditableText
                          path={`coe.overview.items.${idx}.title`}
                          fallback={item.title}
                          as="span"
                        />
                      </h3>

                      <p
                        className={`text-sm leading-relaxed ${
                          isDark ? "text-gray-300" : "text-[#5A5A5A]"
                        }`}
                      >
                        <EditableText
                          path={`coe.overview.items.${idx}.description`}
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
      }}
    </SectionThemeWrapper>
  );
}