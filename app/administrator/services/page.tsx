"use client";

import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import ServicesPageContent from "@/src/what-we-do/ServicesPageContent";

export default function AdminServicesPage() {
  return (
    <AdminEditOverlay page="Services">
      <div className="bg-[#121212]">
        <ServicesPageContent />
      </div>
    </AdminEditOverlay>
  );
}