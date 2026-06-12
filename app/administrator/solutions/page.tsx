import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import LandingPage from "@/src/landing/LandingPage";

export default function AdminSolutionsPage() {
  return (
    <AdminEditOverlay page="Solutions">
      <LandingPage />
    </AdminEditOverlay>
  );
}
