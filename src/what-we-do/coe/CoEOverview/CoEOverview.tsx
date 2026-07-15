"use client";

import React from "react";
import Container from "@/src/components/Container";
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
            className={`py-24 transition-colors duration-300 relative overflow-hidden ${
              isDark
                ? "bg-slate-800 text-white"
                : "bg-gradient-to-b from-[#F0F4F8] to-white text-slate-800"
            }`}
          >
            {/* Subtle background glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className={`absolute top-0 right-0 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3 ${
                isDark ? "bg-[#242A56]/10" : "bg-[#242A56]/10"
              }`} />
            </div>

            <Container>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-medium tracking-tight mb-4 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  <EditableText
                    path="coe.overview.heading"
                    fallback="Specialized Innovation Labs"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-black"
                  }`}
                >
                  <EditableText
                    path="coe.overview.description"
                    fallback="Our Centers of Excellence are dedicated innovation hubs that establish best practices, develop specialized tools, and drive thought leadership across critical domains."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, idx) => {
                  const IconComponent = coesIconMap[item.icon] || defaultCoEIcon;
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.5 }}
                      className={`p-8 rounded-xl border transition-all hover:shadow-lg hover:-translate-y-1 group ${
                        isDark
                          ? "bg-slate-700/50 border-slate-600 hover:border-[#242A56]/40"
                          : "bg-white/80 backdrop-blur-sm border-gray-200/60 hover:border-[#242A56]/20 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2 rounded-lg ${
                          isDark ? "bg-[#242A56]/20 text-[#242A56]" : "bg-[#242A56]/10 text-[#242A56]"
                        }`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <span
                          className={`text-xs font-bold uppercase tracking-widest ${
                            isDark ? "text-gray-400" : "text-slate-500"
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
                        className={`font-heading text-xl font-bold mb-3 ${
                          isDark ? "text-white" : "text-slate-800"
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
                          isDark ? "text-gray-300" : "text-slate-600"
                        }`}
                      >
                        <EditableText
                          path={`coe.overview.items.${idx}.description`}
                          fallback={item.description}
                          as="span"
                          multiline
                        />
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}