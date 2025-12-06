"use client";
/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const dynamic = 'force-static'

interface User {
  is_staff?: boolean;
  is_superuser?: boolean;
}

export default function StudioPage() {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [, setAlert] = useState<{ type: string; message: string } | null>(null);

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Cargando...</div>;
  }
  if (!isAuthorized) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {"Acceso restringido"}
      </div>
    );
  }


  return (
    <NextStudio config={config} />
  );
}
