import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import LandingPage from "@/src/LandingPage/LandingPage";

export default function AdminServicesPage() {
  return (
    <AdminEditOverlay page="Services">
      <LandingPage />
    </AdminEditOverlay>
  );
}
