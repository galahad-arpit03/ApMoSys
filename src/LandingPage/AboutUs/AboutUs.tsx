"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/src/components/Container";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function AboutUs() {
  return (
    <section id="about" className="bg-[#121212] text-[#FAFAFA] py-24 border-t border-[#1F1F1F] overflow-hidden">
      <Container>
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-12 lg:mb-0"
          >
            <motion.span variants={fadeUp} className="text-primary-red text-xs font-bold tracking-widest uppercase mb-4 block">
              About ApMoSys
            </motion.span>
            
            <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] mb-6 leading-tight">
              Engineering Excellence <br className="hidden sm:block" />
              <span className="text-[#A0A0A0]">at Enterprise Scale.</span>
            </motion.h2>
            
            <motion.p variants={fadeUp} className="text-[#A0A0A0] text-lg leading-relaxed mb-6">
              Founded on the principles of precision and automation, ApMoSys is a premier provider of 
              Quality Assurance and AIOps solutions. We specialize in transforming legacy systems into 
              resilient, high-performance architectures.
            </motion.p>
            
            <motion.p variants={fadeUp} className="text-[#A0A0A0] text-lg leading-relaxed mb-10">
              Our engineering hubs in India and the UAE serve Fortune 500 clients, delivering 
              zero-defect deployments through advanced visual regression and AI-driven monitoring.
            </motion.p>
            
            <motion.div variants={fadeUp}>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-[#FFFFFF] text-[#121212] font-bold px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors hover:bg-[#E8E8E8]"
              >
                Explore Our Services
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side: Visual / Stats Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-4 sm:gap-6"
          >
            {[
              { stat: "15+", label: "Years of Excellence" },
              { stat: "500+", label: "Enterprise Deployments" },
              { stat: "99.9%", label: "Platform Uptime" },
              { stat: "24/7", label: "Global Operations" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6, backgroundColor: "#2A2A2A" }}
                transition={{ duration: 0.3 }}
                className="bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl p-8 flex flex-col justify-center transition-colors"
              >
                <h3 className="font-heading text-4xl sm:text-5xl font-extrabold text-primary-red mb-2">
                  {item.stat}
                </h3>
                <p className="text-[#A0A0A0] text-sm font-semibold uppercase tracking-wider">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}
