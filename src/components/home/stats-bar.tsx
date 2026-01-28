"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";

export const StatsBarSection = () => {
  const t = useTranslations("home");
  const stats = [
    { value: t("stats.items.0.value"), label: t("stats.items.0.label") },
    { value: t("stats.items.1.value"), label: t("stats.items.1.label") },
    { value: t("stats.items.2.value"), label: t("stats.items.2.label") },
  ];
  return (
    <>
      <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
        <div className="mx-auto max-w-6xl">
          <h4 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#0c3b52] dark:text-gray-200">
            Nuestro trabajo en cifras
          </h4>
          <div className="grid gap-12 text-center sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.value} className="space-y-2">
                <div className="text-6xl font-black text-[#0c3b52] dark:text-white">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold italic text-gray-600 dark:text-gray-400">
                  {stat.label.split(" ")[0]}
                </div>
                <div className="text-sm font-semibold text-[#0c3b52] dark:text-gray-300">
                  {stat.label.split(" ").slice(1).join(" ")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="cta"
        className="bg-[#2d5a77] px-4 py-20 text-white dark:bg-[#1a3a52]"
      >
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <h3 className="text-3xl font-black italic md:text-5xl">
            {t("stats.title")}
          </h3>
          <p className="text-lg text-gray-100">
            {t("stats.description")}
          </p>
          <Button asChild className="rounded-full bg-[#D01B17] px-8 py-3 text-lg font-bold uppercase text-white hover:bg-[#b01714]">
            <Link href="/estudio-gratis">{t("stats.cta")}</Link>
          </Button>
        </div>
      </section>
    </>
  );
};
