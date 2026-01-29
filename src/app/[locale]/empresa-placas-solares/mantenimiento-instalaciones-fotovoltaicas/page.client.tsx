import Image from "next/image";
import { ServiceTemplate } from "../../../../components/servicios/service-template";
import { Timeline } from "@/components/servicios/timeline";
import { getServiceGalleryBySlug } from "@/data/service-gallery";

export default function MantenimientoInstalacionesFotovoltaicasPage({
  locale,
}: {
  locale: string;
}) {
  const gallery = getServiceGalleryBySlug(locale, "mantenimiento-instalaciones-fotovoltaicas");
  const timelineData = [
    {
      title: "Mantenimiento instalaciones fotovoltaicas",
      content: (
        <div className="space-y-4">
          <p className="whitespace-pre-line">
            Una vez finalizado el montaje y puesta en marcha de un sistema fotovoltaico, es de gran
            importancia su mantenimiento para el correcto funcionamiento de las instalaciones y su
            adecuado rendimiento.
          </p>
          <p className="whitespace-pre-line">
            Nuestro consejo es tener una revisión, limpieza y mantenimiento de las placas solares
            periódica para evitar accidentes laborales.
          </p>
          <p className="whitespace-pre-line">Solicita presupuesto.</p>
        </div>
      ),
      media: (
        <Image
          src="/static/servicios/mantenimiento-instalaciones-fotovoltaicas/mantenimiento-instalaciones-fotovoltaicas_1.webp"
          alt="mantenimiento instalaciones fotovoltaicas"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 18rem, 100vw"
        />
      ),
    },
    {
      title: "Plan de asistencia técnica",
      content: (
        <p className="whitespace-pre-line">
          Se recomienda contratar un plan de asistencia técnica después de los dos años de garantía
          del inversor, tan solo dos revisiones anuales.
        </p>
      ),
    },
    {
      title: "Asistencia técnica premium",
      content: (
        <div className="space-y-4">
          <div className="space-y-3">
            <p className="font-semibold">
              PLAN A: Atención Técnica Premium para residencial (instalaciones realizadas por
              Geesol)
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Visita anual.</li>
              <li>Revisión de la instalación.</li>
              <li>Revisión de elementos de seguridad.</li>
              <li>Revisión del inversor.</li>
              <li>Comprobación de estructura.</li>
              <li>Comprobación de los elementos eléctricos.</li>
              <li>Comprobación de comunicación e informes gráficos.</li>
            </ul>
            <p>El precio anual del plan (IVA no incluido) es de 55€.</p>
          </div>
          <div className="space-y-2">
            <p className="font-semibold">
              PLAN B: Atención Técnica Premium para residencial (instalaciones realizadas por otras
              empresas)
            </p>
            <p>
              Consta de todo lo anterior, más la posibilidad de presentación y/o explicación del
              presupuesto y revisión de la instalación.
            </p>
            <p>
              El precio anual es:
              <br />
              4 m€ (A) hasta 10 m€ (A): 120€
              <br />
              &gt; 10 m€ (A): 150€
            </p>
          </div>
        </div>
      ),
      media: (
        <Image
          src="/static/servicios/mantenimiento-instalaciones-fotovoltaicas/mantenimiento-instalaciones-fotovoltaicas_2.webp"
          alt="mantenimiento de placas solares"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 18rem, 100vw"
        />
      ),
    },
    {
      title: "Gestión de incidencias",
      content: (
        <div className="space-y-3">
          <p className="font-semibold">
            PLAN C: Gestión de incidencias (cuando no se es cliente de nuestra cartera)
          </p>
          <p className="whitespace-pre-line">
            - Visita profesional.\n- Incluye desplazamiento hasta 70 km (Sevilla).\n\nEl precio de la
            visita profesional (IVA no incluido) es de 120€.
          </p>
          <p className="font-semibold">
            PLAN D: Gestión de incidencias (cuando no se es cliente de nuestra cartera)
          </p>
          <p className="whitespace-pre-line">
            - Visita profesional.\n- Incluye desplazamiento hasta 70 km (Sevilla).\n- Entrega de
            presupuesto.\n\nEl precio de la visita profesional (IVA no incluido) es de 170€.
          </p>
          <p className="font-semibold">
            PLAN E: Solución de incidencias (cuando no se es cliente de nuestra cartera)
          </p>
          <p className="whitespace-pre-line">
            En función del tipo de problema y/o incidencia, deberá consultarse el coste según
            operación.\n\nEl precio de la hora de técnico (IVA no incluido) es de 60€.\n\nConsulta en
            caso de que se requieran plataformas elevadoras.
          </p>
        </div>
      ),
    },
    {
      title: "Mantenimiento de placas solares",
      content: (
        <div>
          <p>Varios son los beneficios que se obtienen con el mantenimiento y asistencia técnica:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Garantiza el máximo rendimiento.</li>
            <li>Controla deterioros.</li>
            <li>Vigila posibles fallos en la instalación eléctrica.</li>
            <li>Actualiza tu información sobre novedades del sector.</li>
          </ul>
        </div>
      ),
      media: (
        <Image
          src="/static/servicios/mantenimiento-instalaciones-fotovoltaicas/entidad-colaboradora-mantenimiento.webp"
          alt="entidad colaboradora mantenimiento"
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 18rem, 100vw"
        />
      ),
    }
  ];

  return (
    <ServiceTemplate
      locale={locale}
      heroImage="/static/servicios/mantenimiento-instalaciones-fotovoltaicas/mantenimiento-instalaciones-fotovoltaicas_1.webp"
      title="Mantenimiento instalaciones fotovoltaicas"
      heroImageAlt="mantenimiento instalaciones fotovoltaicas"
      featureImageAlt="mantenimiento instalaciones fotovoltaicas"
      galleryImageAlt="mantenimiento instalaciones fotovoltaicas"
      subtitle="Una vez finalizado el montaje y puesta en marcha de un sistema fotovoltaico, es de gran importancia su mantenimiento para el correcto funcionamiento de las instalaciones y su adecuado rendimiento."
      hubspotSection={{
        eyebrow: "Contacto",
        title: "¿Te interesa? Escríbenos a través del siguiente formulario",
        subtitle:
          "Si te interesa, escríbenos al 954 561 612, al 654 880 822 o envíanos un correo a info@geesol.com.",
      }}
      highlights={[
        {
          title: "¡Protege tu instalación con nuestro mantenimiento integral!",
          description:
            "Si quieres más información sobre mantenimiento de instalaciones fotovoltaicas, llámanos al 954 561 612 o 654 880 822.",
        },
        {
          title: "Limpieza profesional",
          description:
            "Para que la instalación tenga un correcto funcionamiento, es fundamental limpiar los paneles una vez al año. Los paneles sucios reducen en un 15% su capacidad de funcionamiento.",
        },
        {
          title: "Revisión en cubierta segura",
          description:
            "Otro punto importante a tener en cuenta es el estado de la cubierta. La revisión de la instalación en cubierta requiere un buen profesional para evitar accidentes laborales.",
        },
      ]}
      customSection={
        <Timeline
          eyebrow="Mantenimiento"
          title="Planes de mantenimiento y asistencia técnica"
          description="Planes diseñados para mantener tu instalación al máximo rendimiento."
          data={timelineData}
        />
      }
      features={[
        {
          title: "Revisión periódica",
          description:
            "Se recomienda contratar un plan de asistencia técnica después de los dos años de garantía del inversor, tan solo dos revisiones anuales.",
          icon: "🛠️",
        },
        {
          title: "Limpieza y rendimiento",
          description:
            "Para que la instalación tenga un correcto funcionamiento, es fundamental limpiar los paneles una vez al año.",
          icon: "🧼",
        },
        {
          title: "Asistencia técnica premium",
          description: "Desde Geesol sugerimos este tipo de mantenimiento con planes diseñados para cada necesidad.",
          icon: "⭐",
        },
        {
          title: "Resolución de incidencias",
          description:
            "En función del tipo de problema y/o incidencia, deberá consultarse el coste según operación.",
          icon: "🧰",
        },
      ]}
      steps={[
        {
          title: "Visita profesional",
          description: "Incluye desplazamiento hasta 70 km (Sevilla).",
        },
        {
          title: "Revisión de la instalación",
          description: "Comprobación de seguridad, inversor, estructura y elementos eléctricos.",
        },
        {
          title: "Comunicación e informes",
          description: "Comprobación de comunicación e informes gráficos.",
        },
      ]}
    />
  );
}
