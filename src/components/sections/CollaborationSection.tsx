import Image from "next/image";
import Link from "next/link";

export default function CollaborationSection() {
    return (
        <section className="bg-[#efefef] py-24 px-6 md:px-[160px] font-sans">
            <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-8">

                {/* Left side: Text Content */}
                <div className="w-full md:w-[40%] flex flex-col justify-center pt-8 md:pt-32">
                    <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-black/60 mb-6">
                        COLLABORATION
                    </p>
                    <h2 className="text-[28px] md:text-[32px] font-normal tracking-[0.15em] uppercase text-[#1c1c1c] mb-8 leading-snug">
                        LÉO ET VIOLETTE X<br />WENDY SWAN
                    </h2>
                    <p className="text-[12px] md:text-[14px] text-[#1c1c1c]/80 leading-relaxed mb-10 max-w-[450px]">
                        Dalia was born from the encounter between Wendy and Léo et Violette. Wendy's minimalist and elegant universe corresponds perfectly to the spirit of Léo et Violette.
                    </p>
                    <div>
                        <Link
                            href="/pages/collaboration"
                            className="inline-block bg-[#1c1c1c] text-white text-[10px] md:text-[11px] tracking-[0.2em] uppercase py-[16px] px-10 transition-colors hover:bg-black/80 font-medium"
                        >
                            DISCOVER
                        </Link>
                    </div>
                </div>

                {/* Right side: Images */}
                <div className="w-full md:w-[60%] relative h-[600px] md:h-[800px] flex justify-end">

                    {/* Front/Bottom Image (Building/Railings) */}
                    <div className="absolute left-0 bottom-0 md:bottom-auto md:top-[25%] z-10 w-[70%] md:w-[60%] h-[400px] md:h-[600px] shadow-xl">
                        <Image
                            src="/assets/Multiple_media_with_text_-_Portrait_-_home_2.webp"
                            alt="Wendy Swan Collaboration - Outdoor"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Back/Top Image (Legs/Bag) */}
                    <div className="absolute right-0 top-0 w-[70%] md:w-[60%] h-[400px] md:h-[600px]">
                        <Image
                            src="/assets/Multiple_media_with_text_-_Portrait_-_home_1.webp"
                            alt="Wendy Swan Collaboration - Details"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
