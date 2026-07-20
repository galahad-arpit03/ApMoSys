// src/what-we-do/industries/ComplexProblems/ComplexProblems.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

const problems = [
  {
    id: "1",
    title: "Legacy Modernization",
    description: "Transform monolithic legacy systems into scalable, cloud-native architectures with zero business disruption.",
  },
  {
    id: "2",
    title: "Data Integration & Governance",
    description: "Unify siloed data sources, ensure data quality, and enforce governance across your entire enterprise ecosystem.",
  },
  {
    id: "3",
    title: "Security & Compliance",
    description: "Build zero-trust architectures with automated compliance validation for regulated industries.",
  },
];

export default function ComplexProblems() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Header – No eyebrow */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.1]">
              Complex Problems.<br />Precise Solutions.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              We tackle the most challenging enterprise problems with deep technical expertise, innovative thinking, and a commitment to delivering measurable results.
            </p>
          </div>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {problems.map((problem, idx) => (
            <motion.div
              key={problem.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group relative bg-white border border-gray-200 rounded-md p-8 hover:border-[#2563EB]/30 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              {/* Step Number */}
              <div className="text-6xl font-bold text-gray-100 group-hover:text-[#2563EB]/10 transition-colors mb-4">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#2563EB] transition-colors">
                {problem.title}
              </h3>

              <p className="text-sm text-[#5A5A5A] leading-relaxed">
                {problem.description}
              </p>

              {/* Decorative bottom line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}