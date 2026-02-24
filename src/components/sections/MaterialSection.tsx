"use client";

import Image from "next/image";

export default function MaterialSection() {
    return (
        <section className="relative w-full h-[600px] md:h-[700px] font-sans">
            <Image
                src="/assets/materials-bg.webp"
                alt="Premium leather material roll"
                fill
                className="object-cover"
                quality={95}
                priority
            />

            <div className="absolute inset-0 flex items-center justify-center p-6 bg-black/5">
                {/* Precise Config: 380x225.68 box with 48px 16px padding */}
                <div className="bg-white w-full max-w-[380px] min-h-[225.68px] py-[48px] px-[16px] text-center flex flex-col items-center justify-center">
                    <h6 className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase text-[#1c1c1c] mb-6 font-sans">
                        MATERIALS
                    </h6>

                    <p className="text-[14px] text-[#1c1c1c] leading-relaxed mb-8 font-nunito max-w-[300px]">
                        We only work with the best leather, chosen in
                        collaboration with our factory. Made in Italy.
                    </p>

                    <a
                        href="/pages/materials"
                        className="inline-block text-[11px] text-[#1c1c1c] border-b border-black pb-0.5 hover:opacity-60 transition-opacity font-nunito"
                    >
                        Learn more
                    </a>
                </div>
            </div>
        </section>
    );
}
