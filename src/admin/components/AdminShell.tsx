"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore, useToastStore } from "@/src/admin/store/adminStore";
import AdminToolbar from "@/src/admin/components/AdminToolbar";
import ThemeApplicator from "@/src/admin/components/ThemeApplicator";
import ToastContainer from "@/src/admin/components/ToastContainer";
import AdminSidebar from "@/src/admin/components/AdminSidebar";

interface AdminShellProps {
  children: React.ReactNode;
}

// Pages that use the special sidebar layout instead of full-page edit mode
function isSidebarRoute(pathname: string | null): boolean {
  if (!pathname) return false;
  const sidebarRoutes = [
    "/administrator/home",
    "/administrator/colors",
    "/administrator/settings",
    "/administrator/blogs",
    "/administrator/blogs/create",
  ];
  if (sidebarRoutes.includes(pathname)) return true;
  if (pathname.startsWith("/administrator/blogs/edit/")) return true;
  return false;
}

export default function AdminShell({ children }: AdminShellProps) {
  const { isAuthenticated, logout } = useAuthStore();
  const { addToast } = useToastStore();
  const router = useRouter();
  const pathname = usePathname();
  const [collapsed, setCollapsed] = React.useState(false);

  // Login page bypasses auth gate
  const isLoginPage = pathname === "/administrator/login";

  const handleLogout = () => {
    document.cookie =
      "admin-authenticated=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    logout();
    addToast("Logged out successfully", "info");
    router.push("/administrator/login");
  };

  useEffect(() => {
    if (!isAuthenticated && !isLoginPage) {
      router.replace("/administrator/login");
    }
  }, [isAuthenticated, isLoginPage, router]);

  // Login page renders without toolbar
  if (isLoginPage) {
    return (
      <>
        <ThemeApplicator />
        <ToastContainer />
        {children}
      </>
    );
  }

  if (!isAuthenticated) return null;

  // Determine if this is a sidebar-style page
  const isSidebarPage = isSidebarRoute(pathname);

  return (
    <>
      <ThemeApplicator />
      <ToastContainer />

      {/* Admin Toolbar — 40px tall, fixed at top */}
      <AdminToolbar onLogout={handleLogout} />

      {/* Unified Persistent Admin Shell Layout */}
      <div className="min-h-screen bg-[#0A0A0A] relative" style={{ paddingTop: 40 }}>
        <AdminSidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        <main className={`min-h-screen transition-all duration-300 ${collapsed ? "ml-16" : "ml-64"}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className={isSidebarPage ? "p-8" : ""}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </>
  );
}
