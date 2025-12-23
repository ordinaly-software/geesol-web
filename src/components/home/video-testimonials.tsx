"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export const VideoTestimonialsSection = ({
  rating,
  count,
  googleMapsUrl,
}: {
  rating: number | null;
  count: number | null;
  googleMapsUrl?: string;
}) => {
  const t = useTranslations("home");
  const tRoot = useTranslations();
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const videos = [
    {
      id: "EMojxluMVqk",
      title: t("videoTestimonials.items.0"),
    },
    {
      id: "7K3zyrw4Dvk",
      title: t("videoTestimonials.items.1"),
    },
    {
      id: "0-1i-VTQyQ0",
      title: t("videoTestimonials.items.2"),
    },
    {
      id: "8t9G6uKgawM",
      title: t("videoTestimonials.items.3"),
    },
  ];

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const card = container.children.item(index) as HTMLElement | null;
    if (!card) return;
    container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
    setCurrentIndex(index);
  }, []);

  const handleScrollLeft = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : videos.length - 1;
    scrollToIndex(newIndex);
    setIsAutoPlaying(false);
  };

  const handleScrollRight = () => {
    const newIndex = currentIndex < videos.length - 1 ? currentIndex + 1 : 0;
    scrollToIndex(newIndex);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index: number) => {
    scrollToIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev < videos.length - 1 ? prev + 1 : 0;
        scrollToIndex(newIndex);
        return newIndex;
      });
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, scrollToIndex, videos.length]);

  // Update current index based on scroll position
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const cards = Array.from(container.children) as HTMLElement[];
      if (!cards.length) return;

      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cards.forEach((card, index) => {
        const distance = Math.abs(container.scrollLeft - card.offsetLeft);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setCurrentIndex(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [videos.length]);

  const ratingText =
    rating !== null && count !== null
      ? tRoot("testimonials.googleSummary", {
          rating: rating.toFixed(1),
          count,
        })
      : t("videoTestimonials.rating");

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[56px_18px_56px_18px] bg-[#0c3b52] text-white shadow-[0_24px_70px_rgba(12,59,82,0.2)]">
        <div className="grid gap-8 p-8 md:grid-cols-[1.1fr_1fr] md:items-center md:p-12">
          <div className="space-y-5">
            <h3 className="text-3xl font-black leading-tight md:text-4xl">
              {t("videoTestimonials.title")}
            </h3>
            <p className="text-lg font-semibold text-white/90">{ratingText}</p>
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <svg
                  key={index}
                  className={`h-8 w-8 ${
                    index < Math.round(rating ?? 0)
                      ? "text-[#f5c245]"
                      : "text-white/40"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-lg text-white/90">
              {t("videoTestimonials.subtitle")}
            </p>
            <Button asChild className="mt-2 w-fit bg-[#D01B17] text-white hover:bg-[#b01714]">
              <Link
                href={googleMapsUrl || "/contacto#mapa"}
                target={googleMapsUrl ? "_blank" : undefined}
              >
                {t("videoTestimonials.cta")}
              </Link>
            </Button>
          </div>
          <div className="relative -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-12 md:px-12">
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-4 overflow-x-scroll scroll-smooth pb-2 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="w-full shrink-0 snap-center sm:w-[85%] md:w-[75%] lg:w-[65%]"
                >
                  <div className="overflow-hidden rounded-[28px_12px_28px_12px] bg-black/20 shadow-[0_18px_45px_rgba(0,0,0,0.2)]">
                    <div className="relative aspect-video w-full bg-black">
                      <iframe
                        title={video.title}
                        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                        className="absolute inset-0 h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      />
                    </div>
                    <div className="bg-white/10 px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:py-3 sm:text-sm">
                      {video.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Navigation arrows */}
            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition-all hover:bg-white sm:h-10 sm:w-10"
                onClick={handleScrollLeft}
                type="button"
                aria-label={t("videoTestimonials.nav.prev")}
              >
                <IconArrowNarrowLeft className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
              </button>
              
              {/* Dot indicators */}
              <div className="flex gap-2">
                {videos.map((_, index) => (
                  <button
                    key={index}
                    className={`h-2 rounded-full transition-all sm:h-2.5 ${
                      index === currentIndex
                        ? "w-6 bg-white sm:w-8"
                        : "w-2 bg-white/40 hover:bg-white/60 sm:w-2.5"
                    }`}
                    onClick={() => handleDotClick(index)}
                    type="button"
                    aria-label={t("videoTestimonials.nav.goto", { index: index + 1 })}
                  />
                ))}
              </div>
              
              <button
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition-all hover:bg-white sm:h-10 sm:w-10"
                onClick={handleScrollRight}
                type="button"
                aria-label={t("videoTestimonials.nav.next")}
              >
                <IconArrowNarrowRight className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
