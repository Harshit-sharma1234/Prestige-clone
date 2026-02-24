"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { slides } from "@/lib/data";

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
        <section className="relative h-screen w-full bg-black">
            {/* Background Layer */}
            <div className="absolute inset-0 overflow-hidden">
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
                    <h1 style={{ wordSpacing: "10px" }} className="mb-12 text-[28px] md:text-[28px] font-normal tracking-[0.6em] uppercase leading-[1.1] md:leading-[1.1]">
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
                                className={`group relative flex-1 md:flex-none max-w-[160px] md:min-w-[200px] px-[28.4px] py-[10px] text-[13px] font-cta uppercase tracking-[0.2em] overflow-hidden border transition-colors duration-300 ease-in whitespace-nowrap hover:text-white ${btn.text === "MEN"
                                    ? "text-white border-transparent hover:border-black"
                                    : "text-black border-white"
                                    }`}
                            >
                                <span className={`absolute inset-0 w-full h-full transition-transform duration-300 ease-in group-hover:translate-x-full ${btn.text === "MEN" ? "bg-[#1c1c1c]" : "bg-white"}`}></span>
                                <span className="relative z-10">{btn.text}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Scroll Down Button */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-[100]">
                <button
                    onClick={() => {
                        const hero = document.querySelector("#best-sellers") ?? document.querySelector("section + section");
                        hero?.scrollIntoView({ behavior: "smooth" });
                    }}
                    aria-label="Scroll down"
                    className="w-[50px] h-[50px] rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 7L10 13L16 7" stroke="#1c1c1c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

        </section>
    );
}
