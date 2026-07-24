"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";

type ROICard = {
  id: string;
  metric: string;
  label: string;
  title: string;
  summary: string;
  points: string[]; // Kept for data structure, removed from UI to reduce data/height
};

const roiReportsData: ROICard[] = [
  {
    id: "cost-avoidance-productivity",
    metric: "$2.4M",
    label: "Annual Cost Savings",
    title: "Cost Avoidance & Productivity Improvements",
    summary:
      "Reports that connect engineering investments to measurable returns across automated testing, defect prevention, and process maturity.",
    points: [],
  },
  {
    id: "release-speed-efficiency",
    metric: "4.2x",
    label: "Deployment Velocity",
    title: "Release Speed & Operational Efficiency",
    summary:
      "Accelerating software release cycles from quarterly drops to daily automated deployments while maintaining zero production outages.",
    points: [],
  },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";

  if (idx < total - 1) classes += "border-b ";

  // desktop: 2 cols
  if (idx >= total - (total % 2 === 0 ? 2 : total % 2)) classes += "md:border-b-0 ";
  else classes += "md:border-b ";

  if ((idx + 1) % 2 !== 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  return classes;
};

export default function ROICalculatorSection() {
  return (
    <section id="roi-reports" className="py-12 lg:py-16 bg-[#FAFAFA] border-b border-gray-100 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        
        {/* Header - LHS/RHS Split */}
        <div className="mb-8 lg:mb-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-[1.15] text-gray-900">
              <EditableText
                path="metrics.roi.title"
                fallback="ROI Reports & Financial Impact"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-base sm:text-lg leading-relaxed text-[#5A5A5A]">
              <EditableText
                path="metrics.roi.subtitle"
                fallback="Reports that connect engineering investments to measurable financial and operational returns."
                as="span"
              />
            </p>
          </div>
        </div>

        {/* Tabular Grid Section - Compact & No Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-t border-b border-gray-200">
          {roiReportsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`py-8 md:py-10 px-6 xl:px-10 flex flex-col justify-between ${getBorderClasses(idx, roiReportsData.length)}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-full border border-gray-200 text-gray-800">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <span className="text-3xl sm:text-4xl font-heading font-normal text-gray-900 block tracking-tight">
                      {item.metric}
                    </span>
                    <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mt-1 block">
                      {item.label}
                    </span>
                  </div>
                </div>

                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-snug">
                  {item.title}
                </h3>

                <p className="text-[14px] text-gray-600 leading-relaxed m-0">
                  {item.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
