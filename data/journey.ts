export interface JourneyStep {
  stepNumber: number;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  iconName: string;
  visualTag: string;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    stepNumber: 1,
    title: "Customer Visits the Petrol Pump",
    shortDescription: "Customers enter the petrol pump for fuel or other services.",
    detailedDescription: "Thousands of vehicle owners and commuters visit the petrol pump daily for refuelling, air checks, or convenience stops.",
    iconName: "UserCheck",
    visualTag: "Step 1"
  },
  {
    stepNumber: 2,
    title: "Available Space Is Listed",
    shortDescription: "The petrol pump owner offers an unused space for a retail rack or compact branded store.",
    detailedDescription: "Underutilised forecourt areas, retail corners, or indoor display zones are designated for retail rack placement.",
    iconName: "Maximize2",
    visualTag: "Step 2"
  },
  {
    stepNumber: 3,
    title: "Startup Sets Up the Display",
    shortDescription: "A startup or retail entrepreneur installs a professional product rack in the available space.",
    detailedDescription: "A compact branded rack or display stand is set up professionally with eye-catching branding.",
    iconName: "Store",
    visualTag: "Step 3"
  },
  {
    stepNumber: 4,
    title: "Products Are Showcased",
    shortDescription: "Customers can discover helmets, riding gear, safety products, accessories, custom designs, and other useful products.",
    detailedDescription: "High-demand accessories, certified helmets, riding gear, and custom items catch the attention of daily visitors.",
    iconName: "Eye",
    visualTag: "Step 4"
  },
  {
    stepNumber: 5,
    title: "Customer Selects a Product",
    shortDescription: "Customers explore the products, choose suitable items, and receive assistance from the retail entrepreneur.",
    detailedDescription: "Visitors inspect product features, try on helmets or gloves, and choose items suited to their needs.",
    iconName: "MessageCircle",
    visualTag: "Step 5"
  },
  {
    stepNumber: 6,
    title: "Customer Completes the Purchase",
    shortDescription: "The customer pays for the selected product while visiting the petrol pump.",
    detailedDescription: "Fast, convenient transactions happen directly at the petrol pump retail space.",
    iconName: "ShoppingBag",
    visualTag: "Step 6"
  },
  {
    stepNumber: 7,
    title: "Both Partners Grow",
    shortDescription: "The petrol pump owner earns rental income, the startup gains sales and visibility, and customers receive better services.",
    detailedDescription: "The petrol pump owner earns rental income, the startup gains sales and visibility, and customers enjoy access to essential products.",
    iconName: "TrendingUp",
    visualTag: "Step 7"
  }
];

