"use client";

import React, { useEffect } from "react";
import { useThemeStore } from "@/src/admin/store/adminStore";

export default function ThemeApplicator() {
  const { theme } = useThemeStore();

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary-red", theme.primaryRed);
    root.style.setProperty("--color-primary-dark", theme.primaryDark);
    root.style.setProperty("--color-primary-hover", theme.primaryHover);
    root.style.setProperty("--background", theme.background);
    root.style.setProperty("--foreground", theme.foreground);
    root.style.setProperty("--color-gray-800", theme.surface);
    root.style.setProperty("--color-gray-700", theme.border);
    
    const baseRadius = parseInt(theme.borderRadius) || 0;
    root.style.setProperty("--admin-border-radius", `${baseRadius}px`);
    
    // Map to Tailwind v4 radius variables to apply globally
    root.style.setProperty("--radius", `${baseRadius}px`);
    root.style.setProperty("--radius-sm", `${Math.max(0, baseRadius - 2)}px`);
    root.style.setProperty("--radius-md", `${baseRadius}px`);
    root.style.setProperty("--radius-lg", `${baseRadius + 2}px`);
    root.style.setProperty("--radius-xl", `${baseRadius + 4}px`);
    root.style.setProperty("--radius-2xl", `${baseRadius + 8}px`);
    root.style.setProperty("--radius-3xl", `${baseRadius + 16}px`);

    // Font application
    if (theme.fontFamily === "default") {
      root.style.removeProperty("--font-sans");
      root.style.removeProperty("--font-heading");
    } else {
      root.style.setProperty("--font-sans", `${theme.fontFamily}, ui-sans-serif, system-ui, sans-serif`);
      root.style.setProperty("--font-heading", `${theme.fontFamily}, ui-sans-serif, system-ui, sans-serif`);
    }
  }, [theme]);

  return null;
}
