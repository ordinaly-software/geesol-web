import type { Metadata } from "next";
import AutoconsumoIndustrialPage from "../empresa-placas-solares/autoconsumo-industrial/page.client";
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
    path: "/autoconsumo-industrial",
    title: isEs
      ? "Placas solares para empresas | Geesol Renovables"
      : "Placas solares para empresas | Geesol Renovables",
    description: isEs
      ? "Placas solares para empresas con análisis de retorno, instalación y mantenimiento integral."
      : "Placas solares para empresas con análisis de retorno, instalación y mantenimiento integral.",
    image: "/static/servicios/autoconsumo_industrial.webp",
  });
}

export default async function AutoconsumoIndustrial({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AutoconsumoIndustrialPage locale={locale} />;
}
