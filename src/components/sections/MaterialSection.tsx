"use client";

import Image from "next/image";

export default function MaterialSection() {
    return (
        <section className="relative w-full h-[500px] md:h-[600px] font-sans">
            {/* Background Image */}
            <Image
                src="/assets/materials-bg.webp"
                alt="Premium leather material roll"
                fill
                className="object-cover"
                quality={90}
            />

            {/* Dark Overlay for better contrast if needed, but the image is naturally text-friendly */}
            <div className="absolute inset-0 bg-black/5" />

            {/* Centered White Box Container */}
            <div className="absolute inset-0 flex items-center justify-center p-6">
                <div className="bg-white px-8 py-12 md:px-16 md:py-16 text-center max-w-[500px] shadow-sm">
                    <h6 className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#1c1c1c] mb-6">
                        MATERIALS
                    </h6>

                    <p className="text-[13px] text-[#1c1c1c] leading-relaxed mb-8">
                        We only work with the best leather, chosen in
                        collaboration with our factory. Made in Italy.
                    </p>

                    <a
                        href="/pages/materials"
                        className="inline-block text-[11px] text-[#1c1c1c] border-b border-black pb-[2px] hover:text-black/60 hover:border-black/60 transition-colors"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
