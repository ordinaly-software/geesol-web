import { routing } from "@/i18n/routing";
import { NotFoundContent } from "./not-found-content";

type Locale = (typeof routing.locales)[number];

export default async function NotFoundPage({
  params,
}: {
  params?: { locale?: string };
}) {
  const requestedLocale = params?.locale ?? "";
  const isValidLocale = routing.locales.includes(requestedLocale as Locale);
  const locale = isValidLocale
    ? (requestedLocale as Locale)
    : (routing.defaultLocale as Locale);

  return <NotFoundContent locale={locale} />;
}
