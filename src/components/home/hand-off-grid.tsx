"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export const HandOffGridSection = () => {
  const t = useTranslations("home");

  const handOffFeatures = [
    {
      title: t("handOff.items.0.title"),
      description: t("handOff.items.0.description"),
      icon: "/static/icons/money.webp",
    },
    {
      title: t("handOff.items.1.title"),
      description: t("handOff.items.1.description"),
      icon: "/static/icons/hand.webp",
    },
    {
      title: t("handOff.items.2.title"),
      description: t("handOff.items.2.description"),
      icon: "/static/icons/ratings.webp",
    },
    {
      title: t("handOff.items.3.title"),
      description: t("handOff.items.3.description"),
      icon: "/static/icons/assistant.webp",
    },
    {
      title: t("handOff.items.4.title"),
      description: t("handOff.items.4.description"),
      icon: "/static/icons/stars.webp",
    },
    {
      title: t("handOff.items.5.title"),
      description: t("handOff.items.5.description"),
      icon: "/static/icons/documents.webp",
    },
  ];

  return (
    <section className="bg-white px-3 sm:px-4 py-12 sm:py-16 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-6xl">
        <h3 className="mb-8 sm:mb-12 text-center text-xl sm:text-3xl lg:text-4xl font-black text-[#0c3b52] dark:text-white px-2 sm:px-4 leading-tight sm:leading-snug break-words">
          {t("handOff.title")}
        </h3>
        <div className="grid gap-4 sm:gap-6 lg:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {handOffFeatures.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center rounded-2xl sm:rounded-[38px_18px_38px_18px] bg-white p-5 sm:p-8 text-center shadow-[0_6px_24px_rgba(12,59,82,0.1)] sm:shadow-[0_10px_40px_rgba(12,59,82,0.15)] ring-1 ring-[#e3e9f1] dark:bg-[#0f172a] dark:shadow-[0_6px_24px_rgba(0,0,0,0.25)] sm:dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)] dark:ring-white/10"
            >
              <div className="mb-4 sm:mb-6">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={56}
                  height={56}
                  className="sm:w-16 sm:h-16 w-14 h-14 object-contain"
                />
              </div>
              <h4 className="mb-2 sm:mb-4 text-base sm:text-xl font-bold italic text-black dark:text-white break-words hyphens-auto">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-gray-700 dark:text-gray-300 break-words">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
