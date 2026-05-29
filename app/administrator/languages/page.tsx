"use client";

import React from "react";
import { useContentStore, defaultContent } from "@/src/admin/store/adminStore";

export default function LanguagesAdminPage() {
  const storedLanguages = useContentStore((state) => state.content.settings.languages);
  const languages = storedLanguages && storedLanguages.length > 0 ? storedLanguages : defaultContent.settings.languages;
  const toggleLanguageActive = useContentStore((state) => state.toggleLanguageActive);

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-[#FAFAFA] mb-2 font-heading">Manage Languages</h1>
      <p className="text-[#A0A0A0] mb-8">
        Select which languages should be available in the main website's dropdown menu.
      </p>

      <div className="bg-[#121212] border border-[#2A2A2A] rounded-xl overflow-hidden">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {languages.map((lang) => (
              <div 
                key={lang.id} 
                className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                  lang.isActive 
                    ? "bg-[#1A1A1A] border-primary-red/50" 
                    : "bg-[#0D0D0D] border-[#2A2A2A]"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">🌐</span>
                  <div>
                    <p className="font-semibold text-[#FAFAFA]">{lang.label}</p>
                    <p className="text-sm text-[#7A7A7A]">Code: {lang.code}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => toggleLanguageActive(lang.id)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    lang.isActive ? 'bg-primary-red' : 'bg-[#3A3A3A]'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      lang.isActive ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
