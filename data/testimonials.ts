export interface TestimonialSample {
  id: string;
  quote: string;
  authorTitle: string;
  category: "Petrol Pump Owner" | "Retail Brand Entrepreneur";
  location: string;
}

export const SAMPLE_TESTIMONIALS: TestimonialSample[] = [
  {
    id: "sample-1",
    quote: "Racks on Rent helped us turn an unused forecourt corner into a reliable monthly rental income stream while giving our refuelling customers convenient access to helmets and car accessories.",
    authorTitle: "HPCL Pump Franchisee",
    category: "Petrol Pump Owner",
    location: "Hyderabad"
  },
  {
    id: "sample-2",
    quote: "Displaying our auto care and phone accessory line at petrol pumps gives us direct exposure to thousands of drivers daily without the massive overhead of renting a full retail shop.",
    authorTitle: "Auto Accessories Brand Founder",
    category: "Retail Brand Entrepreneur",
    location: "Vijayawada"
  },
  {
    id: "sample-3",
    quote: "A seamless platform connecting fuel station owners with growing consumer brands. It's a true win-win for space monetization.",
    authorTitle: "BPCL Outlet Manager",
    category: "Petrol Pump Owner",
    location: "Bengaluru"
  }
];
