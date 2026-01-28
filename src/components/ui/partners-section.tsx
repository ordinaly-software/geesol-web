"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const defaultPartners = [
  { name: "ATMOCE", src: "/static/nosotros/atmoce.webp" },
  { name: "Huawei", src: "/static/nosotros/huawei.webp" },
  { name: "AIKO", src: "/static/nosotros/aiko.webp" },
  { name: "TCL", src: "/static/nosotros/tcl.webp" },
  { name: "TESLA", src: "/static/nosotros/tesla.webp" },
  { name: "APsystems", src: "/static/nosotros/ap-system.webp" },
  { name: "Enphase", src: "/static/nosotros/enphase.webp" },
  { name: "Exiom Group", src: "/static/nosotros/exiom-group.webp" },
  { name: "Fronius", src: "/static/nosotros/fronius.webp" },
  { name: "Jinko Solar", src: "/static/nosotros/jinko-solar.webp" },
  { name: "Kostal", src: "/static/nosotros/kostal.webp" },
  { name: "REC", src: "/static/nosotros/rec.webp" },
  { name: "Schneider", src: "/static/nosotros/schneider.webp" },
  { name: "Siemens", src: "/static/nosotros/siemens.webp" },
  { name: "SMA", src: "/static/nosotros/sma.webp" },
  { name: "SolarEdge", src: "/static/nosotros/solar-edge.webp" },
  { name: "SunPower", src: "/static/nosotros/sunpower.webp" },
  { name: "Victron Energy", src: "/static/nosotros/victron.webp" },
  { name: "DEYE", src: "/static/nosotros/deye.webp" },
  { name: "GOODWE", src: "/static/nosotros/goodwe.webp" },
];

type Partner = {
  name: string;
  src: string;
};

type PartnersSectionProps = {
  eyebrow?: string;
  title?: string;
  showMoreLabel?: string;
  showLessLabel?: string;
  items?: Partner[];
  className?: string;
};

export const PartnersSection = ({
  eyebrow = "Partners",
  title = "We work with leading brands",
  showMoreLabel = "Show all",
  showLessLabel = "Show less",
  items = defaultPartners,
  className,
}: PartnersSectionProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className={cn("bg-white px-4 py-16 dark:bg-black", className)}>
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#c81618]">
            {eyebrow}
          </p>
          <h3 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
            {title}
          </h3>
        </div>
        <div className="relative">
          <div
            className={cn(
              "grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 transition-[max-height] duration-300",
              expanded ? "max-h-[2000px]" : "max-h-[320px] overflow-hidden",
              "sm:max-h-none sm:overflow-visible",
            )}
          >
            {items.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-3 shadow-sm dark:border-gray-800 dark:bg-black min-h-[56px] sm:min-h-[64px] md:min-h-[72px]"
              >
                <Image
                  src={partner.src}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
          {!expanded && (
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent dark:from-black sm:hidden" />
          )}
        </div>
        <div className="flex justify-center sm:hidden">
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-[#0c3b52] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-black dark:text-white"
            onClick={() => setExpanded((prev) => !prev)}
            aria-label={expanded ? showLessLabel : showMoreLabel}
          >
            {expanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </section>
  );
};
