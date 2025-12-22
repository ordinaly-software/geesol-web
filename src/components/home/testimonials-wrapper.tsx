"use client";

import { useTranslations } from "next-intl";

import { TestimonialsSection } from "@/components/home/testimonials-section";

export const HomeTestimonials = ({
  onMetaUpdate,
}: {
  onMetaUpdate?: (meta: { rating: number | null; count: number | null; googleMapsUrl?: string }) => void;
}) => {
  const t = useTranslations();
  return <TestimonialsSection t={t} onMetaUpdate={onMetaUpdate} />;
};
