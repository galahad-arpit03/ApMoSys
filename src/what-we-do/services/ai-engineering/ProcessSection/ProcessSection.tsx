"use client";
import React from "react";
import { motion } from "framer-motion";
import { processData } from "./ProcessSectionData";

export default function ProcessSection() {
  const { heading, steps } = processData;

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          {/* <span className="text-blue-600 uppercase tracking-[0.25em] text-xs font-semibold">
            Our Process
          </span> */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black mt-4">
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Connector Line (Desktop) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-gray-200" />
              )}

              <div className="w-20 h-20 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 font-heading text-2xl font-bold mb-6">
                {String(idx + 1).padStart(2, "0")}
              </div>

              <h3 className="text-lg font-bold text-black mb-3">{step.title}</h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}