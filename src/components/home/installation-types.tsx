"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { WobbleCard } from "@/components/ui/wobble-card";
import { getServicesMenuItems } from "@/data/services-menu";
import { useServices } from "@/hooks/useServices";

export const InstallationTypesSection = () => {
  const t = useTranslations("home");
  const locale = useLocale() || "es";
  const { services } = useServices();
  const fallbackProducts = useMemo(
    () =>
      getServicesMenuItems(locale).map((item, index) => ({
        id: `fallback-${index}`,
        slug: item.slug,
        title: item.title,
        description: item.description,
        image: item.image,
      })),
    [locale],
  );
  const products = useMemo(() => {
    const liveProducts = services.filter((service) => service.type === "PRODUCT");
    if (liveProducts.length > 0) {
      return liveProducts.map((service) => ({
        id: service.id,
        slug: service.slug ?? String(service.id),
        title: service.title,
        description: service.clean_description || service.description,
        image: service.image || "/static/producto-estrella3.webp",
      }));
    }
    return fallbackProducts;
  }, [services, fallbackProducts]);
  return (
    <section className="bg-[#f7f8fb] px-4 py-16 dark:bg-[#0f172a]">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <h3 className="text-3xl font-black text-[#0c3b52] dark:text-white">
            {t("installationTypes.title")}
          </h3>
          <p className="mt-3 text-gray-700 dark:text-gray-300">
            {t("installationTypes.description")}
          </p>
        </div>
        <div className="relative">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]">
            {products.filter(item => item.slug.toLowerCase() !== "galeria-instalaciones").map((item) => (
              <Link
                key={item.id}
                href={`/servicios/${item.slug}`}
                className="block h-full min-w-[280px] max-w-[360px] flex-1 snap-start sm:min-w-[320px] lg:min-w-[360px]"
              >
                <WobbleCard
                  containerClassName="group h-full bg-white dark:bg-[#0b1220] border border-white/70 dark:border-white/10"
                  className="h-full px-7 py-9"
                >
                  <div className="flex h-full min-h-[420px] flex-col">
                    <div className="relative mb-5 h-44 w-full overflow-hidden rounded-[22px]">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 1024px) 25vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
                    </div>
                    <h4 className="text-xl font-semibold text-[#0c3b52] dark:text-white">
                      {item.title}
                    </h4>
                    <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
                      {item.description}
                    </p>
                    <div className="mt-auto pt-5">
                      <Button
                        className="w-full rounded-full bg-[#0c3b52] px-4 py-3 text-sm font-semibold uppercase text-white shadow-[0_10px_25px_rgba(12,59,82,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#0a2f41] dark:bg-[#f6c343] dark:text-[#0b1220] dark:hover:bg-[#f4b91c]"
                        aria-label={`${t("installationTypes.cta")}: ${item.title}`}
                      >
                        {t("installationTypes.cta")}
                      </Button>
                    </div>
                  </div>
                </WobbleCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
