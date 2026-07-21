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
    <SectionThemeWrapper sectionId="careers_portfolio" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            id="apply"
            className={`py-12 lg:py-16 border-t transition-colors duration-300 overflow-hidden ${
              isDark ? "bg-[#0A1128] text-white border-[#1F2C47]" : "bg-white text-gray-900 border-gray-200"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">
                
                {/* Left Side: Header & Text */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: "easeOut" }}
                  className="col-span-5 mb-12 lg:mb-0"
                >
                  <EditableText
                    path="careers.portfolio.heading"
                    fallback="Submit Your Portfolio"
                    as="h2"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] mb-6 block ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                  <EditableText
                    path="careers.portfolio.subheading"
                    fallback="Show us what you've built. We are always looking for exceptional talent."
                    as="p"
                    className={`text-lg sm:text-xl leading-relaxed block ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                    multiline
                  />
                </motion.div>

                {/* Right Side: Form */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
                  className="col-span-7"
                >
                  <form
                    className={`p-8 sm:p-10 rounded-2xl shadow-sm border transition-colors ${
                      isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                    }`}
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className={`block text-[13px] font-semibold mb-2 uppercase tracking-wide ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          Full Name <span className="text-[#2563EB]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          className={`w-full border focus:border-[#2563EB] rounded-md px-4 py-3 text-sm outline-none transition-colors ${
                            isDark ? "bg-[#0A1128] border-[#1F2C47] text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#2563EB]"
                          }`}
                          placeholder="John Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      
                      <div>
                        <label className={`block text-[13px] font-semibold mb-2 uppercase tracking-wide ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          Email Address <span className="text-[#2563EB]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          className={`w-full border focus:border-[#2563EB] rounded-md px-4 py-3 text-sm outline-none transition-colors ${
                            isDark ? "bg-[#0A1128] border-[#1F2C47] text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#2563EB]"
                          }`}
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label className={`block text-[13px] font-semibold mb-2 uppercase tracking-wide ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          Target Department
                        </label>
                        <select
                          className={`w-full border focus:border-[#2563EB] rounded-md px-4 py-3 text-sm outline-none transition-colors appearance-none ${
                            isDark ? "bg-[#0A1128] border-[#1F2C47] text-white" : "bg-white border-gray-300 text-gray-900 focus:ring-1 focus:ring-[#2563EB]"
                          }`}
                          value={formData.department}
                          onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        >
                          <option value="Engineering">Engineering</option>
                          <option value="QA & Testing">QA & Automation</option>
                          <option value="Architecture">Architecture</option>
                          <option value="Sales & Marketing">Sales & Marketing</option>
                        </select>
                      </div>

                      <div>
                        <label className={`block text-[13px] font-semibold mb-2 uppercase tracking-wide ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                          Portfolio / GitHub URL
                        </label>
                        <input
                          type="url"
                          className={`w-full border focus:border-[#2563EB] rounded-md px-4 py-3 text-sm outline-none transition-colors ${
                            isDark ? "bg-[#0A1128] border-[#1F2C47] text-white placeholder-gray-500" : "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-1 focus:ring-[#2563EB]"
                          }`}
                          placeholder="https://github.com/..."
                          value={formData.portfolio}
                          onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <label className={`block text-[13px] font-semibold mb-2 uppercase tracking-wide ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}>
                        Upload Resume (Optional)
                      </label>
                      <div className={`border-2 border-dashed rounded-md p-8 text-center transition-colors cursor-pointer group ${
                        isDark ? "border-[#1F2C47] hover:border-[#2563EB] bg-[#0A1128]" : "border-gray-300 hover:border-[#2563EB] bg-white"
                      }`}>
                        <svg
                          className={`w-8 h-8 mx-auto mb-3 transition-colors ${
                            isDark ? "text-gray-500 group-hover:text-[#2563EB]" : "text-gray-400 group-hover:text-[#2563EB]"
                          }`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <span className={`text-sm transition-colors ${
                          isDark ? "text-gray-400 group-hover:text-white" : "text-gray-500 group-hover:text-[#2563EB]"
                        }`}>
                          Click or drag file to this area to upload
                        </span>
                      </div>
                    </div>

                    <div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-[#0A1128] hover:bg-[#1A233A] text-white font-bold py-4 rounded-md text-sm tracking-wider uppercase transition-colors shadow-lg"
                      >
                        Submit Application
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              </div>
              
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
