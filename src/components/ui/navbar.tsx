"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

import { routing, type Locale } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
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
        "flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-transform duration-150 ease-out hover:-translate-y-0.5 hover:shadow-md dark:border-gray-800 dark:bg-neutral-900 dark:text-gray-200",
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
      className="relative z-20 flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold text-gray-900 transition-opacity duration-150 ease-out hover:opacity-90 dark:text-white"
    >
      <Image
        src={isDark ? "/logo_2_dark.webp" : "/logo_2.webp"}
        alt="GEESOL"
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
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCompact(window.innerWidth < 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const buildHref = (path: string) => `${basePath}${path}`;

  const navItems = [
    { name: t("home"), link: buildHref("/") },
    { name: t("services"), link: buildHref("/services"), showWhenCollapsed: true },
    { name: t("about"), link: buildHref("/nosotros") },
    { name: t("refer"), link: buildHref("/recomienda-y-gana"), showWhenCollapsed: true },
    { name: t("faqs"), link: buildHref("/faqs") },
    { name: t("contact"), link: buildHref("/contacto") },
    { name: t("blog"), link: buildHref("/blog") },
  ];

  const ctaHref = buildHref("/contacto");

  const handleNavItemClick = () => setIsMobileOpen(false);

  return (
    <ResizableNavbar className="top-0">
      <NavBody className="px-4 lg:px-6" visible={undefined} isCompact={isCompact}>
        <div className="flex items-center gap-3 flex-shrink-0">
          <Logo href={buildHref("/")} />
        </div>
        <NavItems items={navItems} onItemClick={handleNavItemClick} isCompact={isCompact} />
        <div className={cn("hidden items-center gap-3 lg:flex flex-shrink-0", isCompact && "hidden")}>
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

      <MobileNav className="px-4" isCompact={isCompact}>
        <MobileNavHeader>
          <Logo href={buildHref("/")} />
          <div className="flex items-center gap-3">
            <Button asChild size="sm">
              <Link href={ctaHref}>{t("start")}</Link>
            </Button>
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
                className="w-full rounded-lg px-3 py-2 text-base font-medium transition-colors duration-150 ease-out hover:bg-gray-100 dark:hover:bg-neutral-800"
                onClick={handleNavItemClick}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
}
