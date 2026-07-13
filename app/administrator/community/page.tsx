import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import CommunityPage from "@/src/who-we-are/community/CommunityPage";

export default function AdminCommunityPage() {
  return (
    <AdminEditOverlay page="Community">
      <CommunityPage />
    </AdminEditOverlay>
  );
}
