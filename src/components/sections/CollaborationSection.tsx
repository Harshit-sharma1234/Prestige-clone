import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";

export default function CollaborationSection() {
    return (
        <section className="bg-[#efefef] py-20 px-6 md:px-[160px] font-sans">
            <div className="mx-auto max-w-[1440px] flex flex-col md:flex-row items-center md:items-start justify-between gap-12 md:gap-8">

                {/* Left side: Text Content */}
                <div className="w-full md:w-[45%] flex flex-col justify-center pt-8 md:pt-[210px] md:pl-[200px]">
                    <p className="text-[10px] md:text-[12px] uppercase  mb-6 text-[#1c1c1c] tracking-[0.2em]">
                        COLLABORATION
                    </p>
                    <h2 className="text-[28px] md:text-[22px] font-normal tracking-[0.15em] uppercase text-[#1c1c1c] mb-8 leading-snug">
                        LÉO ET VIOLETTE X<br />WENDY SWAN
                    </h2>
                    <p className="text-[12px] md:text-[14px] text-[#1c1c1c]/80 leading-relaxed mb-10 max-w-[450px]">
                        Dalia was born from the encounter between Wendy and Léo et Violette. Wendy's minimalist and elegant universe corresponds perfectly to the spirit of Léo et Violette.
                    </p>
                    <div>
                        <CTAButton
                            text="DISCOVER"
                            href="/pages/collaboration"
                        />
                    </div>
                </div>

                {/* Right side: Images */}
                <div className="w-full md:w-[60%] flex justify-end">
                    <div className="relative w-full max-w-[650px] h-[650px] md:h-[700px]">
                        {/* Back Image (Larger: 400x615) */}
                        <div className="absolute right-0 top-0 w-[70%] md:w-[400px] aspect-[400/615] md:h-[615px] z-0 shadow-lg">
                            <Image
                                src="/assets/Multiple_media_with_text_-_Portrait_-_home_1.webp"
                                alt="Wendy Swan Collaboration - Details"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Front Image (Smaller: 318x489) */}
                        <div className="absolute left-0 bottom-0 w-[60%] md:w-[318px] aspect-[318/489] md:h-[489px] z-10 shadow-2xl">
                            <Image
                                src="/assets/Multiple_media_with_text_-_Portrait_-_home_2.webp"
                                alt="Wendy Swan Collaboration - Outdoor"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
