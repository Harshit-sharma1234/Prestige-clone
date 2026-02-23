"use client";

import { useState } from "react";
import Image from "next/image";

const quotes = [
    {
        id: "forbes",
        text: "Le Nouveau Cartable is perfectly sized, even holds my water bottle. And the leather just looks super rich and luxurious. Most awesome product I've tested!",
        logo: "/assets/forbes-quote.avif",
        width: 80,
    },
    {
        id: "farfetch",
        text: "Le Petit Violette redefined women elegancy. Its high quality leather and convenient interior make it perfect for an everyday usage!",
        logo: "/assets/farfetch-quote.png",
        width: 100,
    },
    {
        id: "gq",
        text: "The GQ choice: \"black or green, with its leather both flexible and rigid, small Binder protects your equipment in dedicated compartments\"",
        logo: "/assets/gq-quote.avif",
        width: 48,
    }
];

export default function QuoteSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#1c1c1c] text-white py-24 md:py-32 font-sans border-t border-black/10">
            <div className="max-w-[700px] mx-auto px-6 flex flex-col items-center justify-center">

                {/* Quote Text */}
                <div className="min-h-[140px] md:min-h-[100px] flex items-center justify-center text-center mb-16">
                    <p className="text-[15px] md:text-[16px] leading-relaxed font-light text-white/90 px-4 transition-opacity duration-300">
                        {quotes[activeIndex].text}
                    </p>
                </div>

                {/* Logos Navigation */}
                <div className="flex items-center justify-center gap-16 md:gap-24">
                    {quotes.map((quote, idx) => (
                        <button
                            key={quote.id}
                            onClick={() => setActiveIndex(idx)}
                            className={`transition-all duration-300 flex items-center justify-center grayscale hover:grayscale-0 ${activeIndex === idx ? "opacity-100 grayscale-0 brightness-200" : "opacity-40 hover:opacity-75"
                                }`}
                            aria-label={`Show quote from ${quote.id}`}
                        >
                            <Image
                                src={quote.logo}
                                alt={quote.id}
                                width={quote.width}
                                height={24}
                                className="object-contain h-5 md:h-6 w-auto"
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
