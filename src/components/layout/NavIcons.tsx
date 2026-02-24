import React from "react";

interface NavIconProps {
    children: React.ReactNode;
    className?: string;
}

/** Reusable wrapper for 24x24 SVG nav icons */
function NavIcon({ children, className = "" }: NavIconProps) {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            {children}
        </svg>
    );
}

export function AccountIcon() {
    return (
        <NavIcon>
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </NavIcon>
    );
}

export function SearchIcon() {
    return (
        <NavIcon>
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
        </NavIcon>
    );
}

export function CartIcon() {
    return (
        <NavIcon>
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
            <line x1="3" x2="21" y1="6" y2="6" />
            <path d="M16 10a4 4 0 0 1-8 0" />
        </NavIcon>
    );
}
