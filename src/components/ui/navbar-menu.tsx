"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, type Transition } from "motion/react";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";

const transition: Transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  href,
  isActiveLink = false,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  href?: string;
  isActiveLink?: boolean;
  children?: React.ReactNode;
}) => {
  const pathname = usePathname();
  // consider a link active when pathname equals href or starts with href + '/'
  const computedActive =
    href && pathname
      ? pathname === href || pathname.startsWith(href + "/")
      : false;
  const finalActive = isActiveLink || computedActive;

  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      {href ? (
        <Link
          href={href}
          className={`transition-all duration-200 whitespace-nowrap text-sm xl:text-base font-medium relative group hover:text-red-600 ${
            finalActive
              ? "text-red-600"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {item}
          <span
            className={`absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-300 ${
              finalActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
          />
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.2 }}
          className="transition-all duration-200 whitespace-nowrap text-sm xl:text-base font-medium relative group text-gray-700 dark:text-gray-300 hover:text-red-600"
        >
          {item}
        </motion.p>
      )}
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
          className="z-[70]"
        >
          {active === item && (
            <div
              className="absolute top-[calc(100%_+_0.75rem)] left-1/2 transform -translate-x-1/2 pt-3 z-[70]"
              onMouseEnter={() => setActive(item)}
              onMouseLeave={() => setActive(null)}
            >
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.15] dark:border-white/[0.15] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setActive(null), 120);
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  return (
    <nav
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex items-center space-x-6"
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
  fallbackSrc = "/static/producto-estrella3.webp",
}: {
  title: string;
  description?: string;
  href: string;
  src: string;
  fallbackSrc?: string;
}) => {
  const [currentSrc, setCurrentSrc] = useState(src || fallbackSrc);

  useEffect(() => {
    setCurrentSrc(src || fallbackSrc);
  }, [fallbackSrc, src]);

  return (
    <Link href={href} className="flex space-x-3 w-full max-w-[420px]">
      <Image
        src={currentSrc}
        width={120}
        height={120}
        alt={title}
        className="shrink-0 rounded-lg shadow-md object-cover h-20 w-28"
        onError={() => setCurrentSrc(fallbackSrc)}
      />
      <div className="flex-1 min-w-0">
        <h4 className="text-base font-semibold mb-1 text-black dark:text-white line-clamp-2">
          {title}
        </h4>
        {description && (
          <p className="text-neutral-700 text-sm dark:text-neutral-300 line-clamp-3">
            {description}
          </p>
        )}
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: React.ComponentPropsWithoutRef<typeof Link>) => {
  return (
    <Link
      {...rest}
      className="text-sm xl:text-base font-medium text-gray-700 dark:text-gray-300 hover:text-red-600 transition"
    >
      {children}
    </Link>
  );
};
