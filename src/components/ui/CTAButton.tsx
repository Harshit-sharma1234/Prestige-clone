"use client";

import Link from "next/link";

interface CTAButtonProps {
    text: string;
    href?: string;
    onClick?: () => void;
    className?: string;
}

export default function CTAButton({ text, href, onClick, className = "" }: CTAButtonProps) {
    const defaultClasses = "relative group/btn w-fit overflow-hidden border border-black bg-black px-[24px] py-[10.4px] text-[12px] font-[family-name:var(--font-nunito)] tracking-[0.2em] uppercase transition-colors duration-500 hover:text-black";

    const content = (
        <>
            <span className="relative z-10 transition-colors duration-500 group-hover/btn:text-black">
                {text}
            </span>
            <div className="absolute inset-0 bg-white -translate-x-full transition-transform duration-500 ease-in-out group-hover/btn:translate-x-0" />
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                className={`${defaultClasses} flex items-center justify-center text-white ${className}`}
            >
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`${defaultClasses} text-white ${className}`}
        >
            {content}
        </button>
    );
}
