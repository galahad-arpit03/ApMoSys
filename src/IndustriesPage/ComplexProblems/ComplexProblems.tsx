"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ComplexProblems() {
  return (
    <section className="py-16 pb-24 border-b border-[#E8E8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-extrabold text-[#121212] mb-16">
          Complex Problems. <span className="text-primary-red">Precise Solutions.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Legacy Migration",
              desc: "Seamlessly transition from monolithic to microservices with zero operational downtime."
            },
            {
              title: "Core Silos",
              desc: "Intelligently connect and standardize data architectures across fragmented global systems."
            },
            {
              title: "Real-time Observability",
              desc: "Full stack monitoring to proactively identify and resolve bottlenecks before they impact users."
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative pl-6 border-l-2 border-primary-red/30 hover:border-primary-red transition-colors"
            >
              <h3 className="font-heading text-xl font-bold text-[#121212] mb-3">{item.title}</h3>
              <p className="text-[#4A4A4A] leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
