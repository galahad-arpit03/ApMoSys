"use client";
import React from "react";
import { motion } from "framer-motion";
import { statsData } from "./StatsSectionData";

export default function StatsSection() {
  return (
    <section className="pt-20 pb-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 border border-gray-200 rounded-xl bg-white shadow-sm"
            >
              <div className="text-4xl md:text-5xl font-black text-gray-900 mb-3">{stat.value}</div>
              <div className="text-[11px] md:text-xs uppercase tracking-[0.1em] text-gray-500 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
