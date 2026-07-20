"use client";
import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const awardsData = [
  { id: 1, year: "2021", title: "ISO", sub: "Certification" },
  { id: 2, year: "2022", title: "CMMI", sub: "Level 5 Appraisal" },
  { id: 3, year: "2023", title: "Dynatrace", sub: "Partner Excellence" },
  { id: 4, year: "2024", title: "Automation Anywhere", sub: "Strategic Alliance" },
  { id: 5, year: "2025", title: "Springer Publications", sub: "Global Recognition" },
];

const RosetteSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#CBA135" />
        <stop offset="50%" stopColor="#F9DF9F" />
        <stop offset="100%" stopColor="#B38728" />
      </linearGradient>
    </defs>
    <path 
      d="M60 5 L73 15 L89 12 L96 27 L111 31 L110 47 L119 59 L110 71 L111 87 L96 91 L89 106 L73 103 L60 113 L47 103 L31 106 L24 91 L9 87 L10 71 L1 59 L10 47 L9 31 L24 27 L31 12 L47 15 Z" 
      fill="#0F172A" 
      stroke="url(#goldGrad)" 
      strokeWidth="4"
    />
    <circle cx="60" cy="60" r="42" fill="none" stroke="url(#goldGrad)" strokeWidth="1" strokeDasharray="4 4" opacity="0.6"/>
    <path d="M40 70 Q60 90 80 70" fill="none" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.5" />
    <path d="M45 40 Q60 20 75 40" fill="none" stroke="url(#goldGrad)" strokeWidth="1" opacity="0.5" />
  </svg>
);

export default function AwardsCertifications() {
  return (
    <section className="py-10 lg:py-16 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        
        {/* Header - LHS/RHS Split */}
        <div className="mb-8 lg:mb-10 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
          {/* Left Side: Heading */}
          <div className="shrink-0">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-black leading-[1.1]">
              Awards & <br className="hidden lg:block" /> Certifications
            </h2>
          </div>

          {/* Right Side: Paragraph */}
          <div className="flex flex-col lg:items-end gap-6 max-w-xl">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A] lg:text-left">
              A testament to our continuous pursuit of engineering excellence, security compliance, and global enterprise partnerships.
            </p>
          </div>
        </div>

        <div className="relative mt-16 md:mt-24">
          
          {/* The Horizontal Shelf Line (Desktop) */}
          <div className="absolute top-[160px] left-0 right-0 hidden md:block z-0">
            <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            <div className="h-6 bg-gradient-to-b from-gray-200/50 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 relative z-10 gap-y-12 md:gap-y-0">
            {awardsData.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="flex flex-col items-center"
              >
                {/* Badge Container */}
                <div className="h-auto md:h-[160px] flex items-end justify-center pb-0 md:pb-6">
                  <div className="relative w-40 h-40 flex items-center justify-center transform hover:-translate-y-2 transition-transform duration-300 z-10 drop-shadow-xl">
                    <RosetteSVG className="absolute inset-0 w-full h-full" />
                    <div className="relative z-10 flex flex-col items-center justify-center p-2 text-center w-full h-full mt-2">
                      <div className="flex gap-1 mb-2 text-[#D4AF37]">
                        <Star size={12} fill="currentColor" />
                        <Star size={16} fill="currentColor" className="-mt-1.5" />
                        <Star size={12} fill="currentColor" />
                      </div>
                      <span className="text-white text-xs font-bold leading-tight uppercase tracking-widest px-4 max-w-[90%]">
                        {item.title}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section (Year & Subtext) */}
                <div className={`pt-6 w-full flex flex-col items-center text-center ${idx !== 0 ? "md:border-l border-gray-300" : ""}`}>
                  <h3 className="text-4xl font-semibold text-[#CBA135] mb-2 tracking-tight">
                    {item.year}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest max-w-[80%] mx-auto leading-relaxed">
                    {item.sub}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
