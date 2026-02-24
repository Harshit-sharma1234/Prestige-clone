"use client";

import { useState, useEffect } from "react";

export default function NewsletterPopup() {
    const [isVisible, setIsVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const dismissed = sessionStorage.getItem("newsletter_dismissed");
        if (dismissed) return;

        const timer = setTimeout(() => setIsVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        sessionStorage.setItem("newsletter_dismissed", "true");
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;
        setIsSubmitted(true);
        setTimeout(() => {
            handleClose();
        }, 2000);
    };

    return (
        <div
            className={`fixed bottom-6 right-6 z-[999] w-[380px] max-w-[calc(100vw-48px)] transition-all duration-500 ease-out ${isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0 pointer-events-none"
                }`}
        >
            <div className="bg-[#1c1c1c] text-white p-8 md:p-10 shadow-2xl relative">
                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
                    aria-label="Close popup"
                >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>

                {!isSubmitted ? (
                    <>
                        <h3
                            className="text-[20px] md:text-[22px] tracking-[0.2em] uppercase text-center font-light leading-[1.4] mb-4"
                            style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                        >
                            Signup for our
                            <br />
                            Newsletter
                        </h3>

                        <p
                            className="text-[13px] md:text-[14px] text-white/70 text-center leading-[1.6] mb-8"
                            style={{ fontFamily: "Nunito, sans-serif" }}
                        >
                            Describe what your customers will receive when
                            subscribing to your newsletter.
                        </p>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail"
                                className="w-full bg-white/10 border border-white/20 px-5 py-4 text-[14px] text-white placeholder:text-white/40 outline-none focus:border-white/50 transition-colors"
                                style={{ fontFamily: "Nunito, sans-serif" }}
                                required
                            />

                            <button
                                type="submit"
                                className="w-full bg-white text-[#1c1c1c] py-4 text-[13px] tracking-[0.2em] uppercase font-semibold hover:bg-white/90 transition-colors"
                                style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </>
                ) : (
                    <div className="text-center py-6">
                        <svg className="w-10 h-10 mx-auto mb-4 text-green-400" viewBox="0 0 24 24" fill="none">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <h3
                            className="text-[18px] tracking-[0.15em] uppercase mb-2"
                            style={{ fontFamily: '"Instrument Sans", sans-serif' }}
                        >
                            Thank you!
                        </h3>
                        <p className="text-[13px] text-white/60" style={{ fontFamily: "Nunito, sans-serif" }}>
                            You&apos;ve been subscribed successfully.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
