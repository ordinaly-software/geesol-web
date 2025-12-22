import type { Metadata } from "next";
import AutoconsumoIndustrialPage from "./page.client";
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
    path: "/services/autoconsumo-industrial",
    title: isEs ? "Autoconsumo industrial | GEESOL" : "Industrial solar | GEESOL",
    description: isEs
      ? "Soluciones solares para empresas e industria con analisis de retorno y planificacion de obra."
      : "Industrial solar solutions with ROI analysis and project planning.",
    image: "/static/plans/2.webp",
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
