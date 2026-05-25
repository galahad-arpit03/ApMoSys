"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuthStore } from "@/src/admin/store/adminStore";
import { usePathname } from "next/navigation";

interface EditableImageProps {
  children: React.ReactNode;
  label?: string;
  className?: string;
}

export default function EditableImage({
  children,
  label = "Image",
  className = "",
}: EditableImageProps) {
  const [showModal, setShowModal] = useState(false);
  const { isAuthenticated } = useAuthStore();
  const pathname = usePathname();
  const isEditRoute = isAuthenticated && pathname?.startsWith("/administrator");

  if (!isEditRoute) {
    return <div className={className}>{children}</div>;
  }

  return (
    <>
      <div className={`relative group/img ${className}`}>
        {children}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/40 transition-all duration-300 rounded-[inherit] pointer-events-none" />

        {/* Edit icon button */}
        <button
          onClick={() => setShowModal(true)}
          className="absolute top-2 right-2 w-8 h-8 bg-primary-red rounded-md flex items-center justify-center text-white opacity-0 group-hover/img:opacity-100 transition-all duration-200 hover:bg-primary-hover hover:scale-110 shadow-lg z-10 cursor-pointer"
          title={`Edit ${label}`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>

        {/* Label badge */}
        <span className="absolute bottom-2 left-2 text-[9px] bg-black/60 text-white px-2 py-1 rounded opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 pointer-events-none font-medium tracking-wider uppercase">
          {label}
        </span>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-[400] backdrop-blur-sm"
              onClick={() => setShowModal(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed inset-0 flex items-center justify-center z-[401] pointer-events-none"
            >
              <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-8 max-w-md w-full mx-4 pointer-events-auto shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-red/10 border border-primary-red/20 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-[#FAFAFA] text-base">
                        Edit {label}
                      </h3>
                      <p className="text-xs text-[#5A5A5A]">Image Manager</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-[#5A5A5A] hover:text-[#FAFAFA] transition-colors cursor-pointer"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Coming Soon Content */}
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#1A1A1A] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#3A3A3A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-semibold text-[#FAFAFA] text-lg mb-2">
                    Image Upload Coming Soon
                  </h4>
                  <p className="text-[#5A5A5A] text-sm leading-relaxed max-w-xs mx-auto">
                    Image management with cloud storage integration will be available in the next release. Currently using static assets.
                  </p>

                  <div className="mt-6 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-[#3A3A3A] justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A3A3A]" />
                      Cloudinary / S3 integration planned
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#3A3A3A] justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A3A3A]" />
                      Drag & drop upload UI
                    </div>
                    <div className="flex items-center gap-2 text-xs text-[#3A3A3A] justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3A3A3A]" />
                      Alt text & metadata editing
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setShowModal(false)}
                  className="w-full py-2.5 rounded-md bg-[#1A1A1A] border border-[#2A2A2A] text-[#7A7A7A] text-sm font-medium hover:text-[#FAFAFA] hover:border-[#3A3A3A] transition-all cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
