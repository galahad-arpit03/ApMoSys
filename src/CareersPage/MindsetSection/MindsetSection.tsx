"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function MindsetSection() {
  return (
    <section className="bg-[#FFFFFF] text-[#121212] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.15 }}
            className="mb-16 lg:mb-0"
          >
            <motion.h2 variants={fadeRight} className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-6 leading-tight">
              The ApMoSys Mindset.
            </motion.h2>
            <motion.p variants={fadeRight} className="text-[#5A5A5A] text-lg leading-relaxed mb-10">
              We look for individuals who are not only technically proficient but also possess the drive to innovate. 
              Our culture is built on continuous learning and agile methodologies.
            </motion.p>
            
            <div className="space-y-8">
              <motion.div variants={fadeRight} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#FFE5E5] flex items-center justify-center text-[#B40001]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#121212] mb-2">Scale and Agility</h3>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed">
                    We adapt quickly to the ever-evolving tech landscape, ensuring our solutions always remain competitive.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeRight} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-[#FFE5E5] flex items-center justify-center text-[#B40001]">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#121212] mb-2">Intelligent Automation</h3>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed">
                    AI is deeply embedded in everything we build. We strive to automate the mundane and focus on creativity.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Visuals */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeLeft}
            className="relative lg:h-[500px]"
          >
            {/* Using a placeholder styled div grid to represent the overlapped screenshots in the design */}
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-4">
              <div className="col-span-8 row-span-8 col-start-1 row-start-3 rounded-xl overflow-hidden shadow-2xl border border-[#E8E8E8] relative z-10 bg-[#FAFAFA] flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-[#E0E0E0] to-[#F3F3F3] flex items-center justify-center">
                    <span className="text-[#7A7A7A] font-medium text-sm">Dashboard Image Placeholder</span>
                 </div>
              </div>
              <div className="col-span-8 row-span-8 col-start-5 row-start-1 rounded-xl overflow-hidden shadow-xl border border-[#E8E8E8] relative z-0 bg-[#FFFFFF] flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-tl from-[#E0E0E0] to-[#F3F3F3] flex items-center justify-center">
                    <span className="text-[#7A7A7A] font-medium text-sm text-center">Video Call / Meet <br/> Image Placeholder</span>
                 </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
