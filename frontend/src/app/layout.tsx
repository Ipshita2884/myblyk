import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyBlyk AI Glasses | AI-Powered Assistive Technology",
  description: "Discover MyBlyk AI Glasses, AI-powered assistive technology being developed to help visually impaired and blind users understand their surroundings, access information and experience greater independence.",
};

import ScrollToTop from "@/components/layout/ScrollToTop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
