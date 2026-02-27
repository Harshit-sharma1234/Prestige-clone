"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import CTAButton from "@/components/ui/CTAButton";

const blogPosts = [
    {
        id: 1,
        category: "PRODUCT",
        title: "HOW TO CHOOSE YOUR\nBUSINESS BAG",
        image: "/assets/blog-img-1.webp",
        link: "/blog/choose-business-bag"
    },
    {
        id: 2,
        category: "STORY",
        title: "A SHOOTING DAY IN ETRETAT",
        image: "/assets/blog-img-2.webp",
        link: "/blog/shooting-day-etretat"
    },
    {
        id: 3,
        category: "PRODUCT",
        title: "FOCUS ON YOUR NEW FAVORITE:\nLE GIANNI",
        image: "/assets/blog-img-3.webp",
        link: "/blog/focus-le-gianni"
    }
];

export default function BlogSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    return (
        <section ref={sectionRef} className="bg-[#efefef] py-24 px-6 md:px-12">
            <div className="mx-auto max-w-[1240px]">
                {/* Header */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 25 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <p className="text-[10px] md:text-[12px] tracking-[0.25em] uppercase text-black font-sans">NEWS</p>
                    <h2 className="text-[28px] mt-5 tracking-[0.2em] font-normal uppercase text-[#1c1c1c] font-sans">FROM THE BLOG</h2>
                </motion.div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {blogPosts.map((post, index) => (
                        <motion.div
                            key={post.id}
                            className="flex flex-col w-full"
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                            transition={{ duration: 0.7, delay: 0.2 + index * 0.15, ease: "easeOut" }}
                        >
                            <Link href={post.link} className="block overflow-hidden bg-[#eeeeee] w-full aspect-[2/1]">
                                <div className="relative w-full h-full">
                                    <Image src={post.image} alt={post.title} fill className="object-cover" />
                                </div>
                            </Link>

                            <div className="mt-8 flex flex-col items-start px-4 md:px-0">
                                <p className="text-[10px] md:text-[12px] font-medium tracking-[0.2em] uppercase text-black/50 font-sans">{post.category}</p>
                                <h3 className="text-[16px] md:text-[18px] mt-4 tracking-[0.15em] font-normal uppercase text-[#1c1c1c] leading-[1.4] font-sans whitespace-pre-line min-h-[48px]">{post.title}</h3>
                                <Link href={post.link} className="inline-block mt-6 text-[14px] font-cta text-[#1c1c1c] pb-0.5 transition-all duration-300 bg-gradient-to-r from-[#1c1c1c] to-[#1c1c1c] bg-[length:100%_1px] bg-no-repeat bg-left-bottom hover:bg-[length:0%_1px]">Read more</Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Button */}
                <motion.div
                    className="flex justify-center mt-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
                >
                    <CTAButton
                        text="DISCOVER ALL OUR STORIES"
                        href="/blog"
                        variant="dark"
                        animate={true}
                        className="!text-[11px] !py-[20px] !px-14 !tracking-[0.25em]"
                    />
                </motion.div>
            </div>
        </section>
    );
}
