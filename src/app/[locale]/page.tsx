import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import HomePageClient from "./page.client";


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
      ? "Instalaciones Fotovoltaicas | Instaladores fotovoltaicos"
      : "Photovoltaic installations | Photovoltaic installers",
    description: isEs
      ? "Instalaciones solares para hogares y empresas. Estudio gratuito, gestion de ayudas y ahorro energetico."
      : "Solar installations for homes and businesses. Free assessment, subsidy handling, and energy savings.",
    image: "/static/home/main_home_ilustration.webp",
  });
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomePageClient locale={locale} />;
}
