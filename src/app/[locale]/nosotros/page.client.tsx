import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import BackToTopButton from "@/components/ui/back-to-top-button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const team = [
  { name: "Equipo de ingeniería", role: "Diseño y cálculo", focus: "Dimensionamiento, legalización y selección de componentes" },
  { name: "Equipo de instalación", role: "Montaje y puesta en marcha", focus: "Ejecución en cubierta, pruebas eléctricas y seguridad" },
  { name: "Atención al cliente", role: "Acompañamiento", focus: "Gestión de ayudas, soporte y monitorización" },
];

const partners = [
  "Paneles Tier 1",
  "Inversores premium",
  "Baterías LiFePO4",
  "Estructuras certificadas",
  "Variadores para bombeo",
];

const values = [
  {
    title: "Transparencia",
    description: "Informamos con claridad de plazos, costes y producción estimada." ,
  },
  {
    title: "Seguridad",
    description: "Cumplimos normativa y aplicamos protocolos de PRL en cada proyecto." ,
  },
  {
    title: "Proximidad",
    description: "Equipos locales que te acompañan antes, durante y después de la instalación." ,
  },
];

export default function NosotrosPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title="Quiénes somos"
        subtitle="Un equipo especializado en fotovoltaica, mantenimiento y soluciones solares avanzadas para hogares, industria y agricultura."
        backgroundImage="/static/28128.jpg"
      />

      <section className="-mt-12 px-4 pb-12 md:-mt-16">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-white/90 p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] backdrop-blur dark:bg-[#0f172a]/90 dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">Nuestra misión</p>
              <h2 className="text-3xl font-black text-[#0c3b52] dark:text-white">Acompañarte en todo el ciclo de la energía solar</h2>
              <p className="text-gray-700 dark:text-gray-300">
                Desde el estudio de viabilidad hasta la monitorización continua, gestionamos cada paso con equipos propios y partners de confianza. Creamos proyectos que producen más, duran más y requieren menos incidencias.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="rounded-full bg-[#f7f8fb] px-4 py-2 text-sm font-semibold text-[#0c3b52] dark:bg-[#0b1220] dark:text-gray-100">Instalaciones llave en mano</span>
                <span className="rounded-full bg-[#f7f8fb] px-4 py-2 text-sm font-semibold text-[#0c3b52] dark:bg-[#0b1220] dark:text-gray-100">Servicio técnico propio</span>
                <span className="rounded-full bg-[#f7f8fb] px-4 py-2 text-sm font-semibold text-[#0c3b52] dark:bg-[#0b1220] dark:text-gray-100">Monitorización 24/7</span>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-[20px] bg-[#f7f8fb] p-5 shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                >
                  <h4 className="text-lg font-semibold text-[#0c3b52] dark:text-white">{value.title}</h4>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">Nuestro equipo</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Especialistas en ingeniería, instalación y soporte para que tu proyecto funcione desde el primer día.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-[22px] bg-[#f7f8fb] p-6 text-left shadow-[0_10px_30px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="mb-4 h-32 rounded-[18px] bg-gradient-to-br from-gray-200 to-white dark:from-neutral-800 dark:to-neutral-900" />
                <h4 className="text-lg font-semibold text-[#0c3b52] dark:text-white">{member.name}</h4>
                <p className="text-sm text-[#c81618] font-semibold">{member.role}</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{member.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-white p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">Partners</p>
              <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">Fabricantes y colaboradores</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Trabajamos con proveedores que garantizan rendimiento, soporte y disponibilidad de repuestos.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {partners.map((partner) => (
                <div
                  key={partner}
                  className="rounded-[18px] bg-[#f7f8fb] px-4 py-3 text-sm font-semibold text-[#0c3b52] shadow-sm dark:bg-[#0f172a] dark:text-gray-100"
                >
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
          <h3 className="text-3xl font-black text-[#0c3b52] dark:text-white">¿Quieres trabajar con nosotros?</h3>
          <p className="max-w-3xl text-lg text-gray-700 dark:text-gray-300">Buscamos instaladores certificados, técnicos PRL y perfiles de soporte que compartan nuestra visión de calidad y servicio.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="px-8 py-3 text-lg uppercase">
              <Link href={`${basePath}/contacto`}>Envíanos tu perfil</Link>
            </Button>
            <Button asChild variant="outline" className="px-8 py-3 text-lg">
              <Link href={`${basePath}/blog`}>Ver novedades</Link>
            </Button>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
}
