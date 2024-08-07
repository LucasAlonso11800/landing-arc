import { Locale } from "@/types";
import { headers } from "next/headers";
import { getLocaleFromPathname } from "./getLocaleFromPathname";

export const getServerLocale = (): Locale => {
  const heads = headers();
  const pathname = heads.get("x-url") as string;
  const locale = getLocaleFromPathname(pathname);
  return locale;
};