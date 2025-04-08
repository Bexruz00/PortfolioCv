import "./globals.css";
import { GlobalContextProvider } from "@/context/context";
import Header from "@/modules/Header";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Script from "next/script";
import Footer from "@/modules/Footer";

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    
    <html lang={locale}>
      <title>Portfolio</title>
      <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
      <body className={`antialiased`}>
        <GlobalContextProvider>
          <NextIntlClientProvider>
            <Header/>
            {children}
            <Footer/>
          </NextIntlClientProvider>
        </GlobalContextProvider>
        <Script src="/script.js" strategy="afterInteractive"/>
      </body>
    </html>
  );
}
