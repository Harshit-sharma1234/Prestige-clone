"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
    {
        id: 1,
        step: "# 1",
        title: "THE DESIGN",
        description: "At Léo et Violette, we create our bags with you in mind. All our products are imagined and designed in Paris, in our offices on rue Sainte-Anne. Most of the time, an idea for a model comes from a need that you have expressed to us through the various feedbacks we collect throughout the year.",
        image: "/assets/commitments_first.webp",
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
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Content 1 Animation: Text scrolls UPWARDS and out (Tightened)
    const textY1 = useTransform(scrollYProgress, [0, 0.4], ["0%", "-160%"]);
    const textOpacity1 = useTransform(scrollYProgress, [0, 0.35, 0.4], [1, 1, 0]);
    const imgOpacity1 = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 0]);
    const imgScale1 = useTransform(scrollYProgress, [0, 0.35, 0.45], [1, 1, 1.1]);

    // Content 2 Animation: Text enters from BOTTOM (No gap)
    const textY2 = useTransform(scrollYProgress, [0.4, 0.7], ["160%", "0%"]);
    const textOpacity2 = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 1, 1]);
    const imgOpacity2 = useTransform(scrollYProgress, [0.4, 0.5, 1], [0, 1, 1]);
    const imgScale2 = useTransform(scrollYProgress, [0.4, 0.5, 1], [0.9, 1, 1]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-[#efefef]">
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0">
                    <Image
                        src="/assets/Images_with_text_scroll_-_Background_image_-_Desktop_-_home.webp"
                        alt="Background"
                        fill
                        className="object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                <div className="relative z-10 mx-auto max-w-[1440px] w-full px-6 md:px-[160px] flex flex-col md:flex-row items-center gap-12 md:gap-24 h-full">

                    {/* Image Column */}
                    <div className="relative w-full md:w-[500px] h-[400px] md:h-[550px] shrink-0">
                        {steps.map((step, i) => (
                            <motion.div
                                key={`img-${step.id}`}
                                style={{
                                    opacity: i === 0 ? imgOpacity1 : imgOpacity2,
                                    scale: i === 0 ? imgScale1 : imgScale2
                                }}
                                className="absolute inset-0 shadow-2xl overflow-hidden"
                            >
                                <Image src={step.image} alt={step.title} fill className="object-cover" priority />
                            </motion.div>
                        ))}
                    </div>

                    {/* Text Column */}
                    <div className="relative w-full md:w-[450px] h-full flex items-center justify-center text-white">
                        {steps.map((step, i) => (
                            <motion.div
                                key={`text-${step.id}`}
                                style={{
                                    opacity: i === 0 ? textOpacity1 : textOpacity2,
                                    y: i === 0 ? textY1 : textY2
                                }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
                            >
                                <p className="text-[10px] md:text-[12px] font-medium tracking-[0.2em] uppercase mb-4 opacity-80">{step.step}</p>
                                <h2 className="text-[28px] md:text-[22px] font-normal tracking-[0.15em] uppercase leading-tight mt-[5]">{step.title}</h2>
                                <p className="text-[14px] md:text-[14px] font-light font-cta leading-relaxed mb-5 max-w-[380px] mt-5">{step.description}</p>
                                <Link href={step.link} className="inline-block text-[14px] font-cta border-b border-white pb-1 hover:opacity-70 transition-opacity">Learn more</Link>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
