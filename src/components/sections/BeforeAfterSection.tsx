"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import CTAButton from "@/components/ui/CTAButton";
import { ChevronLeft, ChevronRight } from "lucide-react";



export default function BeforeAfterSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);

    const updatePosition = (clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        let newPos = ((clientX - rect.left) / rect.width) * 100;
        newPos = Math.max(0, Math.min(100, newPos));
        setPosition(newPos);
    };

    useEffect(() => {
        const handleMove = (e: MouseEvent | TouchEvent) => {
            if (!isDragging) return;
            const clientX = 'touches' in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
            updatePosition(clientX);
        };

        const stopDragging = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener("mousemove", handleMove);
            window.addEventListener("mouseup", stopDragging);
            window.addEventListener("touchmove", handleMove);
            window.addEventListener("touchend", stopDragging);
        }

        return () => {
            window.removeEventListener("mousemove", handleMove);
            window.removeEventListener("mouseup", stopDragging);
            window.removeEventListener("touchmove", handleMove);
            window.removeEventListener("touchend", stopDragging);
        };
    }, [isDragging]);

    return (
        <section className="bg-[#efefef] pb-20 px-6 font-sans">
            <div className="mx-auto max-w-[1440px]">
                <div className="text-center mb-12">
                    <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-black/60 mb-4">LE DALIA</p>
                    <h2 className="text-[28px] md:text-[28px] tracking-[0.15em] font-normal uppercase text-[#1c1c1c]">CHOOSE YOUR COLOUR</h2>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full max-w-[1260px] aspect-[2/1] mx-auto overflow-hidden select-none bg-white"
                    onMouseDown={(e) => {
                        setIsDragging(true);
                        updatePosition(e.clientX);
                    }}
                    onTouchStart={(e) => {
                        setIsDragging(true);
                        updatePosition(e.touches[0].clientX);
                    }}
                >
                    {/* After Image (base) */}
                    <Image
                        src="/assets/After_-_Desktop_a6b79a4e-dcad-4761-9811-c1386231ae01.webp"
                        alt="after"
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Before Image (clipped via width) */}
                    <div
                        className="absolute inset-0 overflow-hidden z-10"
                        style={{ width: `${position}%` }}
                    >
                        <div className="relative w-[1260px] h-full" style={{ width: containerRef.current?.offsetWidth || '1260px' }}>
                            <Image
                                src="/assets/Before_-_Desktop.webp"
                                alt="before"
                                fill
                                className="object-cover"
                                priority
                            />
                            {/* Product Label (Left) - Inside clipped container */}
                            <div className="absolute bottom-8 left-8 pointer-events-none whitespace-nowrap">
                                <p className="text-[12px] tracking-[0.1em] text-[#1c1c1c] uppercase mb-1">ALMOND GREEN LIÉGÉ</p>
                                <Link href="#" className="pointer-events-auto text-[11px] text-[#1c1c1c] border-b border-[#1c1c1c] pb-0.5 hover:opacity-60 transition-opacity">
                                    View product
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* After Image (base) - Product label here will be covered by z-10 layer above */}
                    <div className="absolute bottom-8 right-8 z-0 text-right pointer-events-none">
                        <p className="text-[12px] tracking-[0.1em] text-[#1c1c1c] uppercase mb-1">BLUE DENIM LIÉGÉ</p>
                        <Link href="#" className="pointer-events-auto text-[11px] text-[#1c1c1c] border-b border-[#1c1c1c] pb-0.5 hover:opacity-60 transition-opacity">
                            View product
                        </Link>
                    </div>

                    {/* Divider Line */}
                    <div
                        className="absolute top-0 bottom-0 w-[2px] bg-white z-20"
                        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
                    />

                    {/* Handle */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2
                                   w-10 h-10 rounded-full bg-white
                                   flex items-center justify-center cursor-ew-resize
                                   z-30"
                        style={{ left: `${position}%` }}
                        role="slider"
                        aria-valuenow={Math.round(position)}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Color comparison slider"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'ArrowLeft') setPosition(prev => Math.max(0, prev - 2));
                            if (e.key === 'ArrowRight') setPosition(prev => Math.min(100, prev + 2));
                        }}
                    >
                        <div className="flex gap-0.5 text-[#1c1c1c]">
                            <ChevronLeft className="w-3.5 h-3.5" strokeWidth={2.5} />
                            <ChevronRight className="w-3.5 h-3.5" strokeWidth={2.5} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
