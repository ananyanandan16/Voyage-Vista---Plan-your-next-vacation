
import { Destination } from "@/types/destination";

export const getDefaultDestinations = (): Destination[] => {
  return [
    {
      name: "Goa",
      accommodation: "Beachside resort",
      reason: "Popular destination with beaches and nightlife",
      cost: "₹15,000 per person",
      duration: "5 days",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1074&auto=format&fit=crop"
    },
    {
      name: "Munnar, Kerala",
      accommodation: "Tea plantation stay",
      reason: "Scenic hill station with lush tea gardens",
      cost: "₹20,000 per person",
      duration: "4 days",
      image: "https://images.unsplash.com/photo-1602308951223-90a14d7d6b26?q=80&w=1470&auto=format&fit=crop"
    },
    {
      name: "Udaipur, Rajasthan",
      accommodation: "Lakeside heritage hotel",
      reason: "City of lakes with rich cultural heritage",
      cost: "₹25,000 per person",
      duration: "5 days",
      image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1470&auto=format&fit=crop"
    }
  ];
};
