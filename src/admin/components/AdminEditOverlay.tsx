"use client";

import React from "react";

interface AdminEditOverlayProps {
  page: string;
  children: React.ReactNode;
}

// This component activates the "admin-edit-mode" class and provides
// a data attribute that signals to the page what the active editing context is.
// The actual inline editing is done per-component via EditableText / EditableImage.
export default function AdminEditOverlay({ page, children }: AdminEditOverlayProps) {
  return (
    <div
      className="admin-edit-mode w-full"
      data-admin-page={page}
    >
      {/* Page label badge */}
      <div className="fixed bottom-6 left-6 z-[300] flex items-center gap-2 bg-[#0A0A0A] border border-[#2A2A2A] rounded-full px-4 py-2 shadow-xl">
        <div className="w-1.5 h-1.5 rounded-full bg-primary-red animate-pulse" />
        <span className="text-[10px] font-semibold text-[#7A7A7A] uppercase tracking-wider">
          Editing: <span className="text-[#FAFAFA]">{page}</span>
        </span>
        {/* <span className="text-[10px] text-[#3A3A3A] ml-1">— hover text to edit</span> */}
      </div>
      {children}
    </div>
  );
}
