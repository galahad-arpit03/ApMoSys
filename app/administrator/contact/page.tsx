import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import ContactPage from "@/src/contact-us/ContactPage";

export default function AdminContactPage() {
  return (
    <AdminEditOverlay page="Contact">
      <div className="bg-[#FFFFFF] text-[#121212]">
        <ContactPage />
      </div>
    </AdminEditOverlay>
  );
}
