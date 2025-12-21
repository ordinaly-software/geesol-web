import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "../globals.css"
import {notFound} from 'next/navigation';
import {Locale, routing} from '@/i18n/routing';
import NavbarWrapper from '@/components/ui/navbar-wrapper';
import CookieConsent from '@/components/ui/cookies';
import Footer from '@/components/ui/footer';
import BackToTopButton from '@/components/ui/back-to-top-button';
import { ThemeProvider } from '@/contexts/theme-context';
import { NextIntlClientProvider } from 'next-intl';

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "GEESOL - Instalaciones fotovoltaicas y soluciones de autoconsumo",
    template: "%s | GEESOL",
  },
  description:
    "Ahorra ahora hasta el 80% en tu instalación de paneles solares. ¡Y fináncialas desde solo 35€/mes!",
  keywords: [
    "automatización empresarial",
    "inteligencia artificial",
    "chatbots",
    "workflows",
    "Odoo",
    "Slack",
    "WhatsApp Business",
    "Andalucía",
    "España",
    "transformación digital",
    "IA empresarial",
  ],
  authors: [{ name: "Ordinaly" }],
  creator: "ORDINALY SOFTWARE SL",
  publisher: "AVIVA PUBLICIDAD SLU",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.geesol.com/",
    siteName: "GEESOL",
    title: "GEESOL - Instalaciones fotovoltaicas y soluciones de autoconsumo",
    description:
      "Ahorra ahora hasta el 80% en tu instalación de paneles solares. ¡Y fináncialas desde solo 35€/mes!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GEESOL - Instalaciones fotovoltaicas y soluciones de autoconsumo",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#25536F",
      },
    ],
  },
  manifest: "/site.webmanifest",
  metadataBase: new URL("https://geesol.com/"),
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      "en-US": "/en",
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "technology",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#25536F" },
    { media: "(prefers-color-scheme: dark)", color: "#94928C" },
  ],
  viewportFit: "cover",
}

export default async function RootLayout({ children, params } : 
  { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as Locale)) {
    notFound();
  }

  return (
    <html lang={locale} className={montserrat.variable} suppressHydrationWarning>
      <head>
        {/* Web Font from onlinewebfonts.com - preconnect for faster loading */}
        <link rel="preconnect" href="https://db.onlinewebfonts.com" crossOrigin="anonymous" />
        <link 
          href="https://db.onlinewebfonts.com/c/1dc8ecd8056a5ea7aa7de1db42b5b639?family=Linken+Now+Extra+Bold" 
          rel="stylesheet" 
          type="text/css"
        />
        <noscript>
          <link 
            href="https://db.onlinewebfonts.com/c/1dc8ecd8056a5ea7aa7de1db42b5b639?family=Linken+Now+Extra+Bold" 
            rel="stylesheet" 
            type="text/css"
          />
        </noscript>
        {/* Open Graph & Twitter Card for link previews */}
        <meta property="og:title" content="Ordinaly - Automatiza tu negocio con IA" />
        <meta property="og:description" content="Transformamos empresas con soluciones de automatización inteligente. Chatbots, workflows y más para liderar la innovación en España y Europa." />
        <meta property="og:image" content="https://geesol.com/og-image.png" />
        <meta property="og:url" content="https://geesol.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Ordinaly - Automatiza tu negocio con IA" />
        <meta name="twitter:description" content="Transformamos empresas con soluciones de automatización inteligente. Chatbots, workflows y más para liderar la innovación en España y Europa." />
        <meta name="twitter:image" content="https://geesol.com/og-image.png" />
        {/* DNS prefetch and preconnect for critical domains */}
        <link rel="dns-prefetch" href="//wa.me" />
        
        {/* Theme initialization script to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getInitialTheme() {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme) {
                    return savedTheme;
                  }
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  return prefersDark ? 'dark' : 'light';
                }
                
                const theme = getInitialTheme();
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        
        
  {/* Preload only critical images */}
  <link rel="preload" href="/logo.webp" as="image" type="image/webp" fetchPriority="high" />

  {/* PWA meta tags */}
        <meta name="application-name" content="Ordinaly" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ordinaly" />
        <meta name="mobile-web-app-capable" content="yes" />
        
        {/* Additional meta tags for better SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#25536F" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ordinaly Software",
              description:
                "Empresa de automatización empresarial con inteligencia artificial especializada en transformación digital de empresas andaluzas",
              url: "https://geesol.com",
              logo: "https://geesol.com/logo.webp",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+34-XXX-XXX-XXX",
                contactType: "customer service",
                availableLanguage: ["Spanish", "English", "Catalan", "Basque", "Galician"],
              },
              address: {
                "@type": "PostalAddress",
                addressRegion: "Andalucía",
                addressCountry: "ES",
              },
              serviceArea: {
                "@type": "Place",
                name: "España",
              },
              areaServed: "ES",
              knowsAbout: [
                "Automatización empresarial",
                "Inteligencia artificial",
                "Chatbots",
                "Workflows",
                "Integración Odoo",
                "WhatsApp Business",
              ],
            }),
          }}
        />
        
        {/* Accessibility Integration - defer to after window load */}
        {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_WCAG_ACCESSIBILITY_TOKEN && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function() {
                  (function (d, s, t) { 
                    var f = d.getElementsByTagName(s)[0], 
                        j = d.createElement(s), 
                        a = new Date().getTime(); 
                    j.async = true; 
                    j.src = 'https://wcag.dock.codes/accessibility/' + t + '/start.js?t=' + a; 
                    f.parentNode.insertBefore(j, f); 
                  })(document, 'script', '${process.env.NEXT_PUBLIC_WCAG_ACCESSIBILITY_TOKEN}');
                });
              `,
            }}
          />
        )}
        
        {/* Optimized Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js', { 
                    scope: '/',
                    updateViaCache: 'none'
                  }).then(
                    function(registration) {
                      // Check for updates periodically
                      registration.addEventListener('updatefound', function() {
                        const newWorker = registration.installing;
                        if (newWorker) {
                          newWorker.addEventListener('statechange', function() {
                            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                              // New version available, could show update prompt
                            }
                          });
                        }
                      });
                    },
                    function(error) {
                    }
                  );
                });
              }
            `,
          }}
        />
      </head>
      <body
        className={`${montserrat.className} antialiased min-h-screen bg-[#f7f8fb] text-[#0c1f2d] transition-colors duration-200 dark:bg-[#0b1220] dark:text-gray-100`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider>
          <ThemeProvider>
            {/* Skip to main content for accessibility */}
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#217093] text-white px-4 py-2 rounded-md z-50"
            >
              Saltar / Skip
            </a>

            <NavbarWrapper />

            <div id="main-content">{children}</div>

            <Footer />
            <CookieConsent />
            {/* <AnalyticsManager /> */}
            <BackToTopButton />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
