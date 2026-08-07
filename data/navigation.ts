export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/#hero" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Petrol Pump Owners", href: "/how-it-works?role=bunk-owner" },
  { label: "For Startups & Brands", href: "/how-it-works?role=brand" },
  { label: "Products", href: "/#products" },
  { label: "Contact", href: "/#contact" },
];

export const FOOTER_QUICK_LINKS: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#petrol-pump-owners" },
  { label: "For Petrol Pump Owners", href: "#petrol-pump-owners" },
  { label: "For Startups & Brands", href: "#startups" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Frequently Asked Questions", href: "#faq" },
  { label: "Contact & Enquiry", href: "#contact" },
];

export const FOOTER_OPPORTUNITY_LINKS: NavLink[] = [
  { label: "Forecourt Canopy Racks", href: "#space-types" },
  { label: "In-Store Mart Shelves", href: "#space-types" },
  { label: "Countertop Displays", href: "#space-types" },
  { label: "Compact Kiosks", href: "#space-types" },
  { label: "EV Lounge Racks", href: "#space-types" },
];

export const CONTACT_INFO = {
  phoneDisplay: "7995424477",
  phoneFormatted: "+91 79954 24477",
  telLink: "tel:+917995424477",
  whatsappNumber: "917995424477",
  whatsappLink: "https://wa.me/917995424477?text=Hello%20Racks%20on%20Rent%2C%20I%20would%20like%20to%20know%20more%20about%20petrol%20pump%20rack%20space%20opportunities.",
  email: "support@rentonrack.com",
  emailSecondary: "contact@rentonracks.com",
  emails: ["support@rentonrack.com", "contact@rentonracks.com"],
  mailtoLink: "mailto:support@rentonrack.com",
  mailtoSecondaryLink: "mailto:contact@rentonracks.com",
  websiteDisplay: "www.racksonrent.com",
  websiteUrl: "https://www.racksonrent.com",
  address: "India",
};
