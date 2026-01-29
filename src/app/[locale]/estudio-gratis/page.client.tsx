"use client";

import { HandOffGridSection } from "@/components/home/hand-off-grid";
import { HighlightCardsSection } from "@/components/home/highlight-cards";
import { InstallationTypesSection } from "@/components/home/installation-types";
import { HomeTestimonials } from "@/components/home/testimonials-wrapper";
import { TwoColumnFeatureSection } from "@/components/home/two-column-feature";
import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import { HubSpotForm } from "@/components/ui/hubspot-form";
import { HUBSPOT_FORMS, HUBSPOT_PORTAL_ID, HUBSPOT_REGION } from "@/data/hubspot-forms";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useState } from "react";

type EstudioGratisVariant = "organic" | "paid";

export default function EstudioGratisPage({
  locale: _locale,
  variant = "organic",
}: {
  locale: string;
  variant?: EstudioGratisVariant;
}) {
  const t = useTranslations("freeStudyPage");
  const portalId = HUBSPOT_PORTAL_ID;
  const forms =
    variant === "paid"
      ? {
          header: HUBSPOT_FORMS.freeStudyPaidHeader,
          footer: HUBSPOT_FORMS.freeStudyPaidFooter,
        }
      : {
          header: HUBSPOT_FORMS.freeStudyOrganicHeader,
          footer: HUBSPOT_FORMS.freeStudyOrganicFooter,
        };
  const headerFormId = forms.header;
  const footerFormId = forms.footer;
  const benefits = t.raw("benefits.items") as Array<{ title: string; description: string }>;

  const [reviewMeta, setReviewMeta] = useState<{
    rating: number | null;
    count: number | null;
    googleMapsUrl?: string;
  }>({ rating: null, count: null });

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage="/static/footer_background.webp"
      >
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="px-6 py-3 text-sm sm:text-base uppercase">
            <Link href="/contacto">{t("hero.contactCta")}</Link>
          </Button>
          <Button
            asChild
            className="rounded-lg border-2 border-white px-6 py-3 text-sm sm:text-base text-white bg-transparent hover:bg-white hover:text-[#0c3b52] transition-colors"
          >
            <Link href="#free-study-form">{t("hero.formCta")}</Link>
          </Button>
        </div>
      </Banner>

      <section id="free-study-form" className="px-4 py-10 sm:py-16 scroll-mt-24">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0 rounded-[28px] bg-white p-6 sm:p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c81618]">
              {t("hero.eyebrow")}
            </p>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0c3b52] dark:text-white">
              {t("hero.formTitle")}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {t("hero.formSubtitle")}
            </p>
            <div className="mt-6">
              <HubSpotForm
                portalId={portalId}
                formId={headerFormId}
                region={HUBSPOT_REGION}
              />
            </div>
          </div>

          <div className="min-w-0 rounded-[28px] bg-white p-6 sm:p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0c3b52] dark:text-white">
              {t("benefits.title")}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {t("benefits.subtitle")}
            </p>
            <div className="mt-6 grid gap-4">
              {benefits.map((item) => (
                <div
                  key={item.title}
                  className="min-w-0 rounded-[18px] bg-[#f7f8fb] px-4 py-4 text-sm text-gray-700 shadow-sm dark:bg-[#0b1220] dark:text-gray-200"
                >
                  <p className="font-semibold text-[#0c3b52] dark:text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HighlightCardsSection />
      <InstallationTypesSection />
      <HomeTestimonials onMetaUpdate={setReviewMeta} />
      <HandOffGridSection />
      <TwoColumnFeatureSection />

      <section className="bg-[#0c3b52] px-4 py-12 sm:py-16 text-white dark:bg-[#060a14]">
        <div className="mx-auto max-w-5xl text-center">
          <h3 className="text-2xl sm:text-3xl font-black">
            {t("footerForm.title")}
          </h3>
          <p className="mt-3 text-base sm:text-lg text-[#e9eef2]">
            {t("footerForm.subtitle")}
          </p>
          <div className="mt-6 rounded-[24px] bg-white/10 p-6 sm:p-8 shadow-[0_18px_45px_rgba(0,0,0,0.25)]">
            <HubSpotForm
              portalId={portalId}
              formId={footerFormId}
              region={HUBSPOT_REGION}
            />
          </div>
          <p className="mt-4 text-xs sm:text-sm text-[#d9e4ec]">
            {t("footerForm.note")}
          </p>
        </div>
      </section>
    </div>
  );
}
