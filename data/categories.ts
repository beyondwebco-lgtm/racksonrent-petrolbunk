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
    id: "sportswear",
    name: "Premium Sportswear",
    description: "High-performance sportswear, activewear, and athletic apparel for fitness enthusiasts on the go.",
    image: "/images/categories/sportswear.svg",
    alt: "Premium Sportswear",
    badge: "Trending"
  },
  {
    id: "rider-helmet",
    name: "Rider Helmets",
    description: "ISI-certified motorcycle helmets offering maximum safety, comfort, and sleek design for daily commuters.",
    image: "/images/categories/rider-helmet.webp",
    alt: "Rider Helmets",
    badge: "Essential"
  },
  {
    id: "protein-products",
    name: "Protein Products",
    description: "Whey protein powders, protein bars, and shakes for instant muscle recovery and energy boosts.",
    image: "/images/categories/protein-products.svg",
    alt: "Protein Products"
  },
  {
    id: "phone-mount",
    name: "Mobile Phone Mounts",
    description: "Sturdy and weather-resistant mobile phone mounts for safe navigation on bikes and cars.",
    image: "/images/categories/phone-mount.webp",
    alt: "Mobile Phone Mounts",
    badge: "Best Seller"
  },
  {
    id: "packaged-snacks",
    name: "Packaged Snacks",
    description: "A wide variety of packaged chips, munchies, and trail mixes to satisfy those quick hunger pangs.",
    image: "/images/categories/packaged-snacks.webp",
    alt: "Packaged Snacks",
    badge: "High Demand"
  },
  {
    id: "healthy-snacks",
    name: "Healthy Snacks",
    description: "Guilt-free healthy snacks, granola bars, and roasted seeds for mindful eating on the road.",
    image: "/images/categories/healthy-snacks.svg",
    alt: "Healthy Snacks"
  },
  {
    id: "gym-apparel",
    name: "Gym Apparel",
    description: "Breathable and stretchable gym wear designed for maximum comfort during intense workout sessions.",
    image: "/images/categories/gym-apparel.svg",
    alt: "Gym Apparel"
  },
  {
    id: "fitness-accessories",
    name: "Fitness Accessories",
    description: "Essential fitness gear including resistance bands, shaker bottles, and gym gloves.",
    image: "/images/categories/fitness-accessories.svg",
    alt: "Fitness Accessories"
  },
  {
    id: "cold-beverage",
    name: "Cold Beverages",
    description: "Chilled energy drinks, isotonic juices, and cold coffees to keep you refreshed and hydrated.",
    image: "/images/categories/cold-beverage.webp",
    alt: "Cold Beverages"
  },
  {
    id: "car-radium",
    name: "Car Radium & Graphics",
    description: "High-quality reflective radium stickers and custom automotive graphics for personalized vehicle styling.",
    image: "/images/categories/car-radium.png",
    alt: "Car Radium & Graphics"
  },
  {
    id: "car-care",
    name: "Car Care Products",
    description: "Premium microfiber cloths, dashboard polish, and washer fluids to keep your vehicle shining.",
    image: "/images/categories/car-care.webp",
    alt: "Car Care Products",
    badge: "Featured"
  }
];
