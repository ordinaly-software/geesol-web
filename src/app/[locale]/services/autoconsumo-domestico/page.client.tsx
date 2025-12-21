import { ServiceTemplate } from "../_components/service-template";

export default function AutoconsumoDomesticoPage({ locale }: { locale: string }) {

  return (
    <ServiceTemplate
      locale={locale}
      title="Autoconsumo doméstico"
      subtitle="Reduce tu factura y gana independencia energética con una instalación fotovoltaica diseñada para tu vivienda."
      badge="Residencial"
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
      galleryTitle="Hogares que ya aprovechan el sol"
      galleryDescription="Instalaciones residenciales optimizadas para diferentes tipos de tejado y consumos."
      galleryImages={[
        "/static/main_home_ilustration.webp",
        "/static/28128.jpg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86638.jpeg",
      ]}
    />
  );
}
