import Image from "next/image";
import Link from "next/link";

const upperItems = [
    { text: "New: Le Sac Baguette", image: "/assets/brown-f.webp", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/brown-f.webp", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/brown-f.webp", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/brown-f.webp", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/brown-f.webp", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/brown-f.webp", href: "/products/le-sac-baguette" },
];

const lowerItems = [
    { text: "Shop New Arrivals", image: "/assets/black-f.webp", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/black-f.webp", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/black-f.webp", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/black-f.webp", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/black-f.webp", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/black-f.webp", href: "/collections/new-arrivals" },
];

function MarqueeRow({
    items,
    direction,
}: {
    items: { text: string; image: string; href: string }[];
    direction: "left" | "right";
}) {
    const animationClass =
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right";

    return (
        <div className="scrolling-content overflow-hidden whitespace-nowrap py-2">
            <div className={`scrolling-content__wrapper inline-flex ${animationClass}`}>
                {/* First set */}
                {items.map((item, i) => (
                    <div
                        key={`a-${i}`}
                        className="scrolling-content__item inline-flex items-center gap-6 md:gap-10 px-6 md:px-10"
                    >
                        <p className="scrolling-content__text heading">
                            <Link
                                href={item.href}
                                className="text-[#B3B3B3] text-[32px] md:text-[64px] tracking-[0.05em] uppercase font-light hover:opacity-70 transition-opacity"
                            >
                                {item.text}
                            </Link>
                        </p>
                        <div className="scrolling-content__image flex-shrink-0">
                            <Image
                                src={item.image}
                                alt=""
                                width={90}
                                height={60}
                                className="object-contain w-[60px] h-[40px] md:w-[90px] md:h-[60px]"
                            />
                        </div>
                    </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {items.map((item, i) => (
                    <div
                        key={`b-${i}`}
                        className="scrolling-content__item inline-flex items-center gap-6 md:gap-10 px-6 md:px-10"
                        aria-hidden="true"
                    >
                        <p className="scrolling-content__text heading">
                            <Link
                                href={item.href}
                                className="text-[#B3B3B3] text-[32px] md:text-[64px] tracking-[0.05em] uppercase font-light hover:opacity-70 transition-opacity"
                            >
                                {item.text}
                            </Link>
                        </p>
                        <div className="scrolling-content__image flex-shrink-0">
                            <Image
                                src={item.image}
                                alt=""
                                width={90}
                                height={60}
                                className="object-contain w-[60px] h-[40px] md:w-[90px] md:h-[60px]"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Marquee() {
    return (
        <section className="bordered-section bg-[#efefef] py-12 md:py-16 overflow-hidden font-sans border-y border-black/10">
            <div className="flex flex-col gap-6 md:gap-8">
                <MarqueeRow items={upperItems} direction="left" />
                <MarqueeRow items={lowerItems} direction="right" />
            </div>
        </section>
    );
}
