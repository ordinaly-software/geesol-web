import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'es'],
  defaultLocale: 'es'
});

export type Locale = typeof routing.locales[number];

const navigation = createNavigation(routing);

export const Link = navigation.Link;
export const redirect = navigation.redirect;
export const usePathname = navigation.usePathname;
export const useRouter = navigation.useRouter;