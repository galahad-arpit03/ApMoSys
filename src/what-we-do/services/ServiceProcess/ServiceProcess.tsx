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
    <SectionThemeWrapper sectionId="services_process" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`py-16 border-t transition-colors duration-300 ${
              isDark
                ? "bg-slate-800 border-slate-700"
                : "bg-white/80 border-gray-200"
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
                <h2
                  className={`text-4xl lg:text-5xl font-medium tracking-tight mb-4 ${
                    isDark ? "text-white" : "text-slate-800"
                  }`}
                >
                  <EditableText
                    path="services.process.heading"
                    fallback="A Structured Path to Engineering Excellence"
                    as="span"
                  />
                </h2>
                <p
                  className={`text-base lg:text-lg font-medium leading-relaxed ${
                    isDark ? "text-gray-300" : "text-slate-600"
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
                            ? `border-[#242A56] ${
                                isDark
                                  ? "bg-slate-700/70 shadow-lg shadow-[#242A56]/5"
                                  : "bg-white shadow-lg shadow-[#242A56]/10"
                              }`
                            : isDark
                            ? "border-slate-600 bg-slate-700/30"
                            : "border-gray-200 bg-white/50"
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
                                ? "bg-[#242A56] text-white"
                                : isDark
                                ? "bg-slate-600 text-gray-300"
                                : "bg-gray-100 text-gray-500"
                            }`}
                          >
                            {step.id}
                          </div>
                          <div className="flex-1">
                            <h3
                              className={`font-medium text-base ${
                                isActive
                                  ? "text-[#242A56]"
                                  : isDark
                                  ? "text-white"
                                  : "text-slate-800"
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
                            } ${isDark ? "text-gray-400" : "text-gray-400"}`}
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
                                  isDark ? "border-slate-600" : "border-gray-200"
                                }`}
                              >
                                <p
                                  className={`text-base leading-relaxed font-medium ${
                                    isDark ? "text-gray-300" : "text-slate-600"
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