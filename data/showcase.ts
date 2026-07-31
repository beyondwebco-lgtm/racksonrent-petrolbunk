export interface ShowcaseCategory {
  id: string;
  eyebrow: string;
  title: string;
  shortName: string;
  description: string;
  suitableFor: string[];
  benefits: string[];
  primaryCta: string;
  secondaryCta: string;
  image: string;
  iconName: string;
  rolePrimary: "bunk-owner" | "brand-merchant";
  spaceTypePrimary: string;
  roleSecondary: "bunk-owner" | "brand-merchant";
  categorySecondary: string;
}

export const SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: "helmets",
    eyebrow: "Category 01",
    title: "Helmets & Rider Safety Showcase",
    shortName: "Helmets & Safety",
    description:
      "Display ISI certified motorcycle helmets, open-face, full-face, riding gloves, and safety gear directly on high-footfall petrol pump retail racks.",
    suitableFor: [
      "Full-face helmets",
      "Modular helmets",
      "Open-face helmets",
      "Riding gloves",
      "Reflective rain jackets",
      "Helmet visors & cleaners",
    ],
    benefits: [
      "High-visibility petrol pump location",
      "Direct access to 1000s of daily riders",
      "Compact rack footprint",
      "Additional rental income for pump owners",
      "Immediate impulse purchases",
    ],
    primaryCta: "List Petrol Pump Space",
    secondaryCta: "Find Space for Helmet Brand",
    image: "/spaces/space-travel.jpeg", // This is the "Bike Gear" image
    iconName: "ShieldCheck",
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Auto Care & Helmet Display Stand",
    roleSecondary: "brand-merchant",
    categorySecondary: "Helmets & Rider Safety Gear",
  },
  {
    id: "snacks-beverages",
    eyebrow: "Category 02",
    title: "Snacks & Refreshment Rack",
    shortName: "Snacks & Drinks",
    description:
      "Showcase packaged munchies, dry fruits, energy bars, cold beverages, and juices inside petrol station convenience corners.",
    suitableFor: [
      "Energy bars & granola",
      "Packaged nuts & seeds",
      "Flavored muesli & chips",
      "Cold coffee & iced tea",
      "Isotonic energy drinks",
      "Bakery cookies & bites",
    ],
    benefits: [
      "Daily visibility among hungry travelers",
      "High impulse buy potential",
      "Affordable rental cost",
      "Strong brand awareness",
      "Flexible rack formats",
    ],
    primaryCta: "List Space for Snack Racks",
    secondaryCta: "Find Space for Food Brand",
    image: "/spaces/space-snacks.jpeg",
    iconName: "ShoppingBag",
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Forecourt Canopy Display Rack",
    roleSecondary: "brand-merchant",
    categorySecondary: "Packaged Snacks & Munchies",
  },
  {
    id: "auto-care",
    eyebrow: "Category 03",
    title: "Car Care & Auto Accessories",
    shortName: "Auto Care",
    description:
      "Display essential automotive care items, microfiber cloths, car perfumes, wiper fluids, and emergency phone mounts right where drivers stop.",
    suitableFor: [
      "Microfiber polishing towels",
      "Car air fresheners & diffusers",
      "Windshield washer fluids",
      "Dashboard polish & shiners",
      "Tyre pressure gauges",
      "Fast car chargers & cables",
    ],
    benefits: [
      "Position car products where drivers refuel",
      "Build brand trust with car owners",
      "Low overhead costs",
      "Expand across multi-city petrol pumps",
      "Direct customer interaction",
    ],
    primaryCta: "List Auto Display Space",
    secondaryCta: "Find Space for Auto Accessories",
    image: "/spaces/space-helmets.jpeg", // This is the "Radium works/tools" image
    iconName: "Zap",
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Auto Care & Helmet Display Stand",
    roleSecondary: "brand-merchant",
    categorySecondary: "Car Care & Auto Accessories",
  },
  {
    id: "travel-essentials",
    eyebrow: "Category 04",
    title: "Travel & Highway Essentials Kiosk",
    shortName: "Travel & Kiosk",
    description:
      "Feature compact branded kiosks for travel pillows, sunglasses, power banks, wet wipes, and highway travel merchandise.",
    suitableFor: [
      "Travel pillows & eye masks",
      "UV protection sunglasses",
      "High-capacity power banks",
      "Hygiene wet wipes & tissues",
      "Pocket perfumes & sprays",
      "Emergency LED flashlights",
    ],
    benefits: [
      "Unique highway travel appeal",
      "High customer engagement",
      "Eye-catching display kiosk",
      "Great brand awareness",
      "Higher sales margin",
    ],
    primaryCta: "List Kiosk Space",
    secondaryCta: "Find Space for Travel Brand",
    image: "/spaces/space-car-care.jpeg", // This is the "Premium Customization" image
    iconName: "Sparkles",
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Compact Branded Retail Kiosk",
    roleSecondary: "brand-merchant",
    categorySecondary: "Travel & Phone Accessories",
  },
];

export const SHOWCASE_TRUST_ITEMS = [
  { label: "Verified Petrol Pump Spaces", desc: "Curated & safety checked", iconName: "ShieldCheck" },
  { label: "High Commuter Footfall", desc: "Daily drivers & travelers", iconName: "Users" },
  { label: "Flexible Setup Options", desc: "Compact racks & kiosks", iconName: "Layers" },
  { label: "Dedicated Support", desc: "Pan-India assistance team", iconName: "Headphones" },
  { label: "Pan India Opportunities", desc: "Expanding pump networks", iconName: "MapPin" },
];
