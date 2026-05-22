"use client";

import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const services = [
  {
    id: "01",
    title: "Performance Engineering",
    description: "End-to-end performance testing and bottleneck analysis for high-volume enterprise applications to ensure sub-second response times.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z" // Lightning bolt
  },
  {
    id: "02",
    title: "Test Automation",
    description: "Robust, framework-agnostic automation suites for web, mobile, and APIs to accelerate release cycles with zero regression.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" // Check circle
  },
  {
    id: "03",
    title: "AIOps & Observability",
    description: "Proactive, AI-driven anomaly detection and log analytics to predict and resolve production incidents before they impact users.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" // Eye
  },
  {
    id: "04",
    title: "Security & VAPT",
    description: "Comprehensive Vulnerability Assessment and Penetration Testing to secure your architecture against emerging zero-day threats.",
    icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" // Lock
  },
  {
    id: "05",
    title: "Data Engineering",
    description: "Scalable ETL pipelines and data warehouse validation to ensure data integrity across complex analytics environments.",
    icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" // Database
  },
  {
    id: "06",
    title: "Digital Transformation",
    description: "Strategic consulting for cloud migration, DevOps maturity, and modernizing monolithic architectures into resilient microservices.",
    icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" // Server / Cloud
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-[#000000] text-[#FAFAFA] py-24 border-t border-[#1F1F1F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <motion.span variants={fadeUp} className="text-primary-red text-xs font-bold tracking-widest uppercase mb-4 block">
            Core Competencies
          </motion.span>
          <motion.h2 variants={fadeUp} className="font-heading text-4xl sm:text-5xl font-extrabold text-[#FFFFFF] mb-6 leading-tight">
            Enterprise Solutions.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#A0A0A0] text-lg leading-relaxed">
            From zero-defect automation pipelines to real-time predictive monitoring, 
            our services are engineered to scale with your business demands.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              whileHover={{ y: -8, backgroundColor: "#1F1F1F", borderColor: "#B40001" }}
              transition={{ duration: 0.3 }}
              className="group bg-[#121212] border border-[#3A3A3A] p-8 rounded-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-primary-red transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />
              
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 bg-[#1F1F1F] rounded-lg flex items-center justify-center text-primary-red group-hover:bg-primary-red group-hover:text-[#FFFFFF] transition-colors duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                  </svg>
                </div>
                <span className="text-4xl font-extrabold text-[#1F1F1F] group-hover:text-[#3A3A3A] transition-colors duration-300 font-heading">
                  {service.id}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-[#FFFFFF] mb-3 group-hover:text-[#FAFAFA]">
                {service.title}
              </h3>
              
              <p className="text-[#7A7A7A] text-sm leading-relaxed group-hover:text-[#C8C8C8] transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Invisible link overlay for entire card */}
              <a href="#" className="absolute inset-0 z-10">
                <span className="sr-only">Learn more about {service.title}</span>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary-red hover:text-[#D10000] font-bold text-sm tracking-widest uppercase transition-colors"
          >
            Discuss Your Architecture
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
        
      </div>
    </section>
  );
}
