import type { Metadata } from "next";
import MantenimientoInstalacionesFotovoltaicasPage from "../empresa-placas-solares/mantenimiento-instalaciones-fotovoltaicas/page.client";
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
    path: "/mantenimiento-instalaciones-fotovoltaicas",
    title: isEs
      ? "Mantenimiento instalaciones fotovoltaicas | Geesol Renovables"
      : "Photovoltaic maintenance | Geesol Renovables",
    description: isEs
      ? "Mantenimiento, revisión y asistencia técnica para garantizar el rendimiento de tu instalación fotovoltaica."
      : "Maintenance, inspections, and technical support to keep your photovoltaic system performing at its best.",
    image: "/static/servicios/autoconsumo_industrial.webp",
  });
}

export default async function MantenimientoInstalacionesFotovoltaicas({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <MantenimientoInstalacionesFotovoltaicasPage locale={locale} />;
}
