import { ServiceTemplate } from "../../../../components/services/service-template";

export default function AutoconsumoIndustrialPage({ locale }: { locale: string }) {

  return (
    <ServiceTemplate
      locale={locale}
      title="Autoconsumo industrial"
      subtitle="Optimiza tus costes energéticos con instalaciones fotovoltaicas a medida para naves, cubiertas y grandes consumos."
      badge="Empresas"
      highlights={[
        {
          title: "Producción estable",
          description: "Diseños orientados a reducir picos de demanda y mejorar tu coste por kWh.",
        },
        {
          title: "Paradas mínimas",
          description: "Planificamos la obra para no interrumpir tu operación y cumplir plazos." ,
        },
        {
          title: "Reporting financiero",
          description: "Te entregamos ROI, TIR y payback estimados para agilizar decisiones internas.",
        },
      ]}
      features={[
        {
          title: "Ingeniería y tramitación",
          description: "Gestión integral de licencias, legalización y conexión con distribuidora.",
          icon: "📑",
        },
        {
          title: "Seguridad y normativa",
          description: "Cumplimiento de PRL, coordinación de actividades y equipos certificados.",
          icon: "🛡️",
        },
        {
          title: "Vertido cero controlado",
          description: "Control de excedentes y posibilidad de compensación según tu perfil de consumo.",
          icon: "⚙️",
        },
        {
          title: "Mantenimiento proactivo",
          description: "Planes preventivos y correctivos con monitorización avanzada de strings.",
          icon: "📈",
        },
      ]}
      steps={[
        {
          title: "Auditoría energética",
          description: "Analizamos históricos, curvas de carga y posibilidades de cobertura solar." ,
        },
        {
          title: "Ejecución coordinada",
          description: "Logística de materiales, seguridad en altura y supervisión técnica continua.",
        },
        {
          title: "Seguimiento y SLA",
          description: "KPIs de producción, alarmas y mantenimiento con acuerdos de nivel de servicio claros.",
        },
      ]}
      galleryTitle="Cubiertas industriales en producción"
      galleryDescription="Proyectos en naves logísticas, industria agroalimentaria y centros de distribución."
      galleryImages={[
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86639.jpeg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86640.jpeg",
        "/static/28128.jpg",
      ]}
    />
  );
}
