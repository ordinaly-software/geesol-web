"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";

export const ReferralSection = () => {
  const t = useTranslations("home");
  return (
    <section className="bg-white px-4 py-16 dark:bg-[#0b1220]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 rounded-[56px] bg-[#f7f8fb] p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)] lg:flex-row lg:items-center">
        <div className="relative flex-1 order-2 lg:order-1">
          <div className="relative mx-auto h-[380px] w-[260px] sm:h-[420px] sm:w-[300px] lg:h-[460px] lg:w-[320px]">
            <Image
              src="static/geesol_app_on_phone.webp"
              alt={t("referral.imageAlt")}
              fill
              className="object-contain"
              sizes="(min-width: 1024px) 320px, (min-width: 640px) 300px, 260px"
            />
          </div>
        </div>
        <div className="flex-1 space-y-4 order-1 lg:order-2">
          <div>
            <h3 className="text-4xl font-black text-[#0c3b52] dark:text-white">
              {t("referral.title")}
            </h3>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            {t("referral.description")}
          </p>
          <Button asChild className="rounded-full bg-[#D01B17] px-8 py-3 text-lg font-bold uppercase text-white hover:bg-[#b01714]">
            <Link href="/recomienda-y-gana">{t("referral.cta")}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
