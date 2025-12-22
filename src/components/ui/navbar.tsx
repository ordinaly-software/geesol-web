"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu as HoverMenu, MenuItem, HoveredLink, ProductItem } from "@/components/ui/navbar-menu";
import { getServicesMenuItems } from "@/data/services-menu";

const Navbar = () => {
  const t = useTranslations("home.navigation");
  const pathname = usePathname();
  const locale = useLocale() || "es";
  const [isScrolled, setIsScrolled] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(1280);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMegaItem, setActiveMegaItem] = useState<string | null>(null);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  const navItems = useMemo(
    () => [
      { id: "services", type: "mega", href: "/services", label: t("services") },
      { id: "about", type: "link", href: "/nosotros", label: t("about") },
      { id: "refer", type: "link", href: "/recomienda-y-gana", label: t("refer") },
      { id: "faqs", type: "link", href: "/faqs", label: t("faqs") },
      { id: "contact", type: "mega", href: "/contacto", label: t("contact") },
      { id: "blog", type: "link", href: "/blog", label: t("blog") },
    ],
    [t],
  );

  const maxVisibleItems = useMemo(() => {
    if (viewportWidth >= 1280) return navItems.length;
    if (viewportWidth >= 1160) return 5;
    if (viewportWidth >= 1024) return 4;
    if (viewportWidth >= 900) return 3;
    if (viewportWidth >= 760) return 2;
    return 0;
  }, [navItems.length, viewportWidth]);

  const visibleItems = useMemo(
    () => navItems.slice(0, Math.max(0, maxVisibleItems)),
    [navItems, maxVisibleItems],
  );

  const hiddenItems = useMemo(
    () => navItems.slice(Math.max(0, maxVisibleItems)),
    [navItems, maxVisibleItems],
  );

  useEffect(() => {
    if (hiddenItems.length === 0 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [hiddenItems.length, isMenuOpen]);

  const serviceMenuItems = useMemo(
    () => getServicesMenuItems(locale),
    [locale],
  );

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/" || pathname === "/en" || pathname === "/es";
    return pathname.startsWith(href);
  };

  const isMobile = viewportWidth < 1024;

  return (
    <nav
      className={cn(
        "border-b border-gray-200/60 dark:border-gray-700/60 bg-white/90 dark:bg-[#1A1924]/90 backdrop-blur-xl w-full transition-all duration-300 ease-out z-[50]",
        isScrolled ? "fixed top-0 left-0 shadow-lg shadow-black/5 dark:shadow-black/20" : "relative",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2.5 sm:py-3.5 lg:py-4 gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={isMobile ? "/logo_3.webp" : "/logo_2.webp"}
              alt="GEESOL"
              width={140}
              height={44}
              className="h-9 w-auto sm:h-10"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center justify-end flex-1 gap-6">
            <HoverMenu setActive={setActiveMegaItem}>
              {visibleItems
                .filter((item) => item.type === "mega")
                .map((item) => (
                  <MenuItem
                    key={item.id}
                    item={item.label}
                    active={activeMegaItem}
                    setActive={setActiveMegaItem}
                    href={item.href}
                    isActiveLink={isLinkActive(item.href)}
                  >
                    {item.id === "services" && (
                      <div className="grid grid-cols-2 gap-2 w-[600px] max-w-[90vw]">
                        {serviceMenuItems.length === 0 ? (
                          <HoveredLink href="/services">{t("servicesAll")}</HoveredLink>
                        ) : (
                          serviceMenuItems.map((service) => (
                            <ProductItem
                              key={service.slug}
                              href={`/services/${service.slug}`}
                              title={service.title}
                              description={service.description}
                              src={service.image}
                            />
                          ))
                        )}
                        <HoveredLink href="/services">{t("servicesAll")}</HoveredLink>
                      </div>
                    )}
                    {item.id === "contact" && (
                      <div className="grid gap-2 w-[280px] max-w-[90vw]">
                        <HoveredLink href="/contacto#trabaja-con-nosotros">
                          {t("contactWorkWithUs")}
                        </HoveredLink>
                        <HoveredLink href="/contacto#mapa">
                          {t("contactOfficesSeville")}
                        </HoveredLink>
                        <HoveredLink href="/contacto#mapa">
                          {t("contactOfficesMadrid")}
                        </HoveredLink>
                      </div>
                    )}
                  </MenuItem>
                ))}
            </HoverMenu>

            {visibleItems
              .filter((item) => item.type === "link")
              .map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                    className={cn(
                      "transition-all duration-200 whitespace-nowrap text-sm xl:text-base font-medium relative group",
                      isLinkActive(item.href)
                      ? "text-red-600"
                      : "text-gray-700 dark:text-gray-300 hover:text-red-600",
                    )}
                  >
                    {item.label}
                    <span
                      className={cn(
                      "absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full",
                      isLinkActive(item.href) ? "w-full" : "w-0",
                    )}
                  />
                </Link>
              ))}
          </div>

          <div className="flex items-center gap-2">
            <Button asChild className="inline-flex px-5 py-2 text-sm uppercase">
              <Link href="/contacto">{t("start")}</Link>
            </Button>
            {hiddenItems.length > 0 && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className="text-gray-700 dark:text-gray-300 h-9 w-9"
                aria-label={isMenuOpen ? t("closeMenu") : t("openMenu")}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            )}
          </div>
        </div>
      </div>

      {isMenuOpen && hiddenItems.length > 0 && (
        <div className="border-t border-gray-200/60 dark:border-gray-700/60 bg-white/95 dark:bg-[#1A1924]/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <div className="flex flex-col gap-2">
              <div className="rounded-xl border border-gray-200 dark:border-gray-700/70 bg-gray-50/60 dark:bg-gray-800/60">
                <button
                  className="w-full flex items-center justify-between px-3 py-3 text-left"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {t("services")}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-gray-600 dark:text-gray-300 transition-transform",
                      isMobileServicesOpen && "rotate-180",
                    )}
                  />
                </button>
                {isMobileServicesOpen && (
                  <div className="space-y-1 px-3 pb-3">
                    {serviceMenuItems.length === 0 ? (
                      <Link
                        href="/services"
                        onClick={() => setIsMenuOpen(false)}
                        className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800/70"
                      >
                        {t("servicesAll")}
                      </Link>
                    ) : (
                      serviceMenuItems.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 rounded-md px-2 py-2 text-sm font-medium text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800/70 hover:text-red-600"
                        >
                          <img
                            src={service.image}
                            alt={service.title}
                            className="h-10 w-10 rounded-md object-cover shadow-sm"
                            onError={(event) => {
                              event.currentTarget.src = "/static/producto-estrella3.webp";
                            }}
                          />
                          <span className="min-w-0 truncate">{service.title}</span>
                        </Link>
                      ))
                    )}
                    <Link
                      href="/services"
                      onClick={() => setIsMenuOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm font-semibold text-red-600 hover:text-red-700"
                    >
                      {t("servicesAll")}
                    </Link>
                  </div>
                )}
              </div>

              <div className="rounded-xl border border-gray-200 dark:border-gray-700/70 bg-gray-50/60 dark:bg-gray-800/60">
                <Link
                  href="/contacto"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full flex items-center justify-between px-3 py-3 text-left"
                >
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {t("contact")}
                  </span>
                </Link>
                <div className="space-y-1 px-3 pb-3">
                  <Link
                    href="/contacto#trabaja-con-nosotros"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800/70"
                  >
                    {t("contactWorkWithUs")}
                  </Link>
                  <Link
                    href="/contacto#mapa"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800/70"
                  >
                    {t("contactOfficesSeville")}
                  </Link>
                  <Link
                    href="/contacto#mapa"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-md px-2 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-red-600 hover:bg-gray-100 dark:hover:bg-gray-800/70"
                  >
                    {t("contactOfficesMadrid")}
                  </Link>
                </div>
              </div>

              {hiddenItems
                .filter((item) => item.type === "link")
                .map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={cn(
                      "transition-colors py-3 px-2 block rounded-md font-medium",
                      isLinkActive(item.href)
                        ? "text-red-600 bg-red-600/10"
                        : "text-gray-700 dark:text-gray-300 hover:text-red-600 hover:bg-gray-50 dark:hover:bg-gray-800/50",
                    )}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
