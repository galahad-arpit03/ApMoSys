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
      <div className="min-h-screen bg-[#FAFAFA] flex flex-col items-center justify-center text-center p-8">
        <h2 className="font-heading font-extrabold text-3xl text-gray-900 mb-4">Article Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-sm">
          The intelligence brief you are looking for has been archived or does not exist.
        </p>
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-md text-xs uppercase tracking-wider transition-colors"
        >
          ← Back to Resources
        </Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-gray-50 text-gray-900 pb-24">
      {/* Hero Section */}
      <section className="relative bg-gray-50 border-b border-gray-200 pt-32 pb-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          {/* Back button */}
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-blue-600 mb-8 group transition-colors uppercase tracking-widest font-bold"
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
              <span className="bg-gray-100 text-gray-600 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-sm border border-gray-200">
                {post.tag}
              </span>
              <span className="text-gray-500 text-xs font-semibold">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-[1.15] mb-8">
              {post.title}
            </h1>

            {/* Author Credentials */}
            <div className="flex items-center gap-4 border-t border-gray-200 pt-8">
              <div className="w-12 h-12 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-600 text-base font-bold">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="text-gray-900 text-sm font-bold leading-tight">{post.author}</p>
                <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">{post.date}</p>
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
            className="rounded-xl overflow-hidden aspect-[21/9] border border-gray-200 shadow-xl bg-white"
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
          className="prose max-w-none prose-p:text-gray-600 prose-p:text-lg prose-p:leading-relaxed prose-p:mb-8 prose-headings:text-gray-900 prose-headings:font-heading prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-strong:text-gray-900"
        >
          {/* Format multiline content block into styled paragraphs */}
          {post.content.split("\n\n").map((para, idx) => {
            if (!para.trim()) return null;
            
            // Render major headings if line starts with markdown headers
            if (para.startsWith("## ")) {
              return (
                <h2 key={idx} className="text-2xl font-bold text-gray-900 mt-12 mb-6 font-heading">
                  {para.replace("## ", "")}
                </h2>
              );
            }
            if (para.startsWith("### ")) {
              return (
                <h3 key={idx} className="text-xl font-bold text-gray-900 mt-8 mb-4 font-heading">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            
            return (
              <p key={idx} className="text-gray-600 text-lg leading-relaxed mb-8">
                {para}
              </p>
            );
          })}
        </motion.div>
      </section>
    </article>
  );
}
