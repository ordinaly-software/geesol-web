"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { HomeHubSpotFormSection } from "@/components/home/hubspot-form-section";

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

export default function HomeSections() {
  const [reviewMeta, setReviewMeta] = useState<{
    rating: number | null;
    count: number | null;
    googleMapsUrl?: string;
  }>({ rating: null, count: null });

  return (
    <>
      <HomeTestimonials onMetaUpdate={setReviewMeta} />
      <VideoTestimonialsSection
        rating={reviewMeta.rating}
        count={reviewMeta.count}
        googleMapsUrl={reviewMeta.googleMapsUrl}
      />
      <ProductStarSection />
      <ReferralSection />
      <HandOffGridSection />
      <InstallationTypesSection />
      <StatsBarSection />
      <HomeHubSpotFormSection />
    </>
  );
}
