"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

type CertItem = {
  code: string;
  name: string;
  type: string;
  description: string;
  points: string[];
};

const certsData: CertItem[] = [
  {
    code: "ISO 27001",
    name: "Information Security Management",
    type: "Security Standard",
    description: "International standard for information security risk governance, data protection, and operational safety.",
    points: [
      "Rigorous data protection policies across global delivery hubs.",
      "Annual third-party security audits and penetration testing.",
      "Strict access control and encrypted customer data handling.",
    ],
  },
  {
    code: "CMMI Level 5",
    name: "Capability Maturity Model Integration",
    type: "Process Maturity",
    description: "Highest level of process optimization, continuous improvement, and quantitative delivery management.",
    points: [
      "Process and compliance credentials that strengthen delivery confidence.",
      "Standardized quality engineering methodology across all projects.",
      "Predictable defect reduction and transparent metrics reporting.",
    ],
  },
  {
    code: "ISO 9001",
    name: "Quality Management Systems",
    type: "Quality Governance",
    description: "Certified quality management framework guaranteeing customer focus and systematic service quality.",
    points: [
      "Structured quality management system across software lifecycle.",
      "Continuous internal audits and corrective action workflows.",
      "High customer satisfaction and measurable delivery benchmarks.",
    ],
  },
];

export default function CertificationsBadgeGrid() {
  return (
    <SectionThemeWrapper sectionId="awards_certifications" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="certifications"
            className={`py-12 lg:py-16 border-b transition-colors duration-300 scroll-mt-20 ${
              isDark ? "bg-[#0D0D0D] text-[#FAFAFA] border-[#2A2A2A]" : "bg-white text-[#121212] border-gray-100"
            }`}
          >
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
              
              <div className="mb-12 max-w-3xl">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-normal tracking-tight leading-[1.1] text-gray-800 dark:text-white">
                  <EditableText
                    path="awards.certifications.title"
                    fallback="Certifications & Governance Credentials"
                    as="span"
                  />
                </h2>
                <p className="mt-3 text-base sm:text-lg font-medium text-black dark:text-gray-300">
                  <EditableText
                    path="awards.certifications.subtitle"
                    fallback="Certifications that support trusted delivery, repeatable processes, and compliance governance across customer engagements."
                    as="span"
                  />
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {certsData.map((cert, idx) => (
                  <motion.div
                    key={cert.code}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className={`rounded-xl border p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                      isDark ? "bg-[#1A1A1A] border-[#2A2A2A]" : "bg-white border-gray-200 shadow-sm hover:shadow-lg"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-2xl font-extrabold text-amber-500">
                          {cert.code}
                        </span>
                        <ShieldCheck className="w-6 h-6 text-amber-500" />
                      </div>

                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        {cert.type}
                      </span>

                      <h3 className="font-heading text-xl md:text-2xl font-medium mt-1 mb-3 text-gray-800 dark:text-white">
                        {cert.name}
                      </h3>

                      <p className="text-sm font-medium leading-relaxed mb-6 text-black dark:text-gray-300">
                        {cert.description}
                      </p>

                      <div className="space-y-2 border-t border-gray-200 dark:border-[#2A2A2A] pt-4">
                        {cert.points.map((pt, pIdx) => (
                          <div key={pIdx} className="flex items-start gap-2 text-xs font-medium text-black dark:text-gray-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
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
