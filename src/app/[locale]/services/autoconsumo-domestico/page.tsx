import type { Metadata } from "next";
import AutoconsumoDomesticoPage from "./page.client";
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
    path: "/services/autoconsumo-domestico",
    title: isEs ? "Autoconsumo domestico | GEESOL" : "Residential solar | GEESOL",
    description: isEs
      ? "Instalaciones solares para viviendas, ahorro en factura y gestion de ayudas."
      : "Residential solar installations, bill savings, and subsidy management.",
    image: "/static/plans/1.webp",
  });
}

export default async function AutoconsumoDomestico({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AutoconsumoDomesticoPage locale={locale} />;
}
