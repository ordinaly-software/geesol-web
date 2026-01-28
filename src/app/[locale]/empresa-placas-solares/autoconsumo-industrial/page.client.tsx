import { ServiceTemplate } from "../../../../components/servicios/service-template";
import { getServiceGalleryBySlug } from "@/data/service-gallery";

export default function AutoconsumoIndustrialPage({ locale }: { locale: string }) {
  const gallery = getServiceGalleryBySlug(locale, "autoconsumo-industrial");
  const isEs = locale?.startsWith("es");
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_COMPANY_FORM_ID;
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
          "Tell us about your energy usage and goals. We’ll send a proposal with ROI, incentives, and timeline.",
      };

  return (
    <ServiceTemplate
      locale={locale}
      heroImage="/static/servicios/autoconsumo_industrial.webp"
      title="Placas solares para empresas"
      heroImageAlt={[
        "placas solares para empresas",
        "placa solar empresa",
        "paneles fotovoltaicos para empresas",
      ]}
      featureImageAlt={[
        "placa solar empresa",
        "paneles fotovoltaicos para empresas",
        "placas solares para empresas",
      ]}
      galleryImageAlt={[
        "placas solares para empresas",
        "placa solar empresa",
        "paneles fotovoltaicos para empresas",
      ]}
      subtitle="Optimiza tus costes energéticos con instalaciones fotovoltaicas a medida para naves, cubiertas y grandes consumos."
      badge="Empresas"
      seoHeadings={{
        h2: [
          "Placas solares para empresas en Andalucia",
          "Instalaciones fotovoltaicas para empresas",
        ],
      }}
      hubspotSection={{ ...formCopy, formId }}
      highlights={[
        {
          title: "Producción estable",
          description: "Diseños orientados a reducir picos de demanda y mejorar tu coste por kWh.",
        },
        {
          title: "Paradas mínimas",
          description: "Planificamos la obra para no interrumpir tu operación y cumplir plazos.",
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
