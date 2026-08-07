"use client";
import React from "react";
import { motion } from "framer-motion";
import { RotatingCards } from "./RotatingCards";
import { Trophy, Users, Globe, ShieldCheck, Play, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#F8F9FB] overflow-hidden flex items-center">
      
      {/* Technical Lines Background */}
      <div className="absolute inset-0 z-0 [mask-image:linear-gradient(to_bottom,transparent_0%,black_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px)] bg-[size:120px_100%]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100%_120px]" />
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_24px,#80808008_24px,#80808008_25px)]" />
      </div>

      {/* Decorative Animated Gradient Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-5%] w-[45%] h-[55%] rounded-full bg-blue-400/30 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[50%] rounded-full bg-indigo-400/30 blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[20%] right-[15%] w-[35%] h-[35%] rounded-full bg-purple-400/20 blur-[100px]" 
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 w-full flex flex-col lg:flex-row items-center justify-between pt-28 pb-12 z-10">
      {/* LHS Content */}
      <div className="w-full lg:w-7/12 flex flex-col justify-center items-start z-10 lg:pr-10">
        
        {/* Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-gray-900 leading-tight tracking-tight mb-6"
        >
          Engineering the Future of <br />
          <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">Digital Quality</span>
        </motion.h1>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-gray-600 max-w-xl mb-10 leading-relaxed"
        >
          Accelerate releases, eliminate defects, and scale with confidence using ApMoSys — the AI-powered automation backbone for enterprise software teams.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center gap-4 mb-16"
        >
          <button className="px-6 py-3 bg-[#0066FF] hover:bg-blue-600 text-white font-medium rounded-lg transition-colors flex items-center gap-2 text-sm">
            Explore Platform
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="px-6 py-3 bg-transparent border border-gray-300 hover:border-gray-400 text-gray-900 font-medium rounded-lg transition-colors flex items-center gap-2 text-sm">
            <Play className="w-4 h-4 fill-gray-900" />
            Book a Demo
          </button>
        </motion.div>

      </div>

      {/* RHS Rotating Cards */}
      <div className="w-full lg:w-5/12 flex items-center justify-center mt-16 lg:mt-0 relative z-10">
        <RotatingCards />
      </div>
      </div>
    </section>
  );
}