"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import { shopTheLookData as looks } from "@/lib/data";
import type { HotspotProduct, Look } from "@/lib/types";

export default function ShopTheLook() {
    const [idx, setIdx] = useState(0);
    const [activeId, setActiveId] = useState(looks[0].products[0].id);

    const look = looks[idx];
    const item = look.products.find(p => p.id === activeId) || look.products[0];

    const changeLook = (step: number) => {
        const next = (idx + step + looks.length) % looks.length;
        setIdx(next);
        setActiveId(looks[next].products[0].id);
    };

    const NavBtn = ({ step, icon: Icon }: { step: number; icon: any }) => (
        <button onClick={() => changeLook(step)} className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black shadow hover:scale-105 transition-transform" aria-label="Change look">
            <Icon className="w-6 h-6" />
        </button>
    );

    return (
        <section className="bg-[#efefef] py-20 px-6 md:px-[160px] font-sans">
            <div className="mx-auto max-w-[1440px]">
                <div className="text-center mb-16">
                    <h6 className="text-[12px] tracking-[0.2em] uppercase text-[#1c1c1c] mb-4">SHOP</h6>
                    <h2 className="text-[28px] tracking-[0.15em] font-normal uppercase text-[#1c1c1c] mt-5">OUR LOOKS</h2>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
                    <div className="hidden md:flex flex-1 justify-start"><NavBtn step={-1} icon={ChevronLeft} /></div>

                    {/* Look Image + Hotspots */}
                    <div className="relative w-full md:w-[550px] h-[550px] shrink-0">
                        <Image src={look.image} alt="Shop the look" fill className="object-cover" />
                        {look.products.map(p => {
                            const isActive = activeId === p.id;
                            return (
                                <button
                                    key={p.id}
                                    onMouseEnter={() => setActiveId(p.id)}
                                    onClick={() => setActiveId(p.id)}
                                    aria-label={`View ${p.name}`}
                                    className={`absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center transition-all ${isActive ? "bg-white/30 scale-110" : "bg-white/10 hover:bg-white/20"}`}
                                    style={{ top: `${p.y}%`, left: `${p.x}%` }}
                                >
                                    <div className="w-3 h-3 bg-white rounded-full shadow-sm" />
                                </button>
                            );
                        })}
                    </div>

                    {/* Product Details */}
                    <div className="w-full md:w-[350px] shrink-0 flex flex-col items-center text-center">
                        <div className="relative w-full aspect-[4/3] mb-8 group/card">
                            {item.badge && <span className="absolute top-0 left-0 text-[10px] tracking-[0.1em] text-black/60 uppercase z-10">{item.badge}</span>}
                            <Image src={item.image} alt={item.name} fill className="object-contain transition-opacity duration-700 group-hover/card:opacity-0" />
                            <Image src={item.imageHover} alt={`${item.name} back`} fill className="object-contain transition-opacity duration-700 opacity-0 group-hover/card:opacity-100" />
                        </div>
                        <h3 className="text-[12px] tracking-[0.15em] uppercase text-[#1c1c1c] mb-2 font-medium">{item.name}</h3>
                        <p className="text-[12px] text-black/60 tracking-[0.1em] mb-8">{item.price}</p>
                        <CTAButton text="VIEW PRODUCT" href={item.href} className="mt-4" />

                        {/* Pagination */}
                        <div className="flex gap-2 mt-8">
                            {looks.map((_, i) => (
                                <button key={i} onClick={() => { setIdx(i); setActiveId(looks[i].products[0].id); }} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === i ? "bg-black" : "bg-black/20"}`} aria-label={`View look ${i + 1}`} />
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex flex-1 justify-end"><NavBtn step={1} icon={ChevronRight} /></div>

                    {/* Mobile Nav */}
                    <div className="md:hidden flex gap-8 mt-8"><NavBtn step={-1} icon={ChevronLeft} /><NavBtn step={1} icon={ChevronRight} /></div>
                </div>
            </div>
        </section>
    );
}
