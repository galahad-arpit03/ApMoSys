"use client";
import React from "react";
import { motion } from "framer-motion";
import { milestonesData } from "./MilestonesTimelineData";

export default function MilestonesTimeline() {
  return (
    <section className="py-24 bg-white overflow-hidden relative border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-semibold uppercase tracking-widest text-primary-red mb-4">
            <span className="w-2 h-2 rounded-full bg-primary-red" />
            Our Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
            Milestones <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B40001] to-red-600">Achieved</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            A legacy of technical excellence, continuous growth, and industry-defining innovation since 2012.
          </p>
        </div>

        <div className="relative">
          {/* Vertical tracking line */}
          <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-[2px] bg-red-200/60 sm:-translate-x-1/2" />

          <div className="space-y-12 sm:space-y-16">
            {milestonesData.map((ms, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="relative flex flex-col sm:flex-row items-center w-full group"
                >
                  <div className="absolute left-[10px] sm:left-1/2 w-[22px] h-[22px] rounded-md bg-[#B40001] shadow-[0_2px_8px_rgba(180,0,1,0.4)] flex items-center justify-center sm:-translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-110" />

                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-0 sm:pr-12 flex ${isEven ? 'justify-end' : 'justify-start'} items-center`}>
                    {isEven ? (
                      <div className="hidden sm:block text-6xl md:text-7xl lg:text-8xl font-black text-gray-200 tracking-tighter select-none">
                        {ms.year}
                      </div>
                    ) : (
                      <div className="bg-[#B40001] p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow w-full relative">
                        <div className="sm:hidden text-4xl font-black text-white/40 mb-4 select-none">{ms.year}</div>
                        <h3 className="text-white font-bold text-lg mb-3">{ms.title}</h3>
                        <ul className="space-y-2 text-white/90 text-sm leading-relaxed">
                          {ms.items.map((item, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="text-white/60 mt-1 shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className={`w-full sm:w-1/2 pl-16 sm:pl-12 flex ${isEven ? 'justify-start' : 'justify-start'} items-center mt-6 sm:mt-0`}>
                    {isEven ? (
                      <div className="bg-[#B40001] p-6 md:p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow w-full relative">
                        <div className="sm:hidden text-4xl font-black text-white/40 mb-4 select-none">{ms.year}</div>
                        <h3 className="text-white font-bold text-lg mb-3">{ms.title}</h3>
                        <ul className="space-y-2 text-white/90 text-sm leading-relaxed">
                          {ms.items.map((item, i) => (
                            <li key={i} className="flex gap-2 items-start">
                              <span className="text-white/60 mt-1 shrink-0">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="hidden sm:block text-6xl md:text-7xl lg:text-8xl font-black text-gray-200 tracking-tighter select-none">
                        {ms.year}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
