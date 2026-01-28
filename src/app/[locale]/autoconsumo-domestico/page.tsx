import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

export default async function AutoconsumoDomestico({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  redirect(`${basePath}/placas-solares-para-casa`);
}
