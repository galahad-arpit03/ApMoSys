"use client";
import React from "react";
import { motion } from "framer-motion";

export default function TechnicalCapabilities() {
  return (
    <section className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#FFFFFF] mb-12 leading-tight">
              Technical Capabilities Tailored for Scale
            </h2>
            
            <div className="space-y-6">
              {[
                { title: "API Architecture", desc: "Build resilient, fast, and scalable API gateways across multi-cloud environments." },
                { title: "Cloud Engineering", desc: "Native cloud orchestration optimized for AWS, Azure, and GCP efficiency." },
                { title: "DevSecOps", desc: "End-to-end security pipeline automation bridging the gap between dev and operations." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] p-6 rounded-lg flex items-start gap-5 hover:border-primary-red/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-md bg-primary-dark/30 flex items-center justify-center shrink-0 border border-primary-red/20">
                    <svg className="w-5 h-5 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#FFFFFF] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#A0A0A0] leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 lg:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#2A2A2A] bg-[#000000] aspect-[4/3] flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
              <div className="relative z-10 flex flex-col items-center p-8 bg-[#000000]/80 border border-[#3A3A3A] rounded-xl backdrop-blur-sm">
                 <div className="text-primary-red font-mono text-sm mb-4 tracking-widest uppercase">System Telemetry</div>
                 <div className="flex gap-4">
                   <div className="w-16 h-16 rounded-full border-4 border-[#3A3A3A] border-t-primary-red animate-spin"></div>
                   <div className="w-16 h-16 rounded-full border-4 border-[#3A3A3A] border-b-primary-red animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                 </div>
              </div>
            </motion.div>
            
            {/* Overlay badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-primary-red p-6 rounded-xl shadow-xl z-20"
            >
              <div className="font-heading text-3xl font-extrabold text-[#FFFFFF] mb-1">15+</div>
              <div className="text-xs font-semibold text-[#FFFFFF]/80 uppercase tracking-wider">Active Partners</div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
