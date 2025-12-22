"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import {
  Calendar,
  ScrollText,
  ShieldCheck,
  Sparkles,
  ExternalLink,
} from "lucide-react";

import { type Locale } from "@/i18n/routing";
import { Button } from "@/components/ui/button";
import Slider from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/theme-context";

type LegalTab = "terms" | "privacy" | "cookies";

type LegalSection = {
  heading: string;
  body: string[];
  bullets?: string[];
};

type LegalDocument = {
  title: string;
  updated: string;
  summary: string;
  keyPoints: string[];
  sections: LegalSection[];
};

const pageCopy: Record<
  Locale,
  {
    title: string;
    subtitle: string;
    tabs: Record<LegalTab, string>;
    highlightsTitle: string;
    metaLabel: string;
    supportKicker: string;
    supportTitle: string;
    supportDescription: string;
    contactCta: string;
    backHome: string;
  }
> = {
  en: {
    title: "Legal center",
    subtitle:
      "Clear, human language about how we protect your data, cookies, and the way you use our solar services.",
    tabs: {
      terms: "Terms of Service",
      privacy: "Privacy Policy",
      cookies: "Cookies Policy",
    },
    highlightsTitle: "Essentials at a glance",
    metaLabel: "Last updated",
    supportKicker: "PDF & support",
    supportTitle: "Need a signed copy?",
    supportDescription:
      "Ask our team for the PDF version or a signed agreement. We reply within one business day.",
    contactCta: "Request document",
    backHome: "Back to homepage",
  },
  es: {
    title: "Centro legal",
    subtitle:
      "Explicaciones claras sobre cómo protegemos tus datos, el uso de cookies y las condiciones de nuestros servicios solares.",
    tabs: {
      terms: "Términos del servicio",
      privacy: "Política de privacidad",
      cookies: "Política de cookies",
    },
    highlightsTitle: "Lo esencial",
    metaLabel: "Última actualización",
    supportKicker: "PDF y soporte",
    supportTitle: "¿Necesitas una copia firmada?",
    supportDescription:
      "Pídenos la versión en PDF o un acuerdo firmado. Respondemos en un día laborable.",
    contactCta: "Solicitar documento",
    backHome: "Volver al inicio",
  },
};

const legalDocuments: Record<Locale, Record<LegalTab, LegalDocument>> = {
  en: {
    terms: {
      title: "Terms of Service",
      updated: "2025-02-02",
      summary:
        "How you can use our website and services, what we promise, and how we handle changes or service availability.",
      keyPoints: [
        "Use the site respectfully and only for lawful purposes.",
        "Availability may vary; we aim for reliability without guaranteeing uptime.",
        "Content on the site belongs to us; you may not republish without consent.",
      ],
      sections: [
        {
          heading: "Scope & acceptance",
          body: [
            "By browsing or submitting a request through this site you accept these terms and confirm you are at least 18 years old or have legal capacity in your jurisdiction.",
            "If you are using the site on behalf of a company, you confirm you are authorized to do so and your company accepts these terms.",
          ],
        },
        {
          heading: "Use of the site",
          body: [
            "Use the site only for lawful purposes and avoid disrupting, reverse engineering, or misusing any feature.",
            "When you send us information (such as a quotation request) you confirm it is accurate to the best of your knowledge.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "Logos, images, texts, and layouts belong to Geesol. You may not copy, resell, or frame them without written consent.",
            "Any feedback you share can be used to improve the service without obligation to compensate you.",
          ],
        },
        {
          heading: "Liability",
          body: [
            "We operate the site on an “as is” basis. We are not liable for indirect or consequential damages arising from its use.",
            "Nothing in these terms limits liability where the law does not allow it, including cases of gross negligence or willful misconduct.",
          ],
        },
        {
          heading: "Changes & governing law",
          body: [
            "We may update these terms to reflect legal, security, or business changes. Material updates will be highlighted on this page.",
            "Spanish law applies. Disputes will be handled in the courts of Seville unless mandatory consumer law states otherwise.",
          ],
        },
      ],
    },
    privacy: {
      title: "Privacy Policy — Your data secure",
      updated: "2025-12-09",
      summary:
        "Clear information about how we protect your personal data, how we use it and how you can exercise your rights.",
      keyPoints: [
        "We will only use your data to provide our services and to communicate with you.",
        "You have rights to access, correct, delete and port your data.",
        "We keep your data secure and only share it when necessary or required by law.",
      ],
      sections: [
        {
          heading: "Who we are",
          body: [
            "Company name: GEESOL RENOVABLES SL",
            "Tax ID: B90342742",
            "Main activity: PHOTOVOLTAIC INSTALLATIONS",
            "Address: C/ Extremadura, 147 D, Polígono Empresarial Los Llanos, 41909 Salteras (Seville), Spain",
            "Phone: +34 955 737 322",
            "Contact email: info@geesol.com",
            "Website: https://geesol.com",
            "We are registered in the corresponding Mercantile/Public Register and remain available for any queries.",
          ],
        },
        {
          heading: "Why we collect your data",
          body: [
            "We need your personal data to communicate with you and to provide our services.",
            "We will also ask for your explicit choices when we want to use your data for marketing or other optional purposes.",
          ],
        },
        {
          heading: "Who will have access to your information",
          body: [
            "Only authorised personnel within our organisation will access your information.",
            "We may share data with third parties that are necessary to provide the service (for example, banks for payments).",
            "We will disclose data to public or private bodies only when required by law (for example, tax authorities).",
            "If we need to share your data with other organisations outside the aforementioned cases, we will request your prior consent.",
          ],
        },
        {
          heading: "How we protect your data",
          body: [
            "We apply effective technical and organisational security measures appropriate to the risks involved.",
            "We have an internal Data Protection Policy and conduct controls and annual audits to ensure your data is kept secure.",
          ],
        },
        {
          heading: "International transfers",
          body: [
            "We generally do not transfer your personal data to countries outside the European Economic Area unless they provide adequate protection.",
            "If an international transfer is necessary to provide a service, we will request your consent beforehand and apply safeguards to reduce the risks.",
          ],
        },
        {
          heading: "Retention period",
          body: [
            "We retain personal data for the duration of our relationship and as long as laws require. After statutory retention periods expire, we will securely delete the data.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "You can request access to the personal data we hold about you, rectify inaccurate data and request deletion where legally possible.",
            "You also have the right to request portability of your data.",
            "To exercise these rights, send a written request to our postal address including a copy of your ID, or use the forms available at our offices.",
            "For more information on your rights, you can consult the Spanish Data Protection Agency website: https://www.aepd.es",
          ],
        },
        {
          heading: "Withdraw consent and complaints",
          body: [
            "You may withdraw any consent you have given at any time for future processing.",
            "If you believe your rights have not been respected, you may file a complaint with the Spanish Data Protection Agency (AEPD) at https://www.aepd.es or via postal mail to C/ Jorge Juan, 6, 28001 Madrid.",
          ],
        },
        {
          heading: "Profiling",
          body: [
            "Our general policy is not to create profiles of our users. If profiling is necessary for service delivery or commercial purposes, we will apply appropriate safeguards and inform you in advance.",
          ],
        },
        {
          heading: "Other uses",
          body: [
            "We will not use your data for purposes other than those stated. If we need to use your data for new purposes, we will ask for your clear consent beforehand.",
          ],
        },
      ],
    },
    cookies: {
      title: "Cookies Policy",
      updated: "2025-01-18",
      summary:
        "How we use cookies and similar technologies to keep the site secure, understand traffic, and improve the experience.",
      keyPoints: [
        "Essential cookies keep the site secure and cannot be disabled.",
        "Analytics cookies run only after you consent.",
        "You can adjust preferences at any time in your browser or cookie banner.",
      ],
      sections: [
        {
          heading: "What are cookies?",
          body: [
            "Cookies are small files stored on your device to remember preferences, secure sessions, and measure performance.",
            "We also use similar technologies such as local storage for faster load times.",
          ],
        },
        {
          heading: "Types we use",
          body: [
            "Essential: security, load balancing, and keeping your session while you browse forms.",
            "Analytics: aggregated metrics on page views and navigation paths to improve content.",
          ],
        },
        {
          heading: "Managing preferences",
          body: [
            "You can disable non-essential cookies through the consent banner or your browser settings without affecting core navigation.",
            "If you clear cookies, we will ask for consent again on your next visit.",
          ],
        },
        {
          heading: "Third parties",
          body: [
            "Analytics providers receive anonymized or pseudonymized data. They are bound by data processing agreements.",
            "We never sell your browsing information or use it for unrelated advertising.",
          ],
        },
      ],
    },
    
  },
  es: {
    terms: {
      title: "Términos del servicio",
      updated: "2025-02-02",
      summary:
        "Cómo puedes usar nuestra web y servicios, qué ofrecemos y cómo gestionamos cambios o disponibilidad.",
      keyPoints: [
        "Usa el sitio de forma respetuosa y solo para fines legales.",
        "Trabajamos para ofrecer disponibilidad, pero no garantizamos tiempo de actividad ininterrumpido.",
        "El contenido pertenece a Geesol; no puede republicarse sin permiso.",
      ],
      sections: [
        {
          heading: "Ámbito y aceptación",
          body: [
            "Al navegar o enviarnos una solicitud aceptas estos términos y confirmas que tienes 18 años o capacidad legal en tu jurisdicción.",
            "Si usas el sitio en nombre de una empresa, declaras que estás autorizado y que la empresa acepta estas condiciones.",
          ],
        },
        {
          heading: "Uso del sitio",
          body: [
            "Utiliza el sitio solo con fines legales y evita interrumpir, descompilar o hacer un uso indebido de cualquier funcionalidad.",
            "Cuando nos envías información (por ejemplo, una solicitud de presupuesto) confirmas que es veraz según tu conocimiento.",
          ],
        },
        {
          heading: "Propiedad intelectual",
          body: [
            "Logotipos, imágenes, textos y diseños pertenecen a Geesol. No puedes copiarlos, revenderlos ni enmarcarlos sin consentimiento escrito.",
            "El feedback que compartas puede usarse para mejorar el servicio sin obligación de compensarte.",
          ],
        },
        {
          heading: "Responsabilidad",
          body: [
            "Operamos el sitio “tal cual”. No somos responsables de daños indirectos o consecuenciales derivados de su uso.",
            "Nada de lo anterior limita la responsabilidad cuando la ley no lo permite, incluidos los casos de negligencia grave o dolo.",
          ],
        },
        {
          heading: "Cambios y ley aplicable",
          body: [
            "Podemos actualizar estos términos para reflejar cambios legales, de seguridad o de negocio. Las actualizaciones relevantes se indicarán en esta página.",
            "Se aplica la legislación española. Los conflictos se resolverán en los juzgados de Sevilla salvo que la ley de consumo disponga otra cosa.",
          ],
        },
      ],
    },
    privacy: {
      title: "Política de privacidad — Sus datos seguros",
      updated: "2025-12-09",
      summary:
        "Información clara sobre cómo protegemos sus datos personales, cómo los usamos y cómo puede ejercer sus derechos.",
      keyPoints: [
        "Utilizaremos sus datos únicamente para prestar nuestros servicios y comunicarnos con usted.",
        "Tiene derechos de acceso, rectificación, supresión y portabilidad de sus datos.",
        "Mantenemos sus datos seguros y solo los compartimos cuando sea necesario o nos lo exija la ley.",
      ],
      sections: [
        {
          heading: "Quiénes somos",
          body: [
            "Denominación: GEESOL RENOVABLES SL",
            "CIF/NIF: B90342742",
            "Actividad principal: INSTALACIONES FOTOVOLTAICAS",
            "Dirección: C/ Extremadura, 147 D, Polígono Empresarial Los Llanos, 41909 Salteras (Sevilla)",
            "Teléfono: 955 737 322",
            "Correo electrónico: info@geesol.com",
            "Página web: https://geesol.com",
            "Estamos inscritos en el Registro Mercantil/Registro Público correspondiente y a su disposición para cualquier consulta.",
          ],
        },
        {
          heading: "¿Para qué vamos a usar sus datos?",
          body: [
            "En general, sus datos se utilizarán para relacionarnos con usted y prestarle nuestros servicios.",
            "Asimismo, pueden utilizarse para otras actividades opcionales como el envío de publicidad si nos autoriza para ello.",
          ],
        },
        {
          heading: "¿Quién va a conocer la información?",
          body: [
            "Solo el personal autorizado de nuestra entidad tendrá acceso a la información que solicitamos.",
            "Podremos ceder datos a terceros necesarios para prestar el servicio (por ejemplo, entidades bancarias para pagos).",
            "También se facilitarán datos a autoridades públicas o privadas cuando exista una obligación legal (por ejemplo, Hacienda).",
            "Si fuera necesario comunicar sus datos a otras entidades fuera de estos supuestos, solicitaremos su permiso previo.",
          ],
        },
        {
          heading: "¿Cómo vamos a proteger sus datos?",
          body: [
            "Protegemos sus datos con medidas técnicas y organizativas eficaces en función de los riesgos.",
            "Contamos con una Política de Protección de Datos y realizamos controles y auditorías anuales para verificar la seguridad de sus datos.",
          ],
        },
        {
          heading: "¿Enviaremos sus datos a otros países?",
          body: [
            "Nuestra política es no transferir datos personales a países que no ofrecen un nivel de protección adecuado.",
            "Si fuera imprescindible una transferencia internacional, solicitaremos su consentimiento y aplicaremos medidas de seguridad para minimizar riesgos.",
          ],
        },
        {
          heading: "¿Durante cuánto tiempo conservaremos sus datos?",
          body: [
            "Conservaremos sus datos durante la relación y mientras lo exijan las leyes aplicables. Tras los plazos legales procederemos a su eliminación segura.",
          ],
        },
        {
          heading: "¿Cuáles son sus derechos?",
          body: [
            "Puede solicitarnos en cualquier momento el acceso a sus datos, su rectificación, supresión o la limitación de su tratamiento cuando proceda.",
            "También puede solicitar la portabilidad de sus datos para trasladarlos a otro responsable.",
            "Para ejercer estos derechos debe presentar una solicitud escrita en nuestra dirección junto con copia de su DNI para poder identificarle.",
          ],
        },
        {
          heading: "Retirada del consentimiento y reclamaciones",
          body: [
            "Puede retirar su consentimiento en cualquier momento para el tratamiento futuro de sus datos.",
            "Si considera que sus derechos no han sido atendidos, podrá presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD): https://www.aepd.es",
          ],
        },
        {
          heading: "Elaboración de perfiles",
          body: [
            "Nuestra política general es no elaborar perfiles. Si fuera necesario para prestar un servicio o con fines comerciales, aplicaremos garantías y le informaremos previamente.",
          ],
        },
        {
          heading: "Otros usos",
          body: [
            "No utilizaremos sus datos para finalidades distintas a las aquí expuestas sin solicitar su consentimiento previo.",
          ],
        },
      ],
    },
    cookies: {
      title: "Política de cookies",
      updated: "2025-01-18",
      summary:
        "Cómo usamos cookies y tecnologías similares para mantener el sitio seguro, entender el tráfico y mejorar la experiencia.",
      keyPoints: [
        "Las cookies esenciales mantienen el sitio seguro y no pueden desactivarse.",
        "Las cookies de analítica solo funcionan si das tu consentimiento.",
        "Puedes ajustar tus preferencias en cualquier momento en el banner o en tu navegador.",
      ],
      sections: [
        {
          heading: "¿Qué son las cookies?",
          body: [
            "Son archivos pequeños que se guardan en tu dispositivo para recordar preferencias, asegurar sesiones y medir rendimiento.",
            "También usamos tecnologías similares como almacenamiento local para acelerar la carga.",
          ],
        },
        {
          heading: "Tipos que usamos",
          body: [
            "Esenciales: seguridad, balanceo de carga y mantenimiento de tu sesión mientras navegas los formularios.",
            "Analítica: métricas agregadas sobre visitas y navegación para mejorar el contenido.",
          ],
        },
        {
          heading: "Gestión de preferencias",
          body: [
            "Puedes desactivar las cookies no esenciales desde el banner de consentimiento o tu navegador sin afectar la navegación básica.",
            "Si borras las cookies, volveremos a pedir tu consentimiento en la siguiente visita.",
          ],
        },
        {
          heading: "Terceros",
          body: [
            "Los proveedores de analítica reciben datos anonimizados o seudonimizados y están sujetos a acuerdos de tratamiento.",
            "Nunca vendemos tu información de navegación ni la usamos para publicidad ajena.",
          ],
        },
      ],
    },
    
  },
};

const LegalPage = () => {
  const locale = useLocale() as Locale;
  const { isDark } = useTheme();
  const [activeTab, setActiveTab] = useState<LegalTab>("terms");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams?.get("tab") as LegalTab | null;
    if (tab && ["terms", "privacy", "cookies", "license"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const copy = pageCopy[locale] ?? pageCopy.en;
  const docs = legalDocuments[locale] ?? legalDocuments.en;
  const activeDoc = docs[activeTab];
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(() => {
    try {
      if (typeof window === 'undefined') return false;
      const raw = localStorage.getItem('cookie-preferences');
      if (!raw) return false;
      const parsed = JSON.parse(raw);
      return !!parsed.analytics;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    const onPrefs = (e: Event) => {
      try {
        // @ts-expect-error custom event carries detail
        const detail = e?.detail;
        if (detail && typeof detail === 'object') {
          setAnalyticsEnabled(!!detail.analytics);
        }
      } catch {
        // ignore
      }
    };

    window.addEventListener('cookie-preferences-changed', onPrefs as EventListener);
    return () => window.removeEventListener('cookie-preferences-changed', onPrefs as EventListener);
  }, []);

  const tabs = useMemo(
    () => [
      { id: "terms" as LegalTab, label: copy.tabs.terms, icon: ScrollText },
      { id: "privacy" as LegalTab, label: copy.tabs.privacy, icon: ShieldCheck },
      { id: "cookies" as LegalTab, label: copy.tabs.cookies, icon: Sparkles },
    ],
    [copy.tabs.cookies, copy.tabs.privacy, copy.tabs.terms],
  );

  const tabButtonClass = (id: LegalTab) => {
    const base = "group inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-semibold transition-all";
    if (activeTab === id) {
      return isDark
        ? `${base} border-amber-300/60 bg-amber-300/15 text-white shadow-[0_10px_30px_rgba(244,178,58,0.2)]`
        : `${base} border-amber-300/60 bg-amber-300/15 text-amber-700 shadow-[0_8px_20px_rgba(244,178,58,0.12)]`;
    }
    return isDark
      ? `${base} border-white/10 bg-white/5 text-slate-200 hover:border-amber-200/30 hover:bg-amber-100/10 hover:text-white`
      : `${base} border-gray-200 bg-white text-slate-700 hover:border-amber-200/30 hover:bg-amber-50 hover:text-amber-700`;
  };

  const rootClass = isDark
    ? "relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0b1220] via-[#0d2036] to-[#0f2947] text-slate-50"
    : "relative min-h-screen overflow-hidden bg-gray-50 text-slate-900";

  const overlaySet = isDark
    ? (
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(244,178,58,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(110,231,183,0.08),transparent_25%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.02)_35%,transparent_70%)]" />
        </div>
      )
    : null;

  const panelClass = isDark
    ? "rounded-3xl border border-white/10 bg-white/5 px-6 py-8 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:px-10"
    : "rounded-3xl border border-gray-200 bg-white px-6 py-8 shadow-sm sm:px-10";

  const cardClass = (extra = "") =>
    isDark ? `border-white/10 bg-white/5 backdrop-blur-md ${extra}` : `border-gray-200 bg-white ${extra}`;

  return (
    <div className={rootClass}>
      {overlaySet}

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-20 pt-24 md:px-6 lg:px-8 lg:pt-28">
        <div className={panelClass}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-3">
              <p className={isDark ? "text-xs font-semibold uppercase tracking-[0.32em] text-amber-300" : "text-xs font-semibold uppercase tracking-[0.32em] text-amber-600"}>
                Geesol
              </p>
              <h1 className={isDark ? "text-4xl font-black leading-tight text-white md:text-5xl" : "text-4xl font-black leading-tight text-slate-900 md:text-5xl"}>
                {copy.title}
              </h1>
              <p className={isDark ? "max-w-3xl text-base text-slate-200 md:text-lg" : "max-w-3xl text-base text-slate-700 md:text-lg"}>
                {copy.subtitle}
              </p>
            </div>
            <Link href="/" className="self-start lg:self-center">
              <Button className="bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-[0_15px_40px_rgba(244,178,58,0.35)] hover:shadow-[0_20px_50px_rgba(240,124,58,0.4)] normal-case not-italic font-semibold tracking-tight">
                <ExternalLink className="mr-2 h-4 w-4" />
                {copy.backHome}
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={tabButtonClass(tab.id)}>
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Card className={cardClass()}>
            <CardContent className={`space-y-6 p-6 md:p-8 ${isDark ? "" : "text-slate-900"}`}>
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className={isDark ? "text-xs uppercase tracking-[0.3em] text-amber-200" : "text-xs uppercase tracking-[0.3em] text-amber-600"}>
                    {copy.tabs[activeTab]}
                  </p>
                  <h2 className={`${isDark ? "text-2xl font-black text-white md:text-3xl" : "text-2xl font-black text-slate-900 md:text-3xl"}`}>
                    {activeDoc.title}
                  </h2>
                </div>
                <div className={isDark ? "flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200" : "flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-semibold text-slate-700"}>
                  <Calendar className={isDark ? "h-4 w-4 text-amber-200" : "h-4 w-4 text-amber-500"} />
                  {copy.metaLabel}: {activeDoc.updated}
                </div>
              </div>

              <p className={isDark ? "text-base text-slate-100/90" : "text-base text-slate-700"}>{activeDoc.summary}</p>

              <div className="space-y-8">
                {activeDoc.sections.map((section) => (
                  <div key={section.heading} className={isDark ? "space-y-3 rounded-2xl border border-white/10 bg-white/5 p-4 md:p-5" : "space-y-3 rounded-2xl border border-gray-200 bg-white p-4 md:p-5"}>
                    <h3 className={isDark ? "text-lg font-bold text-white" : "text-lg font-bold text-slate-900"}>{section.heading}</h3>
                    <div className={isDark ? "space-y-3 text-slate-100/85" : "space-y-3 text-slate-700"}>
                      {section.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.bullets && (
                        <ul className={isDark ? "list-disc space-y-2 pl-5 text-slate-100/80" : "list-disc space-y-2 pl-5 text-slate-700"}>
                          {section.bullets.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Card className={cardClass("bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-md")}>
              <CardContent className={`space-y-4 p-6 md:p-7 ${isDark ? "" : "text-slate-800"}`}>
                <div className="flex items-center gap-3">
                  <ShieldCheck className={isDark ? "h-5 w-5 text-amber-300" : "h-5 w-5 text-amber-500"} />
                  <h3 className={isDark ? "text-lg font-semibold text-white" : "text-lg font-semibold text-slate-900"}>{copy.highlightsTitle}</h3>
                </div>
                <p className={isDark ? "text-slate-100/85" : "text-slate-700"}>{activeDoc.summary}</p>
                <div className="space-y-3">
                  {activeDoc.keyPoints.map((point) => (
                    <div key={point} className={isDark ? "flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-50" : "flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm text-slate-700"}>
                      <span className={isDark ? "mt-1 h-2 w-2 rounded-full bg-amber-300" : "mt-1 h-2 w-2 rounded-full bg-amber-500"} />
                      <p className="leading-relaxed">{point}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className={cardClass()}>
              <CardContent className={`space-y-4 p-6 md:p-7 ${isDark ? "" : "text-slate-800"}`}>
                <div className="flex items-center gap-3">
                  <Sparkles className={isDark ? "h-5 w-5 text-amber-300" : "h-5 w-5 text-amber-500"} />
                  <div>
                    <p className={isDark ? "text-sm font-semibold uppercase tracking-[0.2em] text-amber-200" : "text-sm font-semibold uppercase tracking-[0.2em] text-amber-600"}>
                      {copy.supportKicker}
                    </p>
                    <h3 className={isDark ? "text-xl font-bold text-white" : "text-xl font-bold text-slate-900"}>{copy.supportTitle}</h3>
                  </div>
                </div>
                <p className={isDark ? "text-slate-100/85" : "text-slate-700"}>{copy.supportDescription}</p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-[0_15px_40px_rgba(244,178,58,0.35)] hover:shadow-[0_18px_46px_rgba(240,124,58,0.4)] normal-case not-italic font-semibold tracking-tight"
                >
                  <a href="mailto:legal@geesol.com">{copy.contactCta}</a>
                </Button>
              </CardContent>
            </Card>

            {/* Cookie quick settings: syncs with cookie modal via custom events */}
            <Card className={cardClass()}>
              <CardContent className={`space-y-4 p-6 md:p-7 ${isDark ? "" : "text-slate-800"}`}>
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-start gap-6">
                    <div>
                      <p className={isDark ? "text-sm font-semibold uppercase tracking-[0.12em] text-amber-200" : "text-sm font-semibold uppercase tracking-[0.12em] text-amber-600"}>{copy.tabs.cookies}</p>
                      <div className="flex items-center gap-3 mt-1">
                        <h4 className={isDark ? "text-lg font-bold text-white" : "text-lg font-bold text-slate-900"}>Administrar cookies</h4>
                        <div className="ml-2">
                          <Slider
                            checked={analyticsEnabled}
                            onChange={() => {
                              try {
                                const raw = localStorage.getItem('cookie-preferences');
                                const parsed = raw ? JSON.parse(raw) : { necessary: true, analytics: false };
                                const updated = { ...parsed, analytics: !analyticsEnabled };
                                localStorage.setItem('cookie-preferences', JSON.stringify(updated));
                                setAnalyticsEnabled(!analyticsEnabled);
                                window.dispatchEvent(new CustomEvent('cookie-preferences-changed', { detail: updated }));
                              } catch {
                                // ignore
                              }
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => window.dispatchEvent(new Event('open-cookie-popup'))}
                      className={isDark ? "rounded-full px-8 py-3 bg-white/5 text-white font-extrabold italic uppercase tracking-wide border border-white/10 shadow-[0_18px_40px_rgba(244,178,58,0.08)]" : "rounded-full px-8 py-3 bg-white text-amber-800 font-extrabold italic uppercase tracking-wide border border-gray-100 shadow-[0_18px_40px_rgba(240,124,150,0.12)]"}
                    >
                      {copy.tabs.cookies.toUpperCase()}
                    </button>
                  </div>

                </div>
                <p className={isDark ? "text-slate-100/85" : "text-slate-700"}>Puedes gestionar las cookies aquí o abrir el panel completo.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
