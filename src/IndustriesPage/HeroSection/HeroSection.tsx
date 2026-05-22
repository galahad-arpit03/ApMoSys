"use client";
import React from "react";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function HeroSection() {
  return (
    <section className="bg-[#000000] text-[#FAFAFA] relative overflow-hidden pt-32 pb-24 border-b border-[#1F1F1F]">
      <div className="absolute inset-0  z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span variants={fadeUp} className="text-primary-red text-xs font-bold tracking-widest uppercase mb-4 block">
            Industries we serve
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal text-[#FFFFFF] leading-none mb-6"
          >
            Engineering Precision <span className="text-primary-red">Across Every Sector.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed mb-10 max-w-2xl"
          >
            Bridging the gap between legacy infrastructure and future-proof digital business. ApMoSys provides robust, tailored digital transformations for the world&apos;s most demanding sectors.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-primary-red hover:bg-primary-hover text-[#FFFFFF] font-semibold text-center px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors"
            >
              View Solutions
            </a>
            <a
              href="#contact"
              className="bg-transparent border border-[#3A3A3A] hover:border-primary-red text-[#FFFFFF] font-semibold text-center px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors"
            >
              Contact Expert
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
