type LocaleKey = "es" | "en";

type LocalizedText = {
  es: string;
  en: string;
};

type ServiceGallerySource = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  images: string[];
  galleryTitle?: LocalizedText;
  galleryDescription?: LocalizedText;
};

export type ServiceGallerySection = {
  slug: string;
  title: string;
  description: string;
  images: string[];
  galleryTitle?: string;
  galleryDescription?: string;
};

const serviceGallerySource: ServiceGallerySource[] = [
  {
    slug: "autoconsumo-domestico",
    title: {
      es: "Autoconsumo doméstico",
      en: "Residential solar",
    },
    description: {
      es: "Viviendas con instalaciones optimizadas para consumo diario, máxima independencia y monitorización constante.",
      en: "Homes with systems optimized for daily consumption, maximum independence, and constant monitoring.",
    },
    galleryTitle: {
      es: "Hogares que ya aprovechan el sol",
      en: "Homes already harnessing the sun",
    },
    galleryDescription: {
      es: "Instalaciones residenciales optimizadas para diferentes tipos de tejado y consumos.",
      en: "Residential installations optimized for different roof types and consumption profiles.",
    },
    images: [
      "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_01.webp",
      "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_02.webp",
      "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_03.webp",
      "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_04.webp",
      "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_05.webp",
    ],
  },
  {
    slug: "autoconsumo-industrial",
    title: {
      es: "Autoconsumo industrial",
      en: "Industrial solar",
    },
    description: {
      es: "Proyectos para naves, cubiertas y centros logísticos diseñados para reducir costes energéticos.",
      en: "Projects for warehouses, rooftops, and logistics centers designed to reduce energy costs.",
    },
    galleryTitle: {
      es: "Cubiertas industriales en producción",
      en: "Industrial rooftops in production",
    },
    galleryDescription: {
      es: "Proyectos en naves logísticas, industria agroalimentaria y centros de distribución.",
      en: "Projects in logistics warehouses, agri-food industry, and distribution centers.",
    },
    images: [
      "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_01.webp",
      "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_02.webp",
      "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_03.webp",
      "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_04.webp",
    ],
  },
  {
    slug: "bombeo-solar",
    title: {
      es: "Bombeo solar",
      en: "Solar pumping",
    },
    description: {
      es: "Instalaciones agrícolas con variadores solares, control de caudal y ahorro operativo.",
      en: "Agricultural installations with solar drives, flow control, and operational savings.",
    },
    galleryTitle: {
      es: "Bombeos en marcha",
      en: "Pumping systems in operation",
    },
    galleryDescription: {
      es: "Instalaciones en pozos, balsas y estaciones de bombeo para diferentes cultivos.",
      en: "Installations in wells, ponds, and pumping stations for different crops.",
    },
    images: [
      "/static/servicios/bombeo_solar/bombeo_solar_01.webp",
    ],
  },
  {
    slug: "sistemas-aislados",
    title: {
      es: "Sistemas aislados de la red",
      en: "Off-grid solar systems",
    },
    description: {
      es: "Sistemas híbridos con baterías para zonas sin red, con autonomía y control remoto.",
      en: "Hybrid systems with batteries for off-grid areas, with autonomy and remote control.",
    },
    images: [
      "/static/servicios/sistemas_aislados/sistemas_aislados_01.webp",
      "/static/servicios/sistemas_aislados/sistemas_aislados_02.webp",
    ],
  },
];

const getLocaleKey = (locale: string): LocaleKey =>
  locale.startsWith("es") ? "es" : "en";

export const getServiceGallerySections = (locale: string): ServiceGallerySection[] => {
  const localeKey = getLocaleKey(locale);

  return serviceGallerySource.map((section) => ({
    slug: section.slug,
    title: section.title[localeKey],
    description: section.description[localeKey],
    images: section.images,
    galleryTitle: section.galleryTitle?.[localeKey],
    galleryDescription: section.galleryDescription?.[localeKey],
  }));
};

export const getServiceGalleryBySlug = (
  locale: string,
  slug: string
): ServiceGallerySection | undefined =>
  getServiceGallerySections(locale).find((section) => section.slug === slug);
