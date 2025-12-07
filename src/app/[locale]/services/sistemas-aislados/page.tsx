import { ServiceTemplate } from "../_components/service-template";

export default function SistemasAisladosPage({
  params,
}: {
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <ServiceTemplate
      locale={locale}
      title="Sistemas aislados de la red"
      subtitle="Energía garantizada en ubicaciones sin acceso a red con soluciones híbridas de paneles, baterías e inversores de alta fiabilidad."
      badge="Autonomía"
      highlights={[
        {
          title: "Autonomía total",
          description: "Dimensionamos generación y almacenamiento para que no dependas de la red."
        },
        {
          title: "Gestión inteligente",
          description: "Balanceo automático entre baterías, generador y consumo crítico."
        },
        {
          title: "Soporte remoto",
          description: "Monitorización y ajustes a distancia para mantener la continuidad del servicio."
        }
      ]}
      features={[
        {
          title: "Baterías de larga vida",
          description: "Tecnología LiFePO4 y sistemas modulares para crecer cuando lo necesites.",
          icon: "🔋",
        },
        {
          title: "Híbridos de calidad",
          description: "Inversores preparados para climas exigentes y cargas variables.",
          icon: "🌦️",
        },
        {
          title: "Protecciones avanzadas",
          description: "Sistemas anti-isla, seccionadores y monitorización de tierra para máxima seguridad.",
          icon: "🛡️",
        },
        {
          title: "Servicio técnico",
          description: "Asistencia presencial y remota para resolver incidencias rápidamente.",
          icon: "🧰",
        },
      ]}
      steps={[
        {
          title: "Evaluación de carga",
          description: "Identificamos consumos críticos y perfil de uso para dimensionar generación y almacenamiento.",
        },
        {
          title: "Instalación y pruebas",
          description: "Montaje, programación de inversores y pruebas de autonomía en condiciones reales.",
        },
        {
          title: "Mantenimiento continuo",
          description: "Revisiones programadas, limpieza de paneles y actualizaciones de firmware.",
        },
      ]}
      galleryImages={[
        "/static/main_home_ilustration.webp",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__17569.jpeg",
      ]}
    />
  );
}
