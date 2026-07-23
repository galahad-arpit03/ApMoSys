"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, CheckCircle2 } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type AwardCard = {
  id: string;
  year: string;
  category: string;
  title: string;
  organization: string;
  summary: string;
  points: string[];
};

const awardsData: AwardCard[] = [
  {
    id: "qa-excellence-2025",
    year: "2025",
    category: "Quality Engineering",
    title: "Best Enterprise Quality Engineering Provider",
    organization: "Global Tech Excellence Forum",
    summary:
      "Acknowledging ApMoSys performance across automated testing, continuous integration, and zero-defect delivery standards.",
    points: [
      "Recognition for solution quality and measurable transformation outcomes.",
      "Awards connected to innovation, delivery rigor, and engineering practices.",
      "Industry validation of ApMoSys capabilities across enterprise technology programs.",
    ],
  },
  {
    id: "ai-automation-innovator",
    year: "2025",
    category: "AI & Automation",
    title: "AI Test Automation Pioneer Award",
    organization: "Digital Assurance Leadership Summit",
    summary:
      "Awarded for self-healing automation frameworks that drastically reduce test suite maintenance overhead.",
    points: [
      "Pioneering computer vision and machine learning models for test scripting.",
      "Reducing manual test maintenance effort by over 60%.",
      "Accelerating release pipelines for Fortune 500 financial clients.",
    ],
  },
  {
    id: "cloud-reliability-2024",
    year: "2024",
    category: "Cloud Assurance",
    title: "Cloud Migration Assurance Partner of the Year",
    organization: "Enterprise Architecture World",
    summary:
      "Recognized for pre-migration risk validation, continuous performance testing, and cloud observability.",
    points: [
      "Zero-downtime migration assurance for mission-critical banking platforms.",
      "Comprehensive performance and chaos testing before production cutover.",
      "Sustained 99.99% system availability post-deployment.",
    ],
  },
];

export default function IndustryAwardsShowcase() {
  return (
    <SectionThemeWrapper sectionId="awards_showcase" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="industry-awards"
            className={`py-12 lg:py-16 transition-colors duration-300 border-b scroll-mt-20 ${
              isDark
                ? "bg-[#0D0D0D] text-[#FAFAFA] border-[#2A2A2A]"
                : "bg-[#F0F4F8] text-[#121212] border-gray-200"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="mb-12 max-w-3xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800 dark:text-white">
                  <EditableText
                    path="awards.showcase.title"
                    fallback="Industry Awards & Accolades"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-black dark:text-gray-300">
                  <EditableText
                    path="awards.showcase.subtitle"
                    fallback="Acknowledgements that reflect ApMoSys performance across quality engineering, automation, innovation, and customer value."
                    as="span"
                  />
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {awardsData.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-xl border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                      isDark
                        ? "bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#222]"
                        : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500">
                          <Trophy className="w-6 h-6" />
                        </div>
                        <span className="font-mono text-xs font-bold text-amber-500 px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/20">
                          {item.year}
                        </span>
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        {item.category} • {item.organization}
                      </span>

                      <h3 className="font-heading text-xl md:text-2xl font-medium mt-1 mb-3 text-gray-800 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm font-medium leading-relaxed mb-6 text-black dark:text-gray-300">
                        {item.summary}
                      </p>

                      <div className="space-y-2 border-t border-gray-200 dark:border-[#2A2A2A] pt-4">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-black dark:text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
