"use client";

import { DEFAULT_LENGUAGE_CODE, getLocaleFromPathname } from "./getServerLocale";

export const getClientLocale = () => {
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    const locale = getLocaleFromPathname(pathname);
    return locale;
  }
  return DEFAULT_LENGUAGE_CODE;
};