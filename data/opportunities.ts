export interface OpportunityExample {
  id: string;
  title: string;
  location: string;
  spaceType: string;
  suitableFor: string;
  approxSize: string;
  arrangement: string;
  badgeText: string;
  description: string;
  bgGradient: string;
}

export const SAMPLE_OPPORTUNITIES: OpportunityExample[] = [
  {
    id: "canopy-forecourt-rack",
    title: "Canopy Forecourt Display Rack",
    location: "Hyderabad (NH-65 Vijayawada Highway Pump)",
    spaceType: "Six-foot weather-protected vertical rack on main forecourt",
    suitableFor: "Helmets, riding gloves, motor oils, wiper fluids & car care",
    approxSize: "6 ft x 2 ft vertical display area",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "High Footfall",
    description: "Prime weather-protected forecourt rack positioned next to refuelling bays catering to 1200+ daily vehicles.",
    bgGradient: "from-blue-900/90 to-indigo-950/90"
  },
  {
    id: "convenience-store-shelf",
    title: "In-Store Mart Shelf Unit",
    location: "Vijayawada (Benz Circle BPCL Station)",
    spaceType: "Eye-level 4-tier retail display shelf inside petrol station mart",
    suitableFor: "Packaged snacks, energy bars, cold coffees, hygiene wipes",
    approxSize: "4 ft x 1.5 ft shelf unit",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Prime Indoor Spot",
    description: "High-visibility indoor shelf capturing every customer visiting the billing counter and restroom facilities.",
    bgGradient: "from-slate-900/90 to-blue-950/90"
  },
  {
    id: "qsr-beverage-kiosk",
    title: "Compact Beverage & Snack Kiosk",
    location: "Bengaluru (Outer Ring Road IOCL Outlet)",
    spaceType: "Compact semi-staffed retail corner near air/water station",
    suitableFor: "Ready tea/coffee, cold juices, packaged bakery goods",
    approxSize: "6 ft x 4 ft floor space",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "High Dwell Time",
    description: "Dedicated quick-bite refreshment station for commuters filling air, checking oil, or taking a quick break.",
    bgGradient: "from-emerald-950/90 to-teal-950/90"
  },
  {
    id: "auto-care-helmet-stand",
    title: "Auto Accessories & Helmet Stand",
    location: "Visakhapatnam (Beach Road Shell Station)",
    spaceType: "Dedicated branded display stand near entrance",
    suitableFor: "Rider helmets, car air fresheners, fast chargers, microfiber cloths",
    approxSize: "4 ft x 2 ft display stand",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Commuter Choice",
    description: "High-impact accessory stand targeting commuters, daily office drivers, and weekend highway travelers.",
    bgGradient: "from-cyan-950/90 to-blue-950/90"
  },
  {
    id: "ev-charging-lounge-corner",
    title: "EV Charging Lounge Display",
    location: "Chennai (OMR Expressway Reliance Station)",
    spaceType: "Indoor lounge shelf area adjacent to EV charging bays",
    suitableFor: "Premium travel gear, power banks, gourmet snacks, magazines",
    approxSize: "5 ft x 3 ft lounge space",
    arrangement: "Monthly Sublet Space Arrangement",
    badgeText: "Captive Audience",
    description: "Premium retail spot where EV owners relax for 20-40 minutes while their vehicles charge.",
    bgGradient: "from-amber-950/90 to-orange-950/90"
  },
  {
    id: "weekend-sampling-booth",
    title: "Weekend Brand Sampling Area",
    location: "Guntur (Inner Ring Road HPCL Pump)",
    spaceType: "Promotional sampling booth & standee space on canopy lawn",
    suitableFor: "New brand launches, tasting counters, auto product demos",
    approxSize: "6 ft x 6 ft promotional floor",
    arrangement: "Flexible Promotional Sublet",
    badgeText: "High Impact",
    description: "High-impact weekend promo spot for introducing new automotive, snack, or travel products to drivers.",
    bgGradient: "from-purple-950/90 to-indigo-950/90"
  }
];
