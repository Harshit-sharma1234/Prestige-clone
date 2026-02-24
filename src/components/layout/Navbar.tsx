"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import CountryDropdown from "./CountryDropdown";
import MegaMenuPanel from "./MegaMenuPanel";
import { AccountIcon, SearchIcon, CartIcon } from "./NavIcons";
import { useScroll } from "@/hooks/useScroll";
import { navLinks, megaMenus } from "@/lib/data";

export default function Navbar() {
    const isScrolled = useScroll(40);
    const [isHovered, setIsHovered] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
    const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const handleNavEnter = useCallback((label: string) => {
        if (megaMenuTimeoutRef.current) {
            clearTimeout(megaMenuTimeoutRef.current);
            megaMenuTimeoutRef.current = null;
        }
        if (megaMenus[label]) setActiveMegaMenu(label);
    }, []);

    const clearMenuTimeout = useCallback(() => {
        if (megaMenuTimeoutRef.current) {
            clearTimeout(megaMenuTimeoutRef.current);
            megaMenuTimeoutRef.current = null;
        }
    }, []);

    const closeMegaMenu = useCallback(() => setActiveMegaMenu(null), []);

    const isNavbarActive = isScrolled || isHovered || activeMegaMenu !== null;
    const megaMenuData = activeMegaMenu ? megaMenus[activeMegaMenu] : null;

    const barClass = `block h-[1.5px] w-full transition-all duration-300 ${isNavbarActive ? "bg-[#1c1c1c]" : "bg-white"}`;

    return (
        <nav
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative w-full transition-all duration-500 ${isNavbarActive ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}
        >
            <div className="flex items-center justify-between px-[20px] md:px-[48px] py-[16px]">
                {/* Left: Hamburger + Nav Links */}
                <div className="flex items-center gap-8">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden flex flex-col justify-center gap-[5px] w-[20px] h-[20px]"
                        aria-label="Toggle menu"
                    >
                        <span className={`${barClass} ${isMobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
                        <span className={`${barClass} ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                        <span className={`${barClass} ${isMobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
                    </button>

                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => {
                            const hasMegaMenu = !!megaMenus[link.label];
                            const isActive = activeMegaMenu === link.label;
                            return (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() => hasMegaMenu ? handleNavEnter(link.label) : setActiveMegaMenu(null)}
                                >
                                    <Link
                                        href={link.href}
                                        className={`text-[12px] tracking-[0.15em] uppercase transition-opacity hover:opacity-60 ${isNavbarActive ? "text-[#1c1c1c]" : "text-white"} ${link.label === "SALE" ? "text-red-500" : ""}`}
                                    >
                                        {link.label}
                                    </Link>
                                    <div className={`absolute -bottom-[18px] left-0 right-0 h-[2px] bg-[#1c1c1c] transition-all duration-300 ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`} />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Center: Logo */}
                <Link href="/" className="absolute left-1/2 -translate-x-1/2">
                    <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={120}
                        height={36}
                        className={`transition-all duration-300 ${isNavbarActive ? "" : "brightness-0 invert"}`}
                        priority
                    />
                </Link>

                {/* Right: Icons */}
                <div className={`flex items-center gap-4 md:gap-6 ${isNavbarActive ? "text-[#1c1c1c]" : "text-white"}`}>
                    <div className="hidden md:block"><CountryDropdown /></div>

                    <Link href="/account" className="hover:opacity-60 transition-opacity" aria-label="Account">
                        <AccountIcon />
                    </Link>

                    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:opacity-60 transition-opacity" aria-label="Search">
                        <SearchIcon />
                    </button>

                    <Link href="/cart" className="relative hover:opacity-60 transition-opacity" aria-label="Cart">
                        <CartIcon />
                        <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1c1c1c] text-[9px] font-bold text-white">0</span>
                    </Link>
                </div>
            </div>

            {/* Mega Menu */}
            <MegaMenuPanel
                data={megaMenuData}
                onClose={closeMegaMenu}
                onMouseEnter={clearMenuTimeout}
                onMouseLeave={() => { }}
            />

            {/* Search Bar */}
            <div className={`overflow-hidden transition-all duration-500 ${isSearchOpen ? "max-h-[80px] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-[20px] md:px-[48px] pb-4">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className={`w-full border-b py-3 text-[13px] tracking-[0.05em] outline-none bg-transparent placeholder:uppercase placeholder:tracking-[0.15em] placeholder:text-[11px] ${isNavbarActive
                            ? "border-[#1c1c1c]/20 text-[#1c1c1c] placeholder:text-[#1c1c1c]/40"
                            : "border-white/30 text-white placeholder:text-white/50"
                            }`}
                    />
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden fixed inset-0 top-[112px] bg-white z-40 transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full pointer-events-none"}`}>
                <div className="flex flex-col px-[20px] py-[32px]">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`py-4 text-[13px] font-bold tracking-[0.2em] uppercase text-[#1c1c1c] border-b border-black/5 transition-all duration-300 hover:pl-2 ${link.label === "SALE" ? "text-red-500" : ""}`}
                            style={{ transitionDelay: `${i * 50}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="mt-8 pt-4 border-t border-black/10"><CountryDropdown /></div>
                </div>
            </div>
        </nav>
    );
}
