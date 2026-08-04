export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  badge?: string;
  iconName?: string;
}

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    id: "organic-snacks",
    name: "Organic & Healthy Snacks",
    description: "Nutritious snacks, dry fruits, organic munchies, and health bars for drivers and commuters.",
    image: "/images/categories/organic-snacks.png",
    alt: "Organic and healthy snacks display rack",
    badge: "Best Seller"
  },
  {
    id: "cold-beverages",
    name: "Energy Drinks & Cold Beverages",
    description: "Chilled energy drinks, juices, iced teas, and cold beverages for instant highway refreshment.",
    image: "/images/categories/energy-drinks.png",
    alt: "Energy drinks and cold beverages display",
    badge: "High Demand"
  },
  {
    id: "vehicle-oils",
    name: "Engine Oils & Lubricants",
    description: "Premium synthetic engine oils, high-performance lubricants, and fluids available right at the pump.",
    image: "/images/categories/vehicles-oil.png",
    alt: "Vehicle engine oils and lubricants display",
    badge: "Essential"
  },
  {
    id: "helmet-store",
    name: "Helmets & Rider Safety Gear",
    description: "ISI-certified helmets, riding gloves, reflective gear, and safety accessories for commuters.",
    image: "/images/categories/helmet-store.png",
    alt: "Helmets and rider gear store setup",
    badge: "Popular"
  },
  {
    id: "helmet-cleaning",
    name: "Helmet Cleaning & Maintenance",
    description: "Automated helmet cleaning, visor care sprays, anti-fog solutions, and sanitization stations.",
    image: "/images/categories/helmet-cleaning.png",
    alt: "Helmet cleaning and maintenance station",
    badge: "New Service"
  },
  {
    id: "car-radium",
    name: "Car Radium & Auto Styling",
    description: "High-grade reflective radium stickers, custom graphics, warning tapes, and body striping.",
    image: "/images/categories/car-radium.png",
    alt: "Car radium and auto styling accessories",
    badge: "Trending"
  },
  {
    id: "store-kiosk",
    name: "Inside Store Kiosks & Display Counters",
    description: "Compact indoor kiosk counters for high-visibility product placement and retail brand sales.",
    image: "/images/categories/store-kiosk.png",
    alt: "Inside store kiosk counter display",
    badge: "High ROI"
  },
  {
    id: "riding-jackets",
    name: "Riding Jackets & Outdoor Apparel",
    description: "All-weather protective riding jackets, rain gear, high-vis coats, and commuter apparel racks.",
    image: "/images/categories/store-jackets.png",
    alt: "Outdoor riding jackets and apparel display",
    badge: "Featured"
  }
];
