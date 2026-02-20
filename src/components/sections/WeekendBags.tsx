"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const products = [
    {
        id: 1,
        name: "LE COMPACT WEEKENDER BUFFALO BLACK",
        price: "$470.00",
        image: "/assets/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.webp",
        badge: "BEST SELLER"
    },
    {
        id: 2,
        name: "LE COMPACT WEEKENDER BLACK PEBBLED LEATHER",
        price: "$470.00",
        image: "/assets/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.webp",
    },
    {
        id: 3,
        name: "LE COMPACT WEEKENDER BLUE PEBBLED LEATHER",
        price: "$470.00",
        image: "/assets/b-bag.webp",
        imageHover: "/assets/b-bag-back.webp",
    },
    {
        id: 4,
        name: "LE COMPACT WEEKENDER BUFFALO BROWN",
        price: "$470.00",
        image: "/assets/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.webp",
        imageHover: "/assets/Le-Compact-Weekender-Buffle-Brun-02_cb83be45-fb02-4399-8460-4f583902e185.webp",
    }
];

export default function WeekendBags() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollContainerRef.current) {
            const { current: container } = scrollContainerRef;
            const scrollAmount = container.clientWidth * 0.8;
            container.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="weekend-bags" className="bg-[#efefef] py-24 px-6 md:px-12 group/section font-sans">
            <div className="mx-auto max-w-[1440px] text-center">
                <div className="flex flex-col items-center mb-16">
                    <h6 className="text-[12px] tracking-[0.3em] uppercase text-black/60 mb-8 font-bold">
                        LE WEEKEND BAG
                    </h6>
                    <h2 className="text-[28px] md:text-[42px] tracking-[0.15em] font-medium uppercase text-black">
                        IDEAL FOR A WEEKEND OUTING
                    </h2>
                </div>

                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-black/40 hover:text-black transition-all duration-300 opacity-0 group-hover/section:opacity-100 -ml-6"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-black/40 hover:text-black transition-all duration-300 opacity-0 group-hover/section:opacity-100 -mr-6"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                    >
                        {products.map((product) => (
                            <div key={product.id} className="w-[349px] flex-shrink-0 group/card cursor-pointer snap-start">
                                <div className="relative w-[349px] h-[349px] mb-8 overflow-hidden">
                                    {product.badge && (
                                        <span className="absolute top-4 left-4 z-10 text-[8px] font-bold tracking-[0.1em] uppercase text-black/60">
                                            {product.badge}
                                        </span>
                                    )}
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className={`object-contain transition-opacity duration-700 ${product.imageHover ? 'group-hover/card:opacity-0' : 'group-hover/card:scale-105'}`}
                                    />
                                    {product.imageHover && (
                                        <Image
                                            src={product.imageHover}
                                            alt={`${product.name} back view`}
                                            fill
                                            className="object-contain transition-opacity duration-700 opacity-0 group-hover/card:opacity-100"
                                        />
                                    )}
                                    {/* Plus Sign Overlay */}
                                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover/card:opacity-100">
                                        <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-white/80 rounded-full shadow-sm hover:bg-white transition-colors">
                                            <Plus className="w-6 h-6 text-black" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center px-4">
                                    <h3 className="text-[12px] md:text-[13px] tracking-[0.15em] uppercase mb-3 text-black font-medium leading-relaxed">
                                        {product.name}
                                    </h3>
                                    <p className="text-[12px] md:text-[13px] text-black/60 tracking-[0.1em]">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
