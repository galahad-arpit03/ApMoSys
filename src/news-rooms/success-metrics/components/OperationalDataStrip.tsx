"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, CheckCircle2 } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type PerformanceMetric = {
  name: string;
  value: string;
  progress: number;
  description: string;
  points: string[];
};

const performanceDataList: PerformanceMetric[] = [
  {
    name: "Application Latency & Speed",
    value: "140ms Avg Response",
    progress: 92,
    description: "Application performance, response time, and scalability measurements across peak load.",
    points: [
      "Application performance, reliability, and scalability measurements.",
      "Delivery throughput, quality trends, and incident reduction indicators.",
      "Benchmark views that support better governance and continuous improvement.",
    ],
  },
  {
    name: "Test Automation Execution Rate",
    value: "95% Coverage",
    progress: 95,
    description: "Percentage of regression test suites running fully automated in CI/CD build gates.",
    points: [
      "Parallel multi-browser and mobile device cloud test runs.",
      "Real-time test execution dashboards with automated defect ticketing.",
      "Zero manual regression effort required for standard sprint deployments.",
    ],
  },
  {
    name: "Incident Reduction Benchmark",
    value: "88% Fewer P1s",
    progress: 88,
    description: "Drastic drop in high-severity production incidents post-release.",
    points: [
      "Early defect identification during shift-left static analysis and unit testing.",
      "Automated chaos testing ensuring system resilience.",
      "Faster root cause isolation with full-stack log tracing.",
    ],
  },
];

export default function OperationalDataStrip() {
  return (
    <SectionThemeWrapper sectionId="metrics_signals" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="performance-data"
            className={`py-12 lg:py-16 border-b transition-colors duration-300 scroll-mt-20 ${
              isDark ? "bg-[#0D0D0D] text-[#FAFAFA] border-[#2A2A2A]" : "bg-white text-[#121212] border-gray-100"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="mb-12 max-w-3xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800 dark:text-white">
                  <EditableText
                    path="metrics.signals.title"
                    fallback="Performance Indicators & System Health"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-black dark:text-gray-300">
                  <EditableText
                    path="metrics.signals.subtitle"
                    fallback="Performance indicators showing how systems, engineering teams, and delivery processes improve over time."
                    as="span"
                  />
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {performanceDataList.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-xl border p-6 sm:p-8 flex flex-col justify-between transition-all hover:-translate-y-1 ${
                      isDark ? "bg-[#1A1A1A] border-[#2A2A2A]" : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          {item.name}
                        </span>
                        <Gauge className="w-5 h-5 text-blue-500" />
                      </div>

                      <span className="text-2xl font-heading font-bold text-gray-800 dark:text-white block">
                        {item.value}
                      </span>

                      <div className="w-full bg-gray-200 dark:bg-slate-950 rounded-full h-2 my-4 overflow-hidden">
                        <div
                          className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>

                      <p className="text-sm font-medium leading-relaxed mb-6 text-black dark:text-gray-300">
                        {item.description}
                      </p>

                      <div className="space-y-2 border-t border-gray-200 dark:border-[#2A2A2A] pt-4">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-black dark:text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
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
