import Image from "next/image";
import Link from "next/link";
import { marqueeUpperItems as upperItems, marqueeLowerItems as lowerItems } from "@/lib/data";

type MarqueeItem = { text: string; image: string; href: string };

function MarqueeRow({ items, direction }: { items: MarqueeItem[]; direction: "left" | "right" }) {
    const anim = direction === "left"
        ? "animate-[marquee-left_10s_linear_infinite]"
        : "animate-[marquee-right_10s_linear_infinite]";

    return (
        <div className={`inline-flex items-center ${anim}`}>
            {[...items, ...items].map((item, i) => (
                <Link
                    key={i}
                    href={item.href}
                    aria-hidden={i >= items.length ? "true" : undefined}
                    className="inline-flex items-center gap-6 md:gap-10 px-8 md:px-14 hover:opacity-70 transition-opacity"
                >
                    <Image
                        src={item.image}
                        alt=""
                        width={96}
                        height={60.8}
                        className="object-contain w-[90px] h-[60.8px] shrink-0"
                    />
                    <span style={{ wordSpacing: "15px" }} className="text-[#B3B3B3] text-[64px] tracking-[0.2em] uppercase font-light leading-none whitespace-nowrap">
                        {item.text}
                    </span>
                </Link>
            ))}
        </div>
    );
}

export default function Marquee() {
    return (
        <section className="bg-[#efefef] py-[40px] overflow-x-hidden font-sans border-y border-black/10">
            <div className="flex flex-col gap-[40px]">
                <MarqueeRow items={upperItems} direction="left" />
                <div className="w-full border-t border-black/10" />
                <MarqueeRow items={lowerItems} direction="right" />
            </div>
        </section>
    );
}
