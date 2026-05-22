"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-12 bg-[#121212] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-primary-red rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-[#FFFFFF] mb-4">
              Scale Your Industry Impact
            </h2>
            <p className="text-primary-soft text-base mb-8 leading-relaxed">
              Join the hundreds of industry leaders globally that trust ApMoSys to drive their technological evolution.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#FFFFFF] hover:bg-[#FAFAFA] text-[#121212] font-bold text-center px-10 py-4 rounded-md text-sm tracking-wide transition-colors shadow-lg hover:shadow-xl"
            >
              Start Your Transformation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
