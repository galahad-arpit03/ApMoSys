"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { landingMilestonesData } from "@/src/data/landing/LandingMilestones/LandingMilestonesData";
import { ChevronLeft, ChevronRight, Calendar, Package, ArrowRight } from "lucide-react";

export default function LandingMilestones() {
  const [rotationCount, setRotationCount] = useState(0);

  // Auto-rotate the massive wheel
  useEffect(() => {
    const timer = setInterval(() => {
      setRotationCount((prev) => prev + 1);
    }, 4000); // Rotate every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const totalWheelItems = landingMilestonesData.length * 3; // 13 * 3 = 39 items
  const degreesPerItem = 360 / totalWheelItems; // ~9.23 degrees
  
  const currentAngle = -rotationCount * degreesPerItem;
  const wheelMilestones = [...landingMilestonesData, ...landingMilestonesData, ...landingMilestonesData];

  // Calculate active index (1 to 13) for the static counter
  const activeIndex = ((rotationCount % landingMilestonesData.length) + landingMilestonesData.length) % landingMilestonesData.length;

  return (
    <section className="bg-white relative overflow-hidden h-[825px] w-full font-sans border-b border-gray-100">

      {/* CSS Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Top Left decorative concentric circles */}
        <div className="absolute top-[-150px] left-[-150px] w-[600px] h-[600px] border-[1px] border-blue-100/50 rounded-full" />
        <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] border-[1px] border-blue-100/50 rounded-full" />
        <div className="absolute top-[-50px] left-[-50px] w-[400px] h-[400px] border-[1px] border-blue-100/50 rounded-full" />

        {/* Right Side decorative dots */}
        <div className="absolute top-[5%] right-[5%] w-[400px] h-[300px] bg-[radial-gradient(#E2E8F0_2px,transparent_2px)] [background-size:30px_30px] opacity-70" />
      </div>

      {/* Header Section */}
      <div className="relative z-30 pt-10 lg:pt-14 px-6 sm:px-8 lg:px-16 max-w-[1600px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 leading-[1.1] tracking-tight text-left">
            Milestones Achieved.
          </h2>
        </div>
        <div className="w-full md:w-1/2 md:border-l border-gray-200 md:pl-8">
          <p className="text-base lg:text-lg leading-relaxed text-gray-600 text-left font-medium">
            A legacy of technical excellence, continuous growth, and industry-defining innovation since 2012.
          </p>
        </div>
      </div>

      {/* The CTA Card */}
      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 w-[90%] max-w-[800px] bg-white/70 backdrop-blur-2xl border border-white rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between z-40 shadow-[0_15px_50px_rgba(0,0,0,0.05)]">
        <div className="flex items-center gap-5 mb-4 sm:mb-0">
          <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center border border-blue-100">
            <Package className="text-blue-600 w-7 h-7" strokeWidth={1.5} />
          </div>
          <div className="text-left">
            <h4 className="text-gray-900 font-semibold text-[17px] mb-0.5">Need a tailored solution?</h4>
            <p className="text-gray-500 text-sm font-medium">Let&apos;s build something extraordinary together.</p>
          </div>
        </div>
        <button className="px-6 py-3 bg-[#0B1121] hover:bg-[#1A2542] border border-[#16193B] text-white font-medium rounded-md transition-all duration-300 flex items-center gap-2.5 text-sm hover:scale-[1.02] shadow-lg">
          Talk to an Expert <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* The Arch & Cards Container */}
      <div className="absolute bottom-[-1400px] left-1/2 w-0 h-0 z-20">

        {/* The massive solid arc (White Theme) */}
        <div className="absolute top-[-2000px] left-[-2000px] w-[4000px] h-[4000px] bg-white border-[2px] border-blue-100 rounded-full pointer-events-none shadow-[inset_0_0_80px_rgba(0,0,0,0.02),0_0_40px_rgba(0,0,0,0.05)]">
          {/* Inner dots inside the white wheel */}
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
        </div>

        {/* Static Center Counter with Arrows */}
        <div className="absolute top-[-1660px] left-1/2 -translate-x-1/2 w-48 z-30 pointer-events-auto flex items-center justify-center gap-4">
          <button 
            onClick={() => setRotationCount(prev => prev - 1)}
            className="text-gray-400 hover:text-blue-600 transition-colors p-1 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md"
            aria-label="Previous milestone"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
          </button>
          
          <span className="font-mono text-sm tracking-widest text-blue-600 font-bold whitespace-nowrap bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            {String(landingMilestonesData[activeIndex].year)}
          </span>

          <button 
            onClick={() => setRotationCount(prev => prev + 1)}
            className="text-gray-400 hover:text-blue-600 transition-colors p-1 bg-white rounded-full shadow-sm border border-gray-100 hover:shadow-md"
            aria-label="Next milestone"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={2.5} />
          </button>
        </div>

        <motion.div
          onPanEnd={(e, info) => {
            if (info.offset.x < -20 || info.velocity.x < -100) {
              setRotationCount((prev) => prev + 1);
            } else if (info.offset.x > 20 || info.velocity.x > 100) {
              setRotationCount((prev) => prev - 1);
            }
          }}
          animate={{ rotate: currentAngle }}
          transition={{ type: "spring", stiffness: 260, damping: 25, mass: 1 }}
          style={{ willChange: "transform", touchAction: "none" }}
          className="absolute top-0 left-0 w-0 h-0 cursor-grab active:cursor-grabbing"
        >
          {/* The Milestone Cards */}
          {wheelMilestones.map((milestone, idx) => {
            const fixedAngle = idx * degreesPerItem; 

            // Calculate global angle to determine which item is currently at the top (active)
            let globalAngle = (fixedAngle + currentAngle) % 360;
            if (globalAngle < -180) globalAngle += 360;
            if (globalAngle > 180) globalAngle -= 360;

            const isActive = Math.abs(globalAngle) < (degreesPerItem / 2); // Active window

            return (
              <div
                key={`milestone-${idx}`}
                className="absolute top-0 left-0 origin-bottom flex flex-col items-center pointer-events-none"
                style={{
                  transform: `rotate(${fixedAngle}deg)`,
                  width: 270,
                  height: 2000, // Radius
                  marginLeft: -135,
                  marginTop: -2000,
                }}
              >
                {/* Glowing Node on the arc ring */}
                <div className={`w-3 h-3 rounded-full z-20 transition-all duration-500 ${isActive ? 'bg-[#0B1121] shadow-[0_0_15px_4px_rgba(11,17,33,0.3)] scale-125' : 'bg-gray-300'}`} />

                {/* Connector Line */}
                <div className={`w-[1.5px] h-[35px] bg-gradient-to-b transition-all duration-500 ${isActive ? 'from-[#0B1121]' : 'from-gray-200'} to-transparent`} />

                {/* The Card */}
                <div
                  onClick={() => {
                    // Click to rotate directly to this card
                    setRotationCount((prev) => prev + Math.round(globalAngle / degreesPerItem));
                  }}
                  className={`relative overflow-hidden w-full h-[250px] mt-6 rounded-2xl flex flex-col justify-between items-start p-6 backdrop-blur-xl pointer-events-auto cursor-pointer transition-all duration-500 group border shadow-xl ${isActive
                    ? "opacity-100 scale-105 bg-[#0B1121]/90 border-white/20 shadow-[0_20px_40px_rgba(11,17,33,0.4)] -translate-y-[20px]"
                    : "opacity-60 scale-95 bg-gray-200/40 border-white/70 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:border-white hover:opacity-100 hover:bg-gray-300/50 transform-none"
                    }`}
                >
                  
                  {/* Glass Light Beam Effect (Sweeps across on hover) */}
                  <div className="absolute top-0 left-[-150%] w-[100%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-25deg] group-hover:left-[200%] transition-all duration-1000 ease-in-out pointer-events-none z-10" />

                  {/* Top row: Icon and Number */}
                  <div className="flex justify-between items-start w-full relative z-20">
                    {/* Icon Background */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border bg-gradient-to-br transition-colors duration-500 ${isActive ? 'border-white/10 from-white/10 to-transparent shadow-inner' : 'border-white/60 from-white/80 to-white/30 shadow-sm'}`}>
                      <Calendar className={`w-5 h-5 transition-colors duration-500 ${isActive ? 'text-blue-400' : 'text-gray-500'}`} />
                    </div>
                    {/* Number top right (Year) */}
                    <span className={`font-black text-3xl transition-colors duration-500 ${isActive ? 'text-white/10' : 'text-gray-900/10'}`}>
                      {milestone.year}
                    </span>
                  </div>

                  {/* Text Content at bottom */}
                  <div className="mt-auto relative z-20">
                    <h3
                      className={`font-semibold text-[19px] leading-tight mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-900 group-hover:text-black'}`}
                      style={{ fontFamily: '"Geist", sans-serif' }}
                    >
                      {milestone.title}
                    </h3>
                    <p
                      className={`text-[13.5px] leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-300' : 'text-gray-600 group-hover:text-gray-700'}`}
                      style={{ fontFamily: '"Manrope", sans-serif' }}
                    >
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
