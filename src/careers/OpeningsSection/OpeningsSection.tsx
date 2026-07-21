"use client";
import { openingssectionData } from "./OpeningsSectionData";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const getBorderClasses = (idx: number, total: number) => {
  if (idx < total - 1) return "border-b ";
  return "";
};

export default function OpeningsSection() {
  const [activeCategory, setActiveCategory] = useState("All Roles");

  // Check admin mode based on routing namespace
  const isAdmin = typeof window !== "undefined" && window.location.pathname.startsWith("/administrator");

  // Get dynamic jobs from the persistent Zustand store
  const storeJobs = useContentStore((state) => state.content.careers?.jobs) || [];
  const addCareerJob = useContentStore((state) => state.addCareerJob);
  const deleteCareerJob = useContentStore((state) => state.deleteCareerJob);

  // Fallback jobs if the store is empty (so the user sees the requested data)
  const defaultJobs = [
    {
      id: "job-1",
      title: "Senior Quality Engineer",
      type: "Full-Time",
      department: "Engineering",
      location: "Navi Mumbai, India (Hybrid)",
      experience: "5+ Years",
      link: "#"
    },
    {
      id: "job-2",
      title: "DevSecOps Architect",
      type: "Full-Time",
      department: "Operations",
      location: "Remote (Global)",
      experience: "8+ Years",
      link: "#"
    },
    {
      id: "job-3",
      title: "Lead SDET (Playwright/Go)",
      type: "Full-Time",
      department: "Engineering",
      location: "Navi Mumbai, India (Hybrid)",
      experience: "6+ Years",
      link: "#"
    }
  ];

  const jobs = storeJobs.length > 0 ? storeJobs : defaultJobs;

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
    <SectionThemeWrapper sectionId="careers_openings" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section id="openings" className={`py-12 lg:py-16 border-t transition-colors duration-300 overflow-hidden ${
            isDark ? "bg-[#0A1128] border-[#1F2C47] text-white" : "bg-white border-gray-200 text-gray-900"
          }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              
              {/* Header - LHS/RHS Split */}
              <div className="mb-8 lg:mb-12 flex flex-col lg:flex-row lg:items-start justify-between gap-8">
                {/* Left Side: Heading */}
                <div className="shrink-0 lg:max-w-xl">
                  <EditableText
                    path="careers.openings.heading"
                    fallback="Current Openings"
                    as="h2"
                    className={`font-heading text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] block ${
                      isDark ? "text-white" : "text-gray-900"
                    }`}
                  />
                </div>

                {/* Right Side: Paragraph */}
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <EditableText
                    path="careers.openings.subheading"
                    fallback="Find your next role in high-performance engineering."
                    as="p"
                    className={`text-lg sm:text-xl leading-relaxed lg:text-left block ${
                      isDark ? "text-gray-300" : "text-gray-600"
                    }`}
                    multiline
                  />
                </div>
              </div>

              {/* Filters & Admin Actions */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border cursor-pointer ${
                           activeCategory === cat
                             ? (isDark ? "bg-white text-black border-white" : "bg-gray-900 text-white border-gray-900")
                             : (isDark ? "bg-transparent text-gray-400 border-gray-600 hover:border-white hover:text-white" : "bg-transparent text-gray-500 border-gray-300 hover:border-gray-900 hover:text-gray-900")
                        }`}
                      >
                        {cat}
                      </button>
                  ))}
                </div>
                {isAdmin && (
                  <button
                    onClick={() => addCareerJob()}
                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-md flex items-center gap-2 transition-colors shrink-0 cursor-pointer"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                    Add Job Posting
                  </button>
                )}
              </div>

              {/* Job List Tabular */}
              <div className={`flex flex-col w-full border-t border-b ${isDark ? "border-[#1F2C47]" : "border-gray-200"}`}>
                <AnimatePresence mode="wait">
                  {filteredJobs.map((job, idx) => {
                    const globalIndex = jobs.findIndex((j) => j.id === job.id);
                    if (globalIndex === -1) return null;

                    return (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        key={job.id}
                        className={`group py-6 px-4 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 transition-colors ${
                           isDark ? "hover:bg-[#121B31]/50 border-[#1F2C47]" : "hover:bg-gray-100/50 border-gray-200"
                        } ${getBorderClasses(idx, filteredJobs.length)}`}
                      >
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <EditableText
                              path={`careers.jobs.${globalIndex}.title`}
                              fallback={job.title}
                              as="h3"
                              className={`text-xl font-bold transition-colors inline-block ${
                                isDark ? "text-white" : "text-gray-900"
                              }`}
                            />
                            <EditableText
                              path={`careers.jobs.${globalIndex}.type`}
                              fallback={job.type}
                              as="span"
                              className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm whitespace-nowrap flex-shrink-0 ${
                                isDark ? "bg-blue-600/10 text-blue-400" : "bg-blue-50 text-blue-600"
                              }`}
                            />
                          </div>
                          <div className={`flex flex-wrap items-center gap-1.5 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>
                            <EditableText
                              path={`careers.jobs.${globalIndex}.department`}
                              fallback={job.department}
                              as="span"
                              className={`font-semibold ${isDark ? "text-gray-300" : "text-gray-700"}`}
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
                          <a
                            href="#apply"
                            className={`inline-block font-bold px-8 py-3 rounded-md text-sm transition-colors text-center cursor-pointer ${
                               isDark ? "bg-white hover:bg-gray-200 text-black" : "bg-gray-900 hover:bg-black text-white"
                            }`}
                          >
                            Apply Now
                          </a>

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
      }}
    </SectionThemeWrapper>
  );
}
