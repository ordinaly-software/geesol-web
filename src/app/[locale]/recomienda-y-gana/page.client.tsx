import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import BackToTopButton from "@/components/ui/back-to-top-button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { IconBrandAppstore, IconBrandGooglePlay, IconArrowRight } from "@tabler/icons-react";
import { useTranslations } from "next-intl";

export default function RecomiendaYGanaPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const t = useTranslations("referralPage");
  const steps = t.raw("steps") as Array<{ title: string; description: string }>;
  const quickSteps = t.raw("quickSteps") as string[];
  const qrCards = t.raw("qrCards") as Array<{ label: string; description: string }>;

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage="/static/product_star/monitorizacion.webp"
      />

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {quickSteps.map((title, idx) => (
            <div
              key={title}
              className="rounded-[28px] bg-white/90 p-6 text-left shadow-[0_16px_45px_rgba(12,59,82,0.12)] backdrop-blur dark:bg-[#0f172a]/90 dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0c3b52] text-white dark:bg-[#c83c3e]">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-[#0c3b52] dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {t(`quickStepsDescriptions.${idx}`)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
              {t("app.eyebrow")}
            </p>
            <h2 className="text-3xl font-black text-[#0c3b52] dark:text-white">
              {t("app.title")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              {t("app.description")}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full bg-[#0c3b52] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition dark:bg-[#0c3b52] dark:hover:bg-[#0a2f41]">
                <Link href="https://apps.apple.com" target="_blank">
                  <IconBrandAppstore/>
                  {t("app.store.apple")}
                </Link>
              </Button>
              <Button asChild className="rounded-full bg-[#D01B17] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition dark:bg-[#D01B17] dark:hover:bg-[#b01714]">
                <Link href="https://play.google.com" target="_blank">
                  <IconBrandGooglePlay/>
                  {t("app.store.google")}
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {qrCards.map((card) => (
              <div
                key={card.label}
                className="flex flex-col items-center gap-4 rounded-[24px] bg-[#f7f8fb] p-6 text-center shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
              >
                <div className="flex h-40 w-40 items-center justify-center rounded-[18px] bg-gradient-to-br from-gray-200 to-white text-gray-600 dark:from-neutral-800 dark:to-neutral-900">
                  <span className="text-sm font-semibold">{t("app.qrLabel", { store: card.label })}</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
              {t("how.title")}
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              {t("how.subtitle")}
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-[22px] bg-white p-6 text-left shadow-[0_10px_30px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <h4 className="text-lg font-semibold text-[#0c3b52] dark:text-white">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c3b52] px-4 py-16 text-white dark:bg-[#060a14]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h3 className="text-3xl font-black">{t("cta.title")}</h3>
          <p className="text-lg text-[#e9eef2]">
            {t("cta.subtitle")}
          </p>
          <Button asChild className="rounded-lg border-2 border-white px-8 py-3 text-lg font-bold uppercase text-white bg-transparent hover:bg-white hover:text-[#0c3b52] transition-colors">
            <Link href={`${basePath}/contacto`} className="flex items-center gap-3">
              <IconArrowRight className="h-5 w-5" />
              {t("cta.button")}
            </Link>
          </Button>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
}
