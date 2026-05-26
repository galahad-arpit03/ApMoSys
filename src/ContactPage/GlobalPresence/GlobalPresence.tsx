"use client";

import React from "react";
import Container from "@/src/components/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";
import SectionThemeWrapper from "@/src/admin/components/SectionThemeWrapper";

export default function GlobalPresence() {
  const offices = useContentStore((state) => state.content.contact.offices) || [];
  const addContactOffice = useContentStore((state) => state.addContactOffice);
  const deleteContactOffice = useContentStore((state) => state.deleteContactOffice);

  // Check admin mode based on routing namespace
  const isAdmin = typeof window !== "undefined" && window.location.pathname.startsWith("/administrator");

  return (
    <SectionThemeWrapper sectionId="contact_presence" defaultTheme="light">
      {(theme) => {
        const isDark = theme === "dark";
        return (
          <section className={`py-20 border-t transition-colors duration-300 overflow-hidden ${
            isDark ? "bg-[#161616] border-[#2A2A2A] text-[#FFFFFF]" : "bg-[#FAFAFA] border-[#E8E8E8] text-[#121212]"
          }`}>
                        <Container>

              {/* Heading */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: "easeOut" }}
                className="text-center max-w-3xl mx-auto mb-16"
              >
                <EditableText
                  path="contact.presence.heading"
                  fallback="Global Presence"
                  as="h2"
                  className={`font-heading text-3xl sm:text-4xl font-extrabold mb-4 block ${
                    isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                  }`}
                />
                <EditableText
                  path="contact.presence.subheading"
                  fallback="Connect with our experts around the globe. Our distributed engineering teams are always within reach."
                  as="p"
                  className={`text-sm sm:text-base leading-relaxed block ${
                    isDark ? "text-[#CCCCCC]" : "text-[#5A5A5A]"
                  }`}
                  multiline
                />
              </motion.div>

              {/* Office Grid - max 3 cards per row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence mode="popLayout">
                  {offices.map((office, idx) => (
                    <motion.div
                      key={office.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95, y: -10 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
                      className={`rounded-xl overflow-hidden shadow-sm transition-all border flex flex-col group relative ${
                        isDark ? "bg-[#1E1E1E] border-[#2D2D2D] text-[#FFFFFF]" : "bg-[#FFFFFF] border-[#E8E8E8] text-[#121212]"
                      }`}
                    >
                      {/* Delete button (Admin Only) */}
                      {isAdmin && (
                        <button
                          onClick={() => deleteContactOffice(office.id)}
                          className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-30 cursor-pointer ${
                            isDark ? "text-red-400 hover:text-red-300 bg-red-950/50 hover:bg-red-900/50" : "text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100"
                          }`}
                          title="Delete office card"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      )}

                      <div className="relative aspect-[16/10] w-full bg-[#E0E0E0] overflow-hidden flex items-center justify-center">
                        <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${
                          isDark ? "from-[#2A2A2A] to-[#1E1E1E]" : "from-[#F3F3F3] to-[#E0E0E0]"
                        }`}>
                          <span className={`${isDark ? "text-[#CCCCCC]" : "text-[#7A7A7A]"} font-semibold text-sm`}>{office.city} office branch photo</span>
                        </div>
                      </div>

                      <div className="p-8 flex flex-col flex-1">
                        <EditableText
                          path={`contact.offices.${idx}.city`}
                          fallback={office.city}
                          as="h3"
                          className={`font-heading font-extrabold text-lg uppercase tracking-wider mb-2 block ${
                            isDark ? "text-[#FFFFFF]" : "text-[#121212]"
                          }`}
                        />
                        
                        <div className="flex-1 flex flex-col justify-between gap-6">
                          <div className="space-y-2">
                            <EditableText
                              path={`contact.offices.${idx}.address`}
                              fallback={office.address}
                              as="p"
                              className={`text-sm leading-relaxed block ${isDark ? "text-[#CCCCCC]" : "text-[#5A5A5A]"}`}
                              multiline
                            />
                            
                            <div className="space-y-1">
                              <EditableText
                                path={`contact.offices.${idx}.phone`}
                                fallback={office.phone}
                                as="p"
                                className={`text-sm font-semibold block ${isDark ? "text-[#CCCCCC]" : "text-[#5A5A5A]"}`}
                              />
                              <EditableText
                                path={`contact.offices.${idx}.email`}
                                fallback={office.email}
                                as="p"
                                className={`text-sm font-medium text-primary-red block`}
                              />
                            </div>
                          </div>

                          <a
                            href={office.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-transparent hover:bg-primary-red text-primary-red hover:text-white border-2 border-primary-red transition-all duration-300 font-bold uppercase tracking-wider text-xs py-3 px-6 rounded-md inline-block text-center cursor-pointer shadow-sm"
                          >
                            View on Map
                          </a>

                          {isAdmin && (
                            <div className={`border-t pt-4 text-xs font-semibold space-y-1 flex flex-col ${
                              isDark ? "border-[#2D2D2D] text-[#CCCCCC]" : "border-[#E8E8E8] text-[#5A5A5A]"
                            }`}>
                              <span className={`font-semibold uppercase tracking-wider ${isDark ? "text-[#A0A0A0]" : "text-[#7A7A7A]"}`}>Map Link Destination URL:</span>
                              <EditableText
                                path={`contact.offices.${idx}.link`}
                                fallback={office.link || "https://maps.google.com"}
                                as="span"
                                className="text-primary-red underline font-mono break-all block"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {/* Dotted ADD Branch Card for Admin */}
                {isAdmin && (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => addContactOffice()}
                    className={`bg-transparent border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center gap-4 min-h-[350px] transition-all cursor-pointer ${
                      isDark ? "border-[#444] text-[#A0A0A0] hover:border-primary-red hover:text-primary-red" : "border-[#C8C8C8] text-[#5A5A5A] hover:border-primary-red hover:text-primary-red"
                    }`}
                  >
                    <div className={`w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center ${
                      isDark ? "border-[#444]" : "border-[#C8C8C8]"
                    }`}>
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <h3 className={`font-heading font-bold text-base uppercase tracking-wider mb-1 ${isDark ? "text-[#FFFFFF]" : ""}`}>Add Office Branch</h3>
                      <p className="text-xs max-w-xs leading-relaxed opacity-80">
                        Expand your company representation with a new dynamic global location card.
                      </p>
                    </div>
                  </motion.button>
                )}
              </div>
                        </Container>
          </section>
        );
      }}
    </SectionThemeWrapper>
  );
}
