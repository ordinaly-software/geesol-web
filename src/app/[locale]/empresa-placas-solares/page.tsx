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
    path: "/empresa-placas-solares",
    title: isEs
      ? "Empresa de Placas Solares Fotovoltaicas | Geesol Renovables"
      : "Empresa de Placas Solares Fotovoltaicas | Geesol Renovables",
    description: isEs
      ? "Empresa instaladora de placas solares fotovoltaicas para hogares y empresas."
      : "Empresa instaladora de placas solares fotovoltaicas para hogares y empresas.",
    image: "/static/producto-estrella3.webp",
  });
}

export default async function Services() {
  return <ServicesPage />;
}
