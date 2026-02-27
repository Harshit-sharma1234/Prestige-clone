"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import { timelineData } from "@/lib/data";

const cubicEase = [0.25, 0.46, 0.45, 0.94] as const;

export default function TimelineSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeItem = timelineData[activeIndex];

    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Parallax: image moves slightly slower than scroll
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

    // Staggered container for initial entry
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.1 },
        },
    };

    const fadeUpItem = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: cubicEase },
        },
    };

    return (
        <section ref={sectionRef} className="bg-[#efefef] py-24 font-sans border-t border-black/5">
            <motion.div
                className="max-w-[1200px] mx-auto px-6"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
            >

                {/* Content Container */}
                <div className="flex flex-col md:flex-row items-center justify-end">

                    {/* Left: Image with crossfade + zoom + parallax */}
                    <motion.div
                        className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto md:h-[500px] relative shrink-0 bg-[#f0f0f0] overflow-hidden"
                        variants={fadeUpItem}
                    >
                        <motion.div className="absolute inset-0" style={{ y: imageY }}>
                            <AnimatePresence mode="popLayout">
                                <motion.div
                                    key={activeItem.year}
                                    initial={{ opacity: 0, scale: 1.08 }}
                                    animate={{ opacity: 1, scale: 1.05 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: cubicEase }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={activeItem.image}
                                        alt={activeItem.title}
                                        fill
                                        className="object-cover object-center w-full h-full"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </motion.div>

                    {/* Right: Text Container */}
                    <motion.div
                        className="w-full md:w-1/2 md:h-[500px] flex flex-col justify-end bg-[#ffffff] p-12"
                        variants={fadeUpItem}
                    >
                        <div className="w-full">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeItem.year}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5, ease: cubicEase }}
                                >
                                    <h6 className="text-[10px] md:text-[12px] tracking-[0.2em] uppercase text-[#1c1c1c]">
                                        {activeItem.subtitle}
                                    </h6>
                                    <h2 className="text-[24px] md:text-[28px] tracking-[0.15em] font-normal uppercase text-[#1c1c1c] mt-[20px]">
                                        {activeItem.title}
                                    </h2>
                                    <p className="text-[14px] text-[#1c1c1c] leading-relaxed mt-[20px]">
                                        {activeItem.description}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom: Timeline Navigation */}
                <motion.div
                    className="flex flex-wrap items-center justify-center gap-8 md:gap-14 mt-[64px]"
                    variants={fadeUpItem}
                >
                    {timelineData.map((item, idx) => (
                        <motion.button
                            key={item.year}
                            onClick={() => setActiveIndex(idx)}
                            aria-label={`Year ${item.year}: ${item.title}`}
                            aria-current={activeIndex === idx ? "step" : undefined}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.2 }}
                            className={`tracking-[0.15em] pb-2 transition-all duration-300 border-b-2 ${activeIndex === idx
                                ? "text-[18px] text-[#1c1c1c] border-[#1c1c1c] font-medium"
                                : "text-[13px] text-black/50 border-transparent hover:text-black"
                                }`}
                        >
                            {item.year}
                        </motion.button>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
