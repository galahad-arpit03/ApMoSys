"use client";
import { landingmilestonesData } from "./LandingMilestonesData";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";


export default function LandingMilestones() {
  const milestones = [
    {
      yearLabel: "24",
      logId: "ECOSYSTEM_SCALE_V3",
      title: "Strengthening Ecosystem",
      desc: "Endorsed Service Partner by Dynatrace. Rising Star by Automation Anywhere. Achieved CMMI Maturity Level 3 Certification.",
      bg: "bg-white",
    },
    {
      yearLabel: "23",
      logId: "PARTNERSHIPS_V2",
      title: "Strategic Partnerships",
      desc: "Rising Star Awardee by Dynatrace. Axis Bank AVC Performer. Published multiple Springer and IEEE whitepapers.",
      bg: "bg-[#FAFAFA]",
    },
    {
      yearLabel: "22",
      logId: "AWARDS_RECOGNITION_V1",
      title: "Awards & Recognition",
      desc: "Crossed 1000 employees mark and 100+ clients. Awarded Best Organization for Women Empowerment at 3rd GIWL Awards 2022.",
      bg: "bg-white",
    },
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column */}
          <div className="lg:col-span-5 relative flex items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1] mb-4 tracking-tight">
                A Legacy of <br />
                <span className="text-[#B40001]">Technical</span><br />
                Excellence.
              </h2>
              <p className="text-gray-600 text-base font-medium max-w-sm mb-8">
                Systematic growth and certification milestones since our inception in 2012.
              </p>
              
              <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-[#B40001] hover:bg-red-800 text-white px-6 py-3 rounded-md font-bold text-sm transition-colors shadow-sm w-fit">
                View full journey <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (Timeline) */}
          <div className="lg:col-span-7 relative">
            {/* The vertical timeline line */}
            <div className="absolute left-[32px] sm:left-[48px] top-0 bottom-0 w-[1px] bg-red-200" />

            <div className="flex flex-col border border-gray-100/50 rounded-lg overflow-hidden">
              {milestones.map((ms, idx) => {
                // Diagonal staggering offset: 0px, 32px, 64px...
                const offset = idx * 32;

                return (
                  <div key={idx} className={`relative flex w-full ${ms.bg} py-5 pr-6 sm:pr-12`}>
                    
                    {/* The red node with year */}
                    <div 
                      className="absolute top-5 w-8 h-8 rounded-sm bg-[#B40001] flex items-center justify-center text-white font-bold text-[13px] shadow-sm z-10 transition-all duration-300"
                      // Default for mobile, overwrite for sm: using a tailwind arbitrary value wasn't as clean as just a custom style block
                      style={{ 
                        left: `calc(max(32px, 48px) + ${offset}px)`, // Approximation for simplicity
                        transform: "translateX(-50%)" 
                      }}
                    >
                      {ms.yearLabel}
                    </div>

                    {/* Content Box */}
                    <div 
                      className="w-full flex items-stretch transition-all duration-300"
                      style={{ 
                        marginLeft: `calc(80px + ${offset}px)` // Shifts the red bar and text
                      }}
                    >
                      {/* The thick red left border accent */}
                      <div className="w-[3px] bg-[#B40001] shrink-0 mr-6 sm:mr-8" />
                      
                      <div className="py-1">
                        <div className="text-[#B40001] text-[11px] font-bold tracking-[0.25em] uppercase mb-3">
                          {ms.logId}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{ms.title}</h3>
                        <p className="text-gray-600 text-base leading-relaxed max-w-xl">
                          {ms.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
