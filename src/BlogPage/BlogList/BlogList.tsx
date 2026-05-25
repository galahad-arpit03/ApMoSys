"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useBlogStore } from "@/src/admin/store/adminStore";

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
    <section className="bg-[#FFFFFF] text-[#121212] overflow-hidden min-h-screen">
      
      {/* Category / Search Bar */}
      <div className="border-b border-[#E8E8E8] sticky top-0 bg-[#FFFFFF]/90 backdrop-blur-md z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between py-4 gap-4">
            
            <div className="flex overflow-x-auto hide-scrollbar gap-8">
              <a href="#" className="whitespace-nowrap text-sm font-bold text-[#121212] border-b-2 border-primary-red pb-1">
                All Resources
              </a>
              <a href="#" className="whitespace-nowrap text-sm font-medium text-[#7A7A7A] hover:text-[#121212] transition-colors pb-1">
                Software Engineering
              </a>
              <a href="#" className="whitespace-nowrap text-sm font-medium text-[#7A7A7A] hover:text-[#121212] transition-colors pb-1">
                AI Automation
              </a>
              <a href="#" className="whitespace-nowrap text-sm font-medium text-[#7A7A7A] hover:text-[#121212] transition-colors pb-1">
                Digital Transformation
              </a>
              <a href="#" className="whitespace-nowrap text-sm font-medium text-[#7A7A7A] hover:text-[#121212] transition-colors pb-1">
                DevSecOps
              </a>
            </div>

            <div className="relative w-full md:w-64">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A0A0A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Search technical intelligence..." 
                className="w-full bg-[#FAFAFA] border border-[#E8E8E8] rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-primary-red transition-colors"
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
            <h3 className="font-heading font-bold text-lg text-[#121212] mb-8">Latest Intelligence</h3>
            
            {publishedBlogs.length === 0 ? (
              <div className="text-center py-20 bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl">
                <p className="text-[#7A7A7A] text-base">No published articles available.</p>
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
                        <div className="rounded-lg overflow-hidden bg-[#FAFAFA] border border-[#E8E8E8] aspect-video mb-5 relative">
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
                          <span className="text-[#A0A0A0] text-xs font-medium">{post.readTime}</span>
                        </div>
                        
                        <h4 className="font-heading font-bold text-xl text-[#121212] group-hover:text-primary-red transition-colors mb-4 line-clamp-2">
                          {post.title}
                        </h4>
                        
                        <p className="text-[#7A7A7A] text-sm leading-relaxed mb-6 line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="mt-auto flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-primary-red/10 flex items-center justify-center text-xs font-bold text-primary-red border border-primary-red/20 flex-shrink-0">
                            {post.author.charAt(0)}
                          </div>
                          <div>
                            <p className="text-[#121212] text-xs font-bold">{post.author}</p>
                            <p className="text-[#7A7A7A] text-[10px] uppercase tracking-wider">{post.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>

                {/* Pagination Controls */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12 pt-8 border-t border-[#E8E8E8]">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="px-4 py-2 text-sm font-semibold rounded-md border border-[#E8E8E8] text-[#5A5A5A] hover:text-[#121212] hover:border-[#121212] disabled:opacity-40 disabled:hover:border-[#E8E8E8] disabled:hover:text-[#5A5A5A] transition-all cursor-pointer"
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
                              : "border border-[#E8E8E8] text-[#5A5A5A] hover:text-[#121212] hover:border-[#121212]"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>

                    <button
                      onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                      disabled={currentPage === totalPages}
                      className="px-4 py-2 text-sm font-semibold rounded-md border border-[#E8E8E8] text-[#5A5A5A] hover:text-[#121212] hover:border-[#121212] disabled:opacity-40 disabled:hover:border-[#E8E8E8] disabled:hover:text-[#5A5A5A] transition-all cursor-pointer"
                    >
                      Next
                    </button>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="col-span-4 lg:pl-6 lg:border-l border-[#E8E8E8]">
            
            {/* Trending Topics */}
            <div className="mb-12">
              <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-[#121212] mb-6">Trending Topics</h3>
              <div className="flex flex-wrap gap-2">
                {["#Kubernetes Scaling", "#Generative AI QA", "#CloudFinOps", "#Observability", "#ChaosEngineering"].map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="bg-[#FAFAFA] border border-[#E8E8E8] hover:border-primary-red hover:text-primary-red text-[#5A5A5A] text-xs font-medium px-3 py-1.5 rounded-md transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>

            {/* Recently Published */}
            <div>
              <h3 className="font-heading font-bold text-sm uppercase tracking-widest text-[#121212] mb-6">Recently Published</h3>
              
              <div className="bg-[#FAFAFA] border border-[#E8E8E8] rounded-xl p-6">
                {recentBlogs.length === 0 ? (
                  <p className="text-xs text-[#7A7A7A] text-center">No posts published recently.</p>
                ) : (
                  recentBlogs.map((post, idx) => (
                    <div
                      key={post.id}
                      onClick={() => handleCardClick(post.slug)}
                      className={`cursor-pointer ${idx > 0 ? "border-t border-[#E8E8E8] pt-6 mt-6" : ""}`}
                    >
                      <span className="text-primary-red text-[10px] font-bold uppercase tracking-wider block mb-1">
                        {post.date}
                      </span>
                      <h4 className="font-bold text-[#121212] hover:text-primary-red transition-colors text-sm leading-snug">
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
}
