"use client";

import React, { useRef } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { coeData } from "@/src/data/landing/CoESection/CoESectionData";

function PositionAwareCard({ item }: { item: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useAnimationFrame(() => {
    if (!ref.current || !innerRef.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const windowCenterX = window.innerWidth / 2;
    const signedDist = (centerX - windowCenterX) / (windowCenterX * 0.8);
    // Clamp between -1 and 1 to prevent over-rotation off-screen
    const clampedDist = Math.max(-1, Math.min(1, signedDist));
    
    // Calculate 3D Curve (Amphitheater / Inverse Cylinder Effect)
    // 1. Rotation: Center faces forward (0deg). Edges tilt inwards (e.g., -35deg on right, 35deg on left).
    const rotateY = clampedDist * -40;
    
    // 2. Depth (Z-axis): Center is pushed deeply back (far away), edges come forward.
    const absDist = Math.abs(clampedDist);
    const translateZ = (absDist - 1) * 300; // at center (absDist=0) -> -300px. at edges (absDist=1) -> 0px.
    
    // Apply true 3D perspective transforms
    innerRef.current.style.transform = `perspective(1200px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`;
  });

  return (
    <div ref={ref} className="relative shrink-0 w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[300px] md:h-[300px] lg:w-[340px] lg:h-[340px] xl:w-[360px] xl:h-[360px]">
      <div 
        ref={innerRef}
        className="w-full h-full rounded-md overflow-hidden bg-[#0A1128] group/card flex flex-col justify-between p-6 md:p-8 shadow-2xl origin-center will-change-transform border border-slate-800 relative hover:bg-[#0f1730] transition-colors duration-300"
      >
        {/* Glowing 3D Background Icon in Bottom Right */}
        <div 
          className="absolute -bottom-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-contain bg-no-repeat bg-center opacity-30 mix-blend-screen transition-transform duration-700 group-hover/card:scale-110 group-hover/card:opacity-50"
          style={{ backgroundImage: `url(${item.image})` }}
        />

        <div className="relative z-10">
          <div className="text-[10px] md:text-xs font-bold text-slate-400 mb-2 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Innovation Lab
          </div>
          <h3 className="font-heading text-xl md:text-3xl text-white font-semibold leading-tight max-w-[90%] mt-4">
            {item.title}
          </h3>
        </div>

        <div className="relative z-10">
          <p className="text-slate-300 text-xs md:text-sm font-medium line-clamp-4 leading-relaxed mb-6">
            {item.description}
          </p>
          
          <div className="flex items-center text-blue-400 font-bold text-xs tracking-widest uppercase hover:text-blue-300 transition-colors w-max cursor-pointer">
            EXPLORE
            <ArrowRight className="w-4 h-4 ml-1.5 transform group-hover/card:translate-x-2 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CoESection() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10 mb-12 lg:mb-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] tracking-tight text-left">
              Centers of Excellence
            </h2>
          </div>
          <div className="w-full md:w-1/2 md:border-l border-gray-300 md:pl-8">
            <p className="text-base lg:text-lg leading-relaxed text-[#5A5A5A] text-left font-medium">
              We operate dedicated innovation labs to establish best practices, develop specialized tools, and drive thought leadership across critical domains.
            </p>
          </div>
        </div>
      </div>

      {/* Infinite Animated Marquee (Film Strip) */}
      <div className="relative w-full flex overflow-hidden group">
        <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#FAFAFA] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent z-20 pointer-events-none" />

        {/* 
          To achieve a flawless "film strip" loop, we animate a wrapper from 0 to -50%.
          Inside the wrapper, we place TWO identical sets of our items side-by-side. 
          By wrapping them in a flex container with explicit gap handling, the loop jump is invisible.
        */}
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 50,
          }}
          whileHover={{ animationPlayState: "paused" }} 
        >
          {/* First Set */}
          <div className="flex gap-1 md:gap-2 pr-1 md:pr-2">
            {coeData.map((item, idx) => (
              <PositionAwareCard key={`set1-${item.id}-${idx}`} item={item} />
            ))}
          </div>
          {/* Second Set (Identical Clone for seamless loop) */}
          <div className="flex gap-1 md:gap-2 pr-1 md:pr-2">
            {coeData.map((item, idx) => (
              <PositionAwareCard key={`set2-${item.id}-${idx}`} item={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
