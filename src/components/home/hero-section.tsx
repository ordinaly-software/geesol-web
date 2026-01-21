"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

export const HeroSection = () => {
  const t = useTranslations("home");
  return (
    <HeroHighlight containerClassName="min-h-[78vh] bg-[#f7f8fb] dark:bg-[#0b1220]">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-12 lg:gap-16 px-3 sm:px-4 pt-2 sm:pt-8 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 lg:flex-row lg:items-stretch lg:py-20">
        <div className="absolute -left-40 -top-20 hidden h-56 w-56 rounded-full bg-[#f6c343] blur-xl lg:block" />
        <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[#46B1C9]/10 blur-xl sm:h-56 sm:w-56 lg:-bottom-24 lg:right-0" />

        <div className="relative z-10 flex-1 order-1 lg:order-2">
          <div className="relative h-[220px] sm:h-[320px] lg:h-[520px] overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px] bg-white shadow-[0_8px_24px_rgba(12,59,82,0.18)] sm:shadow-[0_24px_70px_rgba(12,59,82,0.28)] dark:bg-[#0f172a]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c3b52]/10 via-transparent to-[#D01B17]/10 z-10" />
            <Image
              src="/static/home/main_home_ilustration.webp"
              alt={t("hero.imageAlt")}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
              fetchPriority="high"
              quality={70}
              sizes="(min-width: 1024px) 50vw, (min-width: 640px) 90vw, 100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-2 bg-white/90 px-3 sm:px-6 py-2 sm:py-4 text-xs sm:text-sm font-semibold text-[#0c3b52] backdrop-blur dark:bg-[#0b1220]/90 dark:text-gray-100 z-20">
              <span>{t("hero.imageCaptionLeft")}</span>
              <span>{t("hero.imageCaptionRight")}</span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex-1 space-y-4 sm:space-y-6 text-left order-2 lg:order-1">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#0c3b52] dark:text-[#e9eef2]">
            {t("hero.eyebrow")}
          </p>
          <h1 className="text-2xl font-black leading-tight sm:leading-snug text-[#0c3b52] dark:text-white sm:text-4xl md:text-5xl lg:text-6xl break-words">
            {t("hero.titleStart")}{" "}
            <Highlight className="from-[#f6c343] to-[#f59e0b] text-[#0c3b52]">
              {t("hero.titleHighlight")}
            </Highlight>{" "}
            {t("hero.titleEnd")}
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-gray-700 dark:text-gray-300 md:text-xl leading-relaxed">
            {t("hero.description")}
          </p>
          <div className="hidden sm:flex flex-wrap gap-2 sm:gap-3">
            {(t.raw("hero.tags") as string[]).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-[#0c3b52] shadow-sm dark:bg-[#0f172a] dark:text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-6 sm:gap-10 lg:flex-row lg:items-center lg:gap-4 pt-4 sm:pt-6">
            <Button asChild className="w-full text-base sm:text-lg px-6 sm:px-8 py-2.5 sm:py-3 uppercase sm:w-auto">
              <Link href="#cta">{t("hero.cta")}</Link>
            </Button>
            <span className="hidden sm:flex text-xs sm:text-sm font-semibold text-gray-600 dark:text-gray-300">
              {t("hero.subtext")}
            </span>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};
