"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function OurSelection() {
    const [quantity, setQuantity] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(4); // Start on the open wallet shot

    // Using the newly uploaded darkpeach assets based on the user screenshot
    const images = [
        "/assets/darkpeach-1.webp",
        "/assets/dark-peachbag2.webp",
        "/assets/darkpeach-3.webp",
        "/assets/darkpeach-4.webp",
        "/assets/darkpeach-5.webp",
    ];

    // We'll use the 5th image (the open wallet shot from the user's reference)
    const displayImage = "/assets/darkpeach-5.webp";

    return (
        <section className="bg-[#efefef] py-24 font-sans border-t border-black/10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-[120px]">
                {/* Header */}
                <div className="text-center mb-16">
                    <h6 className="text-[10px] tracking-[0.2em] uppercase text-black/60 mb-4 font-medium">
                        OUR SELECTION
                    </h6>
                    <h2 className="text-[24px] md:text-[28px] tracking-[0.15em] font-normal uppercase text-[#1c1c1c]">
                        PRODUCT OF THE WEEK
                    </h2>
                </div>

                {/* Content Split */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-center md:items-start">

                    {/* Left: Image Carousel */}
                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <div className="w-full aspect-square relative bg-[#f5f5f5] overflow-hidden mb-6">
                            <div
                                className="w-full h-full flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                            >
                                {images.map((img, i) => (
                                    <div key={i} className="relative w-full h-full shrink-0">
                                        <Image
                                            src={img}
                                            alt={`Le Continental Camel Liégé preview ${i + 1}`}
                                            fill
                                            className="object-cover"
                                            priority={i === 4}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Dot Indicators */}
                        <div className="flex gap-4">
                            {images.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentImageIndex(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={`w-2.5 h-2.5 rounded-full transition-colors ${currentImageIndex === i ? "bg-[#1c1c1c]" : "bg-black/20 hover:bg-black/40"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right: Product Details */}
                    <div className="w-full md:w-1/2 flex flex-col pt-8">
                        <span className="text-[9px] tracking-[0.2em] text-black/50 uppercase mb-4">
                            NEW
                        </span>

                        <h3 className="text-[20px] md:text-[22px] tracking-[0.15em] text-[#1c1c1c] uppercase font-normal mb-4">
                            LE CONTINENTAL CAMEL LIÉGÉ
                        </h3>

                        <p className="text-[14px] text-black/60 tracking-widest mb-8">
                            $200.00
                        </p>

                        <div className="w-full h-[1px] bg-black/10 mb-8" />

                        <p className="text-[13px] text-black/60 leading-relaxed max-w-[450px] mb-8">
                            Continental wallet in calfskin. Inside zip pocket for coins. 2 flat pockets for checks or bills. Leather lining. Heat embossed logo.
                        </p>

                        {/* Color Selection */}
                        <div className="mb-8">
                            <p className="text-[12px] text-[#1c1c1c] mb-3">Color: Camel Liégé</p>
                            <button className="w-8 h-8 rounded-none border border-black p-[2px] flex items-center justify-center">
                                <span className="w-full h-full bg-[#B86B3E] block" />
                            </button>
                        </div>

                        {/* Actions Row */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[500px]">
                            {/* Quantity Selector */}
                            <div className="flex items-center justify-between border border-black/20 w-full sm:w-[140px] px-4 py-4 shrink-0 bg-transparent">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="text-black/40 hover:text-black transition-colors"
                                >
                                    <Minus className="w-4 h-4" />
                                </button>
                                <span className="text-[13px] text-[#1c1c1c] font-medium">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="text-black/40 hover:text-black transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                </button>
                            </div>

                            {/* Add to Cart */}
                            <button className="flex-1 bg-[#1c1c1c] hover:bg-black text-white text-[11px] tracking-[0.2em] uppercase transition-colors py-4">
                                ADD TO CART
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
