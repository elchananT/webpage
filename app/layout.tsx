import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "rcbcarpentry",
  description: "Remodeling, Decking, siding, interior and exterior finish,🥇Experienced Pro 🏡Residential ",
    icons: "/logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
      <div className="relative flex h-auto min-h-screen w-screen flex-col bg-slate-50 group/design-root overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
      </div>
      </body>
    </html>
  );
}
