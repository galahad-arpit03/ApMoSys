import type { Metadata } from "next";
import { Outfit, Manrope, Inter } from "next/font/google";
import "@/app/globals.css";
import ConditionalShell from "@/src/components/ConditionalShell";

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
      className={`${outfit.variable} ${manrope.variable} ${inter.variable} h-full antialiased`}
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
