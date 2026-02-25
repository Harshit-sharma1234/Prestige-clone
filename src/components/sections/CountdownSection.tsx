"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

const formatNumber = (num: number) => num.toString().padStart(2, '0');

const TimeUnit = ({ value, label }: { value: number, label: string }) => (
    <div className="flex flex-col items-center min-w-[60px] md:min-w-[80px]">
        <span className="text-[44px] md:text-[32px] font-normal leading-none mb-3">{formatNumber(value)}</span>
        <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white/90">{label}</span>
    </div>
);

const Colon = () => <span className="text-[20px] md:text-[24px] font-light mt-2 md:mt-3 opacity-60">:</span>;

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
                const totalSeconds = prev.days * 86400 + prev.hours * 3600 + prev.minutes * 60 + prev.seconds;
                if (totalSeconds <= 0) return prev;

                const nextTotal = totalSeconds - 1;
                return {
                    days: Math.floor(nextTotal / 86400),
                    hours: Math.floor((nextTotal % 86400) / 3600),
                    minutes: Math.floor((nextTotal % 3600) / 60),
                    seconds: nextTotal % 60
                };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

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
                            variant="light"
                            className="mt-[32px]"
                        />
                    </div>

                    {/* Right Side: Countdown Timer */}
                    <div className="flex items-start justify-center gap-1 text-white text-center mt-8 md:mt-0">
                        <TimeUnit value={timeLeft.days} label="DAY" />
                        <Colon />
                        <TimeUnit value={timeLeft.hours} label="HOURS" />
                        <Colon />
                        <TimeUnit value={timeLeft.minutes} label="MIN" />
                        <Colon />
                        <TimeUnit value={timeLeft.seconds} label="SEC" />
                    </div>

                </div>
            </div>
        </section>
    );
}
