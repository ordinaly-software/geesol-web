"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Cookie, Settings, Shield, BarChart3, Megaphone } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import Slider from "@/components/ui/slider";
import { ModalCloseButton } from "@/components/ui/modal-close-button";
import { clearFunctionalStorage, getCookiePreferences, setCookiePreferences as setCookiePrefs } from '@/utils/cookieManager';

const CookieConsent = () => {
  const t = useTranslations('cookie');

  const [showBubble, setShowBubble] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    setIsMounted(true);

    let hasConsented = null;
    try {
      hasConsented = localStorage.getItem('cookie-consent');
      const storedPreferences = getCookiePreferences();
      if (storedPreferences) {
        setCookiePreferences(prev => ({
          ...prev,
          ...storedPreferences
        }));
      }
    } catch {
      // localStorage not available - handle silently
    }
    if (!hasConsented) {
      setShowPopup(true);
      setShowBubble(true);
    }
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    // Analytics loading is handled by AnalyticsManager via events
    // Functional cleanup intentionally omitted to avoid removing required app state
  }, [cookiePreferences, isMounted]);

  useEffect(() => {
    const syncPreferencesFromStorage = (event: StorageEvent) => {
      if (event.key === 'cookie-preferences') {
        const storedPreferences = getCookiePreferences();
        if (storedPreferences) {
          setCookiePreferences(prev => ({
            ...prev,
            ...storedPreferences
          }));
        }
      }
    };

    window.addEventListener('storage', syncPreferencesFromStorage);

    // Also listen for programmatic preference changes (same-tab)
    const onPrefs = (e: Event) => {
      try {
        const detail = (e as CustomEvent)?.detail as typeof cookiePreferences | undefined;
        if (detail) {
          setCookiePreferences(prev => ({ ...prev, ...detail }));
        } else {
          const stored = getCookiePreferences();
          if (stored) setCookiePreferences(prev => ({ ...prev, ...stored }));
        }
      } catch {
        // ignore
      }
    };

    window.addEventListener('cookie-preferences-changed', onPrefs as EventListener);

    return () => {
      window.removeEventListener('storage', syncPreferencesFromStorage);
      window.removeEventListener('cookie-preferences-changed', onPrefs as EventListener);
    };
  }, []);

  // Lock body scroll when popup is open
  // Do not lock the body when the panel is open — allow scrolling and interaction
  // (previous implementation blocked scroll and prevented interacting with page)

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    };
    setCookiePreferences(preferences);
    try {
      setCookiePrefs(preferences);
    } catch {
      // ignore
    }
    try {
      localStorage.setItem('cookie-consent', 'accepted');
    } catch {
      // ignore
    }
    setShowBubble(false);
    setShowPopup(false);
    setShowSettings(false);
  };

  const handleRejectAll = () => {
    const preferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
    };
    setCookiePreferences(preferences);
    try {
      setCookiePrefs(preferences);
    } catch {
      // ignore
    }
    try {
      localStorage.setItem('cookie-consent', 'rejected');
    } catch {
      // ignore
    }
    clearFunctionalStorage();
    setShowBubble(false);
    setShowPopup(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    try {
      localStorage.setItem('cookie-consent', 'customized');
    } catch {
      // localStorage not available - handle silently
    }

    // Centralized write (also emits events)
    try {
      setCookiePrefs(cookiePreferences);
    } catch {
      try {
        localStorage.setItem('cookie-preferences', JSON.stringify(cookiePreferences));
        window.dispatchEvent(new CustomEvent('cookie-preferences-changed', { detail: cookiePreferences }));
      } catch {
        // ignore
      }
    }

    if (!cookiePreferences.functional) {
      clearFunctionalStorage();
    }
    setShowBubble(false);
    setShowPopup(false);
    setShowSettings(false);
  };

  // Allow other pages to open the cookie popup (e.g., Legal page)
  useEffect(() => {
    const onOpen = (e: Event) => {
      try {
        // support opening with detail: { settings: true }
        const detail = (e as CustomEvent)?.detail as { settings?: boolean } | undefined;
        setShowPopup(true);
        if (detail?.settings) setShowSettings(true);
      } catch {
        setShowPopup(true);
      }
    };

    window.addEventListener('open-cookie-popup', onOpen as EventListener);
    return () => window.removeEventListener('open-cookie-popup', onOpen as EventListener);
  }, []);

  const handlePreferenceChange = (type: 'necessary' | 'functional' | 'analytics' | 'marketing') => {
    if (type === 'necessary') return;
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type as keyof typeof prev]
    }));
  };

  const openPopup = () => setShowPopup(true);
  const closePopup = () => {
    setShowPopup(false);
    setShowSettings(false);
  };

  if (!showBubble && !showPopup) return null;
  if (!isMounted) return null;

  const modalContent = showPopup ? (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div className="w-[95vw] max-w-xl pointer-events-auto bg-card text-card-foreground rounded-2xl shadow-2xl border border-border p-4 sm:p-6 transition-transform transform-gpu fixed right-3 bottom-3 sm:right-6 sm:bottom-6 max-h-[90svh] overflow-y-auto">
        <div className="sticky top-0 z-10 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/85 pt-1 pb-2">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full p-2 mt-1">
                <Cookie className="text-white" size={20} />
              </div>
              <div className="min-w-0">
                <h3 className="text-lg font-semibold text-foreground">{t('title')}</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 self-start sm:self-auto">
            <button
              onClick={() => setShowSettings(prev => !prev)}
              className="text-sm font-semibold text-amber-900 bg-amber-200/90 hover:bg-amber-300/90 px-3 py-1.5 rounded-full shadow-sm"
              aria-label={t('customize')}
            >
              {showSettings ? t('back') : t('customize')}
            </button>
            <ModalCloseButton onClick={closePopup} variant="light" size="sm" />
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-2">{t('description')}</p>
        </div>

        {!showSettings ? (
          <div className="mt-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Button onClick={handleAcceptAll} className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black font-extrabold">{t('acceptAll')}</Button>
              <Button onClick={handleRejectAll} className="flex-1 bg-gradient-to-r from-red-600 to-red-500 text-white border border-red-400">{t('rejectAll')}</Button>
            </div>

            <div className="mt-3 text-sm text-muted-foreground">
              {t('whatAre')} — {t('whatAreDescription')}
            </div>
          </div>
        ) : (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-foreground">{t('personalizeTitle')}</h4>
              <p className="text-xs text-muted-foreground">{t('personalizeDescription')}</p>
            </div>

            {[
              {
                key: 'necessary',
                icon: <Shield className="text-[#1F8A0D] dark:text-[#7CFC00]" size={18} />,
                enabled: true,
                toggle: false,
                note: t('necessaryAlways')
              },
              {
                key: 'functional',
                icon: <Settings className="text-[#46B1C9]" size={18} />,
                enabled: cookiePreferences.functional,
                toggle: true,
                note: t('functionalExamples')
              },
              {
                key: 'analytics',
                icon: <BarChart3 className="text-[hsl(var(--color-dark-blue))]" size={18} />,
                enabled: cookiePreferences.analytics,
                toggle: true,
                note: t('analyticsExamples')
              },
              {
                key: 'marketing',
                icon: <Megaphone className="text-pink-500" size={18} />,
                enabled: cookiePreferences.marketing,
                toggle: true,
                note: t('marketingExamples')
              },
            ].map(({ key, icon, enabled, toggle }) => (
              <div key={key} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between p-3 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-3">
                  {icon}
                  <div>
                    <div className="font-medium text-foreground">{t(`${key}`)}</div>
                    <div className="text-xs text-muted-foreground">{t(`${key}Description`)}</div>
                  </div>
                </div>
                <div className="self-end sm:self-auto">
                  {toggle ? (
                    <Slider checked={enabled} onChange={() => handlePreferenceChange(key as 'necessary' | 'functional' | 'analytics' | 'marketing')} />
                  ) : (
                    <div className="bg-[#1F8A0D] dark:bg-[#7CFC00] rounded-full w-5 h-5 flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-white rounded-full" />
                    </div>
                  )}
                </div>
              </div>
            ))}

            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
              <Button onClick={() => setShowSettings(false)} className="flex-1 bg-gradient-to-r from-red-600 to-red-500 text-white border border-red-400">{t('back')}</Button>
              <Button onClick={handleSavePreferences} className="flex-1 bg-gradient-to-r from-amber-400 to-orange-500 text-black">{t('save')}</Button>
            </div>
          </div>
        )}

        <div className="mt-3 text-xs text-muted-foreground">
          {t('footer')}{' '}
          <Link href="/legal?tab=privacy" className="text-[#46B1C9] hover:underline" target="_blank" rel="noopener noreferrer">{t('privacy')}</Link>{' '}
          {t('and')}{' '}
          <Link href="/legal?tab=cookies" className="text-[#46B1C9] hover:underline" target="_blank" rel="noopener noreferrer">{t('cookies')}</Link>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* Cookie Bubble */}
      {showBubble && !showPopup && (
        <div className="fixed bottom-6 left-6 z-[9998]">
          <button
            onClick={openPopup}
            className="bg-gradient-to-r from-amber-400 to-orange-500 text-black rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 ring-4 ring-amber-400/20"
            aria-label={t('openCookieSettings')}
          >
            <Cookie size={24} aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Cookie Popup - Rendered in portal */}
      {modalContent && createPortal(modalContent, document.body)}
    </>
  );
};

export default CookieConsent;
