"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, CheckCircle2 } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type SnapshotItem = {
  title: string;
  before: string;
  after: string;
  points: string[];
};

const snapshotsData: SnapshotItem[] = [
  {
    title: "Healthcare Provider Data Assurance",
    before: "Manual compliance validation taking 3 weeks per release.",
    after: "Automated data privacy verification running in 15 minutes.",
    points: [
      "Before-and-after views of customer delivery performance and engineering maturity.",
      "Examples of rapid issue resolution, release acceleration, and quality improvement.",
      "Stories that show how teams turn transformation goals into visible progress.",
    ],
  },
  {
    title: "E-Commerce Peak Season Scalability",
    before: "System degradation during Black Friday traffic spikes.",
    after: "Zero downtime during 5x peak transaction volume.",
    points: [
      "Pre-season load simulation and capacity planning.",
      "Automated chaos engineering testing under peak load.",
      "Sustained 100% checkout completion rates.",
    ],
  },
];

export default function ImpactSnapshotsGrid() {
  return (
    <SectionThemeWrapper sectionId="customer_snapshots" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="success-stories"
            className={`py-12 lg:py-16 border-b transition-colors duration-300 scroll-mt-20 ${
              isDark ? "bg-[#0D0D0D] text-[#FAFAFA] border-[#2A2A2A]" : "bg-white text-[#121212] border-gray-100"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="mb-12 max-w-3xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800 dark:text-white">
                  <EditableText
                    path="customer.snapshots.title"
                    fallback="Rapid Transformation Wins & Outcomes"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-black dark:text-gray-300">
                  <EditableText
                    path="customer.snapshots.subtitle"
                    fallback="Concise stories of customer wins showing practical improvements in delivery, speed, and operations."
                    as="span"
                  />
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {snapshotsData.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-xl border p-8 flex flex-col justify-between transition-all hover:-translate-y-1 ${
                      isDark ? "bg-[#1A1A1A] border-[#2A2A2A]" : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <Zap className="w-5 h-5 text-emerald-500" />
                        <h3 className="font-heading text-xl md:text-2xl font-medium text-gray-800 dark:text-white">
                          {item.title}
                        </h3>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4 my-5">
                        <div className={`p-4 rounded-lg border ${
                          isDark ? "bg-[#121212] border-red-500/30" : "bg-red-50/50 border-red-200"
                        }`}>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-red-500 block mb-1">
                            Before ApMoSys
                          </span>
                          <p className="text-xs font-medium text-black dark:text-gray-300">
                            {item.before}
                          </p>
                        </div>
                        <div className={`p-4 rounded-lg border ${
                          isDark ? "bg-[#121212] border-emerald-500/30" : "bg-emerald-50/50 border-emerald-200"
                        }`}>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500 block mb-1">
                            After Transformation
                          </span>
                          <p className="text-xs font-medium text-black dark:text-gray-300">
                            {item.after}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-2 border-t border-gray-200 dark:border-[#2A2A2A] pt-4">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-black dark:text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
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
