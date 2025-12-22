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
    slug: "asistencia-tecnica",
    title: {
      es: "Asistencia tecnica solar | GEESOL",
      en: "Solar technical support | GEESOL",
    },
    description: {
      es: "Mantenimiento, monitorizacion y soporte tecnico para instalaciones solares.",
      en: "Maintenance, monitoring, and technical support for solar installations.",
    },
    image: "/static/plans/1_01.webp",
  },
  {
    slug: "autoconsumo-domestico",
    title: {
      es: "Autoconsumo domestico | GEESOL",
      en: "Residential solar | GEESOL",
    },
    description: {
      es: "Instalaciones solares para viviendas, ahorro en factura y gestion de ayudas.",
      en: "Residential solar installations, bill savings, and subsidy management.",
    },
    image: "/static/plans/1.webp",
  },
  {
    slug: "autoconsumo-industrial",
    title: {
      es: "Autoconsumo industrial | GEESOL",
      en: "Industrial solar | GEESOL",
    },
    description: {
      es: "Soluciones solares para empresas e industria con analisis de retorno y planificacion de obra.",
      en: "Industrial solar solutions with ROI analysis and project planning.",
    },
    image: "/static/plans/2.webp",
  },
  {
    slug: "bombeo-solar",
    title: {
      es: "Bombeo solar | GEESOL",
      en: "Solar pumping | GEESOL",
    },
    description: {
      es: "Sistemas de bombeo solar para agricultura y riego eficiente.",
      en: "Solar pumping systems for agriculture and efficient irrigation.",
    },
    image: "/static/plans/2_01.webp",
  },
  {
    slug: "galeria-instalaciones",
    title: {
      es: "Galeria de instalaciones | GEESOL",
      en: "Installation gallery | GEESOL",
    },
    description: {
      es: "Casos reales y proyectos de instalaciones fotovoltaicas en hogares y empresas.",
      en: "Real projects and photovoltaic installations for homes and businesses.",
    },
    image: "/static/plans/2.webp",
  },
  {
    slug: "sistemas-aislados",
    title: {
      es: "Sistemas aislados de red | GEESOL",
      en: "Off-grid solar systems | GEESOL",
    },
    description: {
      es: "Energia solar para ubicaciones sin red con baterias y sistemas hibridos.",
      en: "Off-grid solar solutions with batteries and hybrid systems.",
    },
    image: "/static/plans/3.webp",
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
