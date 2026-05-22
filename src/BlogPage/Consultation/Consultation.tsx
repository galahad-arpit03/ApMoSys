"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Consultation() {
  return (
    <section className="bg-[#FFFFFF] py-24 pb-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary-red text-xs font-bold uppercase tracking-widest block mb-4">
            Consultation Deep-Dive
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-6">
            Ready to solve your most complex technical challenges?
          </h2>
          <p className="text-[#5A5A5A] text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Our senior principal engineers are ready to review your architecture and provide a roadmap for high-performance optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.04, boxShadow: "0 8px 24px rgba(180,0,1,0.25)" }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto inline-flex justify-center items-center bg-primary-red hover:bg-primary-hover text-white font-bold px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors"
            >
              Schedule a Deep-Dive
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="w-full sm:w-auto inline-flex justify-center items-center bg-[#FFFFFF] border border-[#C8C8C8] hover:border-[#121212] text-[#121212] font-bold px-8 py-3.5 rounded-md text-sm tracking-wide transition-colors"
            >
              Contact Engineering
            </motion.a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
