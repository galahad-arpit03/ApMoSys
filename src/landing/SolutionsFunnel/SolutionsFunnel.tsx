"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { solutionsServicesData, solutionsProductsData } from "./SolutionsFunnelData";
import { ArrowRight, Box, Layers } from "lucide-react";

export default function SolutionsFunnel() {
  const [activeTab, setActiveTab] = useState<"services" | "products">("services");

  const currentData = activeTab === "services" ? solutionsServicesData : solutionsProductsData;

  return (
    <section className="py-12 bg-[#0A1128] border-b border-[#1A264A] relative overflow-hidden">

      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
        
        {/* Top Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight whitespace-nowrap">
            Comprehensive <span className="text-[#B40001]">Enterprise Solutions.</span>
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Whether you need dedicated engineering teams or proprietary AI-driven platforms, ApMoSys provides the precise architecture to accelerate your digital transformation.
          </p>
        </div>

        {/* Centered Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center p-1.5 bg-[#121B38] border border-[#1A264A] rounded-lg shadow-inner">
            <button
              onClick={() => setActiveTab("services")}
              className={`flex items-center gap-3 px-8 py-3 rounded-md font-bold transition-all duration-300 ${
                activeTab === "services"
                  ? "bg-[#B40001] text-white shadow-[0_4px_15px_rgba(180,0,1,0.3)]"
                  : "bg-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              <Layers className="w-5 h-5" />
              <span>Our Services</span>
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`flex items-center gap-3 px-8 py-3 rounded-md font-bold transition-all duration-300 ${
                activeTab === "products"
                  ? "bg-[#B40001] text-white shadow-[0_4px_15px_rgba(180,0,1,0.3)]"
                  : "bg-transparent text-gray-500 hover:text-gray-300"
              }`}
            >
              <Box className="w-5 h-5" />
              <span>ApMoSys Innovations</span>
            </button>
          </div>
        </div>

        {/* Solutions Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {currentData.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group flex flex-col bg-[#121B38] border border-[#1A264A] rounded-lg hover:border-[#243461] transition-all duration-300 cursor-pointer overflow-hidden shadow-sm hover:shadow-xl"
              >
                {/* Image Section (with sleek fallback gradient) */}
                <div className="w-full h-48 bg-gradient-to-br from-[#1A264A] to-[#0D0D0D] relative overflow-hidden">
                  {/* The actual image - if it fails or is missing, the gradient above shows. */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${item.image})` }}
                  />
                  {/* Subtle vignette overlay to blend with dark mode */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121B38] to-transparent opacity-80" />
                  
                  {/* Quick Action Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-[#0A1128]/40 backdrop-blur-md border border-white/10 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ArrowRight className="w-5 h-5 text-white -rotate-45" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Decorative line */}
                  <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-[#B40001]/0 via-[#B40001]/50 to-[#B40001]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B40001] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                    {item.desc}
                  </p>
                  
                  <div className="mt-6 flex items-center text-[#B40001] font-bold text-sm">
                    Learn more <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
