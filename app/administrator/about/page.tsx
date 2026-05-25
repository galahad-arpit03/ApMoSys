import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import LandingPage from "@/src/LandingPage/LandingPage";

// About section is embedded in the landing page (/#about anchor)
// We render the full home page and let admin edit the about section inline
export default function AdminAboutPage() {
  return (
    <AdminEditOverlay page="About">
      <LandingPage />
    </AdminEditOverlay>
  );
}
