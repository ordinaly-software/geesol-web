"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Banner from '@/components/ui/banner';
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Service, useServices } from "@/hooks/useServices";
import { renderIcon } from "@/components/ui/icon-select";
import { truncateText } from "@/utils/text";
import {
  Search,
  Star,
  Clock,
  ExternalLink,
  Mail,
} from "lucide-react";
import { Link } from "@/i18n/navigation";
import { WobbleCard } from "@/components/ui/wobble-card";
import { getServicesMenuItems } from "@/data/services-menu";

const ServicesPage = () => {
  const t = useTranslations("services");
  const locale = useLocale() || "es";
  const { services, isLoading } = useServices();
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");
  // Debounce search term
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  const fallbackServices = useMemo<Service[]>(() => {
    const palette = ["#0c3b52", "#c81618", "#46B1C9", "#f59e0b", "#2f7c87", "#623CEA"];
    return getServicesMenuItems(locale).map((item, index) => ({
      id: index + 1,
      slug: item.slug,
      type: "SERVICE",
      title: item.title,
      subtitle: undefined,
      description: item.description,
      clean_description: item.description,
      html_description: undefined,
      image: item.image,
      youtube_video_url: null,
      color: "0C3B52",
      color_hex: palette[index % palette.length],
      icon: "",
      duration: undefined,
      requisites: undefined,
      requisites_html: undefined,
      price: null,
      is_featured: false,
      featured: false,
      draft: false,
      created_by: undefined,
      created_by_username: undefined,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }));
  }, [locale]);

  const baseServices = useMemo(
    () => (services.length > 0 ? services : fallbackServices),
    [services, fallbackServices],
  );

  // Memoized filtered services (search only)
  const filteredServices = useMemo(() => {
    let filtered = baseServices;
    if (debouncedSearchTerm.trim()) {
      const searchLower = debouncedSearchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower)
      );
    }
    return filtered;
  }, [baseServices, debouncedSearchTerm]);

  // Separate into products and services for display
  const separated = useMemo(() => {
    return {
      services: filteredServices.filter(s => s.type === 'SERVICE'),
      products: filteredServices.filter(s => s.type === 'PRODUCT'),
    };
  }, [filteredServices]);

  // Memoized service card component
  const ServiceCard = React.memo(({ service }: { service: Service }) => {
    const getServiceColor = (service: Service) => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      
      if (service.color === '1A1924' && isDarkMode) {
        return '#efefefbb';
      } else if (service.color === '623CEA' && isDarkMode) {
        return '#8B5FF7';
      }
      return service.color_hex;
    };
    
    const serviceColor = getServiceColor(service);
    
    const serviceHref = `/services/${service.slug ?? service.id}`;

    const serviceImage = service.image || "/static/plans/1.webp";

    return (
      <Link href={serviceHref} className="block h-full">
        <WobbleCard
          containerClassName={`group h-full bg-white dark:bg-gray-800 border border-gray-200/70 dark:border-gray-700/70 transition-all duration-500 hover:shadow-2xl ${
            service.is_featured ? "ring-2 ring-opacity-20" : ""
          }`}
          className="h-full px-0 py-0"
        >
          {service.is_featured && (
            <div className="absolute top-4 right-4 z-10">
              <div
                className="text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                style={{ backgroundColor: serviceColor }}
              >
                <Star className="w-3 h-3 fill-current" />
                {t("featured")}
              </div>
            </div>
          )}

          <div className="relative">
            <div className="relative h-56 w-full overflow-hidden rounded-t-2xl">
              <Image
                src={serviceImage}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
            </div>
            <div className="absolute left-5 top-5">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl shadow-lg"
                style={{
                  backgroundColor: service.is_featured ? serviceColor : "rgba(255,255,255,0.95)",
                }}
              >
                <div style={{ color: service.is_featured ? "white" : serviceColor }}>
                  {service.icon && renderIcon(service.icon, "w-6 h-6")}
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 py-8">
            {/* Service Title */}
            <h3
              className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300 group-hover:opacity-90"
              style={{ "--hover-color": service.color_hex } as React.CSSProperties}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = serviceColor;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "";
              }}
            >
              {service.title}
            </h3>

            {/* Service Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed text-lg">
              {truncateText(service.clean_description, 180)}
            </p>

            {/* Service Details */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                {t("details")}
              </h4>
              <div className="grid grid-cols-1 gap-3">
                {/* Duration */}
                {service.duration && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <Clock className="w-4 h-4" style={{ color: serviceColor }} />
                    <div>
                      <span className="text-sm font-medium text-gray-900 dark:text-white block">
                        {t("duration")}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {service.duration === 1
                          ? t("durationDay")
                          : t("durationDays", { count: service.duration })}
                      </span>
                    </div>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <ExternalLink className="w-4 h-4" style={{ color: serviceColor }} />
                  <div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white block">
                      {t("price")}
                    </span>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {service.price ? `€${service.price}` : t("contactForQuote") || "Contact for quote"}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: serviceColor }}>
              {t("learnMore")}
              <span aria-hidden="true">→</span>
            </div>
          </div>
        </WobbleCard>
      </Link>
    );
  });

  ServiceCard.displayName = 'ServiceCard';

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#1A1924] text-gray-800 dark:text-white transition-colors duration-300">
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#D01B17]"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F7FB] via-white to-[#F9FAFB] dark:from-[#121826] dark:via-[#141a2c] dark:to-[#1A1924] text-gray-800 dark:text-white transition-colors duration-300">
      {/* Banner Section (generalized) */}
      <Banner
        title={t('productsAndServicesTitle')}
        subtitle={t('productsAndServicesDescription')}
        backgroundImage={'/static/services_background.webp'}
      >
        <div className="max-w-5xl mx-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-[0_20px_50px_rgba(12,59,82,0.18)] relative z-10 mt-8 border border-white/60 dark:border-white/10">
          <div className="flex flex-col md:flex-row gap-4 items-center relative">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder={t('searchPlaceholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:border-[#D01B17] dark:focus:border-[#D01B17]"
              />
            </div>
          </div>
        </div>
      </Banner>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredServices.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {t("noResults.title")}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {t("noResults.description")}
              </p>
            </div>
          ) : (
            <>
              {/* Services Section */}
              {separated.services.length > 0 && (
                <div>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {separated.services.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0c3b52] via-[#14556f] to-[#0c3b52] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("cta.title")}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t("cta.description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-white text-[#0c3b52] hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 px-8 py-3 text-lg font-semibold"
              onClick={() => {
                const subject = encodeURIComponent(t("cta.emailSubject"));
                const body = encodeURIComponent(t("cta.emailBody"));
                window.location.href = `mailto:info@ordinaly.ai?subject=${subject}&body=${body}`;
              }}
            >
              <Mail className="w-5 h-5 mr-2" />
              {t("cta.contact")}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesPage;
