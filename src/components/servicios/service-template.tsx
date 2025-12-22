import type React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type Highlight = {
  title: string;
  description: string;
};

type Feature = {
  title: string;
  description: string;
  icon?: string;
};

type Step = {
  title: string;
  description: string;
};

type ServicePageContent = {
  locale: string;
  title: string;
  subtitle: string;
  badge?: string;
  heroImage?: string;
  highlights: Highlight[];
  features: Feature[];
  steps: Step[];
  galleryTitle?: string;
  galleryDescription?: string;
  galleryImages?: string[];
  introSections?: Array<{
    title?: string;
    content: string;
  }>;
};

const getBasePath = (locale: string) =>
  locale === routing.defaultLocale ? "" : `/${locale}`;

const GradientCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`rounded-[28px] bg-white/80 p-6 shadow-[0_16px_45px_rgba(12,59,82,0.12)] backdrop-blur dark:bg-[#0f172a]/80 dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)] ${className}`}
  >
    {children}
  </div>
);

export const ServiceTemplate = ({
  locale,
  title,
  subtitle,
  badge,
  heroImage = "/static/home/main_home_ilustration.webp",
  highlights,
  features,
  steps,
  galleryTitle,
  galleryDescription,
  galleryImages = [],
  introSections = [],
}: ServicePageContent) => {
  const t = useTranslations("serviceTemplate");
  const contactHref = `${getBasePath(locale)}/contacto`;

  return (
    <div className="bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#0c3b52] text-white dark:bg-[#060a14]">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover opacity-80"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0c3b52]/70 via-[#0c3b52]/85 to-[#0c3b52] dark:from-black/60 dark:via-[#060a14]/90 dark:to-[#060a14]" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-16 pt-28 text-center md:pb-24 md:pt-32">
          {badge && (
            <span className="mx-auto rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#f7f2ec] shadow-lg">
              {badge}
            </span>
          )}
          <h1 className="text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-[#e9eef2]">
            {subtitle}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="px-8 py-3 text-lg uppercase">
              <Link href={contactHref}>{t("hero.primaryCta")}</Link>
            </Button>
            <Button asChild className="rounded-lg border-2 border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg text-white bg-transparent hover:bg-white hover:text-[#0c3b52] transition-colors">
              <Link href={`${getBasePath(locale)}/recomienda-y-gana`}>
                {t("hero.secondaryCta")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <GradientCard key={item.title}>
              <h3 className="mb-2 text-xl font-bold text-[#0c3b52] dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </GradientCard>
          ))}
        </div>
      </section>

      {/* Intro Sections */}
      {introSections.length > 0 && (
        <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
          <div className="mx-auto max-w-6xl space-y-8">
            {introSections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                {section.title && (
                  <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
                    {section.title}
                  </h3>
                )}
                <p className="whitespace-pre-line text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto grid max-w-6xl items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
                {t("features.eyebrow")}
              </p>
              <h2 className="text-3xl font-black text-[#0c3b52] dark:text-white">
                {t("features.title")}
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                {t("features.subtitle")}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[20px] bg-[#f7f8fb] p-5 shadow-[0_12px_32px_rgba(12,59,82,0.12)] transition hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(12,59,82,0.16)] dark:bg-[#0f172a] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                >
                  {feature.icon && <div className="mb-3 text-2xl">{feature.icon}</div>}
                  <h4 className="mb-2 text-lg font-semibold text-[#0c3b52] dark:text-white">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[32px] shadow-[0_18px_55px_rgba(12,59,82,0.16)]">
            <Image
              src={heroImage}
              alt={t("features.imageAlt", { title })}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
              {t("steps.title")}
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {t("steps.subtitle")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-3 rounded-[22px] bg-white p-6 text-left shadow-[0_10px_30px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0c3b52] text-lg font-bold text-white dark:bg-[#c83c3e]">
                  {index + 1}
                </span>
                <h4 className="text-lg font-semibold text-[#0c3b52] dark:text-white">
                  {step.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {galleryImages.length > 0 && (
        <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
          <div className="mx-auto max-w-6xl space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
                {galleryTitle || t("gallery.title")}
              </h3>
              {galleryDescription && (
                <p className="mt-3 text-gray-700 dark:text-gray-300">{galleryDescription}</p>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {galleryImages.map((src, idx) => (
                <div
                  key={`${src}-${idx}`}
                  className="group relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#f7f8fb] shadow-[0_12px_35px_rgba(12,59,82,0.14)] dark:bg-[#0f172a] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
                >
                  <Image
                    src={src}
                    alt={t("gallery.imageAlt", { index: idx + 1 })}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 30vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-[#0c3b52] px-4 py-16 text-white dark:bg-[#060a14]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h3 className="text-3xl font-black">{t("cta.title")}</h3>
          <p className="max-w-2xl text-lg text-[#e9eef2]">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="px-8 py-3 text-lg uppercase">
              <Link href={contactHref}>{t("cta.primary")}</Link>
            </Button>
            <Button asChild className="rounded-lg border-2 border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg text-white bg-transparent hover:bg-white hover:text-[#0c3b52] transition-colors">
              <Link href={`${getBasePath(locale)}/nosotros`}>{t("cta.secondary")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
