export interface ServiceSupported {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: "nutrition" | "beverage" | "consultation" | "display";
}

export const SERVICES_SUPPORTED: ServiceSupported[] = [
  {
    id: "packaged-snacks",
    title: "Packaged Snacks & Munchies",
    description: "Ready-to-eat nuts, chips, muesli bars, and dry fruit mixes packaged for travelers.",
    iconName: "Cookie",
    category: "nutrition"
  },
  {
    id: "cold-beverages",
    title: "Cold Beverages & Energy Drinks",
    description: "Chilled juices, iced teas, hydration sports drinks, and cold coffee cans.",
    iconName: "Zap",
    category: "beverage"
  },
  {
    id: "car-care-products",
    title: "Car Care & Cleaning Gear",
    description: "Microfiber cleaning towels, dashboard polishes, car fresheners, and wiper fluids.",
    iconName: "Layers",
    category: "display"
  },
  {
    id: "helmets-riding-gear",
    title: "Helmets & Rider Protection",
    description: "Certified full-face & open-face helmets, riding gloves, and reflective rain jackets.",
    iconName: "ShieldCheck",
    category: "display"
  },
  {
    id: "phone-gadgets",
    title: "Fast Car Chargers & Mounts",
    description: "High-speed USB-C car chargers, magnetic phone mounts, power banks, and cables.",
    iconName: "Zap",
    category: "display"
  },
  {
    id: "bakery-items",
    title: "Bakery & Packaged Cakes",
    description: "Fresh packaged cookies, dry cakes, savory rolls, and tea biscuits.",
    iconName: "Utensils",
    category: "nutrition"
  },
  {
    id: "travel-hygiene",
    title: "Travel Hygiene & Personal Care",
    description: "Pocket perfumes, sanitizing wet wipes, tissues, and refreshing face mists.",
    iconName: "HeartPulse",
    category: "display"
  },
  {
    id: "auto-emergency",
    title: "Emergency Auto Equipment",
    description: "Multi-tool kits, LED emergency flashlights, tyre pressure gauges, and jumper cables.",
    iconName: "Trophy",
    category: "display"
  },
  {
    id: "product-sampling",
    title: "Brand Sampling & Displays",
    description: "Live product tasting or demonstration counters inside petrol pump forecourts.",
    iconName: "Gift",
    category: "display"
  },
  {
    id: "kiosk-promotions",
    title: "Promotional Kiosks & Standees",
    description: "Branded banner standees, promotional kiosks, and digital screen features.",
    iconName: "Megaphone",
    category: "display"
  }
];
