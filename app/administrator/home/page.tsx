"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContentStore, useBlogStore, useThemeStore } from "@/src/admin/store/adminStore";

const quickLinks = [
  { label: "Home Page", href: "/administrator", icon: "🏠", desc: "Edit hero, stats, sections" },
  { label: "Navbar", href: "/administrator/navbar", icon: "🧭", desc: "Manage top navigation" },
  { label: "Footer", href: "/administrator/footer", icon: "🦶", desc: "Manage bottom navigation" },
  { label: "About", href: "/administrator/about", icon: "👥", desc: "Company info & values" },
  { label: "Services", href: "/administrator/services", icon: "⚙️", desc: "Service cards & descriptions" },
  { label: "Solutions", href: "/administrator/solutions", icon: "💡", desc: "Solution offerings" },
  { label: "Industries", href: "/administrator/industries", icon: "🏭", desc: "Industry verticals" },
  { label: "Products", href: "/administrator/products", icon: "📦", desc: "Product catalog" },
  { label: "Blogs", href: "/administrator/blogs", icon: "📝", desc: "Create & manage posts" },
  { label: "Careers", href: "/administrator/careers", icon: "💼", desc: "Job openings & culture" },
  { label: "Contact", href: "/administrator/contact", icon: "📞", desc: "Contact details & form" },
  { label: "Colors", href: "/administrator/colors", icon: "🎨", desc: "Global theme & palette" },
  { label: "Settings", href: "/administrator/settings", icon: "⚙️", desc: "SEO & site metadata" },
];

export default function AdminHomePage() {
  const { isDirty, savedAt } = useContentStore();
  const { blogs } = useBlogStore();
  const { activePreset } = useThemeStore();

  const publishedBlogs = blogs.filter((b) => b.published).length;
  const draftBlogs = blogs.filter((b) => !b.published).length;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#FAFAFA]">
      {/* Header */}
      <div className="border-b border-[#1A1A1A] px-8 py-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading font-extrabold text-2xl text-[#FAFAFA]">
            Admin Dashboard
          </h1>
          <p className="text-[#5A5A5A] text-sm mt-1">
            ApMoSys Visual CMS — manage your website content in real-time
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-8 space-y-8">
        {/* Status Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: "Content Status",
              value: isDirty ? "Unsaved Changes" : "All Saved",
              sub: savedAt ? `Last saved: ${new Date(savedAt).toLocaleTimeString()}` : "No changes yet",
              color: isDirty ? "text-yellow-400" : "text-green-400",
              bg: isDirty ? "bg-yellow-900/10 border-yellow-800/30" : "bg-green-900/10 border-green-800/30",
            },
            {
              label: "Published Posts",
              value: publishedBlogs,
              sub: `${draftBlogs} draft${draftBlogs !== 1 ? "s" : ""}`,
              color: "text-[#FAFAFA]",
              bg: "bg-[#1A1A1A] border-[#2A2A2A]",
            },
            {
              label: "Active Theme",
              value: activePreset.charAt(0).toUpperCase() + activePreset.slice(1),
              sub: "Color preset",
              color: "text-[#FAFAFA]",
              bg: "bg-[#1A1A1A] border-[#2A2A2A]",
            },
            {
              label: "Total Pages",
              value: quickLinks.length.toString(),
              sub: "All editable",
              color: "text-[#FAFAFA]",
              bg: "bg-[#1A1A1A] border-[#2A2A2A]",
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -2 }}
              className={`${stat.bg} border rounded-xl p-4`}
            >
              <p className="text-[#5A5A5A] text-xs font-medium mb-1">{stat.label}</p>
              <p className={`font-heading font-bold text-xl ${stat.color}`}>{stat.value}</p>
              <p className="text-[#3A3A3A] text-[11px] mt-0.5">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Page Navigation Grid */}
        <div>
          <h2 className="font-heading font-bold text-sm text-[#5A5A5A] uppercase tracking-wider mb-4">
            Edit Pages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  href={link.href}
                  className="group flex items-center gap-4 bg-[#111111] hover:bg-[#161616] border border-[#1E1E1E] hover:border-[#2A2A2A] rounded-xl p-4 transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-[#1A1A1A] rounded-lg flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-[#B40001]/10 transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#FAFAFA] group-hover:text-white transition-colors">
                      {link.label}
                    </p>
                    <p className="text-[11px] text-[#3A3A3A] mt-0.5">{link.desc}</p>
                  </div>
                  <svg className="w-4 h-4 text-[#2A2A2A] group-hover:text-[#5A5A5A] ml-auto transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tip */}
        <div className="bg-[#0D1A0D] border border-[#1A3A1A] rounded-xl p-5">
          <p className="text-xs text-[#4ADE80] font-semibold mb-2 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            How to use the Visual Editor
          </p>
          <p className="text-xs text-[#2A4A2A] leading-relaxed">
            Click on any page from the grid above. The page will render exactly as it appears on your frontend. 
            <strong className="text-[#4ADE80]"> Hover over any text</strong> to see the edit outline — 
            <strong className="text-[#4ADE80]"> click to edit inline</strong>. 
            Hover over images to reveal the image edit button. 
            Click <strong className="text-[#4ADE80]">Save Changes</strong> in the top toolbar when done.
          </p>
        </div>
      </div>
    </div>
  );
}
