"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function FeaturedPost() {
  return (
    <section className="bg-[#000000] text-[#FAFAFA] pt-32 pb-24 border-b border-[#1F1F1F] overflow-hidden relative">
      {/* Background gradients for premium feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#B40001]/10 to-transparent opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          className="max-w-4xl flex flex-col items-start"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
            <span className="bg-primary-red text-[#FFFFFF] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">
              FEATURED REPORT
            </span>
            <span className="text-[#A0A0A0] text-sm font-medium tracking-wide">
              March 24, 2024
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal mb-8 text-[#FFFFFF] leading-[1.15]">
            Quantifying the ROI of AI-Driven Performance Engineering
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-[#A0A0A0] text-lg sm:text-xl leading-relaxed mb-10">
            A deep dive into how modern enterprises are leveraging autonomous observability and automated root-cause analysis to reduce MTTR by 60%.
          </motion.p>
          
          <motion.div variants={fadeUp}>
            <motion.a
              href="#read"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(180,0,1,0.25)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex justify-center items-center gap-2 bg-primary-red hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-md text-sm tracking-wide uppercase transition-all"
            >
              Read More
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
