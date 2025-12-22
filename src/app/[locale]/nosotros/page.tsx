import type { Metadata } from "next";
import NosotrosPage from "./page.client";
import { createPageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "aboutPage" });

  return createPageMetadata({
    locale,
    path: "/nosotros",
    title: t("meta.title"),
    description: t("meta.description"),
    image: "/static/nosotros/nosotros_background.webp",
  });
}

export default async function Nosotros({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <NosotrosPage locale={locale} />;
}
