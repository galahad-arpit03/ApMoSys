"use client";

import React from "react";
import { useContentStore } from "@/src/admin/store/adminStore";

import Link from "next/link";

// Types imported from adminStore

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [activeCategory, setActiveCategory] = React.useState<string | null>(null);
  const [mobileExpandedItem, setMobileExpandedItem] = React.useState<string | null>(null);
  const [hoveredWhoWeAre, setHoveredWhoWeAre] = React.useState(0);

  const { content } = useContentStore();
  const megaMenuData = content.navbar.megaMenuData || {};

  React.useEffect(() => {
    if (
      activeDropdown &&
      megaMenuData[activeDropdown] &&
      megaMenuData[activeDropdown].categories?.length
    ) {
      setActiveCategory(
        megaMenuData[activeDropdown].categories[0].id
      );
    } else {
      setActiveCategory(null);
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
  const navBgColor = isExpanded ? "bg-[#1E2222]" : "bg-[#000000]";

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
      className={`${navBgColor} ${isExpanded ? 'border-transparent' : 'border-[#3A3A3A]'} sticky top-0 z-50 transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo Text on Left */}
          <div className="flex-shrink-0 flex items-center lg:flex-1 z-50">
            <Link
              href="/"
              onClick={() => setActiveDropdown(null)}
              className="font-heading font-extrabold text-3xl tracking-normal text-[#FFFFFF] hover:text-[#FAFAFA] transition-colors"
            >
              ApMoSys<span className="text-primary-red">.</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center space-x-1 z-50 h-full">
            {navigationItems.map((item) => (
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
                  className={`group flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors duration-200 shrink-0 ${activeDropdown === item.label
                    ? "text-[#FFFFFF]"
                    : "text-[#C8C8C8] hover:text-[#FFFFFF]"
                    }`}
                >
                  <span className="whitespace-nowrap relative pb-1">
                    {item.label}
                    {/* Animated Red Underline */}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-[1px] bg-primary-red transform origin-left transition-transform duration-300 ease-out ${activeDropdown === item.label
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
            ))}
          </div>

          {/* Desktop CTA Button (Right) */}
          <div className="hidden lg:flex items-center justify-end lg:flex-1 z-50 space-x-6">
            <Link
              href="/contact"
              className="text-[#C8C8C8] hover:text-[#FFFFFF] text-sm font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden z-50">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
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
            </button>
          </div>

        </div>
      </div>

      {/* Mega Menu Dropdown */}
      {isExpanded && megaMenuData[activeDropdown] && (
        <div
          className="absolute top-16 left-0 w-full bg-[#1E2222] z-40 pb-16 pt-10 shadow-2xl transition-all duration-300 ease-in-out"
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
                <Link
                  href={megaMenuData[activeDropdown].linkHref}
                  className="inline-flex items-center text-[#FFFFFF] text-sm font-medium hover:text-primary-red transition-colors group"
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
                  <div className="lg:col-span-3 border-t border-[#3A3A3A]">
                    {megaMenuData["Who we are"].menuItems?.map((item, index) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onMouseEnter={() => setHoveredWhoWeAre(index)}
                        onClick={() => setActiveDropdown(null)}
                        className={`flex items-center justify-between px-4 py-4 border-b border-[#3A3A3A] transition-all duration-200 ${hoveredWhoWeAre === index
                            ? "bg-[#333535] text-white"
                            : "text-[#C8C8C8] hover:text-white"
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

                      <p className="text-[#C8C8C8] leading-relaxed text-base">
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
                  <div className="lg:col-span-3 flex flex-col border-t border-[#3A3A3A]">
                    {megaMenuData[activeDropdown]?.categories?.map((category) => {
                      const isActive = activeCategory === category.id;

                      return (
                        <div
                          key={category.id}
                          onMouseEnter={() => setActiveCategory(category.id)}
                          onClick={() => setActiveCategory(category.id)}
                          className={`flex items-center justify-between cursor-pointer border-b border-[#3A3A3A] px-4 py-3 transition-colors duration-200 ${isActive
                            ? "bg-[#333535] text-[#FFFFFF]"
                            : "text-[#C8C8C8] hover:text-[#FFFFFF]"
                            }`}
                        >
                          <span className="text-[13px] font-medium">
                            {category.label}
                          </span>

                          <svg
                            className={`w-4 h-4 transition-transform ${isActive
                              ? "translate-x-1 text-[#FFFFFF]"
                              : "text-[#888]"
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
                                className="py-1.5 text-[13px] text-[#C8C8C8] hover:text-[#FFFFFF]"
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
                                className="py-1.5 text-[13px] text-[#C8C8C8] hover:text-[#FFFFFF]"
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
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden bg-[#000000] border-b border-[#3A3A3A] px-4 pt-2 pb-6 space-y-2 overflow-y-auto max-h-[calc(100vh-4rem)] transition-all duration-300 ease-in-out"
        >
          {navigationItems.map((item) => (
            <div key={item.label}>
              {item.hasDropdown ? (
                <button
                  onClick={() => setMobileExpandedItem(mobileExpandedItem === item.label ? null : item.label)}
                  className="w-full flex items-center justify-between text-[#C8C8C8] hover:text-[#FFFFFF] hover:bg-[#1F1F1F] px-3 py-2 rounded-md text-base font-medium transition-colors"
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
                  className="block text-[#C8C8C8] hover:text-[#FFFFFF] hover:bg-[#1F1F1F] px-3 py-2 rounded-md text-base font-medium transition-colors"
                >
                  {item.label}
                </Link>
              )}

              {/* Accordion content for mobile */}
              {item.hasDropdown && mobileExpandedItem === item.label && megaMenuData[item.label] && (
                <div className="pl-4 pr-2 py-3 space-y-4 bg-[#0A0A0A] rounded-md mt-1 mb-2 border border-[#1F1F1F]">
                  <div className="mb-3">
                    <p className="text-xs text-[#A0A0A0] leading-relaxed mb-2">
                      {megaMenuData[item.label].description}
                    </p>
                    <Link
                      href={megaMenuData[item.label].linkHref}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-sm text-primary-red hover:text-red-400 font-medium inline-flex items-center"
                    >
                      {megaMenuData[item.label].linkText}
                      <svg className="ml-1 w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  {megaMenuData[item.label].categories?.map((category) => (
                    <div key={category.id} className="space-y-1">
                      <div className="text-sm font-semibold text-[#FFFFFF] mb-2">{category.label}</div>
                      <div className="flex flex-col space-y-1 border-l border-[#3A3A3A] pl-3">
                        {category.subLinks.map((sublink: { label: string; href: string }, idx) => (
                          <Link
                            key={idx}
                            href={sublink.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setMobileExpandedItem(null);
                            }}
                            className="text-xs text-[#A0A0A0] hover:text-[#FFFFFF] transition-colors py-1"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="pt-4 border-t border-[#3A3A3A] mt-4">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-primary-red text-[#FFFFFF] px-4 py-3 rounded-md text-base font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
