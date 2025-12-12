import { useLocale } from "next-intl";
export default function useLocaleClass(arClass: string, enClass: string) {
  const locale = useLocale() 
 return locale === "ar" ? arClass : enClass;
}
