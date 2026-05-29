"use client";

import React from "react";
import { useContentStore, defaultContent } from "@/src/admin/store/adminStore";

import Link from "next/link";

interface MegaMenuCategory {
  id: string;
  label: string;
  subLinks: string[];
}

interface MegaMenuItem {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  categories: MegaMenuCategory[];
}

const megaMenuData: Record<string, MegaMenuItem> = {
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

  React.useEffect(() => {
    if (activeDropdown && megaMenuData[activeDropdown]) {
      // eslint-disable-next-line
      setActiveCategory(megaMenuData[activeDropdown].categories[0].id);
    } else {
      setActiveCategory(null);
    }
  }, [activeDropdown]);

  const { content } = useContentStore();

  const navigationItems = content.navbar.links.filter(link => link.visible !== false).map(link => {
    return {
      label: link.label,
      href: link.href,
      hasDropdown: ["Services", "Solutions", "Products"].includes(link.label)
    };
  });

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
            <Link 
              href="/" 
              className="font-heading font-extrabold text-3xl tracking-normal text-[#FFFFFF] hover:text-[#FAFAFA] transition-colors"
            >
              ApMoSys<span className="text-primary-red inline-block transform rotate-[40deg] translate-y-[-2px]">.</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center justify-center space-x-0 z-50 h-full">
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
                <a
                  href={item.href}
                  className={`group flex items-center gap-1 px-2 py-2 text-sm font-medium transition-colors duration-200 shrink-0 ${
                    activeDropdown === item.label 
                      ? "text-[#FFFFFF]" 
                      : "text-[#C8C8C8] hover:text-[#FFFFFF]"
                  }`}
                >
                  <span className="whitespace-nowrap relative pb-1">
                    {item.label}
                    {/* Animated Red Underline */}
                    <span 
                      className={`absolute bottom-0 left-0 w-full h-[1.5px] bg-primary-red transform origin-left transition-transform duration-300 ease-out ${
                        activeDropdown === item.label 
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
                </a>
              </div>
            ))}
          </div>
            
          {/* Desktop CTA Button (Right) */}
          <div className="hidden lg:flex items-center justify-end lg:flex-1 z-50 space-x-6">
            <a
              href="/contact"
              className="text-[#C8C8C8] hover:text-[#FFFFFF] text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
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
                {megaMenuData[activeDropdown].categories.map((category) => {
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
                {megaMenuData[activeDropdown].categories.map((category) => {
                  if (category.id !== activeCategory) return null;
                  
                  const midPoint = Math.ceil(category.subLinks.length / 2);
                  const leftLinks = category.subLinks.slice(0, midPoint);
                  const rightLinks = category.subLinks.slice(midPoint);

                  return (
                    <div 
                      key={category.id}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1 animate-fadeIn"
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
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden bg-[#000000] border-b border-[#3A3A3A] px-4 pt-2 pb-6 space-y-2 overflow-hidden transition-all duration-300 ease-in-out"
        >
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[#C8C8C8] hover:text-[#FFFFFF] hover:bg-[#1F1F1F] px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-4 border-t border-[#3A3A3A] mt-4">
            <a
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-primary-red text-[#FFFFFF] px-4 py-3 rounded-md text-base font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
