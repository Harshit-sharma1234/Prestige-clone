import HeroSection from "@/components/HeroSection";
import BestSellers from "@/components/BestSellers";
import NewLaunch from "@/components/NewLaunch";
import Marquee from "@/components/Marquee";
import OurAim from "@/components/OurAim";
import WeekendBags from "@/components/WeekendBags";

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
