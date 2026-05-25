"use client";

import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import CareersPage from "@/src/CareersPage/CareersPage";

export default function AdminCareersPage() {
  return (
    <AdminEditOverlay page="Careers">
      <div className="bg-[#121212]">
        <CareersPage />
      </div>
    </AdminEditOverlay>
  );
}
