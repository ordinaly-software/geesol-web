 "use client";

import Image from "next/image";
import { useState } from "react";
import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import YoutubeEmbed from "@/components/ui/youtube-embed";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ChevronDown, ChevronUp } from "lucide-react";

const partners = [
  { name: "APsystems", src: "/static/nosotros/ap-system.jpg" },
  { name: "Enphase", src: "/static/nosotros/enphase.jpg" },
  { name: "Exiom Group", src: "/static/nosotros/exiom-group.jpg" },
  { name: "Fronius", src: "/static/nosotros/fronius.jpg" },
  { name: "Huawei", src: "/static/nosotros/huawei.jpg" },
  { name: "Jinko Solar", src: "/static/nosotros/jinko-solar.jpg" },
  { name: "Kostal", src: "/static/nosotros/kostal.jpg" },
  { name: "REC", src: "/static/nosotros/rec.jpg" },
  { name: "Schneider", src: "/static/nosotros/sheneider.jpg" },
  { name: "Siemens", src: "/static/nosotros/siemens.jpg" },
  { name: "SMA", src: "/static/nosotros/sma.jpg" },
  { name: "SolarEdge", src: "/static/nosotros/solar-edge.jpg" },
  { name: "SunPower", src: "/static/nosotros/sunpower.jpg" },
  { name: "Victron Energy", src: "/static/nosotros/victron.jpg" },
];

export default function NosotrosPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const t = useTranslations("aboutPage");
  const teamRoles = t.raw("team.roles") as string[];
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;
  const [partnersExpanded, setPartnersExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage="/static/nosotros/nosotros_background.webp"
      />

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[28px] bg-white/90 p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] backdrop-blur dark:bg-[#0f172a]/90 dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
              {t("story.eyebrow")}
            </p>
            <h2 className="text-3xl font-black text-[#0c3b52] dark:text-white">
              {t("story.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("story.paragraphs.0")}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              {t("story.paragraphs.1")}
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#0c3b52] dark:text-gray-100">
                {t("team.title")}
              </p>
              <div className="flex flex-wrap gap-3">
                {teamRoles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-[#0c3b52] px-4 py-2 text-sm font-semibold text-white shadow-sm dark:bg-[#c83c3e]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-[18px] bg-[#f7f8fb] px-4 py-4 text-center shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                >
                  <div className="text-2xl font-black text-[#0c3b52] dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="px-6 py-3">
                <Link href={`${basePath}/contacto`}>{t("actions.primary")}</Link>
              </Button>
              <Button
                asChild
                className="px-6 py-3 bg-gradient-to-r from-[#c83c3e] to-[#f25f5c] text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                <Link href={`${basePath}/servicios`}>{t("actions.secondary")}</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[24px] shadow-[0_16px_45px_rgba(12,59,82,0.2)]">
            <Image
              src="/static/nosotros/nosotros_background.webp"
              alt={t("story.imageAlt")}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[18px] bg-white/90 p-4 text-sm text-[#0c3b52] shadow-lg backdrop-blur">
              {t("story.caption")}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] bg-white p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
            <div className="space-y-8 text-center">
              <h3 className="text-2xl font-black text-[#0c3b52] dark:text-white md:text-3xl">
                {t("associations.title")}
              </h3>
              <div className="grid gap-12 sm:grid-cols-2 items-center justify-center">
                <div className="flex items-center justify-center">
                  <Image
                    src="/static/nosotros/unef.png"
                    alt="UNEF - Unión Española Fotovoltaica"
                    width={240}
                    height={120}
                    className="h-auto max-h-24 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/static/nosotros/cesur.png"
                    alt="CESUR - Asociación de Empresarios del Sur de España"
                    width={240}
                    height={120}
                    className="h-auto max-h-24 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
              {t("partners.eyebrow")}
            </p>
            <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
              {t("partners.title")}
            </h3>
          </div>
          <div className="relative">
            <div
              className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-5 transition-[max-height] duration-300 ${
                partnersExpanded ? "max-h-[2000px]" : "max-h-[280px] overflow-hidden"
              } sm:max-h-none sm:overflow-visible`}
            >
              {partners.map((partner) => (
                <div
                  key={partner.name}
                  className="flex items-center justify-center rounded-[18px] border border-gray-200 bg-[#f7f8fb] px-4 py-6 shadow-sm dark:border-gray-700 dark:bg-[#0f172a]"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="h-12 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
            {!partnersExpanded && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-[#0b1220] sm:hidden" />
            )}
          </div>
          <div className="flex justify-center sm:hidden">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0c3b52] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-[#0f172a] dark:text-white"
              onClick={() => setPartnersExpanded((prev) => !prev)}
              aria-label={partnersExpanded ? t("partners.showLess") : t("partners.showMore")}
            >
              {partnersExpanded ? (
                <ChevronUp className="h-6 w-6" />
              ) : (
                <ChevronDown className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-white p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">{t("location.eyebrow")}</p>
              <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
                {t("location.title")}
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                {t("location.address")}
              </p>
              <div className="rounded-[18px] bg-[#f7f8fb] px-4 py-3 text-sm font-semibold text-[#0c3b52] dark:bg-[#0f172a] dark:text-gray-100">
                {t("location.serviceArea")}
              </div>
              <Button asChild className="mt-2 w-fit">
                <Link href={`${basePath}/contacto`}>{t("location.cta")}</Link>
              </Button>
            </div>
            <div className="relative h-80 overflow-hidden rounded-[22px] bg-white shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
              <iframe
                title={t("location.mapTitle")}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7608713633613!2d-6.0375458244239395!3d37.41912663256748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126945841445eb%3A0xcf8feb3db1c424cc!2sGeesol%20Instalaciones%20Fotovoltaicas!5e0!3m2!1ses!2ses!4v1766347986698!5m2!1ses!2ses"
                width="100%"
                height="100%"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] bg-[#0c3b52] px-6 py-10 text-center text-white shadow-[0_16px_45px_rgba(12,59,82,0.2)] dark:bg-[#060a14]">
            <h3 className="text-2xl font-bold">{t("video.title")}</h3>
            <p className="mt-2 text-sm text-[#e9eef2]">
              {t("video.subtitle")}
            </p>
            <div className="mt-6 overflow-hidden rounded-[20px] bg-black/40">
              <YoutubeEmbed
                videoId="8KZRSF5x7hw"
                title={t("video.iframeTitle")}
                playLabel={t("video.play")}
                playAriaLabel={t("video.playAria")}
                consentTitle={t("video.consentTitle")}
                consentText={t("video.consentText")}
                openLabel={t("video.open")}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h3 className="text-3xl font-black text-[#0c3b52] dark:text-white">
            {t("cta.title")}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t("cta.subtitle")}
          </p>
          <Button asChild className="px-8 py-3 text-lg uppercase">
            <Link href={`${basePath}/contacto`}>{t("cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
