"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Shield, Zap } from "lucide-react";
import { coreValuesData } from "./CoreValuesData";

const iconMap: any = {
  CheckCircle2: <CheckCircle2 className="w-6 h-6 text-white" />,
  Cpu: <Cpu className="w-6 h-6 text-white" />,
  Shield: <Shield className="w-6 h-6 text-white" />,
  Zap: <Zap className="w-6 h-6 text-white" />
};

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
          <p className="text-gray-600 text-sm">
            These are the foundational principles that guide our decision-making, shape our culture, and define our commitment to our clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreValuesData.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="shrink-0 mt-1 bg-primary-red p-2 rounded-lg shadow-sm">
                {iconMap[value.icon]}
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
