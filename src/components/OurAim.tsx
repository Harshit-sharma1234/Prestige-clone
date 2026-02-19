import Link from "next/link";
import Image from "next/image";

export default function OurAim() {
    return (
        <section className="bg-[#efefef] py-16 md:py-20 px-[20px] md:px-[48px] font-sans">
            <div className="mx-auto max-w-[1200px]">
                {/* Top Content - Icon + Heading + Links */}
                <div className="flex flex-col items-center text-center mb-12 md:mb-14">
                    {/* Bag Icon */}
                    <div className="mb-6">
                        <Image
                            src="/assets/bag-ourAim.avif"
                            alt="Bag icon"
                            width={56}
                            height={56}
                            className="opacity-40"
                        />
                    </div>

                    {/* Heading */}
                    <h2 className="text-[20px] md:text-[28px] font-medium tracking-[0.12em] uppercase text-[#1c1c1c] leading-[1.35] max-w-[520px] mb-6">
                        OUR AIM: OFFER ELEGANT, TIMELESS & FUNCTIONAL PRODUCTS
                    </h2>

                    {/* Links */}
                    <div className="flex items-center gap-4 text-[12px] tracking-[0.05em]">
                        <Link
                            href="/our-story"
                            className="underline underline-offset-4 decoration-1 text-[#1c1c1c] hover:opacity-60 transition-opacity"
                        >
                            Our story
                        </Link>
                        <span className="text-[#1c1c1c]/30">|</span>
                        <Link
                            href="/commitments"
                            className="underline underline-offset-4 decoration-1 text-[#1c1c1c] hover:opacity-60 transition-opacity"
                        >
                            Commitments
                        </Link>
                    </div>
                </div>

                {/* Image Grid - Asymmetric 2 column layout */}
                <div className="flex flex-col md:flex-row gap-3 md:gap-4">
                    {/* Left - Women (larger, ~60% width) */}
                    <Link
                        href="/collections/women"
                        className="relative w-full md:w-[60%] h-[420px] md:h-[520px] overflow-hidden rounded-[4px] group"
                    >
                        <Image
                            src="/assets/women-our-aim.webp"
                            alt="Women collection"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500" />
                        <span className="absolute inset-0 flex items-center justify-center text-white text-[15px] md:text-[17px] tracking-[0.25em] uppercase font-medium">
                            WOMEN
                        </span>
                    </Link>

                    {/* Right Column - Men + Accessories stacked */}
                    <div className="flex flex-col gap-3 md:gap-4 w-full md:w-[40%]">
                        {/* Top Right - Men */}
                        <Link
                            href="/collections/men"
                            className="relative w-full h-[250px] md:flex-1 overflow-hidden rounded-[4px] group"
                        >
                            <Image
                                src="/assets/men-our-aim.webp"
                                alt="Men collection"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-[14px] md:text-[15px] tracking-[0.25em] uppercase font-medium">
                                MEN
                            </span>
                        </Link>

                        {/* Bottom Right - Accessories */}
                        <Link
                            href="/collections/accessories"
                            className="relative w-full h-[250px] md:flex-1 overflow-hidden rounded-[4px] group"
                        >
                            <Image
                                src="/assets/accesories-ouraim.webp"
                                alt="Accessories"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500" />
                            <span className="absolute inset-0 flex items-center justify-center text-white text-[14px] md:text-[15px] tracking-[0.25em] uppercase font-medium">
                                ACCESSORIES
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
