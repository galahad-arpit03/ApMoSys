"use client";

import React from "react";
import { motion } from "framer-motion";

const industryStats = [
  { label: "Banking", count: 20 },
  { label: "Finance", count: 22 },
  { label: "Insurance", count: 14 },
  { label: "NBFC & Gateways", count: 12 },
  { label: "QSR", count: 3 },
  { label: "Manufacturing", count: 2 },
];

const clientLogos = [
  { name: "Mahindra Finance" },
  { name: "Edelweiss" },
  { name: "CEAT" },
  { name: "Tata AIA" },
  { name: "HDFC Bank" },
  { name: "Axis Bank" },
  { name: "SBI Life" },
];

export default function ClientLogos() {
  return (
    <section className="py-24 bg-white border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LHS - Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight"
            >
              Our Trusted <br/> <span className="text-blue-600">Enterprise Clients</span>
            </motion.h2>
            <div className="w-12 h-1 bg-blue-600 mb-6 rounded-md" />
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Delivering high-value engineering solutions to esteemed organizations across the globe. We request the privilege of including your name in this distinguished list.
            </motion.p>
          </div>

          {/* RHS - Content */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
              {industryStats.map((stat, idx) => (
                <motion.div 
                  key={idx} 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex flex-col p-6 bg-gray-50 border border-gray-100 rounded-md hover:border-blue-600/30 hover:shadow-lg transition-all duration-300"
                >
                  <span className="text-blue-600 font-black text-4xl tracking-tighter mb-2 font-mono">
                    {stat.count}
                  </span>
                  <span className="text-xs text-gray-500 font-bold uppercase tracking-widest leading-snug">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}