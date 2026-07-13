import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import TeamPage from "@/src/who-we-are/our-team/TeamPage";

export default function AdminTeamPage() {
  return (
    <AdminEditOverlay page="Team">
      <TeamPage />
    </AdminEditOverlay>
  );
}
