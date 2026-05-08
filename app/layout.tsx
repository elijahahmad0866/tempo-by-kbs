import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});

// ─── Root Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Tempo by KB | Personal Trainer Los Angeles",
    template: "%s | Tempo by KB",
  },
  description:
    "Los Angeles personal trainer specializing in hypertrophy, mobility, and athletic performance. NASM certified, NYU Tisch BFA. In-person & online coaching available.",
  keywords: [
    "personal trainer Los Angeles",
    "female personal trainer LA",
    "hypertrophy coach Los Angeles",
    "mobility training LA",
    "NASM certified trainer Hollywood",
    "online fitness coach",
    "Tempo by KB",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tempobykb.com",
    siteName: "Tempo by KB",
    title: "Tempo by KB | Personal Trainer Los Angeles",
    description:
      "Movement that shapes. NASM certified personal trainer in Los Angeles specializing in hypertrophy, mobility, and athletic performance.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempo by KB | Personal Trainer Los Angeles",
    description:
      "Movement that shapes. NASM certified personal trainer in Los Angeles.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://tempobykb.com",
  },
};

// ─── LocalBusiness JSON-LD Schema ─────────────────────────────────────────────
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://tempobykb.com",
  name: "Tempo by KB",
  description:
    "Personal trainer in Los Angeles specializing in hypertrophy, mobility, sports performance and athletic training.",
  url: "https://tempobykb.com",
  telephone: "",
  email: "tempobykb@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Los Angeles",
    addressRegion: "CA",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  areaServed: [
    "Los Angeles",
    "Hollywood",
    "West Hollywood",
    "Culver City",
    "Santa Monica",
  ],
  priceRange: "$$",
  sameAs: ["https://www.instagram.com/tempobykb"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Personal Training Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "1-on-1 In-Person Training",
        },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Online Coaching" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "8 Week Shred Program" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Mobility Training" },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
