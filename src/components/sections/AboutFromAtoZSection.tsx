"use client";

import Image from "next/image";

const aboutData = [
    {
        title: "THE DESIGN",
        description: "At Léo et Violette, we create our bags with you in mind. All our products are imagined and designed in Paris, in our offices on rue Sainte-Anne.",
        image: "/assets/atoz-1.webp",
    },
    {
        title: "MATERIALS",
        description: "Our leathers come exclusively from hides recovered from the food industry. We work exclusively with tanneries in Italy, France and Spain.",
        image: "/assets/atoz2.webp",
    },
    {
        title: "THE KNOW-HOW",
        description: "Each step of the manufacturing process is carried out according to the strict specifications of the leatherworker's craft.",
        image: "/assets/atoz3.webp",
    }
];

export default function AboutFromAtoZSection() {
    return (
        <section className="bg-[#efefef] py-24 md:py-32 font-sans border-t border-black/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">

                {/* Header Sub & Title */}
                <div className="text-center mb-16 md:mb-20">
                    <h6 className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-black/50 mb-4 font-medium">
                        ABOUT US
                    </h6>
                    <h2 className="text-[24px] md:text-[28px] tracking-[0.15em] font-normal uppercase text-[#1c1c1c]">
                        FROM A TO Z
                    </h2>
                </div>

                {/* Grid */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-20 justify-center items-start overflow-x-auto md:overflow-visible pb-8 md:pb-0">
                    {aboutData.map((item, index) => (
                        <div key={index} className="flex flex-col text-center items-center group shrink-0 w-full md:w-[491px]">
                            {/* Image Container */}
                            <div className="w-full h-[736px] relative mb-10 overflow-hidden bg-[#f5f5f5] shadow-sm">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                                    priority={index === 0}
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-[18px] tracking-[0.2em] uppercase text-[#1c1c1c] mb-5 font-normal">
                                {item.title}
                            </h3>

                            <p className="text-[14px] text-[#1c1c1c] leading-relaxed w-full font-light font-nunito">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
