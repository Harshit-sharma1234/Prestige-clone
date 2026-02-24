"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

export default function NewLaunch() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[400px] md:h-[512px] bg-cover bg-center bg-no-repeat font-sans overflow-hidden"
            style={{ backgroundImage: "url('/assets/image-new-launch.webp')" }}
        >
            {/* Grey overlay that fades to reveal the image */}
            <motion.div
                className="absolute inset-0 bg-[#d4d4d4] z-[1]"
                initial={{ opacity: 1 }}
                animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 z-[2]" />

            {/* Content - Left Aligned, Bottom */}
            <div className="relative z-10 flex flex-col justify-end h-full px-[20px] md:px-[40px] pb-12 md:pb-10">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                    style={{ wordSpacing: '6px' }}
                    className="text-[12px] md:text-[11px] tracking-[0.2em] uppercase text-white mb-7"
                >
                    NEW PRODUCT
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                    style={{ wordSpacing: '4px' }}
                    className="text-[28px] md:text-[28px] tracking-[0.1em] uppercase text-white leading-tight mb-8"
                >
                    LE BACKPACK
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
                >
                    <CTAButton text="SHOP" href="/collections/new-arrivals" variant="light" />
                </motion.div>
            </div>
        </section>
    );
}
