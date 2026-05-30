"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore } from "@/src/admin/store/adminStore";

import { megaMenuData, MegaMenuCategory } from "@/src/Navbar/Navbar";

const getDropdownItems = (label: string): string[] | null => {
  if (megaMenuData[label]) {
    return megaMenuData[label].categories.map((c: MegaMenuCategory) => c.label);
  }
  for (const key in megaMenuData) {
    const category = megaMenuData[key].categories.find((c: MegaMenuCategory) => c.label === label);
    if (category && category.subLinks && category.subLinks.length > 0) {
      return category.subLinks;
    }
  }
  return null;
};

const FooterLinkItem = ({ link, expandedSections, toggleSection }: { link: {label: string, href: string}, expandedSections: Record<string, boolean>, toggleSection: (label: string) => void }) => {
  const dropdownItems = getDropdownItems(link.label);
  const isExpanded = expandedSections[link.label];

  if (dropdownItems && dropdownItems.length > 0) {
    return (
      <li className="flex flex-col">
        <button 
          onClick={() => toggleSection(link.label)}
          className="flex items-center justify-between w-full transition-colors text-left group"
        >
          <motion.span whileHover={{ x: 4, color: "var(--color-primary-red)" }} className="group-hover:text-primary-red transition-colors">{link.label}</motion.span>
          <svg className={`w-3 h-3 text-[#A0A0A0] group-hover:text-primary-red transition-transform ${isExpanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="pl-3 mt-2 space-y-2 border-l border-[#3A3A3A] text-[#7A7A7A] overflow-hidden"
            >
              {dropdownItems.map((item, idx) => (
                <li key={idx}>
                  <motion.a 
                    href="#" 
                    whileHover={{ x: 2, color: "var(--color-primary-red)" }}
                    className="inline-block hover:text-primary-red transition-colors text-[11px] py-0.5"
                  >
                    {item}
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
        whileHover={{ x: 4, color: "var(--color-primary-red)" }}
        className="inline-block hover:text-primary-red transition-colors"
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
      className="bg-[#000000] border-t border-[#3A3A3A] py-16 mt-auto text-sm text-[#7A7A7A]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Block & Socials */}
          <div className="space-y-6">
            <div>
              <motion.a 
                href="/"
                whileHover={{ scale: 1.02 }}
                className="inline-block font-heading font-extrabold text-3xl tracking-normal text-[#FFFFFF] hover:text-[#FAFAFA] transition-colors"
              >
                ApMoSys<span className="text-[#B40001] inline-block transform rotate-[45deg]">.</span>
              </motion.a>
              <p className="text-xs text-[#5A5A5A] leading-relaxed mt-4">
                Global leaders in automated quality engineering, security validation, and intelligent digital systems optimization.
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-[#1F1F1F] flex items-center justify-center text-[#A0A0A0] hover:bg-primary-red hover:text-[#FFFFFF] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.324V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#1F1F1F] flex items-center justify-center text-[#A0A0A0] hover:bg-primary-red hover:text-[#FFFFFF] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#1F1F1F] flex items-center justify-center text-[#A0A0A0] hover:bg-primary-red hover:text-[#FFFFFF] transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FAFAFA] mb-4">Company</h5>
            <ul className="space-y-2 text-xs">
              {content.footer.companyLinks
                .filter((link) => link.visible !== false)
                .map((link) => (
                  <FooterLinkItem key={link.label} link={link} expandedSections={expandedSections} toggleSection={toggleSection} />
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FAFAFA] mb-4">What we do</h5>
            <ul className="space-y-2 text-xs">
              {content.footer.coreSystemsLinks
                .filter((link) => link.visible !== false)
                .map((link) => (
                  <FooterLinkItem key={link.label} link={link} expandedSections={expandedSections} toggleSection={toggleSection} />
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-[#FAFAFA] mb-4">HQ Contact</h5>
            <ul className="space-y-2 text-xs text-[#5A5A5A] leading-relaxed">
              <li>Mahape, Navi Mumbai, India</li>
              <li>Email: contact@apmosys.com</li>
              <li>Tel: +91 22 4976 5600</li>
            </ul>
          </div>

        </div>

        {/* Subscribe Section */}
        <div className="border-t border-[#1F1F1F] py-10 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-md w-full">
            <h5 className="font-heading font-bold text-sm text-[#FAFAFA] mb-4">Stay updated on QA innovations.</h5>
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Work Email Address" 
                className="bg-[#121212] border border-[#3A3A3A] px-4 py-3 rounded-md text-sm flex-grow focus:outline-none focus:border-primary-red text-[#FAFAFA] transition-colors w-full"
              />
              <button className="bg-primary-red hover:bg-primary-hover text-[#FFFFFF] px-6 py-3 rounded-md text-sm font-bold transition-colors w-full sm:w-auto whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-[#5A5A5A] text-xs mt-3">
              By subscribing, you agree to our privacy policy and terms of service.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#1F1F1F] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-[#5A5A5A]">
            © {new Date().getFullYear()} ApMoSys Technologies. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs text-[#5A5A5A]">
            <motion.a whileHover={{ color: "#FAFAFA" }} href="#" className="hover:text-[#FAFAFA] transition-colors">Privacy Policy</motion.a>
            <motion.a whileHover={{ color: "#FAFAFA" }} href="#" className="hover:text-[#FAFAFA] transition-colors">Terms of Service</motion.a>
            <motion.a whileHover={{ color: "#FAFAFA" }} href="#" className="hover:text-[#FAFAFA] transition-colors">SLA Agreement</motion.a>
          </div>
        </div>

      </div>
    </motion.footer>
  );
}
