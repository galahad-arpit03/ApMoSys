"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useToastStore } from "@/src/admin/store/adminStore";

export default function ToastContainer() {
  const { toasts, removeToast } = useToastStore();

  const colorMap = {
    success: "bg-[#0D2A0D] border-[#1A4D1A] text-[#4ADE80]",
    error: "bg-[#2A0D0D] border-[#4D1A1A] text-[#F87171]",
    info: "bg-[#0D1A2A] border-[#1A2D4D] text-[#60A5FA]",
  };

  const iconMap = {
    success: "✓",
    error: "✕",
    info: "ℹ",
  };

  return (
    <div className="fixed bottom-6 right-6 z-[500] flex flex-col gap-2 pointer-events-none">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-lg border text-sm font-medium shadow-xl ${colorMap[toast.type]}`}
            style={{ minWidth: 260 }}
          >
            <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
              {iconMap[toast.type]}
            </span>
            <span className="flex-1">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-current opacity-60 hover:opacity-100 transition-opacity text-lg leading-none cursor-pointer"
            >
              ×
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
