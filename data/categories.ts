export interface CategoryItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
  alt: string;
  badge?: string;
}

export const POPULAR_CATEGORIES: CategoryItem[] = [
  {
    id: "rider-helmets",
    name: "Rider Helmets",
    description: "Certified safety helmets, visor replacements, and rider protection gear.",
    iconName: "ShieldCheck",
    image: "/images/categories/rider-helmet.webp",
    alt: "Rider helmets and motorcycle safety gear display",
    badge: "Top Demand",
  },
  {
    id: "cold-beverages",
    name: "Cold Beverages",
    description: "Chilled energy drinks, cold brew, iced teas, and quick hydration cans.",
    iconName: "Sparkles",
    image: "/images/categories/cold-beverage.webp",
    alt: "Cold beverages and chilled energy drinks vending display",
    badge: "High Turnover",
  },
  {
    id: "healthy-snacks",
    name: "Healthy Snacks",
    description: "Protein bars, roasted nuts, energy bites, and nutritious highway snacks.",
    iconName: "Store",
    image: "/images/categories/organic-snacks.png",
    alt: "Healthy snack packs and protein energy bars counter",
    badge: "Commuter Favorite",
  },
  {
    id: "mobile-phone-mounts",
    name: "Mobile Phone Mounts",
    description: "Vibration-dampened bike & car phone holders, chargers, and navigation mounts.",
    iconName: "Layers",
    image: "/images/categories/phone-mount.webp",
    alt: "Mobile phone mounts and dashboard charging accessories",
    badge: "Trending",
  },
  {
    id: "packaged-snacks",
    name: "Packaged Snacks",
    description: "Chips, gourmet cookies, savory travel munchies, and confectionery items.",
    iconName: "ShoppingBag",
    image: "/images/categories/packaged-snacks.webp",
    alt: "Packaged snacks and grab-and-go treats display",
    badge: "Impulse Buy",
  },
  {
    id: "premium-sportswear",
    name: "Premium Sportswear",
    description: "Dry-fit tees, riding base layers, athletic apparel, and outdoor activewear.",
    iconName: "Store",
    image: "/images/categories/store-jackets.png",
    alt: "Premium sportswear and athletic riding apparel rack",
    badge: "Popular",
  },
  {
    id: "protein-products",
    name: "Protein Products",
    description: "Ready-to-drink protein shakes, single-serve supplements, and fitness nutrition.",
    iconName: "Sparkles",
    image: "/images/categories/energy-drinks.png",
    alt: "Protein products and workout supplement drinks display",
    badge: "High Margin",
  },
  {
    id: "fitness-accessories",
    name: "Fitness Accessories",
    description: "Shaker bottles, gym grips, sweatbands, and travel fitness essentials.",
    iconName: "HeartHandshake",
    image: "/images/categories/first-aid-pouch.webp",
    alt: "Fitness accessories and commuter travel essentials showcase",
    badge: "Featured",
  },
  {
    id: "gym-apparel",
    name: "Gym Apparel",
    description: "Performance tanks, training shorts, joggers, and compression wear.",
    iconName: "Layers",
    image: "/images/categories/store-jackets.png",
    alt: "Gym apparel and athletic lifestyle clothing display",
    badge: "New",
  },
];


