import type { Metadata } from "next";
import LegalPage from "./page.client";
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
    path: "/legal",
    title: isEs ? "Legal" : "Legal",
    description: isEs
      ? "Aviso legal, politica de privacidad y condiciones de uso de GEESOL."
      : "Legal notice, privacy policy, and terms of use for GEESOL.",
    image: "/og-image.png",
  });
}

export default async function Legal() {
  return <LegalPage />;
}
