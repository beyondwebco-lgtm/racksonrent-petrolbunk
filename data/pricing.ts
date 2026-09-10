export interface PricingTier {
  id: string;
  title: string;
  targetRole: string;
  priceDisplay: string;
  period: string;
  description: string;
  features: string[];
  ctaLabel: string;
  roleType: "gym-owner" | "wellness";
  highlighted?: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "store-listing",
    title: "Petrol Pump Space Listing",
    targetRole: "For Petrol Pump Owners",
    priceDisplay: "Free",
    period: "Forever",
    description: "List your unused forecourt rack, counter, or store space and start earning monthly rental income.",
    features: [
      "Zero listing & registration fees",
      "Direct brand enquiry matching",
      "Set your own rent & space terms",
      "100% control over displayed brands"
    ],
    ctaLabel: "List Your Space",
    roleType: "gym-owner",
    highlighted: true
  },
  {
    id: "fashion-space-rental",
    title: "Brand Placement",
    targetRole: "For Startups & Brands",
    priceDisplay: "Enquiry-Based",
    period: "Flexible Terms",
    description: "Display your products inside top petrol pumps without high storefront overheads.",
    features: [
      "Targeted daily commuter audience",
      "Flexible rack sizes & space types",
      "Direct connection with petrol pump owners",
      "Pan-India fuel station matching"
    ],
    ctaLabel: "Find Petrol Pump Space",
    roleType: "wellness",
    highlighted: false
  }
];


