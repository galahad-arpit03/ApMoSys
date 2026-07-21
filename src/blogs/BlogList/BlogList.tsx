"use client";
import { bloglistData } from "./BlogListData";

import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import { useBlogStore } from "@/src/admin/store/adminStore";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";


const pageTransition: Variants = {
  initial: { opacity: 0, x: 15 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, x: -15, transition: { duration: 0.25, ease: "easeIn" } },
};

export default function BlogList() {
  const router = useRouter();
  const { blogs } = useBlogStore();

  // Load only published blogs
  const publishedBlogs = blogs.filter((b) => b.published);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const totalPages = Math.ceil(publishedBlogs.length / postsPerPage);

  // Slice for current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = publishedBlogs.slice(indexOfFirstPost, indexOfLastPost);

  // Recent blogs for sidebar (up to 3)
  const recentBlogs = [...publishedBlogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const handleCardClick = (slug: string) => {
    router.push(`/blogs/${slug}`);
  };

  return (
    <SectionThemeWrapper sectionId="blogs_list" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section
            className={`overflow-hidden min-h-screen transition-colors duration-300 ${
              isDark ? "bg-[#0A1128] text-white" : "bg-white text-slate-900"
            }`}
          >
            
            {/* Category / Search Bar */}
            <div className={`border-b sticky top-0 backdrop-blur-md z-40 transition-colors duration-300 ${
              isDark ? "border-[#1F2C47] bg-[#0A1128]/90" : "border-gray-200 bg-white/90"
            }`}>
              <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
                  
                  <div className="flex overflow-x-auto hide-scrollbar gap-8">
                    <a href="#" className={`whitespace-nowrap text-base font-bold border-b-2 pb-1.5 ${
                      isDark ? "text-white border-[#2563EB]" : "text-slate-900 border-[#2563EB]"
                    }`}>
                      All Resources
                    </a>
                    <a href="#" className={`whitespace-nowrap text-[15px] font-medium transition-colors pb-1.5 ${
                      isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-slate-900"
                    }`}>
                      Software Engineering
                    </a>
                    <a href="#" className={`whitespace-nowrap text-[15px] font-medium transition-colors pb-1.5 ${
                      isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-slate-900"
                    }`}>
                      AI Automation
                    </a>
                    <a href="#" className={`whitespace-nowrap text-[15px] font-medium transition-colors pb-1.5 ${
                      isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-slate-900"
                    }`}>
                      Digital Transformation
                    </a>
                    <a href="#" className={`whitespace-nowrap text-[15px] font-medium transition-colors pb-1.5 ${
                      isDark ? "text-gray-400 hover:text-white" : "text-gray-500 hover:text-slate-900"
                    }`}>
                      DevSecOps
                    </a>
                  </div>

                  <div className="relative w-full md:w-64">
                    <svg className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                      isDark ? "text-gray-600" : "text-gray-400"
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                      type="text" 
                      placeholder="Search technical intelligence..." 
                      className={`w-full border rounded-md pl-10 pr-4 py-3 text-[15px] focus:outline-none focus:border-[#2563EB] transition-colors ${
                        isDark ? "bg-[#1A233A] border-[#1F2C47] text-white placeholder-[#5A5A5A]" : "bg-gray-50 border-gray-200 text-slate-900 placeholder-[#A0A0A0]"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="w-full max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 py-12 lg:py-16">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                
                {/* Left Grid: Latest Intelligence */}
                <div className="col-span-8 mb-16 lg:mb-0">
                  <h3 className={`font-heading font-normal text-5xl lg:text-6xl tracking-tight mb-10 ${isDark ? "text-white" : "text-slate-900"}`}>
                    Latest Intelligence
                  </h3>
                  
                  {publishedBlogs.length === 0 ? (
                    <div className={`text-center py-20 border rounded-xl transition-colors ${
                      isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                    }`}>
                      <p className={`${isDark ? "text-gray-400" : "text-gray-500"} text-base`}>
                        No published articles available.
                      </p>
                    </div>
                  ) : (
                    <>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentPage}
                          variants={pageTransition}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                        >
                          {currentPosts.map((post) => (
                            <div
                              key={post.id}
                              onClick={() => handleCardClick(post.slug)}
                              className="group cursor-pointer flex flex-col h-full"
                            >
                              <div className={`rounded-lg overflow-hidden border aspect-video mb-5 relative transition-colors ${
                                isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                              }`}>
                                {post.coverImage ? (
                                  <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover transition-transform duration-500"
                                  />
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#121212] to-[#222222]">
                                    <svg className="w-8 h-8 text-[#3A3A3A] group-hover:text-[#2563EB] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                              
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-[#2563EB] text-xs font-bold uppercase tracking-widest">{post.tag}</span>
                                <span className={`text-[13px] font-medium ${isDark ? "text-gray-400" : "text-gray-400"}`}>{post.readTime}</span>
                              </div>
                              
                              <h4 className={`font-heading font-semibold text-2xl sm:text-[26px] leading-[1.2] transition-colors mb-4 line-clamp-2 ${
                                isDark ? "text-white" : "text-slate-900"
                              }`}>
                                {post.title}
                              </h4>
                              
                              <p className={`text-[15px] leading-relaxed mb-6 line-clamp-2 ${
                                isDark ? "text-gray-400" : "text-gray-500"
                              }`}>
                                {post.excerpt}
                              </p>
                              
                              <div className="mt-auto flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border flex-shrink-0 transition-colors ${
                                  isDark ? "bg-[#2563EB]/20 text-[#2563EB] border-[#2563EB]/30" : "bg-[#2563EB]/10 text-[#2563EB] border-[#2563EB]/20"
                                }`}>
                                  {post.author.charAt(0)}
                                </div>
                                <div>
                                  <p className={`text-[13px] font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{post.author}</p>
                                  <p className={`text-[11px] uppercase tracking-wider ${isDark ? "text-gray-400" : "text-gray-500"}`}>{post.date}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>

                      {/* Pagination Controls */}
                      {totalPages > 1 && (
                        <div className={`flex items-center justify-center gap-2 mt-12 pt-8 border-t transition-colors ${
                          isDark ? "border-[#1F2C47]" : "border-gray-200"
                        }`}>
                          <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 text-sm font-semibold rounded-md border disabled:opacity-40 transition-all cursor-pointer ${
                              isDark ? "border-[#1F2C47] text-gray-400 hover:text-white hover:border-[#FFFFFF]" : "border-gray-200 text-gray-600 hover:text-slate-900 hover:border-[#121212]"
                            }`}
                          >
                            Previous
                          </button>
                          
                          <div className="flex items-center gap-1.5">
                            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                              <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`w-9 h-9 text-sm font-bold rounded-md flex items-center justify-center transition-all cursor-pointer ${
                                  currentPage === page
                                    ? "bg-[#2563EB] text-white"
                                    : `border transition-colors ${
                                        isDark ? "border-[#1F2C47] text-gray-400 hover:text-white hover:border-[#FFFFFF]" : "border-gray-200 text-gray-600 hover:text-slate-900 hover:border-[#121212]"
                                      }`
                                }`}
                              >
                                {page}
                              </button>
                            ))}
                          </div>

                          <button
                            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 text-sm font-semibold rounded-md border disabled:opacity-40 transition-all cursor-pointer ${
                              isDark ? "border-[#1F2C47] text-gray-400 hover:text-white hover:border-[#FFFFFF]" : "border-gray-200 text-gray-600 hover:text-slate-900 hover:border-[#121212]"
                            }`}
                          >
                            Next
                          </button>
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* Right Sidebar */}
                <div className={`col-span-4 lg:pl-6 lg:border-l transition-colors ${
                  isDark ? "border-[#1F2C47]" : "border-gray-200"
                }`}>
                  
                  {/* Trending Topics */}
                  <div className="mb-12">
                    <h3 className={`font-bold text-[15px] uppercase tracking-widest mb-6 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}>
                      Trending Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["#Kubernetes Scaling", "#Generative AI QA", "#CloudFinOps", "#Observability", "#ChaosEngineering"].map((tag) => (
                        <a
                          key={tag}
                          href="#"
                          className={`border hover:border-[#2563EB] hover:text-[#2563EB] text-[13px] font-medium px-4 py-2 rounded-md transition-colors ${
                            isDark ? "bg-[#1A233A] border-[#1F2C47] text-gray-400" : "bg-gray-50 border-gray-200 text-gray-600"
                          }`}
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Recently Published */}
                  <div>
                    <h3 className={`font-bold text-[15px] uppercase tracking-widest mb-6 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}>
                      Recently Published
                    </h3>
                    
                    <div className={`border rounded-xl p-6 transition-colors ${
                      isDark ? "bg-[#1A233A] border-[#1F2C47]" : "bg-gray-50 border-gray-200"
                    }`}>
                      {recentBlogs.length === 0 ? (
                        <p className="text-[13px] text-gray-500 text-center">No posts published recently.</p>
                      ) : (
                        recentBlogs.map((post, idx) => (
                          <div
                            key={post.id}
                            onClick={() => handleCardClick(post.slug)}
                            className={`cursor-pointer ${
                              idx > 0 
                                ? (isDark ? "border-t border-[#1F2C47] pt-6 mt-6" : "border-t border-gray-200 pt-6 mt-6") 
                                : ""
                            }`}
                          >
                            <span className="text-[#2563EB] text-xs font-bold uppercase tracking-wider block mb-2">
                              {post.date}
                            </span>
                            <h4 className={`font-normal transition-colors text-base leading-snug ${
                              isDark ? "text-white" : "text-slate-900"
                            }`}>
                              {post.title}
                            </h4>
                          </div>
                        ))
                      )}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
