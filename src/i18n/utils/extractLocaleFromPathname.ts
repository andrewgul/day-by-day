import { Locale } from "next-intl";
import { isValidLocale } from "./isValidLocale";
import { routing } from "../routing";

export const extractLocaleFromPathname = (pathname: string): Locale => {
  const extracted = pathname.split('/')[0];

  return isValidLocale(extracted) ? extracted : routing.defaultLocale;
}