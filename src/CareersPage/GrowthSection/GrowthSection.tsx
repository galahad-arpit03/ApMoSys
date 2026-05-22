"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

export default function GrowthSection() {
  const perks = [
    {
      title: "Premium Healthcare",
      description: "Comprehensive medical, dental, and vision coverage for you and your dependents.",
      icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" // Heart
    },
    {
      title: "Learning Credits",
      description: "Annual budget for courses, certifications, conferences, and continuous education.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" // Book
    },
    {
      title: "Work Flexibility",
      description: "Hybrid and remote-friendly structures so you can work where you are most productive.",
      icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" // Globe/Flex
    },
    {
      title: "Pro Equipment",
      description: "Top-tier Mac or PC setup, plus a home office stipend to build your ideal workspace.",
      icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" // Monitor
    }
  ];

  return (
    <section className="bg-[#FAFAFA] text-[#121212] py-24 border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-4">
            Engineered for Your Growth.
          </h2>
          <p className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed">
            We invest heavily in our team's well-being and professional development. Here is what you get when you join our ranks.
          </p>
        </motion.div>

        {/* Perks Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.06)" }}
              transition={{ duration: 0.3 }}
              className="bg-[#FFFFFF] border border-[#E8E8E8] p-8 rounded-xl shadow-sm transition-all relative overflow-hidden group"
            >
              {/* Subtle top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-red opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="w-12 h-12 bg-primary-soft rounded-lg flex items-center justify-center text-primary-red mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={perk.icon} />
                </svg>
              </div>
              
              <h3 className="font-bold text-[#121212] text-lg mb-3">
                {perk.title}
              </h3>
              
              <p className="text-[#7A7A7A] text-sm leading-relaxed">
                {perk.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
