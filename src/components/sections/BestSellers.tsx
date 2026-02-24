"use client";

import { useState } from "react";
import CTAButton from "@/components/ui/CTAButton";
import ProductCarousel from "@/components/ui/ProductCarousel";
import { bestSellerProducts as products } from "@/lib/data";

type Tab = "women" | "men";

function TabButton({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
    return (
        <button onClick={onClick} className="relative pb-[2px] transition-colors text-primary-black">
            {label}
            {active && <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black" />}
        </button>
    );
}

export default function BestSellers() {
    const [activeTab, setActiveTab] = useState<Tab>("men");

    return (
        <section id="best-sellers" className="bg-[#efefef] py-20 md:pt-[105px] md:pb-[80px] group/section font-sans">
            {/* Header + Tabs */}
            <div className="flex flex-col items-center gap-4 mb-8">
                <h6 className="text-[12px] tracking-[0.2em] uppercase text-primary-black py-2 px-6">OUR BEST SELLERS</h6>
                <div className="flex gap-8 text-[28px] tracking-[0.1em]">
                    <TabButton label="WOMEN" active={activeTab === "women"} onClick={() => setActiveTab("women")} />
                    <TabButton label="MEN" active={activeTab === "men"} onClick={() => setActiveTab("men")} />
                </div>
            </div>

            <ProductCarousel products={products[activeTab]} />

            {/* CTA */}
            <div className="mt-12 flex justify-center">
                <CTAButton text="ALL WOMEN'S BAGS" href="/collections/women" />
            </div>
        </section>
    );
}
