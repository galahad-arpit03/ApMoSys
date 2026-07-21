"use client";
import React from "react";
import { motion } from "framer-motion";
import { overviewData } from "./OverviewSectionData";

export default function OverviewSection() {
  const { heading, description, stats } = overviewData;

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Heading */}
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.1]"
            >
              {heading}
            </motion.h2>
          </div>

          {/* Right: Description + Stats */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed mb-10"
            >
              {description}
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-gray-50 border border-gray-200 rounded-md p-6 text-center hover:border-blue-600/30 hover:shadow-md transition-all"
                >
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}