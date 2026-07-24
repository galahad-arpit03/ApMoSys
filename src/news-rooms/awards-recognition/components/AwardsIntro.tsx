// src/news-rooms/awards-recognition/components/AwardsIntro.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Trophy, Star, Shield, Award, CheckCircle } from "lucide-react";

const milestoneHighlights = [
  {
    id: "milestone-1",
    year: "2026",
    title: "AI Innovation Partner Award",
    description: "Awarded for autonomous test creation and self-healing UI/API testing frameworks integrated with enterprise CI/CD pipelines.",
    icon: Trophy,
    details: ["Autonomous QA", "Computer Vision Testing", "AIOps Telemetry"],
  },
  {
    id: "milestone-2",
    year: "2025",
    title: "Global Quality Engineering Firm of the Year",
    description: "Recognized by Global Tech Excellence Forum for delivering 40% faster time-to-market and 99.9% system reliability for Fortune 500 clients.",
    icon: Star,
    details: ["40% Speed Increment", "Zero-Defect Standard", "Global Delivery"],
  },
  {
    id: "milestone-3",
    year: "2024",
    title: "DevSecOps Governance Excellence",
    description: "Honored for pioneering zero-trust security gates and automated vulnerability remediation in cloud-native banking applications.",
    icon: Shield,
    details: ["Zero-Trust QA", "Continuous SAST/DAST", "Regulatory Assurance"],
  },
  {
    id: "milestone-4",
    year: "2023",
    title: "Enterprise Automation Milestone",
    description: "Reached 10+ million automated test executions across financial services, insurance, and healthcare enterprise platforms.",
    icon: Award,
    details: ["10M+ Executions", "Multi-Tenant Labs", "Scale Assurance"],
  },
  {
    id: "milestone-5",
    year: "2022",
    title: "ISO 27001 & SOC 2 Certification Milestone",
    description: "Achieved baseline global security compliance ratings, establishing ApMoSys as a trusted global engineering partner.",
    icon: CheckCircle,
    details: ["ISO 27001 Certified", "SOC 2 Type II", "HIPAA Ready"],
  },
];

export default function AwardsIntro() {
  return (
    <section id="awards-timeline" className="py-10 lg:py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Split Header - Single-colored Heading */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Key Recognition Milestones & Achievements
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              Tracing our track record of continuous engineering innovation, global security certifications, and industry benchmark accolades.
            </p>
          </div>
        </div>

        {/* Suitable Card Grid Layout - No Timeline Chart / Central Line */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {milestoneHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5 }}
                className="group bg-white border border-gray-200 rounded-md p-8 hover:border-[#242A56]/40 hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-md bg-[#242A56]/10 border border-[#242A56]/20 flex items-center justify-center text-[#242A56] group-hover:bg-[#242A56] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <span className="text-sm font-bold text-gray-400 group-hover:text-[#242A56] transition-colors">
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-base xl:text-lg font-medium text-black mb-3 group-hover:text-[#242A56] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-[13px] xl:text-[14px] text-[#5A5A5A] leading-snug mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Details Tags */}
                {item.details && item.details.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                    {item.details.map((detail) => (
                      <span
                        key={detail}
                        className="text-[10px] font-medium text-gray-600 bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-full flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3 h-3 text-[#242A56]" />
                        {detail}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
