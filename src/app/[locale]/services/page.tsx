import type { Metadata } from "next";
import ServicesPage from "./page.client";
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
    path: "/services",
    title: isEs
      ? "Servicios fotovoltaicos y autoconsumo | GEESOL"
      : "Solar services and self-consumption | GEESOL",
    description: isEs
      ? "Soluciones solares para viviendas, industria y agricultura: autoconsumo, sistemas aislados, bombeo solar y mantenimiento."
      : "Solar solutions for homes, industry, and agriculture: self-consumption, off-grid systems, solar pumping, and maintenance.",
    image: "/static/plans/2.webp",
  });
}

export default async function Services() {
  return <ServicesPage />;
}
