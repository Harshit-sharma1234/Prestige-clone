import type { Metadata } from "next";
import { Instrument_Sans, Nunito } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-COM | Modern E-commerce Website",
  description: "A premium e-commerce platform built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${nunito.variable} antialiased font-sans`}
      >
        <header className="fixed top-0 left-0 right-0 z-50">
          <AnnouncementBar />
          <Navbar />
        </header>
        {/* Spacer for fixed header */}
        <div className="h-[96px]" />
        {children}
      </body>
    </html>
  );
}
