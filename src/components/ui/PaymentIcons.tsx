import Image from "next/image";

const paymentMethods = [
    {
        name: "Visa",
        svg: (
            <svg viewBox="0 0 36 24" className="w-full h-full p-1" fill="#1A1F71">
                <path d="M28.3 10.1H28c-.4 1-.7 1.5-1 3h1.9c-.3-1.5-.3-2.2-.6-3zm2.9 5.9h-1.7c-.1 0-.1 0-.2-.1l-.2-.9-.1-.2h-2.4c-.1 0-.2 0-.2.2l-.3.9c0 .1-.1.1-.1.1h-2.1l.2-.5L27 8.7c0-.5.3-.7.8-.7h1.5c.1 0 .2 0 .2.2l1.4 6.5c.1.4.2.7.2 1.1.1.1.1.1.1.2zm-13.4-.3l.4-1.8c.1 0 .2.1.2.1.7.3 1.4.5 2.1.4.2 0 .5-.1.7-.2.5-.2.5-.7.1-1.1-.2-.2-.5-.3-.8-.5-.4-.2-.8-.4-1.1-.7-1.2-1-.8-2.4-.1-3.1.6-.4.9-.8 1.7-.8 1.2 0 2.5 0 3.1.2h.1c-.1.6-.2 1.1-.4 1.7-.5-.2-1-.4-1.5-.4-.3 0-.6 0-.9.1-.2 0-.3.1-.4.2-.2.2-.2.5 0 .7l.5.4c.4.2.8.4 1.1.6.5.3 1 .8 1.1 1.4.2.9-.1 1.7-.9 2.3-.5.4-.7.6-1.4.6-1.4 0-2.5.1-3.4-.2-.1.2-.1.2-.2.1zm-3.5.3c.1-.7.1-.7.2-1 .5-2.2 1-4.5 1.4-6.7.1-.2.1-.3.3-.3H18c-.2 1.2-.4 2.1-.7 3.2-.3 1.5-.6 3-1 4.5 0 .2-.1.2-.3.2M5 8.2c0-.1.2-.2.3-.2h3.4c.5 0 .9.3 1 .8l.9 4.4c0 .1 0 .1.1.2 0-.1.1-.1.1-.1l2.1-5.1c-.1-.1 0-.2.1-.2h2.1c0 .1 0 .1-.1.2l-3.1 7.3c-.1.2-.1.3-.2.4-.1.1-.3 0-.5 0H9.7c-.1 0-.2 0-.2-.2L7.9 9.5c-.2-.2-.5-.5-.9-.6-.6-.3-1.7-.5-1.9-.5L5 8.2z" />
            </svg>
        ),
        containerClass: "border-black/5 bg-white",
    },
    {
        name: "Mastercard",
        svg: (
            <svg viewBox="0 0 36 24" className="w-full h-full p-1.5">
                <circle cx="14" cy="12" r="7" fill="#EB001B" />
                <circle cx="22" cy="12" r="7" fill="#F79E1B" fillOpacity="0.8" />
            </svg>
        ),
        containerClass: "border-black/5 bg-white",
    },
    {
        name: "American Express",
        image: "/assets/download-amex.png",
        containerClass: "border-black/5 bg-white",
    },
    {
        name: "PayPal",
        image: "/assets/paypal-logo.jpeg",
        containerClass: "border-black/5 bg-white",
    },
    {
        name: "Diners Club",
        image: "/assets/diners-club.png",
        containerClass: "border-black/5 bg-white",
    },
    {
        name: "Discover",
        image: "/assets/discover-logo.png",
        containerClass: "border-black/5 bg-white",
    },
];

export default function PaymentIcons() {
    return (
        <div className="flex items-center gap-2.5">
            {paymentMethods.map((method) => (
                <div
                    key={method.name}
                    className={`w-[50px] h-[32px] flex items-center justify-center border rounded-[3px] shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-opacity hover:opacity-100 opacity-80 overflow-hidden ${method.containerClass}`}
                    aria-label={method.name}
                >
                    {method.image ? (
                        <div className="relative w-full h-full">
                            <Image
                                src={method.image}
                                alt={method.name}
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                    ) : (
                        method.svg
                    )}
                </div>
            ))}
        </div>
    );
}
