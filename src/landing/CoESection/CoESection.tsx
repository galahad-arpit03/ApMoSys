"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { coeData } from "@/src/data/landing/CoESection/CoESectionData";

export default function CoESection() {
  const [activeId, setActiveId] = useState<string | null>(coeData[0].id);

  return (
    <section className="py-10 lg:py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        {/* Header Section */}
        <div className="mb-10 lg:mb-14 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1] tracking-tight text-left">
              Centers of Excellence
            </h2>
          </div>
          <div className="w-full md:w-1/2 md:border-l border-gray-300 md:pl-8">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A] text-left font-medium">
              We operate dedicated innovation labs to establish best practices, develop specialized tools, and drive thought leadership across critical domains.
            </p>
          </div>
        </div>

        {/* Horizontal Accordion with Framer Motion Layout */}
        <div className="flex flex-col md:flex-row items-center justify-start w-full h-[650px] md:h-[450px] lg:h-[500px] xl:h-[520px] gap-2 md:gap-4">
          {coeData.map((item) => {
            const isActive = activeId === item.id;
            
            return (
              <motion.div
                layout
                key={item.id}
                onClick={() => setActiveId(item.id)}
                transition={{ type: "spring", stiffness: 200, damping: 25, mass: 0.8 }}
                className={`relative overflow-hidden cursor-pointer rounded-md bg-white ${
                  isActive 
                    ? "flex-grow w-full h-full shadow-xl z-10 border border-gray-200" 
                    : "h-14 md:h-[90%] w-full md:w-20 flex-shrink-0 shadow-sm border border-gray-100 z-0"
                }`}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {isActive ? (
                    <motion.div
                      key="active"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex w-full h-full bg-white overflow-hidden"
                    >
                      {/* Left Spine (Maintained in Active State) */}
                      <div className="hidden md:flex flex-col items-center w-20 h-full py-8 border-r border-gray-100 flex-shrink-0 bg-gray-50/50">
                        <div className="mb-auto" />
                        <span 
                          className="text-black font-medium text-base tracking-widest uppercase whitespace-nowrap mt-auto rotate-180"
                          style={{ writingMode: "vertical-rl" }}
                        >
                          {item.title}
                        </span>
                      </div>
                      
                      {/* Right Content Area */}
                      <div className="flex flex-col flex-grow p-5 md:p-8 w-full overflow-y-auto md:overflow-hidden hide-scroll">
                        <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-black font-normal leading-tight mb-2">
                          {item.title}
                        </h3>
                        
                        <div className="text-gray-500 text-sm font-semibold tracking-wide mb-6">
                          ApMoSys Innovation Lab | Global Access
                        </div>

                        {/* Image */}
                        <div className="w-full h-[150px] md:h-[200px] lg:h-[220px] rounded-md overflow-hidden mb-6 flex-shrink-0 bg-gray-100 border border-gray-200 relative">
                          <motion.div 
                            layoutId={`img-${item.id}`}
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        </div>
                        
                        {/* Paragraph */}
                        <p className="text-[#5A5A5A] text-sm md:text-base leading-relaxed mb-6">
                          {item.description}
                        </p>
                        
                        {/* Read More Link */}
                        <div className="mt-auto flex items-center text-black font-bold text-[13px] tracking-widest uppercase hover:text-[#2563EB] transition-colors group/link w-max">
                          READ MORE 
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="inactive"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 flex items-center justify-start md:justify-center px-4 md:px-0 bg-gray-50 hover:bg-gray-100 group"
                    >
                      {/* Mobile View: Horizontal Text */}
                      <span className="md:hidden text-black font-semibold text-sm tracking-wide uppercase">
                        {item.title}
                      </span>

                      {/* Desktop View: Vertical Text */}
                      <div className="hidden md:flex flex-col items-center w-full h-full py-8">
                        <div className="mb-auto" />
                        <span 
                          className="text-black font-medium text-base tracking-widest uppercase whitespace-nowrap mt-auto rotate-180"
                          style={{ writingMode: "vertical-rl" }}
                        >
                          {item.title}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
