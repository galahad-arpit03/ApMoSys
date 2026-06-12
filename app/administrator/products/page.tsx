import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import LandingPage from "@/src/landing/LandingPage";

export default function AdminProductsPage() {
  return (
    <AdminEditOverlay page="Products">
      <LandingPage />
    </AdminEditOverlay>
  );
}
