"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useBlogStore } from "@/src/admin/store/adminStore";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

const pageTransition: any = {
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
              isDark ? "bg-[#121212] text-[#FAFAFA]" : "bg-[#FFFFFF] text-[#121212]"
            }`}
          >
            
            {/* Category / Search Bar */}
            <div className={`border-b sticky top-0 backdrop-blur-md z-40 transition-colors duration-300 ${
              isDark ? "border-[#2A2A2A] bg-[#121212]/90" : "border-[#E8E8E8] bg-[#FFFFFF]/90"
            }`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
                  
                  <div className="flex overflow-x-auto hide-scrollbar gap-8">
                    <a href="#" className={`whitespace-nowrap text-sm font-bold border-b-2 pb-1 ${
                      isDark ? "text-[#FFFFFF] border-primary-red" : "text-[#121212] border-primary-red"
                    }`}>
                      All Resources
                    </a>
                    <a href="#" className={`whitespace-nowrap text-sm font-medium transition-colors pb-1 ${
                      isDark ? "text-[#A0A0A0] hover:text-[#FFFFFF]" : "text-[#7A7A7A] hover:text-[#121212]"
                    }`}>
                      Software Engineering
                    </a>
                    <a href="#" className={`whitespace-nowrap text-sm font-medium transition-colors pb-1 ${
                      isDark ? "text-[#A0A0A0] hover:text-[#FFFFFF]" : "text-[#7A7A7A] hover:text-[#121212]"
                    }`}>
                      AI Automation
                    </a>
                    <a href="#" className={`whitespace-nowrap text-sm font-medium transition-colors pb-1 ${
                      isDark ? "text-[#A0A0A0] hover:text-[#FFFFFF]" : "text-[#7A7A7A] hover:text-[#121212]"
                    }`}>
                      Digital Transformation
                    </a>
                    <a href="#" className={`whitespace-nowrap text-sm font-medium transition-colors pb-1 ${
                      isDark ? "text-[#A0A0A0] hover:text-[#FFFFFF]" : "text-[#7A7A7A] hover:text-[#121212]"
                    }`}>
                      DevSecOps
                    </a>
                  </div>

                  <div className="relative w-full md:w-64">
                    <svg className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                      isDark ? "text-[#5A5A5A]" : "text-[#A0A0A0]"
                    }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                      type="text" 
                      placeholder="Search technical intelligence..." 
                      className={`w-full border rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary-red transition-colors ${
                        isDark ? "bg-[#1F1F1F] border-[#3A3A3A] text-[#FAFAFA] placeholder-[#5A5A5A]" : "bg-[#FAFAFA] border-[#E8E8E8] text-[#121212] placeholder-[#A0A0A0]"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
              <div className="lg:grid lg:grid-cols-12 lg:gap-12">
                
                {/* Left Grid: Latest Intelligence */}
                <div className="col-span-8 mb-16 lg:mb-0">
                  <h3 className={`font-heading font-bold text-lg mb-8 ${isDark ? "text-[#FFFFFF]" : "text-[#121212]"}`}>
                    Latest Intelligence
                  </h3>
                  
                  {publishedBlogs.length === 0 ? (
                    <div className={`text-center py-20 border rounded-xl transition-colors ${
                      isDark ? "bg-[#1F1F1F] border-[#3A3A3A]" : "bg-[#FAFAFA] border-[#E8E8E8]"
                    }`}>
                      <p className={`${isDark ? "text-[#A0A0A0]" : "text-[#7A7A7A]"} text-base`}>
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
                                isDark ? "bg-[#1F1F1F] border-[#3A3A3A]" : "bg-[#FAFAFA] border-[#E8E8E8]"
                              }`}>
                                {post.coverImage ? (
                                  <img
                                    src={post.coverImage}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                ) : (
                                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#121212] to-[#222222]">
                                    <svg className="w-8 h-8 text-[#3A3A3A] group-hover:text-primary-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                  </div>
                                )}
                              </div>
                              
                              <div className="flex items-center justify-between mb-3">
                                <span className="text-primary-red text-[10px] font-bold uppercase tracking-widest">{post.tag}</span>
                                <span className={`text-xs font-medium ${isDark ? "text-[#888888]" : "text-[#A0A0A0]"}`}>{post.readTime}</span>
                              </div>
                              
                              <h4 className={`font-heading font-bold text-xl group-hover:text-primary-red transition-colors mb-4 line-clamp-2 ${
                                isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                              }`}>
                                {post.title}
                              </h4>
                              
                              <p className={`text-sm leading-relaxed mb-6 line-clamp-2 ${
                                isDark ? "text-[#A0A0A0]" : "text-[#7A7A7A]"
                              }`}>
                                {post.excerpt}
                              </p>
                              
                              <div className="mt-auto flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border flex-shrink-0 transition-colors ${
                                  isDark ? "bg-primary-red/20 text-primary-red border-primary-red/30" : "bg-primary-red/10 text-primary-red border-primary-red/20"
                                }`}>
                                  {post.author.charAt(0)}
                                </div>
                                <div>
                                  <p className={`text-xs font-bold ${isDark ? "text-[#FFFFFF]" : "text-[#121212]"}`}>{post.author}</p>
                                  <p className={`text-[10px] uppercase tracking-wider ${isDark ? "text-[#888888]" : "text-[#7A7A7A]"}`}>{post.date}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      </AnimatePresence>

                      {/* Pagination Controls */}
                      {totalPages > 1 && (
                        <div className={`flex items-center justify-center gap-2 mt-12 pt-8 border-t transition-colors ${
                          isDark ? "border-[#2A2A2A]" : "border-[#E8E8E8]"
                        }`}>
                          <button
                            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 text-sm font-semibold rounded-md border disabled:opacity-40 transition-all cursor-pointer ${
                              isDark ? "border-[#3A3A3A] text-[#A0A0A0] hover:text-[#FFFFFF] hover:border-[#FFFFFF]" : "border-[#E8E8E8] text-[#5A5A5A] hover:text-[#121212] hover:border-[#121212]"
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
                                    ? "bg-primary-red text-white"
                                    : `border transition-colors ${
                                        isDark ? "border-[#3A3A3A] text-[#A0A0A0] hover:text-[#FFFFFF] hover:border-[#FFFFFF]" : "border-[#E8E8E8] text-[#5A5A5A] hover:text-[#121212] hover:border-[#121212]"
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
                              isDark ? "border-[#3A3A3A] text-[#A0A0A0] hover:text-[#FFFFFF] hover:border-[#FFFFFF]" : "border-[#E8E8E8] text-[#5A5A5A] hover:text-[#121212] hover:border-[#121212]"
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
                  isDark ? "border-[#2A2A2A]" : "border-[#E8E8E8]"
                }`}>
                  
                  {/* Trending Topics */}
                  <div className="mb-12">
                    <h3 className={`font-heading font-bold text-sm uppercase tracking-widest mb-6 ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}>
                      Trending Topics
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {["#Kubernetes Scaling", "#Generative AI QA", "#CloudFinOps", "#Observability", "#ChaosEngineering"].map((tag) => (
                        <a
                          key={tag}
                          href="#"
                          className={`border hover:border-primary-red hover:text-primary-red text-xs font-medium px-3 py-1.5 rounded-md transition-colors ${
                            isDark ? "bg-[#1F1F1F] border-[#3A3A3A] text-[#A0A0A0]" : "bg-[#FAFAFA] border-[#E8E8E8] text-[#5A5A5A]"
                          }`}
                        >
                          {tag}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Recently Published */}
                  <div>
                    <h3 className={`font-heading font-bold text-sm uppercase tracking-widest mb-6 ${
                      isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                    }`}>
                      Recently Published
                    </h3>
                    
                    <div className={`border rounded-xl p-6 transition-colors ${
                      isDark ? "bg-[#1F1F1F] border-[#3A3A3A]" : "bg-[#FAFAFA] border-[#E8E8E8]"
                    }`}>
                      {recentBlogs.length === 0 ? (
                        <p className="text-xs text-[#7A7A7A] text-center">No posts published recently.</p>
                      ) : (
                        recentBlogs.map((post, idx) => (
                          <div
                            key={post.id}
                            onClick={() => handleCardClick(post.slug)}
                            className={`cursor-pointer ${
                              idx > 0 
                                ? (isDark ? "border-t border-[#3A3A3A] pt-6 mt-6" : "border-t border-[#E8E8E8] pt-6 mt-6") 
                                : ""
                            }`}
                          >
                            <span className="text-primary-red text-[10px] font-bold uppercase tracking-wider block mb-1">
                              {post.date}
                            </span>
                            <h4 className={`font-bold hover:text-primary-red transition-colors text-sm leading-snug ${
                              isDark ? "text-[#FFFFFF]" : "text-[#121212]"
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
