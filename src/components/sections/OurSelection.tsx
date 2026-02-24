"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import AddToCartButton from "@/components/ui/AddToCartButton";

const images = [
    "/assets/darkpeach-1.webp",
    "/assets/dark-peachbag2.webp",
    "/assets/darkpeach-3.webp",
    "/assets/darkpeach-4.webp",
    "/assets/darkpeach-5.webp",
];

export default function OurSelection() {
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(4);

    return (
        <section className="bg-[#f9f9f9] py-24 font-sans border-t border-black/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[120px]">
                {/* Header */}
                <div className="text-center mb-24">
                    <p className="text-[10px] md:text-[12px] tracking-[0.3em] uppercase text-black/50 mb-6 font-sans">OUR SELECTION</p>
                    <h2 className="text-[28px] tracking-[0.2em] font-normal uppercase text-[#1c1c1c] font-sans">PRODUCT OF THE WEEK</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 items-center">
                    {/* Media */}
                    <div className="flex flex-col items-center">
                        <div className="w-full aspect-[4/3] relative overflow-hidden mb-12">
                            <div
                                className="flex h-full transition-transform duration-700 ease-in-out"
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {images.map((img, i) => (
                                    <div key={i} className="relative w-full h-full shrink-0 flex items-center justify-center">
                                        <div className="relative w-[80%] h-[80%]">
                                            <Image src={img} alt="Product view" fill className="object-contain" priority={i === 4} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-3">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    className={`w-1.5 h-1.5 rounded-full transition-all ${currentImageIndex === i ? "bg-[#1c1c1c]" : "bg-black/20 hover:bg-black/40"}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-col items-start max-w-[480px]">
                        <span className="text-[9px] tracking-[0.2em] text-black/40 uppercase mb-5">NEW</span>
                        <h3 className="text-[22px] tracking-[0.15em] text-[#1c1c1c] uppercase font-normal mb-4 leading-tight">LE CONTINENTAL CAMEL LIÉGÉ</h3>
                        <p className="text-[18px] text-black/65 font-sans mb-6 font-light tracking-wide">$200.00</p>

                        <div className="w-full h-px bg-black/10 mb-6" />

                        <p className="text-[13px] text-black/80 leading-relaxed font-cta mb-10 opacity-90">
                            Continental wallet in calfskin. Inside zip pocket for coins. 2 flat pockets for checks or bills. Leather lining. Heat embossed logo.
                        </p>

                        <div className="mb-10">
                            <p className="text-[14px] text-[#1c1c1c] mb-4 font-sans font-normal opacity-90">Color: Camel Liégé</p>
                            <div className="w-8 h-8 border border-[#1c1c1c] p-[2px]">
                                <div className="w-full h-full bg-[#B86B3E]" />
                            </div>
                        </div>

                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex items-center justify-between bg-[#f0f0f0] w-[140px] px-4 py-3">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-black/40 hover:text-black transition-colors"><Minus className="w-3.5 h-3.5" /></button>
                                <span className="text-[13px] font-normal text-[#1c1c1c] font-cta">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="text-black/40 hover:text-black transition-colors"><Plus className="w-3.5 h-3.5" /></button>
                            </div>

                            <AddToCartButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
