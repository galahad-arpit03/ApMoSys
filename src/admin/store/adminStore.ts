// Admin CMS Global Store — Zustand
// Manages: auth session, editable content, color theme, settings
"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

// ─── Auth ───────────────────────────────────────────────────────────────────

interface AuthState {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: (password: string) => {
        if (password === "123") {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false }),
    }),
    { name: "admin-auth" },
  ),
);

// ─── Site Content ────────────────────────────────────────────────────────────


export interface AboutStoryCard {
  id: string;
  title: string;
  content: string;
}

export interface AboutCoreValue {
  id: string;
  title: string;
  desc: string;
  icon: string;
}

export interface AboutMilestone {
  id: string;
  year: string;
  title: string;
  items: string[];
}

export interface CareerItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WhoWeAreItem {
  id: string;
  label: string;
  description: string;
  href: string;
}

export interface IndustryGridItem {
  id: string;
  title: string;
  description: string;
  linkText: string;
  icon: string;
}

export interface IndustryComplexItem {
  id: string;
  title: string;
  description: string;
}

export interface CareerFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ContactOffice {
  id: string;
  city: string;
  address: string;
  image: string;
  link: string;
  phone?: string;
  email?: string;
}

export interface CareerJob {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  link: string;
}

export interface MegaMenuCategory {
  id: string;
  label: string;
  href?: string;
  subLinks: { label: string; href: string }[];
}

export interface MegaMenuItem {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;

  categories?: MegaMenuCategory[];

  menuItems?: WhoWeAreItem[];
}

export interface SiteContent {
  navbar: {
    logo: string;
    ctaLabel: string;
    ctaHref: string;
    links: { label: string; href: string; visible?: boolean }[];
    megaMenuData?: Record<string, MegaMenuItem>;
  };
  footer: {
    tagline: string;
    companyLinks: { label: string; href: string; visible?: boolean }[];
    coreSystemsLinks: { label: string; href: string; visible?: boolean }[];
    address: string;
    email: string;
    phone: string;
    newsletterHeading: string;
    copyright: string;
  };
  home: {
    hero: {
      badge: string;
      heading: string;
      subheading: string;
      ctaPrimary: string;
      ctaSecondary: string;
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
    };
    about: {
      sectionLabel: string;
      heading: string;
      body: string;
      stat1Value: string;
      stat1Label: string;
      stat2Value: string;
      stat2Label: string;
      stat3Value: string;
      stat3Label: string;
    };
    services: {
      sectionLabel: string;
      heading: string;
      subheading: string;
      card1Title: string;
      card1Desc: string;
      card2Title: string;
      card2Desc: string;
      card3Title: string;
      card3Desc: string;
      card4Title: string;
      card4Desc: string;
    };
    solutions: {
      sectionLabel: string;
      heading: string;
      subheading: string;
    };
    products: {
      sectionLabel: string;
      heading: string;
      subheading: string;
    };
  };
  industries: {
    hero: {
      badge: string;
      heading: string;
      subheading: string;
    };
    cta: {
      heading: string;
      subheading: string;
      ctaLabel: string;
    };
    gridItems: IndustryGridItem[];
    complexItems: IndustryComplexItem[];
  };
  blogs: {
    featured: {
      tag: string;
      heading: string;
      excerpt: string;
    };
  };
  careers: {
    hero: {
      badge: string;
      heading: string;
      subheading: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };
    growth: {
      heading: string;
      subheading: string;
      items: CareerItem[];
    };
    mindset: {
      heading: string;
      subheading: string;
      items: CareerItem[];
    };
    faqItems: CareerFAQItem[];
    jobs: CareerJob[];
  };
  contact: {
    heading: string;
    subheading: string;
    salesEmail: string;
    careersEmail: string;
    phone: string;
    careersPhone: string;
    offices: ContactOffice[];
    faqItems: ContactFAQItem[];
  };
  settings: {
    siteTitle: string;
    metaTitle: string;
    metaDescription: string;
    contactEmail: string;
    contactPhone: string;
    socialLinkedIn: string;
    socialTwitter: string;
    socialFacebook: string;
  };
  sectionThemes?: Record<string, "dark" | "light">;
  sectionVisibilities?: Record<string, boolean>;
  about: {
    hero: {
      badge: string;
      heading: string;
      subheading: string;
      ctaPrimary: string;
      ctaSecondary: string;
    };

    story: {
      sectionLabel: string;
      heading: string;
      paragraph1: string;
      paragraph2: string;
    };

    mission: {
      heading: string;
      description: string;
    };

    vision: {
      heading: string;
      description: string;
    };

    storyCards?: AboutStoryCard[];
    coreValues?: AboutCoreValue[];
    milestones?: AboutMilestone[];

    stats: {
      stat1Value: string;
      stat1Label: string;

      stat2Value: string;
      stat2Label: string;

      stat3Value: string;
      stat3Label: string;

      stat4Value: string;
      stat4Label: string;
    };
   

  },
   services: {
    hero: {
      badge: string;
      heading: string;
      subheading: string;
      ctaPrimary: string;
      ctaSecondary: string;
      visualLabel: string;
    };
    overview: {
      sectionLabel: string;
      heading: string;
      description: string;
      items: ServiceOverviewItem[];
    };
    approach: {
      sectionLabel: string;
      heading: string;
      description: string;
      items: ApproachItem[];
    };
    benefits: {
      sectionLabel: string;
      heading: string;
      description: string;
      items: BenefitItem[];
    };
    process: {
      sectionLabel: string;
      heading: string;
      description: string;
      steps: ProcessStep[];
    };
  };
  products: {
    hero: {
      badge: string;
      heading: string;
      subheading: string;
      ctaPrimary: string;
      ctaSecondary: string;
      visualLabel: string;
    };
    overview: {
      sectionLabel: string;
      heading: string;
      description: string;
      items: ProductOverviewItem[];
    };
    benefits: {
      sectionLabel: string;
      heading: string;
      description: string;
      items: ProductBenefitItem[];
    };
    categories: {
      sectionLabel: string;
      heading: string;
      description: string;
      items: ProductCategoryItem[];
    };
  };
}


export interface ProductOverviewItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  linkText: string;
}

export interface ProductBenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ProductCategoryItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  products: string[];
}

interface ServiceOverviewItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  linkText: string;
}

interface ApproachItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface BenefitItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const defaultContent: SiteContent = {
  sectionThemes: {},
  sectionVisibilities: {},
  navbar: {
    logo: "ApMoSys",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    links: [
      { label: "What we do", href: "/what-we-do" },
      { label: "Who we are", href: "/who-we-are" },
      { label: "Newsrooms", href: "/newsrooms" },
      { label: "Careers", href: "/careers" },
      { label: "Blogs", href: "/blogs" },
    ],
    megaMenuData: {
      "What we do": {
        title: "What we do",
        description: "Empowering businesses with cutting-edge technological solutions for modern challenges. Built to evolve continuously and confidently.",
        linkText: "Explore our services",
        linkHref: "/what-we-do",
        categories: [
          {
            id: "services",
            label: "Services",
            href: "/services",
            subLinks: [
              {
                label: "AI Engineering",
                href: ""
              },
              {
                label: "Digital Assurance Engineering",
                href: ""
              },
              {
                label: "Interface Engineering",
                href: ""
              },
              {
                label: "NextGen Automation Engineering",
                href: ""
              },
              {
                label: "NFR Engineering",
                href: ""
              },
              {
                label: "Accessibility & Compliance Engineering",
                href: ""
              },
              {
                label: "Observability Engineering",
                href: ""
              },
              {
                label: "DevOps & Cloud Engineering",
                href: ""
              },
              {
                label: "Intelligent Automation",
                href: ""
              },
              {
                label: "Development Engineering",
                href: ""
              },
              {
                label: "ITSM & Digital Operations",
                href: ""
              },
              {
                label: "Command Centre Operations",
                href: ""
              },
              {
                label: "Resiliency Operations Centre (ROC)",
                href: ""
              },
              {
                label: "Quality Center of Excellence (QCoE)",
                href: ""
              }
            ]
          },
          {
            id: "products",
            label: "Products and Platform",
            href: "/products",
            subLinks: [
              {
                label: "CliqTest",
                href: "/products"
              },
              {
                label: "Netraa",
                href: "/products"
              },
              {
                label: "Jupiter",
                href: "/products"
              },
              {
                label: "ShieldVue",
                href: "/products"
              },
              {
                label: "Swikrti",
                href: "/products"
              },
              {
                label: "FinXplore",
                href: "/products"
              },
              {
                label: "Saransh",
                href: "/products"
              },
              {
                label: "Protean Device Lab",
                href: "/products"
              }
            ]
          },
          {
            id: "coe",
            label: "CoE and Innovations",
            subLinks: [
              {
                label: "AI Center of Excellence",
                href: "/coe"
              },
              {
                label: "Banking CoE",
                href: "/coe"
              },
              {
                label: "Insurance CoE",
                href: "/coe"
              },
              {
                label: "Research Papers",
                href: "/coe"
              },
              {
                label: "Innovation Labs",
                href: "/coe"
              }
            ]
          },
          {
            id: "alliance",
            label: "Alliance",
            subLinks: []
          },
          {
            id: "industries",
            label: "Industries",
            subLinks: [
              {
                label: "Banking & Financial Services",
                href: "/industries"
              },
              {
                label: "Insurance",
                href: "/industries"
              },
              {
                label: "Capital Markets",
                href: "/industries"
              },
              {
                label: "FinTech",
                href: "/industries"
              },
              {
                label: "Government & PSU",
                href: "/industries"
              },
              {
                label: "Healthcare",
                href: "/industries"
              },
              {
                label: "Retail & E-Commerce",
                href: "/industries"
              },
              {
                label: "Telecom",
                href: "/industries"
              },
              {
                label: "Manufacturing",
                href: "/industries"
              },
              {
                label: "Logistics",
                href: "/industries"
              },
              {
                label: "Education",
                href: "/industries"
              },
              {
                label: "Travel & Hospitality",
                href: "/industries"
              }
            ]
          }
        ]
      },
      "Who we are": {
        title: "Who we are",
        description:
          "We are a team of world-class engineers and innovators working on the hardest problems in enterprise automation.",
        linkText: "Learn about us",
        linkHref: "/who-we-are",

        menuItems: [
          {
            id: "about",
            label: "About Us",
            description:
              "Learn about ApMoSys, our journey, mission, vision and engineering excellence.",
            href: "/about",
          },
          {
            id: "leadership",
            label: "Leadership",
            description:
              "Meet the leaders shaping our strategy and driving innovation across the organization.",
            href: "/leadership",
          },
          {
            id: "team",
            label: "Our Team",
            description:
              "Discover the talented engineers, architects and specialists behind our success.",
            href: "/team",
          },
          {
            id: "community",
            label: "Community",
            description:
              "Explore our initiatives, CSR programs and community engagement efforts.",
            href: "/community",
          },
        ],
      },
      Newsrooms: {
        title: "Newsrooms",
        description: "Stay updated with our latest press releases, events, awards, and customer stories.",
        linkText: "Go to Newsrooms",
        linkHref: "/newsrooms",
        categories: [
          {
            id: "press-releases",
            label: "Press Releases",
            href: "/newsrooms/press-releases",
            subLinks: [
              {
                label: "Latest Announcements",
                href: "/newsrooms/press-releases#latest-announcements"
              },
              {
                label: "Company News",
                href: "/newsrooms/press-releases#company-news"
              },
              {
                label: "Archived Releases",
                href: "/newsrooms/press-releases#archived-releases"
              }
            ]
          },
          {
            id: "events",
            label: "Events",
            href: "/newsrooms/events",
            subLinks: [
              {
                label: "Upcoming Events",
                href: "/newsrooms/events#upcoming-events"
              },
              {
                label: "Past Webinars",
                href: "/newsrooms/events#past-webinars"
              },
              {
                label: "Annual Conferences",
                href: "/newsrooms/events#annual-conferences"
              }
            ]
          },
          {
            id: "awards-recognition",
            label: "Awards & Recognition",
            href: "/newsrooms/awards-recognition",
            subLinks: [
              {
                label: "Industry Awards",
                href: "/newsrooms/awards-recognition#industry-awards"
              },
              {
                label: "Certifications",
                href: "/newsrooms/awards-recognition#certifications"
              },
              {
                label: "Partner Accolades",
                href: "/newsrooms/awards-recognition#partner-accolades"
              }
            ]
          },
          {
            id: "industry-insights",
            label: "Industry Insights",
            href: "/newsrooms/industry-insights",
            subLinks: [
              {
                label: "Tech Trends",
                href: "/newsrooms/industry-insights#tech-trends"
              },
              {
                label: "Market Analysis",
                href: "/newsrooms/industry-insights#market-analysis"
              },
              {
                label: "Expert Opinions",
                href: "/newsrooms/industry-insights#expert-opinions"
              }
            ]
          },
          {
            id: "media-coverage",
            label: "Media Coverage",
            href: "/newsrooms/media-coverage",
            subLinks: [
              {
                label: "In the News",
                href: "/newsrooms/media-coverage#in-the-news"
              },
              {
                label: "Press Mentions",
                href: "/newsrooms/media-coverage#press-mentions"
              },
              {
                label: "Interviews",
                href: "/newsrooms/media-coverage#interviews"
              }
            ]
          },
          {
            id: "podcasts-webinars",
            label: "Podcasts & Webinars",
            href: "/newsrooms/podcasts-webinars",
            subLinks: [
              {
                label: "Tech Talks",
                href: "/newsrooms/podcasts-webinars#tech-talks"
              },
              {
                label: "Leadership Series",
                href: "/newsrooms/podcasts-webinars#leadership-series"
              },
              {
                label: "Guest Speakers",
                href: "/newsrooms/podcasts-webinars#guest-speakers"
              }
            ]
          },
          {
            id: "customer-stories",
            label: "Customer Stories",
            href: "/newsrooms/customer-stories",
            subLinks: [
              {
                label: "Case Studies",
                href: "/newsrooms/customer-stories#case-studies"
              },
              {
                label: "Success Stories",
                href: "/newsrooms/customer-stories#success-stories"
              },
              {
                label: "Client Interviews",
                href: "/newsrooms/customer-stories#client-interviews"
              }
            ]
          },
          {
            id: "success-metrics",
            label: "Success Metrics",
            href: "/newsrooms/success-metrics",
            subLinks: [
              {
                label: "ROI Reports",
                href: "/newsrooms/success-metrics#roi-reports"
              },
              {
                label: "Performance Data",
                href: "/newsrooms/success-metrics#performance-data"
              },
              {
                label: "Impact Studies",
                href: "/newsrooms/success-metrics#impact-studies"
              }
            ]
          },
          {
            id: "transformation-journeys",
            label: "Transformation Journeys",
            href: "/newsrooms/transformation-journeys",
            subLinks: [
              {
                label: "Digital Transformation",
                href: "/newsrooms/transformation-journeys#digital-transformation"
              },
              {
                label: "Agile Adoption",
                href: "/newsrooms/transformation-journeys#agile-adoption"
              },
              {
                label: "Cloud Migration",
                href: "/newsrooms/transformation-journeys#cloud-migration"
              }
            ]
          }
        ]
      }
    },
  },
  footer: {
    tagline:
      "Global leaders in automated quality engineering, security validation, and intelligent digital systems optimization.",
    companyLinks: [
      { label: "Who we are", href: "/who-we-are" },
      { label: "Newsrooms", href: "/newsrooms" },
      { label: "Careers", href: "/careers" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact Us", href: "/contact" },
    ],
    coreSystemsLinks: [
      { label: "Services", href: "/services" },
      { label: "Products and Platform", href: "/products" },
      { label: "CoE and Innovations", href: "/coe" },
      { label: "Industries", href: "/industries" },
    ],
    address: "Mahape, Navi Mumbai, India",
    email: "contact@apmosys.com",
    phone: "+91 22 4976 5600",
    newsletterHeading: "Stay updated on QA innovations.",
    copyright: "© 2025 ApMoSys Technologies. All rights reserved.",
  },
  home: {
    hero: {
      badge: "Enterprise AI Automation Platform",
      heading: "Engineering the Future of Digital Quality",
      subheading:
        "Accelerate releases, eliminate defects, and scale with confidence using ApMoSys — the AI-powered automation backbone for enterprise software teams.",
      ctaPrimary: "Explore Platform",
      ctaSecondary: "Book a Demo",
      stat1Value: "99.9%",
      stat1Label: "Uptime SLA",
      stat2Value: "10x",
      stat2Label: "Faster Releases",
      stat3Value: "500+",
      stat3Label: "Enterprise Clients",
    },
    about: {
      sectionLabel: "About ApMoSys",
      heading: "Precision Engineering for a Complex Digital World",
      body: "ApMoSys was founded on the principle that quality engineering should never be a bottleneck. We build AI-powered automation platforms that give enterprise teams the velocity and confidence to ship faster, smarter, and safer.",
      stat1Value: "15+",
      stat1Label: "Years of Innovation",
      stat2Value: "200+",
      stat2Label: "Engineers Worldwide",
      stat3Value: "40+",
      stat3Label: "Countries Served",
    },
    services: {
      sectionLabel: "Our Services",
      heading: "End-to-End Quality Engineering",
      subheading:
        "From test automation to AI-driven monitoring, we cover every dimension of software quality.",
      card1Title: "Test Automation",
      card1Desc:
        "Intelligent test generation, execution, and maintenance powered by AI. Reduce manual effort by 90%.",
      card2Title: "Performance Engineering",
      card2Desc:
        "Load, stress, and scalability testing to ensure your platform handles real-world demand.",
      card3Title: "Security Validation",
      card3Desc:
        "Comprehensive security testing across your entire software supply chain and runtime environment.",
      card4Title: "AI Quality Ops",
      card4Desc:
        "Continuous monitoring and anomaly detection using machine learning across production environments.",
    },
    solutions: {
      sectionLabel: "Solutions",
      heading: "Built for Enterprise Scale",
      subheading:
        "Tailored solutions for every stage of your digital transformation journey.",
    },
    products: {
      sectionLabel: "Products",
      heading: "The ApMoSys Product Suite",
      subheading:
        "Purpose-built products that integrate seamlessly into your existing toolchain.",
    },
  },
  industries: {
    hero: {
      badge: "Industry Expertise",
      heading: "Engineering Precision Across Every Sector",
      subheading:
        "We serve the world's most demanding industries with specialized automation, compliance, and quality frameworks.",
    },
    cta: {
      heading: "Ready to Transform Your Industry?",
      subheading:
        "Connect with our industry specialists to build a custom quality engineering strategy.",
      ctaLabel: "Schedule a Consultation",
    },
    gridItems: [
      {
        id: "1",
        title: "BFSI",
        description:
          "Banking, Financial Services, and Insurance. We ensure maximum security, fraud detection, and high-performance trading platform stability.",
        linkText: "EXPLORE FINANCIAL SOLUTIONS",
        icon: "bank",
      },
      {
        id: "2",
        title: "Retail & E-commerce",
        description:
          "Delivering seamless shopping experiences with zero downtime during peak seasonal traffic and flash sales.",
        linkText: "EXPLORE RETAIL SOLUTIONS",
        icon: "cart",
      },
      {
        id: "3",
        title: "Manufacturing",
        description:
          "IoT integration and advanced predictive analytics for automated assembly lines and supply chain optimization.",
        linkText: "EXPLORE MANUFACTURING SOLUTIONS",
        icon: "wrench",
      },
      {
        id: "4",
        title: "Healthcare & Life Sciences",
        description:
          "HIPAA-compliant software testing and robust quality assurance for mission-critical medical devices and patient data systems.",
        linkText: "EXPLORE HEALTHCARE SOLUTIONS",
        icon: "heart",
      },
    ],
    complexItems: [
      {
        id: "1",
        title: "Legacy Migration",
        description:
          "Seamlessly transition from monolithic to microservices with zero operational downtime.",
      },
      {
        id: "2",
        title: "Core Silos",
        description:
          "Intelligently connect and standardize data architectures across fragmented global systems.",
      },
      {
        id: "3",
        title: "Real-time Observability",
        description:
          "Full stack monitoring to proactively identify and resolve bottlenecks before they impact users.",
      },
    ],
  },
  blogs: {
    featured: {
      tag: "Featured Article",
      heading: "The Future of AI-Powered Quality Engineering",
      excerpt:
        "Discover how artificial intelligence is fundamentally reshaping software quality assurance, from test generation to intelligent defect prediction.",
    },
  },
  careers: {
    hero: {
      badge: "Join the Team",
      heading: "Build the Future of Software Quality",
      subheading:
        "Join a team of world-class engineers and innovators working on the hardest problems in enterprise automation.",
      ctaPrimary: "View Open Roles",
      ctaSecondary: "Learn Our Culture",
    },
    growth: {
      heading: "Engineered for Your Growth.",
      subheading:
        "We invest heavily in our team's well-being and professional development. Here is what you get when you join our ranks.",
      items: [
        {
          id: "1",
          title: "Premium Healthcare",
          description:
            "Comprehensive medical, dental, and vision coverage for you and your dependents.",
          icon: "heart",
        },
        {
          id: "2",
          title: "Learning Credits",
          description:
            "Annual budget for courses, certifications, conferences, and continuous education.",
          icon: "book",
        },
        {
          id: "3",
          title: "Work Flexibility",
          description:
            "Hybrid and remote-friendly structures so you can work where you are most productive.",
          icon: "globe",
        },
        {
          id: "4",
          title: "Pro Equipment",
          description:
            "Top-tier Mac or PC setup, plus a home office stipend to build your ideal workspace.",
          icon: "monitor",
        },
      ],
    },
    mindset: {
      heading: "The ApMoSys Mindset.",
      subheading:
        "We look for individuals who are not only technically proficient but also possess the drive to innovate. Our culture is built on continuous learning and agile methodologies.",
      items: [
        {
          id: "1",
          title: "Scale and Agility",
          description:
            "We adapt quickly to the ever-evolving tech landscape, ensuring our solutions always remain competitive.",
          icon: "bolt",
        },
        {
          id: "2",
          title: "Intelligent Automation",
          description:
            "AI is deeply embedded in everything we build. We strive to automate the mundane and focus on creativity.",
          icon: "shield",
        },
      ],
    },
    faqItems: [
      {
        id: "1",
        question: "What does the initial tech stack look like?",
        answer:
          "Our core platform leverages React/Next.js on the frontend, with Node.js/Go backend microservices running on Kubernetes. We use Playwright and Selenium extensively for our automation pipelines.",
      },
      {
        id: "2",
        question: "Do you offer remote work options?",
        answer:
          "Yes, we operate on a hybrid and remote-friendly model. While certain highly collaborative architectural sessions benefit from in-office presence, daily execution is flexible based on your team's structure.",
      },
      {
        id: "3",
        question: "How long does the onboarding process take?",
        answer:
          "Our standard engineering onboarding spans 4 weeks. This includes deep dives into our CI/CD pipelines, security protocols, and shadowing a senior architect on an active enterprise deployment.",
      },
    ],
    jobs: [
      {
        id: "1",
        title: "Senior Quality Engineer",
        department: "Engineering",
        location: "Navi Mumbai, India (Hybrid)",
        type: "Full-Time",
        experience: "5+ Years",
        link: "/careers/apply",
      },
      {
        id: "2",
        title: "DevSecOps Architect",
        department: "Operations",
        location: "Remote (Global)",
        type: "Full-Time",
        experience: "8+ Years",
        link: "/careers/apply",
      },
      {
        id: "3",
        title: "Lead SDET (Playwright/Go)",
        department: "Engineering",
        location: "Navi Mumbai, India (Hybrid)",
        type: "Full-Time",
        experience: "6+ Years",
        link: "/careers/apply",
      },
    ],
  },
  contact: {
    heading: "Let's Build Something Exceptional",
    subheading:
      "Tell us about your automation challenges and we'll craft a solution that fits your scale.",
    salesEmail: "sales@apmosys.com",
    careersEmail: "career@apmosys.com",
    phone: "+91 2241-222-250",
    careersPhone: "+91 2241-222-251",
    offices: [
      {
        id: "1",
        city: "Chennai",
        address:
          "Office No. C315, 3rd Floor, Apeejay House, 39/12, Haddows Road, Nungambakkam, Chennai – 600 006",
        image: "/mumbai_hq.png",
        link: "https://www.google.com/maps/place/Apeejay+Business+Centre/@13.0631753,80.2453564,17z/data=!3m2!4b1!5s0x3a52666945ca8d3d:0xdd03801419888d34!4m6!3m5!1s0x3a526669439ac537:0x2e28741298f598ea!8m2!3d13.0631753!4d80.2479313!16s%2Fg%2F1tjtgpsz?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
        phone: "+91 44 4976 5601",
        email: "chennai@apmosys.com",
      },
      {
        id: "2",
        city: "Bhubaneswar",
        address:
          "ApMoSys Technologies Pvt. Ltd., Fortune Towers, 4th Floor, A Zone, Nandankanan Road, Chandrasekharpur, Bhubaneswar – 751023, Odisha",
        image: "/dubai_office.png",
        link: "https://www.google.com/maps/place/ApMoSys+Technologies+Pvt+Ltd/@20.3094975,85.8169395,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909005ebd71a1:0xf02ca3f5e8cf8ad5!8m2!3d20.3094975!4d85.8195144!16s%2Fg%2F11xt2cgl14?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
        phone: "+91 674 4976 5602",
        email: "bbsr@apmosys.com",
      },
      {
        id: "3",
        city: "United Arab Emirates",
        address:
          "ApMoSys Technology FZ-LLC, B05-716A Business Center 04, RAKEZ Business Zone – FZ RAK, UAE. PO BOX 10055",
        image: "/ontario_office.png",
        link: "https://www.google.com/maps/search/ApMoSys+Technology+FZ-LLC,+B05-716A+Business+Center+04,+RAKEZ+Business+Zone+-FZ+RAK,+United+Arab+Emirates.+PO+BOX+10055./@25.452999,55.3465905,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
        phone: "+971 4 4976 5603",
        email: "uae@apmosys.com",
      },
    ],
    faqItems: [
      {
        id: "1",
        question:
          "What are your application performance monitoring capabilities?",
        answer:
          "Our AIOps Monitor continuously tracks server response times, memory usage, and latency spikes in real time. We integrate with Prometheus, Grafana, and custom telemetry pipelines to provide unified observability dashboards across your entire infrastructure stack.",
      },
      {
        id: "2",
        question: "Do you offer a free trial for the cliQTest platform?",
        answer:
          "Yes. Qualified enterprise clients can access a 30-day proof-of-concept environment with full access to our automation scripting engine, visual regression module, and reporting suite. Contact our sales team to begin the onboarding process.",
      },
      {
        id: "3",
        question: "How do you handle multi-region enterprise deployments?",
        answer:
          "ApMoSys operates engineering hubs in Chennai, Bhubaneswar, and UAE to enable round-the-clock support. Our deployment framework supports multi-cloud and hybrid environments, including AWS, Azure, and GCP, with full CI/CD pipeline integration.",
      },
      {
        id: "4",
        question: "What security compliance standards does ApMoSys adhere to?",
        answer:
          "We follow ISO/IEC 27001, SOC 2 Type II, and GDPR-aligned practices. Our QA systems include dedicated security regression suites that validate OWASP Top 10 vulnerabilities and VAPT coverage as part of every release cycle.",
      },
    ],
  },
  settings: {
    siteTitle: "ApMoSys",
    metaTitle: "ApMoSys | Enterprise Automation & Testing Solutions",
    metaDescription:
      "Accelerating digital transformation with AI-powered quality assurance and visual analytics.",
    contactEmail: "contact@apmosys.com",
    contactPhone: "+91 22 4976 5600",
    socialLinkedIn: "https://linkedin.com/company/apmosys",
    socialTwitter: "https://twitter.com/apmosys",
    socialFacebook: "https://facebook.com/apmosys",
  },
  about: {
    hero: {
      badge: "Who We Are",
      heading: "Engineering Innovation at Enterprise Scale",
      subheading:
        "For more than a decade, ApMoSys has helped enterprises accelerate transformation through intelligent automation, digital assurance, and AI-powered engineering solutions.",
      ctaPrimary: "Meet Our Leadership",
      ctaSecondary: "Join Our Team",
    },

    story: {
      sectionLabel: "Our Story",
      heading: "Built on Engineering Excellence.",
      paragraph1:
        "Founded with a vision to redefine software quality and enterprise automation, ApMoSys has grown into a trusted technology partner serving organizations across industries.",

      paragraph2:
        "Our expertise spans AI engineering, digital assurance, cloud transformation, observability, and intelligent automation, helping enterprises deliver innovation faster and more reliably.",
    },

    mission: {
      heading: "Our Mission",
      description:
        "To empower enterprises with intelligent engineering solutions that accelerate innovation while ensuring quality, security, and resilience."
    },

    vision: {
      heading: "Our Vision",
      description:
        "To become the global benchmark for enterprise automation, quality engineering, and AI-driven digital transformation."
    },


    storyCards: [
      { id: "s1", title: "Inception & Early Days", content: "ApMoSys was founded by Mr. Bibhu Prasad Padhi with a team of five people and a vision to make quality software faster and more resilient. Signed the 1st client, a public sector Bank, in Feb 2012." },
      { id: "s2", title: "ISO Certification", content: "Achieved ISO 9011 certifications, formalizing our commitment to global quality standards and continuous process improvement." },
      { id: "s3", title: "Revenue Milestone", content: "Crossed the 1 crore revenue mark, proving the viability of our specialized quality engineering approach." },
      { id: "s4", title: "Expanding the Base", content: "Moved to a significantly larger facility and crossed the 100-employee milestone, building specialized centers of excellence." }
    ],
    coreValues: [
      { id: "cv1", title: "Uncompromising Quality", desc: "We hold ourselves to the highest standards of software engineering. Quality is not a phase; it is embedded in our culture.", icon: "CheckCircle2" },
      { id: "cv2", title: "Intelligent Innovation", desc: "We leverage AI and next-generation tools not just for the sake of technology, but to solve complex business problems efficiently.", icon: "Cpu" },
      { id: "cv3", title: "Data Security First", desc: "Enterprise data is sacred. Our architectures are designed with zero-trust principles and comprehensive compliance frameworks.", icon: "Shield" },
      { id: "cv4", title: "Agile Resilience", desc: "We build systems and teams that adapt to market changes rapidly, ensuring our clients stay ahead of the curve.", icon: "Zap" }
    ],
    milestones: [
      { id: "ms1", year: "2012", title: "ApMoSys Founded", items: ["Founded by Mr. Bibhu Prasad Padhi with 5 employees.", "Signed 1st client, a public sector Bank in Feb 2012."] },
      { id: "ms2", year: "2013", title: "ISO Certification", items: ["ISO 9011 certifications done."] },
      { id: "ms3", year: "2014", title: "Revenue Milestone", items: ["1 crore revenue Generated."] },
      { id: "ms4", year: "2015", title: "Large-base Expansion", items: ["Moved to a comparatively larger base, crossed 100 employees."] },
      { id: "ms5", year: "2016", title: "Client Base Growth", items: ["Number of clients crossed 15."] },
      { id: "ms6", year: "2017", title: "ISO Certification", items: ["ISO 21000 certification completed, reinforcing global quality standards in delivery."] },
      { id: "ms7", year: "2018", title: "Revenue & Office Expansion", items: ["10 cr Revenue generated & shifted to proper corporate office at Mahape."] },
      { id: "ms8", year: "2019", title: "Workforce Milestone", items: ["350 total employees onboarded."] },
      { id: "ms9", year: "2020", title: "New Office Procurement", items: ["Procured our own office at Greenscape Technocity, Mahape."] },
      { id: "ms10", year: "2021", title: "Rapid Scaling", items: ["Crossed 750 employees mark, Number of clients more than 70."] },
      { id: "ms11", year: "2022", title: "Massive Expansion", items: ["Crossed 1000 employees and 100+ clients. Awarded Best Organization for Women Empowerment at 3rd GIWL Awards."] },
      { id: "ms12", year: "2023", title: "Strategic Partnerships", items: ["Rising Star Awardee by Dynatrace. Axis Bank AVC Performer.", "Published multiple Springer and IEEE whitepapers."] },
      { id: "ms13", year: "2024", title: "Strengthening Ecosystem", items: ["Endorsed Service Partner by Dynatrace. Rising Star by Automation Anywhere.", "Achieved CMMI Maturity Level 3 Certification.", "Crossed 1400 Employees, Clients more than 140."] }
    ],

    stats: {
      stat1Value: "15+",
      stat1Label: "Years of Excellence",

      stat2Value: "500+",
      stat2Label: "Enterprise Projects",

      stat3Value: "200+",
      stat3Label: "Engineering Experts",

      stat4Value: "40+",
      stat4Label: "Countries Served",
    }
  },
  services: {
    hero: {
      badge: "Our Services",
      heading: "End-to-End Engineering Services for Enterprise Scale",
      subheading:
        "From quality assurance and automation to cloud-native infrastructure and AI-driven observability — we deliver the full spectrum of engineering services to accelerate your digital transformation.",
      ctaPrimary: "Explore Services",
      ctaSecondary: "Talk to an Expert",
      visualLabel: "Full-Stack Engineering",
    },
    overview: {
      sectionLabel: "Our Capabilities",
      heading: "Full-Stack Engineering Services",
      description:
        "End-to-end engineering capabilities spanning quality assurance, automation, cloud, security, and AI — designed to accelerate your enterprise transformation.",
      items: [
        {
          id: "1",
          title: "Quality Engineering",
          description:
            "Comprehensive testing strategies including functional, automation, performance, and security testing to ensure zero-defect releases.",
          icon: "quality",
          linkText: "Learn More",
        },
        {
          id: "2",
          title: "Intelligent Automation",
          description:
            "AI-powered automation frameworks that reduce manual effort, accelerate delivery, and improve accuracy across your software lifecycle.",
          icon: "automation",
          linkText: "Learn More",
        },
        {
          id: "3",
          title: "Cloud & DevOps",
          description:
            "End-to-end cloud migration, CI/CD pipeline orchestration, infrastructure as code, and Kubernetes-based container management.",
          icon: "cloud",
          linkText: "Learn More",
        },
        {
          id: "4",
          title: "Security & Compliance",
          description:
            "Comprehensive security testing, vulnerability assessments, and compliance validation for regulated industries.",
          icon: "security",
          linkText: "Learn More",
        },
        {
          id: "5",
          title: "DevSecOps",
          description:
            "Integrated security practices into DevOps pipelines to ensure secure software delivery without compromising speed.",
          icon: "devops",
          linkText: "Learn More",
        },
        {
          id: "6",
          title: "AI Engineering",
          description:
            "Custom AI solutions including machine learning models, NLP, computer vision, and predictive analytics for enterprise applications.",
          icon: "ai",
          linkText: "Learn More",
        },
        {
          id: "7",
          title: "Observability & AIOps",
          description:
            "Real-time monitoring, anomaly detection, and intelligent operations management for mission-critical systems.",
          icon: "observability",
          linkText: "Learn More",
        },
        {
          id: "8",
          title: "Application Development",
          description:
            "Modern web and mobile application development using microservices, React, Next.js, and cloud-native architectures.",
          icon: "devops",
          linkText: "Learn More",
        },
      ],
    },
    approach: {
      sectionLabel: "Our Approach",
      heading: "Engineering Excellence Through a Proven Methodology",
      description:
        "Our approach combines deep industry expertise, technical excellence, and a relentless focus on quality to deliver measurable business outcomes. We partner with you at every stage of your transformation journey.",
      items: [
    {
      id: "1",
      title: "Consultative Discovery",
      description: "We start by understanding your unique business challenges...",
      icon: "discovery",  
    },
    {
      id: "2",
      title: "Architectural Excellence",
      description: "Our solutions are built on robust, scalable architectures...",
      icon: "architecture", 
    },
    {
      id: "3",
      title: "Agile Delivery",
      description: "We adopt agile methodologies with continuous feedback loops...",
      icon: "agile",     
    },
    {
      id: "4",
      title: "Quality-First Engineering",
      description: "Quality is embedded at every stage...",
      icon: "quality",   
    },
  ],
    },
    benefits: {
      sectionLabel: "Why Choose ApMoSys",
      heading: "Delivering Measurable Business Outcomes",
      description:
        "Our engineering services are designed to deliver tangible value across your entire software delivery lifecycle — from development to production.",
      items: [
       {
      id: "1",
      title: "Accelerated Time-to-Market",
      description: "Streamlined engineering processes...",
      icon: "speed",        // ← instead of "⚡"
    },
    {
      id: "2",
      title: "Zero-Defect Quality",
      description: "Comprehensive testing and quality assurance...",
      icon: "quality",      // ← instead of "🎯"
    },
    {
      id: "3",
      title: "Cost Optimization",
      description: "Intelligent automation and efficient resource utilization...",
      icon: "cost",         // ← instead of "💰"
    },
    {
      id: "4",
      title: "Security & Compliance",
      description: "Built-in security validation...",
      icon: "security",     // ← instead of "🛡️"
    },
    {
      id: "5",
      title: "Scalable Architecture",
      description: "Modern, cloud-native architectures...",
      icon: "scale",        // ← instead of "📈"
    },
    {
      id: "6",
      title: "Continuous Innovation",
      description: "AI-driven insights and continuous improvement...",
      icon: "innovation",   // ← instead of "🚀"
    },
  ],
    },
    process: {
      sectionLabel: "Our Process",
      heading: "A Structured Path to Engineering Excellence",
      description:
        "Our five-stage engineering process ensures clarity, quality, and consistency across every engagement — from initial discovery to ongoing operations.",
      steps: [
        {
          id: "1",
          title: "Discovery & Assessment",
          description:
            "We analyze your current systems, processes, and challenges to identify opportunities for automation, optimization, and modernization.",
          icon: "📋",
        },
        {
          id: "2",
          title: "Strategy & Architecture",
          description:
            "We design a tailored engineering strategy and architectural blueprint aligned with your business goals and technical requirements.",
          icon: "🏗️",
        },
        {
          id: "3",
          title: "Implementation & Development",
          description:
            "Our engineering teams execute the strategy using agile methodologies, delivering value incrementally with continuous feedback.",
          icon: "💻",
        },
        {
          id: "4",
          title: "Quality & Security Validation",
          description:
            "Comprehensive testing, security scanning, and performance validation ensure your systems meet the highest quality standards.",
          icon: "✅",
        },
        {
          id: "5",
          title: "Deployment & Operations",
          description:
            "We deploy your solutions and provide ongoing monitoring, support, and optimization to ensure long-term success and reliability.",
          icon: "🚀",
        },
      ],
    },
  },
  products: {
  hero: {
    badge: "Products & Platform",
    heading: "Enterprise Platforms Engineered for Scale",
    subheading:
      "Purpose-built products and platforms that integrate seamlessly into your existing toolchain — accelerating quality, observability, and intelligent automation at enterprise scale.",
    ctaPrimary: "Explore Products",
    ctaSecondary: "See Platform Demos",
    visualLabel: "Product Ecosystem",
  },
  overview: {
    sectionLabel: "Our Product Suite",
    heading: "Purpose-Built Platforms for Enterprise Excellence",
    description:
      "From AI-powered testing and observability to security validation and device labs — our products are designed to solve real-world enterprise challenges.",
    items: [
      {
        id: "1",
        title: "CliqTest",
        description:
          "Intelligent test automation platform that accelerates quality engineering with AI-driven test generation, execution, and maintenance.",
        icon: "cliqtest",
        linkText: "Explore CliqTest",
      },
      {
        id: "2",
        title: "Netraa",
        description:
          "AI-powered visual testing and monitoring platform that detects UI anomalies and ensures pixel-perfect user experiences across devices.",
        icon: "netraa",
        linkText: "Explore Netraa",
      },
      {
        id: "3",
        title: "Jupiter",
        description:
          "Enterprise-grade performance engineering platform for load testing, stress testing, and scalability validation at massive scale.",
        icon: "jupiter",
        linkText: "Explore Jupiter",
      },
      {
        id: "4",
        title: "ShieldVue",
        description:
          "Comprehensive security validation platform that automates vulnerability scanning, penetration testing, and compliance verification.",
        icon: "shieldvue",
        linkText: "Explore ShieldVue",
      },
      {
        id: "5",
        title: "Swikrti",
        description:
          "Intelligent document processing and workflow automation platform that streamlines complex business operations with AI and RPA.",
        icon: "swikrti",
        linkText: "Explore Swikrti",
      },
      {
        id: "6",
        title: "FinXplore",
        description:
          "Advanced financial analytics and reporting platform that provides real-time insights, predictive modeling, and regulatory compliance.",
        icon: "finxplore",
        linkText: "Explore FinXplore",
      },
      {
        id: "7",
        title: "Saransh",
        description:
          "Unified observability and AIOps platform that delivers end-to-end monitoring, incident intelligence, and root-cause analysis.",
        icon: "saransh",
        linkText: "Explore Saransh",
      },
      {
        id: "8",
        title: "Protean Device Lab",
        description:
          "Cloud-based device testing lab that provides on-demand access to thousands of real devices for cross-platform testing and validation.",
        icon: "protean",
        linkText: "Explore Protean",
      },
    ],
  },
  benefits: {
    sectionLabel: "Why Our Products",
    heading: "Built for Enterprise Excellence",
    description:
      "Every product in the ApMoSys suite is engineered to solve complex enterprise challenges — delivering security, scalability, and intelligent automation at every level.",
    items: [
      {
      id: "1",
      title: "Enterprise-Grade Security",
      description: "All our products are built with zero-trust principles...",
      icon: "security",
    },
    {
      id: "2",
      title: "Seamless Integration",
      description: "Designed to integrate seamlessly with your existing CI/CD pipelines...",
      icon: "integration",
    },
    {
      id: "3",
      title: "AI-Powered Intelligence",
      description: "Leverage machine learning and AI across all products...",
      icon: "ai",
    },
    {
      id: "4",
      title: "Scalable Architecture",
      description: "Cloud-native architectures that scale effortlessly...",
      icon: "scale",
    },
    {
      id: "5",
      title: "Real-Time Insights",
      description: "Gain instant visibility into system performance...",
      icon: "insights",
    },
    {
      id: "6",
      title: "Global Support",
      description: "24/7 enterprise support with dedicated engineering teams...",
      icon: "support",
    },
  ],
  },
  categories: {
    sectionLabel: "Product Categories",
    heading: "Organized by Capability",
    description:
      "Explore our products grouped by capability — from AI and automation to security, observability, and analytics.",
    items: [
    {
      id: "1",
      title: "AI & Automation",
      description: "AI-driven platforms that automate testing...",
      icon: "ai",
      products: ["CliqTest", "Swikrti", "FinXplore"],
    },
    {
      id: "2",
      title: "Quality Engineering",
      description: "Comprehensive testing platforms for functional, visual...",
      icon: "scale",
      products: ["CliqTest", "Protean Device Lab", "Jupiter"],
    },
    {
      id: "3",
      title: "Observability & Monitoring",
      description: "Real-time monitoring, anomaly detection...",
      icon: "insights",
      products: ["Saransh", "Netraa"],
    },
    {
      id: "4",
      title: "Security & Compliance",
      description: "Security validation platforms that automate vulnerability scanning...",
      icon: "security",
      products: ["ShieldVue"],
    },
    {
      id: "5",
      title: "Analytics & Intelligence",
      description: "Advanced analytics platforms that deliver real-time insights...",
      icon: "ai",
      products: ["FinXplore", "Saransh"],
    },
    {
      id: "6",
      title: "Device & Infrastructure",
      description: "Cloud-based device labs and infrastructure platforms...",
      icon: "support",
      products: ["Protean Device Lab"],
    },
  ],
  },
},
};

interface ContentState {
  content: SiteContent;
  isDirty: boolean;
  savedAt: string | null;
  updateField: (path: string, value: string) => void;
  resetContent: () => void;
  markSaved: () => void;
  addCareerPerk: () => void;
  deleteCareerPerk: (id: string) => void;
  addCareerMindset: () => void;
  deleteCareerMindset: (id: string) => void;
  addIndustryGridItem: () => void;
  deleteIndustryGridItem: (id: string) => void;
  addIndustryComplexItem: () => void;
  deleteIndustryComplexItem: (id: string) => void;

  addAboutStoryCard: () => void;
  deleteAboutStoryCard: (id: string) => void;
  addAboutCoreValue: () => void;
  deleteAboutCoreValue: (id: string) => void;
  addAboutMilestone: () => void;
  deleteAboutMilestone: (id: string) => void;

  addCareerFAQItem: () => void;
  deleteCareerFAQItem: (id: string) => void;
  addCareerJob: () => void;
  deleteCareerJob: (id: string) => void;
  addContactOffice: () => void;
  deleteContactOffice: (id: string) => void;
  addContactFAQItem: () => void;
  deleteContactFAQItem: (id: string) => void;
  toggleNavbarLink: (index: number) => void;
  updateNavbarLink: (index: number, updates: Partial<{ label: string, href: string }>) => void;
  moveNavbarLink: (index: number, direction: "up" | "down") => void;
  toggleFooterLink: (section: "companyLinks" | "coreSystemsLinks", index: number) => void;
  updateFooterLink: (section: "companyLinks" | "coreSystemsLinks", index: number, updates: Partial<{ label: string, href: string }>) => void;
  moveFooterLink: (section: "companyLinks" | "coreSystemsLinks", index: number, direction: "up" | "down") => void;
  updateMegaMenuSubLink: (megaMenuKey: string, categoryIndex: number, subLinkIndex: number, updates: Partial<{ label: string, href: string }>) => void;
  moveMegaMenuSubLink: (megaMenuKey: string, categoryIndex: number, subLinkIndex: number, direction: "up" | "down") => void;
  addServiceOverviewItem: () => void;
  deleteServiceOverviewItem: (id: string) => void;
  
  addApproachItem: () => void;
  deleteApproachItem: (id: string) => void;
  
  addBenefitItem: () => void;
  deleteBenefitItem: (id: string) => void;
  
  addProcessStep: () => void;
  deleteProcessStep: (id: string) => void;
  addProductOverviewItem: () => void;
  deleteProductOverviewItem: (id: string) => void;
  addProductBenefitItem: () => void;
  deleteProductBenefitItem: (id: string) => void;
  addProductCategoryItem: () => void;
  deleteProductCategoryItem: (id: string) => void;

  toggleSectionVisibility: (sectionId: string) => void;
}

// Utility: nested path setter
function setNestedValue(
  obj: Record<string, unknown>,
  path: string,
  value: string,
): Record<string, unknown> {
  const keys = path.split(".");
  const result = { ...obj };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = result;
  for (let i = 0; i < keys.length - 1; i++) {
    current[keys[i]] = { ...current[keys[i]] };
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
  return result;
}

export const useContentStore = create<ContentState>()(
  persist(
    (set) => ({
      content: defaultContent,
      isDirty: false,
      savedAt: null,
      updateField: (path: string, value: string) =>
        set((state) => ({
          content: setNestedValue(
            state.content as unknown as Record<string, unknown>,
            path,
            value,
          ) as unknown as SiteContent,
          isDirty: true,
        })),
      resetContent: () => set({ content: defaultContent, isDirty: false }),
      markSaved: () =>
        set({ isDirty: false, savedAt: new Date().toISOString() }),
      addCareerPerk: () =>
        set((state) => {
          const currentItems = state.content.careers.growth.items || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              title: "New Perk Title",
              description: "New perk description...",
              icon: "bolt",
            },
          ];
          return {
            content: {
              ...state.content,
              careers: {
                ...state.content.careers,
                growth: {
                  ...state.content.careers.growth,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),
      deleteCareerPerk: (id: string) =>
        set((state) => {
          const currentItems = state.content.careers.growth.items || [];
          const newItems = currentItems.filter((item) => item.id !== id);
          return {
            content: {
              ...state.content,
              careers: {
                ...state.content.careers,
                growth: {
                  ...state.content.careers.growth,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),
      addCareerMindset: () =>
        set((state) => {
          const currentItems = state.content.careers.mindset.items || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              title: "New Mindset Pillar",
              description: "New mindset description...",
              icon: "bolt",
            },
          ];
          return {
            content: {
              ...state.content,
              careers: {
                ...state.content.careers,
                mindset: {
                  ...state.content.careers.mindset,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),
      deleteCareerMindset: (id: string) =>
        set((state) => {
          const currentItems = state.content.careers.mindset.items || [];
          const newItems = currentItems.filter((item) => item.id !== id);
          return {
            content: {
              ...state.content,
              careers: {
                ...state.content.careers,
                mindset: {
                  ...state.content.careers.mindset,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),
      addIndustryGridItem: () =>
        set((state) => {
          const currentItems = state.content.industries.gridItems || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              title: "New Industry Domain",
              description:
                "Describe the industry focus and the automated services we provide here.",
              linkText: "EXPLORE NEW INDUSTRY",
              icon: "bank",
            },
          ];
          return {
            content: {
              ...state.content,
              industries: {
                ...state.content.industries,
                gridItems: newItems,
              },
            },
            isDirty: true,
          };
        }),
      deleteIndustryGridItem: (id: string) =>
        set((state) => {
          const currentItems = state.content.industries.gridItems || [];
          const newItems = currentItems.filter((item) => item.id !== id);
          return {
            content: {
              ...state.content,
              industries: {
                ...state.content.industries,
                gridItems: newItems,
              },
            },
            isDirty: true,
          };
        }),
      addIndustryComplexItem: () =>
        set((state) => {
          const currentItems = state.content.industries.complexItems || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              title: "New Architectural Challenge",
              description:
                "Details about legacy hurdles, bottlenecks, and the technical solutions.",
            },
          ];
          return {
            content: {
              ...state.content,
              industries: {
                ...state.content.industries,
                complexItems: newItems,
              },
            },
            isDirty: true,
          };
        }),
      deleteIndustryComplexItem: (id: string) =>
        set((state) => {
          const currentItems = state.content.industries.complexItems || [];
          const newItems = currentItems.filter((item) => item.id !== id);
          return {
            content: {
              ...state.content,
              industries: {
                ...state.content.industries,
                complexItems: newItems,
              },
            },
            isDirty: true,
          };
        }),

      addAboutStoryCard: () => set((state) => {
        const rawCards = state.content.about.storyCards;
        const cards = Array.isArray(rawCards) ? rawCards : [];
        const newCard = { id: Date.now().toString(), title: "New Story", content: "Story details here" };
        return { content: { ...state.content, about: { ...state.content.about, storyCards: [...cards, newCard] } } };
      }),
      deleteAboutStoryCard: (id: string) => set((state) => {
        const rawCards = state.content.about.storyCards;
        const cards = Array.isArray(rawCards) ? rawCards : [];
        return { content: { ...state.content, about: { ...state.content.about, storyCards: cards.filter(c => c.id !== id) } } };
      }),
      addAboutCoreValue: () => set((state) => {
        const rawValues = state.content.about.coreValues;
        const values = Array.isArray(rawValues) ? rawValues : [];
        const newValue = { id: Date.now().toString(), title: "New Value", desc: "Description here", icon: "CheckCircle2" };
        return { content: { ...state.content, about: { ...state.content.about, coreValues: [...values, newValue] } } };
      }),
      deleteAboutCoreValue: (id: string) => set((state) => {
        const rawValues = state.content.about.coreValues;
        const values = Array.isArray(rawValues) ? rawValues : [];
        return { content: { ...state.content, about: { ...state.content.about, coreValues: values.filter(v => v.id !== id) } } };
      }),
      addAboutMilestone: () => set((state) => {
        const rawMs = state.content.about.milestones;
        const ms = Array.isArray(rawMs) ? rawMs : [];
        const newMs = { id: Date.now().toString(), year: "202X", title: "New Milestone", items: ["Milestone detail"] };
        return { content: { ...state.content, about: { ...state.content.about, milestones: [...ms, newMs] } } };
      }),
      deleteAboutMilestone: (id: string) => set((state) => {
        const rawMs = state.content.about.milestones;
        const ms = Array.isArray(rawMs) ? rawMs : [];
        return { content: { ...state.content, about: { ...state.content.about, milestones: ms.filter(m => m.id !== id) } } };
      }),
      addCareerFAQItem: () =>
        set((state) => {
          const currentItems = state.content.careers.faqItems || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              question: "New FAQ Question?",
              answer:
                "Provide the detailed answer to the frequently asked question here.",
            },
          ];
          return {
            content: {
              ...state.content,
              careers: {
                ...state.content.careers,
                faqItems: newItems,
              },
            },
            isDirty: true,
          };
        }),
      deleteCareerFAQItem: (id: string) =>
        set((state) => {
          const currentItems = state.content.careers.faqItems || [];
          const newItems = currentItems.filter((item) => item.id !== id);
          return {
            content: {
              ...state.content,
              careers: {
                ...state.content.careers,
                faqItems: newItems,
              },
            },
            isDirty: true,
          };
        }),
      addCareerJob: () =>
        set((state) => {
          const currentJobs = state.content.careers.jobs || [];
          const newJobs = [
            ...currentJobs,
            {
              id: Date.now().toString(),
              title: "New Job Role",
              department: "Engineering",
              location: "Navi Mumbai, India (Hybrid)",
              type: "Full-Time",
              experience: "3+ Years",
              link: "/careers/apply",
            },
          ];
          return {
            content: {
              ...state.content,
              careers: {
                ...state.content.careers,
                jobs: newJobs,
              },
            },
            isDirty: true,
          };
        }),
      deleteCareerJob: (id: string) =>
        set((state) => {
          const currentJobs = state.content.careers.jobs || [];
          const newJobs = currentJobs.filter((job) => job.id !== id);
          return {
            content: {
              ...state.content,
              careers: {
                ...state.content.careers,
                jobs: newJobs,
              },
            },
            isDirty: true,
          };
        }),
      addContactOffice: () =>
        set((state) => {
          const currentOffices = state.content.contact.offices || [];
          const newOffices = [
            ...currentOffices,
            {
              id: Date.now().toString(),
              city: "New Office Branch",
              address:
                "ApMoSys Technologies, Sector-11, Mahape, Navi Mumbai - 400710",
              image: "/mumbai_hq.png",
              link: "https://maps.google.com",
              phone: "+91 22 4976 5600",
              email: "contact@apmosys.com",
            },
          ];
          return {
            content: {
              ...state.content,
              contact: {
                ...state.content.contact,
                offices: newOffices,
              },
            },
            isDirty: true,
          };
        }),
      deleteContactOffice: (id: string) =>
        set((state) => {
          const currentOffices = state.content.contact.offices || [];
          const newOffices = currentOffices.filter(
            (office) => office.id !== id,
          );
          return {
            content: {
              ...state.content,
              contact: {
                ...state.content.contact,
                offices: newOffices,
              },
            },
            isDirty: true,
          };
        }),
      addContactFAQItem: () =>
        set((state) => {
          const currentItems = state.content.contact.faqItems || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              question: "New FAQ Question?",
              answer: "Enter answer content here.",
            },
          ];
          return {
            content: {
              ...state.content,
              contact: {
                ...state.content.contact,
                faqItems: newItems,
              },
            },
            isDirty: true,
          };
        }),
      deleteContactFAQItem: (id: string) =>
        set((state) => {
          const currentItems = state.content.contact.faqItems || [];
          const newItems = currentItems.filter((item) => item.id !== id);
          return {
            content: {
              ...state.content,
              contact: {
                ...state.content.contact,
                faqItems: newItems,
              },
            },
            isDirty: true,
          };
        }),
      toggleNavbarLink: (index: number) =>
        set((state) => {
          const newLinks = [...state.content.navbar.links];
          newLinks[index] = { ...newLinks[index], visible: newLinks[index].visible === false ? true : false };
          return {
            content: {
              ...state.content,
              navbar: {
                ...state.content.navbar,
                links: newLinks
              }
            },
            isDirty: true
          };
        }),
      updateNavbarLink: (index: number, updates: Partial<{ label: string, href: string }>) =>
        set((state) => {
          const newLinks = [...state.content.navbar.links];
          newLinks[index] = { ...newLinks[index], ...updates };
          return {
            content: {
              ...state.content,
              navbar: {
                ...state.content.navbar,
                links: newLinks
              }
            },
            isDirty: true
          };
        }),
      toggleFooterLink: (section: "companyLinks" | "coreSystemsLinks", index: number) =>
        set((state) => {
          const newLinks = [...state.content.footer[section]];
          newLinks[index] = { ...newLinks[index], visible: newLinks[index].visible === false ? true : false };
          return {
            content: {
              ...state.content,
              footer: {
                ...state.content.footer,
                [section]: newLinks
              }
            },
            isDirty: true
          };
        }),
      updateFooterLink: (section: "companyLinks" | "coreSystemsLinks", index: number, updates: Partial<{ label: string, href: string }>) =>
        set((state) => {
          const newLinks = [...state.content.footer[section]];
          newLinks[index] = { ...newLinks[index], ...updates };
          return {
            content: {
              ...state.content,
              footer: {
                ...state.content.footer,
                [section]: newLinks
              }
            },
            isDirty: true
          };
        }),
      moveNavbarLink: (index: number, direction: "up" | "down") =>
        set((state) => {
          const newLinks = [...state.content.navbar.links];
          if (direction === "up" && index > 0) {
            [newLinks[index - 1], newLinks[index]] = [newLinks[index], newLinks[index - 1]];
          } else if (direction === "down" && index < newLinks.length - 1) {
            [newLinks[index + 1], newLinks[index]] = [newLinks[index], newLinks[index + 1]];
          }
          return {
            content: {
              ...state.content,
              navbar: {
                ...state.content.navbar,
                links: newLinks
              }
            },
            isDirty: true
          };
        }),
      moveFooterLink: (section: "companyLinks" | "coreSystemsLinks", index: number, direction: "up" | "down") =>
        set((state) => {
          const newLinks = [...state.content.footer[section]];
          if (direction === "up" && index > 0) {
            [newLinks[index - 1], newLinks[index]] = [newLinks[index], newLinks[index - 1]];
          } else if (direction === "down" && index < newLinks.length - 1) {
            [newLinks[index + 1], newLinks[index]] = [newLinks[index], newLinks[index + 1]];
          }
          return {
            content: {
              ...state.content,
              footer: {
                ...state.content.footer,
                [section]: newLinks
              }
            },
            isDirty: true
          };
        }),
      updateMegaMenuSubLink: (
        megaMenuKey: string,
        categoryIndex: number,
        subLinkIndex: number,
        updates: Partial<{ label: string; href: string }>
      ) =>
        set((state) => {
          const megaMenuData = state.content.navbar.megaMenuData;

          if (!megaMenuData || !megaMenuData[megaMenuKey]) {
            return state;
          }

          const newMegaMenuData = { ...megaMenuData };

          const categories =
            newMegaMenuData[megaMenuKey].categories;

          if (!categories) {
            return state;
          }

          const category = {
            ...categories[categoryIndex],
          };

          const subLinks = [...category.subLinks];

          subLinks[subLinkIndex] = {
            ...subLinks[subLinkIndex],
            ...updates,
          };

          category.subLinks = subLinks;

          categories[categoryIndex] = category;

          return {
            content: {
              ...state.content,
              navbar: {
                ...state.content.navbar,
                megaMenuData: newMegaMenuData,
              },
            },
            isDirty: true,
          };
        }),

      moveMegaMenuSubLink: (
        megaMenuKey: string,
        categoryIndex: number,
        subLinkIndex: number,
        direction: "up" | "down"
      ) =>
        set((state) => {
          const megaMenuData = state.content.navbar.megaMenuData;

          if (!megaMenuData || !megaMenuData[megaMenuKey]) {
            return state;
          }

          const newMegaMenuData = { ...megaMenuData };

          const categories =
            newMegaMenuData[megaMenuKey].categories;

          if (!categories) {
            return state;
          }

          const category = {
            ...categories[categoryIndex],
          };

          const subLinks = [...category.subLinks];

          if (direction === "up" && subLinkIndex > 0) {
            [subLinks[subLinkIndex - 1], subLinks[subLinkIndex]] = [
              subLinks[subLinkIndex],
              subLinks[subLinkIndex - 1],
            ];
          } else if (
            direction === "down" &&
            subLinkIndex < subLinks.length - 1
          ) {
            [subLinks[subLinkIndex + 1], subLinks[subLinkIndex]] = [
              subLinks[subLinkIndex],
              subLinks[subLinkIndex + 1],
            ];
          }

          category.subLinks = subLinks;

          categories[categoryIndex] = category;

          return {
            content: {
              ...state.content,
              navbar: {
                ...state.content.navbar,
                megaMenuData: newMegaMenuData,
              },
            },
            isDirty: true,
          };
        }),
        addServiceOverviewItem: () =>
        set((state) => {
          const currentItems = state.content.services?.overview?.items || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              title: "New Service",
              description: "Describe this service offering...",
              icon: "automation",
              linkText: "Learn More",
            },
          ];
          return {
            content: {
              ...state.content,
              services: {
                ...state.content.services,
                overview: {
                  ...state.content.services.overview,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),

      deleteServiceOverviewItem: (id: string) =>
        set((state) => {
          const currentItems = state.content.services?.overview?.items || [];
          const newItems = currentItems.filter((item) => item.id !== id);
          return {
            content: {
              ...state.content,
              services: {
                ...state.content.services,
                overview: {
                  ...state.content.services.overview,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),

      // Approach Items
      addApproachItem: () =>
        set((state) => {
          const currentItems = state.content.services?.approach?.items || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              title: "New Approach Pillar",
              description: "Describe this approach...",
              icon: "🔍",
            },
          ];
          return {
            content: {
              ...state.content,
              services: {
                ...state.content.services,
                approach: {
                  ...state.content.services.approach,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),

      deleteApproachItem: (id: string) =>
        set((state) => {
          const currentItems = state.content.services?.approach?.items || [];
          const newItems = currentItems.filter((item) => item.id !== id);
          return {
            content: {
              ...state.content,
              services: {
                ...state.content.services,
                approach: {
                  ...state.content.services.approach,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),

      // Benefit Items
      addBenefitItem: () =>
        set((state) => {
          const currentItems = state.content.services?.benefits?.items || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              title: "New Benefit",
              description: "Describe this benefit...",
              icon: "🚀",
            },
          ];
          return {
            content: {
              ...state.content,
              services: {
                ...state.content.services,
                benefits: {
                  ...state.content.services.benefits,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),

      deleteBenefitItem: (id: string) =>
        set((state) => {
          const currentItems = state.content.services?.benefits?.items || [];
          const newItems = currentItems.filter((item) => item.id !== id);
          return {
            content: {
              ...state.content,
              services: {
                ...state.content.services,
                benefits: {
                  ...state.content.services.benefits,
                  items: newItems,
                },
              },
            },
            isDirty: true,
          };
        }),

      // Process Steps
      addProcessStep: () =>
        set((state) => {
          const currentSteps = state.content.services?.process?.steps || [];
          const newSteps = [
            ...currentSteps,
            {
              id: Date.now().toString(),
              title: "New Step",
              description: "Describe this process step...",
              icon: "📋",
            },
          ];
          return {
            content: {
              ...state.content,
              services: {
                ...state.content.services,
                process: {
                  ...state.content.services.process,
                  steps: newSteps,
                },
              },
            },
            isDirty: true,
          };
        }),

      deleteProcessStep: (id: string) =>
        set((state) => {
          const currentSteps = state.content.services?.process?.steps || [];
          const newSteps = currentSteps.filter((step) => step.id !== id);
          return {
            content: {
              ...state.content,
              services: {
                ...state.content.services,
                process: {
                  ...state.content.services.process,
                  steps: newSteps,
                },
              },
            },
            isDirty: true,
          };
        }),
        addProductOverviewItem: () =>
  set((state) => {
    const currentItems = state.content.products?.overview?.items || [];
    const newItems = [
      ...currentItems,
      {
        id: Date.now().toString(),
        title: "New Product",
        description: "Describe this product...",
        icon: "cliqtest",
        linkText: "Learn More",
      },
    ];
    return {
      content: {
        ...state.content,
        products: {
          ...state.content.products,
          overview: {
            ...state.content.products.overview,
            items: newItems,
          },
        },
      },
      isDirty: true,
    };
  }),

deleteProductOverviewItem: (id: string) =>
  set((state) => {
    const currentItems = state.content.products?.overview?.items || [];
    const newItems = currentItems.filter((item) => item.id !== id);
    return {
      content: {
        ...state.content,
        products: {
          ...state.content.products,
          overview: {
            ...state.content.products.overview,
            items: newItems,
          },
        },
      },
      isDirty: true,
    };
  }),

addProductBenefitItem: () =>
  set((state) => {
    const currentItems = state.content.products?.benefits?.items || [];
    const newItems = [
      ...currentItems,
      {
        id: Date.now().toString(),
        title: "New Benefit",
        description: "Describe this benefit...",
        icon: "🚀",
      },
    ];
    return {
      content: {
        ...state.content,
        products: {
          ...state.content.products,
          benefits: {
            ...state.content.products.benefits,
            items: newItems,
          },
        },
      },
      isDirty: true,
    };
  }),

deleteProductBenefitItem: (id: string) =>
  set((state) => {
    const currentItems = state.content.products?.benefits?.items || [];
    const newItems = currentItems.filter((item) => item.id !== id);
    return {
      content: {
        ...state.content,
        products: {
          ...state.content.products,
          benefits: {
            ...state.content.products.benefits,
            items: newItems,
          },
        },
      },
      isDirty: true,
    };
  }),

addProductCategoryItem: () =>
  set((state) => {
    const currentItems = state.content.products?.categories?.items || [];
    const newItems = [
      ...currentItems,
      {
        id: Date.now().toString(),
        title: "New Category",
        description: "Describe this product category...",
        icon: "📦",
        products: ["Product 1", "Product 2"],
      },
    ];
    return {
      content: {
        ...state.content,
        products: {
          ...state.content.products,
          categories: {
            ...state.content.products.categories,
            items: newItems,
          },
        },
      },
      isDirty: true,
    };
  }),

deleteProductCategoryItem: (id: string) =>
  set((state) => {
    const currentItems = state.content.products?.categories?.items || [];
    const newItems = currentItems.filter((item) => item.id !== id);
    return {
      content: {
        ...state.content,
        products: {
          ...state.content.products,
          categories: {
            ...state.content.products.categories,
            items: newItems,
          },
        },
      },
      isDirty: true,
    };
  }),
      toggleSectionVisibility: (sectionId: string) =>
        set((state) => {
          const currentVisibilities = state.content.sectionVisibilities || {};
          const isCurrentlyVisible = currentVisibilities[sectionId] !== false; // default true
          return {
            content: {
              ...state.content,
              sectionVisibilities: {
                ...currentVisibilities,
                [sectionId]: !isCurrentlyVisible
              }
            },
            isDirty: true
          };
        }),
    }),
    {
      name: "admin-content",
      version: 10,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
migrate: (persistedState: any, version: number) => {
  // Migration for version <= 3
  if (version <= 3) {
    return {
      ...persistedState,
      content: {
        ...persistedState.content,
        navbar: {
          ...persistedState.content.navbar,
          megaMenuData: defaultContent.navbar.megaMenuData,
        },
        footer: defaultContent.footer,
      },
    };
  }

  // Migration for version <= 4
  if (version <= 4) {
    return {
      ...persistedState,
      content: {
        ...persistedState.content,
        contact: defaultContent.contact,
      },
    };
  }

  // Migration for version <= 5 (add href to Services and Products)
  if (version <= 5) {
    const content = persistedState.content;
    if (content?.navbar?.megaMenuData?.["What we do"]?.categories) {
      const categories = content.navbar.megaMenuData["What we do"].categories;
      
      // Add href to Services
      const servicesCat = categories.find((c: any) => c.id === "services");
      if (servicesCat && !servicesCat.href) {
        servicesCat.href = "/services";
      }
      
      // Add href to Products (if not already)
      const productsCat = categories.find((c: any) => c.id === "products");
      if (productsCat && !productsCat.href) {
        productsCat.href = "/products";
      }
    }
    return {
      ...persistedState,
      content,
    };
  }

  // Migration for version <= 6 (convert emoji icons to Lucide keys)
  if (version <= 6) {
    const content = persistedState.content; // ← define content here

    // 1. Convert approach items
    const approachItems = content?.services?.approach?.items;
    if (Array.isArray(approachItems)) {
      const emojiToKey: Record<string, string> = {
        "🔍": "discovery",
        "🏗️": "architecture",
        "🔄": "agile",
        "✅": "quality",
      };
      approachItems.forEach((item: any) => {
        if (item.icon && emojiToKey[item.icon]) {
          item.icon = emojiToKey[item.icon];
        }
      });
    }

    // 2. Convert benefits items
    const benefitItems = content?.services?.benefits?.items;
    if (Array.isArray(benefitItems)) {
      const emojiToKey: Record<string, string> = {
        "⚡": "speed",
        "🎯": "quality",
        "💰": "cost",
        "🛡️": "security",
        "📈": "scale",
        "🚀": "innovation",
      };
      benefitItems.forEach((item: any) => {
        if (item.icon && emojiToKey[item.icon]) {
          item.icon = emojiToKey[item.icon];
        }
      });
    }

    return {
      ...persistedState,
      content,
    };
  }
  if (version <= 7) {
  const content = persistedState.content;
  
  // 1. Convert approach items
  const approachItems = content?.services?.approach?.items;
  if (Array.isArray(approachItems)) {
    const emojiToKey: Record<string, string> = {
      "🔍": "discovery",
      "🏗️": "architecture",
      "🔄": "agile",
      "✅": "quality",
    };
    approachItems.forEach((item: any) => {
      if (item.icon && emojiToKey[item.icon]) {
        item.icon = emojiToKey[item.icon];
      }
    });
  }

  // 2. Convert benefits items
  const benefitItems = content?.services?.benefits?.items;
  if (Array.isArray(benefitItems)) {
    const emojiToKey: Record<string, string> = {
      "⚡": "speed",
      "🎯": "quality",
      "💰": "cost",
      "🛡️": "security",
      "📈": "scale",
      "🚀": "innovation",
    };
    benefitItems.forEach((item: any) => {
      if (item.icon && emojiToKey[item.icon]) {
        item.icon = emojiToKey[item.icon];
      }
    });
  }

  // 3. Ensure Services and Products have href (if not already)
  if (content?.navbar?.megaMenuData?.["What we do"]?.categories) {
    const categories = content.navbar.megaMenuData["What we do"].categories;
    const servicesCat = categories.find((c: any) => c.id === "services");
    if (servicesCat && !servicesCat.href) {
      servicesCat.href = "/services";
    }
    const productsCat = categories.find((c: any) => c.id === "products");
    if (productsCat && !productsCat.href) {
      productsCat.href = "/products";
    }
  }

  return {
    ...persistedState,
    content,
  };
}
if (version <= 8) {
  const content = persistedState.content;
  
  // Convert product benefits items
  const productBenefitItems = content?.products?.benefits?.items;
  if (Array.isArray(productBenefitItems)) {
    const emojiToKey: Record<string, string> = {
      "🛡️": "security",
      "🔗": "integration",
      "🤖": "ai",
      "📈": "scale",
      "📊": "insights",
      "🌍": "support",
    };
    productBenefitItems.forEach((item: any) => {
      if (item.icon && emojiToKey[item.icon]) {
        item.icon = emojiToKey[item.icon];
      }
    });
  }
  
  // Convert product categories items
  const productCategoryItems = content?.products?.categories?.items;
  if (Array.isArray(productCategoryItems)) {
    const emojiToKey: Record<string, string> = {
      "🤖": "ai",
      "✅": "scale",
      "📊": "insights",
      "🛡️": "security",
      "📈": "ai",
      "📱": "support",
    };
    productCategoryItems.forEach((item: any) => {
      if (item.icon && emojiToKey[item.icon]) {
        item.icon = emojiToKey[item.icon];
      }
    });
  }
  
  return {
    ...persistedState,
    content,
  };
}
// ─── version <= 9: ensure product benefits and categories exist ───
if (version <= 9) {
  const content = persistedState.content;

  // Ensure products.benefits.items exists and is not empty
  if (!content.products) content.products = {};
  if (!content.products.benefits) content.products.benefits = {};
  if (!Array.isArray(content.products.benefits.items) || content.products.benefits.items.length === 0) {
    content.products.benefits.items = defaultContent.products.benefits.items;
  }

  // Ensure products.categories.items exists and is not empty
  if (!content.products.categories) content.products.categories = {};
  if (!Array.isArray(content.products.categories.items) || content.products.categories.items.length === 0) {
    content.products.categories.items = defaultContent.products.categories.items;
  }

  return {
    ...persistedState,
    content,
  };
}

  // No migration needed for current version
  return persistedState;
}
    },
  ),
);

// ─── Color Theme ─────────────────────────────────────────────────────────────

export interface ColorTheme {
  primaryRed: string;
  primaryDark: string;
  primaryHover: string;
  background: string;
  foreground: string;
  surface: string;
  border: string;
  borderRadius: string;
  shadowIntensity: string;
  fontFamily: string;
}

const defaultTheme: ColorTheme = {
  primaryRed: "#B40001",
  primaryDark: "#7A0000",
  primaryHover: "#D10000",
  background: "#121212",
  foreground: "#FAFAFA",
  surface: "#1F1F1F",
  border: "#3A3A3A",
  borderRadius: "6",
  shadowIntensity: "medium",
  fontFamily: "default",
};

interface ThemeState {
  theme: ColorTheme;
  activePreset: string;
  updateColor: (key: keyof ColorTheme, value: string) => void;
  applyPreset: (preset: string) => void;
  resetTheme: () => void;
}

export const themePresets: Record<string, ColorTheme> = {
  default: defaultTheme,
  ocean: {
    ...defaultTheme,
    primaryRed: "#0066CC",
    primaryDark: "#004499",
    primaryHover: "#0088FF",
  },
  emerald: {
    ...defaultTheme,
    primaryRed: "#059669",
    primaryDark: "#047857",
    primaryHover: "#10B981",
  },
  violet: {
    ...defaultTheme,
    primaryRed: "#7C3AED",
    primaryDark: "#5B21B6",
    primaryHover: "#8B5CF6",
  },
  amber: {
    ...defaultTheme,
    primaryRed: "#D97706",
    primaryDark: "#B45309",
    primaryHover: "#F59E0B",
  },
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: defaultTheme,
      activePreset: "default",
      updateColor: (key, value) =>
        set((state) => ({
          theme: { ...state.theme, [key]: value },
          activePreset: "custom",
        })),
      applyPreset: (preset) =>
        set({
          theme: themePresets[preset] || defaultTheme,
          activePreset: preset,
        }),
      resetTheme: () => set({ theme: defaultTheme, activePreset: "default" }),
    }),
    { name: "admin-theme" },
  ),
);

// ─── Blog CMS ─────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tag: string;
  author: string;
  date: string;
  readTime: string;
  published: boolean;
  coverImage?: string;
}

const defaultBlogs: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI-Powered Quality Engineering",
    slug: "future-ai-quality-engineering",
    excerpt:
      "Discover how artificial intelligence is fundamentally reshaping software quality assurance, from test generation to intelligent defect prediction.",
    content:
      "Artificial intelligence is transforming every aspect of software development, and quality engineering is no exception...",
    tag: "AI & Automation",
    author: "ApMoSys Editorial",
    date: "2025-05-15",
    readTime: "8 min read",
    published: true,
  },
  {
    id: "2",
    title: "Performance Engineering at Scale: Lessons from the Trenches",
    slug: "performance-engineering-at-scale",
    excerpt:
      "Real-world insights from engineering teams who've survived massive traffic spikes and lived to tell the tale.",
    content:
      "When your platform serves millions of concurrent users, every millisecond counts...",
    tag: "Performance",
    author: "ApMoSys Editorial",
    date: "2025-05-01",
    readTime: "6 min read",
    published: true,
  },
  {
    id: "3",
    title: "Zero-Trust Security in CI/CD Pipelines",
    slug: "zero-trust-security-cicd",
    excerpt:
      "How to implement zero-trust security principles across your continuous integration and deployment workflows.",
    content:
      "Security can no longer be an afterthought in modern software delivery pipelines...",
    tag: "Security",
    author: "ApMoSys Editorial",
    date: "2025-04-18",
    readTime: "10 min read",
    published: false,
  },
];

interface BlogState {
  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, "id">) => void;
  updateBlog: (id: string, updates: Partial<BlogPost>) => void;
  deleteBlog: (id: string) => void;
  togglePublish: (id: string) => void;
}

export const useBlogStore = create<BlogState>()(
  persist(
    (set) => ({
      blogs: defaultBlogs,
      addBlog: (blog) =>
        set((state) => ({
          blogs: [...state.blogs, { ...blog, id: Date.now().toString() }],
        })),
      updateBlog: (id, updates) =>
        set((state) => ({
          blogs: state.blogs.map((b) =>
            b.id === id ? { ...b, ...updates } : b,
          ),
        })),
      deleteBlog: (id) =>
        set((state) => ({
          blogs: state.blogs.filter((b) => b.id !== id),
        })),
      togglePublish: (id) =>
        set((state) => ({
          blogs: state.blogs.map((b) =>
            b.id === id ? { ...b, published: !b.published } : b,
          ),
        })),
    }),
    { name: "admin-blogs" },
  ),
);

// ─── Toast ────────────────────────────────────────────────────────────────────

export interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

interface ToastState {
  toasts: Toast[];
  addToast: (message: string, type?: Toast["type"]) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (message, type = "success") => {
    const id = Date.now().toString();
    set((state) => ({ toasts: [...state.toasts, { id, message, type }] }));
    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) }));
    }, 4000);
  },
  removeToast: (id) =>
    set((state) => ({ toasts: state.toasts.filter((t) => t.id !== id) })),
}));


// ─── UI Store ─────────────────────────────────────────────────────────────────
interface UIState {
  deviceMode: "desktop" | "mobile";
  setDeviceMode: (mode: "desktop" | "mobile") => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleSidebar: () => void;
}

export const useAdminUIStore = create<UIState>((set) => ({
  deviceMode: "desktop",
  setDeviceMode: (mode) => set({ deviceMode: mode }),
  sidebarCollapsed: true,
  setSidebarCollapsed: (collapsed) => set({ sidebarCollapsed: collapsed }),
  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
}));
