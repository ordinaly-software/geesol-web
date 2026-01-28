import type { Metadata } from "next";
import GaleriaInstalacionesPage from "../empresa-placas-solares/galeria-instalaciones/page.client";
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
    path: "/galeria-instalaciones",
    title: isEs ? "Galeria de instalaciones | GEESOL" : "Installation gallery | GEESOL",
    description: isEs
      ? "Casos reales y proyectos de instalaciones fotovoltaicas en hogares y empresas."
      : "Real projects and photovoltaic installations for homes and businesses.",
    image: "/static/producto-estrella3.webp",
  });
}

export default async function GaleriaInstalaciones({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <GaleriaInstalacionesPage locale={locale} />;
}
