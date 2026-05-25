// Admin: Home page editor
// Renders the real frontend home page for inline editing
import LandingPage from "@/src/LandingPage/LandingPage";
import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";

export default function AdminHomeFrontendPage() {
  return (
    <AdminEditOverlay page="home">
      <LandingPage />
    </AdminEditOverlay>
  );
}
