"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const ProductStarSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative bg-[#f7f8fb] py-12 md:py-20 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-black uppercase text-[#0c3b52] dark:text-white md:text-4xl">
          {t("productStar.sectionTitle")}
        </h2>
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-[#D01B17] mb-2 mt-3">
          {t("productStar.eyebrow")}
        </p>

        {/* Main carousel container */}
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-100 dark:bg-[#0f172a] dark:hover:bg-[#101c2a]"
            aria-label={t("productStar.nav.prev")}
          >
            <ChevronLeft className="h-7 w-7 text-[#0c3b52] dark:text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-colors hover:bg-gray-100 dark:bg-[#0f172a] dark:hover:bg-[#101c2a]"
            aria-label={t("productStar.nav.next")}
          >
            <ChevronRight className="h-7 w-7 text-[#0c3b52] dark:text-white" />
          </button>

          {/* Slides container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center rounded-[28px] bg-white p-6 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
                    {/* Image section */}
                    <div className="relative order-2 md:order-1">
                      <div className="relative aspect-[16/9] md:aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-[#0c3b52] to-[#14556f]">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 40vw, 100vw"
                          priority={index === 0}
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
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  currentSlide === index
                    ? "w-8 bg-[#D01B17]"
                    : "w-2.5 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={t("productStar.nav.goto", { index: index + 1 })}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
