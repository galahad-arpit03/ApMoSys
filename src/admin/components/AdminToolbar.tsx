"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useContentStore, useToastStore, useAdminUIStore } from "@/src/admin/store/adminStore";

interface AdminToolbarProps {
  onLogout: () => void;
}

const pageLinks = [
  { label: "Home", href: "/administrator" },
  { label: "About", href: "/administrator/about" },
  { label: "Services", href: "/administrator/services" },
  { label: "Solutions", href: "/administrator/solutions" },
  { label: "Industries", href: "/administrator/industries" },
  { label: "Products", href: "/administrator/products" },
  { label: "Blogs", href: "/administrator/blogs" },
  { label: "Careers", href: "/administrator/careers" },
  { label: "Contact", href: "/administrator/contact" },
];

export default function AdminToolbar({ onLogout }: AdminToolbarProps) {
  const pathname = usePathname();
  const { isDirty, markSaved } = useContentStore();
  const { addToast } = useToastStore();
  const { deviceMode, setDeviceMode, sidebarCollapsed, toggleSidebar } = useAdminUIStore();

  const handleSave = () => {
    markSaved();
    addToast("Changes saved successfully!", "success");
  };

  // Get current page name
  const currentPage = pageLinks.find((p) => p.href === pathname)?.label ?? "Admin";

  // Compute frontend preview URL
  const previewUrl = pathname?.replace("/administrator", "") || "/";

  return (
    <motion.div
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-[200] h-10 bg-[#0A0A0A] border-b border-primary-red/30 flex items-center px-4 gap-4"
      style={{ backdropFilter: "blur(10px)" }}
    >
      {/* Left: Brand / Mobile Sidebar Hamburger */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <button
          onClick={toggleSidebar}
          className="md:hidden text-[#7A7A7A] hover:text-[#FAFAFA] transition-colors p-1 rounded hover:bg-[#1A1A1A] cursor-pointer flex items-center justify-center"
          title="Toggle Navigation Menu"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {sidebarCollapsed ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            )}
          </svg>
        </button>

        <div className="w-2 h-2 rounded-full bg-primary-red animate-pulse max-sm:hidden" />
        <span className="font-heading font-bold text-[11px] text-[#FAFAFA] uppercase tracking-wider max-sm:hidden">
          Admin Mode
        </span>
        <span className="text-[#3A3A3A] max-sm:hidden">|</span>
        <span className="text-[11px] text-[#7A7A7A] font-medium">{currentPage}</span>
      </div>



      {/* Right: Actions */}
      <div className="flex items-center gap-2 flex-shrink-0 ml-auto">
        {/* Preview link */}
        <a
          href={previewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2.5 py-1 rounded text-[10px] text-[#7A7A7A] hover:text-[#FAFAFA] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Preview
        </a>

        {/* Phone Preview button */}
        <button
          onClick={() => setDeviceMode(deviceMode === "mobile" ? "desktop" : "mobile")}
          className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[10px] font-medium transition-all cursor-pointer ${
            deviceMode === "mobile"
              ? "text-[#FAFAFA] bg-primary-red/20 border border-primary-red/50 shadow-[0_0_8px_rgba(180,0,1,0.2)]"
              : "text-[#7A7A7A] hover:text-[#FAFAFA] border border-[#2A2A2A] hover:border-[#3A3A3A]"
          }`}
          title="Toggle Mobile (Phone) View"
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          phone
        </button>

        {/* Save button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleSave}
          className={`flex items-center gap-1.5 px-3 py-1 rounded text-[10px] font-bold transition-all duration-200 cursor-pointer ${
            isDirty
              ? "bg-primary-red text-white shadow-[0_0_12px_rgba(180,0,1,0.4)]"
              : "bg-[#1A1A1A] text-[#5A5A5A] border border-[#2A2A2A]"
          }`}
        >
          {isDirty && <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />}
          Save Changes
        </motion.button>

        {/* Logout */}
        <button
          onClick={onLogout}
          className="px-2.5 py-1 rounded text-[10px] text-[#7A7A7A] hover:text-[#FF4444] hover:bg-[#1A1A1A] border border-[#2A2A2A] transition-all cursor-pointer"
        >
          Logout
        </button>
      </div>
    </motion.div>
  );
}
