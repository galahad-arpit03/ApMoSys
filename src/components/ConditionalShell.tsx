"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/src/nav-bar/Navbar";
import Footer from "@/src/footer/Footer";
import ThemeApplicator from "@/src/admin/components/ThemeApplicator";
import AnnouncementBar from "@/src/landing/AnnouncementBar/AnnouncementBar";

export default function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/administrator");

  if (isAdmin) {
    // Admin pages handle their own layout via AdminShell
    return <>{children}</>;
  }

  return (
    <>
      <ThemeApplicator />
      <AnnouncementBar />
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </>
  );
}
