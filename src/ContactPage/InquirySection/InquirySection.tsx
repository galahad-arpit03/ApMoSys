"use client";

import React, { useState } from "react";
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
    <section className="bg-[#FFFFFF] text-[#121212] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Hero Text — staggered reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-16 max-w-3xl"
        >
          <motion.span variants={fadeUp} className="text-primary-red text-xs font-bold tracking-widest uppercase mb-4 block">
            GET IN TOUCH WITH US
          </motion.span>
          <motion.h1 variants={fadeUp} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal mb-6 text-[#121212]">
            <EditableText
              path="contact.heading"
              fallback="Contact us for Premium Business Service."
              as="span"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-normal text-[#121212]"
            />
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[#5A5A5A] text-lg leading-relaxed max-w-2xl">
            <EditableText
              path="contact.subheading"
              fallback="Solve your operations issues, schedule quality assurance and performance monitoring validation. Our technical experts are ready to collaborate on enterprise-grade deployment strategies."
              as="span"
              multiline
              className="text-[#5A5A5A] text-lg leading-relaxed"
            />
          </motion.p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-16">

          {/* Left Form — slides in from left */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="lg:col-span-7 mb-12 lg:mb-0"
          >
            <div className="bg-[#FFFFFF] border border-[#E8E8E8] rounded-xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold font-heading mb-8">Inquiry Details</h2>
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
                    <label className="block text-xs font-semibold text-[#5A5A5A] mb-2 uppercase tracking-wide">
                      Name <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#FAFAFA] border border-[#E8E8E8] focus:border-primary-red rounded-md px-4 py-3 text-sm text-[#121212] placeholder-[#A0A0A0] outline-none transition-all duration-200 hover:border-[#C8C8C8]"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A5A] mb-2 uppercase tracking-wide">
                      Email <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full bg-[#FAFAFA] border border-[#E8E8E8] focus:border-primary-red rounded-md px-4 py-3 text-sm text-[#121212] placeholder-[#A0A0A0] outline-none transition-all duration-200 hover:border-[#C8C8C8]"
                      placeholder="Enter your email-ID"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </motion.div>

                {/* Row 2: Company + Contact Number */}
                <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A5A] mb-2 uppercase tracking-wide">
                      Company Name <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full bg-[#FAFAFA] border border-[#E8E8E8] focus:border-primary-red rounded-md px-4 py-3 text-sm text-[#121212] placeholder-[#A0A0A0] outline-none transition-all duration-200 hover:border-[#C8C8C8]"
                      placeholder="Enter your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#5A5A5A] mb-2 uppercase tracking-wide">
                      Contact Number <span className="text-primary-red">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full bg-[#FAFAFA] border border-[#E8E8E8] focus:border-primary-red rounded-md px-4 py-3 text-sm text-[#121212] placeholder-[#A0A0A0] outline-none transition-all duration-200 hover:border-[#C8C8C8]"
                      placeholder="Enter your contact number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </motion.div>

                {/* Row 3: Message */}
                <motion.div variants={fadeUp}>
                  <label className="block text-xs font-semibold text-[#5A5A5A] mb-2 uppercase tracking-wide">
                    Your Message <span className="text-primary-red">*</span>
                  </label>
                  <textarea
                    rows={4}
                    required
                    className="w-full bg-[#FAFAFA] border border-[#E8E8E8] focus:border-primary-red rounded-md px-4 py-3 text-sm text-[#121212] placeholder-[#A0A0A0] outline-none transition-all duration-200 hover:border-[#C8C8C8] resize-none"
                    placeholder="Enter your text message here"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </motion.div>

                <motion.div variants={fadeUp}>
                  <motion.button
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(180,0,1,0.25)" }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-full bg-primary-red hover:bg-primary-hover text-white font-bold py-4 rounded-md text-sm tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
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
            <motion.div variants={fadeRight} className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-8 h-8 rounded-full bg-primary-soft flex items-center justify-center text-primary-red"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </motion.div>
                <h3 className="text-xl font-bold font-heading text-[#121212]">Centralized Hub</h3>
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
                    className="flex gap-4"
                  >
                    <div className="mt-1 text-primary-red">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#7A7A7A] uppercase tracking-wider mb-1">{item.label}</h4>
                      <p className="text-sm font-semibold text-[#121212]">
                        <EditableText
                          path={i === 0 ? "contact.salesEmail" : "contact.careersEmail"}
                          fallback={item.value}
                          as="span"
                          className="text-sm font-semibold text-[#121212]"
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
                  whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl p-6 shadow-sm"
                >
                  <h4 className="text-xs font-bold text-[#7A7A7A] uppercase tracking-wider mb-2">{card.label}</h4>
                  <p className="text-sm font-semibold text-[#121212]">
                    <EditableText
                      path={card.path}
                      fallback={card.value}
                      as="span"
                      className="text-sm font-semibold text-[#121212]"
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
