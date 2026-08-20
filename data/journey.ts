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

export const BUNK_OWNER_STEPS = [
  {
    stepNumber: 1,
    title: "You Have Unused Space",
    shortDescription: "Canopy areas, corners, walls or any empty space in your petrol pump that is not fully utilized.",
    detailedDescription: "It's an opportunity!",
    image: "/images/Step_01_Unused_Space.jpg",
    iconName: "Maximize2",
    highlights: [
      "Canopy areas, corners, walls, or waiting zones",
      "Any vacant space can be monetized easily"
    ],
    featuredHighlight: "Turn idle space into income"
  },
  {
    stepNumber: 2,
    title: "List Your Space With Racks On Rent",
    shortDescription: "We help you list your available space. No investment, no setup cost, no maintenance.",
    detailedDescription: "We manage everything! ZERO INVESTMENT, ZERO HASSLE, WE HANDLE EVERYTHING",
    image: "/images/Step_02_List_Your_Space.jpg",
    iconName: "CheckCircle2",
    highlights: [
      "No setup cost or investment needed",
      "Complete platform listing management by Racks on Rent"
    ],
    featuredHighlight: "Zero Investment • Zero Hassle"
  },
  {
    stepNumber: 3,
    title: "Entrepreneurs Book Your Space",
    shortDescription: "Verified entrepreneurs looking to display and sell their products book your space through us.",
    detailedDescription: "You get a reliable partner.",
    image: "/images/Step_03_Entrepreneurs_Book.jpg",
    iconName: "UserCheck",
    highlights: [
      "Get matched with verified, reputable entrepreneurs",
      "Secure bookings with transparent agreements"
    ],
    featuredHighlight: "Get a Reliable Partner"
  },
  {
    stepNumber: 4,
    title: "They Display & Sell Their Products",
    shortDescription: "Entrepreneurs run their business from your space. You don't have to worry about operations.",
    detailedDescription: "More variety for your customers!",
    image: "/images/Step_04_Display_and_Sell.jpg",
    iconName: "Store",
    highlights: [
      "Zero operational overhead for the pump owner",
      "Adds product variety and value for your fuel customers"
    ],
    featuredHighlight: "More Variety for Customers"
  },
  {
    stepNumber: 5,
    title: "You Earn Extra Income Every Month",
    shortDescription: "You earn a fixed rent for your space regularly without any extra effort.",
    detailedDescription: "Extra income. Every month. MONTHLY RENT IN YOUR ACCOUNT, STEADY INCOME, ZERO RISK",
    image: "/images/Step_05_Extra_Income.jpg",
    iconName: "TrendingUp",
    highlights: [
      "Earn a fixed, predictable rental amount monthly",
      "100% passive income from underutilized real estate"
    ],
    featuredHighlight: "Steady Income • Zero Risk"
  },
  {
    stepNumber: 6,
    title: "You Grow. They Grow. Together.",
    shortDescription: "More businesses at your pump = more footfall, more sales, more growth for everyone.",
    detailedDescription: "Your unused space. Their growth. Your income.",
    image: "/images/Step_06_Grow_Together.jpg",
    iconName: "Users",
    highlights: [
      "Increase pump footfall & attract premium shoppers",
      "Win-win partnership model for shared prosperity"
    ],
    featuredHighlight: "One Space. Shared Growth."
  }
];

export const BRAND_STEPS = [
  {
    stepNumber: 1,
    title: "Discover Spaces Near You",
    shortDescription: "Search nearby petrol pumps and public places on Racks on Rent platform.",
    detailedDescription: "Find the right space for your business.",
    image: "/images/Entrepreneurs_Infographic~2.jpg",
    iconName: "Maximize2",
    highlights: [
      "Access a map of premium high-traffic petrol bunks",
      "Check space availability and location details instantly"
    ],
    featuredHighlight: "Find the Right Space"
  },
  {
    stepNumber: 2,
    title: "Choose & View The Space",
    shortDescription: "View space details, photos, size, rent and facilities.",
    detailedDescription: "Pick the perfect space that fits your needs.",
    image: "/images/Entrepreneurs_Infographic~3.jpg",
    iconName: "Eye",
    highlights: [
      "Compare dimensions, monthly rent, and footfall statistics",
      "View actual photos and structural specifications"
    ],
    featuredHighlight: "Pick the Perfect Space"
  },
  {
    stepNumber: 3,
    title: "Book & Connect With Owner",
    shortDescription: "Book your space securely through the platform.",
    detailedDescription: "We connect you with the petrol pump owner.",
    image: "/images/Entrepreneurs_Infographic~4.jpg",
    iconName: "UserCheck",
    highlights: [
      "Secure transaction and agreement process online",
      "Direct verification and communication with the pump owner"
    ],
    featuredHighlight: "Secure Online Booking"
  },
  {
    stepNumber: 4,
    title: "Setup Your Rack & Display Products",
    shortDescription: "Set up your rack easily in the allotted space.",
    detailedDescription: "Display your products at a prime location.",
    image: "/images/Entrepreneurs_Infographic~5.jpg",
    iconName: "Store",
    highlights: [
      "Professional layout design templates available",
      "Clean, swift, and non-disruptive physical installation"
    ],
    featuredHighlight: "Display at Prime Locations"
  },
  {
    stepNumber: 5,
    title: "Sell, Earn & Grow Your Business",
    shortDescription: "Start selling to thousands of daily customers.",
    detailedDescription: "More sales. More income. Grow your brand.",
    image: "/images/Entrepreneurs_Infographic~6.jpg",
    iconName: "TrendingUp",
    highlights: [
      "Leverage thousands of daily footfall events immediately",
      "Tap into high-impulse buying behavior of commuters"
    ],
    featuredHighlight: "More Sales • More Income"
  },
  {
    stepNumber: 6,
    title: "Build Your Brand. Expand Further.",
    shortDescription: "Rebook, take more spaces or expand to other locations.",
    detailedDescription: "Scale your business smarter with us.",
    image: "/images/Entrepreneurs_Infographic~7.jpg",
    iconName: "TrendingUp",
    highlights: [
      "Expand effortlessly to multiple locations via one account",
      "Scale up your retail network step-by-step with ease"
    ],
    featuredHighlight: "Scale Smarter & Faster"
  }
];

export const PREMIUM_STEPS = [
  {
    stepNumber: "01",
    title: "Identify Your Unused Space",
    shortDescription: "Petrol bunk owners can identify empty or underutilized areas within their property.",
    highlights: [
      "Use entrances, side areas, waiting zones or vacant corners",
      "Convert unused space into a new earning opportunity"
    ],
    featuredHighlight: "Turn idle space into income",
    image: "/images/step_01_unused_space.png"
  },
  {
    stepNumber: "02",
    title: "List Your Space on Racks on Rent",
    shortDescription: "The property owner can submit the available space through a simple listing process.",
    highlights: [
      "Add location, available area, photos and preferred rent",
      "No major investment or complicated setup required"
    ],
    featuredHighlight: "Zero investment • Simple listing",
    image: "/images/step_02_list_space.png"
  },
  {
    stepNumber: "03",
    title: "Connect With Verified Entrepreneurs",
    shortDescription: "Suitable entrepreneurs and retail brands can discover the listed space.",
    highlights: [
      "Receive interest from verified businesses",
      "Review the business category before accepting"
    ],
    featuredHighlight: "Choose the right retail partner",
    image: "/images/step_03_connect.png"
  },
  {
    stepNumber: "04",
    title: "Set Up the Retail Display",
    shortDescription: "The selected entrepreneur installs the rack, kiosk or compact retail setup.",
    highlights: [
      "Products are professionally arranged and displayed",
      "Setup should not disturb regular petrol bunk operations"
    ],
    featuredHighlight: "Quick and organised setup",
    image: "/images/step_04_setup.png"
  },
  {
    stepNumber: "05",
    title: "Earn Monthly Rental Income",
    shortDescription: "The space owner receives a fixed monthly rental amount from the selected partner.",
    highlights: [
      "Generate additional income from existing property",
      "Create a predictable recurring revenue stream"
    ],
    featuredHighlight: "Steady monthly income • Zero risk",
    image: "/images/step_05_earn.png"
  },
  {
    stepNumber: "06",
    title: "Grow Together",
    shortDescription: "The petrol bunk owner, entrepreneur and customers benefit from the partnership.",
    highlights: [
      "Customers receive convenient access to useful products",
      "Both businesses benefit from increased visibility and sales"
    ],
    featuredHighlight: "One space. Two businesses. Shared growth.",
    image: "/images/step_06_grow.png"
  }
];

