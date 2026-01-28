import { ServiceTemplate } from "../../../../components/servicios/service-template";
import { getServiceGalleryBySlug } from "@/data/service-gallery";

export default function BombeoSolarPage({ locale }: { locale: string }) {
  const gallery = getServiceGalleryBySlug(locale, "bombeo-solar");

  return (
    <ServiceTemplate
      locale={locale}
      heroImage="/static/servicios/bombeo_solar.webp"
      title="Bombeo solar"
      heroImageAlt={[
        "bombeo solar",
        "instalacion de bombeo solar",
        "bombeo solar para riego",
      ]}
      featureImageAlt={[
        "bombeo solar para riego",
        "bombeo solar",
        "instalacion de bombeo solar",
      ]}
      galleryImageAlt={[
        "bombeo solar",
        "instalacion de bombeo solar",
        "bombeo solar para riego",
      ]}
      subtitle="Riega y abastece con energía limpia y estable, reduciendo costes de gasoil y mantenimiento en explotaciones agrícolas."
      badge="Agrícola"
      seoHeadings={{
        h2: ["Bombeo solar para riego", "Bombeo solar fotovoltaico para riego"],
        h3: ["Instalaciones de bombeo solar"],
      }}
      highlights={[
        {
          title: "Caudal constante",
          description: "Diseños adaptados a tus horarios de riego y necesidades de presión.",
        },
        {
          title: "Ahorro operativo",
          description: "Elimina consumo de generadores y reduce costes de combustible y mantenimiento.",
        },
        {
          title: "Equipos robustos",
          description: "Variadores solares y bombas diseñados para trabajar en condiciones exigentes.",
        },
      ]}
      features={[
        {
          title: "Integración con riego",
          description: "Compatibilidad con goteo, aspersión y pivots con control automático de presión.",
          icon: "🚿",
        },
        {
          title: "Variadores solares",
          description: "Arranque suave, protección del motor y ajustes según radiación disponible.",
          icon: "⚡",
        },
        {
          title: "Bombeo híbrido",
          description: "Combina solar con generador o red para asegurar caudal en días nublados.",
          icon: "🌤️",
        },
        {
          title: "Monitorización",
          description: "Control remoto de caudal, alarmas y rendimiento desde el móvil.",
          icon: "📱",
        },
      ]}
      steps={[
        {
          title: "Estudio hidráulico",
          description: "Analizamos profundidad, nivel freático, caudal y presión requeridos.",
        },
        {
          title: "Instalación y pruebas",
          description: "Montaje de paneles, variadores y protecciones con puesta en marcha completa.",
        },
        {
          title: "Optimización de riego",
          description: "Ajustes de curvas de presión y programación de riegos para aprovechar cada hora de sol.",
        },
      ]}
      galleryTitle={gallery?.galleryTitle}
      galleryDescription={gallery?.galleryDescription}
      galleryImages={gallery?.images ?? []}
    />
  );
}
