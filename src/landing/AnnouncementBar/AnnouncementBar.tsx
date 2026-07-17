"use client";
import React, { useState } from "react";
import { ArrowRight, X } from "lucide-react";

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#2563EB] text-white text-[13px] font-seminbold py-2 px-4 relative z-50">
      <div className="max-w-[1600px] mx-auto flex items-center justify-center gap-2">
        <span className="bg-white/20 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-bold">
          New
        </span>
        <span className="opacity-90">
          Discover our latest enterprise AI features.
        </span>
        <a href="#" className="flex items-center gap-1 hover:underline underline-offset-2 opacity-100 font-normal ml-1">
          Learn more
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
          aria-label="Close announcement"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
