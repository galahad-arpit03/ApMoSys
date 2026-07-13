"use client";

import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import CoEPageContent from "@/src/what-we-do/CoEPageContent";

export default function AdminCoEPage() {
  return (
    <AdminEditOverlay page="CoE & Innovations">
      <div className="bg-[#121212]">
        <CoEPageContent />
      </div>
    </AdminEditOverlay>
  );
}