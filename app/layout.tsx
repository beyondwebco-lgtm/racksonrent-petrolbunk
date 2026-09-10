import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/data/config";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: "Petrol Pump Retail & Rack Space for Rent in India | Racks on Rent",
  description:
    "Turn unused petrol pump space into a new business opportunity. Racks on Rent connects petrol pump owners with startups and retail brands across India.",
  keywords: [
    "Racks on Rent",
    "Petrol pump space for rent",
    "Petrol bunk retail rack space",
    "Forecourt canopy display rack",
    "In-store mart shelf unit",
    "Countertop display stand",
    "EV charging lounge shelf",
    "Petrol pump startups",
    "Automotive retail display India",
    "Sublet petrol pump space"
  ],
  authors: [{ name: "Racks on Rent", url: SITE_CONFIG.domain }],
  creator: "Racks on Rent",
  publisher: "Racks on Rent",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Petrol Pump Retail & Rack Space for Rent in India | Racks on Rent",
    description:
      "Turn unused petrol pump space into a new business opportunity. Racks on Rent connects petrol pump owners with startups and retail brands across India.",
    url: SITE_CONFIG.domain,
    siteName: "Racks on Rent",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1254,
        height: 1254,
        alt: "Racks on Rent - Petrol Pump Retail & Rack Space for Rent",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petrol Pump Retail & Rack Space for Rent in India | Racks on Rent",
    description:
      "Turn unused petrol pump space into a new business opportunity. Racks on Rent connects petrol pump owners with startups and retail brands across India.",
    images: ["/opengraph-image.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Racks on Rent",
    "url": SITE_CONFIG.domain,
    "logo": `${SITE_CONFIG.domain}/images/logo.png`,
    "description": "Sublet Space. Share Success. Connecting petrol pump owners with startups and retail brands.",
    "telephone": "+917995424477",
    "email": "support@racksonrent.com"
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFDF5] text-[#1F1F1F] font-sans">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

