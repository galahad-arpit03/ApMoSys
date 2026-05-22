"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const posts = [
  {
    id: 1,
    tag: "ENGINEERING",
    readTime: "12 Min Read",
    title: "Architecting Resilient Microservices at Scale",
    author: "Dr. Sarah Chen",
    role: "VP of Engineering",
  },
  {
    id: 2,
    tag: "AUTOMATION",
    readTime: "6 Min Read",
    title: "Beyond Selenium: The Future of Autonomous Testing",
    author: "Marcus Vance",
    role: "Head of QA",
  },
  {
    id: 3,
    tag: "CLOUD NATIVE",
    readTime: "15 Min Read",
    title: "Data Sovereignty in the Hybrid Cloud Era",
    author: "Elena Rodriguez",
    role: "CTO Advisor",
  },
];

export default function BlogList() {
  return (
    <section className="bg-[#FFFFFF] text-[#121212] overflow-hidden">
      
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
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {posts.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <div className="rounded-lg overflow-hidden bg-[#FAFAFA] border border-[#E8E8E8] aspect-video mb-5 relative">
                     {/* Image Placeholder */}
                     <div className="absolute inset-0 flex items-center justify-center opacity-30">
                        <svg className="w-8 h-8 text-[#A0A0A0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                     </div>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary-red text-[10px] font-bold uppercase tracking-widest">{post.tag}</span>
                    <span className="text-[#A0A0A0] text-xs font-medium">{post.readTime}</span>
                  </div>
                  
                  <h4 className="font-heading font-bold text-xl text-[#121212] group-hover:text-primary-red transition-colors mb-4 line-clamp-2">
                    {post.title}
                  </h4>
                  
                  <div className="mt-auto flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E8E8E8] flex-shrink-0" />
                    <div>
                      <p className="text-[#121212] text-xs font-bold">{post.author}</p>
                      <p className="text-[#7A7A7A] text-[10px] uppercase tracking-wider">{post.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
                <div className="mb-6">
                  <span className="text-primary-red text-xs font-bold uppercase tracking-wider block mb-1">March 22, 2024</span>
                  <h4 className="font-bold text-[#121212] hover:text-primary-red transition-colors text-sm leading-snug cursor-pointer">
                    The Evolution of Shift-Left Testing in Agile Teams
                  </h4>
                </div>
                
                <div className="mb-6 border-t border-[#E8E8E8] pt-6">
                  <span className="text-primary-red text-xs font-bold uppercase tracking-wider block mb-1">March 18, 2024</span>
                  <h4 className="font-bold text-[#121212] hover:text-primary-red transition-colors text-sm leading-snug cursor-pointer">
                    Optimizing Cloud Costs with Automated Resource Scaling
                  </h4>
                </div>

                <div className="mb-6 border-t border-[#E8E8E8] pt-6">
                  <span className="text-primary-red text-xs font-bold uppercase tracking-wider block mb-1">March 15, 2024</span>
                  <h4 className="font-bold text-[#121212] hover:text-primary-red transition-colors text-sm leading-snug cursor-pointer">
                    Security Validations in Modern CI/CD Pipelines
                  </h4>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#FFFFFF] border border-[#C8C8C8] hover:border-[#121212] text-[#121212] font-bold py-2.5 rounded-md text-xs tracking-wide transition-colors mt-2"
                >
                  View All Posts
                </motion.button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
