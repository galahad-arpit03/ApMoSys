"use client";

import React, { useState } from "react";
import Container from "@/src/components/Container";
import { motion, AnimatePresence } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const processSteps = [
  {
    id: "1",
    title: "Discovery & Assessment",
    description:
      "We analyze your current systems, processes, and challenges to identify opportunities for automation, optimization, and modernization.",
    icon: "📋",
  },
  {
    id: "2",
    title: "Strategy & Architecture",
    description:
      "We design a tailored engineering strategy and architectural blueprint aligned with your business goals and technical requirements.",
    icon: "🏗️",
  },
  {
    id: "3",
    title: "Implementation & Development",
    description:
      "Our engineering teams execute the strategy using agile methodologies, delivering value incrementally with continuous feedback.",
    icon: "💻",
  },
  {
    id: "4",
    title: "Quality & Security Validation",
    description:
      "Comprehensive testing, security scanning, and performance validation ensure your systems meet the highest quality standards.",
    icon: "✅",
  },
  {
    id: "5",
    title: "Deployment & Operations",
    description:
      "We deploy your solutions and provide ongoing monitoring, support, and optimization to ensure long-term success and reliability.",
    icon: "🚀",
  },
];

export default function ServiceProcess() {
  const [activeStep, setActiveStep] = useState<string | null>(processSteps[0].id);

  return (
    <SectionThemeWrapper sectionId="services_process" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-24 border-t transition-colors duration-300 ${
              isDark
                ? "bg-[#121212] border-[#1F1F1F]"
                : "bg-[#FAFAFA] border-[#E8E8E8]"
            }`}
          >
            <Container>
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                {/* <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-4">
                  <EditableText
                    path="services.process.sectionLabel"
                    fallback="Our Process"
                    as="span"
                  />
                </span> */}
                <h2
                  className={`font-heading text-3xl sm:text-4xl font-bold mb-4 ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                >
                  <EditableText
                    path="services.process.heading"
                    fallback="A Structured Path to Engineering Excellence"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                >
                  <EditableText
                    path="services.process.description"
                    fallback="Our five-stage engineering process ensures clarity, quality, and consistency across every engagement — from initial discovery to ongoing operations."
                    as="span"
                    multiline
                  />
                </p>
              </motion.div>

              {/* Process Visual - Stacked Cards with Toggle */}
              <div className="max-w-3xl mx-auto">
                <div className="space-y-3">
                  {processSteps.map((step, idx) => {
                    const isActive = activeStep === step.id;
                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.08, duration: 0.4 }}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                          isActive
                            ? `border-primary-red ${
                                isDark
                                  ? "bg-[#1A1A1A] shadow-lg shadow-primary-red/5"
                                  : "bg-[#FFFFFF] shadow-lg shadow-primary-red/10"
                              }`
                            : isDark
                            ? "border-[#2A2A2A] bg-[#0D0D0D]"
                            : "border-[#E8E8E8] bg-[#FAFAFA]"
                        }`}
                      >
                        <button
                          onClick={() =>
                            setActiveStep(isActive ? null : step.id)
                          }
                          className="w-full text-left px-6 py-4 flex items-center gap-4 cursor-pointer"
                        >
                          <div
                            className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                              isActive
                                ? "bg-primary-red text-white"
                                : isDark
                                ? "bg-[#2A2A2A] text-[#7A7A7A]"
                                : "bg-[#E8E8E8] text-[#7A7A7A]"
                            }`}
                          >
                            {step.id}
                          </div>
                          <div className="flex-1">
                            <h3
                              className={`font-heading font-bold text-base ${
                                isActive
                                  ? "text-primary-red"
                                  : isDark
                                  ? "text-[#FFFFFF]"
                                  : "text-[#121212]"
                              }`}
                            >
                              <EditableText
                                path={`services.process.steps.${idx}.title`}
                                fallback={step.title}
                                as="span"
                              />
                            </h3>
                          </div>
                          <svg
                            className={`w-5 h-5 transition-transform duration-300 ${
                              isActive ? "rotate-180" : ""
                            } ${isDark ? "text-[#7A7A7A]" : "text-[#5A5A5A]"}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div
                                className={`px-6 pb-6 pt-2 border-t ${
                                  isDark ? "border-[#2A2A2A]" : "border-[#E8E8E8]"
                                }`}
                              >
                                <p
                                  className={`text-sm leading-relaxed ${
                                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                                  }`}
                                >
                                  <EditableText
                                    path={`services.process.steps.${idx}.description`}
                                    fallback={step.description}
                                    as="span"
                                    multiline
                                  />
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}