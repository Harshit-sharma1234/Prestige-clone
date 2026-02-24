"use client";

import React from "react";

interface AddToCartButtonProps {
    onClick?: () => void;
    className?: string;
    text?: string;
}

export default function AddToCartButton({
    onClick,
    className = "",
    text = "ADD TO CART"
}: AddToCartButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`w-full bg-[#1c1c1c] hover:bg-black text-white text-[11px] tracking-[0.25em] uppercase transition-colors py-[18px] md:py-[20px] font-sans font-normal ${className}`}
        >
            {text}
        </button>
    );
}
