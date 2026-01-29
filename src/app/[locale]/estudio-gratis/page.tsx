import type { Metadata } from "next";
import EstudioGratisPage from "./page.client";
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
    path: "/estudio-gratis",
    title: isEs ? "Estudio gratis | GEESOL" : "Free study | GEESOL",
    description: isEs
      ? "Solicita tu estudio gratuito de autoconsumo y recibe una propuesta personalizada en menos de 24 horas."
      : "Request a free self-consumption study and receive a tailored proposal in under 24 hours.",
    image: "/static/home/main_home_ilustration.webp",
  });
}

export default async function EstudioGratis({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <EstudioGratisPage locale={locale} variant="organic" />;
}
