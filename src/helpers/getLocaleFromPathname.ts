import { Locale } from "@/types";

const LOCALE_REGEX = /\/([a-zA-Z]{2}(?:-[a-zA-Z]{2})?)($|\/)/;
export const DEFAULT_LENGUAGE_CODE = 'en-US'

export const getLocaleFromPathname = (pathname: string): Locale => {
    const match = pathname.match(LOCALE_REGEX);
    if (match && match[1]) {
      return match[1] as Locale;
    } else {
      return DEFAULT_LENGUAGE_CODE;
    }
};
