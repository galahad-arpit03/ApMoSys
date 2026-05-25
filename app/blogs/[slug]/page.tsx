"use client";

import React from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useBlogStore } from "@/src/admin/store/adminStore";

export default function BlogPostDetail() {
  const params = useParams();
  const router = useRouter();
  const { blogs } = useBlogStore();
  
  const slug = params?.slug as string;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center text-center p-8">
        <h2 className="font-heading font-extrabold text-3xl text-white mb-4">Article Not Found</h2>
        <p className="text-[#7A7A7A] mb-8 max-w-sm">
          The intelligence brief you are looking for has been archived or does not exist.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 bg-primary-red hover:bg-primary-hover text-white font-bold px-6 py-3 rounded-md text-xs uppercase tracking-wider transition-colors"
        >
          ← Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA] pb-24">
      {/* Hero Section */}
      <section className="relative bg-[#000000] border-b border-[#1F1F1F] pt-32 pb-20 overflow-hidden">
        {/* Subtle red background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#B40001]/10 to-transparent opacity-30 pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs text-[#7A7A7A] hover:text-white mb-8 group transition-colors uppercase tracking-widest font-bold"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Resources
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category / Read time */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary-red/10 text-primary-red text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-sm border border-primary-red/20">
                {post.tag}
              </span>
              <span className="text-[#7A7A7A] text-xs font-semibold">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-8">
              {post.title}
            </h1>

            {/* Author Credentials */}
            <div className="flex items-center gap-4 border-t border-[#1F1F1F] pt-8">
              <div className="w-12 h-12 rounded-full bg-primary-red/10 border border-primary-red/25 flex items-center justify-center text-primary-red text-base font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-white text-sm font-bold leading-tight">{post.author}</p>
                <p className="text-[#7A7A7A] text-xs mt-1 uppercase tracking-wider">{post.date}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cover Image banner */}
      {post.coverImage && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden aspect-[21/9] border border-[#1F1F1F] shadow-2xl bg-[#121212]"
          >
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>
      )}

      {/* Content body */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose prose-invert max-w-none prose-p:text-[#A0A0A0] prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8 prose-headings:text-white prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-strong:text-white"
        >
          {/* Format multiline content block into styled paragraphs */}
          {post.content.split("\n\n").map((para, idx) => {
            if (!para.trim()) return null;
            
            // Render major headings if line starts with markdown headers
            if (para.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold text-white mt-12 mb-6 font-heading">
                  {para.replace("## ", "")}
                </h2>
              );
            }
            if (para.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-white mt-8 mb-4 font-heading">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            
            return (
              <p key={idx} className="text-[#A0A0A0] text-lg leading-relaxed mb-8">
                {para}
              </p>
            );
          })}
        </motion.div>
      </section>
    </article>
  );
}
