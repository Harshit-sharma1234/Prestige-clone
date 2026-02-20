"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

const products = {
    women: [
        {
            id: 1,
            name: "GRAND NOVA LISSE IVOIRE",
            price: "$420.00",
            image: "/assets/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.webp",
            imageHover: "/assets/white-b.webp",
            badge: "NEW"
        },
        {
            id: 2,
            name: "LE GINA LIEGE PETROLE",
            price: "$320.00",
            image: "/assets/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.webp",
            imageHover: "/assets/green-b.webp"
        },
        {
            id: 3,
            name: "ELEGANT CUIR MIROIR CHOCOLAT",
            price: "$420.00",
            image: "/assets/brown-f.webp",
            imageHover: "/assets/Elegant-Cuir-Miroir-Chocolat-01_78e03cea-f382-4fd4-a12d-71e1d9cb0999.webp"
        },
        {
            id: 4,
            name: "LE SLIM BRIEFCASE BLACK",
            price: "$470.00",
            image: "/assets/black-f.webp",
            imageHover: "/assets/black-b.webp",
            badge: "BEST SELLER"
        }
    ],
    men: [
        {
            id: 5,
            name: "LE SLIM BRIEFCASE BLACK",
            price: "$420.00",
            image: "/assets/black-f.webp",
            imageHover: "/assets/black-b.webp",
            badge: "NEW"
        },
        {
            id: 6,
            name: "ELEGANT CUIR MIROIR CHOCOLAT",
            price: "$320.00",
            image: "/assets/brown-f.webp",
            imageHover: "/assets/Elegant-Cuir-Miroir-Chocolat-01_78e03cea-f382-4fd4-a12d-71e1d9cb0999.webp"
        },
        {
            id: 7,
            name: "LE GINA LIEGE PETROLE",
            price: "$420.00",
            image: "/assets/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.webp",
            imageHover: "/assets/green-b.webp"
        },
        {
            id: 8,
            name: "GRAND NOVA LISSE IVOIRE",
            price: "$470.00",
            image: "/assets/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.webp",
            imageHover: "/assets/white-b.webp",
            badge: "BEST SELLER"
        }
    ]
};

export default function BestSellers() {
    const [activeTab, setActiveTab] = useState<"women" | "men">("men");
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
        <section id="best-sellers" className="bg-[#efefef] py-20 px-6 md:px-12 group/section font-sans">
            <div className="mx-auto max-w-[1440px] text-center">
                <div className="flex justify-center mb-8">
                    <h6 className="text-[12px] tracking-[0.2em] uppercase text-primary-dark py-2 px-6 inline-block">
                        OUR BEST SELLERS
                    </h6>
                </div>

                <div className="flex justify-center gap-8 mb-16 text-[28px] md:text-[28px] tracking-[0.1em]">
                    <button
                        onClick={() => setActiveTab("women")}
                        className={`relative pb-2 transition-colors ${activeTab === "women" ? "text-black" : "text-primary-dark"
                            }`}
                    >
                        WOMEN
                        {activeTab === "women" && (
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />
                        )}
                    </button>
                    <button
                        onClick={() => setActiveTab("men")}
                        className={`relative pb-2 transition-colors ${activeTab === "men" ? "text-black" : "text-primary-dark"
                            }`}
                    >
                        MEN
                        {activeTab === "men" && (
                            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />
                        )}
                    </button>
                </div>

                <div className="relative">
                    {/* Navigation Arrows */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-black/40 hover:text-black transition-all duration-300 opacity-0 group-hover/section:opacity-100 -ml-6"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center text-black/40 hover:text-black transition-all duration-300 opacity-0 group-hover/section:opacity-100 -mr-6"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    <div
                        ref={scrollContainerRef}
                        className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
                    >
                        {products[activeTab].map((product) => (
                            <div key={product.id} className="w-[349px] flex-shrink-0 group/card cursor-pointer snap-start">
                                <div className="relative w-[349px] h-[349px] mb-6 overflow-hidden">
                                    {product.badge && (
                                        <span className="absolute top-4 left-4 z-10 text-[8px] font-bold tracking-[0.1em] uppercase text-black/60">
                                            {product.badge}
                                        </span>
                                    )}
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-contain p-2 transition-opacity duration-700 group-hover/card:opacity-0"
                                    />
                                    {product.imageHover && (
                                        <Image
                                            src={product.imageHover}
                                            alt={`${product.name} back view`}
                                            fill
                                            className="object-contain p-2 transition-opacity duration-700 opacity-0 group-hover/card:opacity-100"
                                        />
                                    )}
                                    {/* Plus Sign Overlay */}
                                    <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover/card:opacity-100">
                                        <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center">
                                            <Plus className="w-6 h-6 text-black/40 hover:text-black transition-colors" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-[12px] md:text-[12px] tracking-[0.1em] uppercase mb-2 text-primary-dark">
                                        {product.name}
                                    </h3>
                                    <p className="text-[12px] md:text-[12px] text-black/60 tracking-[0.1em]">
                                        {product.price}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="mt-16 flex justify-center">
                    <div className="mt-16 flex justify-center">
                        <CTAButton text="ALL WOMEN'S BAGS" href="/collections/women" />
                    </div>
                </div>
            </div>
        </section>
    );
}
