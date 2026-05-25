"use client";

import React from "react";
import { motion } from "framer-motion";
import { useContentStore, useToastStore } from "@/src/admin/store/adminStore";

interface FieldConfig {
  path: string;
  label: string;
  desc: string;
  type?: "text" | "textarea" | "url";
  icon: string;
}

const settingGroups: { title: string; icon: string; fields: FieldConfig[] }[] = [
  {
    title: "Site Identity",
    icon: "🌐",
    fields: [
      { path: "settings.siteTitle", label: "Site Title", desc: "Displayed in the browser tab", type: "text", icon: "🏷️" },
      { path: "settings.metaTitle", label: "Meta Title", desc: "SEO title tag (60 chars max)", type: "text", icon: "🔍" },
      { path: "settings.metaDescription", label: "Meta Description", desc: "SEO description (160 chars max)", type: "textarea", icon: "📝" },
    ],
  },
  {
    title: "Contact Information",
    icon: "📞",
    fields: [
      { path: "settings.contactEmail", label: "Contact Email", desc: "Primary contact email address", type: "text", icon: "✉️" },
      { path: "settings.contactPhone", label: "Contact Phone", desc: "Primary contact phone number", type: "text", icon: "📱" },
      { path: "contact.address", label: "Office Address", desc: "Physical address displayed on contact page", type: "text", icon: "📍" },
    ],
  },
  {
    title: "Social Links",
    icon: "🔗",
    fields: [
      { path: "settings.socialLinkedIn", label: "LinkedIn URL", desc: "Company LinkedIn profile URL", type: "url", icon: "💼" },
      { path: "settings.socialTwitter", label: "Twitter / X URL", desc: "Company Twitter / X profile URL", type: "url", icon: "🐦" },
      { path: "settings.socialFacebook", label: "Facebook URL", desc: "Company Facebook page URL", type: "url", icon: "📘" },
    ],
  },
  {
    title: "Navigation",
    icon: "🧭",
    fields: [
      { path: "navbar.ctaLabel", label: "CTA Button Text", desc: "Top navigation call-to-action button", type: "text", icon: "🖱️" },
      { path: "navbar.logo", label: "Logo Text", desc: "Brand name displayed in navbar", type: "text", icon: "🏷️" },
    ],
  },
  {
    title: "Footer Content",
    icon: "📄",
    fields: [
      { path: "footer.tagline", label: "Footer Tagline", desc: "Brand description below logo", type: "textarea", icon: "💬" },
      { path: "footer.newsletterHeading", label: "Newsletter Heading", desc: "Email subscription section title", type: "text", icon: "📧" },
      { path: "footer.copyright", label: "Copyright Text", desc: "Copyright line at bottom of footer", type: "text", icon: "©️" },
    ],
  },
];

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = obj;
  for (const key of keys) {
    if (current == null) return "";
    current = current[key];
  }
  return typeof current === "string" ? current : "";
}

export default function AdminSettingsPage() {
  const { content, updateField, markSaved } = useContentStore();
  const { addToast } = useToastStore();

  const handleSave = () => {
    markSaved();
    addToast("Settings saved successfully!", "success");
  };

  return (
    <div className="min-h-screen text-[#FAFAFA]">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="font-heading font-extrabold text-2xl text-[#FAFAFA] mb-1">
            Site Settings
          </h1>
          <p className="text-[#5A5A5A] text-sm">
            Manage global site metadata, contact details, and navigation content.
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSave}
          className="bg-[#B40001] hover:bg-[#D10000] text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-all cursor-pointer shadow-[0_4px_20px_rgba(180,0,1,0.3)]"
        >
          Save All Settings
        </motion.button>
      </div>

      <div className="space-y-6">
        {settingGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: gi * 0.08 }}
            className="bg-[#111111] border border-[#1E1E1E] rounded-xl overflow-hidden"
          >
            {/* Group header */}
            <div className="flex items-center gap-3 px-6 py-4 border-b border-[#1E1E1E]">
              <span className="text-lg">{group.icon}</span>
              <h2 className="font-heading font-bold text-sm text-[#FAFAFA]">{group.title}</h2>
            </div>

            {/* Fields */}
            <div className="p-6 space-y-6">
              {group.fields.map((field) => {
                const value = getNestedValue(content as unknown as Record<string, unknown>, field.path);
                return (
                  <div key={field.path}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm">{field.icon}</span>
                      <label className="text-sm font-semibold text-[#FAFAFA]">{field.label}</label>
                      <code className="text-[10px] text-[#3A3A3A] bg-[#0A0A0A] px-1.5 py-0.5 rounded ml-auto">
                        {field.path}
                      </code>
                    </div>
                    <p className="text-xs text-[#3A3A3A] mb-2">{field.desc}</p>
                    {field.type === "textarea" ? (
                      <textarea
                        value={value}
                        onChange={(e) => updateField(field.path, e.target.value)}
                        rows={3}
                        className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#3A3A3A] focus:outline-none focus:border-[#B40001] focus:shadow-[0_0_0_3px_rgba(180,0,1,0.1)] transition-all resize-none"
                      />
                    ) : (
                      <input
                        type={field.type ?? "text"}
                        value={value}
                        onChange={(e) => updateField(field.path, e.target.value)}
                        className="w-full bg-[#0A0A0A] border border-[#2A2A2A] rounded-lg px-4 py-3 text-sm text-[#FAFAFA] placeholder-[#3A3A3A] focus:outline-none focus:border-[#B40001] focus:shadow-[0_0_0_3px_rgba(180,0,1,0.1)] transition-all"
                      />
                    )}
                    {/* Char count for meta fields */}
                    {(field.path.includes("metaTitle") || field.path.includes("metaDescription")) && (
                      <p className={`text-[10px] mt-1 text-right ${
                        field.path.includes("metaTitle") && value.length > 60 ? "text-red-400" :
                        field.path.includes("metaDescription") && value.length > 160 ? "text-red-400" :
                        "text-[#3A3A3A]"
                      }`}>
                        {value.length} / {field.path.includes("metaTitle") ? 60 : 160}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* Save Button */}
        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          onClick={handleSave}
          className="w-full bg-[#B40001] hover:bg-[#D10000] text-white font-bold py-4 rounded-xl text-sm transition-all cursor-pointer shadow-[0_4px_20px_rgba(180,0,1,0.3)]"
        >
          Save All Settings
        </motion.button>
      </div>
    </div>
  );
}
