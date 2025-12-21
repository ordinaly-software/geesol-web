import { ServiceTemplate } from "../_components/service-template";

export default function AsistenciaTecnicaPage({ locale }: { locale: string }) {

  return (
    <ServiceTemplate
      locale={locale}
      title="Asistencia técnica"
      subtitle="Mantenimiento preventivo y correctivo para que tu instalación funcione siempre al máximo rendimiento."
      badge="Soporte"
      highlights={[
        {
          title: "Respuesta rápida",
          description: "Atención prioritaria con diagnósticos remotos y desplazamiento cuando es necesario.",
        },
        {
          title: "Monitorización",
          description: "Alarmas, alertas de producción y revisión periódica de datos de inversor y strings.",
        },
        {
          title: "Plan de revisiones",
          description: "Limpieza de paneles, apriete de estructura y chequeo de protecciones en cada visita.",
        },
      ]}
      features={[
        {
          title: "Mantenimiento preventivo",
          description: "Revisiones programadas, limpieza y comprobaciones eléctricas para evitar paradas.",
          icon: "🧽",
        },
        {
          title: "Soporte correctivo",
          description: "Sustitución de componentes, tramitación de garantías y ajuste de configuraciones.",
          icon: "🛠️",
        },
        {
          title: "Informes técnicos",
          description: "Reportes con fotos, mediciones y recomendaciones para mantener la producción." ,
          icon: "📄",
        },
        {
          title: "Optimización",
          description: "Revisión de vertido cero, curvas de autoconsumo y posibles ampliaciones futuras.",
          icon: "⚙️",
        },
      ]}
      steps={[
        {
          title: "Auditoría inicial",
          description: "Revisión completa de instalación, firmware y protecciones para establecer el punto de partida.",
        },
        {
          title: "Plan de mantenimiento",
          description: "Calendario de visitas y checklist adaptado a la tipología de tu instalación.",
        },
        {
          title: "Seguimiento continuo",
          description: "Monitorización y asistencia remota con avisos de producción y propuestas de mejora.",
        },
      ]}
      galleryImages={[
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86640.jpeg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86639.jpeg",
      ]}
    />
  );
}
