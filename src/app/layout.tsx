import { Analytics } from "@vercel/analytics/react";
import { dankMono, fontSans, ubuntu } from "~/components/ui/fonts";
import { getSEOTags, renderSchemaTags } from "~/lib/seo";
import { cn } from "~/lib/utils";
import RootProviders from "~/providers";
import "~/styles/globals.css";
import Script from "next/script";
import { GA_MEASUREMENT_ID } from "~/lib/gtag";
import { GoogleAnalytics } from "~/components/analytics";

declare global {
  interface Window {
    gtag: (command: string, ...args: any[]) => void;
  }
}

export const viewport = {
  viewportFit: "cover",
  width: "device-width",
  initialScale: 1,
  maximumScale: 3,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export const metadata = getSEOTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          ubuntu.variable,
          dankMono.variable
        )}
      >
        {renderSchemaTags()}
        {GA_MEASUREMENT_ID && <GoogleAnalytics />}
        <RootProviders>{children}</RootProviders>

        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
