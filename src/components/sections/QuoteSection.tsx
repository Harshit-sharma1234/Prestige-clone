"use client";

import { useState } from "react";
import Image from "next/image";

const quotes = [
    {
        id: "gq",
        text: (
            <>
                The GQ choice: "black or green, with its leather both flexible and <br className="hidden md:block" /> rigid, small Binder protects your equipment in dedicated <br /> compartments"
            </>
        ),
        logo: "/assets/gq-quote.avif",
        width: 140,
        height: 49.5,
    },
    {
        id: "farfetch",
        text: "Le Petit Violette redefined women elegancy. Its high quality leather and convenient interior make it perfect for an everyday usage!",
        logo: "/assets/farfetch-quote.png",
        width: 140,
        height: 33,
    },
    {
        id: "forbes",
        text: "Le Nouveau Cartable is perfectly sized, even holds my water bottle. And the leather just looks super rich and luxurious. Most awesome product I've tested!",
        logo: "/assets/forbes-quote.avif",
        width: 140,
        height: 49.5,
    }
];

export default function QuoteSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#1c1c1c] text-white py-[100px] h-[413.5px] font-sans border-t border-black/10 flex items-center justify-center">
            <div className="max-w-[800px] w-full mx-auto px-6 flex flex-col items-center justify-center">

                {/* Quote Text */}
                <div className="min-h-[140px] md:min-h-[120px] flex items-center justify-center text-center mb-16">
                    <p className="text-[18px] md:text-[20px] leading-relaxed font-nunito font-light text-white/90 px-4 transition-opacity duration-300">
                        {quotes[activeIndex].text}
                    </p>
                </div>

                {/* Logos Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20">
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
                                height={quote.height}
                                className="object-contain"
                                style={{
                                    width: `${quote.width}px`,
                                    height: `${quote.height}px`
                                }}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
