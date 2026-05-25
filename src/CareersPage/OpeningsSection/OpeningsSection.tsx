"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";

export default function OpeningsSection() {
  const [activeCategory, setActiveCategory] = useState("All Roles");

  // Get dynamic jobs from the persistent Zustand store
  const jobs = useContentStore((state) => state.content.careers.jobs) || [];
  const addCareerJob = useContentStore((state) => state.addCareerJob);
  const deleteCareerJob = useContentStore((state) => state.deleteCareerJob);

  // Check admin mode based on routing namespace
  const isAdmin = typeof window !== "undefined" && window.location.pathname.startsWith("/administrator");

  // Dynamically compute departments / categories from existing jobs to keep it scalable and expandable
  const departmentsSet = new Set<string>();
  jobs.forEach(job => {
    if (job.department) {
      departmentsSet.add(job.department);
    }
  });
  const categories = ["All Roles", ...Array.from(departmentsSet)];

  const filteredJobs = activeCategory === "All Roles" 
    ? jobs 
    : jobs.filter(job => job.department.toLowerCase().trim() === activeCategory.toLowerCase().trim());

  return (
    <section id="openings" className="bg-[#FAFAFA] text-[#121212] py-24 border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div className="flex-1">
            <EditableText
              path="careers.openings.heading"
              fallback="Current Openings"
              as="h2"
              className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-3 block"
            />
            <EditableText
              path="careers.openings.subheading"
              fallback="Find your next role in high-performance engineering."
              as="p"
              className="text-[#5A5A5A] text-sm block"
            />
          </div>

          <div className="flex flex-col items-start md:items-end gap-4">
            {isAdmin && (
              <button
                onClick={() => addCareerJob()}
                className="bg-primary-red hover:bg-primary-hover text-[#FFFFFF] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md flex items-center gap-2 shadow-md transition-all self-start md:self-auto cursor-pointer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                Add Job Posting
              </button>
            )}

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border cursor-pointer ${
                    activeCategory === cat
                      ? "bg-[#121212] text-[#FFFFFF] border-[#121212]"
                      : "bg-transparent text-[#5A5A5A] border-[#C8C8C8] hover:border-[#121212] hover:text-[#121212]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Job List */}
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job, idx) => {
              // Find index in global jobs array to map correct state paths
              const globalIndex = jobs.findIndex((j) => j.id === job.id);
              if (globalIndex === -1) return null;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  transition={{ duration: 0.3 }}
                  key={job.id}
                  className="bg-[#FFFFFF] border border-[#E8E8E8] rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-lg transition-shadow group relative"
                >
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <EditableText
                        path={`careers.jobs.${globalIndex}.title`}
                        fallback={job.title}
                        as="h3"
                        className="text-xl font-bold text-[#121212] group-hover:text-primary-red transition-colors inline-block"
                      />
                      <EditableText
                        path={`careers.jobs.${globalIndex}.type`}
                        fallback={job.type}
                        as="span"
                        className="bg-primary-soft text-primary-red text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm whitespace-nowrap flex-shrink-0"
                      />
                    </div>
                    <div className="flex flex-wrap items-center gap-1.5 text-[#7A7A7A] text-sm">
                      <EditableText
                        path={`careers.jobs.${globalIndex}.department`}
                        fallback={job.department}
                        as="span"
                        className="font-semibold text-[#5A5A5A]"
                      />
                      <span>·</span>
                      <EditableText
                        path={`careers.jobs.${globalIndex}.location`}
                        fallback={job.location}
                        as="span"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <motion.a
                      href="#apply"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block bg-[#121212] hover:bg-primary-red text-white font-bold px-8 py-3 rounded-md text-sm transition-colors text-center"
                    >
                      Apply Now
                    </motion.a>

                    {isAdmin && (
                      <button
                        onClick={() => deleteCareerJob(job.id)}
                        className="p-3 bg-red-600/10 hover:bg-red-600 text-red-600 hover:text-white rounded-md transition-colors shadow-sm flex items-center justify-center cursor-pointer"
                        title="Delete Job posting"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
            
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
