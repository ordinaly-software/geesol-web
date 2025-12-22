import type { Metadata } from "next";
import AsistenciaTecnicaPage from "./page.client";
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
    path: "/services/asistencia-tecnica",
    title: isEs ? "Asistencia tecnica solar | GEESOL" : "Solar technical support | GEESOL",
    description: isEs
      ? "Mantenimiento, monitorizacion y soporte tecnico para instalaciones solares."
      : "Maintenance, monitoring, and technical support for solar installations.",
    image: "/static/plans/1_01.webp",
  });
}

export default async function AsistenciaTecnica({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <AsistenciaTecnicaPage locale={locale} />;
}
