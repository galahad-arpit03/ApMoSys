"use client";
import React from "react";
import { motion } from "framer-motion";
import { storyData } from "./StorySectionData";

export default function StorySection() {
  return (
    <section className="pt-10 pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{storyData.heading}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {storyData.description}
            </p>
            <div className="h-1 w-12 bg-primary-red rounded-full" />
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {storyData.cards.map((card, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm"
              >
                <h3 className="text-gray-900 font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
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
