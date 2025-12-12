import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import NavBar from '@/components/layouts/navbar/NavBar'
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params; // فك الـ Promise
  if (!hasLocale(routing.locales, locale)) notFound();

  const isArabic = locale === "ar";
  const messages = (await import(`../../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={isArabic ? "rtl" : "ltr"} className="container mx-auto">
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <NavBar/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
