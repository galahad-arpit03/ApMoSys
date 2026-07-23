"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, CheckCircle2 } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type ImpactStudy = {
  id: string;
  title: string;
  scope: string;
  summary: string;
  points: string[];
};

const impactStudiesData: ImpactStudy[] = [
  {
    id: "impact-enterprise-modernization",
    title: "Transformation Proof: Global Banking Core Quality Overhaul",
    scope: "Enterprise Program",
    summary:
      "Studies that explain the broader business, technology, and customer experience impact of modernization programs.",
    points: [
      "Analysis of transformation outcomes across speed, quality, stability, and satisfaction.",
      "Program-level results that connect engineering work to strategic business goals.",
      "Narratives and metrics that show how sustainable change is achieved.",
    ],
  },
  {
    id: "impact-multi-cloud-assurance",
    title: "Multi-Cloud Reliability & Security Assurance Program",
    scope: "Platform Engineering",
    summary:
      "Comprehensive evaluation of security posture, zero-vulnerability deployment standards, and SLA compliance.",
    points: [
      "Securing microservices with automated SAST/DAST testing pipelines.",
      "Ensuring 100% data governance compliance across multi-cloud regions.",
      "Lowering cloud infrastructure waste through performance tuning.",
    ],
  },
];

export default function ImpactStudiesAccordion() {
  return (
    <SectionThemeWrapper sectionId="metrics_studies" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="impact-studies"
            className={`py-12 lg:py-16 border-b transition-colors duration-300 scroll-mt-20 ${
              isDark ? "bg-[#0F172A] text-white border-slate-800" : "bg-gray-900 text-white border-gray-800"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="mb-12 max-w-3xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-white">
                  <EditableText
                    path="metrics.studies.title"
                    fallback="Program-Level Impact Studies"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-slate-300">
                  <EditableText
                    path="metrics.studies.subtitle"
                    fallback="Studies that explain the broader business, technology, and customer experience impact of modernization programs."
                    as="span"
                  />
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {impactStudiesData.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="rounded-xl bg-[#1A1A1A] border border-[#2A2A2A] p-8 flex flex-col justify-between transition-all hover:border-gray-600"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Layers className="w-5 h-5 text-blue-400" />
                          <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                            {item.scope}
                          </span>
                        </div>
                      </div>

                      <h3 className="font-heading font-medium text-white text-xl mb-3">
                        {item.title}
                      </h3>

                      <p className="text-slate-300 text-sm font-medium leading-relaxed mb-6">
                        {item.summary}
                      </p>

                      <div className="pt-5 border-t border-[#2A2A2A] space-y-2">
                        {item.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-slate-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
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
