import { headers } from "next/headers";

const LOCALE_REGEX = /\/([a-zA-Z]{2}(?:-[a-zA-Z]{2})?)($|\/)/;
export const DEFAULT_LENGUAGE_CODE = 'en-US'

export const getLocaleFromPathname = (pathname: string) => {
    const match = pathname.match(LOCALE_REGEX);
    if (match && match[1]) {
      return match[1];
    } else {
      return DEFAULT_LENGUAGE_CODE;
    }
};


export const getServerLocale = () => {
  const heads = headers();
  const pathname = heads.get("x-url") as string;
  const locale = getLocaleFromPathname(pathname);
  return locale;
};