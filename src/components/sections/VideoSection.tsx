import Image from "next/image";

export default function VideoSection() {
    return (
        <section className="relative w-full h-[500px] md:h-[700px] font-sans">
            <Image
                src="/assets/Video_poster_image_-_home.webp"
                alt="Finest handmade"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="place-self-center text-center text-white">
                    <div className="prose flex flex-col items-center">
                        <p className="text-[12px] md:text-[14px] tracking-[0.2em] uppercase mb-4 font-normal text-white">
                            Made in Italy
                        </p>
                        <p className="text-[28px] md:text-[36px] tracking-[0.1em] uppercase mb-8 font-normal text-white">
                            Finest handmade
                        </p>
                        <button className="play-button hover:scale-105 transition-transform" type="button">
                            <span className="sr-only">Play video</span>
                            <svg fill="none" width="48" height="48" viewBox="0 0 48 48">
                                <path fillRule="evenodd" clipRule="evenodd" d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24Zm-18 0-9-6.6v13.2l9-6.6Z" fill="#ffffff" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
