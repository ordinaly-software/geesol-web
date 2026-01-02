import type { Metadata } from "next";
import { routing } from "@/i18n/routing";

const SITE_NAME = "GEESOL";
const FALLBACK_BASE_URL = "https://geesol.com";
const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || FALLBACK_BASE_URL).replace(/\/$/, "");

export const localeHrefLangs: Record<string, string> = {
  es: "es-ES",
  en: "en-US",
};

const brandContextByLocale: Record<string, string> = {
  es: "Instalaciones fotovoltaicas y autoconsumo",
  en: "Solar installations and self-consumption",
};

export const getBrandContext = (locale?: string) => {
  if (!locale) return brandContextByLocale.es;
  return brandContextByLocale[locale] ?? brandContextByLocale.es;
};

export const getFullBrandName = (locale?: string) => `${SITE_NAME} — ${getBrandContext(locale)}`;

export const buildSocialTitle = (pageTitle: string, locale?: string) => {
  const fullBrand = getFullBrandName(locale);
  const normalizedTitle = pageTitle?.trim();
  if (!normalizedTitle) return fullBrand;
  // Avoid duplicating the brand when the page title already contains it
  const brandContext = getBrandContext(locale);
  const containsBrand =
    normalizedTitle.includes(SITE_NAME) || normalizedTitle.includes(brandContext) ||
    normalizedTitle.includes(fullBrand);
  if (containsBrand) return normalizedTitle;
  return `${normalizedTitle} | ${fullBrand}`;
};

const ogLocales: Record<string, string> = {
  es: "es_ES",
  en: "en_US",
};

const defaultDescription =
  "Instalaciones fotovoltaicas y soluciones de autoconsumo para hogares, empresas e industria en Espana.";

type OpenGraphType =
  | "website"
  | "article"
  | "book"
  | "profile"
  | "music.song"
  | "music.album"
  | "music.playlist"
  | "music.radio_station"
  | "video.movie"
  | "video.episode"
  | "video.tv_show"
  | "video.other";
const defaultOpenGraphType: OpenGraphType = "website";

type MetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  locale?: string;
  image?: string;
  type?: OpenGraphType;
};

const normalizePath = (path?: string) => {
  if (!path || path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
};

export const absoluteUrl = (path?: string, locale?: string) => {
  const prefix = locale ? `/${locale}` : "";
  const pathname = normalizePath(path);
  return `${baseUrl}${prefix}${pathname}`;
};

export function createPageMetadata({
  title,
  description = defaultDescription,
  path,
  locale,
  image = "/og-image.png",
  type = defaultOpenGraphType,
}: MetadataOptions): Metadata {
  const url = absoluteUrl(path, locale);
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${normalizePath(image)}`;
  const ogLocale = locale ? ogLocales[locale] ?? locale : undefined;
  const socialTitle = buildSocialTitle(title, locale);

  const alternateLanguages = Object.fromEntries(
    routing.locales.map((loc) => [localeHrefLangs[loc] ?? loc, absoluteUrl(path, loc)])
  );
  alternateLanguages["x-default"] = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url, languages: alternateLanguages },
    openGraph: {
      title: socialTitle,
      description,
      url,
      siteName: SITE_NAME,
      type: type as OpenGraphType,
      locale: ogLocale,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [imageUrl],
    },
  };
}

export { baseUrl as metadataBaseUrl, SITE_NAME as siteName, defaultDescription };
