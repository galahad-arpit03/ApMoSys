import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import LeadershipPage from "@/src/who-we-are/leadership/LeadershipPage";

export default function AdminLeadershipPage() {
  return (
    <AdminEditOverlay page="Leadership">
      <LeadershipPage />
    </AdminEditOverlay>
  );
}
