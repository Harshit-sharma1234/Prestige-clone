"use client";

import { useState } from "react";
import Image from "next/image";

const timelineData = [
    {
        year: "2013",
        subtitle: "FIRST PRODUCT",
        title: "LE PETIT CARTABLE",
        description: "Leo et Violette's story is ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our life for more than 8 years. Ever since we met, we always had the dream to develop a project together. By creating Le petit cartable in January 2013, we started to realize this dream. Our first Kickstarter campaign is launched!",
        image: "/assets/timeline-1.webp",
    },
    {
        year: "2014",
        subtitle: "OUR VISION",
        title: "TRANSPARENCY",
        description: "No intermediaries and no wholesalers. So no excessive margins. It's just between you and us. And this is what allows us to offer you a quality product at an affordable price. Welcome to the fashion of the 21st century.",
        image: "/assets/timeline-2.webp",
    },
    {
        year: "2015",
        subtitle: "NEW FACTORY",
        title: "RELATIONSHIP",
        description: "Our workshop is located next to Naples, Italy. It was founded in the early 1980s by Dino Levorino, a craftsman well known for his know-how. The workshop was taken over by his son Gennaro, with whom we talk every day, about the production and the design of new models. More than just a factory, they are real partners who have shared Leo et Violette's vision.",
        image: "/assets/timeline-3.webp",
    },
    {
        year: "2017",
        subtitle: "OPENING",
        title: "OUR FLAGSHIP",
        description: "Our first Léo et Violette location, right in the heart of Paris. The perfect place to discover and buy the collection. Open Monday to Saturday + Sunday in December.",
        image: "/assets/timeline-4.webp",
    },
    {
        year: "2020",
        subtitle: "NEW IDEA",
        title: "SMALL LEATHER GOODS",
        description: "With the success of our bags we wanted to go further by offering small leather goods: wallets, card holders and pouches.",
        image: "/assets/Timeline-5.webp",
    },
    {
        year: "2021",
        subtitle: "FIRST COLLABORATION",
        title: "LÉO ET VIOLETTE X WENDY SWAN",
        description: "The meeting between Wendy and Léo et Violette gave birth to our new bag: The Dalia. Every detail, from the choice of leather quality to the metal parts, has been carefully thought out.",
        image: "/assets/timeline-6.webp",
    }
];

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
