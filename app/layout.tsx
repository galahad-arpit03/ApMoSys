import type { Metadata } from "next";
import { Outfit, Manrope, Inter } from "next/font/google";
import "@/app/globals.css";
import ConditionalShell from "@/src/components/ConditionalShell";
import SmoothScroll from "@/src/components/SmoothScroll";
import { Geist, Geist_Mono } from "next/font/google";


const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Geist Mono - Optional for code/monospace
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apmosys.com"),
  title: {
    default: "ApMoSys | Enterprise Digital Engineering & Automation",
    template: "%s | ApMoSys",
  },
  description: "Accelerating enterprise digital transformation with AI-powered quality engineering, intelligent automation, and robust software reliability.",
  keywords: ["Software Reliability", "Quality Engineering", "Test Automation", "AI Testing", "Digital Transformation", "ApMoSys"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apmosys.com",
    title: "ApMoSys | Enterprise Digital Engineering & Automation",
    description: "Accelerating enterprise digital transformation with AI-powered quality engineering and robust software reliability.",
    siteName: "ApMoSys",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ApMoSys - Enterprise Automation & Testing Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ApMoSys | Enterprise Digital Engineering & Automation",
    description: "Accelerating enterprise digital transformation with AI-powered quality engineering.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "ApMoSys",
  "url": "https://apmosys.com",
  "logo": "https://apmosys.com/logo.png",
  "description": "Accelerating enterprise digital transformation with AI-powered quality engineering, intelligent automation, and robust software reliability.",
  "sameAs": [
    "https://www.linkedin.com/company/apmosys-technologies-pvt-ltd/"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${manrope.variable} ${inter.variable} ${geist.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#121212] text-[#FAFAFA] font-sans selection:bg-[#242A56] selection:text-white" suppressHydrationWarning>
        <SmoothScroll>
          <ConditionalShell>
            {children}
          </ConditionalShell>
        </SmoothScroll>
      </body>
    </html>
  );
}
