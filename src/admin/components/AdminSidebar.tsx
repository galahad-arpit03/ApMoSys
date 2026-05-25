"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Dashboard", href: "/administrator/home", icon: "⊞" },
  { label: "Home", href: "/administrator", icon: "🏠" },
  { label: "About", href: "/administrator/about", icon: "👥" },
  { label: "Services", href: "/administrator/services", icon: "⚙️" },
  { label: "Solutions", href: "/administrator/solutions", icon: "💡" },
  { label: "Industries", href: "/administrator/industries", icon: "🏭" },
  { label: "Products", href: "/administrator/products", icon: "📦" },
  { label: "Blogs", href: "/administrator/blogs", icon: "📝" },
  { label: "Careers", href: "/administrator/careers", icon: "💼" },
  { label: "Contact", href: "/administrator/contact", icon: "📞" },
  { divider: true },
  { label: "Colors", href: "/administrator/colors", icon: "🎨" },
  { label: "Settings", href: "/administrator/settings", icon: "⚙️" },
];

interface AdminSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export default function AdminSidebar({ collapsed, onToggle }: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-10 left-0 h-[calc(100vh-40px)] bg-[#0D0D0D] border-r border-[#2A2A2A] z-40 flex flex-col transition-all duration-300 ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-[#2A2A2A]">
        {!collapsed && (
          <span className="font-heading font-bold text-sm text-[#FAFAFA]">
            Admin Panel
          </span>
        )}
        <button
          onClick={onToggle}
          className="text-[#7A7A7A] hover:text-[#FAFAFA] transition-colors ml-auto cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {collapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            )}
          </svg>
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto hide-scrollbar py-3 space-y-0.5 px-2">
        {navItems.map((item, idx) => {
          if ("divider" in item && item.divider) {
            return <div key={idx} className="my-2 border-t border-[#2A2A2A]" />;
          }
          if (!("href" in item)) return null;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href!}
              className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 group ${
                isActive
                  ? "bg-primary-red/20 text-primary-red border border-primary-red/30"
                  : "text-[#7A7A7A] hover:bg-[#1A1A1A] hover:text-[#FAFAFA]"
              }`}
            >
              <span className="text-base flex-shrink-0">{item.icon}</span>
              <AnimatePresence>
                {!collapsed && (
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "auto" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="font-medium whitespace-nowrap overflow-hidden"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      {!collapsed && (
        <div className="px-4 py-3 border-t border-[#2A2A2A]">
          <p className="text-[10px] text-[#3A3A3A]">ApMoSys Admin v1.0</p>
        </div>
      )}
    </motion.aside>
  );
}
