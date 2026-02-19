"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface Country {
    code: string;
    name: string;
    currency: string;
    flag: string;
}

const countries: Country[] = [
    { code: "CA", name: "Canada", currency: "CAD $", flag: "/assets/ca.jpeg" },
    { code: "FR", name: "France", currency: "EUR €", flag: "/assets/fr.jpeg" },
    { code: "DE", name: "Germany", currency: "EUR €", flag: "/assets/de.jpeg" },
    { code: "HK", name: "Hong Kong SAR", currency: "HKD $", flag: "/assets/hk.jpeg" },
    { code: "IT", name: "Italy", currency: "EUR €", flag: "/assets/it.jpeg" },
    { code: "JP", name: "Japan", currency: "JPY ¥", flag: "/assets/jp.jpeg" },
    { code: "KR", name: "South Korea", currency: "KRW ₩", flag: "/assets/kr.svg" },
    { code: "ES", name: "Spain", currency: "EUR €", flag: "/assets/es.jpeg" },
    { code: "GB", name: "United Kingdom", currency: "GBP £", flag: "/assets/gb.jpeg" },
    { code: "US", name: "United States", currency: "USD $", flag: "/assets/us.svg" },
];

export default function CountryDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(countries[9]); // Default to US
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 py-2 text-[11px] font-bold tracking-[0.1em] hover:opacity-70 transition-opacity"
            >
                <div className="relative w-[18px] h-[12px] overflow-hidden border border-black/5">
                    <img
                        src={selected.flag}
                        alt={selected.name}
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="opacity-70">{selected.currency}</span>
                <svg
                    className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-[240px] bg-white text-black shadow-xl ring-1 ring-black/5 z-[60] py-4 transform origin-top transition-all duration-200">
                    <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                        {countries.map((country) => (
                            <button
                                key={country.code}
                                onClick={() => {
                                    setSelected(country);
                                    setIsOpen(false);
                                }}
                                className="flex w-full items-center gap-4 px-6 py-3 hover:bg-black/5 transition-colors text-left"
                            >
                                <div className="relative w-[20px] h-[14px] overflow-hidden border border-black/5">
                                    <img
                                        src={country.flag}
                                        alt={country.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <span className="text-[13px] font-medium text-[#444]">
                                    {country.name} ({country.currency})
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
