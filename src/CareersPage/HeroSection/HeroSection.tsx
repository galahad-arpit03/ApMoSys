"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function HeroSection() {
  return (
    <section className="bg-[#000000] text-[#FAFAFA] pt-32 pb-24 border-b border-[#1F1F1F] overflow-hidden relative">
      {/* Background gradients or elements could go here */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#B40001]/10 to-transparent opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span variants={fadeUp} className="text-primary-red text-xs font-bold tracking-widest uppercase mb-4 block">
            CAREERS AT APMOSYS
          </motion.span>
          
          <motion.h1 variants={fadeUp} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal mb-6 text-[#FFFFFF] leading-[1.1]">
            Engineer Your Future with <br className="hidden sm:block" />
            <span className="text-primary-red">Precision.</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-[#A0A0A0] text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Join a global team of QA innovators and AIOps architects redefining enterprise software resilience at an unprecedented scale.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <motion.a
              href="#openings"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(180,0,1,0.25)" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex justify-center items-center bg-primary-red hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-md text-sm tracking-wide uppercase transition-colors"
            >
              View Open Roles
            </motion.a>
            <motion.a
              href="#life"
              whileHover={{ scale: 1.04, borderColor: "#7A7A7A", color: "#FFFFFF" }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex justify-center items-center border border-[#3A3A3A] hover:bg-[#121212] text-[#C8C8C8] font-bold px-8 py-3.5 rounded-md text-sm tracking-wide uppercase transition-colors"
            >
              Life at ApMoSys
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
