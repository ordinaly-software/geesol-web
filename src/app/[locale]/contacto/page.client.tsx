import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import BackToTopButton from "@/components/ui/back-to-top-button";
import { HubSpotForm } from "@/components/ui/hubspot-form";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import { HUBSPOT_FORMS, HUBSPOT_PORTAL_ID, HUBSPOT_REGION } from "@/data/hubspot-forms";

const contacts = [
  { label: "phone", value: "955 73 73 22", href: "tel:955737322" },
  { label: "phone", value: "622 22 63 49", href: "tel:622226349" },
  { label: "phone", value: "678 99 91 11", href: "tel:678999111" },
  { label: "email", value: "info@geesol.com", href: "mailto:info@geesol.com" },
];

const locations = [
  {
    titleKey: "locations.andalucia.title",
    addressKey: "locations.andalucia.address",
  },
  {
    titleKey: "locations.madrid.title",
    addressKey: "locations.madrid.address",
  },
];

export default function ContactoPage({ locale }: { locale: string }) {
  const t = useTranslations("contactPage");
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const portalId = HUBSPOT_PORTAL_ID;
  const formId = HUBSPOT_FORMS.contact;

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage="/static/footer_background.webp"
      />

      <section className="px-4 py-8 sm:py-12">
        <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-white p-6 sm:p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0c3b52] dark:text-white">
              {t("contactForm.title")}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {t("contactForm.subtitle")}
            </p>
            <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {t("contactForm.seo")}
            </p>
            <div className="mt-6">
              <HubSpotForm
                portalId={portalId}
                formId={formId}
                region={HUBSPOT_REGION}
              />
            </div>
          </div>

          <div className="space-y-6 rounded-[28px] bg-white p-6 sm:p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
            <div>
              <h4 className="text-lg sm:text-xl font-semibold text-[#0c3b52] dark:text-white">
                {t("contactDetails.title")}
              </h4>
              <div className="mt-4 space-y-3">
                {contacts.map((item) => (
                  <div key={item.value} className="flex items-center justify-between rounded-[14px] bg-[#f7f8fb] px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 dark:bg-[#0b1220] dark:text-gray-200">
                    <span className="font-semibold text-[#0c3b52] dark:text-gray-100">
                      {t(`contactDetails.labels.${item.label}`)}
                    </span>
                    <a href={item.href} className="text-[#c83c3e] font-semibold hover:underline truncate">
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <h4 className="text-lg sm:text-xl font-semibold text-[#0c3b52] dark:text-white">
                {t("locations.title")}
              </h4>
              <div className="mt-4 space-y-3">
                {locations.map((loc) => (
                  <div key={loc.titleKey} className="rounded-[14px] bg-[#f7f8fb] px-3 sm:px-4 py-2 sm:py-3 dark:bg-[#0b1220]">
                    <p className="text-xs sm:text-sm font-semibold text-[#c81618]">
                      {t(loc.titleKey)}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                      {t(loc.addressKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="flex items-start gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-[#1F8A0D] bg-white/80 shadow-lg">
                  <Image
                    src="/static/chatbot_profile_picture.webp"
                    alt="Chatbot avatar"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-semibold text-[#0c3b52] dark:text-white">
                    {t("whatsapp.title")}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    {t("whatsapp.subtitle")}
                  </p>
                </div>
              </div>
                <Button
                  asChild
                  className="mt-3 w-full bg-gradient-to-br from-[#0b3c0a] to-[#1f8a0d] text-white shadow-lg shadow-[#0b3c0a]/40 hover:shadow-[#1f8a0d]/60 hover:opacity-90 transition-all duration-200 font-semibold rounded-lg"
                >
                  <a href="https://wa.me/34621151468" target="_blank" rel="noopener noreferrer">
                  {t("whatsapp.cta")}
                  </a>
                </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="mapa"
        className="bg-white px-4 py-8 sm:py-16 dark:bg-[#0b1220]"
      >
        <div className="mx-auto max-w-6xl rounded-[28px] bg-[#f7f8fb] p-6 sm:p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
          <div className="grid gap-6 lg:grid-cols-[0.6fr_1fr]">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
                {t("map.eyebrow")}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-[#0c3b52] dark:text-white">
                {t("map.title")}
              </h3>
              <p className="text-xs sm:text-base text-gray-700 dark:text-gray-300">
                {t("map.subtitle")}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {t("map.seo")}
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
                <Button asChild className="rounded-full bg-[#0c3b52] px-6 py-3 text-xs sm:text-base font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition dark:bg-[#0c3b52] dark:hover:bg-[#0a2f41]">
                  <Link href={`${basePath}/nosotros`}>{t("map.teamCta")}</Link>
                </Button>
                <Button asChild className="rounded-full bg-[#D01B17] px-6 py-3 text-xs sm:text-base font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition dark:bg-[#D01B17] dark:hover:bg-[#b01714]">
                  <Link href={`${basePath}/servicios`}>{t("map.servicesCta")}</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0c3b52] to-[#c83c3e]">
              <iframe
                title="Geesol Instalaciones Fotovoltaicas - Mapa de ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7608713633613!2d-6.0375458244239395!3d37.41912663256748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126945841445eb%3A0xcf8feb3db1c424cc!2sGeesol%20Instalaciones%20Fotovoltaicas!5e0!3m2!1ses!2ses!4v1766347986698!5m2!1ses!2ses" 
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-10 sm:py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="rounded-[28px] bg-white p-6 sm:p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0c3b52] dark:text-white">
              {t("work.title")}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {t("work.subtitle")}
            </p>
            <div className="mt-6">
              <Button asChild className="rounded-full bg-[#D01B17] px-6 py-3 text-sm sm:text-base font-semibold text-white hover:bg-[#b01714]">
                <a href="mailto:rrhh@geesol.com">{t("work.cta")}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c3b52] px-4 py-8 sm:py-16 text-white dark:bg-[#060a14]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h3 className="text-2xl sm:text-3xl font-black">
            {t("ctaPhone.title")}
          </h3>
          <p className="text-base sm:text-lg text-[#e9eef2]">
            {t("ctaPhone.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-2 sm:gap-3 w-full sm:w-auto">
            <Button asChild className="rounded-lg border-2 border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg uppercase text-white bg-transparent hover:bg-white hover:text-[#0c3b52] transition-colors">
              <Link href="tel:955737322" className="flex items-center gap-2">
                <IconArrowRight className="h-5 w-5" />
                {t("ctaPhone.primary")}
              </Link>
            </Button>
            <Button asChild className="rounded-lg border-2 border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg text-white bg-transparent hover:bg-white hover:text-[#0c3b52] transition-colors">
              <Link href={`${basePath}/recomienda-y-gana`} className="flex items-center gap-2">
                <IconArrowRight className="h-5 w-5" />
                {t("ctaPhone.secondary")}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
}
