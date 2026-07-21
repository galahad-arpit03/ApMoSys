"use client";
import { teamgalleryData } from "./TeamGalleryData";


import Image from "next/image";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";

const gallery = [
  "/team/team1.png",
  "/team/team2.png",
  "/team/team3.png",
  "/team/team4.png",
  "/team/team5.png",
  "/team/team6.png",
];

const getBorderClasses = (idx: number, total: number) => {
  let classes = "";
  if (idx < total - 1) classes += "border-b ";
  
  if (idx < total - 2) classes += "md:border-b ";
  else classes += "md:border-b-0 ";
  
  if (idx % 2 === 0) classes += "md:border-r ";
  else classes += "md:border-r-0 ";
  
  if (idx < total - 3) classes += "lg:border-b ";
  else classes += "lg:border-b-0 ";
  
  if ((idx + 1) % 3 !== 0) classes += "lg:border-r ";
  else classes += "lg:border-r-0 ";
  
  return classes;
};

export default function TeamGallery() {
  return (
    <SectionThemeWrapper sectionId="team_gallery" defaultTheme="dark">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-10 sm:py-14 lg:py-16 transition-colors duration-300 ${isDark ? "bg-[#0A1128]" : "bg-white"}`}>
            <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10 sm:mb-16">
                <div className="shrink-0">
                  <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-heading font-normal leading-[1.1] tracking-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                    <EditableText path="team.gallery.heading1" fallback="Moments That" as="span" />
                    <br className="hidden lg:block" />
                    <span>
                      <EditableText path="team.gallery.heading2" fallback="Define Us" as="span" />
                    </span>
                  </h2>
                </div>
                <div className="flex flex-col lg:items-end gap-6 max-w-xl">
                  <p className={`text-base lg:text-lg leading-relaxed lg:text-left ${isDark ? "text-gray-300" : "text-[#5A5A5A]"}`}>
                    Explore the culture, camaraderie, and everyday moments that make our workplace unique. We celebrate our achievements and value the connections that drive our success.
                  </p>
                </div>
              </div>

              {/* Tabular Grid Section with Images */}
              <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full border-t border-b ${isDark ? "border-[#1F2C47]" : "border-gray-200"}`}>
                {gallery.map((image, i) => (
                  <div
                    key={image}
                    className={`group py-6 md:py-10 px-6 xl:px-10 flex flex-col items-center justify-center transition-colors ${
                      isDark ? "hover:bg-[#121B31]/50" : "hover:bg-gray-100/50"
                    } ${isDark ? "border-[#1F2C47]" : "border-gray-200"} ${getBorderClasses(i, gallery.length)}`}
                  >
                    <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-lg">
                      <Image
                        src={image}
                        alt={`Gallery Image ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
