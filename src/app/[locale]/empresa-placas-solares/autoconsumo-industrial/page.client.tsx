import { ServiceTemplate } from "../../../../components/servicios/service-template";
import { HubSpotForm } from "@/components/ui/hubspot-form";
import { getServiceGalleryBySlug } from "@/data/service-gallery";

export default function AutoconsumoIndustrialPage({ locale }: { locale: string }) {
  const gallery = getServiceGalleryBySlug(locale, "autoconsumo-industrial");
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formId =
    process.env.NEXT_PUBLIC_HUBSPOT_COMPANY_FORM_ID || process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;
  const isEs = locale?.startsWith("es");
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
    <>
      <ServiceTemplate
        locale={locale}
        heroImage="/static/servicios/autoconsumo_industrial.webp"
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

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-5xl rounded-[28px] bg-[#f7f8fb] p-6 sm:p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c81618]">
              {formCopy.eyebrow}
            </p>
            <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0c3b52] dark:text-white">
              {formCopy.title}
            </h3>
            <p className="mt-3 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              {formCopy.subtitle}
            </p>
          </div>
          <div className="mt-6">
            <HubSpotForm portalId={portalId} formId={formId} />
          </div>
        </div>
      </section>
    </>
  );
}
