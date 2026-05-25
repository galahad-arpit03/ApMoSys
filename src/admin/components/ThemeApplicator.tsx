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
    root.style.setProperty(
      "--admin-border-radius",
      `${theme.borderRadius}px`
    );
  }, [theme]);

  return null;
}
