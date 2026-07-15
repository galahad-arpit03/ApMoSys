"use client";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";
import EditableText from "@/src/admin/components/EditableText";
import EditableImage from "@/src/admin/components/EditableImage";
import { useContentStore, useAuthStore } from "@/src/admin/store/adminStore";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function ExecutiveTeam() {
  const { content, addLeadershipExecutive, deleteLeadershipExecutive } = useContentStore();
  const { isAuthenticated } = useAuthStore();
  const pathname = usePathname();
  const isEditRoute = pathname?.startsWith("/administrator") && isAuthenticated;
  const team = content.leadership?.executiveTeam || [];
  return (
    <SectionThemeWrapper sectionId="leadership_executive" defaultTheme="light">
      {() => {
        return (
          <section className="py-12 lg:py-24 relative overflow-clip transition-colors duration-300 bg-white border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-left mb-12 sm:mb-16">
                <h2 className="text-4xl lg:text-5xl font-medium tracking-tight mb-6 text-slate-800">
                  Meet Our Executive Team
                </h2>

                <p className="text-lg font-medium leading-relaxed max-w-3xl text-black">
                  Experienced leaders driving innovation, enterprise growth,
                  and engineering excellence across ApMoSys.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-4 lg:gap-8 mt-12 sm:mt-16">
                {team.map((member, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
                    key={member.id}
                    className="group relative flex flex-col items-start"
                  >
                    {/* Image Section */}
                    <div className="relative w-full aspect-[4/5] overflow-hidden rounded-sm mb-6 bg-gray-100">
                      <EditableImage
                        className="w-full h-full relative"
                        label={`Executive: ${member.name}`}
                      >
                        <Image
                          src={member.image || "/leadership/placeholder.png"}
                          alt={member.name}
                          fill
                          className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                        />
                      </EditableImage>
                    </div>

                    {/* Content Section */}
                    <div className="w-full">
                      <p className="text-slate-500 uppercase tracking-widest text-xs font-bold mb-2">
                        <EditableText path={`leadership.executiveTeam.${i}.role`} fallback={member.role} />
                      </p>
                      
                      <h3 className="text-2xl font-bold tracking-tight mb-4 text-slate-800">
                        <EditableText path={`leadership.executiveTeam.${i}.name`} fallback={member.name} />
                      </h3>

                      <p className="leading-relaxed text-base font-medium line-clamp-4 group-hover:line-clamp-none transition-all duration-500 text-black">
                        <EditableText path={`leadership.executiveTeam.${i}.description`} fallback={member.description} />
                      </p>
                    </div>

                    {isEditRoute && (
                      <button
                        onClick={() => deleteLeadershipExecutive(member.id)}
                        className="mt-4 px-3 py-1 bg-[#242A56] text-white text-xs rounded hover:bg-[#1E234B] w-full"
                      >
                        Delete Member
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              {isEditRoute && (
                <div className="mt-8 flex justify-center">
                  <button
                    onClick={addLeadershipExecutive}
                    className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors"
                  >
                    + Add Executive Member
                  </button>
                </div>
              )}

            </div>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
