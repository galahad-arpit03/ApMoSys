import AdminEditOverlay from "@/src/admin/components/AdminEditOverlay";
import BlogPage from "@/src/blogs/BlogPage";

export default function AdminBlogsPageEditor() {
  return (
    <AdminEditOverlay page="Blogs">
      <div className="bg-[#000000] min-h-screen">
        <BlogPage />
      </div>
    </AdminEditOverlay>
  );
}
