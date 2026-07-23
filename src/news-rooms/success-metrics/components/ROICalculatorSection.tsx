"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, CheckCircle2 } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type ROICard = {
  id: string;
  metric: string;
  label: string;
  title: string;
  summary: string;
  points: string[];
};

const roiReportsData: ROICard[] = [
  {
    id: "cost-avoidance-productivity",
    metric: "$2.4M",
    label: "Annual Cost Savings",
    title: "Cost Avoidance & Productivity Improvements",
    summary:
      "Reports that connect engineering investments to measurable returns across automated testing, defect prevention, and process maturity.",
    points: [
      "Cost avoidance and productivity improvements linked to automation and process maturity.",
      "Release cycle, defect leakage, and operational efficiency metrics.",
      "Evidence that helps stakeholders evaluate transformation value with confidence.",
    ],
  },
  {
    id: "release-speed-efficiency",
    metric: "4.2x",
    label: "Deployment Velocity",
    title: "Release Speed & Operational Efficiency",
    summary:
      "Accelerating software release cycles from quarterly drops to daily automated deployments while maintaining zero production outages.",
    points: [
      "Shortening sprint testing duration from days to under 2 hours.",
      "Eliminating manual regression testing bottlenecks with AI automation.",
      "Increasing feature throughput by 300% without adding headcount.",
    ],
  },
];

export default function ROICalculatorSection() {
  return (
    <SectionThemeWrapper sectionId="metrics_roi" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="roi-reports"
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
                    path="metrics.roi.title"
                    fallback="ROI Reports & Financial Impact"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-black dark:text-gray-300">
                  <EditableText
                    path="metrics.roi.subtitle"
                    fallback="Reports that connect engineering investments to measurable financial and operational returns."
                    as="span"
                  />
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {roiReportsData.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-xl border p-8 flex flex-col justify-between transition-all hover:-translate-y-1 ${
                      isDark
                        ? "bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#222]"
                        : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500">
                          <TrendingUp className="w-6 h-6" />
                        </div>
                        <div className="text-right">
                          <span className="text-3xl font-heading font-extrabold text-blue-500 block">
                            {item.metric}
                          </span>
                          <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                            {item.label}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-heading text-xl md:text-2xl font-medium mt-1 mb-3 text-gray-800 dark:text-white">
                        {item.title}
                      </h3>

                      <p className="text-sm font-medium leading-relaxed mb-6 text-black dark:text-gray-300">
                        {item.summary}
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
