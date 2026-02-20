"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const looks = [
    {
        id: 1,
        image: "/assets/Shop_the_look_-_home_2.jpg",
        products: [
            {
                id: "p1",
                x: 29,
                y: 50,
                badge: "NEW",
                name: "LE COMPACT WEEKENDER BUFFLE BRUN",
                price: "$420.00",
                image: "/assets/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.webp",
                imageHover: "/assets/Le-Compact-Weekender-Buffle-Brun-02_cb83be45-fb02-4399-8460-4f583902e185.webp",
                href: "#"
            },
            {
                id: "p2",
                x: 63,
                y: 60,
                badge: "BEST SELLER",
                name: "LE GRAND NOVA IVORY LIÉGÉ",
                price: "$450.00",
                image: "/assets/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.webp",
                imageHover: "/assets/white-b.webp",
                href: "#"
            }
        ]
    },
    {
        id: 2,
        image: "/assets/Shop_the_look_-_mini_primo.jpg",
        products: [
            {
                id: "p3",
                x: 40,
                y: 65,
                badge: "NEW",
                name: "LE SLIM BRIEFCASE KHAKI PEBBLED LEATHER",
                price: "$420.00",
                image: "/assets/le_nouveau_cartable_khaki.png",
                imageHover: "/assets/le_nouveau_cartable_khaki.png",
                href: "#"
            },
            {
                id: "p4",
                x: 65,
                y: 76,
                badge: "BEST SELLER",
                name: "LE GINA LIEGE PETROLE",
                price: "$320.00",
                image: "/assets/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.webp",
                imageHover: "/assets/green-b.webp",
                href: "#"
            }
        ]
    }
];

export default function ShopTheLook() {
    const [currentLookIdx, setCurrentLookIdx] = useState(0);
    const [activeProductId, setActiveProductId] = useState(looks[0].products[1].id);

    const currentLook = looks[currentLookIdx];
    const activeProduct = currentLook.products.find(p => p.id === activeProductId) || currentLook.products[0];

    const nextLook = () => {
        const nextIdx = (currentLookIdx + 1) % looks.length;
        setCurrentLookIdx(nextIdx);
        setActiveProductId(looks[nextIdx].products[0].id);
    };

    const prevLook = () => {
        const prevIdx = (currentLookIdx - 1 + looks.length) % looks.length;
        setCurrentLookIdx(prevIdx);
        setActiveProductId(looks[prevIdx].products[0].id);
    };

    return (
        <section className="bg-[#efefef] py-20 px-6 md:px-[160px] font-sans">
            <div className="mx-auto max-w-[1440px]">
                <div className="text-center mb-16">
                    <h6 className="text-[12px] tracking-[0.2em] uppercase text-black/60 mb-4">
                        SHOP
                    </h6>
                    <h2 className="text-[28px] md:text-[32px] tracking-[0.15em] font-medium uppercase text-[#1c1c1c]">
                        OUR LOOKS
                    </h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20 relative">

                    {/* Left padding for spacing/nav */}
                    <div className="hidden md:flex flex-1 justify-start">
                        <button
                            onClick={prevLook}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow hover:scale-105 transition-transform"
                            aria-label="Previous look"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Look Image with Hotspots */}
                    <div className="relative w-full md:w-[500px] h-[500px] md:h-[600px] shrink-0">
                        <Image
                            src={currentLook.image}
                            alt="Shop the look"
                            fill
                            className="object-cover"
                        />
                        {currentLook.products.map((product) => (
                            <button
                                key={product.id}
                                onClick={() => setActiveProductId(product.id)}
                                onMouseEnter={() => setActiveProductId(product.id)}
                                className={`absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all ${activeProductId === product.id ? "bg-white/30 scale-110" : "bg-white/10 hover:bg-white/20"
                                    }`}
                                style={{ top: `${product.y}%`, left: `${product.x}%` }}
                            >
                                <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
                            </button>
                        ))}
                    </div>

                    {/* Right Product Details */}
                    <div className="w-full md:w-[350px] shrink-0 flex flex-col items-center text-center">
                        <div className="relative w-full aspect-[4/3] mb-8 group/card">
                            <span className="absolute top-0 left-0 text-[10px] tracking-[0.1em] text-black/60 uppercase z-10">
                                {activeProduct.badge}
                            </span>
                            <div className="relative w-full h-full">
                                <Image
                                    src={activeProduct.image}
                                    alt={activeProduct.name}
                                    fill
                                    className="object-contain transition-opacity duration-700 group-hover/card:opacity-0"
                                />
                                {activeProduct.imageHover && (
                                    <Image
                                        src={activeProduct.imageHover}
                                        alt={`${activeProduct.name} back view`}
                                        fill
                                        className="object-contain transition-opacity duration-700 opacity-0 group-hover/card:opacity-100"
                                    />
                                )}
                            </div>
                        </div>

                        <h3 className="text-[12px] md:text-[12px] tracking-[0.15em] uppercase text-[#1c1c1c] mb-2 font-medium">
                            {activeProduct.name}
                        </h3>
                        <p className="text-[12px] md:text-[12px] text-black/60 tracking-[0.1em] mb-8">
                            {activeProduct.price}
                        </p>

                        <a
                            href={activeProduct.href}
                            className="bg-[#1c1c1c] text-white text-[10px] tracking-[0.2em] py-4 px-10 uppercase transition-colors hover:bg-black/80"
                        >
                            VIEW PRODUCT
                        </a>

                        {/* Pagination Dots */}
                        <div className="flex gap-2 mt-8">
                            {looks.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        setCurrentLookIdx(idx);
                                        setActiveProductId(looks[idx].products[0].id);
                                    }}
                                    className={`w-1.5 h-1.5 rounded-full transition-colors ${currentLookIdx === idx ? "bg-black" : "bg-black/20"
                                        }`}
                                    aria-label={`Go to look ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Navigation */}
                    <div className="hidden md:flex flex-1 justify-end">
                        <button
                            onClick={nextLook}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow hover:scale-105 transition-transform"
                            aria-label="Next look"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Mobile Navigation (Shown below image on small screens) */}
                    <div className="md:hidden flex justify-center gap-8 mt-8 w-full">
                        <button
                            onClick={prevLook}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={nextLook}
                            className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </div>
        </section >
    );
}
