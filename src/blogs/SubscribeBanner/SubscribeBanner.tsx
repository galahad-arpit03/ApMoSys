"use client";
import { subscribebannerData } from "./SubscribeBannerData";
import React from "react";
import { motion } from "framer-motion";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import Image from "next/image";

export default function SubscribeBanner() {
  return (
    <SectionThemeWrapper sectionId="blogs_subscribe" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-12 lg:py-16 transition-colors duration-300 ${isDark ? "bg-[#0A1128]" : "bg-white"} px-4 sm:px-6 lg:px-8`}>
            <div className="max-w-7xl mx-auto relative rounded-[12px] overflow-hidden shadow-2xl min-h-[300px] md:min-h-[350px] lg:min-h-[380px] flex flex-col justify-center">
              
              {/* Background Image & Overlay */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/assets/images/abstract-waves.png"
                  alt="Background"
                  fill
                  quality={90}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#2563EB]/80 mix-blend-multiply"></div>
              </div>

              <div className="relative z-10 p-8 sm:p-12 lg:p-16 w-full flex flex-col lg:flex-row items-center justify-between gap-8">
                
                {/* Left Text */}
                <div className="max-w-2xl text-left w-full">
                  <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-white mb-4 tracking-tight leading-tight">
                    Stay Ahead of the Curve
                  </h2>
                  <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl">
                    Get weekly technical intelligence and engineering insights delivered directly to your inbox. No fluff, just engineering.
                  </p>
                </div>

                {/* Right Form */}
                <div className="w-full lg:w-auto relative z-10 shrink-0">
                  <div className="flex flex-col sm:flex-row gap-4 mb-3">
                    <input 
                      type="email" 
                      placeholder="Work Email Address" 
                      className="w-full sm:w-72 bg-white/10 border border-white/20 rounded-md px-4 py-3.5 text-sm text-white placeholder-white/60 focus:outline-none focus:border-white focus:bg-white/20 transition-all backdrop-blur-sm"
                    />
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-white text-[#0F172A] px-8 py-3.5 rounded-md text-sm font-semibold text-center shadow-lg hover:shadow-xl transition-all whitespace-nowrap"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                  <p className="text-white/60 text-xs">
                    By subscribing, you agree to our privacy policy and terms of service.
                  </p>
                </div>
                
              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
