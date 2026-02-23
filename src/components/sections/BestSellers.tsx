"use client";

import { useState } from "react";
import CTAButton from "@/components/ui/CTAButton";
import ProductCarousel from "@/components/ui/ProductCarousel";

type Tab = "women" | "men";

const products = {
    women: [
        { id: 1, name: "GRAND NOVA LISSE IVOIRE", price: "$420.00", image: "/assets/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.webp", imageHover: "/assets/white-b.webp", badge: "NEW" },
        { id: 2, name: "LE GINA LIEGE PETROLE", price: "$320.00", image: "/assets/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.webp", imageHover: "/assets/green-b.webp" },
        { id: 3, name: "ELEGANT CUIR MIROIR CHOCOLAT", price: "$420.00", image: "/assets/brown-f.webp", imageHover: "/assets/Elegant-Cuir-Miroir-Chocolat-01_78e03cea-f382-4fd4-a12d-71e1d9cb0999.webp" },
        { id: 4, name: "LE SLIM BRIEFCASE BLACK", price: "$470.00", image: "/assets/black-f.webp", imageHover: "/assets/black-b.webp", badge: "BEST SELLER" },
        { id: 9, name: "WOMEN BAG CAROUSEL", price: "$390.00", image: "/assets/women-bag-caraousel.webp", badge: "NEW" },
        { id: 10, name: "WOMEN BAG CAROUSEL", price: "$390.00", image: "/assets/women-bag-caraousel-back.webp", badge: "BEST SELLER" },
    ],
    men: [
        { id: 5, name: "LE SLIM BRIEFCASE BLACK", price: "$420.00", image: "/assets/black-f.webp", imageHover: "/assets/black-b.webp", badge: "NEW" },
        { id: 6, name: "ELEGANT CUIR MIROIR CHOCOLAT", price: "$320.00", image: "/assets/brown-f.webp", imageHover: "/assets/Elegant-Cuir-Miroir-Chocolat-01_78e03cea-f382-4fd4-a12d-71e1d9cb0999.webp" },
        { id: 7, name: "LE GINA LIEGE PETROLE", price: "$420.00", image: "/assets/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.webp", imageHover: "/assets/green-b.webp" },
        { id: 8, name: "GRAND NOVA LISSE IVOIRE", price: "$470.00", image: "/assets/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.webp", imageHover: "/assets/white-b.webp", badge: "BEST SELLER" },
    ],
};

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
