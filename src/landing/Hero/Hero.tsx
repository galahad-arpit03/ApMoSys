"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RotatingCards } from "./RotatingCards";
import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden flex items-center">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[130%] bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/landing/bg.png')",
          y: backgroundY
        }}
      />
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between pt-28 pb-12 z-10">
      {/* LHS Content */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center items-start z-10 lg:pr-10">
        
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-gray-900 leading-tight tracking-tight mb-6"
        >
          Engineering the Future of <br />
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Digital Quality</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-600 max-w-xl mb-10 leading-relaxed"
        >
          Accelerate releases, eliminate defects, and scale with confidence using ApMoSys — the AI-powered automation backbone for enterprise software teams.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <button className="px-6 py-3 bg-[#0066FF] hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2 text-sm">
            Explore Services
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 bg-transparent border border-gray-300 hover:border-gray-400 text-gray-900 font-medium rounded-lg transition-colors flex items-center gap-2 text-sm">
                  Contact Us
                  <Play className="w-4 h-4 fill-gray-900" />
          </button>
        </motion.div>

      </div>

      {/* RHS Rotating Cards */}
      <div className="w-full lg:w-5/12 flex items-center justify-center mt-16 lg:mt-0 relative z-10">
        <RotatingCards />
      </div>
      </div>
    </section>
  );
}