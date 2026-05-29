"use client";

import React from "react";
import { useContentStore } from "@/src/admin/store/adminStore";
import Navbar from "@/src/Navbar/Navbar";

export default function AdminNavbarPage() {
  const { content, toggleNavbarLink, updateNavbarLink } = useContentStore();

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <div className="flex-1 p-4 lg:p-8 overflow-auto w-full">
        <div className="max-w-7xl mx-auto space-y-8 w-full">
          
          <div className="mb-4 lg:mb-8">
            <h2 className="text-[#FAFAFA] font-heading font-bold text-lg mb-4 px-2">Live Preview</h2>
            <div className="w-full overflow-hidden border border-[#1A1A1A] rounded-xl shadow-2xl">
              <Navbar />
            </div>
          </div>

          <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
            <div className="mb-6">
              <h2 className="text-[#FAFAFA] font-heading font-bold text-lg">Navigation Links</h2>
              <p className="text-[#A0A0A0] text-sm">Toggle visibility of links on the main website.</p>
            </div>
            
            <div className="space-y-4">
              {content.navbar.links.map((link, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg">
                  <div className="flex flex-col gap-2 w-full max-w-sm">
                    <input 
                      type="text"
                      value={link.label}
                      onChange={(e) => updateNavbarLink(idx, { label: e.target.value })}
                      className="bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] focus:ring-1 focus:ring-[#B40001] text-[#FAFAFA] text-sm rounded-md px-3 py-1.5 outline-none transition-all"
                      placeholder="Link Label"
                    />
                    <input 
                      type="text"
                      value={link.href}
                      onChange={(e) => updateNavbarLink(idx, { href: e.target.value })}
                      className="bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] focus:ring-1 focus:ring-[#B40001] text-[#A0A0A0] text-xs font-mono rounded-md px-3 py-1.5 outline-none transition-all"
                      placeholder="URL / Path"
                    />
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer ml-4" title="Toggle this link's visibility on the website">
                    <input 
                      type="checkbox" 
                      className="sr-only peer" 
                      checked={link.visible !== false}
                      onChange={() => toggleNavbarLink(idx)} 
                    />
                    <div className="w-11 h-6 bg-[#3A3A3A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-red"></div>
                    <span className="ml-3 text-sm font-medium text-[#A0A0A0]">
                      {link.visible !== false ? "Visible" : "Hidden"}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
