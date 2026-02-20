"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CountdownSection() {
    const [timeLeft, setTimeLeft] = useState({
        days: 99,
        hours: 19,
        minutes: 25,
        seconds: 8
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <section className="relative w-full h-[600px] md:h-[700px] font-sans overflow-hidden">
            <Image
                src="/assets/Countdown_-_Desktop.webp"
                alt="Super Sale"
                fill
                className="object-cover"
            />
            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/10" />

            <div className="absolute inset-0 py-16 md:py-24">
                <div className="mx-auto w-full max-w-[1440px] h-full px-6 md:px-24 flex flex-col items-center md:items-center md:flex-row justify-center md:justify-between">

                    {/* Left Side: Text Content */}
                    <div className="w-full md:max-w-[500px] text-white text-center md:text-left flex flex-col items-center md:items-start mb-12 md:mb-0">
                        <p className="text-[10px] md:text-[11px] tracking-[0.2em] font-medium uppercase mb-4 text-white/90">
                            LIMITED TIME ONLY
                        </p>
                        <h2 className="text-[32px] md:text-[44px] tracking-[0.1em] font-normal uppercase mb-6 leading-tight max-w-[400px]">
                            SUPER SALE UP TO 40% OFF
                        </h2>
                        <p className="text-[14px] md:text-[14px] font-light text-white/90 mb-10 leading-relaxed md:max-w-[450px]">
                            Shop our selection of exclusive handbags and backpacks at reduced price during the Super Sale. Hurry up!
                        </p>
                        <Link
                            href="/collections/sale"
                            className="bg-white text-[#1c1c1c] text-[12px] tracking-[0.2em] uppercase py-[16px] px-10 transition-colors hover:bg-black hover:text-white font-medium"
                        >
                            SHOP NOW
                        </Link>
                    </div>

                    {/* Right Side: Countdown Timer */}
                    <div className="flex items-start md:items-center gap-2 md:gap-4 text-white text-center">
                        <div className="flex flex-col items-center min-w-[70px]">
                            <span className="text-[40px] md:text-[56px] font-normal leading-none mb-3">{formatNumber(timeLeft.days)}</span>
                            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/90">DAY</span>
                        </div>
                        <span className="text-[30px] md:text-[40px] font-thin opacity-50 mt-1 md:mt-2">:</span>
                        <div className="flex flex-col items-center min-w-[70px]">
                            <span className="text-[40px] md:text-[56px] font-normal leading-none mb-3">{formatNumber(timeLeft.hours)}</span>
                            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/90">HOURS</span>
                        </div>
                        <span className="text-[30px] md:text-[40px] font-thin opacity-50 mt-1 md:mt-2">:</span>
                        <div className="flex flex-col items-center min-w-[70px]">
                            <span className="text-[40px] md:text-[56px] font-normal leading-none mb-3">{formatNumber(timeLeft.minutes)}</span>
                            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/90">MIN</span>
                        </div>
                        <span className="text-[30px] md:text-[40px] font-thin opacity-50 mt-1 md:mt-2">:</span>
                        <div className="flex flex-col items-center min-w-[70px]">
                            <span className="text-[40px] md:text-[56px] font-normal leading-none mb-3">{formatNumber(timeLeft.seconds)}</span>
                            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/90">SEC</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
