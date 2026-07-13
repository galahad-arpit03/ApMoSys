"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAdminUIStore } from "@/src/admin/store/adminStore";
import { LayoutDashboard, Home, Navigation, Footprints, Users, Settings, Lightbulb, Factory, Package, FileText, Briefcase, Phone, Palette, FlaskConical } from "lucide-react";
const navItems = [
  { label: "Dashboard", href: "/administrator/home", icon: <LayoutDashboard className="w-4 h-4" /> },
  { label: "Home", href: "/administrator", icon: <Home className="w-4 h-4" /> },
  { label: "Navbar", href: "/administrator/navbar", icon: <Navigation className="w-4 h-4" /> },
  { label: "Footer", href: "/administrator/footer", icon: <Footprints className="w-4 h-4" /> },
  { label: "About", href: "/administrator/about", icon: <Users className="w-4 h-4" /> },
  { label: "Services", href: "/administrator/services", icon: <Settings className="w-4 h-4" /> },
  { label: "Solutions", href: "/administrator/solutions", icon: <Lightbulb className="w-4 h-4" /> },
  { label: "Industries", href: "/administrator/industries", icon: <Factory className="w-4 h-4" /> },
  { label: "Products", href: "/administrator/products", icon: <Package className="w-4 h-4" /> },
  { label: "Blogs", href: "/administrator/blogs", icon: <FileText className="w-4 h-4" /> },
  { label: "Careers", href: "/administrator/careers", icon: <Briefcase className="w-4 h-4" /> },
  { label: "Contact", href: "/administrator/contact", icon: <Phone className="w-4 h-4" /> },
  { divider: true },
  { label: "Colors", href: "/administrator/colors", icon: <Palette className="w-4 h-4" /> },
  { label: "Settings", href: "/administrator/settings", icon: <Settings className="w-4 h-4" /> },
  { label: "CoE & Innovations", href: "/administrator/coe", icon: <FlaskConical className="w-4 h-4" /> },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { sidebarCollapsed: collapsed, toggleSidebar: onToggle } = useAdminUIStore();

  return (
    <motion.aside
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-10 left-0 h-[calc(100vh-40px)] bg-[#0D0D0D] border-r border-[#2A2A2A] z-45 flex flex-col transition-all duration-300 ${
        collapsed
          ? "w-16 max-md:w-0 max-md:opacity-0 max-md:pointer-events-none max-md:-translate-x-full overflow-hidden border-none"
          : "w-64 max-md:z-50 max-md:shadow-[5px_0_25px_rgba(0,0,0,0.6)]"
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
