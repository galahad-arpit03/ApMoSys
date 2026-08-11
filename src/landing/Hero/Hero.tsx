"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const rotatingTexts = [
  "Digital Quality",
  "Enterprise Automation",
  "Software Reliability",
  "AI-Powered Testing"
];

import { Play, ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden flex items-center">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[130%] bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('/amcharts/image2.png')",
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
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white leading-[1.15] tracking-tight mb-3"
        >
          Engineering the Future of <br />
          <span className="inline-block relative w-full h-[1.3em] overflow-hidden mt-0">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={textIndex}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#9353FF] via-[#A855F7] to-[#C084FC]"
              >
                {rotatingTexts[textIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
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
          <button className="px-6 py-3.5 bg-gradient-to-r from-[#6E44FF] to-[#8B5CF6] hover:from-[#6038F0] hover:to-[#7C3AED] text-white font-medium rounded-md transition-all duration-300 flex items-center gap-2.5 text-sm shadow-[0_0_10px_rgba(110,68,255,0.2)] hover:shadow-[0_0_15px_rgba(110,68,255,0.35)] hover:scale-[1.02]">
            Discover Solutions
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
          <button className="px-6 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-medium rounded-md transition-all duration-300 flex items-center gap-2.5 text-sm shadow-lg hover:scale-[1.02]">
            Talk to an Expert
            <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
          </button>
        </motion.div>

      </div>

      {/* RHS Globe Visualization */}
      <div className="w-full lg:w-5/12 flex items-center justify-center mt-16 lg:mt-0 relative z-10">
        <iframe 
          src="/amcharts/examples/map-sankey-waypoints/index.html" 
          className="w-full aspect-square max-w-[650px] border-none overflow-hidden"
          style={{ background: "transparent" }}
          title="ApMoSys Global Network"
        />
      </div>
      </div>
    </section>
  );
}