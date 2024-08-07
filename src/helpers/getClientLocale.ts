"use client";

import { Locale } from "@/types";
import { DEFAULT_LENGUAGE_CODE, getLocaleFromPathname } from "./getLocaleFromPathname";

export const getClientLocale = (): Locale => {
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    const locale = getLocaleFromPathname(pathname);
    return locale;
  }
  return DEFAULT_LENGUAGE_CODE;
};