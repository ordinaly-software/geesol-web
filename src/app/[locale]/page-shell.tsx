import { HeroSection } from "@/components/home/hero-section";
import { HighlightCardsSection } from "@/components/home/highlight-cards";
import { TwoColumnFeatureSection } from "@/components/home/two-column-feature";
import HomeSections from "./home-sections.client";

export default function HomePage({ locale: _locale }: { locale: string }) {
  return (
    <div className="bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <HeroSection />
      <HighlightCardsSection />
      <TwoColumnFeatureSection />
      <HomeSections />
    </div>
  );
}
