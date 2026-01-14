"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

import { HeroSection } from "@/components/home/hero-section";
import { HighlightCardsSection } from "@/components/home/highlight-cards";
import { TwoColumnFeatureSection } from "@/components/home/two-column-feature";

const HomeTestimonials = dynamic(
  () => import("@/components/home/testimonials-wrapper").then((mod) => mod.HomeTestimonials),
  { loading: () => <div className="h-10" aria-hidden="true" /> },
);
const VideoTestimonialsSection = dynamic(
  () => import("@/components/home/video-testimonials").then((mod) => mod.VideoTestimonialsSection),
  { loading: () => <div className="h-10" aria-hidden="true" /> },
);
const ProductStarSection = dynamic(
  () => import("@/components/home/product-star").then((mod) => mod.ProductStarSection),
  { loading: () => <div className="h-10" aria-hidden="true" /> },
);
const HandOffGridSection = dynamic(
  () => import("@/components/home/hand-off-grid").then((mod) => mod.HandOffGridSection),
  { loading: () => <div className="h-10" aria-hidden="true" /> },
);
const InstallationTypesSection = dynamic(
  () => import("@/components/home/installation-types").then((mod) => mod.InstallationTypesSection),
  { loading: () => <div className="h-10" aria-hidden="true" /> },
);
const ReferralSection = dynamic(
  () => import("@/components/home/referral-section").then((mod) => mod.ReferralSection),
  { loading: () => <div className="h-10" aria-hidden="true" /> },
);
const StatsBarSection = dynamic(
  () => import("@/components/home/stats-bar").then((mod) => mod.StatsBarSection),
  { loading: () => <div className="h-10" aria-hidden="true" /> },
);

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
      <ReferralSection />
      <HandOffGridSection />
      <InstallationTypesSection />
      <StatsBarSection />
    </div>
  );
}
