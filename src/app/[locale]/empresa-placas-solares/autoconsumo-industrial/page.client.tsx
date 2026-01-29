import { ServiceTemplate } from "../../../../components/servicios/service-template";
import { getServiceGalleryBySlug } from "@/data/service-gallery";
import { HUBSPOT_FORMS, HUBSPOT_PORTAL_ID } from "@/data/hubspot-forms";

export default function AutoconsumoIndustrialPage({ locale }: { locale: string }) {
  const gallery = getServiceGalleryBySlug(locale, "autoconsumo-industrial");
  const isEs = locale?.startsWith("es");
  const formId = HUBSPOT_FORMS.industrial;
  const formCopy = isEs
    ? {
        eyebrow: "Empresas",
        title: "Solicita un estudio para tu empresa",
        subtitle:
          "Cuéntanos tu consumo y objetivos. Te preparamos una propuesta con ROI, ayudas y plazos.",
      }
    : {
        eyebrow: "Businesses",
        title: "Request a study for your business",
        subtitle:
          "Tell us about your energy usage and goals. We'll send a proposal with ROI, incentives, and timeline.",
      };

  return (
    <ServiceTemplate
      locale={locale}
      heroImage="/static/servicios/autoconsumo_industrial.webp"
      title="Placas solares para empresas: autoconsumo industrial"
      heroImageAlt={[
        "autoconsumo industrial para empresas",
        "instalación fotovoltaica industrial en cubierta",
        "paneles solares para naves industriales",
        "energía solar para empresas con ROI rápido",
      ]}
      featureImageAlt={[
        "placas solares para empresas en naves industriales",
        "autoconsumo solar empresarial con monitorización",
        "instalación de paneles solares en cubiertas industriales",
      ]}
      galleryImageAlt={[
        "casos de éxito de autoconsumo industrial",
        "instalaciones solares en cubiertas industriales",
        "paneles solares para fábricas y naves",
        "autoconsumo en empresas con ahorro energético",
      ]}
      subtitle="Optimiza tus costes energéticos con energía solar en cubiertas industriales y soluciones a medida para grandes consumos."
      badge="Empresas"
      highlightHeadingLevel="h2"
      hubspotSection={{ ...formCopy, formId, portalId: HUBSPOT_PORTAL_ID }}
      highlights={[
        {
          title: "Autoconsumo industrial para empresas y naves",
          description:
            "Diseños orientados a reducir picos de demanda y mejorar tu coste por kWh.",
        },
        {
          title: "Placas solares para empresas con ROI optimizado",
          description:
            "Reporting financiero: entregamos ROI, TIR y payback estimados para agilizar decisiones internas.",
        },
        {
          title: "Instalaciones fotovoltaicas industriales a medida",
          description:
            "Planificamos la obra para no interrumpir tu operación y cumplir plazos.",
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
          description: "Analizamos históricos, curvas de carga y posibilidades de cobertura solar.",
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
      galleryTitle={gallery?.galleryTitle}
      galleryDescription={gallery?.galleryDescription}
      galleryImages={gallery?.images ?? []}
    />
  );
}
