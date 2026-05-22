"use client";
import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    title: "BFSI",
    description: "Banking, Financial Services, and Insurance. We ensure maximum security, fraud detection, and high-performance trading platform stability.",
    link: "EXPLORE FINANCIAL SOLUTIONS",
    icon: (
      <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3" />
      </svg>
    )
  },
  {
    title: "Retail & E-commerce",
    description: "Delivering seamless shopping experiences with zero downtime during peak seasonal traffic and flash sales.",
    link: "EXPLORE RETAIL SOLUTIONS",
    icon: (
      <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
  {
    title: "Manufacturing",
    description: "IoT integration and advanced predictive analytics for automated assembly lines and supply chain optimization.",
    link: "EXPLORE MANUFACTURING SOLUTIONS",
    icon: (
      <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Healthcare & Life Sciences",
    description: "HIPAA-compliant software testing and robust quality assurance for mission-critical medical devices and patient data systems.",
    link: "EXPLORE HEALTHCARE SOLUTIONS",
    icon: (
      <svg className="w-8 h-8 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  }
];

export default function IndustryGrid() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#FFFFFF] p-8 md:p-10 rounded-xl shadow-sm border border-[#E8E8E8] hover:shadow-md transition-shadow group flex flex-col h-full"
            >
              <div className="mb-6 bg-primary-soft w-16 h-16 rounded-xl flex items-center justify-center text-primary-red">
                {item.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#121212] mb-4">{item.title}</h3>
              <p className="text-[#4A4A4A] leading-relaxed mb-8 flex-grow">{item.description}</p>
              
              <div className="pt-6 border-t border-[#E8E8E8] mt-auto">
                <a href="#" className="inline-flex items-center text-xs font-bold text-[#121212] tracking-widest uppercase group-hover:text-primary-red transition-colors">
                  {item.link}
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
