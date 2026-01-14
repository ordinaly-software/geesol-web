"use client";

import { useState, useEffect } from "react";
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

const SectionSkeleton = () => (
  <div className="mx-auto my-6 flex w-full max-w-6xl flex-col gap-4 rounded-3xl bg-white/80 p-6 shadow-xl shadow-slate-900/10 animate-pulse dark:bg-white/[0.04] dark:shadow-black/30">
    <div className="h-6 w-32 rounded-full bg-slate-200 dark:bg-slate-700" />
    <div className="space-y-3">
      {[1, 2, 3].map((line) => (
        <div
          key={line}
          className="h-3 rounded-full bg-slate-200 dark:bg-slate-700"
          style={{ width: `${90 - line * 10}%` }}
        />
      ))}
      <div className="flex flex-wrap gap-3">
        {[1, 2, 3].map((pill) => (
          <div key={pill} className="h-2.5 min-w-[4rem] flex-1 rounded-full bg-slate-200 dark:bg-slate-700" />
        ))}
      </div>
    </div>
  </div>
);

export default function HomePage() {
  const [reviewMeta, setReviewMeta] = useState<{
    rating: number | null;
    count: number | null;
    googleMapsUrl?: string;
  }>({ rating: null, count: null });
  const [shouldRenderSections, setShouldRenderSections] = useState(false);

  useEffect(() => {
    const idleWindow = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    const scheduleRender = () => setShouldRenderSections(true);
    const handle =
      idleWindow.requestIdleCallback?.(scheduleRender, { timeout: 1000 }) ??
      window.setTimeout(scheduleRender, 400);

    return () => {
      if ("cancelIdleCallback" in idleWindow) {
        idleWindow.cancelIdleCallback?.(handle as number);
      } else {
        window.clearTimeout(handle as number);
      }
    };
  }, []);

  return (
    <div className="bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <HeroSection />
      <HighlightCardsSection />
      <TwoColumnFeatureSection />
      {shouldRenderSections ? (
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
        </>
      ) : (
        <>
          <SectionSkeleton />
          <SectionSkeleton />
          <SectionSkeleton />
        </>
      )}
    </div>
  );
}
