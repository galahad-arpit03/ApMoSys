import type { Metadata } from "next";
import AdminShell from "@/src/admin/components/AdminShell";

export const metadata: Metadata = {
  title: "Admin Panel | ApMoSys",
  description: "ApMoSys CMS Admin Panel",
  robots: "noindex, nofollow",
};

export default function AdministratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminShell>{children}</AdminShell>;
}
