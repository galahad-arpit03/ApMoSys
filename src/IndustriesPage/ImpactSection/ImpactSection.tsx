"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ImpactSection() {
  const stats = [
    { value: "40%", label: "REDUCED TIME TO MARKET" },
    { value: "99.9%", label: "SYSTEM RELIABILITY" },
    { value: "3.5x", label: "FASTER DEPLOYMENT" },
    { value: "60%", label: "COST REDUCTION" }
  ];

  return (
    <section className="py-24 bg-[#121212] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl font-extrabold text-[#FFFFFF]">Quantifiable Technical Impact</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <div className="font-heading text-4xl sm:text-5xl font-extrabold text-[#FAFAFA] mb-3">{stat.value}</div>
              <div className="text-[10px] sm:text-xs font-bold text-primary-red tracking-[0.2em] uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
