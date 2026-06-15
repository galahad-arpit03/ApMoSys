import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import AboutPage from "@/src/who-we-are/about-us/AboutPage";

export default function AdminAboutPage() {
  return (
    <AdminEditOverlay page="About">
      <AboutPage />
    </AdminEditOverlay>
  );
}
