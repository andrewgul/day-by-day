import { Locale } from "next-intl";
import { routing } from "../routing";

// test

export const isValidLocale = (value?: string | null): value is Locale => {
  if (!value) {
    return false;
  }

  return routing.locales.includes(value);
}