"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import Banner from "@/components/ui/banner";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { getServiceGallerySections, type ServiceGalleryImage } from "@/data/service-gallery";
import { getServicePath } from "@/lib/service-slug";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react";
import { HomeHubSpotFormSection } from "@/components/home/hubspot-form-section";

interface LightboxProps {
  images: ServiceGalleryImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const Lightbox = ({ images, initialIndex, isOpen, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, currentIndex]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
        aria-label="Cerrar"
      >
        <IconX className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handlePrevious();
        }}
        className="absolute left-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
        aria-label="Imagen anterior"
      >
        <IconArrowNarrowLeft className="h-6 w-6" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          handleNext();
        }}
        className="absolute right-4 top-1/2 z-50 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20"
        aria-label="Imagen siguiente"
      >
        <IconArrowNarrowRight className="h-6 w-6" />
      </button>

      <div
        className="flex h-full w-full flex-col items-center justify-center p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[70vh] w-full max-w-6xl">
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt || images[currentIndex].title}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold text-white">
            {images[currentIndex].title}
          </h3>
          <p className="mt-1 text-sm text-gray-300">
            {currentIndex + 1} / {images.length}
          </p>
        </div>
      </div>
    </div>
  );
};

const GalleryCarousel = ({
  images,
  title,
  onImageClick,
}: {
  images: ServiceGalleryImage[];
  title: string;
  onImageClick: (index: number) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const getScrollStep = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 360;
    const card = container.querySelector<HTMLElement>("[data-gallery-card]");
    if (!card) return 360;
    return card.offsetWidth + 24;
  }, []);

  const checkScrollability = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  }, []);

  const handleScrollLeft = () => {
    const container = scrollRef.current;
    if (!container) return;
    const newScroll = Math.max(container.scrollLeft - getScrollStep(), 0);
    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  const handleScrollRight = () => {
    const container = scrollRef.current;
    if (!container) return;
    const maxScroll = container.scrollWidth - container.clientWidth;
    const newScroll = Math.min(container.scrollLeft + getScrollStep(), maxScroll);
    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  useEffect(() => {
    checkScrollability();
    window.addEventListener("resize", checkScrollability);
    return () => {
      window.removeEventListener("resize", checkScrollability);
    };
  }, [images.length, checkScrollability]);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handleScrollLeft}
        disabled={!canScrollLeft}
        aria-label="Ver imagen anterior"
        className="absolute left-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <IconArrowNarrowLeft className="h-5 w-5 text-gray-700" />
      </button>
      <button
        type="button"
        onClick={handleScrollRight}
        disabled={!canScrollRight}
        aria-label="Ver imagen siguiente"
        className="absolute right-0 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <IconArrowNarrowRight className="h-5 w-5 text-gray-700" />
      </button>
      <div
        ref={scrollRef}
        onScroll={checkScrollability}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-webkit-overflow-scrolling:touch]"
      >
        {images.map((image, idx) => {
          const caption = image.title || `${title} ${idx + 1}`;
          return (
            <figure
              key={`${title}-${image.src}-${idx}`}
              data-gallery-card
              className="min-w-[85%] sm:min-w-[70%] lg:min-w-[60%] snap-start overflow-hidden rounded-[24px] bg-[#f7f8fb] shadow-[0_12px_35px_rgba(12,59,82,0.14)] dark:bg-[#0f172a] dark:shadow-[0_12px_35px_rgba(0,0,0,0.35)] cursor-pointer transition-transform hover:scale-[1.02]"
              onClick={() => onImageClick(idx)}
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={image.src}
                  alt={image.alt || caption}
                  title={caption}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 60vw, 90vw"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-gray-700 dark:text-gray-300">
                {caption}
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default function CasosDeExitoPage({ locale }: { locale: string }) {
  const basePath = locale === routing.defaultLocale ? "" : `/${locale}`;
  const t = useTranslations("galleryPage");
  const gallerySections = getServiceGallerySections(locale);
  
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    images: ServiceGalleryImage[];
    initialIndex: number;
  }>({
    isOpen: false,
    images: [],
    initialIndex: 0,
  });

  const openLightbox = (images: ServiceGalleryImage[], index: number) => {
    setLightboxState({
      isOpen: true,
      images,
      initialIndex: index,
    });
  };

  const closeLightbox = () => {
    setLightboxState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#f7f8fb] text-[#0c1f2d] dark:bg-[#0b1220] dark:text-gray-100">
      <Lightbox
        images={lightboxState.images}
        initialIndex={lightboxState.initialIndex}
        isOpen={lightboxState.isOpen}
        onClose={closeLightbox}
      />
      
      <Banner
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="/static/services_background.webp"
      />

      <section className="px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-12">
          {gallerySections.map((section) => (
            <div
              key={section.slug}
              className="rounded-[28px] bg-white/90 p-8 shadow-[0_16px_45px_rgba(12,59,82,0.12)] backdrop-blur dark:bg-[#0f172a]/90 dark:shadow-[0_16px_45px_rgba(0,0,0,0.35)]"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-[#0c3b52] dark:text-white">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {section.description}
                  </p>
                </div>
                <Button asChild className="w-fit px-6 py-3">
                  <Link href={`${basePath}${getServicePath(section.slug)}`}>
                    {t("cta")}
                  </Link>
                </Button>
              </div>
              <div className="mt-6">
                <GalleryCarousel 
                  images={section.images} 
                  title={section.title}
                  onImageClick={(index) => openLightbox(section.images, index)}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <HomeHubSpotFormSection />
      
    </div>
  );
}
