import HeroSection from "@/components/sections/HeroSection";
import BestSellers from "@/components/sections/BestSellers";
import NewLaunch from "@/components/sections/NewLaunch";
import Marquee from "@/components/sections/Marquee";
import OurAim from "@/components/sections/OurAim";
import WeekendBags from "@/components/sections/WeekendBags";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <BestSellers />
            <NewLaunch />

            <OurAim />
            <Marquee />
            <WeekendBags />
        </main>
    );
}
