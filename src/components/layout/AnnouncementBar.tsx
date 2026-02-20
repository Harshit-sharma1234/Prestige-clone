"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function AnnouncementBar() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Set a target date (e.g., 7 days from now)
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 7);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                return;
            }

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number) => num.toString().padStart(2, "0");

    return (
        <div className="w-full bg-[#1c1c1c] py-[16px] px-[20px] md:px-[48px] text-white selection:bg-white selection:text-primary-black font-cta">
            <div className="flex items-center justify-between font-sans text-[10px] md:text-[12px] uppercase tracking-[0.1em] md:tracking-[0.2em]">
                {/* Left Section - Promo Text */}
                <div className="flex items-center gap-2 md:gap-4 leading-[1.4]">
                    <span>Super Sale up<br className="md:hidden" /> to 40% off</span>
                    <Link href="/collections/all" className="hidden md:inline-flex underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity">
                        SHOP NOW
                    </Link>
                </div>

                {/* Right Section - Countdown Timer */}
                <div className="flex items-center gap-1 md:gap-3">
                    <div className="flex flex-col items-center min-w-[32px]">
                        <span className="text-[10px] md:text-[12px] font-bold leading-none">{formatNumber(timeLeft.days)}</span>
                        <span className="mt-1 text-[8px] md:text-[10px] tracking-[0.2em] opacity-70 uppercase">Day</span>
                    </div>
                    <span className="mb-3 text-[14px]">:</span>
                    <div className="flex flex-col items-center min-w-[32px]">
                        <span className="text-[10px] md:text-[12px] font-bold leading-none">{formatNumber(timeLeft.hours)}</span>
                        <span className="mt-1 text-[8px] md:text-[10px] tracking-[0.2em] opacity-70 uppercase">Hrs</span>
                    </div>
                    <span className="mb-3 text-[14px]">:</span>
                    <div className="flex flex-col items-center min-w-[32px]">
                        <span className="text-[10px] md:text-[12px] font-bold leading-none">{formatNumber(timeLeft.minutes)}</span>
                        <span className="mt-1 text-[8px] md:text-[10px] tracking-[0.2em] opacity-70 uppercase">Min</span>
                    </div>
                    <span className="mb-3 text-[14px] md:text-[18px]">:</span>
                    <div className="flex flex-col items-center min-w-[32px]">
                        <span className="text-[10px] md:text-[12px] font-bold leading-none">{formatNumber(timeLeft.seconds)}</span>
                        <span className="mt-1 text-[8px] md:text-[10px] tracking-[0.2em] opacity-70 uppercase">Sec</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
