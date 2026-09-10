export interface SpaceTypeItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export const COMPACT_SPACE_TYPES: SpaceTypeItem[] = [
  {
    id: "forecourt-canopy",
    name: "Forecourt Canopy Display Rack",
    description: "Weather-protected vertical floor rack on the main petrol station forecourt area.",
    iconName: "Store",
  },
  {
    id: "in-store-mart",
    name: "In-Store Mart Shelf Unit",
    description: "High-visibility retail shelf unit inside the petrol station convenience mart.",
    iconName: "Layers",
  },
  {
    id: "countertop-stand",
    name: "Countertop Display Stand",
    description: "Compact impulse display stand next to billing counters and pay stations.",
    iconName: "ShoppingBag",
  },
  {
    id: "branded-kiosk",
    name: "Compact Branded Kiosk",
    description: "Modern mini kiosk setup for snacks, beverages, or automotive lifestyle products.",
    iconName: "Sparkles",
  },
  {
    id: "ev-lounge-shelf",
    name: "EV Charging Lounge Shelf",
    description: "Dedicated display rack inside EV driver lounge and waiting areas.",
    iconName: "Maximize",
  },
  {
    id: "auto-care-stand",
    name: "Auto Care & Helmet Stand",
    description: "Promotional rack for certified helmets, rider gloves, and car care items.",
    iconName: "ShieldCheck",
  },
];

export const RACK_SIZES = [
  { id: "small", name: "Small (Up to 3x2 ft)", dimensions: "Up to 3x2 ft" },
  { id: "medium", name: "Medium (3x2 ft to 6x3 ft)", dimensions: "3x2 ft to 6x3 ft" },
  { id: "large", name: "Large (6x3 ft to 10x5 ft)", dimensions: "6x3 ft to 10x5 ft" },
  { id: "custom", name: "Custom (Custom Forecourt Area)", dimensions: "Custom Forecourt Area" },
];


