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
    title: isEs ? "Bombeo solar | GEESOL" : "Solar pumping | GEESOL",
    description: isEs
      ? "Sistemas de bombeo solar para agricultura y riego eficiente."
      : "Solar pumping systems for agriculture and efficient irrigation.",
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
