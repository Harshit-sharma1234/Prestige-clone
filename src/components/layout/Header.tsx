"use client";

import { useScroll } from "@/hooks/useScroll";
import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";

export default function Header() {
    const isScrolled = useScroll(10);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? "max-h-0" : "max-h-[60px]"}`}>
                <AnnouncementBar />
            </div>
            <Navbar />
        </header>
    );
}
