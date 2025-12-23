"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";

export const ProductStarSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const t = useTranslations("home");

  const slides = [
    {
      brand: t("productStar.items.0.brand"),
      title: t("productStar.items.0.title"),
      subtitle: t("productStar.items.0.subtitle"),
      description: t("productStar.items.0.description"),
      warranty: t("productStar.items.0.warranty"),
      warrantyDetail: t("productStar.items.0.warrantyDetail"),
      cta: t("productStar.items.0.cta"),
      image: "/static/product_star/seguridad.webp"
    },
    {
      brand: t("productStar.items.1.brand"),
      title: t("productStar.items.1.title"),
      subtitle: t("productStar.items.1.subtitle"),
      description: t("productStar.items.1.description"),
      warranty: t("productStar.items.1.warranty"),
      warrantyDetail: t("productStar.items.1.warrantyDetail"),
      cta: t("productStar.items.1.cta"),
      image: "/static/product_star/ventajas.webp"
    },
    {
      brand: t("productStar.items.2.brand"),
      title: t("productStar.items.2.title"),
      subtitle: t("productStar.items.2.subtitle"),
      description: t("productStar.items.2.description"),
      warranty: t("productStar.items.2.warranty"),
      warrantyDetail: t("productStar.items.2.warrantyDetail"),
      cta: t("productStar.items.2.cta"),
      image: "/static/product_star/garantia.webp"
    },
    {
      brand: t("productStar.items.3.brand"),
      title: t("productStar.items.3.title"),
      subtitle: t("productStar.items.3.subtitle"),
      description: t("productStar.items.3.description"),
      warranty: t("productStar.items.3.warranty"),
      warrantyDetail: t("productStar.items.3.warrantyDetail"),
      cta: t("productStar.items.3.cta"),
      image: "/static/product_star/monitorizacion.webp"
    }
  ];

  const scrollToIndex = useCallback((index: number) => {
      const container = scrollRef.current;
      if (!container) return;

      const card = container.children.item(index) as HTMLElement | null;
      if (!card) return;
      container.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
      setCurrentSlide(index);
    }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const nextIndex = (prev + 1) % slides.length;
        scrollToIndex(nextIndex);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, scrollToIndex, slides.length]);

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

      setCurrentSlide(closestIndex);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    scrollToIndex(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    scrollToIndex(nextIndex);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    scrollToIndex(prevIndex);
    setIsAutoPlaying(false);
  };

  const stopAutoPlay = () => {
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-[#f7f8fb] py-12 md:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black uppercase text-[#0c3b52] dark:text-white md:text-4xl">
          {t("productStar.sectionTitle")}
        </h2>
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-red-800 dark:text-red-300 mb-2 mt-3">
          {t("productStar.eyebrow")}
        </p>

        {/* Main carousel container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white sm:h-10 sm:w-10"
            aria-label={t("productStar.nav.prev")}
          >
            <IconArrowNarrowLeft className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white sm:h-10 sm:w-10"
            aria-label={t("productStar.nav.next")}
          >
            <IconArrowNarrowRight className="h-5 w-5 text-gray-700 sm:h-6 sm:w-6" />
          </button>

          {/* Slides container */}
          <div
            ref={scrollRef}
            className="flex items-stretch snap-x snap-mandatory gap-6 overflow-x-scroll scroll-smooth pb-4 touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            onWheel={stopAutoPlay}
            onTouchStart={stopAutoPlay}
            onPointerDown={stopAutoPlay}
          >
              {slides.map((slide, index) => (
                <div key={index} className="w-full shrink-0 snap-center self-stretch">
                  <div className="grid h-full min-h-[520px] gap-8 items-center rounded-[28px] bg-white p-6 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)] md:min-h-[440px] md:grid-cols-2 md:gap-12 lg:min-h-[420px]">
                    {/* Image section */}
                    <div className="relative order-2 md:order-1">
                      <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c3b52] to-[#14556f]">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          quality={70}
                        />
                      </div>
                    </div>

                    {/* Content section */}
                      <div className="order-1 md:order-2 space-y-4">
                        <div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#0c3b52] dark:text-white mb-2">
                          {slide.brand}
                        </h2>
                        <h3 className="text-2xl md:text-3xl font-bold text-[#0c3b52] dark:text-white">
                          {slide.title}
                        </h3>
                      </div>

                      {slide.subtitle && (
                        <h4 className="text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-300">
                          {slide.subtitle}
                        </h4>
                      )}

                      {slide.description && (
                        <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                          {slide.description}
                        </p>
                      )}

                      {(slide.warranty || slide.warrantyDetail) && (
                        <p className="text-base text-gray-600 dark:text-gray-400">
                          {slide.warranty && (
                            <span className="font-bold text-gray-900 dark:text-white">
                              {slide.warranty}
                            </span>
                          )}
                          {slide.warrantyDetail}
                        </p>
                      )}

                      {slide.cta && (
                        <div className="pt-4">
                          <Button asChild className="px-8 py-3 text-sm uppercase">
                            <Link href="#cta">{slide.cta}</Link>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className="flex h-11 w-11 items-center justify-center"
                aria-label={t("productStar.nav.goto", { index: index + 1 })}
              >
                <span
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "w-8 bg-[#D01B17]"
                      : "w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
