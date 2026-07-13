"use client";

import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import ProductsPageContent from "@/src/what-we-do/ProductsPageContent";

export default function AdminProductsPage() {
  return (
    <AdminEditOverlay page="Products">
      <div className="bg-[#121212]">
        <ProductsPageContent />
      </div>
    </AdminEditOverlay>
  );
}