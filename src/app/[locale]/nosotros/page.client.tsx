import Image from "next/image";
import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const teamRoles = [
  "Director técnico",
  "Técnicos instaladores",
  "Comerciales",
  "Atención al cliente",
  "Marketing",
  "Community manager",
  "Informático",
];

const stats = [
  {
    value: "+5.000",
    label: "instalaciones realizadas",
  },
  {
    value: "2017",
    label: "año de inicio",
  },
  {
    value: "Andalucía + Madrid",
    label: "cobertura actual",
  },
];

const partners = [
  "Kostal",
  "REC",
  "Schneider Electric",
  "Enphase",
  "Siemens",
  "SunPower",
  "Victron Energy",
  "Exiom Group",
  "UNEF",
  "CESUR",
];

export default function NosotrosPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title="Quiénes somos"
        subtitle="Energía solar para hogares, empresas e industria con un equipo propio que te acompaña de principio a fin."
        backgroundImage="/static/28128.jpg"
      />

      <section className="px-4 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 rounded-[28px] bg-white/90 p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] backdrop-blur dark:bg-[#0f172a]/90 dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)] lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
              Nuestra historia
            </p>
            <h2 className="text-3xl font-black text-[#0c3b52] dark:text-white">
              Energía limpia con equipos propios desde 2017
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Impulsados por trabajar en beneficio del medio ambiente y ofrecer una energía alternativa a todos los públicos,
              en 2017 nació Geesol Renovables, S.L. como heredera de una firma familiar dedicada al sector eléctrico.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Hoy contamos con un equipo humano especializado que cubre todas las fases: estudio, diseño, instalación,
              legalización y monitorización continua.
            </p>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#0c3b52] dark:text-gray-100">
                Equipo humano
              </p>
              <div className="flex flex-wrap gap-3">
                {teamRoles.map((role) => (
                  <span
                    key={role}
                    className="rounded-full bg-[#0c3b52] px-4 py-2 text-sm font-semibold text-white shadow-sm dark:bg-[#c83c3e]"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="rounded-[18px] bg-[#f7f8fb] px-4 py-4 text-center shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                >
                  <div className="text-2xl font-black text-[#0c3b52] dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="px-6 py-3">
                <Link href={`${basePath}/contacto`}>Solicita tu estudio gratis</Link>
              </Button>
              <Button asChild variant="outline" className="px-6 py-3">
                <Link href={`${basePath}/services`}>Ver servicios</Link>
              </Button>
            </div>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[24px] shadow-[0_16px_45px_rgba(12,59,82,0.2)]">
            <Image
              src="/static/main_home_ilustration.webp"
              alt="Equipo GEESOL en instalaciones fotovoltaicas"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-[18px] bg-white/90 p-4 text-sm text-[#0c3b52] shadow-lg backdrop-blur">
              Más de 5.000 instalaciones realizadas en Andalucía y Madrid.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl space-y-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
              Partners y certificaciones
            </p>
            <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
              Trabajamos con marcas líderes del sector
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center justify-center rounded-[18px] border border-gray-200 bg-[#f7f8fb] px-4 py-6 text-sm font-semibold text-[#0c3b52] shadow-sm dark:border-gray-700 dark:bg-[#0f172a] dark:text-gray-100"
              >
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-white p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">Dónde estamos</p>
              <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
                Oficinas centrales en Camas (Sevilla)
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                C/ Mansíos, 5. Polígono Parque Plata, 41900, Camas (Sevilla).
              </p>
              <div className="rounded-[18px] bg-[#f7f8fb] px-4 py-3 text-sm font-semibold text-[#0c3b52] dark:bg-[#0f172a] dark:text-gray-100">
                Atención en Sevilla, Córdoba, Huelva, Cádiz, Málaga y Comunidad de Madrid.
              </div>
              <Button asChild className="mt-2 w-fit">
                <Link href={`${basePath}/contacto`}>Coordinar visita</Link>
              </Button>
            </div>
            <div className="relative h-80 overflow-hidden rounded-[22px] bg-white shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0b1220] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]">
              <iframe
                title="Mapa de Geesol Instalaciones Fotovoltaicas"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7608713633613!2d-6.0375458244239395!3d37.41912663256748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126945841445eb%3A0xcf8feb3db1c424cc!2sGeesol%20Instalaciones%20Fotovoltaicas!5e0!3m2!1ses!2ses!4v1766347986698!5m2!1ses!2ses"
                width="100%"
                height="100%"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[28px] bg-[#0c3b52] px-6 py-10 text-center text-white shadow-[0_16px_45px_rgba(12,59,82,0.2)] dark:bg-[#060a14]">
            <h3 className="text-2xl font-bold">Descubre la magia del sol</h3>
            <p className="mt-2 text-sm text-[#e9eef2]">
              Video corporativo sobre nuestras instalaciones y el ahorro real que conseguimos.
            </p>
            <div className="mt-6 overflow-hidden rounded-[20px] bg-black/40">
              <div className="aspect-video w-full">
                <iframe
                  title="Descubre la magia del sol"
                  src="https://www.youtube.com/embed/8KZRSF5x7hw"
                  className="h-full w-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h3 className="text-3xl font-black text-[#0c3b52] dark:text-white">
            ¿Tienes alguna duda o quieres más información?
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Cuéntanos tu proyecto y te preparamos un estudio gratuito en menos de 24 horas.
          </p>
          <Button asChild className="px-8 py-3 text-lg uppercase">
            <Link href={`${basePath}/contacto`}>Solicitar estudio gratis</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
