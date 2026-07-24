"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";

type SnapshotItem = {
  title: string;
  summary: string;
  points: string[];
};

const snapshotsData: SnapshotItem[] = [
  {
    title: "Healthcare Provider Data Assurance",
    summary: "Transformed manual compliance validation taking 3 weeks per release into automated data privacy verification running in just 15 minutes.",
    points: [
      "Before-and-after views of customer delivery performance and engineering maturity.",
      "Examples of rapid issue resolution, release acceleration, and quality improvement.",
      "Stories that show how teams turn transformation goals into visible progress.",
    ],
  },
  {
    title: "E-Commerce Peak Season Scalability",
    summary: "Eliminated system degradation during Black Friday traffic spikes, achieving zero downtime during 5x peak transaction volume.",
    points: [
      "Pre-season load simulation and capacity planning.",
      "Automated chaos engineering testing under peak load.",
      "Sustained 100% checkout completion rates.",
    ],
  },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";

  if (idx < total - 1) classes += "border-b ";

  if (idx >= total - (total % 2 === 0 ? 2 : total % 2)) classes += "md:border-b-0 ";
  else classes += "md:border-b ";

  if ((idx + 1) % 2 !== 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  return classes;
};

export default function ImpactSnapshotsGrid() {
  return (
    <section id="success-stories" className="py-12 lg:py-16 bg-[#FAFAFA] border-b border-gray-100 scroll-mt-20">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16">
        
        {/* Header - LHS/RHS Split */}
        <div className="mb-6 lg:mb-8 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-[1.15] text-gray-900">
              <EditableText
                path="customer.snapshots.title"
                fallback="Rapid Transformation Wins & Outcomes"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-base sm:text-lg leading-relaxed text-[#5A5A5A]">
              <EditableText
                path="customer.snapshots.subtitle"
                fallback="Concise stories of customer wins showing practical improvements in delivery, speed, and operations."
                as="span"
              />
            </p>
          </div>
        </div>

        {/* Tabular Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-t border-b border-gray-200">
          {snapshotsData.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`group py-6 md:py-8 px-6 xl:px-12 flex flex-col justify-between hover:bg-black/5 transition-colors ${getBorderClasses(idx, snapshotsData.length)}`}
            >
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
                  {item.summary}
                </p>

                <div className="space-y-4 pt-8 border-t border-gray-200 mt-auto">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{pt}</span>
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
}
