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
          backgroundImage: "url('/landing/bg2.png')",
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
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white leading-[1.15] tracking-tight mb-6"
        >
          Engineering the Future of <br />
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9353FF] via-[#A855F7] to-[#C084FC]">Digital Quality</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-slate-300/90 max-w-xl mb-10 leading-relaxed font-normal"
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
          <button className="px-6 py-3.5 bg-gradient-to-r from-[#6E44FF] to-[#8B5CF6] hover:from-[#6038F0] hover:to-[#7C3AED] text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2.5 text-sm shadow-[0_0_25px_rgba(110,68,255,0.45)] hover:shadow-[0_0_35px_rgba(110,68,255,0.7)] hover:scale-[1.02]">
            Explore Services
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
          <button className="px-6 py-3.5 bg-[#0E0B1F]/60 border border-[#38265C] hover:border-[#6E44FF]/70 text-slate-200 hover:text-white font-medium rounded-xl backdrop-blur-md transition-all duration-300 flex items-center gap-2.5 text-sm hover:bg-[#181236]/80 hover:scale-[1.02]">
            Contact Us
            <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
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