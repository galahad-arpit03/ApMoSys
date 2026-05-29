"use client";

import React, { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore, useToastStore, useAdminUIStore } from "@/src/admin/store/adminStore";
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
  const { deviceMode, sidebarCollapsed: collapsed, setSidebarCollapsed } = useAdminUIStore();
  const [isIframe, setIsIframe] = React.useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line
      setIsIframe(window.location.search.includes("mode=phone-iframe"));
    }
  }, []);

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

  if (isIframe) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <ThemeApplicator />
        {children}
      </div>
    );
  }

  if (deviceMode === "mobile") {
    return (
      <>
        <ThemeApplicator />
        <ToastContainer />

        {/* Admin Toolbar — 40px tall, fixed at top */}
        <AdminToolbar onLogout={handleLogout} />

        {/* Unified Persistent Admin Shell Layout in Mobile View */}
        <div className="min-h-screen bg-[#060606] relative" style={{ paddingTop: 40 }}>
          
          {/* Mobile Overlay Drawer Sidebar */}
          <AdminSidebar />
          
          {/* Sidebar Backdrop Overlay on Mobile */}
          {!collapsed && (
            <div
              onClick={() => setSidebarCollapsed(true)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs z-35 md:hidden"
            />
          )}

          {/* Main simulator content area */}
          <main className={`min-h-[calc(100vh-40px)] transition-all duration-300 flex items-center justify-center p-4 sm:p-6 lg:p-8 ${collapsed ? "ml-16 max-md:ml-0" : "ml-64 max-md:ml-0"}`}>
            
            {/* Sleek Grid/Dots Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />
            
            {/* Device Frame Chassis Container */}
            <div className="relative flex flex-col items-center justify-center scale-[0.75] xs:scale-[0.8] sm:scale-[0.9] md:scale-95 lg:scale-100 transition-transform">
              
              {/* Device Model Label */}
              <div className="mb-4 flex items-center gap-2 bg-[#121212] border border-[#222] rounded-full px-4 py-1.5 shadow-md">
                <span className="text-[10px] font-bold text-[#888] uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B40001] animate-pulse" />
                  Live Mobile Editor
                </span>
                <span className="text-[10px] text-[#333] font-medium">|</span>
                <span className="text-[10px] text-[#888] font-mono">iPhone 15 Pro</span>
              </div>

              {/* iPhone 15 Pro Chassis */}
              <div className="relative w-[390px] h-[844px] bg-[#000] rounded-[52px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(180,0,1,0.06)] border-[12px] border-[#1c1c1e] overflow-hidden flex flex-col ring-4 ring-[#151516] ring-offset-4 ring-offset-[#0A0A0A]">
                
                {/* Dynamic Island / Bezel Top Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[30px] bg-black rounded-full z-50 flex items-center justify-between px-3 pointer-events-none">
                  {/* Camera lens indicator */}
                  <div className="w-3.5 h-3.5 rounded-full bg-[#111] border border-[#222] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#003366] opacity-30" />
                  </div>
                  {/* Speaker dot */}
                  <div className="w-3.5 h-1 rounded-full bg-[#222] opacity-40" />
                </div>

                {/* Simulated Phone Status Bar */}
                <div className="h-10 bg-black text-white flex items-end justify-between px-8 pb-1.5 z-40 relative text-[11px] font-semibold tracking-tight select-none pointer-events-none">
                  {/* Time */}
                  <span>9:41</span>
                  {/* Indicators */}
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L17.61 4.97C16.07 3.74 14.12 3 12 3zm5.61 3.39L4.97 17.61C6.51 18.84 8.46 19.6 10.61 19.6c4.97 0 9-4.03 9-9 0-2.12-.74-4.07-1.97-5.61z" />
                    </svg>
                    <span className="text-[9px]">5G</span>
                    <div className="w-[18px] h-2.5 border border-white/60 rounded-xs p-0.5 flex items-center justify-start">
                      <div className="w-full h-full bg-white rounded-xs" />
                    </div>
                  </div>
                </div>

                {/* The Live Interactive Iframe Screen */}
                <div className="flex-1 w-full bg-[#121212] overflow-hidden relative">
                  <iframe
                    src={`${pathname}?mode=phone-iframe`}
                    className="w-full h-full border-0"
                    style={{ WebkitOverflowScrolling: "touch" }}
                  />
                </div>

                {/* Simulated Home Indicator Bar */}
                <div className="h-5 bg-black flex items-center justify-center z-40 relative select-none pointer-events-none pb-1">
                  <div className="w-[120px] h-[4px] bg-white/60 rounded-full" />
                </div>
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <ThemeApplicator />
      <ToastContainer />

      {/* Admin Toolbar — 40px tall, fixed at top */}
      <AdminToolbar onLogout={handleLogout} />

      {/* Unified Persistent Admin Shell Layout */}
      <div className="min-h-screen bg-[#0A0A0A] relative" style={{ paddingTop: 40 }}>
        
        {/* Mobile/Desktop Sidebar Drawer */}
        <AdminSidebar />

        {/* Sidebar Backdrop Overlay on Mobile */}
        {!collapsed && (
          <div
            onClick={() => setSidebarCollapsed(true)}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs z-35 md:hidden"
          />
        )}

        <main className={`min-h-screen transition-all duration-300 ${collapsed ? "ml-16 max-md:ml-0" : "ml-64 max-md:ml-0"}`}>
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
