import { ServiceTemplate } from "../_components/service-template";

export default function BombeoSolarPage({ locale }: { locale: string }) {

  return (
    <ServiceTemplate
      locale={locale}
      title="Bombeo solar"
      subtitle="Riega y abastece con energía limpia y estable, reduciendo costes de gasoil y mantenimiento en explotaciones agrícolas."
      badge="Agrícola"
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
      galleryTitle="Bombeos en marcha"
      galleryDescription="Instalaciones en pozos, balsas y estaciones de bombeo para diferentes cultivos."
      galleryImages={[
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86638.jpeg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__17569.jpeg",
      ]}
    />
  );
}
