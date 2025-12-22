import type { Metadata } from "next";
import NosotrosPage from "./page.client";
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
    path: "/nosotros",
    title: isEs
      ? "Sobre GEESOL | Equipo y experiencia en fotovoltaica"
      : "About GEESOL | Solar expertise and team",
    description: isEs
      ? "Equipo especializado en diseno, instalacion y mantenimiento de energia solar."
      : "Specialized team for solar design, installation, and maintenance.",
    image: "/static/28128.jpg",
  });
}

export default async function Nosotros({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <NosotrosPage locale={locale} />;
}
