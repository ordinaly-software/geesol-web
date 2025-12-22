"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { WobbleCard } from "@/components/ui/wobble-card";
import { getServicesMenuItems } from "@/data/services-menu";
import { useServices } from "@/hooks/useServices";

const Hero = () => {
  const t = useTranslations("home");
  return (
    <HeroHighlight containerClassName="min-h-[78vh] bg-[#f7f8fb] dark:bg-[#0b1220]">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pt-28 pb-16 sm:pt-24 sm:pb-20 lg:flex-row lg:items-stretch lg:py-20">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#f6c343] blur-xl" />
        <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-[#46B1C9]/10 blur-xl" />

        <div className="relative z-10 flex-1 space-y-6 text-left order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0c3b52] dark:text-[#e9eef2]">
            {t("hero.eyebrow")}
          </p>
          <h1 className="text-4xl font-black leading-tight text-[#0c3b52] dark:text-white md:text-5xl lg:text-6xl">
            {t("hero.titleStart")}{" "}
            <Highlight className="from-[#f6c343] to-[#f59e0b] text-[#0c3b52]">
              {t("hero.titleHighlight")}
            </Highlight>{" "}
            {t("hero.titleEnd")}
          </h1>
          <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300 md:text-xl">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap gap-3">
            {(t.raw("hero.tags") as string[]).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0c3b52] shadow-sm dark:bg-[#0f172a] dark:text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild className="text-lg px-8 py-3 uppercase">
              <Link href="#cta">{t("hero.cta")}</Link>
            </Button>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {t("hero.subtext")}
            </span>
          </div>
        </div>

        <div className="relative z-10 flex-1 order-1 lg:order-2">
          <div className="relative h-[360px] overflow-hidden rounded-[36px] bg-white shadow-[0_24px_70px_rgba(12,59,82,0.28)] dark:bg-[#0f172a] sm:h-[420px] lg:h-[520px]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c3b52]/10 via-transparent to-[#D01B17]/10 z-10" />
            <Image
              src="/static/main_home_ilustration.webp"
              alt={t("hero.imageAlt")}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 bg-white/90 px-6 py-4 text-sm font-semibold text-[#0c3b52] backdrop-blur dark:bg-[#0b1220]/90 dark:text-gray-100 z-20">
              <span>{t("hero.imageCaptionLeft")}</span>
              <span>{t("hero.imageCaptionRight")}</span>
            </div>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};

const HighlightCards = () => {
  const t = useTranslations("home");
  const highlights = [
    {
      title: t("highlights.items.0.title"),
      description: t("highlights.items.0.description"),
      icon: "⚡️",
    },
    {
      title: t("highlights.items.1.title"),
      description: t("highlights.items.1.description"),
      icon: "💶",
    },
    {
      title: t("highlights.items.2.title"),
      description: t("highlights.items.2.description"),
      icon: "🌞",
    },
  ];
  return (
    <section className="-mt-12 bg-transparent px-4 pb-12 md:-mt-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] bg-white p-6 shadow-[0_12px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_12px_45px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-4 text-3xl">{item.icon}</div>
            <h3 className="mb-2 text-xl font-bold text-[#0c3b52] dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const TwoColumnFeature = () => {
  const t = useTranslations("home");
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[32px] shadow-[0_18px_55px_rgba(12,59,82,0.16)]">
          <Image
            src="/static/main_home_ilustration.webp"
            alt={t("twoColumn.imageAlt")}
            width={1400}
            height={900}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
        </div>
        <div className="space-y-4 rounded-[28px] bg-[#f7f8fb] p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
            {t("twoColumn.eyebrow")}
          </p>
          <h2 className="text-3xl font-black text-[#0c3b52] dark:text-white">
            {t("twoColumn.title")}
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            {t("twoColumn.paragraph1")}
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            {t("twoColumn.paragraph2")}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {(t.raw("twoColumn.tags") as string[]).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0c3b52] shadow-sm dark:bg-[#0b1220] dark:text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const t = useTranslations();
  return <TestimonialsSection t={t} />;
};

const SuccessCases = () => {
  const t = useTranslations("home");
  const successCases = [
    { title: t("successCases.items.0.title"), image: "/static/plans/1.webp" },
    { title: t("successCases.items.1.title"), image: "/static/plans/2.webp" },
    { title: t("successCases.items.2.title"), image: "/static/plans/3.webp" },
    { title: t("successCases.items.3.title"), image: "/static/plans/1_01.webp" },
  ];
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
            {t("successCases.title")}
          </h3>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {successCases.map((item) => (
            <div
              key={item.title}
              className="min-w-[240px] flex-1 rounded-[24px] bg-white shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-t-[24px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
              <div className="p-4 text-center font-semibold text-[#0c3b52] dark:text-white">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductStar = () => {
  const t = useTranslations("home");
  const productFeatures = [
    {
      title: t("productStar.items.0.title"),
      description: t("productStar.items.0.description"),
    },
    {
      title: t("productStar.items.1.title"),
      description: t("productStar.items.1.description"),
    },
    {
      title: t("productStar.items.2.title"),
      description: t("productStar.items.2.description"),
    },
    {
      title: t("productStar.items.3.title"),
      description: t("productStar.items.3.description"),
    },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-[#0c3b52] px-4 py-16 text-white dark:bg-[#060a14]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1800&q=80"
          alt={t("productStar.imageAlt")}
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c3b52]/90 via-[#0c3b52]/90 to-[#0c3b52] dark:from-black/75 dark:via-[#060a14]/90 dark:to-[#060a14]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7f2ec]">
            {t("productStar.eyebrow")}
          </p>
          <h3 className="text-3xl font-black">
            {t("productStar.titleStart")}{" "}
            <span className="text-[#f3a019]">{t("productStar.titleHighlight")}</span>
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[20px] bg-white/10 p-5 text-left shadow-[0_12px_32px_rgba(0,0,0,0.15)] backdrop-blur"
            >
              <h4 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-100">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild className="px-8 py-3 text-lg uppercase">
            <Link href="#cta">{t("productStar.cta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const HandOffGrid = () => {
  const t = useTranslations("home");
  const handOffFeatures = [
    {
      title: t("handOff.items.0.title"),
      description: t("handOff.items.0.description"),
      icon: "💡",
    },
    {
      title: t("handOff.items.1.title"),
      description: t("handOff.items.1.description"),
      icon: "📄",
    },
    {
      title: t("handOff.items.2.title"),
      description: t("handOff.items.2.description"),
      icon: "🛠️",
    },
    {
      title: t("handOff.items.3.title"),
      description: t("handOff.items.3.description"),
      icon: "🤝",
    },
    {
      title: t("handOff.items.4.title"),
      description: t("handOff.items.4.description"),
      icon: "🏡",
    },
    {
      title: t("handOff.items.5.title"),
      description: t("handOff.items.5.description"),
      icon: "💳",
    },
  ];
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-6xl">
        <h3 className="mb-10 text-center text-3xl font-black text-[#0c3b52] dark:text-white">
          {t("handOff.title")}
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {handOffFeatures.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-[22px] bg-[#f7f8fb] p-6 shadow-[0_10px_30px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <span className="text-2xl">{item.icon}</span>
              <h4 className="text-lg font-semibold text-[#0c3b52] dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstallationTypes = () => {
  const t = useTranslations("home");
  const locale = useLocale() || "es";
  const { services } = useServices();
  const fallbackProducts = useMemo(
    () =>
      getServicesMenuItems(locale).map((item, index) => ({
        id: `fallback-${index}`,
        slug: item.slug,
        title: item.title,
        description: item.description,
        image: item.image,
      })),
    [locale],
  );
  const products = useMemo(() => {
    const liveProducts = services.filter((service) => service.type === "PRODUCT");
    if (liveProducts.length > 0) {
      return liveProducts.map((service) => ({
        id: service.id,
        slug: service.slug ?? String(service.id),
        title: service.title,
        description: service.clean_description || service.description,
        image: service.image || "/static/plans/1.webp",
      }));
    }
    return fallbackProducts;
  }, [services, fallbackProducts]);
  return (
    <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
            {t("installationTypes.title")}
          </h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            {t("installationTypes.description")}
          </p>
        </div>
        <div className="relative">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]">
          {products.map((item) => (
            <Link
              key={item.id}
              href={`/services/${item.slug}`}
              className="block h-full min-w-[260px] max-w-[320px] flex-1 snap-start sm:min-w-[300px] lg:min-w-[320px]"
            >
              <WobbleCard
                containerClassName="group h-full bg-white dark:bg-[#0b1220] border border-white/70 dark:border-white/10"
                className="h-full px-6 py-8"
              >
                <div className="flex h-full flex-col">
                  <div className="relative mb-5 h-40 w-full overflow-hidden rounded-[20px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#0c3b52] dark:text-white">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                  <div className="mt-auto pt-5">
                    <Button
                      className="w-full rounded-full bg-[#0c3b52] px-4 py-3 text-sm font-semibold uppercase text-white shadow-[0_10px_25px_rgba(12,59,82,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#0a2f41] dark:bg-[#f6c343] dark:text-[#0b1220] dark:hover:bg-[#f4b91c]"
                      aria-label={`${t("installationTypes.cta")}: ${item.title}`}
                    >
                      {t("installationTypes.cta")}
                    </Button>
                  </div>
                </div>
              </WobbleCard>
            </Link>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ReferralSection = () => {
  const t = useTranslations("home");
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[32px] bg-[#f7f8fb] p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)] lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-black text-[#0c3b52] dark:text-white">
            {t("referral.title")}
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            {t("referral.description")}
          </p>
          <Button asChild className="px-6 py-3 uppercase">
            <Link href="/recomienda-y-gana">{t("referral.cta")}</Link>
          </Button>
        </div>
        <div className="relative flex-1">
          <div className="relative mx-auto h-[320px] w-[220px] overflow-hidden rounded-[28px] border border-white shadow-[0_18px_45px_rgba(12,59,82,0.2)]">
            <Image
              src="static/geesol_app_on_phone.webp"
              alt={t("referral.imageAlt")}
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  const t = useTranslations("home");
  const stats = [
    { value: t("stats.items.0.value"), label: t("stats.items.0.label") },
    { value: t("stats.items.1.value"), label: t("stats.items.1.label") },
    { value: t("stats.items.2.value"), label: t("stats.items.2.label") },
  ];
  return (
    <section
      id="cta"
      className="bg-[#0c3b52] px-4 py-12 text-white dark:bg-[#060a14]"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div className="grid w-full gap-6 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-[18px] bg-white/10 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.15)] backdrop-blur dark:bg-white/5"
            >
              <div className="text-3xl font-black">{stat.value}</div>
              <div className="text-sm text-gray-100">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-black">
            {t("stats.title")}
          </h3>
          <p className="mt-2 max-w-2xl text-gray-100">
            {t("stats.description")}
          </p>
        </div>
        <Button asChild className="px-8 py-3 text-lg uppercase">
          <Link href="#cta">{t("stats.cta")}</Link>
        </Button>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Hero />
      <HighlightCards />
      <TwoColumnFeature />
      <Testimonials />
      <SuccessCases />
      <ProductStar />
      <HandOffGrid />
      <InstallationTypes />
      <ReferralSection />
      <StatsBar />
    </div>
  );
}
