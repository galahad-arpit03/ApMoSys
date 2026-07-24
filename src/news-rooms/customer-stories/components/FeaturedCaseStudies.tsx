"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
    points: [],
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
    points: [],
  },
  {
    id: "observability-implementation",
    industry: "Enterprise SaaS & Telecommunications",
    clientTitle: "High-Throughput Telecom Network",
    headline: "Full-Stack Observability & Real-Time Production Monitoring",
    metricValue: "99.99%",
    metricLabel: "Uptime & Availability",
    summary:
      "Deployed end-to-end monitoring, anomaly detection, and synthetic monitoring for mission-critical infrastructure.",
    points: [],
  },
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "border-gray-200 ";

  if (idx < total - 1) classes += "border-b ";

  if (idx === total - 2) classes += "md:border-b-0 ";
  if (idx % 2 === 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";

  if (idx >= total - 3) classes += "lg:border-b-0 ";
  else classes += "lg:border-b ";

  if ((idx + 1) % 3 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";

  return classes;
};

export default function FeaturedCaseStudies() {
  return (
    <section id="case-studies" className="pt-8 pb-16 lg:pt-10 lg:pb-20 bg-[#FAFAFA] scroll-mt-20">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        
        {/* Header - LHS/RHS Split */}
        <div className="mb-4 lg:mb-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Side: Heading */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-medium tracking-tight leading-[1.15] text-gray-900">
              <EditableText
                path="customer.case_studies.title"
                fallback="Featured Customer Case Studies"
                as="span"
              />
            </h2>
          </div>

          {/* Right Side: Paragraph */}
          <div className="lg:pt-4">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A]">
              <EditableText
                path="customer.case_studies.subtitle"
                fallback="Detailed examples of customer challenges, ApMoSys solutions, delivery approach, and quantifiable business results."
                as="span"
              />
            </p>
          </div>
        </div>

        {/* Tabular Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-b border-gray-200">
          {caseStudiesData.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`py-8 md:py-12 px-6 xl:px-10 flex flex-col justify-between ${getBorderClasses(idx, caseStudiesData.length)}`}
            >
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-semibold mb-4 text-gray-900 leading-snug">
                  {study.headline}
                </h3>

                <p className="text-[14px] text-gray-600 leading-relaxed mb-8">
                  {study.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-gray-100 flex items-end justify-between mt-auto">
                <div>
                  <span className="block text-3xl sm:text-4xl font-heading font-bold text-gray-900 tracking-tight">
                    {study.metricValue}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1 block">
                    {study.metricLabel}
                  </span>
                </div>
                
                <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-900 shrink-0 shadow-sm">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
