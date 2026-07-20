"use client";

import React from "react";
import { motion } from "framer-motion";

const partners = [
  { name: "Dynatrace", role: "Certified Integrator", icon: "🌐" },
  { name: "Automation Anywhere", role: "RPA Partner", icon: "⚙️" },
  { name: "AppDynamics", role: "APM Specialist", icon: "📊" },
  { name: "MicroFocus", role: "Testing Alliance", icon: "🔍" },
];

export default function Partnerships() {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LHS */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">
              Strategic <br/> <span className="text-blue-600">Partnerships.</span>
            </h2>
            <div className="w-12 h-1 bg-blue-600 mb-6 rounded-md" />
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              We collaborate with the world&apos;s leading technology providers to ensure our clients have access to best-in-class tools and uninterrupted enterprise ecosystems.
            </p>
          </div>

          {/* RHS */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {partners.map((partner, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-gray-50 border border-gray-100 p-8 rounded-md hover:border-blue-600/30 hover:shadow-lg transition-all duration-300 group flex items-center gap-6"
                >
                  <div className="w-16 h-16 rounded-md bg-white border border-gray-200 flex items-center justify-center text-3xl shadow-sm group-hover:border-blue-600/20 transition-colors">
                    {partner.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-gray-500 text-sm font-medium">
                      {partner.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
