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
    id: "packaged-snacks",
    name: "Packaged Snacks & Munchies",
    description: "Nutritious nuts, dried fruits, chips, energy bars, and high-margin packaged munchies for drivers.",
    image: "/images/categories/healthy-snacks.svg",
    alt: "Packaged snacks and munchies for travelers",
    badge: "Popular"
  },
  {
    id: "cold-beverages",
    name: "Cold Beverages & Energy Drinks",
    description: "Chilled juices, iced teas, energy boosters, flavored waters, and cold coffees for quick refreshment.",
    image: "/images/categories/protein-products.svg",
    alt: "Cold beverages and energy drinks jar",
    badge: "High Demand"
  },
  {
    id: "auto-care",
    name: "Car Care & Auto Accessories",
    description: "Microfiber cloths, car air fresheners, wiper fluids, dashboard shiners, and emergency tools.",
    image: "/images/categories/fitness-accessories.svg",
    alt: "Car care and auto accessories",
    badge: "Trending"
  },
  {
    id: "helmets-safety",
    name: "Helmets & Rider Safety Gear",
    description: "ISRO/DOT certified helmets, riding gloves, rain gear, and reflective safety jackets for commuters.",
    image: "/images/categories/gym-apparel.svg",
    alt: "Certified helmets and rider safety gear"
  },
  {
    id: "travel-gadgets",
    name: "Travel & Phone Accessories",
    description: "Fast car chargers, phone mounts, power banks, aux cables, and bluetooth hands-free devices.",
    image: "/images/categories/wellness-products.svg",
    alt: "Travel and phone accessory kit"
  },
  {
    id: "bakery-bites",
    name: "Bakery & Fresh Quick Bites",
    description: "Packaged cookies, muffins, dry cakes, savory rolls, and baked snacks for road trips.",
    image: "/images/categories/supplements.svg",
    alt: "Fresh packaged bakery bites"
  },
  {
    id: "hygiene-grooming",
    name: "Hygiene & Personal Care",
    description: "Pocket perfumes, wet wipes, hand sanitizers, tissues, and refreshing face sprays.",
    image: "/images/categories/yoga-essentials.svg",
    alt: "Hygiene and personal care items"
  },
  {
    id: "emergency-supplies",
    name: "Emergency & Car Survival Gear",
    description: "Multi-tool kits, LED emergency flashlights, tyre pressure gauges, and first-aid pouches.",
    image: "/images/categories/sportswear.svg",
    alt: "Car emergency tools and survival gear"
  }
];
