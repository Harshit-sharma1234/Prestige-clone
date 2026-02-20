"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function BeforeAfterSection() {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = clientX - rect.left;
        const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(pos);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isDragging) return;
        handleMove(e.clientX);
    }, [isDragging, handleMove]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isDragging) return;
        handleMove(e.touches[0].clientX);
    }, [isDragging, handleMove]);

    const handleEnd = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("mouseup", handleEnd);
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("touchend", handleEnd);
        } else {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleEnd);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleEnd);
        }
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleEnd);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchend", handleEnd);
        };
    }, [isDragging, handleMouseMove, handleTouchMove, handleEnd]);

    return (
        <section className="bg-[#efefef] py-20 px-6 md:px-[160px] font-sans">
            <div className="mx-auto max-w-[1440px]">
                <div className="text-center mb-12">
                    <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-black/60 mb-4">
                        LE DALIA
                    </p>
                    <h2 className="text-[28px] md:text-[36px] tracking-[0.15em] font-normal uppercase text-[#1c1c1c]">
                        CHOOSE YOUR COLOUR
                    </h2>
                </div>

                <div
                    ref={containerRef}
                    className="relative aspect-[16/9] w-full overflow-hidden cursor-ew-resize select-none"
                    onMouseDown={() => setIsDragging(true)}
                    onTouchStart={() => setIsDragging(true)}
                >
                    {/* Before Image (Left - Almond Green) */}
                    <div className="absolute inset-0">
                        <Image
                            src="/assets/Before_-_Desktop.webp"
                            alt="Almond Green Liégé"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* After Image (Right - Blue Denim) */}
                    <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ clipPath: `inset(0 0 0 ${sliderPos}%)` }}
                    >
                        <Image
                            src="/assets/After_-_Desktop_a6b79a4e-dcad-4761-9811-c1386231ae01.webp"
                            alt="Blue Denim Liégé"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Slider Line */}
                    <div
                        className="absolute top-0 bottom-0 w-[1px] bg-white z-20 pointer-events-none"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                            <div className="flex gap-0.5 text-black">
                                <ChevronLeft className="w-4 h-4" />
                                <ChevronRight className="w-4 h-4" />
                            </div>
                        </div>
                    </div>

                    {/* Labels */}
                    <div className="absolute bottom-10 left-10 md:left-20 z-10 pointer-events-none">
                        <p className="text-[12px] md:text-[14px] tracking-[0.1em] text-[#1c1c1c] uppercase mb-1 font-medium bg-white/20 backdrop-blur-sm px-2 py-1">
                            ALMOND GREEN LIÉGÉ
                        </p>
                        <Link
                            href="#"
                            className="text-[10px] md:text-[11px] text-[#1c1c1c] underline underline-offset-4 tracking-wider pointer-events-auto"
                        >
                            View product
                        </Link>
                    </div>

                    <div className="absolute bottom-10 right-10 md:right-20 z-10 text-right pointer-events-none">
                        <p className="text-[12px] md:text-[14px] tracking-[0.1em] text-[#1c1c1c] uppercase mb-1 font-medium bg-white/20 backdrop-blur-sm px-2 py-1">
                            BLUE DENIM LIÉGÉ
                        </p>
                        <Link
                            href="#"
                            className="text-[10px] md:text-[11px] text-[#1c1c1c] underline underline-offset-4 tracking-wider pointer-events-auto"
                        >
                            View product
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
