import type { Metadata } from "next";
import SistemasAisladosPage from "../empresa-placas-solares/sistemas-aislados/page.client";
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
    path: "/sistemas-aislados",
    title: isEs
      ? "Instalaciones fotovoltaicas aisladas | Geesol Renovables"
      : "Instalaciones fotovoltaicas aisladas | Geesol Renovables",
    description: isEs
      ? "Instalaciones fotovoltaicas aisladas para zonas sin red con baterías y autonomía."
      : "Instalaciones fotovoltaicas aisladas para zonas sin red con baterías y autonomía.",
    image: "/static/servicios/sistemas_aislados.webp",
  });
}

export default async function SistemasAislados({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SistemasAisladosPage locale={locale} />;
}
