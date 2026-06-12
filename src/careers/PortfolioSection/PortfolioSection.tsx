"use client";
import { portfoliosectionData } from "./PortfolioSectionData";

import React, { useState } from "react";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


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
    <SectionThemeWrapper sectionId="careers_portfolio" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="apply"
            className={`py-24 border-t transition-colors duration-300 overflow-hidden ${
              isDark ? "bg-[#121212] text-[#FAFAFA] border-[#1F1F1F]" : "bg-[#FAFAFA] text-[#121212] border-[#E8E8E8]"
            }`}
          >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center mb-16"
              >
                <EditableText
                  path="careers.portfolio.heading"
                  fallback="Submit Your Portfolio"
                  as="h2"
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 block ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                />
                <EditableText
                  path="careers.portfolio.subheading"
                  fallback="Show us what you've built. We are always looking for exceptional talent."
                  as="p"
                  className={`text-sm sm:text-base block ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}
                />
              </motion.div>

              <motion.form
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } }
                }}
                className={`p-8 sm:p-10 rounded-2xl shadow-xl max-w-2xl mx-auto border transition-colors ${
                  isDark ? "bg-[#1F1F1F] border-[#3A3A3A]" : "bg-[#FFFFFF] border-[#E8E8E8]"
                }`}
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={fadeUp}>
                    <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${
                      isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                    }`}>
                      Full Name <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className={`w-full border focus:border-primary-red rounded-md px-4 py-3 text-sm outline-none transition-colors ${
                        isDark ? "bg-[#121212] border-[#3A3A3A] text-[#FAFAFA] placeholder-[#5A5A5A]" : "bg-[#FAFAFA] border-[#C8C8C8] text-[#121212] placeholder-[#A0A0A0]"
                      }`}
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </motion.div>
                  
                  <motion.div variants={fadeUp}>
                    <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${
                      isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                    }`}>
                      Email Address <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className={`w-full border focus:border-primary-red rounded-md px-4 py-3 text-sm outline-none transition-colors ${
                        isDark ? "bg-[#121212] border-[#3A3A3A] text-[#FAFAFA] placeholder-[#5A5A5A]" : "bg-[#FAFAFA] border-[#C8C8C8] text-[#121212] placeholder-[#A0A0A0]"
                      }`}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={fadeUp}>
                    <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${
                      isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                    }`}>
                      Target Department
                    </label>
                    <select
                      className={`w-full border focus:border-primary-red rounded-md px-4 py-3 text-sm outline-none transition-colors appearance-none ${
                        isDark ? "bg-[#121212] border-[#3A3A3A] text-[#FAFAFA]" : "bg-[#FAFAFA] border-[#C8C8C8] text-[#121212]"
                      }`}
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
                    <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${
                      isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                    }`}>
                      Portfolio / GitHub URL
                    </label>
                    <input
                      type="url"
                      className={`w-full border focus:border-primary-red rounded-md px-4 py-3 text-sm outline-none transition-colors ${
                        isDark ? "bg-[#121212] border-[#3A3A3A] text-[#FAFAFA] placeholder-[#5A5A5A]" : "bg-[#FAFAFA] border-[#C8C8C8] text-[#121212] placeholder-[#A0A0A0]"
                      }`}
                      placeholder="https://github.com/..."
                      value={formData.portfolio}
                      onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    />
                  </motion.div>
                </div>

                <motion.div variants={fadeUp} className="mb-8">
                  <label className={`block text-xs font-bold mb-2 uppercase tracking-wide ${
                    isDark ? "text-[#A0A0A0]" : "text-[#5A5A5A]"
                  }`}>
                    Upload Resume (Optional)
                  </label>
                  <div className={`border-2 border-dashed rounded-md p-8 text-center transition-colors cursor-pointer group ${
                    isDark ? "border-[#3A3A3A] hover:border-primary-red bg-[#121212]" : "border-[#C8C8C8] hover:border-primary-red bg-[#FAFAFA]"
                  }`}>
                    <svg
                      className={`w-8 h-8 mx-auto mb-3 transition-colors ${
                        isDark ? "text-[#5A5A5A] group-hover:text-primary-red" : "text-[#9A9A9A] group-hover:text-primary-red"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span className={`text-sm transition-colors ${
                      isDark ? "text-[#A0A0A0] group-hover:text-[#FAFAFA]" : "text-[#5A5A5A] group-hover:text-[#121212]"
                    }`}>
                      Click or drag file to this area to upload
                    </span>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 24px rgba(180,0,1,0.25)" }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary-red hover:bg-primary-hover text-white font-bold py-4 rounded-md text-sm tracking-wider uppercase transition-colors"
                  >
                    Submit Application
                  </motion.button>
                </motion.div>
              </motion.form>
              
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
