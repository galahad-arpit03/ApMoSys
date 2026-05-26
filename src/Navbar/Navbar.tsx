"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/src/components/Container";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [fontsDropdownOpen, setFontsDropdownOpen] = useState(false);
  const [mobileFontsOpen, setMobileFontsOpen] = useState(false);
  const [activeFont, setActiveFont] = useState("default");

  const fonts = [
    { name: "Default Theme", variable: "default", type: "Jakarta (Body) + Outfit (Heading)" },
    { name: "Plus Jakarta Sans", variable: "var(--font-jakarta)", type: "Full Site Sans-serif" },
    { name: "Outfit", variable: "var(--font-outfit)", type: "Full Site Sans-serif" }
  ];

  useEffect(() => {
    const savedFont = localStorage.getItem("selected-site-font");
    if (savedFont && savedFont !== "default") {
      setActiveFont(savedFont);
      applyFontProperties(savedFont);
    }
  }, []);

  const applyFontProperties = (fontVar: string) => {
    const root = document.documentElement;
    if (fontVar === "default") {
      root.style.removeProperty("--font-sans");
      root.style.removeProperty("--font-heading");
    } else {
      root.style.setProperty("--font-sans", `${fontVar}, ui-sans-serif, system-ui, sans-serif`);
      root.style.setProperty("--font-heading", `${fontVar}, ui-sans-serif, system-ui, sans-serif`);
    }
  };

  const handleFontSelect = (fontVar: string) => {
    setActiveFont(fontVar);
    applyFontProperties(fontVar);
    if (fontVar === "default") {
      localStorage.removeItem("selected-site-font");
    } else {
      localStorage.setItem("selected-site-font", fontVar);
    }
    setFontsDropdownOpen(false);
  };

  const navigationItems = [
    { label: "About Us", href: "/#about", hasDropdown: false },
    { label: "Services", href: "/#services", hasDropdown: true },
    { label: "Solutions", href: "/#solutions", hasDropdown: true },
    { label: "Products", href: "/#products", hasDropdown: true },
    { label: "Industries", href: "/industries", hasDropdown: false },
    { label: "Blogs", href: "/blogs", hasDropdown: false },
    { label: "Careers", href: "/careers", hasDropdown: false },
  ];

  return (
    <motion.nav 
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#000000] border-b border-[#3A3A3A] sticky top-0 z-50"
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Text on Left */}
          <div className="flex-shrink-0 flex items-center lg:flex-1">
            <motion.a 
              href="/" 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="font-heading font-extrabold text-3xl tracking-normal text-[#FFFFFF] hover:text-[#FAFAFA] transition-colors"
            >
              ApMoSys<span className="text-primary-red">.</span>
            </motion.a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2">
            {navigationItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 text-[#C8C8C8] hover:text-primary-red px-2 py-1 text-sm font-medium transition-colors duration-200 shrink-0"
              >
                <span className="whitespace-nowrap">{item.label}</span>
                {item.hasDropdown && (
                  <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </motion.a>
            ))}

            {/* Fonts Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setFontsDropdownOpen(true)}
              onMouseLeave={() => setFontsDropdownOpen(false)}
            >
              <motion.button
                onClick={() => setFontsDropdownOpen(!fontsDropdownOpen)}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-1 text-[#C8C8C8] hover:text-primary-red px-2 py-1 text-sm font-medium transition-colors duration-200 focus:outline-none cursor-pointer"
              >
                <span>Fonts</span>
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${fontsDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </motion.button>
              
              <AnimatePresence>
                {fontsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-[#121212] border border-[#3A3A3A] rounded-md shadow-xl overflow-hidden z-50 py-1"
                  >
                    <div className="px-3 py-2 border-b border-[#3A3A3A] text-xs font-semibold text-[#7A7A7A] uppercase tracking-wider">
                      Active Fonts
                    </div>
                    {fonts.map((font) => (
                      <button
                        key={font.name}
                        onClick={() => handleFontSelect(font.variable)}
                        className={`w-full text-left px-4 py-3 hover:bg-[#1F1F1F] transition-colors border-b last:border-b-0 border-[#1F1F1F] block cursor-pointer ${
                          activeFont === font.variable ? "bg-[#1F1F1F] text-primary-red" : "text-[#FAFAFA]"
                        }`}
                      >
                        <p className="text-sm font-medium" style={{ fontFamily: font.variable !== "default" ? font.variable : "inherit" }}>
                          {font.name}
                        </p>
                        <p className="text-xs text-[#7A7A7A] mt-0.5 font-sans">
                          {font.type}
                        </p>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
            
          {/* Desktop CTA Button (Right) */}
          <div className="hidden lg:flex items-center justify-end lg:flex-1">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-primary-red hover:bg-primary-hover text-[#FFFFFF] px-6 py-2.5 rounded-md text-sm font-semibold tracking-wide shadow-md transition-colors duration-200"
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
      </Container>

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
                className="block text-[#C8C8C8] hover:text-primary-red hover:bg-[#1F1F1F] px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}

            {/* Mobile Fonts Dropdown */}
            <div className="border-t border-[#1F1F1F] pt-2">
              <button
                onClick={() => setMobileFontsOpen(!mobileFontsOpen)}
                className="w-full flex items-center justify-between text-[#C8C8C8] hover:text-primary-red hover:bg-[#1F1F1F] px-3 py-2 rounded-md text-base font-medium transition-colors focus:outline-none cursor-pointer"
              >
                <span>Fonts</span>
                <svg className={`w-4 h-4 transition-transform duration-200 ${mobileFontsOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {mobileFontsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 space-y-1 mt-1 overflow-hidden"
                  >
                    {fonts.map((font) => (
                      <button
                        key={font.name}
                        onClick={() => {
                          handleFontSelect(font.variable);
                          setMobileMenuOpen(false);
                          setMobileFontsOpen(false);
                        }}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm block cursor-pointer ${
                          activeFont === font.variable ? "bg-[#1F1F1F] text-primary-red" : "text-[#C8C8C8]"
                        }`}
                      >
                        <p className="font-semibold text-white" style={{ fontFamily: font.variable !== "default" ? font.variable : "inherit" }}>
                          {font.name}
                        </p>
                        <p className="text-xs text-[#7A7A7A] mt-0.5">
                          {font.type}
                        </p>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="pt-4 border-t border-[#3A3A3A] mt-4">
              <motion.a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="block text-center bg-primary-red hover:bg-primary-hover text-[#FFFFFF] px-4 py-3 rounded-md text-base font-semibold transition-colors"
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
