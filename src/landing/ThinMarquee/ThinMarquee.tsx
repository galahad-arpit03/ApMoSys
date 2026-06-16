"use client";

import React from "react";

const clientLogos = [
  { name: "Mahindra Finance" },
  { name: "Edelweiss" },
  { name: "CEAT" },
  { name: "Tata AIA" },
  { name: "HDFC Bank" },
  { name: "Axis Bank" },
  { name: "SBI Life" },
  { name: "Mahindra Finance" },
  { name: "Edelweiss" },
  { name: "CEAT" },
  { name: "Tata AIA" },
  { name: "HDFC Bank" },
  { name: "Axis Bank" },
  { name: "SBI Life" },
];

export default function ThinMarquee() {
  return (
    <div className="relative flex overflow-x-hidden bg-blue-600 py-3 border-y border-blue-700">
      <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-blue-600 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-blue-600 to-transparent z-10 pointer-events-none" />
      
      <div className="flex space-x-12 items-center w-max animate-marquee hover:[animation-play-state:paused] px-4">
        {clientLogos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-6 h-6 rounded-full bg-[#0A1128]/20 flex items-center justify-center text-xs font-black text-white group-hover:bg-white group-hover:text-blue-600 transition-colors">
              {logo.name.charAt(0)}
            </div>
            <span className="text-sm font-bold text-white/90 whitespace-nowrap tracking-wider uppercase group-hover:text-white transition-colors">
              {logo.name}
            </span>
          </div>
        ))}
        {/* Duplicated for smooth infinite loop */}
        {clientLogos.map((logo, index) => (
          <div key={`dup-${index}`} className="flex-shrink-0 flex items-center gap-3 cursor-pointer group">
            <div className="w-6 h-6 rounded-full bg-[#0A1128]/20 flex items-center justify-center text-xs font-black text-white group-hover:bg-white group-hover:text-blue-600 transition-colors">
              {logo.name.charAt(0)}
            </div>
            <span className="text-sm font-bold text-white/90 whitespace-nowrap tracking-wider uppercase group-hover:text-white transition-colors">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
