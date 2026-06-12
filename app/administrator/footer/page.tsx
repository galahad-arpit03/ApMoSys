"use client";

import React from "react";
import { useContentStore } from "@/src/admin/store/adminStore";
import Footer from "@/src/footer/Footer";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function AdminFooterPage() {
  const { content, toggleFooterLink, updateFooterLink, moveFooterLink } = useContentStore();

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <div className="flex-1 p-4 lg:p-8 overflow-auto w-full">
        <div className="max-w-7xl mx-auto space-y-8 w-full">
          
          <div className="mb-4 lg:mb-8">
            <h2 className="text-[#FAFAFA] font-heading font-bold text-lg mb-4 px-2">Live Preview</h2>
            <div className="w-full overflow-hidden border border-[#1A1A1A] rounded-xl shadow-2xl">
              <Footer />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
              <div className="mb-6">
                <h2 className="text-[#FAFAFA] font-heading font-bold text-lg">Company Links</h2>
                <p className="text-[#A0A0A0] text-sm">Toggle and edit visibility of company links.</p>
              </div>
              
              <div className="space-y-4">
                {content.footer.companyLinks.map((link, idx) => (
                  <div key={idx} className="flex items-start justify-between p-4 bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg gap-4">
                    <div className="flex flex-col gap-2 w-full">
                      <input 
                        type="text"
                        value={link.label}
                        onChange={(e) => updateFooterLink("companyLinks", idx, { label: e.target.value })}
                        className="bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] focus:ring-1 focus:ring-[#B40001] text-[#FAFAFA] text-sm rounded-md px-3 py-1.5 outline-none transition-all w-full"
                        placeholder="Link Label"
                      />
                      <input 
                        type="text"
                        value={link.href}
                        onChange={(e) => updateFooterLink("companyLinks", idx, { href: e.target.value })}
                        className="bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] focus:ring-1 focus:ring-[#B40001] text-[#A0A0A0] text-xs font-mono rounded-md px-3 py-1.5 outline-none transition-all w-full"
                        placeholder="URL / Path"
                      />
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-1" title="Toggle this link's visibility">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={link.visible !== false}
                        onChange={() => toggleFooterLink("companyLinks", idx)} 
                      />
                      <div className="w-9 h-5 bg-[#3A3A3A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-red"></div>
                    </label>
                    <div className="flex flex-col ml-2 border-l border-[#3A3A3A] pl-2 gap-1">
                      <button 
                        onClick={() => moveFooterLink("companyLinks", idx, "up")}
                        disabled={idx === 0}
                        className="p-1 text-[#A0A0A0] hover:text-[#FAFAFA] disabled:opacity-30 transition-colors"
                      >
                        <ArrowUp size={14} />
                      </button>
                      <button 
                        onClick={() => moveFooterLink("companyLinks", idx, "down")}
                        disabled={idx === content.footer.companyLinks.length - 1}
                        className="p-1 text-[#A0A0A0] hover:text-[#FAFAFA] disabled:opacity-30 transition-colors"
                      >
                        <ArrowDown size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111111] border border-[#2A2A2A] rounded-xl p-6">
              <div className="mb-6">
                <h2 className="text-[#FAFAFA] font-heading font-bold text-lg">Core Systems Links</h2>
                <p className="text-[#A0A0A0] text-sm">Toggle and edit visibility of system links.</p>
              </div>
              
              <div className="space-y-4">
                {content.footer.coreSystemsLinks.map((link, idx) => (
                  <div key={idx} className="flex items-start justify-between p-4 bg-[#1A1A1A] border border-[#3A3A3A] rounded-lg gap-4">
                    <div className="flex flex-col gap-2 w-full">
                      <input 
                        type="text"
                        value={link.label}
                        onChange={(e) => updateFooterLink("coreSystemsLinks", idx, { label: e.target.value })}
                        className="bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] focus:ring-1 focus:ring-[#B40001] text-[#FAFAFA] text-sm rounded-md px-3 py-1.5 outline-none transition-all w-full"
                        placeholder="Link Label"
                      />
                      <input 
                        type="text"
                        value={link.href}
                        onChange={(e) => updateFooterLink("coreSystemsLinks", idx, { href: e.target.value })}
                        className="bg-[#121212] border border-[#3A3A3A] focus:border-[#B40001] focus:ring-1 focus:ring-[#B40001] text-[#A0A0A0] text-xs font-mono rounded-md px-3 py-1.5 outline-none transition-all w-full"
                        placeholder="URL / Path"
                      />
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer mt-1" title="Toggle this link's visibility">
                      <input 
                        type="checkbox" 
                        className="sr-only peer" 
                        checked={link.visible !== false}
                        onChange={() => toggleFooterLink("coreSystemsLinks", idx)} 
                      />
                      <div className="w-9 h-5 bg-[#3A3A3A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-red"></div>
                    </label>
                    <div className="flex flex-col ml-2 border-l border-[#3A3A3A] pl-2 gap-1">
                      <button 
                        onClick={() => moveFooterLink("coreSystemsLinks", idx, "up")}
                        disabled={idx === 0}
                        className="p-1 text-[#A0A0A0] hover:text-[#FAFAFA] disabled:opacity-30 transition-colors"
                      >
                        <ArrowUp size={14} />
                      </button>
                      <button 
                        onClick={() => moveFooterLink("coreSystemsLinks", idx, "down")}
                        disabled={idx === content.footer.coreSystemsLinks.length - 1}
                        className="p-1 text-[#A0A0A0] hover:text-[#FAFAFA] disabled:opacity-30 transition-colors"
                      >
                        <ArrowDown size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
