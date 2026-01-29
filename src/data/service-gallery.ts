type LocaleKey = "es" | "en";

type LocalizedText = {
  es: string;
  en: string;
};

type GalleryImageSource = {
  src: string;
  alt: LocalizedText;
  title: LocalizedText;
};

type ServiceGallerySource = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  images: GalleryImageSource[];
  galleryTitle?: LocalizedText;
  galleryDescription?: LocalizedText;
};

export type ServiceGalleryImage = {
  src: string;
  alt: string;
  title: string;
};

export type ServiceGallerySection = {
  slug: string;
  title: string;
  description: string;
  images: ServiceGalleryImage[];
  galleryTitle?: string;
  galleryDescription?: string;
};

const imageWithText = (src: string, title: string): GalleryImageSource => ({
  src,
  alt: { es: title, en: title },
  title: { es: title, en: title },
});

const serviceGallerySource: ServiceGallerySource[] = [
  {
    slug: "autoconsumo-domestico",
    title: {
      es: "Autoconsumo doméstico con placas solares",
      en: "Residential solar self-consumption",
    },
    description: {
      es: "Instalaciones residenciales que reducen la factura y elevan la independencia energética con monitorización en tiempo real.",
      en: "Residential systems that cut bills and boost energy independence with real-time monitoring.",
    },
    galleryTitle: {
      es: "Casos reales de autoconsumo en viviendas",
      en: "Real residential solar case studies",
    },
    galleryDescription: {
      es: "Tejados, chalets y comunidades que ya producen su propia energía con paneles solares.",
      en: "Rooftops, homes, and communities already generating their own solar power.",
    },
    images: [
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_01.webp",
        "Autoconsumo fotovoltaico en vivienda de Sotogrande (Cádiz)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_02.webp",
        "Autoconsumo fotovoltaico en vivienda de Sevilla (centro)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_03.webp",
        "Autoconsumo fotovoltaico en vivienda de Jerez de la Frontera (Cádiz)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_04.webp",
        "Autoconsumo fotovoltaico en vivienda de Jerez de la Frontera (Cádiz)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_05.webp",
        "Instalación fotovoltaica en vivienda de Alcalá del Río (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_06.webp",
        "Autoconsumo en vivienda de Bormujos (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_07.webp",
        "Instalación en Alcalá de Guadaíra (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_08.webp",
        "Instalación en Carmona (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_09.webp",
        "Instalación en Conil de la Frontera (Cádiz)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_10.webp",
        "Instalación en Coria del Río (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_11.webp",
        "Instalación en Dos Hermanas (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_12.webp",
        "Instalación en Dos Hermanas (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_13.webp",
        "Instalación en El Puerto de Santa María (Cádiz)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_14.webp",
        "Instalación en El Puerto de Santa María (Cádiz)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_15.jpeg",
        "Instalación en Espartinas (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_16.jpeg",
        "Instalación en La Campana (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_domestico/autoconsumo_domestico_17.jpeg",
        "Instalación en Palomares del Río (Sevilla)"
      ),
    ],
  },
  {
    slug: "autoconsumo-industrial",
    title: {
      es: "Autoconsumo industrial para empresas",
      en: "Industrial solar self-consumption",
    },
    description: {
      es: "Cubiertas industriales con diseños a medida para maximizar producción y retorno.",
      en: "Custom industrial rooftops designed to maximize production and ROI.",
    },
    galleryTitle: {
      es: "Proyectos industriales en funcionamiento",
      en: "Industrial projects in operation",
    },
    galleryDescription: {
      es: "Naves, fábricas y centros logísticos con energía solar integrada.",
      en: "Warehouses, factories, and logistics centers with integrated solar power.",
    },
    images: [
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_01.webp",
        "Instalaciones para Grupo Insur (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_02.webp",
        "Instalación en el Real Club de Golf de Sevilla"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_03.webp",
        "Instalación en Presmar en Villaverde del Río (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_04.webp",
        "Instalación en nave industrial en Coria del Río (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_05.webp",
        "Instalación en nave industrial Polígono Parsi (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_06.webp",
        "Instalación en nave industrial en Sevilla"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_07.webp",
        "Instalación en nave industrial en Sevilla"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_08.webp",
        "Instalación en estación de servicio (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_09.webp",
        "Instalación en estación de servicio (Jerez de la Frontera)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_1.webp",
        "Instalación en Valverde del Camino (Huelva)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_11.webp",
        "Instalación en Villanueva del Ariscal (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_12.webp",
        "Instalación en San José de la Rinconada (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_13.webp",
        "Instalación en San Juan de Aznalfarache (Sevilla)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_14.jpeg",
        "Instalación en La Palma del Condado (Huelva)"
      ),
      imageWithText(
        "/static/servicios/autoconsumo_industrial/autoconsumo_industrial_15.jpeg",
        "Instalación en Mairena del Aljarafe (Sevilla)"
      ),
    ],
  },
  {
    slug: "bombeo-solar",
    title: {
      es: "Bombeo solar para riego eficiente",
      en: "Solar pumping for efficient irrigation",
    },
    description: {
      es: "Sistemas fotovoltaicos que garantizan caudal estable y ahorro en explotaciones agrícolas.",
      en: "PV systems that deliver stable flow and savings for agricultural operations.",
    },
    galleryTitle: {
      es: "Bombeo solar en campo",
      en: "Solar pumping in the field",
    },
    galleryDescription: {
      es: "Pozos, balsas y riegos alimentados por energía solar.",
      en: "Wells, ponds, and irrigation systems powered by solar energy.",
    },
    images: [
      imageWithText(
        "/static/servicios/bombeo_solar/bombeo_solar_01.webp",
        "Instalación en La Palma del Condado (Huelva)"
      ),
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
      imageWithText(
        "/static/servicios/sistemas_aislados/sistemas_aislados_01.webp",
        "Instalación fotovoltaica aislada con baterías"
      ),
      imageWithText(
        "/static/servicios/sistemas_aislados/sistemas_aislados_02.webp",
        "Sistema fotovoltaico aislado con autonomía"
      ),
    ],
  }
];

const getLocaleKey = (locale: string): LocaleKey =>
  locale.startsWith("es") ? "es" : "en";

export const getServiceGallerySections = (locale: string): ServiceGallerySection[] => {
  const localeKey = getLocaleKey(locale);

  return serviceGallerySource.map((section) => ({
    slug: section.slug,
    title: section.title[localeKey],
    description: section.description[localeKey],
    images: section.images.map((image) => ({
      src: image.src,
      alt: image.alt[localeKey],
      title: image.title[localeKey],
    })),
    galleryTitle: section.galleryTitle?.[localeKey],
    galleryDescription: section.galleryDescription?.[localeKey],
  }));
};

export const getServiceGalleryBySlug = (
  locale: string,
  slug: string
): ServiceGallerySection | undefined =>
  getServiceGallerySections(locale).find((section) => section.slug === slug);
