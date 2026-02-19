import Link from "next/link";

export default function NewLaunch() {
    return (
        <section
            className="relative w-full h-[400px] md:h-[512px] bg-cover bg-center bg-no-repeat font-sans"
            style={{ backgroundImage: "url('/assets/image-new-launch.webp')" }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Content - Left Aligned, Bottom */}
            <div className="relative z-10 flex flex-col justify-end h-full px-[20px] md:px-[48px] pb-12 md:pb-16">
                <span className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-white opacity-90 mb-3">
                    NEW PRODUCT
                </span>
                <h2 className="text-[28px] md:text-[36px] font-medium tracking-[0.1em] uppercase text-white leading-tight mb-6">
                    LE BACKPACK
                </h2>
                <Link
                    href="/collections/new-arrivals"
                    className="inline-flex items-center justify-center w-fit px-8 py-3 bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-black hover:text-white transition-all duration-500"
                >
                    SHOP
                </Link>
            </div>
        </section>
    );
}
