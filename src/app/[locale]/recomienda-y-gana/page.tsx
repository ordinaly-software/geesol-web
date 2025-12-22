import type { Metadata } from "next";
import RecomiendaYGanaPage from "./page.client";
import { createPageMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "referralPage" });

  return createPageMetadata({
    locale,
    path: "/recomienda-y-gana",
    title: t("meta.title"),
    description: t("meta.description"),
    image:
      "/static/freepik__candid-photography-with-natural-textures-and-highl__86639.jpeg",
  });
}

export default async function RecomiendaYGana({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <RecomiendaYGanaPage locale={locale} />;
}
