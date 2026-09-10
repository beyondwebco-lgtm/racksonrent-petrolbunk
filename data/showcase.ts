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
  rolePrimary: "gym-owner" | "wellness";
  spaceTypePrimary: string;
  roleSecondary: "gym-owner" | "wellness";
  categorySecondary: string;
}

export const SHOWCASE_CATEGORIES: ShowcaseCategory[] = [
  {
    id: "helmet-cleaning",
    eyebrow: "Category 01",
    title: "Helmet Cleaning & Sanitization",
    shortName: "Helmet Cleaning",
    description:
      "High-demand quick service stations for motorcycle riders offering rapid helmet foam sanitization, visor polish, and anti-fog treatments.",
    suitableFor: [
      "Quick helmet foam sanitizers",
      "Visor anti-fog spray & wipes",
      "Helmet interior spray deodorants",
      "Microfiber cleaning cloths",
      "Rider hygiene spray kits",
      "Quick polish accessories",
    ],
    benefits: [
      "High daily commuter impulse demand",
      "Quick 2-minute service turnover",
      "Small 2x2 ft compact footprint",
      "Repeated use by daily commuters",
      "Zero interference with fuel operations",
    ],
    primaryCta: "List Cleaning Space",
    secondaryCta: "Find Space for Cleaning Setup",
    image: "/images/accessories-jewellery.webp",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Auto Care & Helmet Stand",
    roleSecondary: "wellness",
    categorySecondary: "Helmet Cleaning",
  },
  {
    id: "riding-gear",
    eyebrow: "Category 02",
    title: "Riding Gear & Touring Accessories",
    shortName: "Riding Gear",
    description:
      "Showcase protective motorcycle riding gloves, arm sleeves, touring jackets, rain gear, and luggage straps right at busy highway and city petrol pumps.",
    suitableFor: [
      "Motorcycle riding gloves",
      "Sun protection UV arm sleeves",
      "Waterproof raincoats & shoe covers",
      "Touring bungee cords & cargo nets",
      "Reflective safety harness vests",
      "Riding goggles & sunglasses",
    ],
    benefits: [
      "Direct reach to daily two-wheeler riders",
      "High seasonal spikes during monsoons & winters",
      "High average order value",
      "Eye-level canopy rack placement",
      "Strong brand recall for rider brands",
    ],
    primaryCta: "List Gear Space",
    secondaryCta: "Find Space for Riding Gear",
    image: "/images/western-contemporary.webp",
    iconName: "Store",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Forecourt Canopy Display Rack",
    roleSecondary: "wellness",
    categorySecondary: "Riding Gear",
  },
  {
    id: "energy-drinks-vending",
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
    image: "/images/clothing-fashion-collections.webp",
    iconName: "Sparkles",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Compact Branded Kiosk",
    roleSecondary: "wellness",
    categorySecondary: "Energy Drinks",
  },
  {
    id: "helmets-safety",
    eyebrow: "Category 04",
    title: "Helmets & Rider Safety",
    shortName: "Helmets & Safety",
    description:
      "Promotional retail display racks for certified ISI & DOT full-face and open-face helmets, security cable locks, and emergency rider accessories.",
    suitableFor: [
      "ISI certified rider helmets",
      "Motorcycle disc locks & cables",
      "High-visibility reflective stickers",
      "Emergency tire puncture repair kits",
      "Action camera chin mounts",
    ],
    benefits: [
      "Essential commuter safety item",
      "Direct test-fit access for riders",
      "High margin retail placement",
      "Strong petrol pump trust association",
    ],
    primaryCta: "List Helmet Rack Space",
    secondaryCta: "Find Space for Helmet Brand",
    image: "/images/accessories-jewellery.webp",
    iconName: "ShieldCheck",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Auto Care & Helmet Stand",
    roleSecondary: "wellness",
    categorySecondary: "Helmets & Safety",
  },
  {
    id: "bike-stickering",
    eyebrow: "Category 05",
    title: "Bike Stickering & Customization",
    shortName: "Bike Stickering",
    description:
      "Compact countertop display stands and vertical spinners offering tank pads, custom vinyl stickers, wheel rim tapes, and reflective decal packs.",
    suitableFor: [
      "Tank protection pads",
      "Fluorescent rim tapes",
      "Custom graphic decals & logos",
      "Number plate styling frames",
      "Waterproof vinyl stickers",
    ],
    benefits: [
      "High impulse purchase rate",
      "Zero installation complexity",
      "Very high profit margins per unit",
      "Appeals to young youth riders",
    ],
    primaryCta: "List Countertop Space",
    secondaryCta: "Find Space for Sticker Brand",
    image: "/images/bags-wallets-footwear.webp",
    iconName: "Layers",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Countertop Display Stand",
    roleSecondary: "wellness",
    categorySecondary: "Bike Stickering",
  },
  {
    id: "custom-gear",
    eyebrow: "Category 06",
    title: "Custom Lifestyle & Travel Gear",
    shortName: "Custom Gear",
    description:
      "Branded mini stands showcasing bike keychains, tactical balaclavas, bandanas, quick-dry neck warmers, and compact travel pouches.",
    suitableFor: [
      "Rubber & leather bike keychains",
      "Breathable balaclavas & masks",
      "Multi-utility neck gaiters",
      "Waterproof phone pouches",
      "Compact waist pouches",
    ],
    benefits: [
      "High impulse grab-and-go buying",
      "No sizing or fitting issues",
      "Fits perfectly near checkout pay counters",
      "High customer turnover rate",
    ],
    primaryCta: "List Stand Space",
    secondaryCta: "Find Space for Custom Gear",
    image: "/images/accessories-jewellery.webp",
    iconName: "ShoppingBag",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Countertop Display Stand",
    roleSecondary: "wellness",
    categorySecondary: "Custom Gear",
  },
  {
    id: "healthy-snacks-showcase",
    eyebrow: "Category 07",
    title: "Healthy Travel & Highway Snacks",
    shortName: "Healthy Snacks",
    description:
      "Eye-level display shelves inside petrol bunk convenience stores and mart units for roasted nuts, protein snack bars, trail mix, and gourmet cookies.",
    suitableFor: [
      "Protein & energy granola bars",
      "Roasted makhana & dry fruit packs",
      "Gourmet cookies & baked chips",
      "Sugar-free mints & chewing gums",
      "Travel fruit bowls & chips",
    ],
    benefits: [
      "Great accompaniment for fuel stops",
      "Appeals to health-conscious commuters",
      "Steady daily sales volume",
      "In-store air-conditioned shelf placement",
    ],
    primaryCta: "List In-Store Shelf",
    secondaryCta: "Find Space for Snack Brand",
    image: "/images/kids-sustainable-fashion.webp",
    iconName: "Store",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "In-Store Mart Shelf Unit",
    roleSecondary: "wellness",
    categorySecondary: "Healthy Snacks",
  },
  {
    id: "engine-oil-care",
    eyebrow: "Category 08",
    title: "Engine Oil & Automotive Care",
    shortName: "Engine Oil & Care",
    description:
      "Dedicated automotive display racks for synthetic engine lubricants, chain clean & lube combos, car interior fragrances, and microfiber cleaning kits.",
    suitableFor: [
      "4T & 2T synthetic engine oils",
      "Chain cleaner & lubricant sprays",
      "Car air fresheners & diffusers",
      "Windshield washer concentrates",
      "Tyre shine & polish sprays",
    ],
    benefits: [
      "Direct customer relevance at fuel stations",
      "High utility and repeat purchases",
      "Weatherproof forecourt canopy placement",
      "Trusted partnership opportunity",
    ],
    primaryCta: "List Auto Care Space",
    secondaryCta: "Find Space for Auto Care Brand",
    image: "/images/main-showcase.webp",
    iconName: "Layers",
    rolePrimary: "gym-owner",
    spaceTypePrimary: "Forecourt Canopy Display Rack",
    roleSecondary: "wellness",
    categorySecondary: "Engine Oil & Care",
  },
];

export const SHOWCASE_TRUST_ITEMS = [
  { label: "Verified Petrol Pump Spaces", desc: "Curated & safety checked", iconName: "ShieldCheck" },
  { label: "High Commuter Footfall", desc: "Daily drivers & travelers", iconName: "Users" },
  { label: "Flexible Setup Options", desc: "Compact racks & kiosks", iconName: "Layers" },
  { label: "Dedicated Support", desc: "Pan-India assistance team", iconName: "Headphones" },
  { label: "Pan India Opportunities", desc: "Expanding pump networks", iconName: "MapPin" },
];


