"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
    {
        label: "LE NOVA",
        title: "ELEGANT & TIMELESS",
        buttons: [{ text: "VIEW COLLECTION", href: "/collections/le-nova" }],
        background: { type: 'image', url: '/assets/hero-bag-2.png' }
    },
    {
        label: "NEW COLLECTION",
        title: "BEAUTIES",
        buttons: [
            { text: "WOMEN", href: "/collections/women" },
            { text: "MEN", href: "/collections/men" }
        ],
        background: { type: 'video', url: 'https://prestige-theme-allure.myshopify.com/cdn/shop/videos/c/vp/a9ea64c362124ba0b6ffc37ea30bc5c8/a9ea64c362124ba0b6ffc37ea30bc5c8.HD-1080p-4.8Mbps-13664080.mp4?v=0' }
    },
    {
        label: "LE SAC BAGUETTE",
        title: "INSPIRED BY THE 90S",
        buttons: [{ text: "SHOP NOW", href: "/collections/bags" }],
        background: { type: 'image', url: '/assets/hero-bag-1.png' }
    },
    {
        label: "LE MINI",
        title: "CHARTREUSE CHIC",
        buttons: [{ text: "SHOP NOW", href: "/collections/bags" }],
        background: { type: 'image', url: '/assets/hero-bag-3.png' }
    }
];

const SLIDE_DURATION = 3500; // Total time per slide including transition

export default function HeroSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let startTime = Date.now();
        const interval = setInterval(() => {
            const now = Date.now();
            const elapsed = now - startTime;

            // Calculate progress for the 3000ms visible phase
            const currentProgress = Math.min((elapsed / 3000) * 100, 100);
            setProgress(currentProgress);

            if (elapsed >= 3000 && !isTransitioning) {
                setIsTransitioning(true);
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % slides.length);
                    setIsTransitioning(false);
                    setProgress(0);
                    startTime = Date.now(); // Reset start time for next slide
                }, 600);
            }
        }, 30); // 30ms for smooth progress animation

        return () => clearInterval(interval);
    }, [currentIndex, isTransitioning]);

    const currentSlide = slides[currentIndex];

    return (
        <section className="relative h-screen w-full overflow-hidden bg-black">
            {/* Background Layer */}
            <div className="absolute inset-0">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {slide.background.type === 'video' ? (
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover"
                            >
                                <source src={slide.background.url} type="video/mp4" />
                            </video>
                        ) : (
                            <img
                                src={slide.background.url}
                                alt={slide.label}
                                className="h-full w-full object-cover"
                            />
                        )}
                        {/* Overlay for better readability */}
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                ))}
            </div>

            {/* Hero Content */}
            <div className="relative flex h-full flex-col items-center justify-center pt-24 text-center text-white px-6 md:px-12">
                <div
                    className={`transition-all duration-700 ease-in-out transform md:max-w-4xl p-8 md:p-12 ${currentSlide.label === "LE NOVA" ? "border border-white" : ""
                        } ${isTransitioning
                            ? "translate-y-12 opacity-0"
                            : "translate-y-0 opacity-100"
                        }`}
                >
                    <span className="mb-6 inline-block text-[12px] md:text-[14px] font-bold tracking-[0.4em] uppercase opacity-90 transition-all duration-700">
                        {currentSlide.label}
                    </span>
                    <h1 className="mb-12 text-[40px] md:text-[64px] font-medium tracking-[0.05em] uppercase leading-[1.1] md:leading-[1.1]">
                        {currentSlide.title.split(' & ').map((part, i, arr) => (
                            <span key={i}>
                                {part}
                                {i < arr.length - 1 && <><br className="hidden md:block" />& </>}
                            </span>
                        ))}
                    </h1>

                    <div className="flex w-full flex-row justify-center gap-4 md:gap-8">
                        {currentSlide.buttons.map((btn, i) => (
                            <Link
                                key={i}
                                href={btn.href}
                                className={`flex-1 md:flex-none max-w-[160px] md:min-w-[200px] px-4 md:px-12 py-4 text-[10px] md:text-[13px] uppercase tracking-[0.2em] transition-transform hover:scale-105 active:scale-95 ${btn.text === "MEN"
                                    ? "bg-[#1c1c1c] text-white hover:bg-black"
                                    : "bg-white text-black"
                                    }`}
                            >
                                {btn.text}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>


        </section>
    );
}
