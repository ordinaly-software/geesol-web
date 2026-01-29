import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";
import EstudioGratisPage from "../estudio-gratis/page.client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEs = locale?.startsWith("es");

  return createPageMetadata({
    locale,
    path: "/solicitud-estudio-gratis",
    title: isEs
      ? "Solicitud de estudio gratis | Geesol Renovables"
      : "Free study request | Geesol Renovables",
    description: isEs
      ? "Solicita tu estudio gratuito en menos de 24 horas para instalaciones fotovoltaicas."
      : "Request your free study in under 24 hours for photovoltaic installations.",
    image: "/static/footer_background.webp",
  });
}

export default async function SolicitudEstudioGratis({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <EstudioGratisPage locale={locale} variant="paid" />;
}
