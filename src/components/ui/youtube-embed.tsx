"use client";

import { useEffect, useState } from "react";
import { getCookiePreferences, isThirdPartyAllowed } from "@/utils/cookieManager";

const canLoadThirdParty = (prefs?: { marketing?: boolean }) =>
  Boolean(prefs?.marketing);

type YoutubeEmbedProps = {
  videoId: string;
  title: string;
  playLabel: string;
  playAriaLabel: string;
  consentTitle: string;
  consentText: string;
  openLabel: string;
};

const YoutubeEmbed = ({
  videoId,
  title,
  playLabel,
  playAriaLabel,
  consentTitle,
  consentText,
  openLabel,
}: YoutubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [allowThirdParty, setAllowThirdParty] = useState(false);
  const thumbnailSrc = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  useEffect(() => {
    const updateFromPrefs = () => {
      try {
        const prefs = getCookiePreferences();
        setAllowThirdParty(canLoadThirdParty(prefs) || isThirdPartyAllowed());
      } catch {
        setAllowThirdParty(false);
      }
    };

    updateFromPrefs();

    const onPrefs = () => updateFromPrefs();
    window.addEventListener("cookie-preferences-changed", onPrefs as EventListener);
    window.addEventListener("storage", onPrefs as EventListener);
    return () => {
      window.removeEventListener("cookie-preferences-changed", onPrefs as EventListener);
      window.removeEventListener("storage", onPrefs as EventListener);
    };
  }, []);

  if (!allowThirdParty) {
    return (
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <img
          src={thumbnailSrc}
          alt={`Video thumbnail for ${title}`}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/55 px-4 text-center">
          <p className="text-sm font-semibold text-white">{consentTitle}</p>
          <p className="text-xs text-white/90">{consentText}</p>
          <a
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noreferrer"
            className="mt-1 inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#0c3b52]"
          >
            {openLabel}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full bg-black">
      {isLoaded ? (
        <iframe
          title={title}
          src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="origin-when-cross-origin"
        />
      ) : (
        <button
          type="button"
          onClick={() => setIsLoaded(true)}
          className="group absolute inset-0 flex h-full w-full items-center justify-center overflow-hidden"
          aria-label={playAriaLabel}
        >
          <img
            src={thumbnailSrc}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <span className="absolute inline-flex h-14 w-20 items-center justify-center rounded-2xl bg-white/90 text-xs font-bold uppercase tracking-[0.2em] text-[#0c3b52] shadow-lg">
            {playLabel}
          </span>
        </button>
      )}
    </div>
  );
};

export default YoutubeEmbed;
