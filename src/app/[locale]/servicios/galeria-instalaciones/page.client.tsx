import Image from "next/image";
import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function GaleriaInstalacionesPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const gallerySections = [
    {
      slug: "autoconsumo-domestico",
      title: "Autoconsumo doméstico",
      description:
        "Viviendas con instalaciones optimizadas para consumo diario, máxima independencia y monitorización constante.",
      images: [
        "/static/home/main_home_ilustration.webp",
        "/static/28128.jpg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86638.jpeg",
      ],
    },
    {
      slug: "autoconsumo-industrial",
      title: "Autoconsumo industrial",
      description:
        "Proyectos para naves, cubiertas y centros logísticos diseñados para reducir costes energéticos.",
      images: [
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86639.jpeg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86640.jpeg",
        "/static/28128.jpg",
      ],
    },
    {
      slug: "bombeo-solar",
      title: "Bombeo solar",
      description:
        "Instalaciones agrícolas con variadores solares, control de caudal y ahorro operativo.",
      images: [
        "/static/freepik__candid-photography-with-natural-textures-and-highl__86638.jpeg",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__17569.jpeg",
      ],
    },
    {
      slug: "sistemas-aislados",
      title: "Sistemas aislados",
      description:
        "Sistemas híbridos con baterías para zonas sin red, con autonomía y control remoto.",
      images: [
        "/static/home/main_home_ilustration.webp",
        "/static/freepik__candid-photography-with-natural-textures-and-highl__17569.jpeg",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title="Galería de instalaciones"
        subtitle="Proyectos residenciales, industriales y agrícolas agrupados por servicio para inspirar tu próxima instalación."
        backgroundImage="/static/services_background.webp"
      />

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-12">
          {gallerySections.map((section) => (
            <div
              key={section.slug}
              className="rounded-[28px] bg-white/90 p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] backdrop-blur dark:bg-[#0f172a]/90 dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {section.description}
                  </p>
                </div>
                <Button asChild className="w-fit px-6 py-3">
                  <Link href={`${basePath}/servicios/${section.slug}`}>
                    Ver servicio
                  </Link>
                </Button>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.images.map((src, idx) => (
                  <div
                    key={`${section.slug}-${src}-${idx}`}
                    className="group relative aspect-[4/3] overflow-hidden rounded-[24px] bg-[#f7f8fb] shadow-[0_12px_35px_rgba(12,59,82,0.14)] dark:bg-[#0f172a] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)]"
                  >
                    <Image
                      src={src}
                      alt={`${section.title} ${idx + 1}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 30vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
