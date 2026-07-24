"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Trophy, Star, Shield, Award, CheckCircle } from "lucide-react";

const recognitionTimelineSteps = [
  {
    id: "1",
    title: "2026 AI Innovation Partner Award",
    description: "Awarded for autonomous test creation and self-healing UI/API testing frameworks integrated with enterprise CI/CD pipelines.",
    icon: Trophy,
    details: ["Autonomous QA", "Computer Vision Testing", "AIOps Telemetry"],
  },
  {
    id: "2",
    title: "2025 Global Quality Engineering Firm of the Year",
    description: "Recognized by Global Tech Excellence Forum for delivering 40% faster time-to-market and 99.9% system reliability for Fortune 500 clients.",
    icon: Star,
    details: ["40% Speed Increment", "Zero-Defect Standard", "Global Delivery"],
  },
  {
    id: "3",
    title: "2024 DevSecOps Governance Excellence",
    description: "Honored for pioneering zero-trust security gates and automated vulnerability remediation in cloud-native banking applications.",
    icon: Shield,
    details: ["Zero-Trust QA", "Continuous SAST/DAST", "Regulatory Assurance"],
  },
  {
    id: "4",
    title: "2023 Enterprise Automation Milestone",
    description: "Reached 10+ million automated test executions across financial services, insurance, and healthcare enterprise platforms.",
    icon: Award,
    details: ["10M+ Executions", "Multi-Tenant Labs", "Scale Assurance"],
  },
  {
    id: "5",
    title: "2022 ISO 27001 & SOC 2 Certification Milestone",
    description: "Achieved baseline global security compliance ratings, establishing ApMoSys as a trusted global engineering partner.",
    icon: CheckCircle,
    details: ["ISO 27001 Certified", "SOC 2 Type II", "HIPAA Ready"],
  },
];

export default function AwardsIntro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="awards-timeline" className="py-10 lg:py-16 bg-[#FAFAFA] border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Recognition & Milestone Timeline
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              Tracing our journey of continuous engineering innovation, global security certifications, and industry accolades.
            </p>
          </div>
        </div>

        {/* Vertical Timeline with Animated Line */}
        <div className="relative max-w-5xl mx-auto" ref={containerRef}>
          {/* Central Line – Static background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform md:-translate-x-1/2 rounded-full" />

          {/* Animated Line – grows with scroll */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 w-0.5 bg-[#2563EB] transform md:-translate-x-1/2 rounded-full origin-top"
            style={{ height: lineHeight }}
          />

          {recognitionTimelineSteps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            const Icon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className={`relative flex flex-col md:flex-row items-start mb-12 last:mb-0 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#2563EB] rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_20px_rgba(37,99,235,0.4)] border-2 border-white">
                  <div className="absolute inset-0 rounded-full animate-ping bg-[#2563EB]/30" />
                </div>

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 w-full md:w-[45%] ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-white border border-gray-200 rounded-md p-6 hover:border-[#2563EB]/30 hover:shadow-lg transition-all group">
                    {/* Step Number & Icon */}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-[10px] font-bold text-[#2563EB] uppercase tracking-wider bg-[#2563EB]/10 px-3 py-1 rounded-full">
                        Step {step.id}
                      </span>
                      <div className="w-8 h-8 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" strokeWidth={1.5} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-[#2563EB] transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-[#5A5A5A] text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details Tags */}
                    {step.details && step.details.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="text-[10px] font-medium text-gray-600 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-full flex items-center gap-1.5 group-hover:border-[#2563EB]/20 group-hover:bg-[#2563EB]/5 transition-colors"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
                            {detail}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty spacer for alignment */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
