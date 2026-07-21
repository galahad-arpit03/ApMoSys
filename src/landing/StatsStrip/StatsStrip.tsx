"use client";

import React from "react";
import { motion } from "framer-motion";
import { statsStripData } from "./StatsStripData";
import { ArrowRight } from "lucide-react";

export default function StatsStrip() {
  return (
    <section className="relative bg-[#0A1128] py-24 border-b border-[#1A264A] overflow-hidden">
      {/* Background Effect */}
      <div className="absolute top-1/2 right-0 w-1/2 h-full bg-[#B40001]/5 rounded-l-full blur-[100px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* LHS - Header */}
          <div className="lg:col-span-4">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight leading-tight">
              Scale That <br/> <span className="text-[#B40001]">Speaks Volumes.</span>
            </h2>
            <div className="w-12 h-1 bg-[#B40001] mb-6 rounded-md" />
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              We have built a massive infrastructure of top-tier talent and cutting-edge resources to support the most demanding enterprise ecosystems globally.
            </p>
            <button className="flex items-center gap-2 text-white font-bold hover:text-[#B40001] transition-colors group">
              Join our growing team <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* RHS - Stats */}
          <div className="lg:col-span-8 flex flex-col sm:flex-row gap-8">
            {statsStripData.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                className="flex flex-col flex-1 p-10 bg-[#121B38] border border-[#1A264A] rounded-md hover:border-[#243461] transition-all duration-300 relative group overflow-hidden"
              >
                {/* Subtle hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#B40001]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <span className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 tracking-tighter drop-shadow-lg mb-4">
                  {stat.value}
                </span>
                
                <h3 className="text-[#B40001] font-bold text-sm uppercase tracking-[0.15em] mb-2">
                  {stat.label}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed max-w-[260px]">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
