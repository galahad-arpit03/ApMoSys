"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Shield, Zap } from "lucide-react";
import { coreValuesData } from "./CoreValuesData";

const iconMap: any = {
  CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Shield: <Shield className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />
};

export default function CoreValues() {
  return (
    <section className="py-24 bg-[#FCF9F9] relative overflow-clip">
      {/* Decorative background circle */}
      <div className="absolute top-0 right-0 -mt-32 -mr-32 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column: Sticky Header */}
          <div className="lg:w-1/3">
            <div className="sticky top-32">
              {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100/50 border border-red-200 text-xs font-bold uppercase tracking-widest text-primary-red mb-6">
                <span className="w-2 h-2 rounded-full bg-primary-red" />
                Our Culture
              </div> */}
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
                Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-red-500">Values</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-8">
                These foundational principles shape every decision we make, guiding our engineering standards and defining our unyielding commitment to client success.
              </p>
              <div className="hidden lg:block w-full h-[1px] bg-gradient-to-r from-gray-200 to-transparent" />
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:w-2/3 flex flex-col gap-6">
            {coreValuesData.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative bg-white p-8 sm:p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
                  
                  {/* Icon Container */}
                  <div className="shrink-0 flex items-center justify-center w-14 h-14 rounded-xl bg-gray-50 text-gray-400 group-hover:bg-gray-200 group-hover:text-black transition-colors duration-300 shadow-inner">
                    {iconMap[value.icon]}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-sm font-black text-primary-red group-hover:text-primary-red transition-colors">
                        0{i + 1}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">
                        {value.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                      {value.desc}
                    </p>
                  </div>

                </div>

                {/* Subtle Hover Border Bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-0.25 bg-gradient-to-r from-primary-red to-red-400 opacity-0 group-hover:opacity-100 rounded-b-2xl transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
