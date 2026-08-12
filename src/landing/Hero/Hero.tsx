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
          backgroundImage: "url('/assets/images/amcharts/image1.png')",
          y: backgroundY
        }}
      />
      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between pt-28 pb-12 z-10">
        {/* LHS Content */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center items-start z-10 lg:pr-10 lg:pt-8">

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl font-heading font-normal text-white leading-[1.15] tracking-tight mb-3 flex flex-col"
          >
            <span className="whitespace-nowrap">Defining the Future of</span>
            <span className="inline-block relative w-full h-[1.3em] overflow-hidden mt-1">
              <AnimatePresence mode="popLayout">
                <motion.span
                  key={textIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#1f0bf8] via-[#1d60ff] to-[#a9afff]"
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
            <button aria-label="Discover ApMoSys Enterprise Solutions" className="px-6 py-3.5 bg-[#1E18F8]/30  border border-[#1E18F8]/60  text-white font-medium rounded-md transition-all duration-300 flex items-center gap-2.5 text-sm shadow-[0_0_15px_rgba(30,24,248,0.3)] hover:scale-[1.02]">
              Discover Solutions
              <ArrowRight className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
            <button aria-label="Talk to an ApMoSys Expert" className="px-6 py-3.5 bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 text-white font-medium rounded-md transition-all duration-300 flex items-center gap-2.5 text-sm shadow-lg hover:scale-[1.02]">
              Talk to an Expert
              <Play className="w-3.5 h-3.5 fill-white text-white translate-x-0.5" />
            </button>
          </motion.div>

        </div>

        {/* RHS Globe Visualization */}
        <div className="w-full lg:w-5/12 flex items-center justify-center mt-16 lg:mt-0 relative z-10">
          <iframe
            title="Interactive Global Operations Visualization"
            src="/amcharts/examples/map-sankey-waypoints/index.html"
            className="w-full aspect-square max-w-[650px] border-none overflow-hidden"
            style={{ background: "transparent" }}
          />
        </div>
      </div>
    </section>
  );
}