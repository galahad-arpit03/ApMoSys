"use client";
import React from "react";
import { motion } from "framer-motion";
import { statsData } from "./StatsSectionData";

export default function StatsSection() {
  return (
    <section className="py-12 bg-black border-y border-[#222]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x-0 md:divide-x divide-[#333] gap-y-8 md:gap-y-0">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center px-4 flex flex-col items-center justify-center"
            >
              <div className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2 flex items-center gap-1">
                {stat.value.replace('+', '')}
                <span className="text-primary-red">+</span>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-white/60 font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
