"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export const HighlightCardsSection = () => {
  const t = useTranslations("home");
  const highlights = [
    {
      title: t("highlights.items.0.title"),
      description: t("highlights.items.0.description"),
      icon: "/static/icons/icon_shake_hands.webp",
    },
    {
      title: t("highlights.items.1.title"),
      description: t("highlights.items.1.description"),
      icon: "/static/icons/icon_sing.webp",
    },
    {
      title: t("highlights.items.2.title"),
      description: t("highlights.items.2.description"),
      icon: "/static/icons/icon_bulb.webp",
    },
  ];
  return (
    <section className="mt-4 sm:mt-6 lg:mt-10 bg-transparent px-3 sm:px-4 pb-8 sm:pb-12">
      <div className="mx-auto grid max-w-6xl gap-3 sm:gap-4 md:gap-6 grid-cols-1 sm:grid-cols-3">
        {highlights.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl sm:rounded-[38px_18px_38px_18px] bg-white p-4 sm:p-6 shadow-[0_8px_20px_rgba(12,59,82,0.08)] sm:shadow-[0_12px_35px_rgba(12,59,82,0.12)] ring-1 ring-[#e3e9f1] dark:bg-[#0f172a] dark:shadow-[0_8px_20px_rgba(0,0,0,0.25)] sm:dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] dark:ring-white/10"
          >
            <div className="mb-3 sm:mb-4 flex items-center justify-center">
              <Image
                src={item.icon}
                alt=""
                width={40}
                height={40}
                className="sm:w-12 sm:h-12 w-10 h-10 object-contain"
              />
            </div>
            <h3 className="mb-2 sm:mb-3 text-center text-base sm:text-xl font-bold text-[#0c3b52] dark:text-white break-words hyphens-auto">
              {item.title}
            </h3>
            <p className="text-center text-xs sm:text-sm lg:text-base text-gray-600 dark:text-gray-300 break-words">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
