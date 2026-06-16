"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import { coeData } from "./CoESectionData";

export default function CoESection() {
  const [activeId, setActiveId] = useState<string | null>(coeData[0].id);

  return (
    <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight leading-tight">
            Centers of <span className="text-blue-600">Excellence.</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            We operate dedicated innovation labs to establish best practices, develop specialized tools, and drive thought leadership across critical domains.
          </p>
        </div>

        {/* Horizontal Accordion */}
        <div className="flex flex-col md:flex-row items-center justify-start w-full h-[650px] md:h-[550px] lg:h-[620px] xl:h-[650px] gap-2 md:gap-4">
          {coeData.map((item, idx) => {
            const isActive = activeId === item.id;
            
            return (
              <div
                key={item.id}
                onClick={() => setActiveId(isActive ? null : item.id)}
                className={`relative overflow-hidden cursor-pointer rounded-md bg-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive 
                    ? "flex-grow h-full shadow-2xl z-10 border border-gray-200 scale-[1.02] md:scale-100" 
                    : "w-16 md:w-20 flex-shrink-0 h-[90%] shadow-sm border border-gray-100 z-0"
                }`}
              >
                  {isActive ? (
                    <div className="absolute inset-0 flex w-[100vw] md:w-[calc(100vw-400px)] lg:w-[800px] max-w-full h-full bg-white animate-in fade-in duration-500">
                      {/* Left Spine (Maintained in Active State) */}
                      <div className="hidden md:flex flex-col items-center w-20 h-full py-8 border-r border-gray-100 flex-shrink-0 bg-gray-50/50">
                        <div className="text-blue-600 font-black text-xl mb-auto tracking-wider">
                          {item.shortName}
                        </div>
                        <span 
                          className="text-gray-800 font-medium text-lg tracking-wider uppercase whitespace-nowrap mt-auto rotate-180"
                          style={{ writingMode: "vertical-rl" }}
                        >
                          {item.title}
                        </span>
                      </div>
                      
                      {/* Right Content Area */}
                      <div className="flex flex-col flex-grow p-6 md:p-8 w-full">
                        {/* Heading */}
                        <div className="flex items-center gap-4 mb-2">
                          <div className="w-8 h-6 bg-blue-600/10 rounded-sm flex items-center justify-center text-blue-600 font-black text-xs md:hidden">
                            {item.shortName}
                          </div>
                          <h3 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        
                        <div className="text-gray-500 text-sm font-medium mb-6">
                          ApMoSys Innovation Lab | Global Access
                        </div>

                        {/* Image */}
                        <div className="w-full h-[200px] md:h-[280px] rounded-md overflow-hidden mb-6 flex-shrink-0 bg-gray-100 border border-gray-200">
                          <div 
                            className="w-full h-full bg-cover bg-center transition-transform duration-700 hover:scale-105"
                            style={{ backgroundImage: `url(${item.image})` }}
                          />
                        </div>
                        
                        {/* Paragraph */}
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
                          {item.description}
                        </p>
                        
                        {/* Read More Link */}
                        <div className="mt-auto flex items-center text-gray-900 font-bold text-sm tracking-widest uppercase hover:text-blue-600 transition-colors cursor-pointer group/link w-max">
                          READ MORE 
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-50 hover:bg-gray-100 group">
                      {/* Mobile View: Horizontal Text */}
                      <span className="md:hidden text-gray-800 font-black text-sm tracking-widest uppercase group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </span>

                      {/* Desktop View: Vertical Text & Short Name */}
                      <div className="hidden md:flex flex-col items-center w-full h-full py-8">
                        {/* Top Short Name (Replacing the Flag) */}
                        <div className="text-blue-600 font-black text-xl mb-auto tracking-wider">
                          {item.shortName}
                        </div>
                        
                        {/* Bottom Vertical Full Text */}
                        <span 
                          className="text-gray-800 font-medium text-lg tracking-wider uppercase whitespace-nowrap mt-auto rotate-180 group-hover:text-blue-600 transition-colors"
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
