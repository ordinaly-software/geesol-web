"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { WorkWithUsSection } from "@/components/ui/work-with-us";
import { HubSpotForm } from "@/components/ui/hubspot-form";
import { HighlightedCarousel } from "@/components/blog/highlighted-carousel";
import { Rocket, ArrowRight, Users2 } from "lucide-react";
import { PartnersSection } from "@/components/ui/partners-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import type { BlogPost } from "@/components/blog/types";
import { Link } from "@/i18n/navigation";

export default function UsPage({ highlightedNews }: { highlightedNews: BlogPost[] }) {
  const t = useTranslations("usPage");
  const t_common = useTranslations();
  const t_about = useTranslations("aboutPage");
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

  return (
    <div className="bg-[#F9FAFB] dark:bg-[#0b1220] text-white min-h-screen">
      <section className="relative overflow-hidden">
        <Image
          src="/static/nosotros/quienes-somos-header.webp"
          alt={t("hero.imageAlt")}
          fill
          className="object-cover blur-sm brightness-[.9]"
          priority
        />
        <div className="absolute inset-0 bg-black/30 dark:bg-black/50" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-white font-semibold">
                <Users2 className="h-4 w-4" />
                {t("hero.tagline")}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                {t("hero.title")}
              </h1>
              <p className="text-lg text-white max-w-2xl">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  className="bg-[#c81618] hover:bg-[#a31214] text-white gap-2"
                  asChild
                >
                  <a href="#news">
                  <Rocket className="h-4 w-4" />
                  {t("hero.ctaPrimary")}
                  </a>
                </Button>
                <Button asChild className="rounded-lg border-2 border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg text-white bg-transparent hover:bg-white hover:text-[#0c3b52] transition-colors">
                  <a href="#cta">
                    <ArrowRight className="h-4 w-4" />
                    {t("cta.secondary")}
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -inset-6 bg-white/40 dark:bg-white/5 blur-3xl rounded-full" />
              <div className="relative rounded-3xl overflow-hidden border border-white/40 dark:border-white/10 shadow-2xl bg-gradient-to-br from-white/70 to-white/40 dark:from-white/5 dark:to-white/0 p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-white/90 dark:bg-white/5 border border-gray-200/70 dark:border-white/10 p-4 space-y-2 shadow-sm">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{t("hero.missionLabel")}</p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">{t("mission.title")}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t("mission.body")}</p>
                  </div>
                  <div className="rounded-2xl bg-white/90 dark:bg-white/5 border border-gray-200/70 dark:border-white/10 p-4 space-y-2 shadow-sm">
                    <p className="text-sm text-gray-600 dark:text-gray-300">{t("hero.visionLabel")}</p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">{t("vision.title")}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{t("vision.body")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersSection
        eyebrow={t_about("partners.eyebrow")}
        title={t_about("partners.title")}
        showMoreLabel={t_about("partners.showMore")}
        showLessLabel={t_about("partners.showLess")}
      />

      <section id="news" className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          {t("news.title")}
        </h2>
        <Button asChild className="bg-[#c81618] hover:bg-[#a31214] text-white gap-2">
          <Link href="/noticias">
            {t("news.viewAll")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
          </div>
          <HighlightedCarousel posts={highlightedNews} namespace="news"/>
        </div>
      </section>

      <WorkWithUsSection id="cta" />

      <TestimonialsSection t={t_common} />

      <section className="bg-[#0c3b52] px-4 py-16 text-white dark:bg-[#060a14]">
        <div className="mx-auto max-w-5xl rounded-[28px] bg-white/10 p-6 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f4d0d0]">
              {t("form.eyebrow")}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold">
              {t("form.title")}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#e9eef2]">
              {t("form.subtitle")}
            </p>
          </div>
          <div className="mt-6">
            <HubSpotForm portalId={portalId} formId={formId} />
          </div>
        </div>
      </section>
      
    </div>
  );
}
