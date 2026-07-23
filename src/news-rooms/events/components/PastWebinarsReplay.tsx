"use client";

import React from "react";
import { motion } from "framer-motion";
import { Play, Clock, ArrowRight } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type ReplayItem = {
  id: string;
  title: string;
  duration: string;
  speakers: string;
  summary: string;
  points: string[];
};

const pastWebinarsData: ReplayItem[] = [
  {
    id: "automation-frameworks-ai",
    title: "Technical Explainer: AI-Enabled Testing & Quality Gates",
    duration: "45 mins",
    speakers: "Engineering Architecture Team",
    summary:
      "Recorded expert session demonstrating how automated quality gates catch regressions before code hits production.",
    points: [
      "Technical explainers on automation frameworks and AI-enabled test creation.",
      "DevOps quality gate configuration in multi-stage CI/CD pipelines.",
      "Real-world code examples and test suite optimization practices.",
    ],
  },
  {
    id: "customer-modernization-roadmap",
    title: "Customer Story: Modernizing Legacy Assurance Pipelines",
    duration: "50 mins",
    speakers: "Lead Quality Strategists & Client Panel",
    summary:
      "In-depth customer conversation unpacking digital modernization roadmaps and measurable release improvements.",
    points: [
      "Customer-focused sessions unpacking modernization roadmaps.",
      "Measuring defect reduction and release speed in high-volume environments.",
      "Lessons learned from scaling automated testing across enterprise teams.",
    ],
  },
  {
    id: "panel-operating-model",
    title: "Executive Panel: Future of Enterprise Engineering Governance",
    duration: "60 mins",
    speakers: "Technology & Business Delivery Leaders",
    summary:
      "Panel discussion exploring how cross-functional teams balance continuous deployment with enterprise security and governance.",
    points: [
      "Panel discussions with leaders from delivery, technology, and operations.",
      "Aligning QA metrics with business KPIs and executive priorities.",
      "Strategies for sustaining continuous quality across distributed global teams.",
    ],
  },
];

export default function PastWebinarsReplay() {
  return (
    <SectionThemeWrapper sectionId="events_replays" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="past-webinars"
            className={`py-12 lg:py-16 border-b transition-colors duration-300 scroll-mt-20 ${
              isDark ? "bg-[#0D0D0D] text-[#FAFAFA] border-[#2A2A2A]" : "bg-white text-[#121212] border-gray-100"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="mb-12 max-w-3xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800 dark:text-white">
                  <EditableText
                    path="events.replays.title"
                    fallback="Past Webinars & On-Demand Replays"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-black dark:text-gray-300">
                  <EditableText
                    path="events.replays.subtitle"
                    fallback="Recorded conversations and expert sessions capturing practical lessons from enterprise delivery teams."
                    as="span"
                  />
                </p>
              </div>

              <div className="space-y-6">
                {pastWebinarsData.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-xl border p-6 sm:p-8 grid lg:grid-cols-12 gap-8 items-center transition-all ${
                      isDark ? "bg-[#1A1A1A] border-[#2A2A2A]" : "bg-white border-gray-200 shadow-sm hover:shadow-md"
                    }`}
                  >
                    {/* Media Placeholder */}
                    <div className={`lg:col-span-4 relative rounded-xl aspect-video flex flex-col items-center justify-center overflow-hidden border ${
                      isDark ? "bg-[#121212] border-[#2A2A2A]" : "bg-gray-100 border-gray-200"
                    }`}>
                      <div className="w-14 h-14 rounded-full bg-[#242A56] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110">
                        <Play className="w-6 h-6 ml-1" />
                      </div>
                      <span className="mt-3 text-xs font-bold text-gray-500">
                        Watch Replay Video
                      </span>
                      <span className="absolute bottom-3 right-3 text-[11px] font-bold px-2 py-0.5 rounded bg-black/80 text-white flex items-center gap-1">
                        <Clock className="w-3 h-3 text-gray-400" />
                        {item.duration}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="lg:col-span-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 text-xs font-bold text-primary-red mb-2">
                          <span>{item.speakers}</span>
                          <span>•</span>
                          <span>{item.duration}</span>
                        </div>

                        <h3 className="font-heading text-xl md:text-2xl font-medium mb-3 text-gray-800 dark:text-white">
                          {item.title}
                        </h3>

                        <p className="text-sm font-medium leading-relaxed mb-6 text-black dark:text-gray-300">
                          {item.summary}
                        </p>

                        <div className="grid sm:grid-cols-3 gap-3">
                          {item.points.map((pt, pIdx) => (
                            <div key={pIdx} className={`p-3 rounded-lg border text-xs font-medium ${
                              isDark ? "bg-[#121212] border-[#2A2A2A] text-gray-300" : "bg-gray-50 border-gray-200 text-gray-800"
                            }`}>
                              {pt}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-[#2A2A2A]">
                        <button className="inline-flex items-center gap-2 text-xs font-bold text-[#242A56] dark:text-primary-red hover:underline">
                          <span>Access Full Recording & Transcript</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
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
