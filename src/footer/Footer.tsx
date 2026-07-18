"use client";
import { footerData } from "./FooterData";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";
import { ArrowRight } from "lucide-react";

import { MegaMenuCategory, MegaMenuItem } from "@/src/admin/store/adminStore";

const getDropdownItems = (
  label: string,
  megaMenuData?: Record<string, MegaMenuItem>
): { label: string; href: string }[] | null => {
  if (!megaMenuData) return null;

  const menu = megaMenuData[label];

  if (menu) {
    if (
      menu.title === "Who we are" &&
      menu.categories &&
      menu.categories.length > 0
    ) {
      return menu.categories.map((item: any) => ({
        label: item.label,
        href: item.href,
      }));
    }

    if (menu.categories) {
      return menu.categories.map((c: any) => ({
        label: c.label,
        href: menu.linkHref,
      }));
    }
  }

  for (const key in megaMenuData) {
    const categories = megaMenuData[key]?.categories || [];

    const category = categories.find(
      (c: any) => c.label === label
    );

    if (
      category &&
      category.subLinks &&
      category.subLinks.length > 0
    ) {
      return category.subLinks;
    }
  }

  return null;
};

const FooterLinkItem = ({ link, expandedSections, toggleSection, megaMenuData }: { link: { label: string, href: string }, expandedSections: Record<string, boolean>, toggleSection: (label: string) => void, megaMenuData?: Record<string, MegaMenuItem> }) => {
  const dropdownItems = getDropdownItems(link.label, megaMenuData);
  const isExpanded = expandedSections[link.label];

  if (dropdownItems && dropdownItems.length > 0) {
    return (
      <li className="flex flex-col mb-3">
        <button
          onClick={() => toggleSection(link.label)}
          className="flex items-center justify-between w-full transition-colors text-left group"
        >
          <motion.span whileHover={{ x: 2 }} className="text-slate-400 group-hover:text-white transition-colors">{link.label}</motion.span>
          <svg className={`w-3 h-3 text-slate-400 group-hover:text-white transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="pl-3 mt-2 space-y-2 border-l border-slate-700 text-slate-400 overflow-hidden"
            >
              {dropdownItems.map((item, idx) => (
                <li key={idx}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 2 }}
                    className="inline-block text-slate-500 hover:text-white transition-colors text-sm py-0.5"
                  >
                    {item.label}
                  </motion.a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    );
  }

  return (
    <li className="mb-3">
      <motion.a
        href={link.href}
        whileHover={{ x: 2 }}
        className="inline-block text-slate-400 hover:text-white transition-colors"
      >
        {link.label}
      </motion.a>
    </li>
  );
};

export default function Footer() {
  const { content } = useContentStore();
  const [expandedSections, setExpandedSections] = React.useState<Record<string, boolean>>({});
  const toggleSection = (label: string) => {
    setExpandedSections(prev => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-[#0F172A] pt-16 pb-8 mt-auto text-sm text-slate-400 relative overflow-hidden font-sans"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16 relative z-10">

        {/* Top Section: Logo & Subscribe */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start mb-12">
          {/* Logo and Description */}
          <div className="max-w-md">
            <motion.a
              href="/"
              whileHover={{ scale: 1.02 }}
              className="inline-flex items-center gap-.5 font-heading font-medium text-3xl  text-white transition-colors mb-4"
            >
              ApMoSys<span className="text-[#B40001]">.</span>
            </motion.a>
            <p className="text-slate-400 leading-relaxed text-[15px]">
              Enterprise quality engineering, DevOps, automation and AI-driven digital transformation — trusted by 140+ global clients since 2012.
            </p>
          </div>

          {/* Subscribe */}
          <div className="lg:ml-auto w-full max-w-md">
            <h5 className="font-bold text-white mb-4 text-[15px]">Subscribe to our insights</h5>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="you@company.com"
                className="bg-slate-800/50 border border-slate-700 px-4 py-2.5 rounded-md text-sm flex-grow focus:outline-none focus:border-[#2563EB] text-white placeholder-slate-500 transition-colors w-full"
              />
              <button className="bg-white hover:bg-slate-200 text-[#0F172A] px-6 py-2.5 rounded-md text-sm font-semibold transition-colors w-full sm:w-auto whitespace-nowrap flex items-center justify-center gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-800 mb-12"></div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Company</h5>
            <ul className="text-[15px]">
              {content.footer.companyLinks
                .filter((link) => link.visible !== false)
                .map((link) => (
                  <FooterLinkItem key={link.label} link={link} expandedSections={expandedSections} toggleSection={toggleSection} megaMenuData={content.navbar.megaMenuData} />
                ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Services</h5>
            <ul className="text-[15px]">
              {content.footer.coreSystemsLinks
                .filter((link) => link.visible !== false && link.label !== "Industries")
                .map((link) => (
                  <FooterLinkItem key={link.label} link={link} expandedSections={expandedSections} toggleSection={toggleSection} megaMenuData={content.navbar.megaMenuData} />
                ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Industries</h5>
            <ul className="text-[15px]">
              <FooterLinkItem 
                link={{ label: "Industries", href: "/industries" }} 
                expandedSections={expandedSections} 
                toggleSection={toggleSection} 
                megaMenuData={content.navbar.megaMenuData} 
              />
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-bold text-sm uppercase tracking-wider text-white mb-6">Contact</h5>
            <ul className="space-y-3 text-[15px] text-slate-400 leading-relaxed">
              <li>Mahape, Navi Mumbai, India</li>
              <li>Email: contact@apmosys.com</li>
              <li>Tel: +91 22 4976 5600</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-slate-800 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 text-[13px] text-slate-500">
          <div className="flex-1 text-center lg:text-left">
            <p>
              © {new Date().getFullYear()} ApMoSys Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>
          
          <div className="hidden lg:block text-slate-500 flex-1 text-center font-medium">
            Mumbai · Bhubneswar · Chennai · UAE
          </div>

          <div className="flex gap-4 flex-1 justify-center lg:justify-end">
            <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 transition-colors">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
