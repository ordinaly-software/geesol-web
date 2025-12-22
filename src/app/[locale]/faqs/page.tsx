import type { Metadata } from "next";
import FAQsPage from "./page.client";
import { createPageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "faqPage" });

  return createPageMetadata({
    locale,
    path: "/faqs",
    title: t("meta.title"),
    description: t("meta.description"),
    image: "/static/home/main_home_ilustration.webp",
  });
}

export default async function FAQs({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <FAQsPage locale={locale} />;
}
