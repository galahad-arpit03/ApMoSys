"use client";
import { subscribebannerData } from "./SubscribeBannerData";

import React from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


export default function SubscribeBanner() {
  return (
    <SectionThemeWrapper sectionId="blogs_subscribe" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-16 transition-colors duration-300 ${isDark ? "bg-[#121212]" : "bg-[#FFFFFF]"}`}>
                        <Container>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between p-8 sm:p-12 gap-8 relative border transition-colors ${
                  isDark ? "bg-[#1F1F1F] border-[#3A3A3A]" : "bg-[#121212] border-[#2A2A2A]"
                }`}
              >
                {/* Subtle background glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-red rounded-full blur-[100px] opacity-20 pointer-events-none" />

                {/* Left Text */}
                <div className="max-w-lg relative z-10">
                  <h3 className="font-heading font-bold text-2xl text-[#FFFFFF] mb-3">
                    Stay Ahead of the Curve
                  </h3>
                  <p className="text-[#A0A0A0] text-sm leading-relaxed">
                    Get weekly technical intelligence and engineering insights delivered directly to your inbox. No fluff, just engineering.
                  </p>
                </div>

                {/* Right Form */}
                <div className="w-full lg:w-auto relative z-10">
                  <div className="flex flex-col sm:flex-row gap-4 mb-3">
                    <input 
                      type="email" 
                      placeholder="Work Email Address" 
                      className={`w-full sm:w-72 border px-4 py-3.5 rounded-md text-sm focus:outline-none focus:border-primary-red transition-colors ${
                        isDark ? "bg-[#121212] border-[#3A3A3A] text-[#FAFAFA]" : "bg-[#1F1F1F] border-[#3A3A3A] text-[#FAFAFA]"
                      }`}
                    />
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-primary-red hover:bg-primary-hover text-[#FFFFFF] px-8 py-3.5 rounded-md text-sm font-bold transition-colors whitespace-nowrap"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                  <p className="text-[#5A5A5A] text-xs">
                    By subscribing, you agree to our privacy policy and terms of service.
                  </p>
                </div>
                
              </motion.div>
              
                        </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
