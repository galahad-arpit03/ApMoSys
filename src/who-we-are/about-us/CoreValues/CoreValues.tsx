"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Cpu, Shield, Zap } from "lucide-react";
import { coreValuesData } from "./CoreValuesData";

const iconMap: any = {
  CheckCircle2: <CheckCircle2 className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Zap: <Zap className="w-8 h-8" />
};

export default function CoreValues() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 md:w-2/3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-semibold uppercase tracking-widest text-primary-red mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-red" />
            Our Core Values
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Principles that define our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-red-400">Excellence.</span>
          </h2>
        </div>

        <div className="border-t border-gray-200">
          {coreValuesData.map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative border-b border-gray-200 py-6 lg:py-8 transition-colors duration-500 hover:bg-gray-50/50"
            >
              {/* Animated Accent Line */}
              <div className="absolute bottom-[-1px] left-0 h-[1px] bg-primary-red transition-all duration-500" 
                   style={{ width: hoveredIndex === i ? '100%' : '0%' }} />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-12 items-center">
                
                {/* Number & Icon */}
                <div className="md:col-span-3 flex items-center gap-5">
                  <div className="text-3xl font-black text-gray-200 group-hover:text-primary-red transition-colors duration-500">
                    0{i + 1}
                  </div>
                  <div className="text-gray-400 group-hover:text-primary-red transition-colors duration-500">
                    {iconMap[value.icon]}
                  </div>
                </div>

                {/* Title */}
                <div className="md:col-span-4">
                  <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:translate-x-2 transition-transform duration-500">
                    {value.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="md:col-span-5">
                  <p className="text-gray-500 text-sm lg:text-base leading-relaxed">
                    {value.desc}
                  </p>
                </div>
                
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
