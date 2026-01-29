 "use client";

import Image from "next/image";
import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import { PartnersSection } from "@/components/ui/partners-section";
import YoutubeEmbed from "@/components/ui/youtube-embed";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { Target, Eye, Lightbulb, Users, TrendingUp, Wrench, MapPin, Leaf } from "lucide-react";

export default function NosotrosPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const t = useTranslations("aboutPage");
  const teamRoles = t.raw("team.roles") as string[];
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

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

      {/* Purpose, Mission & Vision */}
      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618] mb-3">
              {t("purposeMissionVision.eyebrow")}
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0c3b52] dark:text-white">
              {t("purposeMissionVision.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-[24px] bg-gradient-to-br from-[#c81618] to-[#f25f5c] p-8 text-white shadow-[0_16px_45px_rgba(200,22,24,0.3)]">
              <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("purposeMissionVision.purpose.label")}</h3>
              <p className="text-lg font-semibold mb-3">
                "{t("purposeMissionVision.purpose.text")}"
              </p>
            </div>

            <div className="rounded-[24px] bg-gradient-to-br from-[#0c3b52] to-[#0c3b52]/90 p-8 text-white shadow-[0_16px_45px_rgba(12,59,82,0.3)]">
              <div className="h-14 w-14 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mb-6">
                <Eye className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("purposeMissionVision.vision.label")}</h3>
              <p className="text-base leading-relaxed">
                {t("purposeMissionVision.vision.text")}
              </p>
            </div>

            <div className="rounded-[24px] bg-gradient-to-br from-[#f7f8fb] to-white dark:from-[#0f172a] dark:to-[#0b1220] p-8 border-2 border-[#0c3b52]/20 dark:border-[#0c3b52]/40 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
              <div className="h-14 w-14 rounded-full bg-[#0c3b52]/10 dark:bg-[#0c3b52]/20 flex items-center justify-center mb-6">
                <Lightbulb className="h-7 w-7 text-[#0c3b52]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#0c3b52] dark:text-white">{t("purposeMissionVision.mission.label")}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {t("purposeMissionVision.mission.text")}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t("purposeMissionVision.mission.description")}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-gray-700 dark:text-gray-300">
                {(t.raw("purposeMissionVision.mission.features") as string[]).map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c81618] mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
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
                    src="/static/nosotros/unef.webp"
                    alt="UNEF - Unión Española Fotovoltaica"
                    width={240}
                    height={120}
                    className="h-auto max-h-24 w-auto object-contain"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <Image
                    src="/static/nosotros/cesur.webp"
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

      {/* Key Resources and Activities */}
      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Key Resources */}
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-[#0c3b52] dark:text-white mb-8">
                {t("keyResources.title")}
              </h2>
              <div className="space-y-6">
                {(t.raw("keyResources.items") as Array<{icon: string, title: string, description: string}>).map((resource, i) => {
                  const icons = [Users, TrendingUp, Wrench, MapPin, Leaf];
                  const Icon = icons[i];
                  
                  return (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="h-12 w-12 rounded-full bg-[#0c3b52]/10 dark:bg-[#0c3b52]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-[#0c3b52]" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#0c3b52] dark:text-white mb-2">{resource.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{resource.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Key Activities */}
            <div className="rounded-[24px] bg-gradient-to-br from-[#c81618] to-[#f25f5c] p-8 text-white shadow-[0_16px_45px_rgba(200,22,24,0.3)]">
              <h2 className="text-3xl md:text-4xl font-black mb-8">
                {t("keyActivities.title")}
              </h2>
              <div className="space-y-6">
                {(t.raw("keyActivities.items") as Array<{title: string, description: string}>).map((activity, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="h-10 w-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0 font-bold text-lg">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{activity.title}</h3>
                      <p className="text-white/90">{activity.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PartnersSection
        eyebrow={t("partners.eyebrow")}
        title={t("partners.title")}
        showMoreLabel={t("partners.showMore")}
        showLessLabel={t("partners.showLess")}
      />

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
            <Link href={`${basePath}/estudio-gratis`}>{t("cta.button")}</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
