"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-full h-[calc(100vh-64px)] flex flex-col justify-center border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 bg-primary-dark/20 border border-primary-red/30 px-3 py-1.5 rounded-full text-xs font-semibold text-[#FFFFFF] mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-red animate-pulse" />
              Advanced QA & IT Automation
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal text-[#FFFFFF] leading-none mb-6">
              Performance Solutions For <span className="text-primary-red">Enterprise Scale</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed mb-8 max-w-xl">
              ApMoSys delivers state-of-the-art testing, process automation, and intelligent software engineering that guarantees robust security and optimal performance.
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="w-full sm:w-auto bg-primary-red hover:bg-primary-hover text-[#FFFFFF] font-semibold text-center px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors"
              >
                Schedule Consultation
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#services"
                className="w-full sm:w-auto bg-[#1F1F1F] hover:bg-[#3A3A3A] border border-[#3A3A3A] text-[#FAFAFA] font-semibold text-center px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors"
              >
                Explore Capabilities
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Interactive Dashboard Graphic */}
          <div className="mt-16 lg:mt-0 lg:col-span-6">
            <div className="bg-[#1F1F1F] border border-[#3A3A3A] rounded-lg p-6 shadow-2xl relative">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-[#3A3A3A] pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-primary-red" />
                  <span className="w-3 h-3 rounded-full bg-[#3A3A3A]" />
                  <span className="w-3 h-3 rounded-full bg-[#5A5A5A]" />
                </div>
                <span className="text-xs font-mono text-[#7A7A7A]">apmosys-dashboard-v3.ts</span>
              </div>
              
              {/* Graphic Elements */}
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-[#121212] border border-[#3A3A3A] p-4 rounded-md">
                    <span className="text-[10px] text-[#7A7A7A] uppercase font-semibold tracking-wider block">Automation</span>
                    <span className="text-xl font-bold font-heading text-primary-red mt-1 block">94.8%</span>
                  </div>
                  <div className="bg-[#121212] border border-[#3A3A3A] p-4 rounded-md">
                    <span className="text-[10px] text-[#7A7A7A] uppercase font-semibold tracking-wider block">Scan Rate</span>
                    <span className="text-xl font-bold font-heading text-[#FAFAFA] mt-1 block">2.4k/s</span>
                  </div>
                  <div className="bg-[#121212] border border-[#3A3A3A] p-4 rounded-md">
                    <span className="text-[10px] text-[#7A7A7A] uppercase font-semibold tracking-wider block">Incidents</span>
                    <span className="text-xl font-bold font-heading text-primary-red mt-1 block">0</span>
                  </div>
                </div>

                <div className="bg-[#121212] border border-[#3A3A3A] p-4 rounded-md font-mono text-xs text-[#A0A0A0]">
                  <div className="flex items-center justify-between text-primary-red mb-2 font-semibold">
                    <span>✓ cliQTest Suite Loaded</span>
                    <span>Active</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-[#7A7A7A]">
                    [SYSTEM] Initiating parallel test runner on Node-AP-01...<br/>
                    [PROCESS] Running visual verification using Netraa Engine...<br/>
                    [SUCCESS] Full check completed. 104 assertions validated.
                  </p>
                </div>

                <div className="flex items-center justify-between text-xs text-[#7A7A7A] pt-2">
                  <span>Node Status: <span className="text-primary-red font-bold">Operational</span></span>
                  <span>Lat: 12ms</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
