"use client";

import React, { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useBlogStore, useToastStore } from "@/src/admin/store/adminStore";

const TAGS = ["AI & Automation", "Performance", "Security", "DevOps", "Testing", "Cloud", "Enterprise", "Case Study", "News"];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 80);
}

export default function AdminBlogCreatePage() {
  const { addBlog } = useBlogStore();
  const { addToast } = useToastStore();
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"content" | "seo">("content");

  const [form, setForm] = useState({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    tag: TAGS[0],
    author: "ApMoSys Editorial",
    date: new Date().toISOString().split("T")[0],
    readTime: "5 min read",
    published: false,
    // SEO Fields
    metaTitle: "",
    metaDescription: "",
    ogTitle: "",
    ogDescription: "",
    coverImage: "",
    focusKeyword: "",
    canonicalUrl: "",
  });

  const handleChange = (key: string, value: string | boolean) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
      // Auto-generate slug + meta from title
      ...(key === "title"
        ? {
            slug: slugify(value as string),
            metaTitle: `${value} | ApMoSys Blog`,
            ogTitle: value as string,
          }
        : {}),
      ...(key === "excerpt"
        ? {
            metaDescription: (value as string).slice(0, 160),
            ogDescription: (value as string).slice(0, 200),
          }
        : {}),
    }));
  };

  const handleCoverImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      addToast("Image must be under 5MB", "error");
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setCoverPreview(dataUrl);
      handleChange("coverImage", dataUrl);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (publish: boolean) => {
    if (!form.title.trim() || !form.excerpt.trim() || !form.content.trim()) {
      addToast("Title, excerpt, and content are required", "error");
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { metaTitle, metaDescription, ogTitle, ogDescription, focusKeyword, canonicalUrl, coverImage, ...blogData } = form;
    addBlog({ ...blogData, published: publish });
    addToast(publish ? "🚀 Post published!" : "📝 Draft saved!", "success");
    router.push("/administrator/blogs");
  };

  const metaDescLen = form.metaDescription.length;
  const metaDescColor = metaDescLen < 50 ? "text-yellow-400" : metaDescLen > 160 ? "text-red-400" : "text-green-400";

  return (
    <div className="min-h-screen text-[#FAFAFA]">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-[#FAFAFA] mb-1">
            Create New Post
          </h1>
          <p className="text-[#5A5A5A] text-sm">Write, optimize, and publish a new blog article</p>
        </div>
        <div className="flex items-center gap-3">
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
      </div>

      {/* Tab Bar */}
      <div className="flex gap-1 mb-6 bg-[#0D0D0D] p-1 rounded-lg w-fit border border-[#1E1E1E]">
        {(["content", "seo"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === tab
                ? "bg-[#B40001] text-white"
                : "text-[#5A5A5A] hover:text-[#FAFAFA]"
            }`}
          >
            {tab === "content" ? "✍️ Content" : "🔍 SEO & Meta"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="xl:col-span-2 space-y-5">

          {activeTab === "content" ? (
            <>
              {/* Title */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
                <label className="block text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider mb-2">
                  Post Title <span className="text-[#B40001]">*</span>
                </label>
                <input
                  type="text"
                  value={form.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                  placeholder="Enter an engaging blog title..."
                  className="w-full bg-transparent text-2xl font-heading font-bold text-[#FAFAFA] placeholder-[#2A2A2A] focus:outline-none border-none"
                />
              </div>

              {/* Excerpt */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
                <label className="block text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider mb-2">
                  Excerpt / Summary <span className="text-[#B40001]">*</span>
                </label>
                <textarea
                  value={form.excerpt}
                  onChange={(e) => handleChange("excerpt", e.target.value)}
                  placeholder="Write a compelling summary that appears in blog listings and search results..."
                  rows={3}
                  className="w-full bg-transparent text-sm text-[#C8C8C8] placeholder-[#2A2A2A] focus:outline-none resize-none leading-relaxed"
                />
              </div>

              {/* Content */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl overflow-hidden">
                <div className="flex items-center gap-1 px-4 py-3 border-b border-[#1E1E1E] bg-[#0D0D0D] overflow-x-auto">
                  {["B", "I", "U", "H1", "H2", "P", "•", "1.", "—", `"`, "🔗", "📷"].map((tool) => (
                    <button
                      key={tool}
                      className="w-7 h-7 flex items-center justify-center text-xs text-[#5A5A5A] hover:text-[#FAFAFA] hover:bg-[#1A1A1A] rounded transition-colors cursor-pointer font-mono flex-shrink-0"
                    >
                      {tool}
                    </button>
                  ))}
                  <div className="h-4 w-px bg-[#2A2A2A] mx-1 flex-shrink-0" />
                  <span className="text-[10px] text-[#3A3A3A] italic flex-shrink-0">Markdown supported</span>
                </div>
                <div className="p-5">
                  <label className="block text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider mb-3">
                    Content <span className="text-[#B40001]">*</span>
                  </label>
                  <textarea
                    value={form.content}
                    onChange={(e) => handleChange("content", e.target.value)}
                    placeholder="Write your full article here. Use markdown for formatting: **bold**, _italic_, # Headings, - lists..."
                    rows={20}
                    className="w-full bg-transparent text-sm text-[#C8C8C8] placeholder-[#2A2A2A] focus:outline-none resize-none leading-relaxed font-mono"
                  />
                </div>
              </div>
            </>
          ) : (
            /* SEO Tab */
            <div className="space-y-5">
              {/* SERP Preview */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
                <h3 className="font-heading font-bold text-sm text-[#FAFAFA] mb-4 flex items-center gap-2">
                  <span className="text-green-400">●</span> Google Search Preview
                </h3>
                <div className="bg-white rounded-lg p-4">
                  <p className="text-[10px] text-[#3A3A3A] mb-1">apmosys.com › blog › {form.slug || "your-post-slug"}</p>
                  <p className="text-base text-[#1a0dab] font-medium leading-tight mb-1 truncate">
                    {form.metaTitle || form.title || "Your Post Title | ApMoSys Blog"}
                  </p>
                  <p className="text-sm text-[#3C4043] leading-snug line-clamp-2">
                    {form.metaDescription || form.excerpt || "Your meta description will appear here..."}
                  </p>
                </div>
              </div>

              {/* Meta Title */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider">
                    Meta Title (SEO)
                  </label>
                  <span className={`text-[10px] font-mono ${form.metaTitle.length > 60 ? "text-red-400" : "text-[#5A5A5A]"}`}>
                    {form.metaTitle.length}/60
                  </span>
                </div>
                <input
                  type="text"
                  value={form.metaTitle}
                  onChange={(e) => handleChange("metaTitle", e.target.value)}
                  placeholder="Page title shown in Google results (50–60 chars ideal)"
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#3A3A3A] focus:outline-none focus:border-[#B40001] transition-colors"
                />
              </div>

              {/* Meta Description */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider">
                    Meta Description (SEO)
                  </label>
                  <span className={`text-[10px] font-mono ${metaDescColor}`}>
                    {metaDescLen}/160
                  </span>
                </div>
                <textarea
                  value={form.metaDescription}
                  onChange={(e) => handleChange("metaDescription", e.target.value)}
                  placeholder="Compelling description shown in search results (120–160 chars ideal)"
                  rows={3}
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#C8C8C8] placeholder-[#3A3A3A] focus:outline-none focus:border-[#B40001] transition-colors resize-none"
                />
                <div className="mt-2 w-full bg-[#1A1A1A] rounded-full h-1">
                  <div
                    className={`h-1 rounded-full transition-all ${metaDescLen > 160 ? "bg-red-500" : metaDescLen > 120 ? "bg-green-500" : "bg-yellow-500"}`}
                    style={{ width: `${Math.min((metaDescLen / 160) * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* Focus Keyword */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
                <label className="block text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider mb-2">
                  Focus Keyword / Keyphrase
                </label>
                <input
                  type="text"
                  value={form.focusKeyword}
                  onChange={(e) => handleChange("focusKeyword", e.target.value)}
                  placeholder="e.g. AI quality engineering, performance testing"
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#3A3A3A] focus:outline-none focus:border-[#B40001] transition-colors"
                />
                <p className="text-[10px] text-[#3A3A3A] mt-2">
                  💡 Use this keyword in your title, first paragraph, and subheadings for best SEO results.
                </p>
              </div>

              {/* Open Graph */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5 space-y-4">
                <h3 className="font-heading font-bold text-sm text-[#FAFAFA]">Open Graph (Social Sharing)</h3>
                <div>
                  <label className="block text-xs font-medium text-[#5A5A5A] mb-1">OG Title</label>
                  <input
                    type="text"
                    value={form.ogTitle}
                    onChange={(e) => handleChange("ogTitle", e.target.value)}
                    placeholder="Title shown when shared on LinkedIn, Twitter, etc."
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#5A5A5A] mb-1">OG Description</label>
                  <textarea
                    value={form.ogDescription}
                    onChange={(e) => handleChange("ogDescription", e.target.value)}
                    placeholder="Description shown when shared on social platforms"
                    rows={2}
                    className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#C8C8C8] focus:outline-none focus:border-[#B40001] transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Canonical URL */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
                <label className="block text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider mb-2">
                  Canonical URL (optional)
                </label>
                <input
                  type="url"
                  value={form.canonicalUrl}
                  onChange={(e) => handleChange("canonicalUrl", e.target.value)}
                  placeholder="https://apmosys.com/blogs/your-post-slug"
                  className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#3A3A3A] focus:outline-none focus:border-[#B40001] transition-colors font-mono"
                />
                <p className="text-[10px] text-[#3A3A3A] mt-2">Leave empty to use the default post URL. Set if you&apos;re syndicating from another source.</p>
              </div>

              {/* SEO Checklist */}
              <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
                <h3 className="font-heading font-bold text-sm text-[#FAFAFA] mb-3">SEO Checklist</h3>
                <div className="space-y-2">
                  {[
                    { label: "Title is set", ok: !!form.title },
                    { label: "Meta title is set (50–60 chars)", ok: form.metaTitle.length >= 10 && form.metaTitle.length <= 60 },
                    { label: "Meta description is set (120–160 chars)", ok: form.metaDescription.length >= 50 && form.metaDescription.length <= 160 },
                    { label: "Focus keyword is set", ok: !!form.focusKeyword },
                    { label: "URL slug is set", ok: !!form.slug },
                    { label: "Cover image is uploaded", ok: !!form.coverImage },
                    { label: "Content is written", ok: form.content.length > 100 },
                    { label: "Excerpt is set", ok: !!form.excerpt },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2">
                      <span className={`text-sm ${item.ok ? "text-green-400" : "text-[#3A3A3A]"}`}>
                        {item.ok ? "✓" : "○"}
                      </span>
                      <span className={`text-xs ${item.ok ? "text-[#C8C8C8]" : "text-[#5A5A5A]"}`}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-5">
          {/* Publish Controls */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
            <h3 className="font-heading font-bold text-sm text-[#FAFAFA] mb-4">Publish</h3>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSave(true)}
                className="w-full bg-[#B40001] hover:bg-[#D10000] text-white font-bold py-3 rounded-lg text-sm transition-all cursor-pointer shadow-[0_4px_15px_rgba(180,0,1,0.3)]"
              >
                🚀 Publish Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSave(false)}
                className="w-full bg-[#1A1A1A] hover:bg-[#2A2A2A] text-[#7A7A7A] hover:text-[#FAFAFA] font-medium py-3 rounded-lg text-sm border border-[#2A2A2A] transition-all cursor-pointer"
              >
                📝 Save as Draft
              </motion.button>
            </div>
          </div>

          {/* Cover Image Upload */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5">
            <h3 className="font-heading font-bold text-sm text-[#FAFAFA] mb-3">Cover Image</h3>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleCoverImage}
              className="hidden"
            />
            {coverPreview ? (
              <div className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverPreview}
                  alt="Cover preview"
                  className="w-full aspect-video object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex flex-col items-center justify-center gap-2">
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="bg-white text-[#121212] font-bold px-4 py-2 rounded-lg text-xs cursor-pointer hover:bg-[#FAFAFA] transition-colors"
                  >
                    Change Image
                  </button>
                  <button
                    onClick={() => { setCoverPreview(null); handleChange("coverImage", ""); }}
                    className="text-red-400 text-xs cursor-pointer hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full aspect-video bg-[#0A0A0A] border-2 border-dashed border-[#2A2A2A] hover:border-[#B40001] rounded-lg flex flex-col items-center justify-center gap-2 transition-colors cursor-pointer group"
              >
                <svg className="w-8 h-8 text-[#3A3A3A] group-hover:text-[#B40001] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-xs text-[#3A3A3A] group-hover:text-[#7A7A7A] text-center transition-colors">
                  Click to upload<br />
                  <span className="text-[10px]">PNG, JPG, WebP · Max 5MB</span>
                </p>
              </button>
            )}
            <p className="text-[10px] text-[#3A3A3A] mt-2">
              Used as the OG image when shared on social media. Recommended: 1200×630px
            </p>
          </div>

          {/* Post Settings */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-5 space-y-4">
            <h3 className="font-heading font-bold text-sm text-[#FAFAFA]">Post Settings</h3>

            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">URL Slug</label>
              <div className="flex items-center bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg overflow-hidden">
                <span className="px-2 text-[10px] text-[#3A3A3A] border-r border-[#2A2A2A] py-2 whitespace-nowrap">/blog/</span>
                <input
                  type="text"
                  value={form.slug}
                  onChange={(e) => handleChange("slug", e.target.value)}
                  className="flex-1 bg-transparent px-2 py-2 text-xs text-[#FAFAFA] focus:outline-none font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">Category Tag</label>
              <select
                value={form.tag}
                onChange={(e) => handleChange("tag", e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors cursor-pointer"
              >
                {TAGS.map((tag) => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">Author</label>
              <input
                type="text"
                value={form.author}
                onChange={(e) => handleChange("author", e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">Publish Date</label>
              <input
                type="date"
                value={form.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#5A5A5A] mb-1">Read Time</label>
              <input
                type="text"
                value={form.readTime}
                onChange={(e) => handleChange("readTime", e.target.value)}
                className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-3 py-2 text-xs text-[#FAFAFA] focus:outline-none focus:border-[#B40001] transition-colors"
                placeholder="e.g. 5 min read"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
