import { ServiceTemplate } from "../../../../components/servicios/service-template";
import { getServiceGalleryBySlug } from "@/data/service-gallery";

export default function AutoconsumoDomesticoPage({ locale }: { locale: string }) {
  const gallery = getServiceGalleryBySlug(locale, "autoconsumo-domestico");

  return (
    <ServiceTemplate
      locale={locale}
      title="Placas solares para casas: autoconsumo doméstico inteligente"
      heroImage="/static/servicios/autoconsumo_domestico.webp"
      heroImageAlt={[
        "autoconsumo doméstico con placas solares",
        "instalación fotovoltaica residencial",
        "paneles solares en tejado de casa",
        "placas solares para viviendas con ahorro real",
      ]}
      featureImageAlt={[
        "instalación de placas solares en vivienda unifamiliar",
        "autoconsumo residencial con monitorización",
        "paneles solares para casas eficientes",
      ]}
      galleryImageAlt={[
        "casos de éxito de autoconsumo doméstico",
        "instalaciones solares residenciales en tejado",
        "paneles solares para viviendas con ahorro",
        "autoconsumo solar en casas unifamiliares",
      ]}
      subtitle="Convierte tu vivienda en una casa eficiente: reduce tu factura y gana independencia con un diseño fotovoltaico a medida."
      badge="Residencial"
      seoHeadings={{
        h2: [
          "Autoconsumo doméstico con placas solares",
          "Instalación fotovoltaica residencial llave en mano",
          "Paneles solares para casas con ahorro real",
        ],
      }}
      highlights={[
        {
          title: "Estudio personalizado",
          description: "Analizamos tu consumo y tejado para dimensionar la instalación ideal.",
        },
        {
          title: "Gestión de ayudas",
          description: "Nos encargamos de subvenciones, bonificaciones y legalización sin que tengas que preocuparte.",
        },
        {
          title: "Monitorización 24/7",
          description: "Sigue tu producción en tiempo real y detecta incidencias antes de que afecten al ahorro.",
        },
      ]}
      features={[
        {
          title: "Instalación rápida y limpia",
          description: "Montaje en pocos días con equipos certificados y mínima intervención en tu hogar.",
          icon: "🏠",
        },
        {
          title: "Ahorro inmediato",
          description: "Reduce hasta un 70% tu factura desde el primer mes y amortiza antes la inversión.",
          icon: "💡",
        },
        {
          title: "Financiación flexible",
          description: "Opciones adaptadas para que empieces a ahorrar sin desembolsos iniciales elevados.",
          icon: "💳",
        },
        {
          title: "Garantía ampliada",
          description: "Cobertura sobre paneles, inversor y mano de obra para que tu sistema esté protegido.",
          icon: "🛠️",
        },
      ]}
      steps={[
        {
          title: "Diagnóstico y propuesta",
          description: "Estudiamos consumos, orientación y posibles sombras para definir el diseño óptimo.",
        },
        {
          title: "Instalación y legalización",
          description: "Coordinamos montaje, boletines, licencias y conexión a red en plazos ajustados.",
        },
        {
          title: "Arranque y seguimiento",
          description: "Configuramos la monitorización y revisamos tu producción para asegurar el rendimiento esperado.",
        },
      ]}
      galleryTitle={gallery?.galleryTitle}
      galleryDescription={gallery?.galleryDescription}
      galleryImages={gallery?.images ?? []}
    />
  );
}
