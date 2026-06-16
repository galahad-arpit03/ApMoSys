"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { landingMilestonesData } from "./LandingMilestonesData";

export default function LandingMilestones() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 bg-[#0B0B0B] border-b border-[#1F1F1F]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
            A Legacy of <span className="text-[#B40001]">Excellence.</span>
          </h2>
          <p className="text-lg text-gray-400">
            From our founding in 2012 to becoming a global enterprise partner, our journey is defined by continuous innovation.
          </p>
        </div>

        <div className="relative" ref={containerRef}>
          {/* Central Line Background */}
          <div className="absolute left-[28px] sm:left-1/2 top-0 bottom-0 w-1 bg-[#1F1F1F] transform sm:-translate-x-1/2 rounded-full" />
          
          {/* Animated Draw Line */}
          <motion.div 
            className="absolute left-[28px] sm:left-1/2 top-0 w-1 bg-[#B40001] transform sm:-translate-x-1/2 rounded-full"
            style={{ height: lineHeight }}
          />

          <div className="space-y-12">
            {landingMilestonesData.map((milestone, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-start sm:items-center w-full">
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[28px] sm:left-1/2 w-4 h-4 bg-[#B40001] rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(180,0,1,0.5)] border-2 border-[#121212]" />

                  {/* Desktop Layout */}
                  <div className={`hidden sm:flex w-full ${isEven ? "justify-start" : "justify-end"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className={`w-5/12 bg-[#121212] border border-[#1F1F1F] p-6 rounded-md hover:border-[#333333] transition-colors ${
                        isEven ? "mr-auto text-right" : "ml-auto text-left"
                      }`}
                    >
                      <span className="text-[#B40001] font-black text-2xl tracking-tighter block mb-2">
                        {milestone.year}
                      </span>
                      <h4 className="text-white font-bold text-lg mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="flex sm:hidden w-full pl-16">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className="w-full bg-[#121212] border border-[#1F1F1F] p-6 rounded-md"
                    >
                      <span className="text-[#B40001] font-black text-2xl tracking-tighter block mb-2">
                        {milestone.year}
                      </span>
                      <h4 className="text-white font-bold text-lg mb-2">
                        {milestone.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
