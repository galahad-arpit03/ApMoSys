import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import ConditionalShell from "@/src/components/ConditionalShell";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
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
      className={`${outfit.variable} ${plusJakarta.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#121212] text-[#FAFAFA] font-sans selection:bg-primary-red selection:text-[#FFFFFF]" suppressHydrationWarning>
        <ConditionalShell>
          {children}
        </ConditionalShell>
      </body>
    </html>
  );
}
