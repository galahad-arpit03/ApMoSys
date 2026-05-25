"use client";

import React from "react";
import { useContentStore } from "@/src/admin/store/adminStore";

interface SectionThemeWrapperProps {
  sectionId: string;
  defaultTheme: "dark" | "light";
  children: (theme: "dark" | "light") => React.ReactNode;
  className?: string;
}

export default function SectionThemeWrapper({
  sectionId,
  defaultTheme,
  children,
  className = "",
}: SectionThemeWrapperProps) {
  // Subscribe to dynamic themes dictionary inside the content store
  const theme = useContentStore((state) => state.content.sectionThemes?.[sectionId]) || defaultTheme;
  const updateField = useContentStore((state) => state.updateField);

  // Check admin mode based on routing namespace
  const isAdmin = typeof window !== "undefined" && window.location.pathname.startsWith("/administrator");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    updateField(`sectionThemes.${sectionId}`, nextTheme);
  };

  return (
    <div className={`relative group/theme ${className}`}>
      {isAdmin && (
        <button
          onClick={toggleTheme}
          className="absolute top-4 right-4 z-50 bg-[#121212]/80 hover:bg-[#B40001] text-[#FFFFFF] border border-[#2A2A2A] rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-sm opacity-100 md:opacity-0 md:group-hover/theme:opacity-100 transition-opacity duration-300 cursor-pointer"
          title="Toggle Section Theme (Light / Dark)"
        >
          <span>🎨</span>
          <span>Theme: {theme}</span>
        </button>
      )}
      {children(theme)}
    </div>
  );
}
