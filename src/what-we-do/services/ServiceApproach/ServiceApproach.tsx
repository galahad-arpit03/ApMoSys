"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Layers, RefreshCw } from "lucide-react";

const approaches = [
  {
    id: "discovery",
    title: "Discovery & Assessment",
    description: "Deep-dive analysis of your current systems, processes, and technical debt to identify transformation opportunities.",
    icon: Search,
    step: "01",
  },
  {
    id: "architecture",
    title: "Strategic Architecture",
    description: "Designing scalable, resilient, and cost-optimized architectures tailored to your business objectives and growth plans.",
    icon: Layers,
    step: "02",
  },
  {
    id: "agile",
    title: "Agile Delivery",
    description: "Iterative, transparent development with continuous feedback loops to ensure alignment with evolving business needs.",
    icon: RefreshCw,
    step: "03",
  },
];

export default function ServiceApproach() {
  return (
    <section className="py-10 lg:py-16 bg-[#0A1128] border-b border-[#1A264A] relative overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2563EB]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2563EB]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        {/* Split Header */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-white leading-[1.1]">
              Engineering Excellence Through a Proven Methodology
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
              Our approach combines deep industry expertise, technical excellence, and a relentless focus on quality to deliver measurable business outcomes. We partner with you at every stage of your transformation journey.
            </p>
          </div>
        </div>

        {/* Approach Grid – 3-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {approaches.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                className="group relative bg-[#121B38] border border-[#1A264A] rounded-md p-8 hover:border-[#2563EB]/40 hover:shadow-[0_0_40px_rgba(37,99,235,0.05)] transition-all hover:-translate-y-1"
              >
                {/* Step Badge */}
                <div className="absolute top-4 right-4 text-[10px] font-bold text-[#2563EB] bg-[#2563EB]/10 px-3 py-1 rounded-full">
                  Step {item.step}
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-md bg-[#2563EB]/10 border border-[#2563EB]/20 flex items-center justify-center text-[#2563EB] mb-5 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-base xl:text-lg font-medium text-white mb-3 group-hover:text-[#2563EB] transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[13px] xl:text-[14px] text-gray-300 leading-snug">
                  {item.description}
                </p>

                {/* Decorative line on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#2563EB]/0 via-[#2563EB]/50 to-[#2563EB]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}