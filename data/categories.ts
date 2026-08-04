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
    id: "helmet-cleaning-vending",
    name: "Helmet Cleaning Vending Machine",
    description: "Automated UV-sterilization vending machines that clean, sanitize & fragrance helmets in minutes — right at the petrol pump.",
    image: "/images/categories/cat-helmet-cleaning-vending.jpg",
    alt: "Helmet Cleaning Vending Machine at petrol pump",
    badge: "New Service"
  },
  {
    id: "riding-gear-rack",
    name: "Riding Gear & Motorcycle Essentials",
    description: "Branded racks displaying riding jackets (Alpinestars, Dainese), gloves, hi-vis vests, and motorcycle accessories for commuters.",
    image: "/images/categories/cat-riding-gear-rack.jpg",
    alt: "Riding gear and motorcycle essentials rack at petrol station",
    badge: "High Demand"
  },
  {
    id: "energy-drinks-vending",
    name: "Energy Drinks Vending Machine",
    description: "Compact vending units stocked with Monster, Red Bull, Hell, Rockstar & more — giving riders an instant energy boost at refuel stops.",
    image: "/images/categories/cat-energy-drinks-vending.jpg",
    alt: "Energy drinks vending machine at petrol pump",
    badge: "Best Seller"
  },
  {
    id: "helmets-safety-gear",
    name: "Helmets & Safety Gear Display",
    description: "Premium helmet display racks featuring SMK, Axor, Royal Enfield certified helmets alongside riding gloves for on-the-spot purchase.",
    image: "/images/categories/cat-helmets-safety-gear.jpg",
    alt: "Helmets and safety gear display rack at IndianOil petrol pump",
    badge: "Popular"
  },
  {
    id: "radium-stickering",
    name: "Radium Works & Bike Stickering",
    description: "On-demand bike stickering kiosks offering radium designs, custom graphics, reflective stickers, and premium decals at petrol pumps.",
    image: "/images/categories/cat-radium-stickering.jpg",
    alt: "Radium works and bike stickering kiosk at IndianOil pump",
    badge: "Trending"
  },
  {
    id: "bike-gear-zone",
    name: "Bike Gear & Customization Zone",
    description: "Full-format retail kiosk with custom helmets, leather jackets, riding gloves, leather pouches, and bike customization accessories.",
    image: "/images/categories/cat-bike-gear-zone.jpg",
    alt: "Bike gear and customization zone kiosk at petrol pump",
    badge: "Featured"
  }
];
