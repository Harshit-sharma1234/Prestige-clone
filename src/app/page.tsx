import HeroSection from "@/components/sections/HeroSection";
import BestSellers from "@/components/sections/BestSellers";
import NewLaunch from "@/components/sections/NewLaunch";
import Marquee from "@/components/sections/Marquee";
import OurAim from "@/components/sections/OurAim";
import WeekendBags from "@/components/sections/WeekendBags";
import VideoSection from "@/components/sections/VideoSection";
import ShopTheLook from "@/components/sections/ShopTheLook";
import CountdownSection from "@/components/sections/CountdownSection";
import CollaborationSection from "@/components/sections/CollaborationSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ScrollSection from "@/components/sections/ScrollSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <BestSellers />
            <NewLaunch />

            <OurAim />
            <Marquee />
            <WeekendBags />
            <VideoSection />
            <ShopTheLook />
            <CountdownSection />
            <CollaborationSection />
            <BeforeAfterSection />
            <ScrollSection />
        </main>
    );
}
