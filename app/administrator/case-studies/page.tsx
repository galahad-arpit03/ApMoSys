"use client";

import React from "react";
import Link from "next/link";
import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";

// Case studies page doesn't exist yet in the frontend
// Show a placeholder with the admin UI
export default function AdminCaseStudiesPage() {
  return (
    <AdminEditOverlay page="Case Studies">
      <div className="min-h-screen bg-[#121212] flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">📊</span>
          </div>
          <h2 className="font-heading font-bold text-xl text-[#FAFAFA] mb-2">Case Studies</h2>
          <p className="text-[#5A5A5A] text-sm mb-6">
            The Case Studies page hasn&apos;t been built yet on the frontend. 
            Once created at <code className="text-[#B40001]">/case-studies</code>, it will appear here for editing.
          </p>
          <Link
            href="/administrator/home"
            className="inline-flex items-center gap-2 bg-[#B40001] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#D10000] transition-colors"
          >
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </AdminEditOverlay>
  );
}
