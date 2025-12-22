import type { Metadata } from "next";
import SistemasAisladosPage from "./page.client";
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
    path: "/services/sistemas-aislados",
    title: isEs
      ? "Sistemas aislados de red | GEESOL"
      : "Off-grid solar systems | GEESOL",
    description: isEs
      ? "Energia solar para ubicaciones sin red con baterias y sistemas hibridos."
      : "Off-grid solar solutions with batteries and hybrid systems.",
    image: "/static/plans/3.webp",
  });
}

export default async function SistemasAislados({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <SistemasAisladosPage locale={locale} />;
}
