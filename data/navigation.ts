export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Petrol Pump Owners", href: "/how-it-works?role=bunk-owner" },
  { label: "For Startups", href: "/how-it-works?role=brand" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Petrol Pump Owners", href: "/how-it-works?role=bunk-owner" },
  { label: "For Startups", href: "/how-it-works?role=brand" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export const FOOTER_OPPORTUNITY_LINKS: NavLink[] = [
  { label: "Forecourt Canopy Display Rack", href: "#formats" },
  { label: "In-Store Mart Shelf Unit", href: "#formats" },
  { label: "Countertop Display Stand", href: "#formats" },
  { label: "Compact Branded Kiosk", href: "#formats" },
  { label: "EV Charging Lounge Shelf", href: "#formats" },
  { label: "Auto Care & Helmet Stand", href: "#formats" },
];

export const CONTACT_INFO = {
  phoneDisplay: "7995424477",
  phoneFormatted: "+91 7995424477",
  telLink: "tel:+917995424477",
  whatsappNumber: "917995424477",
  whatsappLink: "https://wa.me/917995424477?text=Hello%20Racks%20on%20Rent%2C%20I%20would%20like%20to%20know%20more%20about%20petrol%20pump%20retail%20spaces.",
  email: "support@racksonrent.com",
  secondaryEmail: "contact@racksonrent.com",
  mailtoLink: "mailto:support@racksonrent.com",
  websiteDisplay: "petrolbank.racksonrent.com",
  websiteUrl: "https://petrolbank.racksonrent.com",
  address: "Pan-India Network",
};



