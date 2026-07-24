"use client";

import React from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";

type PerformanceMetric = {
  name: string; // Kept in data for reference but removed from UI (eyebrow)
  value: string;
  progress: number;
  description: string;
  points: string[]; // Removed from UI to reduce content
};

const performanceDataList: PerformanceMetric[] = [
  {
    name: "Application Latency & Speed",
    value: "140ms",
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
    value: "95%",
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
    value: "88%",
    progress: 88,
    description: "Drastic drop in high-severity production incidents post-release.",
    points: [
      "Early defect identification during shift-left static analysis and unit testing.",
      "Automated chaos testing ensuring system resilience.",
      "Faster root cause isolation with full-stack log tracing.",
    ],
  },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";

  // On mobile (1 col), everything except the last item gets a bottom border
  if (idx < total - 1) classes += "border-b md:border-b-0 ";

  // On desktop (3 cols), everything except the 3rd item in a row gets a right border
  if ((idx + 1) % 3 !== 0) classes += "md:border-r ";

  return classes;
};

export default function OperationalDataStrip() {
  return (
    <section id="performance-data" className="py-12 lg:py-16 bg-[#FAFAFA] border-b border-gray-100 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        
        {/* Header - LHS/RHS Split */}
        <div className="mb-8 lg:mb-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-[1.15] text-gray-900 whitespace-pre-line">
              <EditableText
                path="metrics.signals.title"
                fallback={`Operational Velocity, \nSystem Reliability`}
                as="span"
              />
            </h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-base sm:text-lg leading-relaxed text-[#5A5A5A]">
              <EditableText
                path="metrics.signals.subtitle"
                fallback="Performance indicators showing how systems, engineering teams, and delivery processes improve over time."
                as="span"
              />
            </p>
          </div>
        </div>

        {/* Tabular Grid Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full border-t border-b border-gray-200">
          {performanceDataList.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`py-8 md:py-12 px-6 xl:px-10 flex flex-col justify-center ${getBorderClasses(idx, performanceDataList.length)}`}
            >
              <span className="text-3xl sm:text-4xl font-heading font-semibold text-gray-900 block tracking-tight mb-3">
                {item.value}
              </span>
              <p className="text-[14px] text-gray-600 leading-relaxed m-0">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
