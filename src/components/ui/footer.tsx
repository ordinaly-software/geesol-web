"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/contexts/theme-context";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import LocaleSwitcher from "./locale-switcher";

const Footer = () => {
  const t = useTranslations("footer");
  const { isDark, toggleTheme } = useTheme();
  const year = new Date().getFullYear();

  const ThemeToggleButton = () => (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-11 items-center gap-2 rounded-full border border-white/40 bg-white/80 px-4 text-sm font-semibold text-[#0c3b52] shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/15 dark:bg-[#0b1220]/80 dark:text-white"
      aria-label={isDark ? t("toggle_to_light") : t("toggle_to_dark")}
    >
      {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
      <span>{isDark ? t("dark") : t("light")}</span>
    </button>
  );

  return (
    <footer className="relative overflow-visible text-white bg-[#f7f8fb] dark:bg-[#0b1220]">
      {/* Top band keeps the same page background color */}
      <div className="h-10 w-full bg-[#f7f8fb] dark:bg-[#0b1220]" />

      {/* Pill container (rounded top only) - overlaps the top band slightly */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-6">
        <div className={`relative overflow-hidden rounded-tl-[80px] rounded-tr-[80px] ${isDark ? "" : "shadow-xl"}`}>
          {/* Background image with theme-aware overlay (inside pill so it is clipped) */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/static/footer_background.webp"
              alt="Footer background"
              fill
              className="object-cover"
              priority={false}
            />
            <div
              className={`absolute inset-0 ${
                isDark
                  ? "bg-gradient-to-b from-black/60 via-black/70 to-black/80"
                  : "bg-gradient-to-b from-black/25 via-black/30 to-black/35"
              }`}
            />
          </div>

          {/* Subtle blur overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="w-full h-full backdrop-blur-sm" />
          </div>

          {/* Main content (inside pill) */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Logo Section (hidden on small screens) */}
              <div className="lg:col-span-3 hidden md:flex justify-center md:justify-start">
                <div className="w-64">
                  <Image
                    src="/logo_2_dark.webp"
                    alt="Geesol Logo"
                    width={256}
                    height={80}
                    className="w-full h-auto drop-shadow-2xl"
                  />
                </div>
              </div>

              {/* Contact Information */}
              <div className="lg:col-span-5 space-y-4 text-base text-white">
                {/* Phone 1 */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  <a href="tel:955737322" className="font-semibold hover:text-blue-300 transition-colors">
                    955 73 73 22
                  </a>
                </div>

                {/* Phone 2 */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  <a href="tel:622226349" className="font-semibold hover:text-blue-300 transition-colors">
                    622 22 63 49
                  </a>
                </div>

                {/* Phone 3 */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                  </svg>
                  <a href="tel:678999111" className="font-semibold hover:text-blue-300 transition-colors">
                    678 99 91 11
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                  <a href="mailto:info@geesol.com" className="font-semibold hover:text-blue-300 transition-colors">
                    info@geesol.com
                  </a>
                </div>

                {/* Locations */}
                <div className="flex items-start gap-3 pt-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <p className="font-bold">{t('locations.andalucia')}</p>
                    <p className="text-sm text-gray-200">
                      <a
                        href="https://maps.app.goo.gl/WYNB5axKXqnsTBWT8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-300 transition-colors"
                      >
                        C/ Mansíos, 5. 41900. Camas (Sevilla)
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <div>
                    <p className="font-bold">{t('locations.madrid')}</p>
                    <p className="text-sm text-gray-200">
                      <a
                        href="https://maps.app.goo.gl/rrzT3qAN6k1Nk7bA6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-300 transition-colors"
                      >
                        C/ Tormes, 7, 28840. Mejorada del Campo (Madrid)
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* Services Menu */}
              <div className="lg:col-span-4 space-y-2 text-base text-white lg:text-right">
                <Link href="/" className="block font-bold hover:text-blue-300 transition-colors">
                  {t("home")}
                </Link>
                <Link href="/empresa-placas-solares" className="block font-bold hover:text-blue-300 transition-colors">
                  {t("services")}
                </Link>
                <Link href="/nosotros" className="block font-bold hover:text-blue-300 transition-colors">
                  {t("about")}
                </Link>
                <Link href="/recomienda-y-gana" className="block font-bold hover:text-blue-300 transition-colors">
                  {t("refer")}
                </Link>
                <Link href="/faqs" className="block font-bold hover:text-blue-300 transition-colors">
                  {t("faqs")}
                </Link>
                <Link href="/blog" className="block font-bold hover:text-blue-300 transition-colors">
                  {t("blog")}
                </Link>
                <Link href="/contacto" className="block font-bold hover:text-blue-300 transition-colors">
                  {t("contact")}
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div className="mt-12 pt-8 border-t border-white/20 text-center text-sm tracking-widest text-white space-x-2">
              <Link href="/legal?tab=terms" className="uppercase hover:text-blue-300 transition-colors">
                {t("legal_terms")}
              </Link>
              <span className="text-white/60">-</span>
              <Link href="/legal?tab=cookies" className="uppercase hover:text-blue-300 transition-colors">
                {t("legal_cookies")}
              </Link>
              <span className="text-white/60">-</span>
              <Link href="/legal?tab=privacy" className="uppercase hover:text-blue-300 transition-colors">
                {t("legal_privacy")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
       {/* Bottom Bar - Outside the pill */}
      <div className="relative z-10 bg-[#f7f8fb] py-6 px-8 text-slate-900 dark:bg-[#0b1220] dark:text-white">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-4 text-center">
          <div className="text-sm">
            © {year} GEESOL RENOVABLES SL - Instalaciones Fotovoltaicas.
          </div>
          <div className="flex flex-col items-center gap-3 md:flex-row">
            <div className="flex items-center gap-3">
              <ThemeToggleButton />
              <LocaleSwitcher />
            </div>
            <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/geesol-renovables/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/geesol_es/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Instagram"
              title="Instagram"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
            <a
              href="https://x.com/GeesolRenovable"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="X"
              title="X"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.648l-5.195-6.791-5.942 6.791H2.421l7.724-8.853L1.227 2.25h6.802l4.99 6.588L17.55 2.25h.694zm-1.106 17.92h1.828L5.283 4.126H3.354L17.138 20.17z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/geesolrenovables/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors shadow-lg"
              aria-label="Facebook"
              title="Facebook"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
