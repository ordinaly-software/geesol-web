import { metadataBaseUrl } from "@/lib/metadata";

export const businessInfo = {
  brand: "GEESOL",
  companyName: "Geesol Renovables, S.L.",
  url: metadataBaseUrl,
  logo: `${metadataBaseUrl}/logo_2.webp`,
  email: "info@geesol.com",
  phones: ["+34 955 73 73 22", "+34 622 22 63 49", "+34 678 99 91 11"],
  whatsapp: "+34 621 15 14 68",
  descriptionEs: "Ingeniería y montaje de instalaciones solares llave en mano en Sevilla, Andalucía y Madrid.",
  descriptionEn: "Engineering and turnkey solar installations across Sevilla, Andalusia and Madrid.",
  regionLabel: "Sevilla y Madrid",
  address: {
    street: "C/ Mansíos, 5. Polígono Parque Plata",
    postalCode: "41900",
    locality: "Camas",
    region: "Sevilla",
    country: "España",
  },
  coords: {
    latitude: 37.41912663256748,
    longitude: -6.0375458244239395,
  },
  mapUrl: "https://maps.app.goo.gl/WYNB5axKXqnsTBWT8",
  serviceArea: {
    es: ["Sevilla", "Córdoba", "Huelva", "Cádiz", "Málaga", "Madrid"],
    en: ["Seville", "Cordoba", "Huelva", "Cadiz", "Malaga", "Madrid"],
    schema: ["Seville", "Cordoba", "Huelva", "Cadiz", "Malaga", "Madrid"],
  },
  heroKeywords: [
    "Ingeniería solar",
    "instalaciones fotovoltaicas",
    "autoconsumo llave en mano",
  ],
};
