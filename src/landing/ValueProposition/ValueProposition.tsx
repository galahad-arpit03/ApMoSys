"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const values = [
  {
    title: "Expertise",
    description: "A storehouse of expertise in all areas of technology. Our specific knowledge and skill adds speed to the solutions."
  },
  {
    title: "Flexible",
    description: "Adaptable engagement models designed to align perfectly with your unique business requirements and team structures."
  },
  {
    title: "Reliable",
    description: "Consistent, high-quality delivery backed by robust SLAs, ensuring your critical systems are always performant."
  },
  {
    title: "Direction",
    description: "Strategic guidance to navigate complex digital transformations and adopt next-gen technologies securely."
  },
  {
    title: "Determination",
    description: "Relentless pursuit of zero-defect releases and operational excellence for every client we partner with."
  },
  {
    title: "Dedication",
    description: "A long-standing commitment to our clients' success, fostering relationships that span decades."
  }
];

export default function ValueProposition() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* LHS */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                Why <span className="text-blue-600">ApMoSys?</span>
              </h2>
              <div className="w-12 h-1 bg-blue-600 mb-6 rounded-md" />
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                When your mission relies on being ready for anything, you can rely on us. ApMoSys takes utmost care for evolving needs of clients with a proactive approach.
              </p>
              
              <div className="flex flex-col gap-4 bg-gray-50 p-6 border border-gray-100 rounded-md">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-900 font-bold">Domain Mastery</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-900 font-bold">Sustained Support</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-900 font-bold">Global Delivery</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RHS Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((val, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 p-8 rounded-md hover:border-blue-600/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <h3 className="text-gray-900 font-black text-xl mb-3 group-hover:text-blue-600 transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
