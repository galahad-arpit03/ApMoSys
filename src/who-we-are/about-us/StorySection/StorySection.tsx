"use client";
import React from "react";
import { motion } from "framer-motion";
import { storyData } from "./StorySectionData";

export default function StorySection() {
  return (
    <section className="py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-semibold uppercase tracking-widest text-primary-red mb-6">
              <span className="w-2 h-2 rounded-full bg-primary-red" />
              Our Story
            </div> */}
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 tracking-tight mb-6">
              {storyData.heading.split(' ')[0]}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-red to-red-500">
                {storyData.heading.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className="text-gray-500 text-base leading-relaxed mb-8">
              {storyData.description}
            </p>
            <div className="h-1.5 w-16 bg-gradient-to-r from-primary-red to-red-400 rounded-full" />
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {storyData.cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.15, duration: 0.6 }}
                className="group bg-white p-8 lg:p-10 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 text-gray-400 font-bold text-xl group-hover:scale-110 group-hover:bg-gray-200 group-hover:text-black transition-all duration-300 shadow-inner">
                  0{idx + 1}
                </div>
                <h3 className="text-gray-900 font-bold text-xl mb-4">{card.title}</h3>
                <p className="text-gray-500 leading-relaxed">
                  {card.content}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
