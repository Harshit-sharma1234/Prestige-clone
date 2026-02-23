import ProductCarousel from "@/components/ui/ProductCarousel";
import { weekendBagProducts as products } from "@/lib/data";

export default function WeekendBags() {
    return (
        <section id="weekend-bags" className="bg-[#efefef] py-24 group/section font-sans">
            {/* Header */}
            <div className="flex flex-col items-center mb-16 text-center">
                <h6 className="text-[12px] tracking-[0.3em] uppercase text-[#1c1c1c] mb-8">LE WEEKEND BAG</h6>
                <h2 className="text-[28px] tracking-[0.15em] uppercase text-black">IDEAL FOR A WEEKEND OUTING</h2>
            </div>

            <ProductCarousel products={products} />
        </section>
    );
}
