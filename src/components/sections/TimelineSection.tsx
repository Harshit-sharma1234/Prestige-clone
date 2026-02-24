"use client";

import { useState } from "react";
import Image from "next/image";
import { timelineData } from "@/lib/data";

export default function TimelineSection() {
    const [activeIndex, setActiveIndex] = useState(0);

    const activeItem = timelineData[activeIndex];

    return (
        <section className="bg-[#efefef] py-24 font-sans border-t border-black/5">
            <div className="max-w-[1200px] mx-auto px-6">

                {/* Content Container */}
                <div className="flex flex-col md:flex-row items-center justify-end">

                    {/* Left: Image Crossfade */}
                    <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-[500px] relative shrink-0 bg-[#f0f0f0]">
                        {timelineData.map((item, idx) => (
                            <Image
                                key={item.year}
                                src={item.image}
                                alt={item.title}
                                fill
                                className={`object-cover transition-opacity duration-700 ease-in-out ${activeIndex === idx ? "opacity-100 z-10" : "opacity-0 z-0"
                                    }`}
                                priority={idx === 0}
                            />
                        ))}
                    </div>

                    {/* Right: Text Container */}
                    <div className="w-full md:w-1/2 md:h-[500px] flex flex-col justify-end bg-[#ffffff] p-12">
                        <div className="w-full">
                            {/* We use a key on the container to trigger a subtle fade-in animation when content changes */}
                            <div key={activeItem.year} className="animate-in fade-in duration-700">
                                <h6 className="text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-[#1c1c1c]">
                                    {activeItem.subtitle}
                                </h6>
                                <h2 className="text-[24px] md:text-[28px] tracking-[0.15em] font-normal uppercase text-[#1c1c1c] mt-[20px]">
                                    {activeItem.title}
                                </h2>
                                <p className="text-[14px] text-[#1c1c1c] leading-relaxed mt-[20px]">
                                    {activeItem.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom: Timeline Navigation */}
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mt-[64px]">
                    {timelineData.map((item, idx) => (
                        <button
                            key={item.year}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`Year ${item.year}: ${item.title}`}
                            aria-current={activeIndex === idx ? "step" : undefined}
                            className={`tracking-[0.15em] pb-2 transition-all duration-300 border-b-2 ${activeIndex === idx
                                ? "text-[18px] text-[#1c1c1c] border-[#1c1c1c] font-medium"
                                : "text-[13px] text-black/50 border-transparent hover:text-black"
                                }`}
                        >
                            {item.year}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
