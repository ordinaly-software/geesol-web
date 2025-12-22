"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

export const TwoColumnFeatureSection = () => {
  const t = useTranslations("home");
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-6xl">
        <div className="relative grid items-stretch gap-0 overflow-hidden rounded-[56px_18px_56px_18px] bg-[#e8ecf3] shadow-[0_20px_60px_rgba(12,59,82,0.15)] dark:bg-[#0f172a] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] lg:grid-cols-2">
          <div className="absolute bottom-0 right-0 z-0 h-48 w-48 opacity-20 lg:h-72 lg:w-72">
            <Image
              src="/static/home/two_column_background.webp"
              alt=""
              fill
              className="object-contain object-bottom"
              sizes="288px"
            />
          </div>

          <div className="relative h-[300px] lg:h-auto">
            <div className="absolute inset-0 overflow-hidden rounded-tl-[56px] rounded-tr-[18px] lg:rounded-tr-none lg:rounded-bl-[56px]">
              <Image
                src="/static/home/two_column_photo.webp"
                alt={t("twoColumn.imageAlt")}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
          </div>

          <div className="relative z-10 space-y-5 p-8 lg:p-12">
            <h2 className="text-3xl font-black italic leading-tight text-[#0c3b52] dark:text-white lg:text-4xl">
              {t("twoColumn.title")}
            </h2>
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300 lg:text-lg">
              {t("twoColumn.paragraph1")}
            </p>
            <p className="text-base leading-relaxed text-gray-800 dark:text-gray-300 lg:text-lg">
              {t("twoColumn.paragraph2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
