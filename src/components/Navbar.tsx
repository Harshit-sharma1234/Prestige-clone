"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import CountryDropdown from "./CountryDropdown";

const navLinks = [
    { label: "NEW ARRIVALS", href: "/collections/new-arrivals" },
    { label: "WOMEN", href: "/collections/women" },
    { label: "MEN", href: "/collections/men" },
    { label: "BAGS", href: "/collections/bags" },
    { label: "ACCESSORIES", href: "/collections/accessories" },
    { label: "SALE", href: "/collections/sale" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    return (
        <nav
            className={`relative w-full transition-all duration-500 ${isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="flex items-center justify-between px-[20px] md:px-[48px] py-[16px]">
                {/* Left: Hamburger (Mobile) + Nav Links (Desktop) */}
                <div className="flex items-center gap-8">
                    {/* Hamburger Menu - Mobile Only */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col justify-center gap-[5px] w-[20px] h-[20px]"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block h-[1.5px] w-full transition-all duration-300 ${isScrolled ? "bg-[#1c1c1c]" : "bg-white"
                                } ${isMobileMenuOpen
                                    ? "rotate-45 translate-y-[6.5px]"
                                    : ""
                                }`}
                        />
                        <span
                            className={`block h-[1.5px] w-full transition-all duration-300 ${isScrolled ? "bg-[#1c1c1c]" : "bg-white"
                                } ${isMobileMenuOpen ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block h-[1.5px] w-full transition-all duration-300 ${isScrolled ? "bg-[#1c1c1c]" : "bg-white"
                                } ${isMobileMenuOpen
                                    ? "-rotate-45 -translate-y-[6.5px]"
                                    : ""
                                }`}
                        />
                    </button>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-opacity hover:opacity-60 ${isScrolled ? "text-[#1c1c1c]" : "text-white"
                                    } ${link.label === "SALE"
                                        ? "text-red-500"
                                        : ""
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Center: Logo */}
                <Link
                    href="/"
                    className="absolute left-1/2 -translate-x-1/2"
                >
                    <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={120}
                        height={36}
                        className={`transition-all duration-300 ${isScrolled ? "" : "brightness-0 invert"
                            }`}
                        priority
                    />
                </Link>

                {/* Right: Icons */}
                <div
                    className={`flex items-center gap-4 md:gap-6 ${isScrolled ? "text-[#1c1c1c]" : "text-white"
                        }`}
                >
                    {/* Country Dropdown - Desktop */}
                    <div className="hidden md:block">
                        <CountryDropdown />
                    </div>

                    {/* Search Icon */}
                    <button
                        onClick={() => setIsSearchOpen(!isSearchOpen)}
                        className="hover:opacity-60 transition-opacity"
                        aria-label="Search"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <circle cx="11" cy="11" r="8" />
                            <path d="m21 21-4.35-4.35" />
                        </svg>
                    </button>

                    {/* Account Icon */}
                    <Link
                        href="/account"
                        className="hover:opacity-60 transition-opacity"
                        aria-label="Account"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                    </Link>

                    {/* Cart Icon */}
                    <Link
                        href="/cart"
                        className="relative hover:opacity-60 transition-opacity"
                        aria-label="Cart"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" x2="21" y1="6" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1c1c1c] text-[9px] font-bold text-white">
                            0
                        </span>
                    </Link>
                </div>
            </div>

            {/* Search Bar */}
            <div
                className={`overflow-hidden transition-all duration-500 ${isSearchOpen ? "max-h-[80px] opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <div className="px-[20px] md:px-[48px] pb-4">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className={`w-full border-b py-3 text-[13px] tracking-[0.05em] outline-none bg-transparent placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-[11px] ${isScrolled
                                ? "border-[#1c1c1c]/20 text-[#1c1c1c] placeholder:text-[#1c1c1c]/40"
                                : "border-white/30 text-white placeholder:text-white/50"
                                }`}
                        />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 top-[112px] bg-white z-40 transition-all duration-500 ${isMobileMenuOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-full pointer-events-none"
                    }`}
            >
                <div className="flex flex-col px-[20px] py-[32px]">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`py-4 text-[13px] font-bold tracking-[0.2em] uppercase text-[#1c1c1c] border-b border-black/5 transition-all duration-300 hover:pl-2 ${link.label === "SALE"
                                ? "text-red-500"
                                : ""
                                }`}
                            style={{
                                transitionDelay: `${i * 50}ms`,
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* Mobile Country Selector */}
                    <div className="mt-8 pt-4 border-t border-black/10">
                        <CountryDropdown />
                    </div>
                </div>
            </div>
        </nav>
    );
}
