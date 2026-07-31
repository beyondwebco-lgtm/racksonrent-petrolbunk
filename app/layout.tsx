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
  title: "Racks on Rent | Turn Unused Petrol Pump Space Into Income",
  description:
    "Racks on Rent connects petrol pump owners with startups and retail brands. Rent unused space, showcase quality products, increase customer footfall, and create an additional source of income.",
  keywords: [
    "Racks on Rent",
    "Petrol pump space rental",
    "Petrol bunk retail rack",
    "Fuel station display space",
    "Startup retail expansion",
    "Helmet rack rental petrol pump",
    "Retail space sublet petrol station",
    "Petrol pump monetization"
  ],
  authors: [{ name: "Racks on Rent", url: SITE_CONFIG.domain }],
  creator: "Racks on Rent",
  publisher: "Racks on Rent",
  openGraph: {
    title: "Racks on Rent | Petrol Pump Space Partnership",
    description:
      "Racks on Rent connects petrol pump owners with startups and retail brands. Rent unused space, showcase quality products, increase customer footfall, and create an additional source of income.",
    url: SITE_CONFIG.domain,
    siteName: "Racks on Rent",
    locale: "en_IN",
    type: "website",
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
    "logo": `${SITE_CONFIG.domain}/images/logo.jpeg`,
    "description": "Sublet space. Share Success. A smart platform connecting petrol pump owners with startups and retail entrepreneurs.",
    "telephone": "+917995424477",
    "email": "racksonrent@gmail.com"
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
      <body className="min-h-full flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans">
        <TopBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

