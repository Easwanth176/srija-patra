import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Srija Patra | Digital Marketing Specialist",
  description:
    "Digital marketing portfolio of Srija Patra — SEO, paid media, social media, e-commerce and campaign analytics.",
  keywords: [
    "Srija Patra",
    "Digital Marketing",
    "SEO",
    "Google Ads",
    "Social Media",
    "Shopify",
    "LPU",
  ],
  openGraph: {
    title: "Srija Patra | Digital Marketing Specialist",
    description:
      "Building brands through search, social, content and data-led campaigns.",
    type: "website",
    images: ["/srija-patra-hero.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${jakarta.variable}`}>
        {children}
      </body>
    </html>
  );
}
