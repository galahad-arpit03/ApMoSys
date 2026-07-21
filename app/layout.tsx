import type { Metadata } from "next";
import { Outfit, Manrope, Inter } from "next/font/google";
import "@/app/globals.css";
import ConditionalShell from "@/src/components/ConditionalShell";
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
  title: "ApMoSys | Enterprise Automation & Testing Solutions",
  description: "Accelerating digital transformation with AI-powered quality assurance and visual analytics.",
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
      <body className="min-h-full flex flex-col bg-[#121212] text-[#FAFAFA] font-sans selection:bg-[#242A56] selection:text-white" suppressHydrationWarning>
        <ConditionalShell>
          {children}
        </ConditionalShell>
      </body>
    </html>
  );
}
