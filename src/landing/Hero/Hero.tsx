"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect: moves the background downwards slightly as the user scrolls down
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden bg-[#0A1128]">
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0 z-0 origin-top"
        style={{ y: backgroundY }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/landing/Hero/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional dark overlay to ensure navbar/content visibility if needed */}
        <div className="absolute inset-0 bg-[#0A1128]/20" />
      </motion.div>

      {/* Content Container (Empty as requested, but ready if needed) */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center pointer-events-none">
        {/* We have removed everything from the hero as requested */}
      </div>
      
    </section>
  );
}