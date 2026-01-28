"use client";
import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, ExternalLink } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import { ModalCloseButton } from "@/components/ui/modal-close-button";
import { getWhatsAppUrl } from "@/utils/whatsapp";
import Image from 'next/image';

const WhatsAppBubble = () => {
  const t = useTranslations('whatsapp');

  const [showBubble] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [hasCookieConsent, setHasCookieConsent] = useState(true);
  const [imageAvailable, setImageAvailable] = useState(true);

  // Check if cookie consent exists to adjust bubble position
  useEffect(() => {
    const checkConsent = () => {
      let hasConsented = null;
      try {
        hasConsented = localStorage.getItem('cookie-consent');
      } catch {
        // localStorage not available - handle silently
      }
      setHasCookieConsent(!!hasConsented);
    };
  
    checkConsent();
    window.addEventListener('storage', checkConsent);

    return () => {
      window.removeEventListener('storage', checkConsent);
    };
  }, []);


  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const whatsappNumber = "+34 621 15 14 68";
  const helpItems = [
    t('help1'),
    t('help2'),
    t('help3'),
    t('help4'),
    t('help5'),
  ].filter(Boolean);

  const handleWhatsAppChat = () => {
    const whatsappUrl = getWhatsAppUrl(t('defaultWhatsAppMessage'), whatsappNumber);
    if (!whatsappUrl) return;
    window.open(whatsappUrl, '_blank');
    closeModal();
  };

  if (!showBubble) return null;

  return (
    <>
      {/* WhatsApp Bubble */}
      <div
        className={`fixed ${hasCookieConsent ? 'bottom-16' : 'bottom-24'} left-6 z-40 transition-all duration-300`}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-[#1F8A0D] rounded-full animate-ping opacity-30 pointer-events-none" />
          <button
            onClick={openModal}
            className="relative bg-gradient-to-br from-[#0f5f15] to-[#1F8A0D] text-white rounded-full p-5 shadow-lg transition-all duration-300 hover:scale-[1.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F8A0D] focus-visible:ring-offset-2 group"
            aria-label={t('openLine')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </button>

          {/* Tooltip */}
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-[#23272F] text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap border border-gray-700 dark:border-gray-600">
            {t('tooltip')}
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-l-4 border-l-gray-900 dark:border-l-[#23272F] border-y-4 border-y-transparent" />
          </div>
        </div>
      </div>

      {/* WhatsApp Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-[#0B1121] text-gray-900 dark:text-white rounded-3xl shadow-2xl max-w-lg w-full border border-gray-200 dark:border-gray-800 overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-br from-[#0B3C0A] to-[#1F8A0D] relative p-6 sm:p-8 pr-16 sm:pr-24">
              <ModalCloseButton
                onClick={closeModal}
                variant="default"
                size="md"
                className="absolute top-4 right-4 text-white z-20"
              />

              <div className="flex items-center gap-4 sm:gap-6">
                <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded-2xl overflow-hidden ring-1 ring-white/30 bg-white/10 shadow-xl shrink-0">
                  {imageAvailable ? (
                    <Image
                      src="/static/chatbot_profile_picture.webp"
                      alt="Chatbot profile"
                      fill
                      className="object-cover"
                      priority
                      onError={() => setImageAvailable(false)}
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full w-full bg-white/20">
                      <MessageCircle className="text-white" size={26} />
                    </div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-tight">
                    {t('title')}
                  </h2>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                <p>{t('description')}</p>
                <p className="font-semibold text-[#1F8A0D] dark:text-[#7CFC00]">
                  {t('aiNotice')}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {t('phoneNotice')}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                  <Send size={16} className="text-[#0F3D08]" />
                  <span>{t('canHelpWith')}</span>
                </h3>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                  {helpItems.map((item, idx) =>
                    item ? (
                      <li
                        key={`${item}-${idx}`}
                        className="flex items-start gap-2"
                      >
                        <span className="mt-1.5 w-2.5 h-2.5 rounded-full bg-[#1F8A0D] dark:bg-[#7CFC00]"></span>
                        <span>{item}</span>
                      </li>
                    ) : null
                  )}
                </ul>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleWhatsAppChat}
                  className="w-full bg-gradient-to-r from-[#0B3C0A] to-[#1F8A0D] hover:opacity-95 text-white py-3 flex items-center justify-center gap-2 transition-all duration-200"
                >
                  <Send size={18} />
                  <span>{t('requestAssistance')}</span>
                  <ExternalLink size={16} />
                </Button>
                <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  {t('responseTime')}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-4">
              <div className="flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-300">
                <div className="w-2 h-2 bg-[#1F8A0D] dark:bg-[#7CFC00] rounded-full animate-pulse"></div>
                <span>{t('status')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppBubble;
