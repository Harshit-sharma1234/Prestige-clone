"use client";

import Image from "next/image";

export default function NewsletterSection() {
    return (
        <section className="relative w-full h-[450px] md:h-[500px] font-sans">
            {/* Background Image */}
            <Image
                src="/assets/newsletter-bg.webp"
                alt="Leather bags"
                fill
                className="object-cover"
                quality={90}
            />

            {/* Dark Overlay for Text/Form Readability */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                <div className="text-center text-white w-full max-w-[600px]">
                    <h6 className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-4 text-white/90">
                        KEEP ME UPDATED
                    </h6>
                    <h2 className="text-[28px] md:text-[32px] tracking-[0.15em] uppercase font-normal mb-4">
                        NEWSLETTER
                    </h2>
                    <p className="text-[13px] md:text-[14px] leading-relaxed text-white/90 font-light mb-10">
                        Subscribe to get notified about product launches, special offers and company news.
                    </p>

                    {/* Subscription Form */}
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="flex flex-col sm:flex-row w-full max-w-[500px] mx-auto gap-4 sm:gap-0"
                    >
                        <input
                            type="email"
                            placeholder="E-mail"
                            required
                            className="flex-1 bg-transparent border border-white/50 text-white placeholder:text-white/70 px-6 py-4 text-[13px] focus:outline-none focus:border-white transition-colors"
                        />
                        <button
                            type="submit"
                            className="bg-white text-black px-8 py-4 text-[11px] tracking-[0.2em] font-medium uppercase hover:bg-white/90 transition-colors sm:ml-4"
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
