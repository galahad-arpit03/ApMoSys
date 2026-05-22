"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    id: 1,
    title: "Senior Quality Engineer",
    department: "Engineering",
    location: "Pune, Maharashtra - Hybrid",
    type: "Full-time",
  },
  {
    id: 2,
    title: "AIOps Automation Lead",
    department: "Automation",
    location: "Bhubaneswar, Odisha - Hybrid",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Enterprise Solution Engineer",
    department: "Engineering",
    location: "UAE - On-site",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Technical Architect",
    department: "Architecture",
    location: "Navi Mumbai, Maharashtra - Hybrid",
    type: "Full-time",
  },
];

const categories = ["All Roles", "Engineering", "Automation", "Architecture"];

export default function OpeningsSection() {
  const [activeCategory, setActiveCategory] = useState("All Roles");

  const filteredJobs = activeCategory === "All Roles" 
    ? jobs 
    : jobs.filter(job => job.department === activeCategory);

  return (
    <section id="openings" className="bg-[#FAFAFA] text-[#121212] py-24 border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-3">
              Current Openings
            </h2>
            <p className="text-[#5A5A5A] text-sm">
              Find your next role in high-performance engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border ${
                  activeCategory === cat
                    ? "bg-[#121212] text-[#FFFFFF] border-[#121212]"
                    : "bg-transparent text-[#5A5A5A] border-[#C8C8C8] hover:border-[#121212] hover:text-[#121212]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Job List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.3 }}
                key={job.id}
                className="bg-[#FFFFFF] border border-[#E8E8E8] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#121212] group-hover:text-primary-red transition-colors">
                      {job.title}
                    </h3>
                    <span className="bg-primary-soft text-primary-red text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm whitespace-nowrap flex-shrink-0">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-[#7A7A7A] text-sm">
                    {job.department} · {job.location}
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <motion.a
                    href="#apply"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-[#121212] hover:bg-primary-red text-white font-bold px-8 py-3 rounded-md text-sm transition-colors"
                  >
                    Apply Now
                  </motion.a>
                </div>
              </motion.div>
            ))}
            
            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-[#7A7A7A]"
              >
                No openings found for this category. Check back later!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
      </div>
    </section>
  );
}
