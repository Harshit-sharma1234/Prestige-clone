"use client";

import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Simple custom component for Vimeo since lucide doesn't have it natively or it's rarely used
const VimeoIcon = ({ className }: { className?: string }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className={className}
    >
        <path d="M22.396 7.164c-.093 2.026-1.507 4.8-4.245 8.32C15.322 19.16 12.93 21 10.97 21c-1.214 0-2.24-1.12-3.08-3.36-.56-2.052-1.118-4.105-1.585-5.97-.655-2.708-1.164-3.922-1.82-3.922-.186 0-.756.326-1.708 1.026L1.828 7.64c1.166-1.074 2.39-2.288 3.545-3.41C7.03 2.624 8.242 2.016 9.083 2.016c1.636 0 2.52 1.258 2.658 3.774.28 4.756.93 7.834 1.306 8.397.466.792 1.12.932 1.636.56.653-.466 1.445-1.91 2.236-4.008.653-1.68.887-2.94.887-3.775 0-1.4-.655-1.958-2.053-1.68-.42.094-.793.28-1.025.28 1.492-4.57 4.664-5.225 6.95-3.357 1.21 1.026 1.166 3.124.675 4.803z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-[#f7f7f7] font-sans pt-20 pb-10 border-t border-black/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                {/* 4-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">

                    {/* Newsletter Column */}
                    <div className="flex flex-col">
                        <h4 className="text-[10px] tracking-[0.2em] font-medium uppercase text-[#1c1c1c] mb-6">NEWSLETTER</h4>
                        <p className="text-[13px] text-black/60 leading-relaxed max-w-[280px] mb-8">
                            Subscribe to receive updates, access to exclusive deals, and more.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="E-mail"
                                required
                                className="w-full bg-white border border-black/10 text-black px-4 py-3.5 text-[13px] focus:outline-none focus:border-black transition-colors"
                            />
                            <button
                                type="submit"
                                className="bg-[#1c1c1c] text-white self-start px-8 py-3.5 text-[10px] tracking-[0.2em] font-medium uppercase hover:bg-black/80 transition-colors"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>

                    {/* Shop Column */}
                    <div className="flex flex-col lg:pl-8">
                        <h4 className="text-[10px] tracking-[0.2em] font-medium uppercase text-[#1c1c1c] mb-6">SHOP</h4>
                        <ul className="flex flex-col gap-4 text-[13px] text-black/60">
                            <li><Link href="#" className="hover:text-black transition-colors">Women</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Men</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Small Leather Goods</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Collaboration</Link></li>
                        </ul>
                    </div>

                    {/* Information Column */}
                    <div className="flex flex-col">
                        <h4 className="text-[10px] tracking-[0.2em] font-medium uppercase text-[#1c1c1c] mb-6">INFORMATION</h4>
                        <ul className="flex flex-col gap-4 text-[13px] text-black/60">
                            <li><Link href="#" className="hover:text-black transition-colors">Theme Features</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">About us</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Contact us</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Maintenance Tips</Link></li>
                        </ul>
                    </div>

                    {/* About the Shop Column */}
                    <div className="flex flex-col">
                        <h4 className="text-[10px] tracking-[0.2em] font-medium uppercase text-[#1c1c1c] mb-6">ABOUT THE SHOP</h4>
                        <p className="text-[13px] text-black/60 leading-relaxed mb-4">
                            The story of Léo and Violette, it's ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our lives for more than 8 years. Since the early days of our meeting, we always had the dream to develop a project together. Here it is!
                        </p>
                        <p className="text-[13px] text-black/60 leading-relaxed">
                            Thanks to <Link href="#" className="border-b border-black/20 hover:border-black/60 transition-colors pb-[1px] text-black/80">Léo et Violette</Link> for allowing us to use their products in this demo store.
                        </p>
                    </div>

                </div>

                {/* Social Icons */}
                <div className="flex gap-6 mb-16 px-2">
                    <Link href="#" className="text-black/60 hover:text-black transition-colors">
                        <Facebook className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </Link>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors">
                        {/* Twitter X icon approximation */}
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                            <path d="M4 4l16 16m0-16L4 20" />
                        </svg>
                    </Link>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors">
                        <Instagram className="w-[18px] h-[18px]" strokeWidth={1.5} />
                    </Link>
                    <Link href="#" className="text-black/60 hover:text-black transition-colors">
                        <VimeoIcon className="w-[18px] h-[18px]" />
                    </Link>
                </div>

                {/* Bottom Row */}
                <div className="flex flex-col lg:flex-row items-center justify-between border-t border-black/10 pt-8 gap-6 lg:gap-0 px-2 text-[10px] tracking-[0.1em] text-black/50 uppercase font-medium">

                    {/* Language/Country Selector */}
                    <button className="flex items-center gap-3 hover:text-black transition-colors">
                        <Image src="/assets/us.svg" alt="USA Flag" width={20} height={14} className="border border-black/10" />
                        <span>UNITED STATES (USD $)</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>

                    {/* Copyright */}
                    <div className="text-center">
                        © 2026 - PRESTIGE - ALLURE POWERED BY SHOPIFY
                    </div>

                    {/* Payment Initial place holders, styled as small badges to look like the screenshot */}
                    <div className="flex items-center gap-2">
                        {["VISA", "MC", "AMEX", "PAYPAL", "DINERS", "DISCOVER"].map((card) => (
                            <div key={card} className="px-2 py-1 bg-white border border-black/10 rounded-[2px] text-[8px] sm:text-[9px] font-bold text-black/60 shadow-sm flex items-center justify-center">
                                {card}
                            </div>
                        ))}
                    </div>

                </div>

            </div>
        </footer>
    );
}
