// src/what-we-do/services/ServiceProcess/ServiceProcess.tsx
"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CheckCircle2, Search, Layers, Code, ShieldCheck, Rocket } from "lucide-react";

const steps = [
  {
    id: "1",
    title: "Discovery & Assessment",
    description:
      "We analyze your current systems, processes, and challenges to identify opportunities for automation, optimization, and modernization.",
    icon: Search,
    details: ["Technical Audit", "Stakeholder Interviews", "Process Mapping"],
  },
  {
    id: "2",
    title: "Strategy & Architecture",
    description:
      "We design a tailored engineering strategy and architectural blueprint aligned with your business goals and technical requirements.",
    icon: Layers,
    details: ["Architecture Design", "Technology Selection", "Roadmap Planning"],
  },
  {
    id: "3",
    title: "Implementation & Development",
    description:
      "Our engineering teams execute the strategy using agile methodologies, delivering value incrementally with continuous feedback.",
    icon: Code,
    details: ["Agile Sprints", "CI/CD Pipeline", "Code Reviews"],
  },
  {
    id: "4",
    title: "Quality & Security Validation",
    description:
      "Comprehensive testing, security scanning, and performance validation ensure your systems meet the highest quality standards.",
    icon: ShieldCheck,
    details: ["Automated Testing", "Security Audit", "Performance Testing"],
  },
  {
    id: "5",
    title: "Deployment & Operations",
    description:
      "We deploy your solutions and provide ongoing monitoring, support, and optimization to ensure long-term success and reliability.",
    icon: Rocket,
    details: ["Production Deployment", "24/7 Monitoring", "Continuous Optimization"],
  },
];

export default function ServiceProcess() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-driven line animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header – following landing page pattern */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            {/* <span className="text-[#2563EB] uppercase tracking-[0.25em] text-xs font-semibold">
              Our Process
            </span> */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black mt-4 leading-[1.1]">
              A Structured Path to Engineering Excellence
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              Our five-stage engineering process ensures clarity, quality, and consistency across every engagement — from initial discovery to ongoing operations.
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

          {steps.map((step, idx) => {
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