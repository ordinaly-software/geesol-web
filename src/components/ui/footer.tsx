"use client";

import { useTranslations } from "next-intl";
import { useTheme } from "@/contexts/theme-context";
import Image from "next/image";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import LocaleSwitcher from "./locale-switcher";

const Footer = () => {
  const t = useTranslations("home");
  const { isDark, toggleTheme } = useTheme();

  const ThemeToggleButton = () => (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-11 items-center gap-2 rounded-full border border-white/40 bg-white/80 px-4 text-sm font-semibold text-[#0c3b52] shadow-md backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/15 dark:bg-[#0b1220]/80 text-white"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span>{isDark ? "Claro" : "Oscuro"}</span>
    </button>
  );

  return (
    <footer className="relative overflow-hidden text-slate-900 text-white">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/static/footer_background.webp"
          alt="Footer background"
          fill
          className="object-cover"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/65 via-white/55 to-black/35 from-black/60 via-black/70 to-black/80"></div>
      </div>

      {/* Diagonal lines overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="lines" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="100" y2="100" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lines)"/>
        </svg>
      </div>

      {/* Pill-shaped container */}
      <div className="relative z-10 mx-auto my-8 max-w-[1400px] px-4">
        <div className="rounded-[80px] border border-white/40 bg-gradient-to-br from-white/95 via-slate-100/95 to-white/90 px-8 py-12 shadow-2xl backdrop-blur-sm border-white/10 from-blue-900/40 via-gray-800/60 to-gray-900/40 sm:px-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Logo Section */}
            <div className="lg:col-span-3 flex items-start justify-center lg:justify-start">
              <div className="relative">
                <svg width="280" height="120" viewBox="0 0 280 120" className="drop-shadow-2xl w-full max-w-[280px]">
                  {/* G */}
                  <text x="10" y="80" fontFamily="Arial Black, sans-serif" fontSize="68" fontWeight="900" fill="white" letterSpacing="-2">G</text>
                  
                  {/* 3D Box */}
                  <g transform="translate(75, 20)">
                    {/* Top face */}
                    <polygon points="20,0 50,10 50,40 20,30" fill="#4A90E2" opacity="0.9"/>
                    {/* Left face */}
                    <polygon points="20,30 20,60 50,70 50,40" fill="#2E5C8A" opacity="0.9"/>
                    {/* Right face */}
                    <polygon points="50,40 50,70 80,60 80,30" fill="#1E3A5F" opacity="0.9"/>
                    {/* Lines */}
                    <line x1="20" y1="30" x2="50" y2="40" stroke="white" strokeWidth="2"/>
                    <line x1="50" y1="40" x2="50" y2="70" stroke="white" strokeWidth="2"/>
                    <line x1="50" y1="40" x2="80" y2="30" stroke="white" strokeWidth="2"/>
                  </g>
                  
                  {/* ESOL */}
                  <text x="120" y="80" fontFamily="Arial Black, sans-serif" fontSize="68" fontWeight="900" fill="white" letterSpacing="-2">ESØL</text>
                </svg>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-5 space-y-3 text-base text-slate-900 text-white">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a href="tel:955737322" className="font-semibold transition-colors hover:text-[#c83c3e] hover:text-blue-300">955 73 73 22</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a href="tel:622226349" className="font-semibold transition-colors hover:text-[#c83c3e] hover:text-blue-300">622 22 63 49</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a href="tel:678999111" className="font-semibold transition-colors hover:text-[#c83c3e] hover:text-blue-300">678 99 91 11</a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a href="mailto:info@geesol.com" className="font-semibold transition-colors hover:text-[#c83c3e] hover:text-blue-300">info@geesol.com</a>
              </div>
              <div className="flex items-start gap-3 pt-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="font-bold">Delegación Andalucía:</p>
                  <p className="text-sm text-slate-800 text-gray-200">C/ Mansíos, 5. 41900. Camas (Sevilla)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="font-bold">Delegación Madrid:</p>
                  <p className="text-sm text-slate-800 text-gray-200">C/ Tormes, 7, 28840. Mejorada del Campo (Madrid)</p>
                </div>
              </div>
            </div>

            {/* Services Menu */}
            <div className="lg:col-span-4 space-y-2 text-base text-left text-slate-900 text-white lg:text-right">
              <Link href="#" className="block font-bold transition-colors hover:text-[#c83c3e] hover:text-blue-300">
                Instalaciones fotovoltaicas
              </Link>
              <Link href="#" className="block font-bold transition-colors hover:text-[#c83c3e] hover:text-blue-300">
                Autoconsumo fotovoltaico
              </Link>
              <Link href="#" className="block font-bold transition-colors hover:text-[#c83c3e] hover:text-blue-300">
                Mantenimiento de instalaciones
              </Link>
              <Link href="#" className="block font-bold transition-colors hover:text-[#c83c3e] hover:text-blue-300">
                Instalaciones aisladas
              </Link>
              <Link href="#" className="block font-bold transition-colors hover:text-[#c83c3e] hover:text-blue-300">
                Nuestros instaladores
              </Link>
              <Link href="#" className="block font-bold transition-colors hover:text-[#c83c3e] hover:text-blue-300">
                Canal de denuncias
              </Link>
              <Link href="#" className="block font-bold transition-colors hover:text-[#c83c3e] hover:text-blue-300">
                Mapa web
              </Link>
            </div>
          </div>

          {/* Legal Links */}
          <div className="mt-12 space-x-2 text-center text-sm tracking-wide text-slate-800 text-white">
            <Link href="/legal?tab=terms" className="uppercase transition-colors hover:text-[#c83c3e] hover:text-blue-300">
              Aviso Legal
            </Link>
            <span className="text-slate-500 text-white/60">-</span>
            <Link href="/legal?tab=cookies" className="uppercase transition-colors hover:text-[#c83c3e] hover:text-blue-300">
              Política de Cookies
            </Link>
            <span className="text-slate-500 text-white/60">-</span>
            <Link href="/legal?tab=privacy" className="uppercase transition-colors hover:text-[#c83c3e] hover:text-blue-300">
              Política de Privacidad
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Outside the pill */}
      <div className="relative z-10 bg-gradient-to-r from-gray-100 to-gray-200 py-6 px-8 text-slate-900 dark:from-gray-900 dark:to-black dark:text-white">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm">
            © 2025 GEESOL RENOVABLES SL - Instalaciones Fotovoltaicas.
          </div>
          <div className="flex items-center gap-3">
            <ThemeToggleButton />
            <LocaleSwitcher />
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/company/geesol-renovables/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/geesol_es/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
              </svg>
            </a>
            <a
              href="https://x.com/GeesolRenovable"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z"/>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/geesolrenovables/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded flex items-center justify-center transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
