"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type CaseStudy = {
  id: string;
  industry: string;
  clientTitle: string;
  headline: string;
  metricValue: string;
  metricLabel: string;
  summary: string;
  points: string[];
};

const caseStudiesData: CaseStudy[] = [
  {
    id: "enterprise-banking-transformation",
    industry: "Banking & Financial Services",
    clientTitle: "Tier-1 Multinational Bank",
    headline: "Modernizing Core Banking Assurance & Automation Pipelines",
    metricValue: "40%",
    metricLabel: "Faster Release Cycles",
    summary:
      "Modernized testing and delivery pipelines for a large banking ecosystem, accelerating software releases and improving quality assurance.",
    points: [
      "Problem statements that clarify operational and technology context across legacy mainframe & microservices.",
      "Solution narratives covering automated testing, security gates, and continuous delivery.",
      "Outcome summaries tied to quality, release speed, reliability, and cost reduction.",
    ],
  },
  {
    id: "insurance-platform-modernization",
    industry: "Insurance Platforms",
    clientTitle: "Global Claims & Policy Leader",
    headline: "Automating End-to-End Claims Processing & Quality Assurance",
    metricValue: "60%",
    metricLabel: "Reduction in Production Defects",
    summary:
      "Implemented quality engineering frameworks and automation accelerators to improve release confidence and eliminate post-deployment bugs.",
    points: [
      "Building continuous automated regression testing for complex claims workflows.",
      "Implementing synthetic test data generation to ensure compliance with privacy laws.",
      "Accelerating sprint sign-off speed from days to hours.",
    ],
  },
  {
    id: "observability-implementation",
    industry: "Enterprise SaaS & Telecommunications",
    clientTitle: "High-Throughput Telecom Network",
    headline: "Full-Stack Observability & Real-Time Production Monitoring",
    metricValue: "99.99%",
    metricLabel: "Uptime & Availability Achieved",
    summary:
      "Deployed end-to-end monitoring, anomaly detection, and synthetic monitoring for mission-critical infrastructure.",
    points: [
      "Real-time synthetic transaction monitoring across distributed cloud nodes.",
      "Predictive anomaly detection alerting operations prior to user impact.",
      "Seamless integration with incident management and automated rollback triggers.",
    ],
  },
];

export default function FeaturedCaseStudies() {
  return (
    <SectionThemeWrapper sectionId="customer_case_studies" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="case-studies"
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
                    path="customer.case_studies.title"
                    fallback="Featured Customer Case Studies"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-black dark:text-gray-300">
                  <EditableText
                    path="customer.case_studies.subtitle"
                    fallback="Detailed examples of customer challenges, ApMoSys solutions, delivery approach, and quantifiable business results."
                    as="span"
                  />
                </p>
              </div>

              <div className="space-y-8">
                {caseStudiesData.map((study, idx) => (
                  <motion.div
                    key={study.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-xl border p-8 lg:p-10 grid lg:grid-cols-12 gap-8 items-center transition-all hover:-translate-y-1 ${
                      isDark
                        ? "bg-[#1A1A1A] border-[#2A2A2A] hover:bg-[#222]"
                        : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <div className="lg:col-span-8">
                      <div className="flex items-center gap-3 text-xs font-bold text-emerald-500 mb-3">
                        <span>{study.industry}</span>
                        <span>•</span>
                        <span className="text-gray-400">{study.clientTitle}</span>
                      </div>

                      <h3 className="font-heading text-2xl md:text-3xl font-medium mb-3 text-gray-800 dark:text-white">
                        {study.headline}
                      </h3>

                      <p className="text-sm font-medium leading-relaxed mb-6 text-black dark:text-gray-300">
                        {study.summary}
                      </p>

                      <div className="space-y-2 border-t border-gray-200 dark:border-[#2A2A2A] pt-4">
                        {study.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-black dark:text-gray-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`lg:col-span-4 rounded-lg p-6 sm:p-8 flex flex-col items-center justify-center text-center border ${
                      isDark ? "bg-[#121212] border-[#2A2A2A]" : "bg-gray-50 border-gray-200"
                    }`}>
                      <span className="text-4xl sm:text-5xl font-heading font-extrabold text-emerald-500">
                        {study.metricValue}
                      </span>
                      <span className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500">
                        {study.metricLabel}
                      </span>
                      <button className="mt-6 px-4 py-2.5 rounded-md bg-[#242A56] hover:bg-[#1E234B] text-white text-xs font-bold flex items-center gap-2 transition-all shadow">
                        <span>Read Detailed Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
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
