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
  const isVisible = useContentStore((state) => state.content.sectionVisibilities?.[sectionId] ?? true);
  const updateField = useContentStore((state) => state.updateField);
  const toggleSectionVisibility = useContentStore((state) => state.toggleSectionVisibility);

  // Check admin mode based on routing namespace
  const isAdmin = typeof window !== "undefined" && window.location.pathname.startsWith("/administrator");

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    updateField(`sectionThemes.${sectionId}`, nextTheme);
  };

  if (!isAdmin && !isVisible) {
    return null;
  }

  return (
    <div className={`relative group/theme ${className} ${isAdmin && !isVisible ? "opacity-50 grayscale" : ""}`}>
      {isAdmin && (
        <div className="absolute top-4 right-4 z-50 flex items-center gap-3 opacity-100 md:opacity-0 md:group-hover/theme:opacity-100 transition-opacity duration-300">
          
          <label 
            className="flex items-center gap-2 bg-[#121212]/80 text-[#FAFAFA] border border-[#2A2A2A] rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider shadow-lg backdrop-blur-sm cursor-pointer hover:bg-[#1A1A1A] transition-colors"
            title="Check to show this component on the main website. Uncheck to hide it."
          >
            <input 
              type="checkbox" 
              className="accent-primary-red w-3.5 h-3.5 cursor-pointer"
              checked={isVisible}
              onChange={() => toggleSectionVisibility(sectionId)}
            />
            <span>Visible</span>
          </label>

          <button
            onClick={toggleTheme}
            className="bg-[#121212]/80 hover:bg-[#B40001] text-[#FFFFFF] border border-[#2A2A2A] rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-sm transition-colors cursor-pointer"
            title="Toggle Section Theme (Light / Dark)"
          >
            <span>🎨</span>
            <span>Theme: {theme}</span>
          </button>
        </div>
      )}
      {children(theme)}
    </div>
  );
}
