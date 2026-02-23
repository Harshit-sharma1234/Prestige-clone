import Image from "next/image";
import Link from "next/link";

const blogPosts = [
    {
        id: 1,
        category: "PRODUCT",
        title: "HOW TO CHOOSE YOUR BUSINESS BAG",
        image: "/assets/blog-img-3.webp",
        link: "/blog/choose-business-bag"
    },
    {
        id: 2,
        category: "STORY",
        title: "A SHOOTING DAY IN ETRETAT",
        image: "/assets/blog-img-2.webp",
        link: "/blog/shooting-day-etretat"
    },
    {
        id: 3,
        category: "PRODUCT",
        title: "FOCUS ON YOUR NEW FAVORITE: LE GIANNI",
        image: "/assets/blog-img-1.webp",
        link: "/blog/focus-le-gianni"
    }
];

export default function BlogSection() {
    return (
        <section className="bg-[#efefef] py-24 px-6 md:px-[160px] font-sans">
            <div className="mx-auto max-w-[1440px]">
                <div className="text-center mb-16">
                    <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-black/60 mb-4">
                        NEWS
                    </p>
                    <h2 className="text-[28px] md:text-[32px] tracking-[0.15em] font-normal uppercase text-[#1c1c1c]">
                        FROM THE BLOG
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-20">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="group">
                            <Link href={post.link} className="block mb-6 overflow-hidden">
                                <div className="relative aspect-[16/9] w-full">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                            </Link>
                            <p className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-black/60 mb-4">
                                {post.category}
                            </p>
                            <h3 className="text-[16px] md:text-[18px] tracking-[0.1em] font-normal uppercase text-[#1c1c1c] mb-6 leading-tight max-w-[280px]">
                                {post.title}
                            </h3>
                            <Link
                                href={post.link}
                                className="inline-block text-[11px] tracking-[0.2em] uppercase font-medium border-b border-[#1c1c1c] pb-1 hover:opacity-70 transition-opacity"
                            >
                                Read more
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <Link
                        href="/blog"
                        className="bg-[#1c1c1c] text-white text-[12px] tracking-[0.2em] uppercase py-[18px] px-12 transition-colors hover:bg-black font-medium"
                    >
                        DISCOVER ALL OUR STORIES
                    </Link>
                </div>
            </div>
        </section>
    );
}
