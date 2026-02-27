"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

export type CarouselProduct = {
    id: number;
    name: string;
    price: string;
    image: string;
    imageHover?: string;
    badge?: string;
};

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.215, 0.61, 0.355, 1]
        }
    }
};

export default function ProductCarousel({ products }: { products: CarouselProduct[] }) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(containerRef, { once: true, amount: 0.2 });

    const scroll = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (el) el.scrollBy({ left: dir === "left" ? -el.clientWidth * 0.8 : el.clientWidth * 0.8, behavior: "smooth" });
    };

    return (
        <div ref={containerRef} className="relative w-full">
            {/* Nav arrows — appear on section hover via parent group/section */}
            <button onClick={() => scroll("left")} aria-label="Scroll left" className="absolute left-[60px]  top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-black/15 shadow-sm flex items-center justify-center text-black/50 hover:text-black hover:border-black/30 transition-all opacity-0 group-hover/section:opacity-100"><ChevronLeft className="w-4 h-4" /></button>
            <button onClick={() => scroll("right")} aria-label="Scroll right" className="absolute right-[60px] top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-black/15 shadow-sm flex items-center justify-center text-black/50 hover:text-black hover:border-black/30 transition-all opacity-0 group-hover/section:opacity-100"><ChevronRight className="w-4 h-4" /></button>

            <motion.div
                ref={scrollRef}
                className="flex gap-16 overflow-x-auto scrollbar-hide snap-x snap-proximity pb-4 pl-[20px]"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >
                {products.map(product => (
                    <motion.div
                        key={product.id}
                        variants={itemVariants}
                        className="flex-shrink-0 group/card cursor-pointer snap-start"
                    >
                        <div className="relative w-[358px] h-[358px] mb-6 overflow-hidden">
                            {product.badge && (
                                <span className="absolute top-4 left-4 z-10 text-[11px] font-normal tracking-[0.1em] uppercase text-black/65 bg-[#efefef] px-[5px] py-[1px]">
                                    {product.badge}
                                </span>
                            )}
                            <Image src={product.image} alt={product.name} fill className="object-contain transition-opacity duration-150 group-hover/card:opacity-0" />
                            {product.imageHover && (
                                <Image src={product.imageHover} alt={`${product.name} back`} fill className="object-contain transition-opacity duration-150 opacity-0 group-hover/card:opacity-100" />
                            )}
                            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 right-4 w-10 h-10 flex items-center justify-center bg-white shadow-sm transition-transform duration-300">
                                    <Plus className="w-5 h-5 text-black/60 transition-transform duration-300 hover:rotate-90 hover:text-black" />
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h3 className="text-[12px] tracking-[0.1em] uppercase mb-2 text-black">{product.name}</h3>
                            <p className="text-[12px] text-black/60 tracking-[0.1em]">{product.price}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
