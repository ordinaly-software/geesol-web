import type { Metadata } from "next";
import FAQsPage from "./page.client";
import { createPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale?.startsWith("es");

  return createPageMetadata({
    locale,
    path: "/faqs",
    title: isEs ? "Preguntas frecuentes | GEESOL" : "FAQs | GEESOL",
    description: isEs
      ? "Resolvemos dudas sobre autoconsumo, instalacion y servicios fotovoltaicos."
      : "Answers to common questions about self-consumption, installation, and solar services.",
    image: "/static/main_home_ilustration.webp",
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
