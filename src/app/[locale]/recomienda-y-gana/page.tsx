import type { Metadata } from "next";
import RecomiendaYGanaPage from "./page.client";
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
    path: "/recomienda-y-gana",
    title: isEs ? "Recomienda y gana | GEESOL" : "Refer and earn | GEESOL",
    description: isEs
      ? "Programa de referidos para compartir GEESOL y obtener recompensas por cada instalacion completada."
      : "Referral program to share GEESOL and earn rewards for each completed installation.",
    image:
      "/static/freepik__candid-photography-with-natural-textures-and-highl__86639.jpeg",
  });
}

export default async function RecomiendaYGana({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <RecomiendaYGanaPage locale={locale} />;
}
