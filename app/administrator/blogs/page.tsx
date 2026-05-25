"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useBlogStore, useToastStore, BlogPost } from "@/src/admin/store/adminStore";

export default function AdminBlogListPage() {
  const { blogs, deleteBlog, togglePublish, addBlog } = useBlogStore();
  const { addToast } = useToastStore();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "published" | "draft">("all");
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null);

  const filtered = blogs.filter((b) => {
    const matchSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.tag.toLowerCase().includes(search.toLowerCase());
    const matchFilter =
      filter === "all" ||
      (filter === "published" && b.published) ||
      (filter === "draft" && !b.published);
    return matchSearch && matchFilter;
  });

  const handleDelete = (id: string) => {
    deleteBlog(id);
    setConfirmDelete(null);
    addToast("Post deleted", "info");
  };

  const handleToggle = (id: string, published: boolean) => {
    togglePublish(id);
    addToast(published ? "Post unpublished" : "Post published!", "success");
  };

  const handleDuplicate = (blog: BlogPost) => {
    const copyTitle = `${blog.title} (Copy)`;
    const copySlug = `${blog.slug}-copy-${Date.now().toString().slice(-4)}`;
    
    addBlog({
      title: copyTitle,
      slug: copySlug,
      excerpt: blog.excerpt,
      content: blog.content,
      tag: blog.tag,
      author: blog.author,
      date: new Date().toISOString().split("T")[0],
      readTime: blog.readTime,
      published: false, // initial duplicate is a draft
      coverImage: blog.coverImage,
    });
    
    addToast("Post duplicated successfully as draft!", "success");
  };

  return (
    <div className="min-h-screen text-[#FAFAFA]">
      {/* Page Content Card */}
      <div className="mb-6 bg-[#111111] border border-[#1E1E1E] rounded-xl p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary-red/10 border border-primary-red/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-[#FAFAFA]">Edit Page Content</p>
            <p className="text-xs text-[#5A5A5A]">Click to edit the Blogs page hero text, headings, and featured post copy inline</p>
          </div>
        </div>
        <Link
          href="/administrator/blogs/page-editor"
          className="flex items-center gap-2 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-[#C8C8C8] hover:text-[#FAFAFA] font-medium px-4 py-2 rounded-lg text-xs border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all"
        >
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
          Open Page Editor
        </Link>
      </div>

      {/* Header */}
      <div className="mb-6 flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-[#FAFAFA] mb-1">
            Blog Posts
          </h1>
          <p className="text-[#5A5A5A] text-sm">
            {blogs.filter((b) => b.published).length} published · {blogs.filter((b) => !b.published).length} draft
          </p>
        </div>
        <Link
          href="/administrator/blogs/create"
          className="flex items-center gap-2 bg-primary-red hover:bg-primary-hover text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-all shadow-[0_4px_20px_rgba(180,0,1,0.3)]"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          New Post
        </Link>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="relative flex-1 min-w-48">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#5A5A5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#111111] border border-[#1E1E1E] rounded-lg pl-9 pr-4 py-2.5 text-sm text-[#FAFAFA] placeholder-[#3A3A3A] focus:outline-none focus:border-primary-red transition-colors"
          />
        </div>
        <div className="flex gap-1">
          {(["all", "published", "draft"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filter === f
                  ? "bg-primary-red/20 text-primary-red border border-primary-red/30"
                  : "text-[#5A5A5A] hover:text-[#FAFAFA] border border-[#1E1E1E] hover:border-[#2A2A2A]"
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Blog List */}
      <div className="space-y-3">
        <AnimatePresence>
          {filtered.length === 0 ? (
            <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-12 text-center">
              <p className="text-[#3A3A3A] text-sm">No posts found</p>
            </div>
          ) : (
            filtered.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ delay: i * 0.04 }}
                className="bg-[#111111] border border-[#1E1E1E] hover:border-[#2A2A2A] rounded-xl p-5 flex items-center gap-4 group transition-all"
              >
                {/* Status dot */}
                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${blog.published ? "bg-green-400" : "bg-yellow-400"}`} />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                    <h3 className="font-semibold text-sm text-[#FAFAFA] truncate">{blog.title}</h3>
                    <span className="text-[10px] bg-primary-red/10 text-primary-red border border-primary-red/20 px-2 py-0.5 rounded-full flex-shrink-0">
                      {blog.tag}
                    </span>
                  </div>
                  <p className="text-xs text-[#3A3A3A] truncate">{blog.excerpt}</p>
                  <div className="flex items-center gap-3 mt-1 text-[10px] text-[#3A3A3A]">
                    <span>{blog.author}</span>
                    <span>·</span>
                    <span>{blog.date}</span>
                    <span>·</span>
                    <span>{blog.readTime}</span>
                    <span>·</span>
                    <span className={blog.published ? "text-green-400" : "text-yellow-400"}>
                      {blog.published ? "Published" : "Draft"}
                    </span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => handleToggle(blog.id, blog.published)}
                    className={`px-3 py-1.5 rounded-md text-[10px] font-bold transition-all cursor-pointer border ${
                      blog.published
                        ? "border-yellow-800/40 text-yellow-400 hover:bg-yellow-900/20"
                        : "border-green-800/40 text-green-400 hover:bg-green-900/20"
                    }`}
                  >
                    {blog.published ? "Unpublish" : "Publish"}
                  </button>
                  <button
                    onClick={() => handleDuplicate(blog)}
                    className="px-3 py-1.5 rounded-md text-[10px] font-bold text-[#7A7A7A] hover:text-purple-400 border border-[#2A2A2A] hover:border-purple-900/40 transition-all cursor-pointer"
                  >
                    Duplicate
                  </button>
                  <Link
                    href={`/administrator/blogs/edit/${blog.id}`}
                    className="px-3 py-1.5 rounded-md text-[10px] font-bold text-[#7A7A7A] hover:text-[#FAFAFA] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => setConfirmDelete(blog.id)}
                    className="px-3 py-1.5 rounded-md text-[10px] font-bold text-[#5A5A5A] hover:text-red-400 border border-[#2A2A2A] hover:border-red-900/40 transition-all cursor-pointer"
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {confirmDelete && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-[400]"
              onClick={() => setConfirmDelete(null)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="fixed inset-0 flex items-center justify-center z-[401] pointer-events-none"
            >
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-8 max-w-sm w-full mx-4 pointer-events-auto shadow-2xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-red-900/20 border border-red-800/30 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#FAFAFA]">Delete Post?</h3>
                    <p className="text-xs text-[#5A5A5A]">This action cannot be undone</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => handleDelete(confirmDelete)}
                    className="flex-1 bg-red-900 hover:bg-red-800 text-white font-bold py-2.5 rounded-lg text-sm transition-all cursor-pointer"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setConfirmDelete(null)}
                    className="flex-1 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-[#7A7A7A] font-medium py-2.5 rounded-lg text-sm border border-[#2A2A2A] transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
