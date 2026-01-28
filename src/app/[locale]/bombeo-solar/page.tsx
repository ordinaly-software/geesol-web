import type { Metadata } from "next";
import BombeoSolarPage from "../empresa-placas-solares/bombeo-solar/page.client";
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
    path: "/bombeo-solar",
    title: isEs
      ? "Bombeo solar fotovoltaico para riego | Geesol Renovables"
      : "Bombeo solar fotovoltaico para riego | Geesol Renovables",
    description: isEs
      ? "Bombeo solar fotovoltaico para riego con instalaciones eficientes y ahorro energético."
      : "Bombeo solar fotovoltaico para riego con instalaciones eficientes y ahorro energético.",
    image: "/static/servicios/bombeo_solar.webp",
  });
}

export default async function BombeoSolar({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <BombeoSolarPage locale={locale} />;
}
