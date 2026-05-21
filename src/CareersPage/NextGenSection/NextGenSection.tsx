"use client";

import React from "react";
import { motion } from "framer-motion";

export default function NextGenSection() {
  return (
    <section className="bg-[#FFFFFF] text-[#121212] py-24 border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="col-span-6 mb-12 lg:mb-0"
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-4 leading-tight">
              The Next Generation of <br />
              <span className="text-[#B40001]">Architects.</span>
            </h2>
            <p className="text-[#5A5A5A] text-base leading-relaxed mb-8 max-w-lg">
              We do not just hire talent; we groom it. Our specialized training programs are designed to transform promising graduates into elite software architects and automation specialists ready for industry challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="bg-[#FAFAFA] border border-[#E8E8E8] p-6 rounded-xl flex-1">
                <span className="block text-2xl font-bold text-[#121212] mb-1">6 Months</span>
                <span className="text-[#7A7A7A] text-xs font-bold uppercase tracking-widest">Intense Bootcamp</span>
              </div>
              <div className="bg-[#FAFAFA] border border-[#E8E8E8] p-6 rounded-xl flex-1">
                <span className="block text-2xl font-bold text-[#121212] mb-1">Paid</span>
                <span className="text-[#7A7A7A] text-xs font-bold uppercase tracking-widest">Global Internship</span>
              </div>
            </div>
          </motion.div>

          {/* Right Testimonial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="col-span-6 lg:pl-10"
          >
            <div className="bg-[#FAFAFA] border border-[#E8E8E8] p-10 rounded-2xl relative">
              <svg className="absolute top-6 right-8 w-12 h-12 text-[#FFE5E5]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              
              <p className="text-[#121212] text-lg font-medium leading-relaxed mb-8 relative z-10">
                "The ApMoSys training academy didn't just teach me how to write code; it taught me how to think about systems. I transitioned from a fresh graduate to leading a QA automation team in under two years."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#121212] rounded-full flex-shrink-0" />
                <div>
                  <h4 className="font-bold text-[#121212]">Sarah Jenkins</h4>
                  <p className="text-[#7A7A7A] text-xs font-semibold uppercase tracking-wider">Lead Automation Architect</p>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
