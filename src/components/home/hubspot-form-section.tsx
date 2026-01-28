"use client";

import { HubSpotForm } from "@/components/ui/hubspot-form";
import { useTranslations } from "next-intl";

export const HomeHubSpotFormSection = () => {
  const t = useTranslations("home");
  const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
  const formId =
    process.env.NEXT_PUBLIC_HUBSPOT_HOME_FORM_ID ||
    process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID;

  return (
    <section className="bg-white px-4 py-14 sm:py-16 dark:bg-[#0b1220]">
      <div className="mx-auto max-w-5xl rounded-[28px] bg-[#f7f8fb] p-6 sm:p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] dark:bg-[#0f172a] dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#c81618]">
            {t("form.eyebrow")}
          </p>
          <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0c3b52] dark:text-white">
            {t("form.title")}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-gray-700 dark:text-gray-300">
            {t("form.subtitle")}
          </p>
        </div>
        <div className="mt-6">
          <HubSpotForm portalId={portalId} formId={formId} />
        </div>
        <p className="mt-4 text-xs sm:text-sm text-center text-gray-600 dark:text-gray-400">
          {t("form.note")}
        </p>
      </div>
    </section>
  );
};
