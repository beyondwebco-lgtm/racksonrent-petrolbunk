export interface WhyChooseUsReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  isFeatured?: boolean;
}

export const WHY_CHOOSE_US_REASONS: WhyChooseUsReason[] = [
  {
    id: "high-footfall",
    title: "High-Footfall Locations",
    description: "Reach customers who already visit petrol pumps throughout the day.",
    iconName: "MapPin",
  },
  {
    id: "affordable-retail",
    title: "Affordable Retail Model",
    description: "Start offline selling without investing in a complete standalone store.",
    iconName: "Store",
    badge: "Most Accessible",
    isFeatured: true,
  },
  {
    id: "additional-income",
    title: "Additional Income",
    description: "Petrol pump owners can generate revenue from underutilised commercial space.",
    iconName: "IndianRupee",
  },
  {
    id: "simple-partnership",
    title: "Simple Partnership",
    description: "A straightforward model connecting space owners with growing retail brands.",
    iconName: "Handshake",
  },
  {
    id: "brand-visibility",
    title: "Brand Visibility",
    description: "Give products consistent real-world exposure in trusted neighbourhood locations.",
    iconName: "Megaphone",
  },
  {
    id: "scalable-opportunity",
    title: "Scalable Opportunity",
    description: "Expand the same retail model across multiple petrol pumps and cities.",
    iconName: "ChartNoAxesCombined",
  },
];

export const TRUST_BANNER = {
  headline: "Small Space. Big Opportunity.",
  subtext: "Turn unused petrol pump space into a new business opportunity, or showcase your brand inside high-footfall petrol pumps across India.",
  ctaText: "Get Started via WhatsApp",
  whatsappMessage: "Hello Racks on Rent, I would like to know more about petrol pump rack space opportunities!"
};

