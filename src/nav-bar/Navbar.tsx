"use client";
import { navbarData } from "./NavbarData";

import React from "react";
import { useContentStore } from "@/src/admin/store/adminStore";

import Link from "next/link";


import { usePathname } from "next/navigation";
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";

// Types imported from adminStore

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = React.useState<string | null>(null);
  const [hoveredWhoWeAre, setHoveredWhoWeAre] = React.useState(0);

  const { content } = useContentStore();
  const rawMegaMenuData = content.navbar.megaMenuData || {};

  const megaMenuData = React.useMemo(() => {
    const allowedNewsroomIds = new Set(["events", "awards-recognition", "customer-stories", "success-metrics"]);
    if (!rawMegaMenuData.Newsrooms?.categories) return rawMegaMenuData;
    return {
      ...rawMegaMenuData,
      Newsrooms: {
        ...rawMegaMenuData.Newsrooms,
        categories: rawMegaMenuData.Newsrooms.categories.filter((cat) => allowedNewsroomIds.has(cat.id)),
      },
    };
  }, [rawMegaMenuData]);

  const activeDropdownRef = React.useRef(activeDropdown);
  React.useEffect(() => {
    activeDropdownRef.current = activeDropdown;
    
    // Prevent background scrolling when dropdown is open
    if (activeDropdown !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activeDropdown]);

  // Scroll visibility logic
  const { scrollY } = useScroll();
  const [navVisible, setNavVisible] = React.useState(true);
  const lastScrollY = React.useRef(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (activeDropdownRef.current) {
      lastScrollY.current = latest;
      return; // Do not hide if dropdown is open
    }

    if (latest <= 100) {
      // Always show at top
      setNavVisible(true);
    } else {
      if (latest > lastScrollY.current && latest > 100) {
        // Scrolling down -> Hide
        setNavVisible(false);
      } else if (latest < lastScrollY.current) {
        // Scrolling up -> Show and stay shown
        setNavVisible(true);
      }
    }
    lastScrollY.current = latest;
  });

  React.useEffect(() => {
    const categories = activeDropdown ? megaMenuData[activeDropdown]?.categories : undefined;
    if (categories && categories.length > 0) {
      setTimeout(() => {
        setActiveCategory(categories[0].id);
      }, 0);
    } else {
      setTimeout(() => {
        setActiveCategory(null);
      }, 0);
    }
  }, [activeDropdown, megaMenuData]);

  const navigationItems = content.navbar.links.filter(link => link.visible !== false).map(link => {
    return {
      label: link.label,
      href: link.href,
      hasDropdown: !!megaMenuData[link.label]
    };
  });

  const isExpanded = activeDropdown !== null;
  const navBgColor = isExpanded ? "bg-[#0F172A] backdrop-blur-3xl backdrop-saturate-200" : "bg-[#0F172A] backdrop-blur-3xl backdrop-saturate-200 border-b border-gray-800";

  // Close dropdown on click outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById('navbar-container');
      if (nav && !nav.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav
      id="navbar-container"
      className={`${navBgColor} ${isExpanded ? 'border-transparent' : 'border-gray-200'} sticky top-0 z-50 transition-all duration-500 ease-in-out ${navVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-14">

          {/* Logo Text on Left */}
          <div className="flex-shrink-0 flex items-center lg:flex-1 z-50">
            <Link
              href="/"
              onClick={() => setActiveDropdown(null)}
              className="font-heading font-semibold text-3xl tracking-normal text-white hover:text-gray-200 transition-colors"
            >
              ApMoSys<span className="text-primary-red">.</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center space-x-1 z-50 h-full">
            {navigationItems.map((item) => {
              const isPathActive = (href?: string, currentPath?: string | null) => {
                if (!href || href === "" || href === "#" || !currentPath) return false;
                if (currentPath === href) return true;
                if (href !== "/" && currentPath.startsWith(href)) return true;
                return false;
              };

              const checkIsActive = () => {
                if (isPathActive(item.href, pathname)) return true;
                const dropData = megaMenuData[item.label];
                if (dropData) {
                  if (isPathActive(dropData.linkHref, pathname)) return true;
                  if (dropData.categories) {
                    for (const cat of dropData.categories) {
                      if (isPathActive(cat.href, pathname)) return true;
                      if (cat.subLinks) {
                        for (const sub of cat.subLinks) {
                          if (isPathActive(sub.href, pathname)) return true;
                        }
                      }
                    }
                  }
                  if (dropData.menuItems) {
                    for (const mi of dropData.menuItems) {
                      if (isPathActive(mi.href, pathname)) return true;
                    }
                  }
                }
                return false;
              };
              const isActive = checkIsActive();
              return (
                <div
                  key={item.label}
                  className="h-full flex items-center"
                >
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      if (item.hasDropdown) {
                        e.preventDefault();
                        setActiveDropdown(activeDropdown === item.label ? null : item.label);
                      } else {
                        setActiveDropdown(null);
                      }
                    }}
                    className={`group flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors duration-200 shrink-0 ${isActive || activeDropdown === item.label ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                  >
                    <span className="whitespace-nowrap relative pb-1">
                      {item.label}
                      {/* Animated Red Underline */}
                      <span
                        className={`absolute bottom-0 left-0 w-full h-[1px] bg-white transform origin-left transition-transform duration-300 ease-out ${isActive || activeDropdown === item.label
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                          }`}
                      />
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
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Desktop CTA Button (Right) */}
          <div className="hidden lg:flex items-center justify-end lg:flex-1 z-50 space-x-6">
            <Link
              href="/contact"
              className="px-5 py-2 text-sm font-medium rounded-md transition-all duration-300 overflow-hidden bg-white text-[#0F172A] hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-white/10 focus:outline-none transition-colors"
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
            </button>
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
            className="absolute top-14 left-0 w-full bg-[#0F172A] z-40 pb-16 pt-10 shadow-2xl border-t border-gray-800"
          >
          <div className="max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

              {/* Left Column (Title & Description) - 3/12 */}
              <div className="lg:col-span-3 flex flex-col justify-between pr-4">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">
                    {megaMenuData[activeDropdown].title}
                  </h2>
                  <p className="text-gray-300 text-sm leading-relaxed mb-8">
                    {megaMenuData[activeDropdown].description}
                  </p>
                </div>
                <Link
                  href={megaMenuData[activeDropdown].linkHref}
                  className="inline-flex items-center text-white text-sm font-medium hover:text-gray-300 hover:underline transition-colors group"
                >
                  {megaMenuData[activeDropdown].linkText}
                  <svg className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>


              {activeDropdown === "Who we are" ? (
                <>
                  {/* Column 2 - Menu Items */}
                  <div className="lg:col-span-3 border-t border-gray-800">
                    {megaMenuData["Who we are"].menuItems?.map((item, index) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onMouseEnter={() => setHoveredWhoWeAre(index)}
                        onClick={() => setActiveDropdown(null)}
                        className={`flex items-center justify-between px-4 py-4 border-b border-gray-800 transition-all duration-200 ${hoveredWhoWeAre === index
                            ? "bg-white/10 text-white"
                            : "text-gray-300 hover:text-white"
                          }`}
                      >
                        <span className="font-medium text-[15px]">
                          {item.label}
                        </span>

                        <svg
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>

                  {/* Column 3 - Hover Description */}
                  <div className="lg:col-span-6 pl-8 flex items-start">
                    <div className="max-w-2xl animate-fadeIn">
                      <h3 className="text-2xl font-semibold text-white mb-4">
                        {
                          megaMenuData["Who we are"].menuItems?.[
                            hoveredWhoWeAre
                          ]?.label
                        }
                      </h3>

                      <p className="text-gray-300 leading-relaxed text-base">
                        {
                          megaMenuData["Who we are"].menuItems?.[
                            hoveredWhoWeAre
                          ]?.description
                        }
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {/* Existing Categories Column */}
                  <div className="lg:col-span-3 flex flex-col border-t border-gray-800">
                    {megaMenuData[activeDropdown]?.categories?.map((category) => {
                      const isActive = activeCategory === category.id;
                      const categoryClasses = `flex items-center justify-between cursor-pointer border-b border-gray-800 px-4 py-3 transition-colors duration-200 ${isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:text-white"
                        }`;

                      const categoryContent = (
                        <>
                          <span className="text-[13px] font-medium">
                            {category.label}
                          </span>

                          <svg
                            className={`w-4 h-4 transition-transform ${isActive
                              ? "translate-x-1 text-white"
                              : "text-gray-500"
                              }`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </>
                      );

                      return category.href ? (
                        <Link
                          key={category.id}
                          href={category.href}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          onClick={() => setActiveDropdown(null)}
                          className={categoryClasses}
                        >
                          {categoryContent}
                        </Link>
                      ) : (
                        <div
                          key={category.id}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          onClick={() => setActiveCategory(category.id)}
                          className={categoryClasses}
                        >
                          {categoryContent}
                        </div>
                      );
                    })}
                  </div>

                  {/* Existing Sublinks Column */}
                  <div className="lg:col-span-6 pl-4">
                    {megaMenuData[activeDropdown]?.categories?.map((category) => {
                      if (category.id !== activeCategory) return null;

                      const midPoint = Math.ceil(
                        category.subLinks.length / 2
                      );

                      const leftLinks = category.subLinks.slice(0, midPoint);
                      const rightLinks = category.subLinks.slice(midPoint);

                      return (
                        <div
                          key={category.id}
                          className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1"
                        >
                          <div className="flex flex-col space-y-1">
                            {leftLinks.map((link, idx) => (
                              <Link
                                key={idx}
                                href={link.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`py-1.5 text-[13px] ${pathname === link.href ? "text-white underline" : "text-gray-300 hover:text-white"}`}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>

                          <div className="flex flex-col space-y-1">
                            {rightLinks.map((link, idx) => (
                              <Link
                                key={idx}
                                href={link.href}
                                onClick={() => setActiveDropdown(null)}
                                className={`py-1.5 text-[13px] ${pathname === link.href ? "text-white underline" : "text-gray-300 hover:text-white"}`}
                              >
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

            </div>
          </div>
        </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-[#0F172A] border-b border-gray-800 px-4 pt-2 pb-6 space-y-2 overflow-y-auto max-h-[calc(100vh-3.5rem)]"
          >
          {navigationItems.map((item) => {
            const isPathActive = (href?: string, currentPath?: string | null) => {
              if (!href || href === "" || href === "#" || !currentPath) return false;
              if (currentPath === href) return true;
              if (href !== "/" && currentPath.startsWith(href)) return true;
              return false;
            };

            const checkIsActive = () => {
              if (isPathActive(item.href, pathname)) return true;
              const dropData = megaMenuData[item.label];
              if (dropData) {
                if (isPathActive(dropData.linkHref, pathname)) return true;
                if (dropData.categories) {
                  for (const cat of dropData.categories) {
                    if (isPathActive(cat.href, pathname)) return true;
                    if (cat.subLinks) {
                      for (const sub of cat.subLinks) {
                        if (isPathActive(sub.href, pathname)) return true;
                      }
                    }
                  }
                }
                if (dropData.menuItems) {
                  for (const mi of dropData.menuItems) {
                    if (isPathActive(mi.href, pathname)) return true;
                  }
                }
              }
              return false;
            };
            const isActive = checkIsActive();
            return (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <button
                    onClick={() => setMobileExpandedItem(mobileExpandedItem === item.label ? null : item.label)}
                    className={`w-full flex items-center justify-between hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive || mobileExpandedItem === item.label ? "text-white underline" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${mobileExpandedItem === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block hover:bg-white/10 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive ? "text-white underline" : "text-gray-300"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

              {/* Accordion content for mobile */}
              {item.hasDropdown && mobileExpandedItem === item.label && megaMenuData[item.label] && (
                <div className="pl-4 pr-2 py-3 space-y-4 bg-white/5 rounded-md mt-1 mb-2 border border-gray-800">
                  <div className="mb-3">
                    <p className="text-xs text-gray-400 leading-relaxed mb-2">
                      {megaMenuData[item.label].description}
                    </p>
                    <Link
                      href={megaMenuData[item.label].linkHref}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-white underline hover:text-gray-300 font-medium inline-flex items-center"
                    >
                      {megaMenuData[item.label].linkText}
                      <svg className="ml-1 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  {megaMenuData[item.label].categories?.map((category) => (
                    <div key={category.id} className="space-y-1">
                      <div className="text-sm font-semibold text-white mb-2">{category.label}</div>
                      <div className="flex flex-col space-y-1 border-l border-gray-700 pl-3">
                        {category.subLinks.map((sublink: { label: string; href: string }, idx) => (
                          <Link
                            key={idx}
                            href={sublink.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileExpandedItem(null);
                            }}
                            className={`text-xs transition-colors py-1 ${pathname === sublink.href ? "text-white underline" : "text-gray-300 hover:text-white"}`}
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* For menuItems like 'Who we are' */}
                  {(megaMenuData[item.label].menuItems?.length ?? 0) > 0 && (
                    <div className="flex flex-col space-y-2 mt-2">
                      {megaMenuData[item.label].menuItems?.map((mi, idx) => (
                        <Link
                          key={idx}
                          href={mi.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setMobileExpandedItem(null);
                          }}
                          className={`text-sm font-medium transition-colors py-2 border-b border-gray-800 ${pathname === mi.href ? "text-white underline" : "text-gray-300 hover:text-white"}`}
                        >
                          {mi.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
          })}

          <div className="pt-4 border-t border-gray-800 mt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-white text-[#0F172A] hover:bg-gray-100 px-4 py-3 rounded-md text-base font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
