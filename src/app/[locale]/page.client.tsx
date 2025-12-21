"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
const highlights = [
  {
    title: "Tranquilidad garantizada",
    description:
      "Olvida el papeleo, nos encargamos de gestionar subvenciones y bonificaciones para ti.",
    icon: "⚡️",
  },
  {
    title: "Gana un total en tu inversión",
    description:
      "Ahorra en tu factura y recupera tu inversión desde el primer año con una instalación optimizada.",
    icon: "💶",
  },
  {
    title: "Ahorro real y sostenible",
    description:
      "Genera tu propia energía limpia y protege tu hogar o negocio frente a subidas de la luz.",
    icon: "🌞",
  },
];

const handOffFeatures = [
  {
    title: "Ahorro y rentabilidad garantizados",
    description:
      "Calculamos tu ahorro exacto y optimizamos cada panel para maximizar tu producción energética.",
    icon: "💡",
  },
  {
    title: "Gestión sin complicaciones",
    description:
      "Tramitamos licencias, subvenciones y bonificaciones para que no tengas que preocuparte por nada.",
    icon: "📄",
  },
  {
    title: "Experiencia y confianza",
    description:
      "Equipos certificados y monitoreo continuo para asegurar el mejor rendimiento de tu instalación.",
    icon: "🛠️",
  },
  {
    title: "Atención personalizada",
    description:
      "Un asesor experto te acompaña durante todo el proceso y resuelve tus dudas al instante.",
    icon: "🤝",
  },
  {
    title: "Alto valor añadido",
    description:
      "Incrementa el valor de tu vivienda o negocio con una instalación moderna y eficiente.",
    icon: "🏡",
  },
  {
    title: "Financiación flexible",
    description:
      "Te ayudamos a acceder a financiación a medida para que empieces a ahorrar desde el primer mes.",
    icon: "💳",
  },
];

const productFeatures = [
  {
    title: "Seguridad",
    description:
      "Materiales de máxima calidad, instalación certificada y monitorización constante para tu tranquilidad.",
  },
  {
    title: "Ventajas",
    description:
      "Reduce tu factura, aumenta tu independencia energética y accede a bonificaciones exclusivas.",
  },
  {
    title: "Garantía",
    description:
      "Cobertura completa sobre equipos y mano de obra para que tu inversión esté siempre protegida.",
  },
  {
    title: "Monetización",
    description:
      "Vende excedentes a la red y obtén retornos adicionales sin esfuerzo mediante vertido cero controlado.",
  },
];

const installationTypes = [
  {
    title: "Autoconsumo doméstico",
    description:
      "Solución integral para viviendas que quieren reducir su factura y ser más sostenibles.",
    image: "/static/plans/1.webp",
  },
  {
    title: "Autoconsumo industrial",
    description:
      "Diseños a medida para grandes consumos, optimizando el retorno y la estabilidad energética.",
    image: "/static/plans/2.webp",
  },
  {
    title: "Sistemas aislados de la red",
    description:
      "Independencia total para ubicaciones sin conexión eléctrica con sistemas híbridos y baterías.",
    image: "/static/plans/3.webp",
  },
  {
    title: "Bombeo solar",
    description:
      "Soluciones de bombeo eficientes para agricultura y riego, reduciendo costes operativos.",
    image: "/static/plans/2_01.webp",
  },
];


const successCases = [
  {
    title: "Cubierta residencial",
    image: "/static/plans/1.webp",
  },
  {
    title: "Instalación en cubierta industrial",
    image: "/static/plans/2.webp",
  },
  {
    title: "Instalación en suelo",
    image: "/static/plans/3.webp",
  },
  {
    title: "Bombeo solar agrícola",
    image: "/static/plans/1_01.webp",
  },
];

const stats = [
  { value: "70%", label: "menos en tu factura de energía" },
  { value: "25 años", label: "de garantía total" },
  { value: "600 kg", label: "menos de CO₂ al año por hogar" },
];

const Hero = () => {
  return (
    <HeroHighlight containerClassName="min-h-[70vh] bg-[#f7f8fb] dark:bg-[#0b1220]">
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 lg:flex-row lg:items-center">
        <div className="absolute -left-24 -top-24 h-56 w-56 rounded-full bg-[#22A60D]/15 blur-3xl" />
        <div className="absolute -bottom-24 right-0 h-56 w-56 rounded-full bg-[#46B1C9]/20 blur-3xl" />

        <div className="relative z-10 flex-1 space-y-6 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0c3b52] dark:text-[#e9eef2]">
            Energía solar a tu medida
          </p>
          <h1 className="text-4xl font-black leading-tight text-[#0c3b52] dark:text-white md:text-5xl lg:text-6xl">
            El poder del <Highlight className="from-[#22A60D] to-[#46B1C9] text-[#0c3b52]">sol</Highlight>{" "}
            en tu mano
          </h1>
          <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300 md:text-xl">
            Disfruta tu propia energía en tu hogar o negocio con la última tecnología en fotovoltaica.
            Gestionamos ayudas, legalización y puesta en marcha para que ahorres desde el primer mes.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Estudio en 24h", "Gestión integral", "Monitorización 24/7"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0c3b52] shadow-sm dark:bg-[#0f172a] dark:text-gray-100"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild className="text-lg px-8 py-3 uppercase">
              <Link href="#cta">Solicitar estudio gratis</Link>
            </Button>
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              Hasta el 80% en subvenciones y bonificaciones disponibles.
            </span>
          </div>
        </div>

        <div className="relative z-10 flex-1">
          <div className="relative overflow-hidden rounded-[32px] bg-white shadow-[0_20px_60px_rgba(12,59,82,0.25)] dark:bg-[#0f172a]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0c3b52]/10 via-transparent to-[#22A60D]/10" />
            <Image
              src="/static/main_home_ilustration.webp"
              alt="Instalación fotovoltaica sobre tejado"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-4 bg-white/90 px-6 py-4 text-sm font-semibold text-[#0c3b52] backdrop-blur dark:bg-[#0b1220]/90 dark:text-gray-100">
              <span>Más de 5.000 instalaciones</span>
              <span>Garantía hasta 25 años</span>
            </div>
          </div>
        </div>
      </div>
    </HeroHighlight>
  );
};

const HighlightCards = () => {
  return (
    <section className="-mt-12 bg-transparent px-4 pb-12 md:-mt-16">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-[28px] bg-white p-6 shadow-[0_12px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_12px_45px_rgba(0,0,0,0.35)]"
          >
            <div className="mb-4 text-3xl">{item.icon}</div>
            <h3 className="mb-2 text-xl font-bold text-[#0c3b52] dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const TwoColumnFeature = () => {
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-[32px] shadow-[0_18px_55px_rgba(12,59,82,0.16)]">
          <Image
            src="/static/main_home_ilustration.webp"
            alt="Instalación de paneles solares"
            width={1400}
            height={900}
            className="h-full w-full object-cover"
            sizes="(min-width: 1024px) 60vw, 100vw"
          />
        </div>
        <div className="space-y-4 rounded-[28px] bg-[#f7f8fb] p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
            Instalaciones fotovoltaicas
          </p>
          <h2 className="text-3xl font-black text-[#0c3b52] dark:text-white">
            Energía solar llave en mano para tu hogar o negocio
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            Gestionamos el diseño, la instalación y la tramitación de
            subvenciones para que disfrutes de tu propia energía sin
            preocupaciones. Nuestro equipo técnico supervisa cada detalle para
            asegurar el mejor rendimiento.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Desde proyectos residenciales hasta grandes cubiertas industriales,
            nos adaptamos a tus necesidades con garantías extendidas y
            monitorización constante.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {["Diseño a medida", "Gestión integral", "Monitorización 24/7"].map(
              (tag) => (
                <span
              key={tag}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0c3b52] shadow-sm dark:bg-[#0b1220] dark:text-gray-100"
            >
              {tag}
            </span>
          ),
        )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const t = useTranslations();
  return <TestimonialsSection t={t} />;
};

const SuccessCases = () => {
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
            Casos de éxito
          </h3>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-2">
          {successCases.map((item) => (
            <div
              key={item.title}
              className="min-w-[240px] flex-1 rounded-[24px] bg-white shadow-[0_12px_32px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-40 w-full overflow-hidden rounded-t-[24px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="240px"
                />
              </div>
              <div className="p-4 text-center font-semibold text-[#0c3b52] dark:text-white">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProductStar = () => {
  return (
    <section className="relative isolate overflow-hidden bg-[#0c3b52] px-4 py-16 text-white dark:bg-[#060a14]">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1800&q=80"
          alt="Paneles solares sobre cubierta"
          fill
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c3b52]/90 via-[#0c3b52]/90 to-[#0c3b52] dark:from-black/75 dark:via-[#060a14]/90 dark:to-[#060a14]" />
      </div>
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 text-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f7f2ec]">
            Nuestro
          </p>
          <h3 className="text-3xl font-black">
            Producto <span className="text-[#f3a019]">Estrella</span>
          </h3>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {productFeatures.map((feature) => (
            <div
              key={feature.title}
              className="rounded-[20px] bg-white/10 p-5 text-left shadow-[0_12px_32px_rgba(0,0,0,0.15)] backdrop-blur"
            >
              <h4 className="mb-2 text-lg font-semibold text-white">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-100">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Button asChild className="px-8 py-3 text-lg uppercase">
            <Link href="#cta">Más información</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

const HandOffGrid = () => {
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-6xl">
        <h3 className="mb-10 text-center text-3xl font-black text-[#0c3b52] dark:text-white">
          Instalaciones fotovoltaicas &quot;llave en mano&quot;
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {handOffFeatures.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 rounded-[22px] bg-[#f7f8fb] p-6 shadow-[0_10px_30px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            >
              <span className="text-2xl">{item.icon}</span>
              <h4 className="text-lg font-semibold text-[#0c3b52] dark:text-white">
                {item.title}
              </h4>
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InstallationTypes = () => {
  return (
    <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
            Tipos de instalaciones fotovoltaicas
          </h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            Diseñamos y ejecutamos la solución ideal para tu vivienda, negocio o
            explotación agrícola, con la mejor calidad y eficiencia.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {installationTypes.map((item) => (
            <div
              key={item.title}
              className="flex flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_12px_35px_rgba(12,59,82,0.14)] dark:bg-[#0b1220] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h4 className="text-lg font-semibold text-[#0c3b52] dark:text-white">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {item.description}
                </p>
                <Button asChild className="mt-auto px-4 py-2 text-sm uppercase">
                  <Link href="#cta">Ver más</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ReferralSection = () => {
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[32px] bg-[#f7f8fb] p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)] lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-black text-[#0c3b52] dark:text-white">
            Programa de referidos desde la nueva app
          </h3>
          <p className="text-gray-700 dark:text-gray-300">
            Invita a tus familiares y amigos y gana recompensas por cada
            instalación que contraten. Gestiona tus referencias desde nuestra
            app y sigue tu ahorro en tiempo real.
          </p>
          <Button asChild className="px-6 py-3 uppercase">
            <Link href="#cta">Quiero registrarme</Link>
          </Button>
        </div>
        <div className="relative flex-1">
          <div className="relative mx-auto h-[320px] w-[220px] overflow-hidden rounded-[28px] border border-white shadow-[0_18px_45px_rgba(12,59,82,0.2)]">
            <Image
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
              alt="Vista previa de la app de referidos"
              fill
              className="object-cover"
              sizes="220px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const StatsBar = () => {
  return (
    <section
      id="cta"
      className="bg-[#0c3b52] px-4 py-12 text-white dark:bg-[#060a14]"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div className="grid w-full gap-6 text-center sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="rounded-[18px] bg-white/10 p-4 shadow-[0_10px_28px_rgba(0,0,0,0.15)] backdrop-blur dark:bg-white/5"
            >
              <div className="text-3xl font-black">{stat.value}</div>
              <div className="text-sm text-gray-100">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-black">
            Estudio de ahorro a medida y gratuito
          </h3>
          <p className="mt-2 max-w-2xl text-gray-100">
            Te decimos cuánto ahorrarás en energía y diseñamos la solución ideal
            para tu hogar o negocio.
          </p>
        </div>
        <Button asChild className="px-8 py-3 text-lg uppercase">
          <Link href="#cta">Solicitar estudio gratis</Link>
        </Button>
      </div>
    </section>
  );
};

export default function HomePage() {
  return (
    <div className="bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Hero />
      <HighlightCards />
      <TwoColumnFeature />
      <Testimonials />
      <SuccessCases />
      <ProductStar />
      <HandOffGrid />
      <InstallationTypes />
      <ReferralSection />
      <StatsBar />
    </div>
  );
}
