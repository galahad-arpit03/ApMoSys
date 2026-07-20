"use client";
import React from "react";
import { motion } from "framer-motion";
import { impactData } from "./ImpactSectionData";

export default function ImpactSection() {
  const { heading, description, metrics } = impactData;

  return (
    <section className="py-16 lg:py-24 bg-[#0A1128] border-t border-[#1A264A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Heading */}
          <div className="lg:col-span-5">
            {/* <span className="text-blue-600 uppercase tracking-[0.25em] text-xs font-semibold">
              Measurable Impact
            </span> */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-white mt-4 leading-[1.1]">
              {heading}
            </h2>
            <p className="mt-6 text-base lg:text-lg text-gray-300 leading-relaxed">
              {description}
            </p>
          </div>

          {/* Right: Metrics */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#121B38] border border-[#1A264A] rounded-md p-8 text-center hover:border-blue-600/40 transition-all"
              >
                <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}