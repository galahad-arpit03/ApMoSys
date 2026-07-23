"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, ArrowUpRight, CheckCircle2, Filter } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type EventItem = {
  id: string;
  category: "roundtable" | "workshop" | "partner";
  categoryLabel: string;
  date: string;
  month: string;
  day: string;
  title: string;
  summary: string;
  targetAudience: string;
  highlights: string[];
};

const upcomingEventsData: EventItem[] = [
  {
    id: "executive-qa-roundtable",
    category: "roundtable",
    categoryLabel: "Executive Roundtable",
    date: "August 12, 2026",
    month: "AUG",
    day: "12",
    title: "Executive Roundtable: Quality Engineering Strategy for 2027",
    summary:
      "An exclusive interactive discussion for CIOs and VP-level engineering leaders on balancing release velocity with zero-defect governance.",
    targetAudience: "CIOs, CTOs, VPs of Quality & Engineering",
    highlights: [
      "Executive benchmarks for software delivery speed vs defect leakage.",
      "Navigating AI code generation risks in mission-critical applications.",
      "Optimizing QA spend across hybrid cloud and legacy estates.",
    ],
  },
  {
    id: "hands-on-ai-automation",
    category: "workshop",
    categoryLabel: "Hands-on Workshop",
    date: "September 04, 2026",
    month: "SEP",
    day: "04",
    title: "AI-Powered Test Automation & Self-Healing Frameworks",
    summary:
      "A technical deep-dive workshop showing QA engineers how to build resilient test suites with intelligent element detection and automated repair.",
    targetAudience: "QA Leads, SDETs, Automation Architects",
    highlights: [
      "Building self-healing UI test scripts with computer vision.",
      "Integrating continuous quality gates in GitHub Actions & Azure DevOps.",
      "Reducing flaky test executions by up to 75%.",
    ],
  },
  {
    id: "partner-assurance-forum",
    category: "partner",
    categoryLabel: "Partner Forum",
    date: "September 22, 2026",
    month: "SEP",
    day: "22",
    title: "Ecosystem Assurance: Scaling Quality Across Enterprise Platforms",
    summary:
      "Joint session with enterprise technology partners exploring end-to-end integration testing for SAP, Salesforce, and custom cloud microservices.",
    targetAudience: "Platform Owners, Solution Architects, Integration Leads",
    highlights: [
      "Multi-system E2E test execution strategies.",
      "Synthetic data generation and privacy compliance.",
      "Real-time release health dashboards across partner platforms.",
    ],
  },
];

export default function UpcomingEventsGrid() {
  const [filter, setFilter] = useState<string>("all");

  const filteredEvents = filter === "all"
    ? upcomingEventsData
    : upcomingEventsData.filter((evt) => evt.category === filter);

  return (
    <SectionThemeWrapper sectionId="events_upcoming" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="upcoming-events"
            className={`py-12 lg:py-16 transition-colors duration-300 border-b scroll-mt-20 ${
              isDark
                ? "bg-[#0D0D0D] text-[#FAFAFA] border-[#2A2A2A]"
                : "bg-[#F0F4F8] text-[#121212] border-gray-200"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              {/* Header & Filter Controls */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                <div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800 dark:text-white">
                    <EditableText
                      path="events.upcoming.title"
                      fallback="Upcoming Events & Sessions"
                      as="span"
                    />
                  </h2>
                  <p className="mt-3 text-base sm:text-lg font-medium text-black dark:text-gray-300 max-w-2xl">
                    <EditableText
                      path="events.upcoming.subtitle"
                      fallback="Planned sessions focused on quality engineering, automation, AI adoption, and enterprise modernization."
                      as="span"
                    />
                  </p>
                </div>

                {/* Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0">
                  <Filter className="w-4 h-4 text-gray-400 mr-1 shrink-0" />
                  {[
                    { key: "all", label: "All Events" },
                    { key: "roundtable", label: "Roundtables" },
                    { key: "workshop", label: "Workshops" },
                    { key: "partner", label: "Partner Forums" },
                  ].map((btn) => (
                    <button
                      key={btn.key}
                      onClick={() => setFilter(btn.key)}
                      className={`px-4 py-2 rounded-md text-xs font-bold transition-all whitespace-nowrap ${
                        filter === btn.key
                          ? "bg-[#242A56] text-white shadow-md"
                          : isDark
                          ? "bg-[#1A1A1A] border border-[#2A2A2A] text-gray-300 hover:text-white"
                          : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {btn.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Events Grid */}
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filteredEvents.map((evt, idx) => (
                  <motion.div
                    key={evt.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-xl border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                      isDark
                        ? "bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#222]"
                        : "bg-white border-gray-200/80 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-lg"
                    }`}
                  >
                    <div>
                      {/* Date Header */}
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3">
                          <div className={`flex flex-col items-center justify-center w-12 h-14 rounded-lg font-bold text-center border ${
                            isDark ? "bg-[#121212] border-[#2A2A2A]" : "bg-gray-50 border-gray-200"
                          }`}>
                            <span className="text-[10px] font-bold text-primary-red">
                              {evt.month}
                            </span>
                            <span className="text-lg font-heading font-extrabold text-gray-800 dark:text-white leading-none">
                              {evt.day}
                            </span>
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                              {evt.date}
                            </span>
                            <span className="block text-[11px] font-bold text-primary-red mt-0.5">
                              {evt.categoryLabel}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3 className="font-heading text-xl md:text-2xl font-medium mb-3 text-gray-800 dark:text-white">
                        {evt.title}
                      </h3>

                      <p className="text-sm font-medium leading-relaxed mb-6 text-black dark:text-gray-300">
                        {evt.summary}
                      </p>

                      <div className="pt-4 border-t border-gray-200 dark:border-[#2A2A2A] flex items-center gap-2 text-xs font-semibold text-gray-500 dark:text-gray-400 mb-4">
                        <Users className="w-4 h-4 text-primary-red shrink-0" />
                        <span>Audience: {evt.targetAudience}</span>
                      </div>

                      <div className="space-y-2">
                        {evt.highlights.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-black dark:text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-primary-red shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 pt-5 border-t border-gray-200 dark:border-[#2A2A2A]">
                      <button className="w-full py-3 rounded-md bg-[#242A56] hover:bg-[#1E234B] text-white text-xs font-bold flex items-center justify-center gap-2 transition-all shadow">
                        <span>Register Interest</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
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
