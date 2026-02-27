"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function OurAim() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section className="bg-[#efefef] py-16 md:py-20 px-[20px] md:px-[48px] font-sans">
            <div ref={sectionRef} className="mx-auto w-full max-w-[1260px]">
                {/* Top Content - Icon + Heading + Links */}
                <motion.div
                    className="flex flex-col items-center text-center mb-12 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Bag Icon */}
                    <div className="mb-6">
                        <Image
                            src="/assets/bag-ourAim.avif"
                            alt="Bag icon"
                            width={120}
                            height={120}

                        />
                    </div>

                    {/* Heading */}
                    <h2
                        className="text-[20px] md:text-[32px] font-[family-name:var(--font-instrument-sans)] font-normal tracking-[0.1em] uppercase text-[#1c1c1c] leading-[1.35] max-w-[680px] mb-6 mt-5"
                    >
                        OUR AIM: OFFER ELEGANT, <br /> TIMELESS & FUNCTIONAL <br /> PRODUCTS
                    </h2>

                    {/* Links */}
                    <div className="flex items-center gap-4 text-[12px] tracking-[0.05em]">
                        <Link
                            href="/our-story"
                            className="underline underline-offset-4 decoration-1 text-[#1c1c1c] hover:opacity-60 transition-opacity"
                        >
                            Our story
                        </Link>

                        <Link
                            href="/commitments"
                            className="underline underline-offset-4 decoration-1 text-[#1c1c1c] hover:opacity-60 transition-opacity"
                        >
                            Commitments
                        </Link>
                    </div>
                </motion.div>

                {/* Image Grid - Asymmetric 2 column layout */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-[30px] justify-center">
                    {/* Left - Women (larger, ~60% width) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="w-full md:w-[830px] shrink-0"
                    >
                        <Link
                            href="/collections/women"
                            className="relative block h-[500px] md:h-[610px] overflow-hidden group"
                        >
                            <Image
                                src="/assets/women-our-aim.webp"
                                alt="Women collection"
                                fill
                                className="object-cover group-hover:scale-110"
                                style={{ transition: "scale 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                            />
                            <div className="absolute inset-0 bg-black/5 transition-colors duration-500" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-[24px] md:text-[32px] tracking-[0.15em] uppercase">
                                WOMEN
                            </span>
                        </Link>
                    </motion.div>

                    {/* Right Column - Men + Accessories stacked */}
                    <div className="flex flex-col gap-6 md:gap-[30px] w-full md:w-[400px] shrink-0">
                        {/* Top Right - Men */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        >
                            <Link
                                href="/collections/men"
                                className="relative block w-full h-[300px] md:h-[290px] overflow-hidden group"
                            >
                                <Image
                                    src="/assets/men-our-aim.webp"
                                    alt="Men collection"
                                    fill
                                    className="object-cover group-hover:scale-110"
                                    style={{ transition: "scale 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                                />
                                <div className="absolute inset-0 bg-black/5 transition-colors duration-500" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-[18px] md:text-[22px] tracking-[0.25em] uppercase font-medium">
                                    MEN
                                </span>
                            </Link>
                        </motion.div>

                        {/* Bottom Right - Accessories */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        >
                            <Link
                                href="/collections/accessories"
                                className="relative block w-full h-[300px] md:h-[290px] overflow-hidden group"
                            >
                                <Image
                                    src="/assets/accesories-ouraim.webp"
                                    alt="Accessories"
                                    fill
                                    className="object-cover group-hover:scale-110"
                                    style={{ transition: "scale 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                                />
                                <div className="absolute inset-0 bg-black/5 transition-colors duration-500" />
                                <span className="absolute inset-0 flex items-center justify-center text-white text-[16px] md:text-[18px] tracking-[0.25em] uppercase font-medium">
                                    ACCESSORIES
                                </span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
