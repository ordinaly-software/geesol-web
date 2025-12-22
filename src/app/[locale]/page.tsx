import type { Metadata } from "next";
import HomePage from "./page.client";
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
    path: "/",
    title: isEs
      ? "GEESOL | Instalaciones fotovoltaicas y autoconsumo"
      : "GEESOL | Solar installations and self-consumption",
    description: isEs
      ? "Instalaciones solares para hogares y empresas. Estudio gratuito, gestion de ayudas y ahorro energetico."
      : "Solar installations for homes and businesses. Free assessment, subsidy handling, and energy savings.",
    image: "/static/home/main_home_ilustration.webp",
  });
}

export default async function Home() {
  return <HomePage />;
}
