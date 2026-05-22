"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function LifeSection() {
  return (
    <section id="life" className="bg-[#121212] text-[#FAFAFA] py-24 border-t border-[#1F1F1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] mb-4">
            Life at ApMoSys
          </h2>
          <p className="text-[#A0A0A0] text-sm sm:text-base max-w-2xl">
            Modern architecture, international collaboration, and a relentless pursuit of quality.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-4 h-auto md:h-[600px]"
        >
          
          {/* Main Large Image (People/Lab) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-7 md:row-span-2 relative rounded-xl overflow-hidden group bg-[#1F1F1F] border border-[#3A3A3A] min-h-[300px]"
          >
            {/* Image Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#121212]/50 to-[#121212]/10 z-10" />
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="text-[#FAFAFA] font-bold tracking-widest uppercase">Office / Team Image Placeholder</span>
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <span className="text-primary-red text-xs font-bold uppercase tracking-widest mb-2 block">
                Workspace
              </span>
              <h3 className="text-[#FFFFFF] text-2xl font-bold">Innovation Labs</h3>
            </div>
          </motion.div>

          {/* Top Right (Screen/Dashboard) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-5 md:row-span-1 relative rounded-xl overflow-hidden group bg-[#1F1F1F] border border-[#3A3A3A] min-h-[250px]"
          >
             <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] to-transparent z-10 opacity-80" />
             <div className="absolute inset-0 flex items-center justify-center opacity-30">
                <span className="text-[#FAFAFA] font-bold text-sm tracking-widest uppercase">Tech / Screen Placeholder</span>
             </div>
             
             <div className="absolute bottom-0 left-0 p-6 z-20">
              <h3 className="text-[#FFFFFF] text-lg font-bold">State-of-the-art Infrastructure</h3>
            </div>
          </motion.div>

          {/* Bottom Right Split 1 (Global Offices) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 md:row-span-1 relative rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#3A3A3A] flex flex-col items-center justify-center p-6 min-h-[250px] transition-colors hover:bg-[#121212]"
          >
             <svg className="w-10 h-10 text-[#7A7A7A] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
             </svg>
             <h3 className="text-[#FFFFFF] text-sm font-bold tracking-widest uppercase text-center">3 Global Offices</h3>
          </motion.div>

          {/* Bottom Right Split 2 (Awards) */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-3 md:row-span-1 relative rounded-xl overflow-hidden bg-primary-red flex flex-col items-center justify-center p-6 min-h-[250px]"
          >
             <h3 className="font-heading text-6xl font-extrabold text-[#FFFFFF] mb-2">14+</h3>
             <span className="text-[#FAFAFA]/80 text-sm font-bold tracking-widest uppercase">Industry Awards</span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
