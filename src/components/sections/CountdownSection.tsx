"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

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
        <section className="relative w-full h-[600px] md:h-[700px] font-nunito overflow-hidden">
            <Image
                src="/assets/Countdown_-_Desktop.webp"
                alt="Super Sale"
                fill
                className="object-cover"
            />
            {/* Subtle overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute inset-0 py-16 md:py-24">
                <div className="mx-auto w-full max-w-[1440px] h-full px-6 md:px-24 flex flex-col items-center md:items-center md:flex-row justify-center md:justify-between">

                    {/* Left Side: Text Content */}
                    <div className="w-full md:max-w-[600px] text-white text-center md:text-left flex flex-col items-center md:items-start mb-12 md:mb-0">
                        <p className="font-sans text-[12px] tracking-[0.2em] font-medium uppercase text-white">
                            LIMITED TIME ONLY
                        </p>
                        <h2 className="font-sans text-[32px] text-white mt-[20px] tracking-[0.1em] [word-spacing:0.15em] font-normal uppercase leading-tight">
                            SUPER SALE UP TO 40% <br /> OFF
                        </h2>
                        <p className="font-nunito text-[14px] text-white mt-[20px] font-light leading-relaxed md:max-w-[550px]">
                            Shop our selection of exclusive handbags and backpacks at reduced price during the Super Sale. Hurry up!
                        </p>
                        <CTAButton
                            text="SHOP NOW"
                            href="/collections/sale"
                            variant="dark"
                            animate={false}
                            className="bg-[#1c1c1c] text-white border-none mt-[32px] hover:opacity-80 transition-opacity"
                        />
                    </div>

                    {/* Right Side: Countdown Timer */}
                    <div className="flex items-start justify-center gap-1  text-white text-center mt-8 md:mt-0">
                        <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
                            <span className="text-[44px] md:text-[32px] font-normal leading-none mb-3">{formatNumber(timeLeft.days)}</span>
                            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/90">DAY</span>
                        </div>
                        <span className="text-[20px] md:text-[24px] font-light mt-2 md:mt-3 opacity-60">:</span>
                        <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
                            <span className="text-[44px] md:text-[32px] font-normal leading-none mb-3">{formatNumber(timeLeft.hours)}</span>
                            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/90">HOURS</span>
                        </div>
                        <span className="text-[20px] md:text-[24px] font-light mt-2 md:mt-3 opacity-60">:</span>
                        <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
                            <span className="text-[44px] md:text-[32px] font-normal leading-none mb-3">{formatNumber(timeLeft.minutes)}</span>
                            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/90">MIN</span>
                        </div>
                        <span className="text-[20px] md:text-[24px] font-light mt-2 md:mt-3 opacity-60">:</span>
                        <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
                            <span className="text-[32px] md:text-32px] font-normal leading-none mb-3">{formatNumber(timeLeft.seconds)}</span>
                            <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/90">SEC</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
