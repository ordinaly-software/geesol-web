import { ServiceTemplate } from "../../../../components/servicios/service-template";
import { getServiceGalleryBySlug } from "@/data/service-gallery";

export default function BombeoSolarPage({ locale }: { locale: string }) {
  const gallery = getServiceGalleryBySlug(locale, "bombeo-solar");

  return (
    <ServiceTemplate
      locale={locale}
      heroImage="/static/servicios/bombeo_solar.webp"
      title="Bombeo solar fotovoltaico para riego"
      heroImageAlt={[
        "bombeo solar fotovoltaico para riego",
        "instalación de bombeo solar en fincas",
        "sistemas de bombeo solar agrícola",
        "bombeo solar para riego eficiente",
      ]}
      featureImageAlt={[
        "bombeo solar para riego agrícola",
        "sistema de bombeo fotovoltaico en campo",
        "instalación de bombeo solar con variadores",
      ]}
      galleryImageAlt={[
        "casos de éxito de bombeo solar",
        "bombeo solar para riego agrícola en fincas",
        "instalaciones de bombeo solar fotovoltaico",
        "bombeo solar con ahorro de combustible",
      ]}
      subtitle="Riega y abastece con energía limpia y estable, reduciendo gasoil y mantenimiento en explotaciones agrícolas."
      badge="Agrícola"
      highlightHeadingLevel="h2"
      highlights={[
        {
          title: "Bombeo solar fotovoltaico para riego",
          description:
            "Caudal constante: diseños adaptados a tus horarios de riego y necesidades de presión.",
        },
        {
          title: "Bombeo solar para fincas y explotaciones agrícolas",
          description:
            "Ahorro operativo: elimina consumo de generadores y reduce costes de combustible y mantenimiento.",
        },
        {
          title: "Instalaciones de bombeo solar con ahorro de combustible",
          description:
            "Equipos robustos: variadores solares y bombas diseñados para trabajar en condiciones exigentes.",
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
