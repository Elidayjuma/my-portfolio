import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eliutherius Juma | Software Engineer",
  description: "I build scalable digital products, lead teams, and love solving real-world problems with code and creativity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Header />
        {children}
        <Script defer data-domain="portfolio.elidayjuma.com" src="https://analytics.elidayjuma.com/js/script.outbound-links.js" />
        <Footer />
      </body>
    </html>
  );
}
