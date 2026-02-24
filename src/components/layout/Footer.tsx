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
        <footer className="bg-[#ffffff] font-sans pt-20 pb-10">
            <div className="max-w-[1800px] mx-auto px-4 md:px-10">

                {/* Footer Columns: Start, End, and Equal Middle Spacing */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16 mb-20">

                    {/* Newsletter Column */}
                    <div className="flex flex-col lg:max-w-[320px]">
                        <h4 className="text-[12px] tracking-[0.2em] font-medium uppercase text-[#1c1c1c] mb-6">NEWSLETTER</h4>
                        <p className="text-[14px] text-black/60 leading-relaxed mb-8 font-cta">
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
                    <div className="flex flex-col lg:w-auto">
                        <h4 className="text-[12px] tracking-[0.2em] font-medium uppercase text-[#1c1c1c] mb-6">SHOP</h4>
                        <ul className="flex flex-col gap-2.5 text-[14px] text-black/60 font-cta">
                            <li><Link href="#" className="hover:text-black transition-colors">Women</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Men</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Small Leather Goods</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Collaboration</Link></li>
                        </ul>
                    </div>

                    {/* Information Column */}
                    <div className="flex flex-col lg:w-auto">
                        <h4 className="text-[12px] tracking-[0.2em] font-medium uppercase text-[#1c1c1c] mb-6">INFORMATION</h4>
                        <ul className="flex flex-col gap-2.5 text-[14px] text-black/60 font-cta">
                            <li><Link href="#" className="hover:text-black transition-colors">Theme Features</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">About us</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Contact us</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">FAQ</Link></li>
                            <li><Link href="#" className="hover:text-black transition-colors">Maintenance Tips</Link></li>
                        </ul>
                    </div>

                    {/* About the Shop Column */}
                    <div className="flex flex-col lg:max-w-[420px]">
                        <h4 className="text-[12px] tracking-[0.2em] font-medium uppercase text-[#1c1c1c] mb-6">ABOUT THE SHOP</h4>
                        <p className="text-[14px] text-black/60 leading-relaxed font-cta">
                            The story of Léo and Violette, it's ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our lives for more than 8 years. Since the early days of our meeting, we always had the dream to develop a project together. Here it is!
                            <br /><br className="md:hidden" />
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
                <div className="flex flex-col lg:flex-row items-center justify-between pt-8 gap-6 lg:gap-0 px-2 text-[10px] tracking-[0.1em] text-black/50 uppercase font-medium">

                    {/* Language/Country Selector */}
                    <button className="flex items-center gap-3 hover:text-black transition-colors">
                        <Image src="/assets/us.svg" alt="USA Flag" width={20} height={14} className="border border-black/10" />
                        <span>UNITED STATES (USD $)</span>
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>

                    {/* Copyright */}
                    <div className="text-center text-[12px]">
                        © 2026 - PRESTIGE - ALLURE POWERED BY SHOPIFY
                    </div>

                    {/* Payment Logos */}
                    <div className="flex items-center gap-4">
                        <div className="relative h-6 w-[240px] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 overflow-hidden">
                            <Image
                                src="/assets/payment-logos.png"
                                alt="Payment Methods"
                                fill
                                className="object-cover object-center scale-[2.2]"
                                quality={90}
                            />
                        </div>
                    </div>

                </div>

            </div>
        </footer>
    );
}
