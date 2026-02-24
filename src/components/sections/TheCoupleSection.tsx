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
            <div className="absolute inset-0 bg-black/30" />

            {/* Centered Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-6">
                <div className="text-center text-white max-w-[600px]">
                    <h6 className="text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-white/90">
                        THE COUPLE
                    </h6>
                    <h2 className="text-[32px] md:text-[22px] tracking-[0.15em] uppercase  mt-5">
                        LÉO ET VIOLETTE
                    </h2>
                    <p className="text-[14px] md:text-[14px] leading-relaxed text-white/90 font-light font-nunito mt-[20px]">
                        We aspire to be a brand of the 21st century: 100% online and without any intermediary.<br className="hidden md:block" />
                        From you to us directly.
                    </p>
                </div>
            </div>
        </section>
    );
}
