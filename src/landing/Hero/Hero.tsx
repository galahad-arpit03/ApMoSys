"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const rotatingTexts = [
  "AI-Powered Velocity",
  "Intelligent Solutions",
  "Automated Workflows",
  "Data-Driven Growth"
];

export default function Hero() {
  const ref = useRef(null);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden flex items-center bg-[#FAFAFA]">
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-100 pointer-events-none">
        <Image 
          src="/assets/images/amcharts/f1.png" 
          alt="Abstract Background" 
          fill 
          priority
          className="object-cover object-[center_10%]"
        />
      </div>
      
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between pt-28 pb-12 z-10">
        
        {/* LHS Content */}
        <div className="w-full max-w-[850px] flex flex-col justify-center items-start z-10 lg:pt-24">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[36px] sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-slate-900 leading-[1.1] tracking-tight mb-4 flex flex-col"
            style={{ fontFamily: '"Geist", sans-serif' }}
          >
            <span className="whitespace-nowrap">Accelerating Enterprises with</span>
            <span className="inline-flex items-center mt-1 sm:mt-2">
              <span className="relative overflow-hidden inline-flex items-center justify-start w-full min-w-[280px] sm:min-w-[400px] lg:min-w-[500px] h-[1.2em]">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={textIndex}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 font-semibold text-[#2563EB]"
                  >
                    {rotatingTexts[textIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-slate-500 max-w-[500px] mb-12 leading-relaxed font-medium"
          >
            We engineer intelligent solutions that drive speed, efficiency, and transformation across your business.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 mb-16"
          >
            <button aria-label="Explore AI Solutions" className="group px-6 py-3 bg-[#0B1121] hover:bg-[#1A233A] text-white font-medium rounded-md transition-all duration-300 flex items-center gap-2 text-[14px] shadow-md hover:shadow-lg hover:-translate-y-0.5">
              Explore AI Solutions
              <ArrowRight className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" aria-hidden="true" />
            </button>
            <button aria-label="Learn More" className="group px-6 py-3 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-slate-800 font-medium rounded-md transition-all duration-300 flex items-center gap-2 text-[14px] shadow-sm hover:shadow-md hover:-translate-y-0.5">
              Learn More
              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-700 transition-colors" aria-hidden="true" />
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
}