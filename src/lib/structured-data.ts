import { businessInfo } from "@/data/business-info";

export function createStructuredData(locale?: string) {
  const isEs = locale?.startsWith("es");
  const description = isEs ? businessInfo.descriptionEs : businessInfo.descriptionEn;
  const productName = isEs
    ? "Instalaciones fotovoltaicas llave en mano"
    : "Turnkey photovoltaic installations";
  const productDescription = isEs
    ? "Estudio, diseño, instalación y monitorización de sistemas solares completos."
    : "Study, design, installation and monitoring of complete solar systems.";
  const offersUrl = `${businessInfo.url}/servicios`;

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        name: businessInfo.companyName,
        description,
        url: businessInfo.url,
        telephone: businessInfo.phones[0],
        email: businessInfo.email,
        logo: businessInfo.logo,
        image: businessInfo.logo,
        hasMap: businessInfo.mapUrl,
        mainEntityOfPage: businessInfo.url,
        areaServed: businessInfo.serviceArea.schema,
        address: {
          "@type": "PostalAddress",
          streetAddress: businessInfo.address.street,
          addressLocality: businessInfo.address.locality,
          postalCode: businessInfo.address.postalCode,
          addressRegion: businessInfo.address.region,
          addressCountry: businessInfo.address.country,
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: businessInfo.coords.latitude,
          longitude: businessInfo.coords.longitude,
        },
      },
      {
        "@type": "Product",
        name: productName,
        description: productDescription,
        brand: {
          "@type": "Brand",
          name: businessInfo.brand,
        },
        image: businessInfo.logo,
        url: offersUrl,
        offers: {
          "@type": "Offer",
          availability: "https://schema.org/InStock",
          priceCurrency: "EUR",
          url: offersUrl,
        },
      },
    ],
  });
}
