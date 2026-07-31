export const WHY_CHOOSE_US = [
  {
    id: "high-footfall",
    title: "High-Footfall Locations",
    description: "Access thousands of daily commuters and travelers refuelling at petrol pumps.",
    iconName: "ShieldCheck"
  },
  {
    id: "affordable-model",
    title: "Affordable Retail Model",
    description: "Start selling offline without opening a complete standalone store.",
    iconName: "Lock"
  },
  {
    id: "additional-income",
    title: "Additional Income",
    description: "Petrol pump owners earn passive rent from space that would otherwise stay idle.",
    iconName: "Headphones"
  },
  {
    id: "simple-partnership",
    title: "Simple Partnership",
    description: "A straightforward model connecting fuel station owners with emerging brands.",
    iconName: "TrendingUp"
  }
];

export const ROLE_CARDS = [
  {
    id: "petrol-pump-owner",
    role: "bunk-owner" as const,
    heading: "Benefits for Petrol Pump Owners",
    text: "Convert unused commercial space into a reliable monthly rental income source without starting or managing another retail business.",
    benefits: [
      "Earn additional rental income from unused space",
      "Zero capital investment or operational risk",
      "Increase customer engagement & footfall",
      "Improve customer retention & convenience",
      "Provide added value to daily commuters",
      "Enhance fuel station brand reputation",
      "Create long-term rental partnerships",
      "Support emerging local startups & brands"
    ],
    ctaLabel: "Rent Out Your Space",
  },
  {
    id: "startup",
    role: "brand-merchant" as const,
    heading: "Benefits for Startups and Retail Brands",
    text: "Launch or expand your offline presence through affordable retail spaces at high-footfall petrol pump locations across India.",
    benefits: [
      "Low investment and reduced business risk",
      "Affordable monthly rental model",
      "Direct access to thousands of daily commuters",
      "High-visibility physical forecourt placement",
      "Showcase products professionally",
      "Build real-world brand awareness",
      "Generate direct sales and leads",
      "Rapidly expand into multiple petrol pumps",
      "Test new markets before opening a full store"
    ],
    ctaLabel: "Find a Rack Space",
  },
];

export const BENEFITS_COMPARISON = {
  petrolPumpOwners: {
    title: "Petrol Pump Owner",
    points: [
      "Steady extra income from sublet rack space",
      "No need to manage or operate the retail business",
      "Maximized utilization of forecourt & store property",
      "Increased customer engagement & dwell time",
      "More amenities available for visitors",
      "Stronger long-term commercial property value",
    ],
  },
  startups: {
    title: "Startup or Retail Entrepreneur",
    points: [
      "Affordable offline retail entry point",
      "Minimal capital expenditure & low risk",
      "Immediate access to captive driver footfall",
      "Unmatched high-frequency brand exposure",
      "Boosted impulse product purchases",
      "Easy multi-station expansion opportunities",
    ],
  },
};
