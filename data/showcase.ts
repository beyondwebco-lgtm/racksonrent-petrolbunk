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
    id: "helmet-cleaning",
    eyebrow: "Category 01",
    title: "Automated Helmet Cleaning Station",
    shortName: "Helmet Cleaning",
    description:
      "Provide riders with a quick, automated helmet cleaning, sanitizing, and refreshing service directly at the pump.",
    suitableFor: [
      "Helmet cleaning",
      "UV Sterilization",
      "Air blow dry",
      "Internal fragrance",
      "Visor polishing",
    ],
    benefits: [
      "High utility for daily riders",
      "Attracts two-wheeler traffic",
      "Automated passive income",
      "Low maintenance kiosk",
    ],
    primaryCta: "Install Cleaning Station",
    secondaryCta: "Partner as Service Provider",
    image: "/showcase/showcase-1.jpeg",
    iconName: "Sparkles",
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Automated Service Kiosk",
    roleSecondary: "brand-merchant",
    categorySecondary: "Automated Services",
  },
  {
    id: "riding-gear",
    eyebrow: "Category 02",
    title: "Premium Riding Gear & Essentials",
    shortName: "Riding Gear",
    description:
      "High-visibility vests, riding jackets, and protective gloves for safety-conscious highway riders and daily commuters.",
    suitableFor: [
      "Riding jackets",
      "High-visibility safety vests",
      "Motorcycle gloves",
      "Reflective rain gear",
      "Riding boots",
    ],
    benefits: [
      "Targeted at highway riders",
      "Premium brand visibility",
      "High ticket size items",
      "Organized apparel display",
    ],
    primaryCta: "List Apparel Space",
    secondaryCta: "Showcase Riding Brand",
    image: "/showcase/showcase-2.jpeg",
    iconName: "Layers",
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Retail Apparel Rack",
    roleSecondary: "brand-merchant",
    categorySecondary: "Riding Apparel",
  },
  {
    id: "energy-drinks",
    eyebrow: "Category 03",
    title: "Energy & Hydration Vending",
    shortName: "Energy Drinks",
    description:
      "Automated vending kiosks offering a wide range of chilled energy drinks and performance beverages to fuel long rides.",
    suitableFor: [
      "Energy drinks",
      "Isotonic beverages",
      "Cold coffee & iced tea",
      "Hydration juices",
      "Protein shakes",
    ],
    benefits: [
      "Instant impulse purchase",
      "24/7 automated sales",
      "High margin products",
      "Takes minimal footprint",
    ],
    primaryCta: "List Vending Space",
    secondaryCta: "Find Space for Beverage Brand",
    image: "/showcase/showcase-3.jpeg",
    iconName: "Zap",
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Vending Machine Space",
    roleSecondary: "brand-merchant",
    categorySecondary: "Beverages & Hydration",
  },
  {
    id: "helmets-gloves",
    eyebrow: "Category 04",
    title: "Helmets & Safety Accessories",
    shortName: "Helmets & Safety",
    description:
      "Showcase ISI-certified full-face helmets, half helmets, and riding gloves from top brands directly on high-footfall racks.",
    suitableFor: [
      "Full-face helmets",
      "Open-face helmets",
      "Riding gloves",
      "Helmet visors",
      "Balaclavas & masks",
    ],
    benefits: [
      "Essential for two-wheeler safety",
      "Immediate replacement market",
      "High trust from riders",
      "Compact vertical display",
    ],
    primaryCta: "List Helmet Display Space",
    secondaryCta: "Find Space for Helmet Brand",
    image: "/showcase/showcase-4.jpeg",
    iconName: "ShieldCheck",
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Auto Care & Helmet Display Stand",
    roleSecondary: "brand-merchant",
    categorySecondary: "Helmets & Safety Gear",
  },
  {
    id: "bike-stickering",
    eyebrow: "Category 05",
    title: "Radium Works & Custom Graphics",
    shortName: "Bike Stickering",
    description:
      "A dedicated zone for bike stickering, radium designs, and custom premium graphics applied right at the petrol pump.",
    suitableFor: [
      "Bike stickering",
      "Radium designs",
      "Custom graphics",
      "Reflective tapes",
      "Paint protection films",
    ],
    benefits: [
      "High engagement custom service",
      "Drives longer dwell time",
      "Appeals to young riders",
      "Interactive visual space",
    ],
    primaryCta: "List Service Zone",
    secondaryCta: "Partner for Custom Graphics",
    image: "/showcase/showcase-5.jpeg",
    iconName: "Apple", // or maybe another icon like 'Sparkles'
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Service Kiosk Zone",
    roleSecondary: "brand-merchant",
    categorySecondary: "Custom Graphics",
  },
  {
    id: "custom-gear",
    eyebrow: "Category 06",
    title: "Bike Gear & Custom Leather Goods",
    shortName: "Custom Gear",
    description:
      "Premium retail space for customized leather riding jackets, saddlebags, pouches, and unique bike customization accessories.",
    suitableFor: [
      "Custom leather jackets",
      "Saddlebags & tank bags",
      "Premium riding gloves",
      "Leather pouches",
      "Bike customization accessories",
    ],
    benefits: [
      "Attracts premium tourers",
      "High aesthetic appeal",
      "Showcases local craftsmanship",
      "Excellent branding opportunity",
    ],
    primaryCta: "List Premium Space",
    secondaryCta: "Showcase Custom Gear",
    image: "/showcase/showcase-6.jpeg",
    iconName: "Stethoscope",
    rolePrimary: "bunk-owner",
    spaceTypePrimary: "Premium Walk-in Kiosk",
    roleSecondary: "brand-merchant",
    categorySecondary: "Premium Touring Gear",
  }
];

export const SHOWCASE_TRUST_ITEMS = [
  { label: "Verified Petrol Pump Spaces", desc: "Curated & safety checked", iconName: "ShieldCheck" },
  { label: "High Commuter Footfall", desc: "Daily drivers & travelers", iconName: "Users" },
  { label: "Flexible Setup Options", desc: "Compact racks & kiosks", iconName: "Layers" },
  { label: "Dedicated Support", desc: "Pan-India assistance team", iconName: "Headphones" },
  { label: "Pan India Opportunities", desc: "Expanding pump networks", iconName: "MapPin" },
];
