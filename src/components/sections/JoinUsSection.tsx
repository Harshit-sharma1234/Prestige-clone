"use client";

import Image from "next/image";
import { Box, RotateCcw, MessageSquare, CreditCard } from "lucide-react";

const images = [
    "/assets/joinuse-1.webp",
    "/assets/joinuse-2.webp",
    "/assets/joinuse-.webp",
    "/assets/joinuse-4.webp",
    "/assets/joinus-5.webp",
];

const features = [
    {
        icon: Box,
        title: "EXPRESS DELIVERY",
        description: "DHL express delivery worldwide",
    },
    {
        icon: RotateCcw,
        title: "FREE RETURNS",
        description: "Free return for 30 days for any order delivered in France",
    },
    {
        icon: MessageSquare,
        title: "AVAILABLE CUSTOMER SERVICE",
        description: "Available via Whatsapp on +33123456789",
    },
    {
        icon: CreditCard,
        title: "PAYMENT IN 3X",
        description: "Take advantage of a payment in 3x without fees from $100 of purchase",
    }
];

export default function JoinUsSection() {
    return (
        <section className="bg-[#f2f2f2] pt-20 pb-20 font-sans overflow-hidden">
            <div className="max-w-[1440px] mx-auto">
                <div className="text-center mb-12">
                    <h6 className="text-[12px] tracking-[0.2em] uppercase text-[#1c1c1c] mb-4">JOIN US</h6>
                    <h2 className="text-[20px] md:text-[28px] tracking-[0.15em] font-normal uppercase text-[#1c1c1c]">@LEOETVIOLETTE</h2>
                </div>

                {/* 5-Image Grid */}
                <div className="flex px-4 md:px-6 w-full gap-5 md:gap-10 justify-center overflow-x-auto md:overflow-visible scrollbar-hide mb-20">
                    {images.map((img, i) => (
                        <div key={i} className="relative w-[298px] h-[298px] shrink-0 bg-white group overflow-hidden shadow-sm">
                            <Image
                                src={img}
                                alt={`Instagram feature ${i + 1}`}
                                fill
                                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* 4-Column Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 px-6">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <feature.icon className="w-6 h-6 text-black/80 mb-6 font-light" strokeWidth={1} />
                            <h3 className="text-[11px] md:text-[12px] tracking-[0.15em] uppercase text-[#1c1c1c] mb-4 font-normal">
                                {feature.title}
                            </h3>
                            <p className="text-[13px] text-black/60 max-w-[250px] leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
