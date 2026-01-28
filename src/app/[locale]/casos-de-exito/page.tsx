import type { Metadata } from "next";
import CasosDeExitoPage from "../empresa-placas-solares/casos-de-exito/page.client";
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
    path: "/casos-de-exito",
    title: isEs ? "Casos de éxito | GEESOL" : "Success stories | GEESOL",
    description: isEs
      ? "Casos de éxito y proyectos reales de instalaciones fotovoltaicas en hogares y empresas."
      : "Success stories and real photovoltaic installation projects for homes and businesses.",
    image: "/static/producto-estrella3.webp",
  });
}

export default async function CasosDeExito({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <CasosDeExitoPage locale={locale} />;
}
