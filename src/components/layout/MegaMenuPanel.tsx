"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { MegaMenuData } from "@/lib/data";

interface MegaMenuPanelProps {
    data: MegaMenuData | null;
    onClose: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export default function MegaMenuPanel({ data, onClose, onMouseEnter, onMouseLeave }: MegaMenuPanelProps) {
    return (
        <div
            className={`absolute left-0 right-0 top-full z-50 overflow-hidden transition-all duration-300 ease-in-out ${data
                ? "max-h-[600px] opacity-100"
                : "max-h-0 opacity-0"
                }`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="bg-white border-t border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                <div className="mx-auto px-[48px] py-8 min-h-[450px]">
                    <AnimatePresence mode="wait">
                        {data ? (
                            <motion.div
                                key={data.columns.map(c => c.title).join('-')}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="flex gap-10 justify-center w-full"
                            >
                                {/* Link Columns */}
                                <div className="grid grid-flow-col auto-cols-auto gap-14 items-start">
                                    {data.columns.map((col, i) => (
                                        <motion.div
                                            key={col.title}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: i * 0.1,
                                                ease: "easeOut"
                                            }}
                                            className="flex flex-col gap-5 justify-items-start"
                                        >
                                            <Link
                                                href={col.links[0]?.href || "#"}
                                                className="text-[12px] tracking-[0.18em] uppercase text-[#1C1C1C] hover:text-[#1C1C1C]"
                                                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                                            >
                                                {col.title}
                                            </Link>
                                            <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
                                                {col.links.map((link) => (
                                                    <li key={link.label}>
                                                        <Link
                                                            href={link.href}
                                                            onClick={onClose}
                                                            className="text-[14px] text-[#1C1C1CA6] hover:text-[#1C1C1C] transition-colors duration-200"
                                                            style={{ fontFamily: 'Nunito, sans-serif' }}
                                                        >
                                                            {link.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Featured Images */}
                                <div className="flex gap-5">
                                    {data.featured.map((item, idx) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.6,
                                                delay: (data.columns.length * 0.1) + (idx * 0.15),
                                                ease: "easeOut"
                                            }}
                                        >
                                            <Link
                                                href={item.href}
                                                onClick={onClose}
                                                className="group/featured shrink-0 block"
                                            >
                                                <div className="relative w-[315px] h-[394px] overflow-hidden mb-3">
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover transition-transform duration-700 group-hover/featured:scale-105"
                                                    />
                                                </div>
                                                <h6 className="text-[11px] tracking-[0.15em] uppercase text-center text-[#1c1c1c] font-medium mb-0.5">
                                                    {item.title}
                                                </h6>
                                                <p className="text-[10.5px] tracking-[0.12em] uppercase text-center text-black/45">
                                                    {item.subtitle}
                                                </p>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ) : null}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
