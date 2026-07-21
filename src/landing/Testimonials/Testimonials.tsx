"use client";

import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Pravin Wani",
    role: "Manager – PAS Transformation",
    company: "Tata AIA Life Insurance",
    quote: "I want to express my sincere appreciation to the entire ApMoSys SIT team for their outstanding work in successfully completing the testing of Life insurance Product on schedule. This is a significant achievement, and I commend each and every one of you for your dedication and hard work. Your commitment to quality and timely delivery is truly commendable."
  },
  {
    name: "Balasubramanian R",
    role: "Client Partner",
    company: "FinXplore OCR Automation",
    quote: "We had the pleasure of partnering with ApMoSys for their FinXplore platform which is an OCR automation, and we are very impressed with their exceptional support and expertise. Their team demonstrated a deep understanding of our requirements, providing tailored solutions that seamlessly integrated into our processes. Their commitment to excellence and responsiveness were commendable."
  }
];

// Duplicate the array to ensure smooth infinite scrolling
const marqueeItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#0A1128] border-b border-[#1A264A] overflow-hidden relative">
      
      {/* Header Area */}
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 mb-16 relative z-10">
        <div className="max-w-2xl text-left">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
            Happy <span className="text-[#B40001]">Customers.</span>
          </h2>
          <div className="w-12 h-1 bg-[#B40001] mb-6 rounded-md" />
          <p className="text-gray-400 text-lg leading-relaxed">
            Don&apos;t just take our word for it. Hear from the enterprise leaders who trust ApMoSys to engineer their digital future.
          </p>
        </div>
      </div>

      {/* Auto moving scroll marquee */}
      <div className="relative flex overflow-x-hidden group">
        {/* Shadow Fades for edges */}
        <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-[#0A1128] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-[#0A1128] to-transparent z-10 pointer-events-none" />
        
        <div className="flex space-x-8 items-stretch w-max animate-marquee hover:[animation-play-state:paused] px-4 pb-12">
          
          {/* First Set */}
          {marqueeItems.map((test, idx) => (
            <div
              key={`set1-${idx}`}
              className="w-[350px] sm:w-[450px] md:w-[500px] flex-shrink-0 relative p-8 md:p-10 bg-[#121B38] border border-[#1A264A] rounded-md hover:border-[#243461] transition-all duration-300 flex flex-col group/card"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 md:w-12 md:h-12 text-[#1A264A] group-hover/card:text-[#B40001]/20 transition-colors" />
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 relative z-10 italic flex-grow">
                &quot;{test.quote}&quot;
              </p>
              
              <div className="mt-auto flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#1A264A] flex items-center justify-center border border-[#243461] flex-shrink-0">
                  <span className="text-[#B40001] font-bold text-lg">
                    {test.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-gray-500 text-xs mt-1 leading-tight">
                    {test.role}
                    {test.company && (
                      <span className="text-[#B40001] block sm:inline sm:ml-1">
                        <span className="hidden sm:inline">• </span>{test.company}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Duplicated Set for infinite loop */}
          {marqueeItems.map((test, idx) => (
            <div
              key={`set2-${idx}`}
              className="w-[350px] sm:w-[450px] md:w-[500px] flex-shrink-0 relative p-8 md:p-10 bg-[#121B38] border border-[#1A264A] rounded-md hover:border-[#243461] transition-all duration-300 flex flex-col group/card"
            >
              <Quote className="absolute top-8 right-8 w-8 h-8 md:w-12 md:h-12 text-[#1A264A] group-hover/card:text-[#B40001]/20 transition-colors" />
              
              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 relative z-10 italic flex-grow">
                &quot;{test.quote}&quot;
              </p>
              
              <div className="mt-auto flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-[#1A264A] flex items-center justify-center border border-[#243461] flex-shrink-0">
                  <span className="text-[#B40001] font-bold text-lg">
                    {test.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm md:text-base leading-tight">
                    {test.name}
                  </h4>
                  <p className="text-gray-500 text-xs mt-1 leading-tight">
                    {test.role}
                    {test.company && (
                      <span className="text-[#B40001] block sm:inline sm:ml-1">
                        <span className="hidden sm:inline">• </span>{test.company}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
