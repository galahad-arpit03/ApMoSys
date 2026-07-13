"use client";

import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import AlliancePageContent from "@/src/what-we-do/AlliancePageContent";

export default function AdminAlliancePage() {
  return (
    <AdminEditOverlay page="Alliance">
      <div className="bg-[#121212]">
        <AlliancePageContent />
      </div>
    </AdminEditOverlay>
  );
}