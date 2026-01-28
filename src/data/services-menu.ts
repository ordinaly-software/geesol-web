type LocaleKey = "es" | "en";

type LocalizedText = {
  es: string;
  en: string;
};

type ServicesMenuSource = {
  slug: string;
  title: LocalizedText;
  description: LocalizedText;
  image: string;
};

export type ServicesMenuItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

const servicesMenuSource: ServicesMenuSource[] = [
  {
    slug: "autoconsumo-domestico",
    title: {
      es: "Autoconsumo domestico",
      en: "Residential solar",
    },
    description: {
      es: "Instalaciones solares para viviendas, ahorro en factura y gestion de ayudas.",
      en: "Residential solar installations, bill savings, and subsidy management.",
    },
    image: "/static/servicios/autoconsumo_domestico.webp",
  },
  {
    slug: "autoconsumo-industrial",
    title: {
      es: "Autoconsumo industrial",
      en: "Industrial solar",
    },
    description: {
      es: "Soluciones solares para empresas e industria con analisis de retorno y planificacion de obra.",
      en: "Industrial solar solutions with ROI analysis and project planning.",
    },
    image: "/static/servicios/autoconsumo_industrial.webp",
  },
  {
    slug: "bombeo-solar",
    title: {
      es: "Bombeo solar",
      en: "Solar pumping",
    },
    description: {
      es: "Sistemas de bombeo solar para agricultura y riego eficiente.",
      en: "Solar pumping systems for agriculture and efficient irrigation.",
    },
    image: "/static/servicios/bombeo_solar.webp",
  },
  {
    slug: "casos-de-exito",
    title: {
      es: "Casos de éxito",
      en: "Success stories",
    },
    description: {
      es: "Casos reales y proyectos destacados de instalaciones fotovoltaicas.",
      en: "Real projects and success stories of photovoltaic installations.",
    },
    image: "/static/producto-estrella3.webp",
  },
  {
    slug: "sistemas-aislados",
    title: {
      es: "Sistemas aislados de red",
      en: "Off-grid solar systems",
    },
    description: {
      es: "Energia solar para ubicaciones sin red con baterias y sistemas hibridos.",
      en: "Off-grid solar solutions with batteries and hybrid systems.",
    },
    image: "/static/servicios/sistemas_aislados.webp",
  },
  {
    slug: "mantenimiento-instalaciones-fotovoltaicas",
    title: {
      es: "Mantenimiento",
      en: "Maintenance",
    },
    description: {
      es: "Revisiones, limpieza y asistencia técnica para maximizar el rendimiento.",
      en: "Inspections, cleaning, and technical support to maximize performance.",
    },
    image:
      "/static/servicios/mantenimiento-instalaciones-fotovoltaicas/mantenimiento-instalaciones-fotovoltaicas_1.webp",
  },
];

export const getServicesMenuItems = (locale: string): ServicesMenuItem[] => {
  const localeKey: LocaleKey = locale.startsWith("es") ? "es" : "en";
  return servicesMenuSource.map((item) => ({
    slug: item.slug,
    title: item.title[localeKey],
    description: item.description[localeKey],
    image: item.image,
  }));
};
