import HeroSection from "@/components/sections/HeroSection";
import BestSellers from "@/components/sections/BestSellers";
import NewLaunch from "@/components/sections/NewLaunch";
import Marquee from "@/components/sections/Marquee";
import OurAim from "@/components/sections/OurAim";
import WeekendBags from "@/components/sections/WeekendBags";
import VideoSection from "@/components/sections/VideoSection";
import QuoteSection from "@/components/sections/QuoteSection";
import ShopTheLook from "@/components/sections/ShopTheLook";
import OurSelection from "@/components/sections/OurSelection";
import MaterialSection from "@/components/sections/MaterialSection";
import TimelineSection from "@/components/sections/TimelineSection";
import CountdownSection from "@/components/sections/CountdownSection";
import CollaborationSection from "@/components/sections/CollaborationSection";
import BeforeAfterSection from "@/components/sections/BeforeAfterSection";
import ScrollSection from "@/components/sections/ScrollSection";
import BlogSection from "@/components/sections/BlogSection";
import TheCoupleSection from "@/components/sections/TheCoupleSection";
import AboutFromAtoZSection from "@/components/sections/AboutFromAtoZSection";
import JoinUsSection from "@/components/sections/JoinUsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

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
            <BlogSection />
            <OurSelection />
            <MaterialSection />
            <QuoteSection />
            <TimelineSection />
            <TheCoupleSection />
            <AboutFromAtoZSection />
            <NewsletterSection />
            <JoinUsSection />


        </main>
    );
}
