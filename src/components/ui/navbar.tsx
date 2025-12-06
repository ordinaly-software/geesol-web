"use client";

import { useState } from "react";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { routing, Link } from "@/i18n/routing";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/theme-context";
import { Button } from "./button";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  NavItems,
  Navbar as ResizableNavbar,
} from "./resizable-navbar";

type ThemeToggleButtonProps = {
  isDark: boolean;
  onClick: () => void;
  size?: "default" | "compact";
};

const ThemeToggleButton = ({
  isDark,
  onClick,
  size = "default",
}: ThemeToggleButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-neutral-900 dark:text-gray-200",
        size === "compact" && "px-2 py-1 text-xs",
      )}
    >
      {isDark ? (
        <Sun className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Moon className="h-4 w-4" aria-hidden="true" />
      )}
    </button>
  );
};

const Logo = ({ href }: { href: string }) => {
  const { isDark } = useTheme();

  return (
    <Link
      href={href}
      className="relative z-20 flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold text-gray-900 transition hover:opacity-90 dark:text-white"
    >
      <Image
        src={isDark ? "/logo_2_dark.webp" : "/logo_2.webp"}
        alt="Ordinaly"
        width={120}
        height={40}
        className="h-10 w-auto"
        priority
      />
    </Link>
  );
};

export default function Navbar() {
  const t = useTranslations("home.navigation");
  const locale = useLocale();
  const { isDark, toggleTheme } = useTheme();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const buildHref = (path: string) => `${basePath}${path}`;

  const navItems = [
    { name: t("home"), link: buildHref("/") },
    { name: t("blog"), link: buildHref("/blog") },
  ];

  const ctaHref = buildHref("/#contact");

  const handleNavItemClick = () => setIsMobileOpen(false);

  return (
    <ResizableNavbar className="top-0">
      <NavBody className="px-4 lg:px-6" visible={undefined}>
        <div className="flex items-center gap-3">
          <Logo href={buildHref("/")} />
        </div>
        <NavItems items={navItems} onItemClick={handleNavItemClick} />
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggleButton
            isDark={isDark}
            onClick={toggleTheme}
          />
          <Button
            asChild
          >
            <Link href={ctaHref}>{t("start")}</Link>
          </Button>
        </div>
      </NavBody>

      <MobileNav className="px-4">
        <MobileNavHeader>
          <Logo href={buildHref("/")} />
          <div className="flex items-center gap-3">
            <ThemeToggleButton
              isDark={isDark}
              onClick={toggleTheme}
              size="compact"
            />
            <MobileNavToggle
              isOpen={isMobileOpen}
              onClick={() => setIsMobileOpen((prev) => !prev)}
            />
          </div>
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileOpen}
          onClose={() => setIsMobileOpen(false)}
          className="text-gray-900 dark:text-gray-50"
        >
          <div className="flex w-full flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="w-full rounded-lg px-3 py-2 text-base font-medium transition hover:bg-gray-100 dark:hover:bg-neutral-800"
                onClick={handleNavItemClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex w-full flex-col gap-3 border-t border-gray-200 pt-4 dark:border-gray-800">
            <Button
              asChild
              className="bg-gradient-to-r from-[#22A60D] via-[#46B1C9] to-[#623CEA] text-white shadow-lg shadow-[#22A60D]/20 border border-white/20"
            >
              <Link href={ctaHref} onClick={handleNavItemClick}>
                {t("start")}
              </Link>
            </Button>
            <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 dark:border-gray-800 dark:bg-neutral-900 dark:text-gray-200">
              <span>{isDark ? t("lightMode") : t("darkMode")}</span>
              <ThemeToggleButton
                isDark={isDark}
                onClick={toggleTheme}
                size="compact"
              />
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
