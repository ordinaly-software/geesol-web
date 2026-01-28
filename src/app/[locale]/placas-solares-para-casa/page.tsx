import type { Metadata } from "next";
import AutoconsumoDomesticoPage from "../empresa-placas-solares/autoconsumo-domestico/page.client";
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
    path: "/placas-solares-para-casa",
    title: isEs
      ? "Placas solares para casas | Autoconsumo doméstico | Geesol Renovables"
      : "Placas solares para casas | Autoconsumo doméstico | Geesol Renovables",
    description: isEs
      ? "Placas solares para casas con diseño a medida, ahorro energético y gestión de ayudas."
      : "Placas solares para casas con diseño a medida, ahorro energético y gestión de ayudas.",
    image: "/static/servicios/autoconsumo_domestico.webp",
  });
}

export default async function PlacasSolaresParaCasa({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AutoconsumoDomesticoPage locale={locale} />;
}
