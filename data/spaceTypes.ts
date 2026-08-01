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
    image: "https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "mart-shelf",
    name: "In-Store Mart Shelf Unit",
    description: "High-visibility retail shelf unit inside the petrol station convenience mart.",
    iconName: "Store",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "countertop-display",
    name: "Countertop Display Stand",
    description: "Compact impulse display stand next to billing counters and pay stations.",
    iconName: "Grid",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "branded-kiosk",
    name: "Compact Branded Kiosk",
    description: "Modern mini kiosk setup for snacks, beverages, or automotive lifestyle products.",
    iconName: "Box",
    image: "https://images.unsplash.com/photo-1565515268393-272e796e625a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "ev-charging-lounge",
    name: "EV Charging Lounge Shelf",
    description: "Dedicated display rack inside EV driver lounge and waiting areas.",
    iconName: "Coffee",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "auto-care-stand",
    name: "Auto Care & Helmet Stand",
    description: "Promotional rack for certified helmets, rider gloves, and car care items.",
    iconName: "Gift",
    image: "https://images.unsplash.com/photo-1558981420-c532902e58b4?auto=format&fit=crop&q=80&w=800",
  },
];

export const RACK_SIZES = [
  { id: "small", name: "Small", dimensions: "Up to 3x2 ft" },
  { id: "medium", name: "Medium", dimensions: "3x2 ft to 6x3 ft" },
  { id: "large", name: "Large", dimensions: "6x3 ft to 10x5 ft" },
  { id: "custom", name: "Custom", dimensions: "Custom Forecourt Area" },
];
