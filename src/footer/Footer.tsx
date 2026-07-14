"use client";
import { footerData } from "./FooterData";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";

import { MegaMenuCategory, MegaMenuItem } from "@/src/admin/store/adminStore";


const getDropdownItems = (
  label: string,
  megaMenuData?: Record<string, MegaMenuItem>
): { label: string; href: string }[] | null => {
  if (!megaMenuData) return null;

  const menu = megaMenuData[label];

  if (menu) {
    // New Who We Are structure
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

    // Old structure
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
      <li className="flex flex-col">
        <button
          onClick={() => toggleSection(link.label)}
          className="flex items-center justify-between w-full transition-colors text-left group"
        >
          <motion.span whileHover={{ x: 4 }} className="text-[#242A56] group-hover:underline transition-colors">{link.label}</motion.span>
          <svg className={`w-3 h-3 text-[#242A56] group-hover:underline transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="pl-3 mt-2 space-y-2 border-l border-gray-300 text-[#242A56] overflow-hidden"
            >
              {dropdownItems.map((item, idx) => (
                <li key={idx}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 2 }}
                    className="inline-block text-[#242A56]/80 hover:underline transition-colors text-sm py-0.5"
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
    <li>
      <motion.a
        href={link.href}
        whileHover={{ x: 4 }}
        className="inline-block text-[#242A56] hover:underline transition-colors"
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
      className="bg-[#FAFAFA] border-t border-[#242A56]/25 py-16 mt-auto text-base text-[#242A56] relative overflow-hidden"
    >
      
      <div className="absolute inset-0 pointer-events-none z-0">
                        {/* SVG Wavy Line Pattern */}
        {/* <svg className="absolute top-0 left-0 w-full h-full text-[#242A56] opacity-[0.08] pointer-events-none" viewBox="0 0 1440 600" preserveAspectRatio="xMidYMax slice" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,100 C500,450 1000,100 1540,300" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,118 C500,472 1000,88 1540,318" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,136 C500,494 1000,76 1540,336" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,154 C500,516 1000,64 1540,354" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,172 C500,538 1000,52 1540,372" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,190 C500,560 1000,40 1540,390" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,208 C500,582 1000,28 1540,408" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,226 C500,604 1000,16 1540,426" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,244 C500,626 1000,4 1540,444" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,262 C500,648 1000,-8 1540,462" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,280 C500,670 1000,-20 1540,480" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,298 C500,692 1000,-32 1540,498" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,316 C500,714 1000,-44 1540,516" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,334 C500,736 1000,-56 1540,534" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,352 C500,758 1000,-68 1540,552" stroke="currentColor" strokeWidth="1" />
          <path d="M-100,370 C500,780 1000,-80 1540,570" stroke="currentColor" strokeWidth="1" />
        </svg> */}

        {/* Dot Grid Pattern (Top Right) */}
        <svg className="absolute top-0 right-0 text-[#242A56] opacity-[0.05] w-64 h-64 pointer-events-none" viewBox="0 0 100 100">
          <pattern id="dots-top" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle fill="currentColor" cx="2" cy="2" r="1.5"></circle>
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots-top)"></rect>
        </svg>

        {/* Dot Grid Pattern (Bottom Left) */}
        <svg className="absolute bottom-0 left-0 text-[#242A56] opacity-[0.05] w-64 h-64 pointer-events-none" viewBox="0 0 100 100">
          <pattern id="dots-bottom" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle fill="currentColor" cx="2" cy="2" r="1.5"></circle>
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots-bottom)"></rect>
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">

          {/* Brand Block & Socials */}
          <div className="space-y-6">
            <div>
              <motion.a
                href="/"
                whileHover={{ scale: 1.02 }}
                className="inline-block font-heading font-semibold text-3xl tracking-normal text-[#242A56] transition-colors"
              >
                ApMoSys<span className="text-[#B40001]">.</span>
              </motion.a>
              <p className="text-sm text-[#242A56] leading-relaxed mt-4">
                Global leaders in automated quality engineering, security validation, and intelligent digital systems optimization.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-[#E9ECEF] flex items-center justify-center text-[#242A56] hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#E9ECEF] flex items-center justify-center text-[#242A56] hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#E9ECEF] flex items-center justify-center text-[#242A56] hover:bg-gray-300 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading font-bold text-sm uppercase tracking-wider text-[#242A56] mb-4">Company</h5>
            <ul className="space-y-2 text-sm">
              {content.footer.companyLinks
                .filter((link) => link.visible !== false)
                .map((link) => (
                  <FooterLinkItem key={link.label} link={link} expandedSections={expandedSections} toggleSection={toggleSection} megaMenuData={content.navbar.megaMenuData} />
                ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-heading font-bold text-sm uppercase tracking-wider text-[#242A56] mb-4">What we do</h5>
            <ul className="space-y-2 text-sm">
              {content.footer.coreSystemsLinks
                .filter((link) => link.visible !== false)
                .map((link) => (
                  <FooterLinkItem key={link.label} link={link} expandedSections={expandedSections} toggleSection={toggleSection} megaMenuData={content.navbar.megaMenuData} />
                ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-heading font-bold text-sm uppercase tracking-wider text-[#242A56] mb-4">HQ Contact</h5>
            <ul className="space-y-2 text-sm text-[#242A56] leading-relaxed">
              <li>Mahape, Navi Mumbai, India</li>
              <li>Email: contact@apmosys.com</li>
              <li>Tel: +91 22 4976 5600</li>
            </ul>
          </div>

        </div>

        {/* Subscribe Section */}
        <div className="border-t border-gray-200 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="flex items-center gap-4">
            <h5 className="font-heading font-bold text-sm text-[#242A56] whitespace-nowrap">Stay updated on QA innovations.</h5>
          </div>
          <div className="max-w-lg w-full md:w-auto ml-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Work Email Address"
                className="bg-white border border-gray-200 px-3 py-2 rounded-md text-sm flex-grow focus:outline-none focus:border-[#242A56] text-[#242A56] transition-colors w-full sm:w-[300px]"
              />
              <button className="bg-[#242A56] hover:bg-[#1E234B] text-white px-5 py-2 rounded-md text-sm font-semibold transition-colors w-full sm:w-auto whitespace-nowrap shadow-sm">
                Subscribe
              </button>
            </div>
            <p className="text-[#242A56]/70 text-xs mt-2 sm:text-right">
              By subscribing, you agree to our privacy policy.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-sm text-[#242A56]">
            © {new Date().getFullYear()} ApMoSys Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-sm text-[#242A56]">
            <motion.a href="#" className="transition-colors">Privacy Policy</motion.a>
            <motion.a href="#" className="transition-colors">Terms of Service</motion.a>
            <motion.a href="#" className="transition-colors">SLA Agreement</motion.a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
