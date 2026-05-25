"use client";

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";
import EditableText from "@/src/admin/components/EditableText";

export default function GlobalPresence() {
  const offices = useContentStore((state) => state.content.contact.offices) || [];
  const addContactOffice = useContentStore((state) => state.addContactOffice);
  const deleteContactOffice = useContentStore((state) => state.deleteContactOffice);

  // Check admin mode based on routing namespace
  const isAdmin = typeof window !== "undefined" && window.location.pathname.startsWith("/administrator");

  return (
    <section className="bg-[#FAFAFA] text-[#121212] py-20 border-t border-[#E8E8E8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
            className="font-heading text-3xl sm:text-4xl font-extrabold text-[#121212] mb-4 block"
          />
          <EditableText
            path="contact.presence.subheading"
            fallback="Strategic locations delivering technical excellence across multiple timezones."
            as="p"
            className="text-[#5A5A5A] text-sm sm:text-base leading-relaxed block"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {offices.map((office, idx) => (
              <motion.div
                key={office.id}
                layout
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(0,0,0,0.10)" }}
                className="bg-[#FFFFFF] border border-[#E8E8E8] rounded-xl overflow-hidden shadow-sm transition-all group relative"
              >
                {/* Delete Button for Admin */}
                {isAdmin && (
                  <button
                    onClick={() => deleteContactOffice(office.id)}
                    className="absolute top-4 right-4 z-30 p-2 bg-[#B40001] hover:bg-red-700 text-white rounded-full shadow-lg transition-colors cursor-pointer"
                    title="Delete Branch location"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}

                <div className="relative h-48 w-full overflow-hidden bg-[#E8E8E8]">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={office.image || "/Contact Us/mumbai_hq.png"}
                      alt={office.city}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                <div className="p-6">
                  <EditableText
                    path={`contact.offices.${idx}.city`}
                    fallback={office.city}
                    as="h3"
                    className="font-heading font-bold text-lg text-[#121212] mb-2 block"
                  />
                  <EditableText
                    path={`contact.offices.${idx}.address`}
                    fallback={office.address}
                    as="p"
                    multiline
                    className="text-sm text-[#5A5A5A] leading-relaxed mb-5 min-h-[60px] block"
                  />
                  
                  <div className="flex flex-col gap-3">
                    <motion.a
                      href={office.link || "https://maps.google.com"}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-red hover:text-[#D10000] transition-colors uppercase tracking-wider self-start"
                    >
                      View on Map
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.a>

                    {isAdmin && (
                      <div className="mt-2 p-2 bg-[#FAFAFA] border border-[#E8E8E8] rounded-md text-[10px] flex flex-col gap-1">
                        <span className="font-semibold text-[#7A7A7A] uppercase tracking-wider">Map Link Destination URL:</span>
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
              className="bg-transparent border-2 border-dashed border-[#C8C8C8] hover:border-primary-red rounded-xl p-8 flex flex-col items-center justify-center gap-4 text-[#5A5A5A] hover:text-primary-red min-h-[350px] transition-all cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#C8C8C8] group-hover:border-primary-red flex items-center justify-center text-[#7A7A7A] group-hover:text-primary-red">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-heading font-bold text-base uppercase tracking-wider mb-1">Add Office Branch</h3>
                <p className="text-xs max-w-xs leading-relaxed opacity-80">
                  Expand your company representation with a new dynamic global location card.
                </p>
              </div>
            </motion.button>
          )}
        </div>
      </div>
    </section>
  );
}
