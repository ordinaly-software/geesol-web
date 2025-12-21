import { ServiceTemplate } from "../_components/service-template";

export default function GaleriaInstalacionesPage({ locale }: { locale: string }) {

  return (
    <ServiceTemplate
      locale={locale}
      title="Galería de instalaciones"
      subtitle="Proyectos residenciales, industriales y agrícolas que demuestran nuestro trabajo y calidad de acabado."
      badge="Casos reales"
      highlights={[
        {
          title: "Proyectos variados",
          description: "Cubiertas inclinadas, suelo, naves industriales y bombeo en distintas potencias.",
        },
        {
          title: "Acabado cuidado",
          description: "Cableado ordenado, estructura reforzada y protecciones visibles en cada proyecto.",
        },
        {
          title: "Garantía demostrable",
          description: "Mantenemos registros de producción y mantenimiento para cada cliente.",
        },
      ]}
      features={[
        {
          title: "Diseños integrados",
          description: "Estructuras que se adaptan a cada tejado y respetan estética y estanqueidad.",
          icon: "🏗️",
        },
        {
          title: "Componentes premium",
          description: "Paneles, inversores y protecciones de marcas líderes con garantía extendida.",
          icon: "⭐",
        },
        {
          title: "Seguridad en obra",
          description: "Líneas de vida, EPIs y planes de montaje supervisados por técnicos PRL.",
          icon: "🦺",
        },
        {
          title: "Documentación completa",
          description: "Planos, memoria, esquemas unifilares y reportaje fotográfico final.",
          icon: "📸",
        },
      ]}
      steps={[
        {
          title: "Planificación",
          description: "Visita técnica, replanteo y planificación de materiales y seguridad.",
        },
        {
          title: "Ejecución",
          description: "Montaje por equipos certificados, pruebas eléctricas y de estanqueidad.",
        },
        {
          title: "Entrega",
          description: "Documentación, formación de uso y activación de monitorización para el cliente.",
        },
      ]}
      galleryImages={[
        "/static/28128.jpg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86639.jpeg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86640.jpeg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__17569.jpeg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86638.jpeg",
      ]}
    />
  );
}
