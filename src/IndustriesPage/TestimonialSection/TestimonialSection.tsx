"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TestimonialSection() {
  return (
    <section className="py-12 bg-[#121212]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 md:p-8 relative"
        >
          {/* Large Quote Mark */}
          <div className="absolute top-8 right-10 text-8xl font-serif text-[#2A2A2A] leading-none pointer-events-none select-none">
            "
          </div>
          
          <p className="text-lg md:text-xl font-medium text-[#E8E8E8] leading-relaxed mb-6 relative z-10">
            "ApMoSys didn't just provide a service; they redesigned our technical DNA. Their precision in handling our legacy migration allowed us to scale our global financial operations by 300% in a single fiscal year."
          </p>
          
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 bg-[#2A2A2A] rounded-full flex items-center justify-center border border-[#3A3A3A]">
              <span className="text-[#FFFFFF] font-bold">MF</span>
            </div>
            <div>
              <div className="font-bold text-[#FFFFFF]">Marcus Freeno</div>
              <div className="text-sm text-[#7A7A7A]">CTO, Global Finance Inc.</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
