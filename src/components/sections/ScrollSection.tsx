"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const steps = [
    {
        id: 1,
        step: "# 1",
        title: "THE DESIGN",
        description: "At Léo et Violette, we create our bags with you in mind. All our products are imagined and designed in Paris, in our offices on rue Sainte-Anne. Most of the time, an idea for a model comes from a need that you have expressed to us through the various feedbacks we collect throughout the year.",
        image: "/assets/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.webp",
        link: "/pages/design"
    },
    {
        id: 2,
        step: "# 2",
        title: "OUR COMMITMENTS",
        description: "At Léo et Violette, from day one we have made responsibility part of our values. Towards you, and also towards the environment through the way we produce our collections. From design to distribution, we take the greatest care with our products, which reflect our values: timeless, quality, at the right price.",
        image: "/assets/Images_with_text_scroll_-_Image_-_home_2.webp",
        link: "/pages/commitments"
    }
];

export default function ScrollSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Update active index based on scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest: number) => {
            if (latest < 0.5) {
                if (activeIndex !== 0) setActiveIndex(0);
            } else {
                if (activeIndex !== 1) setActiveIndex(1);
            }
        });
        return () => unsubscribe();
    }, [scrollYProgress, activeIndex]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-[#efefef]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/assets/Images_with_text_scroll_-_Background_image_-_Desktop_-_home.webp"
                        alt="Background"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 md:px-[160px] flex flex-col md:flex-row items-center gap-12 md:gap-24">

                    {/* Floating Image */}
                    <div className="relative w-full md:w-[500px] h-[400px] md:h-[550px] shrink-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="relative w-full h-full shadow-2xl"
                            >
                                <Image
                                    src={steps[activeIndex].image}
                                    alt={steps[activeIndex].title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Text Content */}
                    <div className="w-full md:w-[400px] text-center text-white">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase mb-4 opacity-80">
                                    {steps[activeIndex].step}
                                </p>
                                <h2 className="text-[28px] md:text-[32px] font-normal tracking-[0.15em] uppercase mb-8 leading-tight">
                                    {steps[activeIndex].title}
                                </h2>
                                <p className="text-[14px] md:text-[14px] font-light leading-relaxed mb-8 opacity-90">
                                    {steps[activeIndex].description}
                                </p>
                                <Link
                                    href={steps[activeIndex].link}
                                    className="inline-block text-[11px] tracking-[0.2em] uppercase font-medium border-b border-white pb-1 hover:opacity-70 transition-opacity"
                                >
                                    Learn more
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
}
