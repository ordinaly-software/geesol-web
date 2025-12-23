"use client";

import { useMemo } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Send, ArrowRight } from "lucide-react";

interface WorkWithUsSectionProps {
  id?: string;
  className?: string;
  email?: string;
  backgroundSrc?: string;
  fullBleed?: boolean;
}

export function WorkWithUsSection({
  id,
  className,
  email = "info@geesol.com",
  backgroundSrc = "/static/services_background.webp",
  fullBleed = true,
}: WorkWithUsSectionProps) {
  const t = useTranslations("usPage");
  const locale = useLocale();
  const roundedClass = fullBleed ? "" : "rounded-[28px]";

  const mailHref = useMemo(() => {
    const subject = encodeURIComponent(t("cta.mailSubject"));
    const body = encodeURIComponent(t("cta.mailBody"));
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [t, email]);

  return (
    <section
      id={id}
      className={`relative isolate overflow-hidden min-h-[460px] md:min-h-[480px] flex items-center py-0 my-0 bg-[#0c3b52] dark:bg-[#0b1220] ${roundedClass} ${
        fullBleed
          ? "w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
          : ""
      } ${className || ""}`}
    >
      <Image
        src={backgroundSrc}
        alt=""
        aria-hidden
        fill
        priority={false}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
        className={`object-cover object-center brightness-[.7] dark:brightness-[.5] blur-[2px] scale-[1.02] ${roundedClass}`}
      />
      <div
        className={`absolute inset-0 bg-black/20 dark:bg-black/55 ${roundedClass}`}
        aria-hidden
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 lg:px-12 py-6 w-full">
        <div className="space-y-3 max-w-2xl text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.55)]">
          <p className="text-sm uppercase tracking-[0.3em] font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {t("cta.eyebrow")}
          </p>
          <h3 className="text-3xl md:text-4xl font-bold drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">{t("cta.title")}</h3>
            <p className="text-white/90 drop-shadow-[0_3px_12px_rgba(0,0,0,0.7)]">
            <span className="bg-[#D01B17] text-white dark:bg-[#D01B17] dark:text-white px-1">
              {t("cta.body").split(" ").slice(0, 7).join(" ")}
            </span>
            {" " + t("cta.body").split(" ").slice(7).join(" ")}
            </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button className="bg-[#D01B17] dark:bg-[#D01B17] hover:bg-[#b01714] dark:hover:bg-[#b01714] text-white gap-2" asChild>
            <a href={mailHref} target="_blank" rel="noreferrer">
              <Send className="h-4 w-4" />
              {t("cta.primary")}
            </a>
          </Button>
          <Button asChild className="rounded-lg border-2 border-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-lg text-white bg-transparent hover:bg-white hover:text-[#0c3b52] transition-colors">
            <a href={`/${locale}/contacto`}>
              <ArrowRight className="h-4 w-4" />
              {t("cta.secondary")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
