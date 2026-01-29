"use client";

import { useEffect, useId, useState } from "react";

declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create: (options: Record<string, unknown>) => void;
      };
    };
  }
}

type HubSpotFormProps = {
  portalId?: string;
  formId?: string;
  region?: string;
};

export const HubSpotForm = ({
  portalId,
  formId,
  region = "na1",
}: HubSpotFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const formContainerId = useId();

  useEffect(() => {
    if (!portalId || !formId) return;

    const scriptSrc = "https://js.hsforms.net/forms/embed/v2.js";
    const loadForm = () => {
      if (window.hbspt?.forms?.create) {
        window.hbspt.forms.create({
          region,
          portalId,
          formId,
          target: `#${formContainerId}`,
        });
      }
    };

    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`) as
      | HTMLScriptElement
      | null;

    if (existingScript) {
      loadForm();
      return;
    }

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    script.onload = loadForm;
    script.onerror = () => setError("No se pudo cargar el formulario de contacto.");
    document.body.appendChild(script);

    return () => {
      script.onload = null;
    };
  }, [formContainerId, formId, portalId]);

  if (!portalId || !formId) {
    return (
    <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center text-gray-600 break-words dark:border-gray-700 dark:bg-[#0f172a] dark:text-gray-300">
        Añade tus credenciales de HubSpot en las variables
        <code className="mx-1 inline-flex max-w-full break-all rounded bg-gray-800 px-2 py-1 text-xs font-medium text-white sm:text-sm">
          NEXT_PUBLIC_HUBSPOT_PORTAL_ID
        </code>
        y
        <code className="mx-1 inline-flex max-w-full break-all rounded bg-gray-800 px-2 py-1 text-xs font-medium text-white sm:text-sm">
          NEXT_PUBLIC_HUBSPOT_FORM_ID
        </code>
        para mostrar el formulario.
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-400/40 dark:bg-red-900/20 dark:text-red-200">
        {error}
      </div>
    );
  }

  return <div id={formContainerId} className="min-h-[340px]" />;
};
