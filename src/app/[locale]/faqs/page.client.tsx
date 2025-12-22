import Banner from "@/components/ui/banner";
import BackToTopButton from "@/components/ui/back-to-top-button";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function FAQsPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const t = useTranslations("faqPage");
  const faqs = t.raw("faqs") as Array<{ question: string; answer: string }>;

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
        backgroundImage="/static/home/main_home_ilustration.webp"
      />

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-4">
          {faqs.map((item) => (
            <div
              key={item.question}
              className="rounded-[20px] bg-white p-6 shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            >
              <h3 className="text-lg font-semibold text-[#0c3b52] dark:text-white">
                {item.question}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#0c3b52] px-4 py-16 text-white dark:bg-[#060a14]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h3 className="text-3xl font-black">{t("cta.title")}</h3>
          <p className="text-lg text-[#e9eef2]">
            {t("cta.subtitle")}
          </p>
          <Button asChild className="px-8 py-3 text-lg uppercase">
            <Link href={`${basePath}/contacto`}>{t("cta.button")}</Link>
          </Button>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
}
