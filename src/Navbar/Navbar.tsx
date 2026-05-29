"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useContentStore, defaultContent } from "@/src/admin/store/adminStore";

const megaMenuData: Record<string, any> = {
  Services: {
    title: "Our Services",
    description: "We deliver excellence and create value for customers and communities – everyday. With the best talent and the latest technology we help customers turn complexity into opportunities.",
    linkText: "Adaptability starts here",
    linkHref: "/services",
    categories: [
      {
        id: "core",
        label: "Core Services",
        subLinks: [
          "Quality Engineering",
          "Performance Engineering",
          "Test Automation",
          "Security Testing",
        ]
      },
      {
        id: "digital",
        label: "Digital Transformation",
        subLinks: [
          "Cloud Engineering",
          "DevOps Services",
          "Data Analytics",
          "Artificial Intelligence",
        ]
      },
      {
        id: "consulting",
        label: "Consulting",
        subLinks: [
          "Strategy",
          "Management",
          "Operations",
          "Technology",
        ]
      }
    ]
  },
  Solutions: {
    title: "Innovative Solutions",
    description: "Empowering businesses with cutting-edge technological solutions for modern challenges. Built to evolve continuously and confidently.",
    linkText: "Explore solutions",
    linkHref: "/solutions",
    categories: [
      {
        id: "industries",
        label: "Industries",
        subLinks: [
          "Banking",
          "Capital Markets",
          "Consumer Packaged Goods and Distribution",
          "Communications, Media, and Information Services",
          "Education",
          "Energy, Resources, and Utilities",
          "Healthcare",
          "High Tech",
          "Insurance",
          "Life Sciences",
          "Manufacturing",
          "Public Services",
          "Retail",
          "Travel and Logistics"
        ]
      },
      {
        id: "platforms",
        label: "Products and Platforms",
        subLinks: [
          "Enterprise Platform",
          "Analytics Platform",
          "Integration Services"
        ]
      },
      {
        id: "research",
        label: "Research & Innovation",
        subLinks: [
          "AI Labs",
          "Blockchain COE",
          "IoT Center"
        ]
      }
    ]
  },
  Products: {
    title: "Our Products",
    description: "Next-generation products designed to accelerate your business growth. We provide comprehensive testing and management platforms.",
    linkText: "View all products",
    linkHref: "/products",
    categories: [
      {
        id: "testing",
        label: "Testing Platforms",
        subLinks: [
          "Netraa",
          "Cliqtest"
        ]
      },
      {
        id: "management",
        label: "Management Tools",
        subLinks: [
          "ApMoSys ALM",
          "Test Manager"
        ]
      }
    ]
  }
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const [langDropdownOpen, setLangDropdownOpen] = React.useState(false);

  const storedLanguages = useContentStore((state) => state.content.settings.languages);
  const languages = storedLanguages && storedLanguages.length > 0 ? storedLanguages : defaultContent.settings.languages;
  const activeLanguages = languages.filter((lang: any) => lang.isActive);
  const [activeLanguage, setActiveLanguage] = React.useState(activeLanguages[0] || defaultContent.settings.languages[0]);

  React.useEffect(() => {
    if (activeLanguages.length > 0 && !activeLanguages.find(l => l.id === activeLanguage.id)) {
      setActiveLanguage(activeLanguages[0]);
    }
  }, [activeLanguages, activeLanguage.id]);

  React.useEffect(() => {
    if (activeDropdown && megaMenuData[activeDropdown]) {
      setActiveCategory(megaMenuData[activeDropdown].categories[0].id);
    } else {
      setActiveCategory(null);
    }
  }, [activeDropdown]);

  const navigationItems = [
    { label: "About Us", href: "/#about", hasDropdown: false },
    { label: "Services", href: "/#services", hasDropdown: true },
    { label: "Solutions", href: "/#solutions", hasDropdown: true },
    { label: "Products", href: "/#products", hasDropdown: true },
    { label: "Industries", href: "/industries", hasDropdown: false },
    { label: "Blogs", href: "/blogs", hasDropdown: false },
    { label: "Careers", href: "/careers", hasDropdown: false },
  ];

  const isExpanded = activeDropdown !== null;
  const navBgColor = isExpanded ? "bg-[#1E2222]" : "bg-[#000000]";

  return (
    <nav 
      className={`${navBgColor} ${isExpanded ? 'border-transparent' : 'border-[#3A3A3A]'} sticky top-0 z-50 transition-colors duration-300`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo Text on Left */}
          <div className="flex-shrink-0 flex items-center lg:flex-1 z-50">
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
          <div className="hidden lg:flex items-center justify-center space-x-1 xl:space-x-2 z-50 h-full">
            {navigationItems.map((item) => (
              <div 
                key={item.label}
                className="h-full flex items-center"
                onMouseEnter={() => {
                  if (item.hasDropdown) {
                    setActiveDropdown(item.label);
                  } else {
                    setActiveDropdown(null);
                  }
                }}
              >
                <motion.a
                  href={item.href}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-200 shrink-0 ${
                    activeDropdown === item.label 
                      ? "text-[#FFFFFF]" 
                      : "text-[#C8C8C8] hover:text-[#FFFFFF]"
                  }`}
                >
                  <span className="whitespace-nowrap relative pb-1">
                    {item.label}
                  </span>
                  {item.hasDropdown && (
                    <svg 
                      className={`w-3.5 h-3.5 shrink-0 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </motion.a>
              </div>
            ))}
          </div>
            
          {/* Desktop CTA Button (Right) */}
          <div className="hidden lg:flex items-center justify-end lg:flex-1 z-50 space-x-6">
            
            {/* Language Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-[#C8C8C8] hover:text-[#FFFFFF] text-sm font-medium transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                {activeLanguage.code} - EN
                <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-40 bg-[#1E2222] border border-[#3A3A3A] rounded-md shadow-lg overflow-hidden z-50 py-1"
                  >
                    {activeLanguages.map((lang: any) => (
                      <button
                        key={lang.id}
                        onClick={() => {
                          setActiveLanguage(lang);
                          setLangDropdownOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-[#C8C8C8] hover:text-[#FFFFFF] hover:bg-[#333535] transition-colors"
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/contact"
              className="text-[#C8C8C8] hover:text-[#FFFFFF] text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
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

      {/* Mega Menu Dropdown */}
      <AnimatePresence>
        {isExpanded && megaMenuData[activeDropdown] && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 w-full bg-[#1E2222] z-40 pb-16 pt-10 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Left Column (Title & Description) - 3/12 */}
                <div className="lg:col-span-3 flex flex-col justify-between pr-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[#FFFFFF] mb-4">
                      {megaMenuData[activeDropdown].title}
                    </h2>
                    <p className="text-[#C8C8C8] text-sm leading-relaxed mb-8">
                      {megaMenuData[activeDropdown].description}
                    </p>
                  </div>
                  <a 
                    href={megaMenuData[activeDropdown].linkHref}
                    className="inline-flex items-center text-[#FFFFFF] text-sm font-medium hover:text-primary-red transition-colors group"
                  >
                    {megaMenuData[activeDropdown].linkText}
                    <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>

                {/* Middle Column (Categories) - 3/12 */}
                <div className="lg:col-span-3 flex flex-col border-t border-[#3A3A3A]">
                  {megaMenuData[activeDropdown].categories.map((category: any) => {
                    const isActive = activeCategory === category.id;
                    return (
                      <div
                        key={category.id}
                        onMouseEnter={() => setActiveCategory(category.id)}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center justify-between cursor-pointer border-b border-[#3A3A3A] px-4 py-3 transition-colors duration-200 ${
                          isActive ? "bg-[#333535] text-[#FFFFFF]" : "text-[#C8C8C8] hover:text-[#FFFFFF]"
                        }`}
                      >
                        <span className="text-sm font-medium">{category.label}</span>
                        <svg className={`w-4 h-4 transition-transform ${isActive ? "translate-x-1 text-[#FFFFFF]" : "text-[#888]"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    );
                  })}
                </div>

                {/* Right Columns (Sublinks for active category) - 6/12 */}
                <div className="lg:col-span-6 pl-4">
                  {megaMenuData[activeDropdown].categories.map((category: any) => {
                    if (category.id !== activeCategory) return null;
                    
                    const midPoint = Math.ceil(category.subLinks.length / 2);
                    const leftLinks = category.subLinks.slice(0, midPoint);
                    const rightLinks = category.subLinks.slice(midPoint);

                    return (
                      <motion.div 
                        key={category.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1"
                      >
                        <div className="flex flex-col space-y-1">
                          {leftLinks.map((link: string, idx: number) => (
                            <a 
                              key={idx} 
                              href="#"
                              className="py-1.5 text-sm text-[#C8C8C8] hover:text-[#FFFFFF] transition-colors"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                        <div className="flex flex-col space-y-1">
                          {rightLinks.map((link: string, idx: number) => (
                            <a 
                              key={idx} 
                              href="#"
                              className="py-1.5 text-sm text-[#C8C8C8] hover:text-[#FFFFFF] transition-colors"
                            >
                              {link}
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
                className="block text-[#C8C8C8] hover:text-[#FFFFFF] hover:bg-[#1F1F1F] px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.label}
              </motion.a>
            ))}

            <div className="pt-4 border-t border-[#3A3A3A] mt-4">
              <motion.a
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className="block text-center bg-primary-red text-[#FFFFFF] px-4 py-3 rounded-md text-base font-semibold"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
