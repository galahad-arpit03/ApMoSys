"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { coeData } from "./CoESectionData";

export default function CoESection() {
  const [activeId, setActiveId] = useState<string | null>(coeData[0].id);

  return (
    <section className="py-10 lg:py-16 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        {/* Header - LHS/RHS Split */}
        <div className="mb-8 lg:mb-4 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Left Side: Heading */}
          <div className="shrink-0">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Centers of <br className="hidden lg:block" />
              <span>Excellence</span>
            </h2>
          </div>
          
          {/* Right Side: Paragraph */}
          <div className="flex flex-col lg:items-end gap-6 max-w-xl">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A] lg:text-left">
              We operate dedicated innovation labs to establish best practices, develop specialized tools, and drive thought leadership across critical domains.
            </p>
          </div>
        </div>

        {/* Horizontal Accordion */}
        <div className="flex flex-col md:flex-row items-center justify-start w-full h-[550px] md:h-[450px] lg:h-[500px] xl:h-[520px] gap-2 md:gap-4">
          {coeData.map((item, idx) => {
            const isActive = activeId === item.id;
            
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(item.id)}
                className={`relative overflow-hidden cursor-pointer rounded-md bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive 
                    ? "flex-grow w-full h-full shadow-2xl z-10 border border-gray-200 scale-100" 
                    : "h-14 md:h-[90%] w-full md:w-20 flex-shrink-0 shadow-sm border border-gray-100 z-0"
                }`}
              >
                  {isActive ? (
                    <div className="absolute inset-0 flex w-full max-w-full h-full bg-white animate-in fade-in duration-500 overflow-y-auto md:overflow-hidden hide-scroll">
                      {/* Left Spine (Maintained in Active State) */}
                      <div className="hidden md:flex flex-col items-center w-20 h-full py-8 border-r border-gray-100 flex-shrink-0 bg-gray-50/50">
                        <div className="text-[#2563EB] font-medium text-lg mb-auto tracking-wider">
                          {item.shortName}
                        </div>
                        <span 
                          className="text-black font-medium text-base tracking-widest uppercase whitespace-nowrap mt-auto rotate-180"
                          style={{ writingMode: "vertical-rl" }}
                        >
                          {item.title}
                        </span>
                      </div>
                      
                      {/* Right Content Area */}
                      <div className="flex flex-col flex-grow p-6 md:p-8 w-full">
                        {/* Heading */}
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-8 h-6 bg-[#2563EB]/10 rounded-sm flex items-center justify-center text-[#2563EB] font-bold text-xs md:hidden">
                            {item.shortName}
                          </div>
                          <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl text-black font-normal leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        
                        <div className="text-gray-500 text-sm font-semibold tracking-wide mb-6">
                          ApMoSys Innovation Lab | Global Access
                        </div>

                        {/* Image */}
                        <div className="w-full h-[150px] md:h-[200px] lg:h-[220px] rounded-md overflow-hidden mb-6 flex-shrink-0 bg-gray-100 border border-gray-200">
                          <div 
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        </div>
                        
                        {/* Paragraph */}
                        <p className="text-[#5A5A5A] text-sm md:text-base leading-relaxed mb-6">
                          {item.description}
                        </p>
                        
                        {/* Read More Link */}
                        <div className="mt-auto flex items-center text-black font-bold text-[13px] tracking-widest uppercase hover:text-[#2563EB] transition-colors cursor-pointer group/link w-max">
                          READ MORE 
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center md:justify-center justify-start px-4 md:px-0 bg-gray-50 hover:bg-gray-100 group">
                      {/* Mobile View: Horizontal Text */}
                      <span className="md:hidden text-black font-semibold text-sm tracking-wide uppercase">
                        {item.title}
                      </span>

                      {/* Desktop View: Vertical Text & Short Name */}
                      <div className="hidden md:flex flex-col items-center w-full h-full py-8">
                        {/* Top Short Name */}
                        <div className="text-[#2563EB] font-medium text-lg mb-auto tracking-wider">
                          {item.shortName}
                        </div>
                        
                        {/* Bottom Vertical Full Text */}
                        <span 
                          className="text-black font-medium text-base tracking-widest uppercase whitespace-nowrap mt-auto rotate-180"
                          style={{ writingMode: "vertical-rl" }}
                        >
                          {item.title}
                        </span>
                      </div>
                    </div>
                  )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
