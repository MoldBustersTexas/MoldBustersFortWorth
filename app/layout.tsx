import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.moldbustersfortworth.com"),

  title: {
  default: "Mold Testing, Inspection & Remediation Fort Worth | Mold Busters",
  template: "%s | Mold Busters",
},

  description:
    "Professional mold testing, mold inspections, indoor air quality testing, HVAC inspections, and moisture investigations throughout Fort Worth and the Dallas–Fort Worth Metroplex. Featuring advanced InstaScope real-time air quality analysis.",

  keywords: [
    "mold testing Fort Worth",
    "mold inspection Fort Worth",
    "mold remediation Fort Worth",
    "mold removal Fort Worth",
    "indoor air quality testing",
    "HVAC inspection",
    "HVAC mold inspection",
    "air quality testing",
    "InstaScope",
    "moisture inspection",
    "Fort Worth mold company",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Mold Testing & Mold Inspection Fort Worth",
    description:
      "Professional mold testing, indoor air quality assessments, and HVAC inspections throughout Fort Worth using InstaScope technology.",
    url: "https://www.moldbustersfortworth.com",
    siteName: "Mold Busters Fort Worth",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Mold Testing & Mold Inspection Fort Worth",
    description:
      "Professional mold testing, indoor air quality assessments, and HVAC inspections throughout Fort Worth.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body>
        {children}

        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />

            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}