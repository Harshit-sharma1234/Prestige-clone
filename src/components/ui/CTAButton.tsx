"use client";

import Link from "next/link";

interface CTAButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    className?: string;
    variant?: "dark" | "light";
    animate?: boolean;
}

export default function CTAButton({
    text,
    href,
    onClick,
    className = "",
    variant = "dark",
    animate = true,
}: CTAButtonProps) {
    const isDark = variant === "dark";

    const cls = [
        "relative group/btn w-fit overflow-hidden border",
        "py-[10px] px-[28px] text-[13px] font-medium tracking-[0.2em] uppercase font-nunito",
        "flex items-center justify-center transition-colors duration-500 ease-in-out",
        animate ? "bg-transparent" : (isDark ? "bg-[#1c1c1c] border-[#1c1c1c]" : "bg-white border-white"),
        animate ? (isDark ? "text-white border-[#1c1c1c] hover:text-[#1c1c1c]" : "text-[#1c1c1c] border-white hover:text-white") : (isDark ? "text-white" : "text-[#1c1c1c]"),
        className,
    ].join(" ");

    const inner = (
        <>
            <span className="relative z-10 block transition-colors duration-500 font-nunito">{text}</span>
            {animate && (
                <div className={`absolute inset-0 transition-transform duration-500 ease-in-out group-hover/btn:translate-x-full ${isDark ? "bg-[#1c1c1c]" : "bg-white"}`} />
            )}
        </>
    );

    return href ? (
        <Link href={href} className={cls}>{inner}</Link>
    ) : (
        <button onClick={onClick} className={cls}>{inner}</button>
    );
}
