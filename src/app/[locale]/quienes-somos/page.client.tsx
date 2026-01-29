"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { WorkWithUsSection } from "@/components/ui/work-with-us";
import { HubSpotForm } from "@/components/ui/hubspot-form";
import { HighlightedCarousel } from "@/components/blog/highlighted-carousel";
import { Rocket, ArrowRight, Users2, Home, Factory, Users, Sprout, Shield, Star, Award, TrendingUp, Leaf, Coins } from "lucide-react";
import { PartnersSection } from "@/components/ui/partners-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import type { BlogPost } from "@/components/blog/types";
import { Link } from "@/i18n/navigation";
import { HUBSPOT_FORMS, HUBSPOT_PORTAL_ID, HUBSPOT_REGION } from "@/data/hubspot-forms";

export default function UsPage({ highlightedNews }: { highlightedNews: BlogPost[] }) {
  const t = useTranslations("usPage");
  const t_common = useTranslations();
  const t_about = useTranslations("aboutPage");
  const portalId = HUBSPOT_PORTAL_ID;
  const formId = HUBSPOT_FORMS.footer;

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

      {/* Business Model Section */}
      <section className="bg-white dark:bg-[#0b1220] px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c81618] mb-3">
              {t("businessModel.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("businessModel.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("businessModel.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-[24px] bg-gradient-to-br from-[#f7f8fb] to-white dark:from-[#0f172a] dark:to-[#0b1220] p-6 shadow-[0_12px_35px_rgba(12,59,82,0.12)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] border border-gray-200/50 dark:border-gray-700/50">
              <div className="h-12 w-12 rounded-full bg-[#c81618]/10 dark:bg-[#c81618]/20 flex items-center justify-center mb-4">
                <Home className="h-6 w-6 text-[#c81618]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t("businessModel.segments.residential.title")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("businessModel.segments.residential.description")}
              </p>
            </div>

            <div className="rounded-[24px] bg-gradient-to-br from-[#f7f8fb] to-white dark:from-[#0f172a] dark:to-[#0b1220] p-6 shadow-[0_12px_35px_rgba(12,59,82,0.12)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] border border-gray-200/50 dark:border-gray-700/50">
              <div className="h-12 w-12 rounded-full bg-[#c81618]/10 dark:bg-[#c81618]/20 flex items-center justify-center mb-4">
                <Factory className="h-6 w-6 text-[#c81618]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t("businessModel.segments.industrial.title")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("businessModel.segments.industrial.description")}
              </p>
            </div>

            <div className="rounded-[24px] bg-gradient-to-br from-[#f7f8fb] to-white dark:from-[#0f172a] dark:to-[#0b1220] p-6 shadow-[0_12px_35px_rgba(12,59,82,0.12)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] border border-gray-200/50 dark:border-gray-700/50">
              <div className="h-12 w-12 rounded-full bg-[#c81618]/10 dark:bg-[#c81618]/20 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#c81618]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t("businessModel.segments.communities.title")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("businessModel.segments.communities.description")}
              </p>
            </div>

            <div className="rounded-[24px] bg-gradient-to-br from-[#f7f8fb] to-white dark:from-[#0f172a] dark:to-[#0b1220] p-6 shadow-[0_12px_35px_rgba(12,59,82,0.12)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] border border-gray-200/50 dark:border-gray-700/50">
              <div className="h-12 w-12 rounded-full bg-[#c81618]/10 dark:bg-[#c81618]/20 flex items-center justify-center mb-4">
                <Sprout className="h-6 w-6 text-[#c81618]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{t("businessModel.segments.agriculture.title")}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("businessModel.segments.agriculture.description")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="bg-[#F9FAFB] dark:bg-[#0f172a] px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c81618] mb-3">
              {t("competitiveAdvantages.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("competitiveAdvantages.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-[#c81618] to-[#f25f5c] flex items-center justify-center mb-4 shadow-lg">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t("competitiveAdvantages.customerRating.title")}
              </h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              </div>
              <p className="text-2xl font-bold text-[#c81618] mb-2">{t("competitiveAdvantages.customerRating.rating")}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("competitiveAdvantages.customerRating.description")}
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-[#c81618] to-[#f25f5c] flex items-center justify-center mb-4 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t("competitiveAdvantages.warranty.title")}
              </h3>
              <p className="text-2xl font-bold text-[#c81618] mb-2">{t("competitiveAdvantages.warranty.years")}</p>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                {(t.raw("competitiveAdvantages.warranty.features") as string[]).map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="text-center md:col-span-2 lg:col-span-1">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-[#c81618] to-[#f25f5c] flex items-center justify-center mb-4 shadow-lg">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {t("competitiveAdvantages.experience.title")}
              </h3>
              <p className="text-2xl font-bold text-[#c81618] mb-2">{t("competitiveAdvantages.experience.installations")}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {t("competitiveAdvantages.experience.description")}
              </p>
            </div>
          </div>

          <div className="mt-12 rounded-[28px] bg-white dark:bg-[#0b1220] p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-[#c81618]" />
                  {t("competitiveAdvantages.service.title")}
                </h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{t("competitiveAdvantages.service.metrics.speed")}</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <div key={i} className="h-2 w-8 rounded-full bg-[#c81618]" />)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{t("competitiveAdvantages.service.metrics.quality")}</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <div key={i} className="h-2 w-8 rounded-full bg-[#c81618]" />)}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600 dark:text-gray-300">{t("competitiveAdvantages.service.metrics.support")}</span>
                    <div className="flex gap-0.5">
                      {[1,2,3,4,5].map(i => <div key={i} className="h-2 w-8 rounded-full bg-[#c81618]" />)}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{t("competitiveAdvantages.personalizedAttention.title")}</h4>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  {(t.raw("competitiveAdvantages.personalizedAttention.features") as string[]).map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#c81618] mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{t("competitiveAdvantages.technology.title")}</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#0c3b52] text-white text-xs font-semibold">Huawei</span>
                  <span className="px-3 py-1 rounded-full bg-[#0c3b52] text-white text-xs font-semibold">Enphase</span>
                  <span className="px-3 py-1 rounded-full bg-[#0c3b52] text-white text-xs font-semibold">Alto</span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                  {t("competitiveAdvantages.technology.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Solutions */}
      <section className="bg-white dark:bg-[#0b1220] px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c81618] mb-3">
              {t("financialSolutions.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t("financialSolutions.title")}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t("financialSolutions.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="rounded-[24px] bg-gradient-to-br from-[#f7f8fb] to-white dark:from-[#0f172a] dark:to-[#0b1220] p-6 shadow-[0_12px_35px_rgba(12,59,82,0.12)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] border-2 border-[#c81618]/20">
              <div className="h-12 w-12 rounded-full bg-[#0c3b52]/10 dark:bg-[#0c3b52]/20 flex items-center justify-center mb-4">
                <Coins className="h-6 w-6 text-[#0c3b52]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{t("financialSolutions.options.directPurchase.title")}</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                {(t.raw("financialSolutions.options.directPurchase.features") as string[]).map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] bg-gradient-to-br from-[#f7f8fb] to-white dark:from-[#0f172a] dark:to-[#0b1220] p-6 shadow-[0_12px_35px_rgba(12,59,82,0.12)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] border-2 border-[#c81618]/20">
              <div className="h-12 w-12 rounded-full bg-[#c81618]/10 dark:bg-[#c81618]/20 flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-[#c81618]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{t("financialSolutions.options.ppa.title")}</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                {(t.raw("financialSolutions.options.ppa.features") as string[]).map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] bg-gradient-to-br from-[#f7f8fb] to-white dark:from-[#0f172a] dark:to-[#0b1220] p-6 shadow-[0_12px_35px_rgba(12,59,82,0.12)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] border-2 border-[#c81618]/20">
              <div className="h-12 w-12 rounded-full bg-[#0c3b52]/10 dark:bg-[#0c3b52]/20 flex items-center justify-center mb-4">
                <Award className="h-6 w-6 text-[#0c3b52]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{t("financialSolutions.options.renting.title")}</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                {(t.raw("financialSolutions.options.renting.features") as string[]).map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-[24px] bg-gradient-to-br from-[#f7f8fb] to-white dark:from-[#0f172a] dark:to-[#0b1220] p-6 shadow-[0_12px_35px_rgba(12,59,82,0.12)] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] border-2 border-[#c81618]/20">
              <div className="h-12 w-12 rounded-full bg-[#c81618]/10 dark:bg-[#c81618]/20 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-[#c81618]" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">{t("financialSolutions.options.maintenance.title")}</h3>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
                {(t.raw("financialSolutions.options.maintenance.features") as string[]).map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[28px] bg-gradient-to-br from-[#0c3b52] to-[#0c3b52]/90 dark:from-[#060a14] dark:to-[#0b1220] p-8 text-white shadow-[0_16px_45px_rgba(12,59,82,0.2)]">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">{t("financialSolutions.benefits.title")}</h3>
                <ul className="space-y-3">
                  {(t.raw("financialSolutions.benefits.items") as Array<{title: string; description: string}>).map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {i === 0 && <Shield className="h-5 w-5 text-[#f4d0d0] mt-1 flex-shrink-0" />}
                      {i === 1 && <TrendingUp className="h-5 w-5 text-[#f4d0d0] mt-1 flex-shrink-0" />}
                      {i === 2 && <Leaf className="h-5 w-5 text-[#f4d0d0] mt-1 flex-shrink-0" />}
                      {i === 3 && <Coins className="h-5 w-5 text-[#f4d0d0] mt-1 flex-shrink-0" />}
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-gray-300">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[20px] bg-white/10 backdrop-blur p-6 border border-white/20">
                <blockquote className="text-lg font-medium mb-4">
                  "{t("financialSolutions.benefits.quote")}"
                </blockquote>
                <p className="text-sm text-[#f4d0d0] font-semibold">{t("financialSolutions.benefits.quoteSource")}</p>
                <a href="https://www.confianzageesol.com" className="text-sm text-white hover:text-[#f4d0d0] underline">
                  {t("financialSolutions.benefits.quoteLink")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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
        <div className="hubspot-light mx-auto max-w-5xl rounded-[28px] bg-white p-6 sm:p-8 text-[#0c1f2d] shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c81618]">
              {t("form.eyebrow")}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0c3b52]">
              {t("form.title")}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700">
              {t("form.subtitle")}
            </p>
          </div>
          <div className="mt-6">
            <HubSpotForm portalId={portalId} formId={formId} region={HUBSPOT_REGION} />
          </div>
        </div>
      </section>
      
    </div>
  );
}
