"use client";

import { useState } from "react";

import { HeroSection } from "@/components/home/hero-section";
import { HighlightCardsSection } from "@/components/home/highlight-cards";
import { TwoColumnFeatureSection } from "@/components/home/two-column-feature";
import { HomeTestimonials } from "@/components/home/testimonials-wrapper";
import { VideoTestimonialsSection } from "@/components/home/video-testimonials";
import { ProductStarSection } from "@/components/home/product-star";
import { HandOffGridSection } from "@/components/home/hand-off-grid";
import { InstallationTypesSection } from "@/components/home/installation-types";
import { ReferralSection } from "@/components/home/referral-section";
import { StatsBarSection } from "@/components/home/stats-bar";

export default function HomePage() {
  const [reviewMeta, setReviewMeta] = useState<{
    rating: number | null;
    count: number | null;
    googleMapsUrl?: string;
  }>({ rating: null, count: null });

  return (
    <div className="bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <HeroSection />
      <HighlightCardsSection />
      <TwoColumnFeatureSection />
      <HomeTestimonials onMetaUpdate={setReviewMeta} />
      <VideoTestimonialsSection
        rating={reviewMeta.rating}
        count={reviewMeta.count}
        googleMapsUrl={reviewMeta.googleMapsUrl}
      />
      <ProductStarSection/>
      <HandOffGridSection />
      <InstallationTypesSection />
      <ReferralSection />
      <StatsBarSection />
    </div>
  );
}
