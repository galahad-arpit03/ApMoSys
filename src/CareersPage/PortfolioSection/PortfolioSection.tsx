"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function PortfolioSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    department: "Engineering",
    portfolio: "",
  });

  return (
    <section id="apply" className="bg-[#121212] text-[#FAFAFA] py-24 border-t border-[#1F1F1F] overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] mb-4">
            Submit Your Portfolio
          </h2>
          <p className="text-[#A0A0A0] text-sm sm:text-base">
            Show us what you've built. We are always looking for exceptional talent.
          </p>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="bg-[#1F1F1F] border border-[#3A3A3A] p-8 sm:p-10 rounded-2xl shadow-xl max-w-2xl mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <motion.div variants={fadeUp}>
              <label className="block text-xs font-bold text-[#A0A0A0] mb-2 uppercase tracking-wide">
                Full Name <span className="text-[#B40001]">*</span>
              </label>
              <input
                type="text"
                required
                className="w-full bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] rounded-md px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#5A5A5A] outline-none transition-colors"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </motion.div>
            
            <motion.div variants={fadeUp}>
              <label className="block text-xs font-bold text-[#A0A0A0] mb-2 uppercase tracking-wide">
                Email Address <span className="text-[#B40001]">*</span>
              </label>
              <input
                type="email"
                required
                className="w-full bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] rounded-md px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#5A5A5A] outline-none transition-colors"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <motion.div variants={fadeUp}>
              <label className="block text-xs font-bold text-[#A0A0A0] mb-2 uppercase tracking-wide">
                Target Department
              </label>
              <select
                className="w-full bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] rounded-md px-4 py-3 text-sm text-[#FAFAFA] outline-none transition-colors appearance-none"
                value={formData.department}
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              >
                <option value="Engineering">Engineering</option>
                <option value="QA & Testing">QA & Automation</option>
                <option value="Architecture">Architecture</option>
                <option value="Sales & Marketing">Sales & Marketing</option>
              </select>
            </motion.div>

            <motion.div variants={fadeUp}>
              <label className="block text-xs font-bold text-[#A0A0A0] mb-2 uppercase tracking-wide">
                Portfolio / GitHub URL
              </label>
              <input
                type="url"
                className="w-full bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] rounded-md px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#5A5A5A] outline-none transition-colors"
                placeholder="https://github.com/..."
                value={formData.portfolio}
                onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
              />
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mb-8">
            <label className="block text-xs font-bold text-[#A0A0A0] mb-2 uppercase tracking-wide">
              Upload Resume (Optional)
            </label>
            <div className="border-2 border-dashed border-[#3A3A3A] hover:border-[#B40001] bg-[#121212] rounded-md p-8 text-center transition-colors cursor-pointer group">
              <svg className="w-8 h-8 text-[#5A5A5A] group-hover:text-[#B40001] mx-auto mb-3 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
              <span className="text-[#A0A0A0] text-sm group-hover:text-[#FAFAFA] transition-colors">
                Click or drag file to this area to upload
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(180,0,1,0.25)" }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-[#B40001] hover:bg-[#D10000] text-white font-bold py-4 rounded-md text-sm tracking-wider uppercase transition-colors"
            >
              Submit Application
            </motion.button>
          </motion.div>
        </motion.form>
        
      </div>
    </section>
  );
}
