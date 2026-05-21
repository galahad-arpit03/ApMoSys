"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: "About Us", href: "#about", hasDropdown: true },
    { label: "Services", href: "#services", hasDropdown: true },
    { label: "Solutions", href: "#solutions", hasDropdown: true },
    { label: "Industries", href: "#industries", hasDropdown: true },
    { label: "Products", href: "#products", hasDropdown: true },
    { label: "Blogs", href: "#blogs", hasDropdown: false },
    { label: "Careers", href: "#careers", hasDropdown: false },
  ];

  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#000000] border-b border-[#3A3A3A] sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Text on Left */}
          <div className="flex-shrink-0 flex items-center">
            <motion.a 
              href="#" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-heading font-extrabold text-2xl tracking-tight text-[#FFFFFF] hover:text-[#FAFAFA] transition-colors"
            >
              ApMoSys<span className="text-[#B40001]">.</span>
            </motion.a>
          </div>

          {/* Desktop Navigation Links & CTA Button */}
          <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 ml-auto">
            {navigationItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 text-[#C8C8C8] hover:text-[#B40001] px-2 py-1 text-sm font-medium transition-colors duration-200"
              >
                {item.label}
                {item.hasDropdown && (
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </motion.a>
            ))}
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#B40001] hover:bg-[#D10000] text-[#FFFFFF] px-6 py-2.5 rounded-md text-sm font-semibold tracking-wide shadow-md transition-colors duration-200 ml-4"
            >
              Contact Us
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              whileTap={{ scale: 0.9 }}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#C8C8C8] hover:text-[#FFFFFF] hover:bg-[#1F1F1F] focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </motion.button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-[#000000] border-b border-[#3A3A3A] px-4 pt-2 pb-6 space-y-2 overflow-hidden"
          >
            {navigationItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.98 }}
                className="block text-[#C8C8C8] hover:text-[#B40001] hover:bg-[#1F1F1F] px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
            <div className="pt-4 border-t border-[#3A3A3A] mt-4">
              <motion.a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="block text-center bg-[#B40001] hover:bg-[#D10000] text-[#FFFFFF] px-4 py-3 rounded-md text-base font-semibold transition-colors"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
