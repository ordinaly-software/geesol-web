import type { Metadata } from "next";
import ContactoPage from "./page.client";
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
    path: "/contacto",
    title: isEs ? "Contacto | GEESOL" : "Contact | GEESOL",
    description: isEs
      ? "Solicita un estudio gratuito de tu instalacion fotovoltaica. Respuesta en menos de 24 horas."
      : "Request a free assessment of your solar installation. We reply within 24 hours.",
    image: "/static/footer_background.webp",
  });
}

export default async function Contacto({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <ContactoPage locale={locale} />;
}
