export interface WhyChooseUsReason {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export const WHY_CHOOSE_US_REASONS: WhyChooseUsReason[] = [
  {
    id: "high-footfall",
    title: "High-Footfall Locations",
    description: "Access customers who regularly visit petrol pumps.",
    iconName: "Target"
  },
  {
    id: "affordable-retail",
    title: "Affordable Retail Model",
    description: "Start selling offline without opening a complete standalone store.",
    iconName: "BadgePercent"
  },
  {
    id: "additional-income",
    title: "Additional Income",
    description: "Petrol pump owners earn from space that may otherwise remain unused.",
    iconName: "PieChart"
  },
  {
    id: "simple-partnership",
    title: "Simple Partnership",
    description: "A straightforward model connecting space owners and entrepreneurs.",
    iconName: "HeartHandshake"
  },
  {
    id: "brand-visibility",
    title: "Brand Visibility",
    description: "Startups gain real-world exposure in prominent locations.",
    iconName: "Users"
  },
  {
    id: "scalable-opportunity",
    title: "Scalable Opportunity",
    description: "The model can be expanded across multiple petrol pumps and cities.",
    iconName: "Rocket"
  }
];

export const TRUST_BANNER = {
  headline: "Small Space. Big Opportunity.",
  subtext: "Turn unused petrol pump space into a new business opportunity, or showcase your brand inside high-footfall petrol pumps across India.",
  ctaText: "Get Started via WhatsApp",
  whatsappMessage: "Hello Racks on Rent, I would like to know more about petrol pump rack space opportunities!"
};

