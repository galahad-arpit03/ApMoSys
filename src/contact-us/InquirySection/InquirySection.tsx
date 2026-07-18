"use client";
import { inquirysectionData } from "./InquirySectionData";

import React, { useState } from "react";
import Container from "@/src/components/Container";
import { motion } from "framer-motion";
import EditableText from "@/src/admin/components/EditableText";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <section className="relative py-10 lg:py-16 bg-[#F8FAFC] text-[#121212] overflow-hidden">
      {/* Watery Ambient Background for Glassmorphism */}
      {/* <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-200/40 rounded-full blur-[150px] pointer-events-none translate-x-1/4 -translate-y-1/4 z-0"></div> */}
      {/* <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-200/30 rounded-full blur-[120px] pointer-events-none -translate-x-1/4 translate-y-1/4 z-0"></div> */}
      {/* <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-indigo-200/30 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2 z-0"></div> */}

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Hero Text — staggered reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-10 lg:grid lg:grid-cols-12 lg:gap-12 items-start"
        >
          <motion.h1 variants={fadeUp} className="lg:col-span-7 font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-normal text-black mb-6 lg:mb-0">
            <EditableText
              path="contact.heading"
              fallback="Let's Build Something Exceptional"
              as="span"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-normal text-black"
            />
          </motion.h1>
          <motion.p variants={fadeUp} className="lg:col-span-5 text-lg leading-relaxed text-[#5A5A5A]">
            <EditableText
              path="contact.subheading"
              fallback="Tell us about your automation challenges and we'll craft a solution that fits your scale."
              as="span"
              multiline
              className="text-lg leading-relaxed text-[#5A5A5A]"
            />
          </motion.p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          {/* Left Form — slides in from left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 mb-8 lg:mb-0 relative"
          >
            {/* Blue Beam Inside Form for extra localized glass effect */}
            {/* <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-blue-300/40 rounded-full blur-[80px] pointer-events-none z-0"></div> */}
            {/* <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-300/30 rounded-full blur-[80px] pointer-events-none z-0"></div> */}
            
            <div className="relative z-10 border border-slate-200 rounded-xl p-6 lg:p-10 shadow-[0_8px_32px_rgba(31,38,135,0.07)] bg-white/40 backdrop-blur-2xl text-[#121212]">
              <h2 className="text-2xl font-medium font-heading mb-6 text-slate-800">Inquiry Details</h2>
              <motion.form
                onSubmit={handleSubmit}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Row 1: Name + Email */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wide text-[#5A5A5A]">
                      Name <span className="text-[#0F172A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full focus:border-blue-600 rounded-md px-4 py-3 text-sm outline-none transition-all duration-200 bg-[#FAFAFA] border border-[#E8E8E8] text-[#121212] placeholder-[#A0A0A0] hover:border-[#C8C8C8]"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wide text-[#5A5A5A]">
                      Email <span className="text-[#0F172A]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full focus:border-blue-600 rounded-md px-4 py-3 text-sm outline-none transition-all duration-200 bg-[#FAFAFA] border border-[#E8E8E8] text-[#121212] placeholder-[#A0A0A0] hover:border-[#C8C8C8]"
                      placeholder="Enter your email-ID"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </motion.div>

                {/* Row 2: Company + Contact Number */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wide text-[#5A5A5A]">
                      Company Name <span className="text-[#0F172A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full focus:border-blue-600 rounded-md px-4 py-3 text-sm outline-none transition-all duration-200 bg-[#FAFAFA] border border-[#E8E8E8] text-[#121212] placeholder-[#A0A0A0] hover:border-[#C8C8C8]"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-2 uppercase tracking-wide text-[#5A5A5A]">
                      Contact Number <span className="text-[#0F172A]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full focus:border-blue-600 rounded-md px-4 py-3 text-sm outline-none transition-all duration-200 bg-[#FAFAFA] border border-[#E8E8E8] text-[#121212] placeholder-[#A0A0A0] hover:border-[#C8C8C8]"
                      placeholder="Enter your contact number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </motion.div>

                {/* Row 3: Message */}
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-semibold mb-2 uppercase tracking-wide text-[#5A5A5A]">
                    Your Message <span className="text-[#0F172A]">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full focus:border-blue-600 rounded-md px-4 py-3 text-sm outline-none transition-all duration-200 resize-none bg-[#FAFAFA] border border-[#E8E8E8] text-[#121212] placeholder-[#A0A0A0] hover:border-[#C8C8C8]"
                    placeholder="Enter your text message here"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(15,23,42,0.25)" }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full bg-[#0F172A] hover:bg-slate-800 text-white font-semibold py-4 rounded-md text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Submit Request
                    <motion.svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </motion.button>
                </motion.div>
              </motion.form>
            </div>
          </motion.div>

          {/* Right Info — slides in from right, staggered children */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-5 space-y-6"
          >
            <motion.div variants={fadeRight} className="border border-slate-200 rounded-xl p-6 lg:p-10 shadow-[0_8px_32px_rgba(31,38,135,0.07)] bg-white/40 backdrop-blur-2xl text-[#121212]">
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center text-[#0F172A]"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold font-heading text-slate-800">Centralized Hub</h3>
              </div>
              <div className="space-y-6">
                {[
                  {
                    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                    label: "Business Inquiry",
                    value: "sales@apmosys.com",
                  },
                  {
                    icon: "M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z",
                    label: "Career Inquiry",
                    value: "career@apmosys.com",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center gap-4"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#2563EB]/10 text-[#0F172A]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider mb-0.5 text-[#7A7A7A]">{item.label}</h4>
                      <p className="text-sm font-semibold text-slate-800">
                        <EditableText
                          path={i === 0 ? "contact.salesEmail" : "contact.careersEmail"}
                          fallback={item.value}
                          as="span"
                          className="text-sm font-semibold text-slate-800"
                        />
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={fadeRight} className="grid grid-cols-2 gap-6">
              {[
                { label: "Contact Us", value: "+91 2241-222-250", path: "contact.phone" },
                { label: "Careers", value: "+91 2241-222-251", path: "contact.careersPhone" },
              ].map((card, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(31,38,135,0.12)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="border border-slate-200 rounded-xl p-6 shadow-[0_8px_32px_rgba(31,38,135,0.07)] bg-white/40 backdrop-blur-2xl text-[#121212]"
                >
                  <h4 className="text-xs font-bold uppercase tracking-wider mb-2 text-[#7A7A7A]">{card.label}</h4>
                  <p className="text-sm font-semibold text-slate-800">
                    <EditableText
                      path={card.path}
                      fallback={card.value}
                      as="span"
                      className="text-sm font-semibold text-slate-800"
                    />
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
