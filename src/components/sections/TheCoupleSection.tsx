"use client";

import Image from "next/image";

export default function TheCoupleSection() {
    return (
        <section className="relative w-full h-[500px] md:h-[650px] font-sans">
            {/* Background Image */}
            <Image
                src="/assets/the_couple_bg.webp"
                alt="Léo and Violette"
                fill
                className="object-cover"
                quality={90}
            />

            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Centered Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="text-center text-white max-w-[600px]">
                    <h6 className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-4 text-white/90">
                        THE COUPLE
                    </h6>
                    <h2 className="text-[28px] md:text-[32px] tracking-[0.15em] uppercase font-normal mb-6">
                        LÉO ET VIOLETTE
                    </h2>
                    <p className="text-[14px] md:text-[15px] leading-relaxed text-white/90 font-light">
                        We aspire to be a brand of the 21st century: 100% online and without any intermediary.<br className="hidden md:block" />
                        From you to us directly.
                    </p>
                </div>
            </div>
        </section>
    );
}
