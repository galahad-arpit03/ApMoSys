"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useThemeStore, themePresets, useToastStore, ColorTheme } from "@/src/admin/store/adminStore";

const colorFields: { key: keyof ColorTheme; label: string; desc: string }[] = [
  { key: "primaryRed", label: "Primary Color", desc: "Main brand accent — buttons, links, highlights" },
  { key: "primaryDark", label: "Primary Dark", desc: "Hover states and pressed variants" },
  { key: "primaryHover", label: "Primary Hover", desc: "Hover highlight for primary elements" },
  { key: "background", label: "Background", desc: "Main site background color" },
  { key: "foreground", label: "Foreground", desc: "Default text color" },
  { key: "surface", label: "Surface", desc: "Card / panel background color" },
  { key: "border", label: "Border", desc: "Default border color" },
];

const presetList = [
  { key: "default", label: "ApMoSys Red", color: "#B40001" },
  { key: "ocean", label: "Ocean Blue", color: "#0066CC" },
  { key: "emerald", label: "Emerald", color: "#059669" },
  { key: "violet", label: "Violet", color: "#7C3AED" },
  { key: "amber", label: "Amber", color: "#D97706" },
];

function darkenColor(hex: string, percent: number): string {
  hex = hex.replace(/^\s*#|\s*$/g, "");
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const newR = Math.max(0, Math.floor(r * (1 - percent)));
  const newG = Math.max(0, Math.floor(g * (1 - percent)));
  const newB = Math.max(0, Math.floor(b * (1 - percent)));

  return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
}

function lightenColor(hex: string, percent: number): string {
  hex = hex.replace(/^\s*#|\s*$/g, "");
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  const newR = Math.min(255, Math.floor(r + (255 - r) * percent));
  const newG = Math.min(255, Math.floor(g + (255 - g) * percent));
  const newB = Math.min(255, Math.floor(b + (255 - b) * percent));

  return `#${newR.toString(16).padStart(2, "0")}${newG.toString(16).padStart(2, "0")}${newB.toString(16).padStart(2, "0")}`;
}

export default function AdminColorsPage() {
  const { theme, updateColor, applyPreset, resetTheme, activePreset } = useThemeStore();
  const { addToast } = useToastStore();
  const [livePreview, setLivePreview] = useState(true);
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const handleColorChange = (key: keyof ColorTheme, value: string) => {
    updateColor(key, value);
    if (livePreview) {
      // Live CSS update
      const cssVarMap: Partial<Record<keyof ColorTheme, string>> = {
        primaryRed: "--color-primary-red",
        primaryDark: "--color-primary-dark",
        primaryHover: "--color-primary-hover",
        background: "--background",
        foreground: "--foreground",
        surface: "--color-gray-800",
        border: "--color-gray-700",
      };
      const cssVar = cssVarMap[key];
      if (cssVar) {
        document.documentElement.style.setProperty(cssVar, value);
      }
    }
  };

  const handleCustomColorAdd = (color: string) => {
    updateColor("primaryRed", color);
    
    const dark = darkenColor(color, 0.2);
    const hover = lightenColor(color, 0.15);
    
    updateColor("primaryDark", dark);
    updateColor("primaryHover", hover);
    
    if (livePreview) {
      document.documentElement.style.setProperty("--color-primary-red", color);
      document.documentElement.style.setProperty("--color-primary-dark", dark);
      document.documentElement.style.setProperty("--color-primary-hover", hover);
    }
    
    useThemeStore.setState({ activePreset: "custom" });
    addToast("Custom color added and theme updated!", "success");
  };

  const handlePreset = (key: string) => {
    applyPreset(key);
    addToast(`Theme "${presetList.find((p) => p.key === key)?.label}" applied!`, "success");
  };

  const handleReset = () => {
    resetTheme();
    addToast("Theme reset to defaults", "info");
  };

  return (
    <div className="min-h-screen text-[#FAFAFA]">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="font-heading font-extrabold text-2xl text-[#FAFAFA] mb-1">
          Color Management
        </h1>
        <p className="text-[#5A5A5A] text-sm">
          Customize your global color theme. Changes apply instantly across the site.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left: Color Controls */}
        <div className="xl:col-span-2 space-y-6">
          {/* Presets */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-6">
            <h2 className="font-heading font-bold text-sm text-[#FAFAFA] mb-4 flex items-center gap-2">
              <span className="text-base">✨</span> Theme Presets
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {presetList.map((preset) => (
                <motion.button
                  key={preset.key}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handlePreset(preset.key)}
                  className={`flex flex-col items-center gap-2 p-3 rounded-lg border transition-all cursor-pointer ${
                    activePreset === preset.key
                      ? "border-[#B40001] bg-[#B40001]/10"
                      : "border-[#2A2A2A] hover:border-[#3A3A3A] bg-[#0A0A0A]"
                  }`}
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white/10 shadow-lg"
                    style={{ backgroundColor: preset.color }}
                  />
                  <span className="text-[10px] text-[#7A7A7A] font-medium text-center leading-tight">
                    {preset.label}
                  </span>
                  {activePreset === preset.key && (
                    <div className="w-1.5 h-1.5 rounded-full bg-[#B40001]" />
                  )}
                </motion.button>
              ))}

              {/* Dynamic Custom Preset if activePreset is "custom" */}
              {activePreset === "custom" && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex flex-col items-center gap-2 p-3 rounded-lg border border-[#B40001] bg-[#B40001]/10 cursor-pointer"
                >
                  <div
                    className="w-8 h-8 rounded-full border-2 border-white/10 shadow-lg"
                    style={{ backgroundColor: theme.primaryRed }}
                  />
                  <span className="text-[10px] text-[#7A7A7A] font-medium text-center leading-tight">
                    Custom Color
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#B40001]" />
                </motion.button>
              )}

              {/* Add Custom Color Preset Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => colorPickerRef.current?.click()}
                className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg border-2 border-dashed border-[#2A2A2A] hover:border-[#B40001] hover:bg-[#B40001]/5 transition-all cursor-pointer bg-[#0A0A0A] group"
              >
                <div className="w-8 h-8 rounded-full bg-[#1A1A1A] border border-[#2A2A2A] flex items-center justify-center group-hover:border-[#B40001] transition-colors">
                  <svg className="w-4 h-4 text-[#7A7A7A] group-hover:text-[#FAFAFA] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-[10px] text-[#7A7A7A] font-bold uppercase tracking-wider text-center leading-tight">
                  Add Color
                </span>
              </motion.button>
            </div>

            {/* Hidden native color picker */}
            <input
              ref={colorPickerRef}
              type="color"
              className="hidden"
              onChange={(e) => handleCustomColorAdd(e.target.value)}
            />
          </div>

          {/* Custom Colors */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-6">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-heading font-bold text-sm text-[#FAFAFA] flex items-center gap-2">
                <span>🎨</span> Custom Colors
              </h2>
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <span className="text-xs text-[#5A5A5A]">Live Preview</span>
                <div
                  onClick={() => setLivePreview(!livePreview)}
                  className={`relative w-9 h-5 rounded-full transition-colors duration-200 ease-in-out cursor-pointer ${
                    livePreview ? "bg-[#B40001]" : "bg-[#2A2A2A]"
                  }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                      livePreview ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </div>
              </label>
            </div>

            <div className="space-y-4">
              {colorFields.map((field) => (
                <div key={field.key} className="flex items-center gap-4">
                  <div className="relative">
                    <input
                      type="color"
                      value={theme[field.key] as string}
                      onChange={(e) => handleColorChange(field.key, e.target.value)}
                      className="w-10 h-10 rounded-lg border border-[#2A2A2A] cursor-pointer bg-transparent"
                      style={{ padding: 2 }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-[#FAFAFA]">{field.label}</span>
                      <code className="text-[11px] text-[#5A5A5A] bg-[#0A0A0A] px-2 py-0.5 rounded">
                        {theme[field.key] as string}
                      </code>
                    </div>
                    <p className="text-xs text-[#3A3A3A] mt-0.5">{field.desc}</p>
                  </div>
                  <input
                    type="text"
                    value={theme[field.key] as string}
                    onChange={(e) => handleColorChange(field.key, e.target.value)}
                    className="w-28 bg-[#0A0A0A] border border-[#2A2A2A] rounded-md px-2 py-1.5 text-xs text-[#FAFAFA] font-mono focus:outline-none focus:border-[#B40001] transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Border Radius */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-6">
            <h2 className="font-heading font-bold text-sm text-[#FAFAFA] mb-4 flex items-center gap-2">
              <span>⬛</span> Border Radius
            </h2>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="0"
                max="24"
                step="2"
                value={parseInt(theme.borderRadius)}
                onChange={(e) => updateColor("borderRadius", e.target.value)}
                className="flex-1 accent-[#B40001]"
              />
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-[#FAFAFA] w-12 text-center">
                  {theme.borderRadius}px
                </span>
                <div
                  className="w-10 h-10 bg-[#B40001]/20 border-2 border-[#B40001]"
                  style={{ borderRadius: `${theme.borderRadius}px` }}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                addToast("Theme saved successfully!", "success");
              }}
              className="flex-1 bg-[#B40001] hover:bg-[#D10000] text-white font-bold py-3 rounded-lg text-sm transition-all cursor-pointer"
            >
              Save Theme
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleReset}
              className="px-6 bg-[#1A1A1A] hover:bg-[#2A2A2A] text-[#7A7A7A] hover:text-[#FAFAFA] font-medium py-3 rounded-lg text-sm transition-all border border-[#2A2A2A] cursor-pointer"
            >
              Reset
            </motion.button>
          </div>
        </div>

        {/* Right: Live Preview */}
        <div className="space-y-4">
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-6">
            <h2 className="font-heading font-bold text-sm text-[#FAFAFA] mb-4">
              🔍 Live Preview
            </h2>
            
            {/* Mini site preview */}
            <div
              className="rounded-lg overflow-hidden border border-[#2A2A2A] text-xs"
              style={{ backgroundColor: theme.background, borderRadius: `${theme.borderRadius}px` }}
            >
              {/* Fake navbar */}
              <div className="flex items-center justify-between px-3 py-2 border-b" style={{ borderColor: theme.border, backgroundColor: theme.surface }}>
                <span className="font-bold" style={{ color: theme.foreground }}>
                  ApMoSys<span style={{ color: theme.primaryRed }}>.</span>
                </span>
                <button
                  className="px-2 py-0.5 text-[10px] font-bold text-white rounded"
                  style={{ backgroundColor: theme.primaryRed, borderRadius: `${Math.max(2, parseInt(theme.borderRadius) / 2)}px` }}
                >
                  CTA
                </button>
              </div>

              {/* Fake hero */}
              <div className="px-4 py-6 text-center">
                <div className="inline-block px-3 py-1 text-[9px] font-semibold rounded-full mb-3" style={{ backgroundColor: `${theme.primaryRed}20`, color: theme.primaryRed }}>
                  Badge Text
                </div>
                <div className="w-24 h-3 rounded mx-auto mb-2" style={{ backgroundColor: theme.foreground }} />
                <div className="w-32 h-2 rounded mx-auto mb-1 opacity-40" style={{ backgroundColor: theme.foreground }} />
                <div className="w-28 h-2 rounded mx-auto opacity-40" style={{ backgroundColor: theme.foreground }} />
                <div className="flex justify-center gap-2 mt-4">
                  <button
                    className="px-3 py-1 text-[10px] text-white font-bold"
                    style={{ backgroundColor: theme.primaryRed, borderRadius: `${Math.max(2, parseInt(theme.borderRadius) / 2)}px` }}
                  >
                    Primary
                  </button>
                  <button
                    className="px-3 py-1 text-[10px] font-medium border"
                    style={{ borderColor: theme.border, color: theme.foreground, borderRadius: `${Math.max(2, parseInt(theme.borderRadius) / 2)}px` }}
                  >
                    Secondary
                  </button>
                </div>
              </div>

              {/* Fake cards */}
              <div className="px-3 pb-4 grid grid-cols-2 gap-2">
                {[1, 2].map((i) => (
                  <div key={i} className="p-2 rounded border" style={{ backgroundColor: theme.surface, borderColor: theme.border, borderRadius: `${Math.max(2, parseInt(theme.borderRadius) / 2)}px` }}>
                    <div className="w-3 h-3 rounded mb-1" style={{ backgroundColor: theme.primaryRed }} />
                    <div className="w-full h-1.5 rounded mb-1 opacity-60" style={{ backgroundColor: theme.foreground }} />
                    <div className="w-3/4 h-1.5 rounded opacity-30" style={{ backgroundColor: theme.foreground }} />
                  </div>
                ))}
              </div>
            </div>

            <p className="text-[10px] text-[#3A3A3A] text-center mt-3">
              Colors update in real-time
            </p>
          </div>

          {/* Current palette */}
          <div className="bg-[#111111] border border-[#1E1E1E] rounded-xl p-4">
            <h3 className="font-heading font-bold text-xs text-[#5A5A5A] uppercase tracking-wider mb-3">
              Current Palette
            </h3>
            <div className="flex gap-2 flex-wrap">
              {[theme.primaryRed, theme.primaryDark, theme.primaryHover, theme.background, theme.foreground, theme.surface, theme.border].map((color, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-md border border-[#2A2A2A] shadow-inner"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
