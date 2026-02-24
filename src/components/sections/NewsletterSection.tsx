"use client";

import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export default function NewsletterSection() {
    return (
        <section className="relative w-full h-[400px] md:h-[450px] font-sans overflow-hidden">
            {/* Background Image */}
            <Image
                src="/assets/newsletter-bg.webp"
                alt="Leather bags"
                fill
                className="object-cover"
                quality={90}
            />

            {/* Dark Overlay for Text/Form Readability */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Centered Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6">
                <div className="text-center text-white w-full max-w-[600px]">
                    <h6 className="text-[10px] md:text-[11px] tracking-[0.2em] uppercase mb-4 text-white/90 font-medium">
                        KEEP ME UPDATED
                    </h6>
                    <h2 className="text-[28px] md:text-[28px] tracking-[0.15em] uppercase font-normal mb-6">
                        NEWSLETTER
                    </h2>
                    <p className="text-[13px] md:text-[14px] leading-relaxed text-white/90 font-light mb-10 font-nunito">
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
                            style={{ padding: '10.4px 12.8px' }}
                            className="flex-1 bg-transparent border border-white/50 text-white placeholder:text-white/70 text-[13px] font-cta focus:outline-none focus:border-white transition-colors"
                        />
                        <CTAButton
                            text="SUBSCRIBE"
                            type="submit"
                            variant="light"
                            className="sm:ml-4"
                            style={{ padding: '10.4px 28px' }}
                        />
                    </form>
                </div>
            </div>
        </section>
    );
}
