export interface SpaceTypeItem {
  id: string;
  name: string;
  description: string;
  iconName: string;
  image: string;
}

export const COMPACT_SPACE_TYPES: SpaceTypeItem[] = [
  {
    id: "forecourt-rack",
    name: "Forecourt Canopy Display Rack",
    description: "Weather-protected vertical floor rack on the main petrol station forecourt area.",
    iconName: "Layers",
    image: "/images/spaceTypes/forecourt.png",
  },
  {
    id: "mart-shelf",
    name: "In-Store Mart Shelf Unit",
    description: "High-visibility retail shelf unit inside the petrol station convenience mart.",
    iconName: "Store",
    image: "/images/spaceTypes/mart-shelf.png",
  },
  {
    id: "countertop-display",
    name: "Countertop Display Stand",
    description: "Compact impulse display stand next to billing counters and pay stations.",
    iconName: "Grid",
    image: "/images/spaceTypes/countertop.png",
  },
  {
    id: "branded-kiosk",
    name: "Compact Branded Kiosk",
    description: "Modern mini kiosk setup for snacks, beverages, or automotive lifestyle products.",
    iconName: "Box",
    image: "/images/spaceTypes/kiosk.png",
  },
  {
    id: "ev-charging-lounge",
    name: "EV Charging Lounge Shelf",
    description: "Dedicated display rack inside EV driver lounge and waiting areas.",
    iconName: "Coffee",
    image: "/images/spaceTypes/ev-lounge.png",
  },
  {
    id: "auto-care-stand",
    name: "Auto Care & Helmet Stand",
    description: "Promotional rack for certified helmets, rider gloves, and car care items.",
    iconName: "Gift",
    image: "/images/spaceTypes/auto-care.png",
  },
];

export const RACK_SIZES = [
  { id: "small", name: "Small", dimensions: "Up to 3x2 ft" },
  { id: "medium", name: "Medium", dimensions: "3x2 ft to 6x3 ft" },
  { id: "large", name: "Large", dimensions: "6x3 ft to 10x5 ft" },
  { id: "custom", name: "Custom", dimensions: "Custom Forecourt Area" },
];
