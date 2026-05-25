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
        if (password === "123456789") {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false }),
    }),
    { name: "admin-auth" }
  )
);

// ─── Site Content ────────────────────────────────────────────────────────────

export interface CareerItem {
  id: string;
  title: string;
  description: string;
  icon: string;
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

export interface SiteContent {
  navbar: {
    logo: string;
    ctaLabel: string;
    ctaHref: string;
    links: { label: string; href: string }[];
  };
  footer: {
    tagline: string;
    companyLinks: { label: string; href: string }[];
    coreSystemsLinks: { label: string; href: string }[];
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
}

const defaultContent: SiteContent = {
  navbar: {
    logo: "ApMoSys",
    ctaLabel: "Contact Us",
    ctaHref: "/contact",
    links: [
      { label: "About Us", href: "/#about" },
      { label: "Services", href: "/#services" },
      { label: "Solutions", href: "/#solutions" },
      { label: "Products", href: "/#products" },
      { label: "Industries", href: "/industries" },
      { label: "Blogs", href: "/blogs" },
      { label: "Careers", href: "/careers" },
    ],
  },
  footer: {
    tagline:
      "Global leaders in automated quality engineering, security validation, and intelligent digital systems optimization.",
    companyLinks: [
      { label: "About Us", href: "/#about" },
      { label: "Careers", href: "/careers" },
      { label: "Blogs & News", href: "/#blogs" },
      { label: "Press Releases", href: "/#press" },
    ],
    coreSystemsLinks: [
      { label: "cliQTest Platform", href: "#" },
      { label: "Netraa AI Vision", href: "#" },
      { label: "Performance Tuning", href: "#" },
      { label: "Continuous QA", href: "#" },
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
        description: "Banking, Financial Services, and Insurance. We ensure maximum security, fraud detection, and high-performance trading platform stability.",
        linkText: "EXPLORE FINANCIAL SOLUTIONS",
        icon: "bank",
      },
      {
        id: "2",
        title: "Retail & E-commerce",
        description: "Delivering seamless shopping experiences with zero downtime during peak seasonal traffic and flash sales.",
        linkText: "EXPLORE RETAIL SOLUTIONS",
        icon: "cart",
      },
      {
        id: "3",
        title: "Manufacturing",
        description: "IoT integration and advanced predictive analytics for automated assembly lines and supply chain optimization.",
        linkText: "EXPLORE MANUFACTURING SOLUTIONS",
        icon: "wrench",
      },
      {
        id: "4",
        title: "Healthcare & Life Sciences",
        description: "HIPAA-compliant software testing and robust quality assurance for mission-critical medical devices and patient data systems.",
        linkText: "EXPLORE HEALTHCARE SOLUTIONS",
        icon: "heart",
      },
    ],
    complexItems: [
      {
        id: "1",
        title: "Legacy Migration",
        description: "Seamlessly transition from monolithic to microservices with zero operational downtime.",
      },
      {
        id: "2",
        title: "Core Silos",
        description: "Intelligently connect and standardize data architectures across fragmented global systems.",
      },
      {
        id: "3",
        title: "Real-time Observability",
        description: "Full stack monitoring to proactively identify and resolve bottlenecks before they impact users.",
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
          description: "Comprehensive medical, dental, and vision coverage for you and your dependents.",
          icon: "heart",
        },
        {
          id: "2",
          title: "Learning Credits",
          description: "Annual budget for courses, certifications, conferences, and continuous education.",
          icon: "book",
        },
        {
          id: "3",
          title: "Work Flexibility",
          description: "Hybrid and remote-friendly structures so you can work where you are most productive.",
          icon: "globe",
        },
        {
          id: "4",
          title: "Pro Equipment",
          description: "Top-tier Mac or PC setup, plus a home office stipend to build your ideal workspace.",
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
          description: "We adapt quickly to the ever-evolving tech landscape, ensuring our solutions always remain competitive.",
          icon: "bolt",
        },
        {
          id: "2",
          title: "Intelligent Automation",
          description: "AI is deeply embedded in everything we build. We strive to automate the mundane and focus on creativity.",
          icon: "shield",
        },
      ],
    },
    faqItems: [
      {
        id: "1",
        question: "What does the initial tech stack look like?",
        answer: "Our core platform leverages React/Next.js on the frontend, with Node.js/Go backend microservices running on Kubernetes. We use Playwright and Selenium extensively for our automation pipelines.",
      },
      {
        id: "2",
        question: "Do you offer remote work options?",
        answer: "Yes, we operate on a hybrid and remote-friendly model. While certain highly collaborative architectural sessions benefit from in-office presence, daily execution is flexible based on your team's structure.",
      },
      {
        id: "3",
        question: "How long does the onboarding process take?",
        answer: "Our standard engineering onboarding spans 4 weeks. This includes deep dives into our CI/CD pipelines, security protocols, and shadowing a senior architect on an active enterprise deployment.",
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
        address: "Office No. C315, 3rd Floor, Apeejay House, 39/12, Haddows Road, Nungambakkam, Chennai – 600 006",
        image: "/Contact Us/mumbai_hq.png",
        link: "https://www.google.com/maps/place/Apeejay+Business+Centre/@13.0631753,80.2453564,17z/data=!3m2!4b1!5s0x3a52666945ca8d3d:0xdd03801419888d34!4m6!3m5!1s0x3a526669439ac537:0x2e28741298f598ea!8m2!3d13.0631753!4d80.2479313!16s%2Fg%2F1tjtgpsz?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        id: "2",
        city: "Bhubaneswar",
        address: "ApMoSys Technologies Pvt. Ltd., Fortune Towers, 4th Floor, A Zone, Nandankanan Road, Chandrasekharpur, Bhubaneswar – 751023, Odisha",
        image: "/Contact Us/dubai_office.png",
        link: "https://www.google.com/maps/place/ApMoSys+Technologies+Pvt+Ltd/@20.3094975,85.8169395,17z/data=!3m1!4b1!4m6!3m5!1s0x3a1909005ebd71a1:0xf02ca3f5e8cf8ad5!8m2!3d20.3094975!4d85.8195144!16s%2Fg%2F11xt2cgl14?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        id: "3",
        city: "United Arab Emirates",
        address: "ApMoSys Technology FZ-LLC, B05-716A Business Center 04, RAKEZ Business Zone – FZ RAK, UAE. PO BOX 10055",
        image: "/Contact Us/ontario_office.png",
        link: "https://www.google.com/maps/search/ApMoSys+Technology+FZ-LLC,+B05-716A+Business+Center+04,+RAKEZ+Business+Zone+-FZ+RAK,+United+Arab+Emirates.+PO+BOX+10055./@25.452999,55.3465905,9z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
    faqItems: [
      {
        id: "1",
        question: "What are your application performance monitoring capabilities?",
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
  addCareerFAQItem: () => void;
  deleteCareerFAQItem: (id: string) => void;
  addCareerJob: () => void;
  deleteCareerJob: (id: string) => void;
  addContactOffice: () => void;
  deleteContactOffice: (id: string) => void;
  addContactFAQItem: () => void;
  deleteContactFAQItem: (id: string) => void;
}

// Utility: nested path setter
function setNestedValue(obj: Record<string, unknown>, path: string, value: string): Record<string, unknown> {
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
            value
          ) as unknown as SiteContent,
          isDirty: true,
        })),
      resetContent: () =>
        set({ content: defaultContent, isDirty: false }),
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
              description: "Describe the industry focus and the automated services we provide here.",
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
              description: "Details about legacy hurdles, bottlenecks, and the technical solutions.",
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
      addCareerFAQItem: () =>
        set((state) => {
          const currentItems = state.content.careers.faqItems || [];
          const newItems = [
            ...currentItems,
            {
              id: Date.now().toString(),
              question: "New FAQ Question?",
              answer: "Provide the detailed answer to the frequently asked question here.",
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
              address: "ApMoSys Technologies, Sector-11, Mahape, Navi Mumbai - 400710",
              image: "/Contact Us/mumbai_hq.png",
              link: "https://maps.google.com",
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
          const newOffices = currentOffices.filter((office) => office.id !== id);
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
    }),
    { name: "admin-content" }
  )
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
  rose: {
    ...defaultTheme,
    primaryRed: "#E11D48",
    primaryDark: "#BE123C",
    primaryHover: "#F43F5E",
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
      resetTheme: () =>
        set({ theme: defaultTheme, activePreset: "default" }),
    }),
    { name: "admin-theme" }
  )
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
          blogs: [
            ...state.blogs,
            { ...blog, id: Date.now().toString() },
          ],
        })),
      updateBlog: (id, updates) =>
        set((state) => ({
          blogs: state.blogs.map((b) =>
            b.id === id ? { ...b, ...updates } : b
          ),
        })),
      deleteBlog: (id) =>
        set((state) => ({
          blogs: state.blogs.filter((b) => b.id !== id),
        })),
      togglePublish: (id) =>
        set((state) => ({
          blogs: state.blogs.map((b) =>
            b.id === id ? { ...b, published: !b.published } : b
          ),
        })),
    }),
    { name: "admin-blogs" }
  )
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
