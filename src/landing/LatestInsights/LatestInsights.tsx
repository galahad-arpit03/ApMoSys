"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const latestInsightsData = [
  {
    id: 1,
    category: "Whitepaper",
    date: "June 15, 2026",
    title: "The Future of AI in Enterprise Architecture",
    excerpt: "Discover how Fortune 500 companies are integrating generative AI into their core operations to drive unprecedented efficiency.",
    image: "/assets/blog-1.jpg"
  },
  {
    id: 2,
    category: "Case Study",
    date: "May 28, 2026",
    title: "Zero-Downtime Migration for Financial Systems",
    excerpt: "Learn the exact strategies our CoE used to migrate a legacy banking system without a single second of service interruption.",
    image: "/assets/blog-2.jpg"
  },
  {
    id: 3,
    category: "Engineering",
    date: "May 10, 2026",
    title: "Optimizing Microservices for Sub-Millisecond Latency",
    excerpt: "A deep technical dive into our proprietary caching layer and how it dramatically reduced load times for global e-commerce clients.",
    image: "/assets/blog-3.jpg"
  }
];

export default function LatestInsights() {
  return (
    <section className="py-24 bg-[#0B0B0B] border-b border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LHS */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight leading-tight">
              From the <br/> <span className="text-[#B40001]">Newsroom.</span>
            </h2>
            <div className="w-12 h-1 bg-[#B40001] mb-6 rounded-md" />
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Stay ahead of the curve with our latest research, technical deep dives, and company updates.
            </p>
            <button className="flex items-center gap-2 text-white font-bold hover:text-[#B40001] transition-colors group">
              View all resources <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* RHS */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6">
              {latestInsightsData.map((post, idx) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col sm:flex-row gap-6 p-6 bg-[#121212] border border-[#1F1F1F] rounded-md hover:border-[#333333] transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-full sm:w-48 h-48 sm:h-auto rounded-md overflow-hidden flex-shrink-0 relative bg-[#1A1A1A]">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url(${post.image})` }} />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                  </div>
                  
                  <div className="flex flex-col justify-center flex-grow py-2">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-[#1A1A1A] text-[#B40001] text-xs font-bold uppercase tracking-wider rounded-md border border-[#2A2A2A]">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B40001] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="mt-auto flex items-center text-[#B40001] font-bold text-sm">
                      Read Article <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
