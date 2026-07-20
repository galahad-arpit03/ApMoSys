"use client";
import React from "react";
import { motion } from "framer-motion";
import { benefitsData } from "./BenefitsSectionData";

export default function BenefitsSection() {
  const { heading, description, benefits } = benefitsData;

  return (
    <section className="py-16 lg:py-24 bg-[#FAFAFA] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header: Heading left, Description right */}
        <div className="mb-12 lg:mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-[1.1]">
              {heading}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-base lg:text-lg text-[#5A5A5A] leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="bg-white border border-gray-200 rounded-md p-8 hover:border-blue-600/40 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 rounded-md bg-blue-600/10 border border-blue-600/20 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <benefit.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-black mb-3 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-[#5A5A5A] text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}