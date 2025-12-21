import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import BackToTopButton from "@/components/ui/back-to-top-button";
import { HubSpotForm } from "@/components/ui/hubspot-form";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

const contacts = [
  { label: "Teléfono", value: "955 73 73 22", href: "tel:955737322" },
  { label: "Teléfono", value: "622 22 63 49", href: "tel:622226349" },
  { label: "Teléfono", value: "678 99 91 11", href: "tel:678999111" },
  { label: "Email", value: "info@geesol.com", href: "mailto:info@geesol.com" },
];

const locations = [
  {
    title: "Delegación Andalucía",
    address: "C/ Mansíos, 5. 41900. Camas (Sevilla)",
  },
  {
    title: "Delegación Madrid",
    address: "C/ Tormes, 7, 28840. Mejorada del Campo (Madrid)",
  },
];

export default function ContactoPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Banner
        title="Contacto"
        subtitle="Cuéntanos tu proyecto y coordinamos un estudio gratuito en menos de 24 horas."
        backgroundImage="/static/footer_background.webp"
      />

      <section className="-mt-12 px-4 pb-12 md:-mt-16">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-white p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
            <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">Formulario de contacto</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Rellena tus datos y un asesor te contactará para calcular ahorros, subvenciones y fecha de instalación.
            </p>
            <div className="mt-6">
              <HubSpotForm portalId={portalId} formId={formId} />
            </div>
          </div>

          <div className="space-y-6 rounded-[28px] bg-white p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
            <div>
              <h4 className="text-xl font-semibold text-[#0c3b52] dark:text-white">Datos de contacto</h4>
              <div className="mt-4 space-y-3">
                {contacts.map((item) => (
                  <div key={item.value} className="flex items-center justify-between rounded-[14px] bg-[#f7f8fb] px-4 py-3 text-sm text-gray-800 dark:bg-[#0b1220] dark:text-gray-200">
                    <span className="font-semibold text-[#0c3b52] dark:text-gray-100">{item.label}</span>
                    <a href={item.href} className="text-[#c83c3e] font-semibold hover:underline">
                      {item.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-[#0c3b52] dark:text-white">Delegaciones</h4>
              <div className="mt-4 space-y-3">
                {locations.map((loc) => (
                  <div key={loc.title} className="rounded-[14px] bg-[#f7f8fb] px-4 py-3 dark:bg-[#0b1220]">
                    <p className="text-sm font-semibold text-[#c81618]">{loc.title}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{loc.address}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
              <h4 className="text-xl font-semibold text-[#0c3b52] dark:text-white">WhatsApp</h4>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">Escríbenos para resolver dudas rápidas.</p>
              <Button asChild className="mt-3 w-full">
                <Link href="https://wa.me/34955737322" target="_blank">
                  Abrir chat
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl rounded-[28px] bg-[#f7f8fb] p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
          <div className="grid gap-6 lg:grid-cols-[0.6fr_1fr]">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">Mapa</p>
              <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">Visítanos</h3>
              <p className="text-gray-700 dark:text-gray-300">Aquí podrás incrustar un mapa interactivo de tus delegaciones. Mientras tanto, te dejamos este espacio como marcador.</p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="px-6 py-3">
                  <Link href={`${basePath}/nosotros`}>Conocer al equipo</Link>
                </Button>
                <Button asChild variant="outline" className="px-6 py-3">
                  <Link href={`${basePath}/services`}>Ver servicios</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-[24px] bg-gradient-to-br from-[#0c3b52] to-[#c83c3e]">
              <iframe
                title="Geesol Instalaciones Fotovoltaicas - Mapa de ubicación"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.7608713633613!2d-6.0375458244239395!3d37.41912663256748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126945841445eb%3A0xcf8feb3db1c424cc!2sGeesol%20Instalaciones%20Fotovoltaicas!5e0!3m2!1ses!2ses!4v1766347986698!5m2!1ses!2ses" 
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c3b52] px-4 py-16 text-white dark:bg-[#060a14]">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 text-center">
          <h3 className="text-3xl font-black">¿Prefieres hablar por teléfono?</h3>
          <p className="text-lg text-[#e9eef2]">Llámanos y te ayudamos a elegir la mejor solución de autoconsumo.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild className="px-8 py-3 text-lg uppercase">
              <Link href="tel:955737322">Llamar ahora</Link>
            </Button>
            <Button asChild variant="outline" className="px-8 py-3 text-lg">
              <Link href={`${basePath}/recomienda-y-gana`}>Programa de referidos</Link>
            </Button>
          </div>
        </div>
      </section>

      <BackToTopButton />
    </div>
  );
}
