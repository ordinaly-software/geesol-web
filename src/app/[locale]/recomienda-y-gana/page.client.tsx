import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import BackToTopButton from "@/components/ui/back-to-top-button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { IconBrandAppstore, IconBrandGooglePlay } from "@tabler/icons-react";

const steps = [
  {
    title: "Invita desde la app",
    description: "Envía tu enlace personalizado a amigos y empresas interesadas en autoconsumo.",
  },
  {
    title: "Seguimiento en tiempo real",
    description: "Comprueba cuándo aceptan la invitación y en qué fase está su proyecto.",
  },
  {
    title: "Gana recompensas",
    description: "Recibe incentivos cuando la instalación se complete y el cliente quede activo.",
  },
];

export default function RecomiendaYGanaPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title="Recomienda y gana"
        subtitle="Invita a tus contactos, comparte tu enlace y consigue recompensas por cada instalación completada."
        backgroundImage="/static/freepik__candid-photography-with-natural-textures-and-highl__86639.jpeg"
      />

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {["Invita", "Haz seguimiento", "Cobra"].map((title, idx) => (
            <div
              key={title}
              className="rounded-[28px] bg-white/90 p-6 text-left shadow-[0_16px_45px_rgba(12,59,82,0.12)] backdrop-blur dark:bg-[#0f172a]/90 dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#0c3b52] text-white dark:bg-[#c83c3e]">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold text-[#0c3b52] dark:text-white">{title}</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {idx === 0 && "Comparte tu enlace o tu código QR con cualquier persona interesada."}
                {idx === 1 && "Ve en qué fase está cada referido: estudio, instalación o activación."}
                {idx === 2 && "Recibe tu recompensa cuando el proyecto se complete y quede operativo."}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
              App móvil
            </p>
            <h2 className="text-3xl font-black text-[#0c3b52] dark:text-white">
              Gestiona tus referidos desde el móvil
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Consulta tus invitaciones, el estado de cada contacto y tus recompensas acumuladas. La app te avisará cuando se complete una instalación.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="px-6 py-3">
                <Link href="https://apps.apple.com" target="_blank">
                  <IconBrandAppstore/>
                  App Store
                </Link>
              </Button>
              <Button asChild variant="outline" className="px-6 py-3">
                <Link href="https://play.google.com" target="_blank">
                  <IconBrandGooglePlay/>
                  Google Play
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {["App Store", "Google Play"].map((store) => (
              <div
                key={store}
                className="flex flex-col items-center gap-4 rounded-[24px] bg-[#f7f8fb] p-6 text-center shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
              >
                <div className="flex h-40 w-40 items-center justify-center rounded-[18px] bg-gradient-to-br from-gray-200 to-white text-gray-600 dark:from-neutral-800 dark:to-neutral-900">
                  <span className="text-sm font-semibold">QR {store}</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Añade aquí tu código QR para descargar la app.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
              ¿Cómo funciona?
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Tres pasos sencillos para compartir, hacer seguimiento y cobrar tus incentivos.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-[22px] bg-white p-6 text-left shadow-[0_10px_30px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <h4 className="text-lg font-semibold text-[#0c3b52] dark:text-white">
                  {step.title}
                </h4>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0c3b52] px-4 py-16 text-white dark:bg-[#060a14]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h3 className="text-3xl font-black">Solicita tu código de referido</h3>
          <p className="text-lg text-[#e9eef2]">
            Escríbenos y te daremos acceso a la app para empezar a compartir tu enlace.
          </p>
          <Button asChild className="px-8 py-3 text-lg uppercase">
            <Link href={`${basePath}/contacto`}>Hablar con el equipo</Link>
          </Button>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
}
