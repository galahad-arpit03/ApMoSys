"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useBlogStore, useToastStore } from "@/src/admin/store/adminStore";

const tags = ["AI & Automation", "Performance", "Security", "DevOps", "Testing", "Cloud", "Enterprise"];

export default function AdminBlogEditPage() {
  const { id } = useParams<{ id: string }>();
  const { blogs, updateBlog } = useBlogStore();
  const { addToast } = useToastStore();
  const router = useRouter();

  const blog = blogs.find((b) => b.id === id);

  const [form, setForm] = useState(
    blog ?? {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      tag: tags[0],
      author: "ApMoSys Editorial",
      date: new Date().toISOString().split("T")[0],
      readTime: "5 min read",
      published: false,
    }
  );

  useEffect(() => {
    if (!blog) {
      addToast("Post not found", "error");
      router.push("/administrator/blogs");
    }
  }, [blog, addToast, router]);

  const handleChange = (key: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = (publish?: boolean) => {
    if (!form.title || !form.excerpt || !form.content) {
      addToast("Please fill in all required fields", "error");
      return;
    }
    updateBlog(id, { ...form, published: publish !== undefined ? publish : form.published });
    addToast("Post updated successfully!", "success");
    router.push("/administrator/blogs");
  };

  if (!blog) return null;

  return (
    <div className="min-h-screen text-[#FAFAFA]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-[#FAFAFA] mb-1">
            Edit Post
          </h1>
          <div className="flex items-center gap-2">
            <div className={`w-1.5 h-1.5 rounded-full ${form.published ? "bg-green-400" : "bg-yellow-400"}`} />
            <p className="text-[#5A5A5A] text-sm">
              {form.published ? "Published" : "Draft"} · /blog/{form.slug}
            </p>
          </div>
        </div>
        <button
          onClick={() => router.back()}
          className="text-[#5A5A5A] hover:text-[#FAFAFA] text-sm transition-colors flex items-center gap-1 cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="xl:col-span-2 space-y-5">
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
            <label className="block text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider mb-2">Title *</label>
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Post title..."
              className="w-full bg-transparent text-2xl font-heading font-bold text-[#FAFAFA] placeholder-[#2A2A2A] focus:outline-none"
            />
          </div>

          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
            <label className="block text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider mb-2">Excerpt *</label>
            <textarea
              value={form.excerpt}
              onChange={(e) => handleChange("excerpt", e.target.value)}
              rows={3}
              className="w-full bg-transparent text-sm text-[#C8C8C8] placeholder-[#2A2A2A] focus:outline-none resize-none leading-relaxed"
              placeholder="Summary..."
            />
          </div>

          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl overflow-hidden">
            <div className="flex items-center gap-1 px-4 py-3 border-b border-[#1E1E1E] bg-[#0D0D0D] overflow-x-auto">
              {["B", "I", "U", "H1", "H2", "P", "•", "1.", "—", `"`, "🔗", "📷"].map((tool) => (
                <button key={tool} className="w-7 h-7 flex items-center justify-center text-xs text-[#5A5A5A] hover:text-[#FAFAFA] hover:bg-[#1A1A1A] rounded transition-colors cursor-pointer font-mono flex-shrink-0">
                  {tool}
                </button>
              ))}
              <div className="h-4 w-px bg-[#2A2A2A] mx-1 flex-shrink-0" />
              <span className="text-[10px] text-[#3A3A3A] italic flex-shrink-0">Rich editor — coming soon</span>
            </div>
            <div className="p-5">
              <label className="block text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider mb-3">Content *</label>
              <textarea
                value={form.content}
                onChange={(e) => handleChange("content", e.target.value)}
                rows={18}
                className="w-full bg-transparent text-sm text-[#C8C8C8] placeholder-[#2A2A2A] focus:outline-none resize-none leading-relaxed font-mono"
                placeholder="Article content..."
              />
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
            <h3 className="font-heading font-bold text-sm text-[#FAFAFA] mb-4">Publish</h3>
            <div className="space-y-3">
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleSave(true)}
                className="w-full bg-[#B40001] hover:bg-[#D10000] text-white font-bold py-3 rounded-lg text-sm transition-all cursor-pointer">
                {form.published ? "Update & Keep Published" : "Publish"}
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleSave()}
                className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-[#7A7A7A] hover:text-[#FAFAFA] font-medium py-3 rounded-lg text-sm border border-[#2A2A2A] transition-all cursor-pointer">
                Save Changes
              </motion.button>
              {form.published && (
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => handleSave(false)}
                  className="w-full text-yellow-400 hover:text-yellow-300 font-medium py-2 rounded-lg text-sm transition-all cursor-pointer">
                  Convert to Draft
                </motion.button>
              )}
            </div>
          </div>

          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5 space-y-4">
            <h3 className="font-heading font-bold text-sm text-[#FAFAFA]">Post Settings</h3>
            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">URL Slug</label>
              <input type="text" value={form.slug} onChange={(e) => handleChange("slug", e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors font-mono" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">Category Tag</label>
              <select value={form.tag} onChange={(e) => handleChange("tag", e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors cursor-pointer">
                {tags.map((tag) => <option key={tag} value={tag}>{tag}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">Author</label>
              <input type="text" value={form.author} onChange={(e) => handleChange("author", e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">Date</label>
              <input type="date" value={form.date} onChange={(e) => handleChange("date", e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">Read Time</label>
              <input type="text" value={form.readTime} onChange={(e) => handleChange("readTime", e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
