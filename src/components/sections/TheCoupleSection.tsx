"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function TheCoupleSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section ref={sectionRef} className="relative w-full h-[500px] md:h-[650px] font-sans overflow-hidden">
            {/* Grey overlay that fades to reveal the image */}
            <motion.div
                className="absolute inset-0 bg-[#d4d4d4] z-[5]"
                initial={{ opacity: 1 }}
                animate={isInView ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
            />

            {/* Background Image */}
            <Image
                src="/assets/the_couple_bg.webp"
                alt="Léo and Violette"
                fill
                className="object-cover"
                quality={90}
            />

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Centered Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-6 z-10">
                <div className="text-center text-white max-w-[600px]">
                    <motion.h6
                        className="text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-white/90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                    >
                        THE COUPLE
                    </motion.h6>
                    <motion.h2
                        className="text-[32px] md:text-[22px] tracking-[0.15em] uppercase mt-5"
                        initial={{ opacity: 0, y: 25 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                        transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                    >
                        LÉO ET VIOLETTE
                    </motion.h2>
                    <motion.p
                        className="text-[14px] md:text-[14px] leading-relaxed text-white/90 font-light font-nunito mt-[20px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.7, delay: 1.0, ease: "easeOut" }}
                    >
                        We aspire to be a brand of the 21st century: 100% online and without any intermediary.<br className="hidden md:block" />
                        From you to us directly.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
