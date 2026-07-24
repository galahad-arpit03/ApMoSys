"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import EditableText from "@/src/admin/components/EditableText";

type ImpactStudy = {
  id: string;
  title: string;
  scope: string; // Removed from UI
  summary: string;
  points: string[];
};

const impactStudiesData: ImpactStudy[] = [
  {
    id: "impact-enterprise-modernization",
    title: "Transformation Proof: Global Banking Core Quality Overhaul",
    scope: "Enterprise Program",
    summary:
      "Broader business and technology impact of modernization programs.",
    points: [
      "Analysis of transformation outcomes across speed, quality, and stability.",
      "Program-level results connecting engineering to strategic goals.",
    ],
  },
  {
    id: "impact-multi-cloud-assurance",
    title: "Multi-Cloud Reliability & Security Assurance Program",
    scope: "Platform Engineering",
    summary:
      "Evaluation of security posture and deployment standards.",
    points: [
      "Securing microservices with automated SAST/DAST pipelines.",
      "Ensuring compliance and lowering cloud infrastructure waste.",
    ],
  },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-white/10 ";

  if (idx < total - 1) classes += "border-b ";

  // desktop: 2 cols
  if (idx >= total - (total % 2 === 0 ? 2 : total % 2)) classes += "md:border-b-0 ";
  else classes += "md:border-b ";

  if ((idx + 1) % 2 !== 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  return classes;
};

export default function ImpactStudiesAccordion() {
  return (
    <section id="impact-studies" className="py-12 lg:py-16 bg-[#0A1128] border-b border-white/10 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        
        {/* Header - LHS/RHS Split */}
        <div className="mb-8 lg:mb-10 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-[1.15] text-white">
              <EditableText
                path="metrics.studies.title"
                fallback="Program-Level Impact Studies"
                as="span"
              />
            </h2>
          </div>
          <div className="lg:pt-4">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              <EditableText
                path="metrics.studies.subtitle"
                fallback="Studies that explain the broader business, technology, and customer experience impact of modernization programs."
                as="span"
              />
            </p>
          </div>
        </div>

        {/* Tabular Grid Section - Dark Theme */}
        <div className="grid grid-cols-1 md:grid-cols-2 w-full border-t border-b border-white/10">
          {impactStudiesData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`py-8 md:py-12 px-6 xl:px-12 flex flex-col justify-between ${getBorderClasses(idx, impactStudiesData.length)}`}
            >
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-400 leading-relaxed mb-4">
                  {item.summary}
                </p>

                <div className="space-y-4">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
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
