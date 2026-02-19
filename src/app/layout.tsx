import type { Metadata } from "next";
import { Instrument_Sans, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
