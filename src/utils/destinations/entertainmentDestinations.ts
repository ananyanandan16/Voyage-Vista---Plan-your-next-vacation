
import { Destination } from "@/types/destination";
import { Budget } from "@/types/quiz";

export const getEntertainmentDestinations = (budget: Budget): Destination[] => {
  const destinations: Destination[] = [];
  
  if (budget === 'budget') {
    destinations.push(
      {
        name: "Goa, India",
        accommodation: "Beach hostel",
        reason: "Beaches, nightlife and water activities",
        cost: "₹12,000 per person",
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Mumbai, Maharashtra",
        accommodation: "Budget city hotel",
        reason: "Bollywood experiences and vibrant nightlife",
        cost: "₹10,000 per person",
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1580581096469-8afb38d3dbd6?q=80&w=1528&auto=format&fit=crop"
      },
      {
        name: "Rishikesh, Uttarakhand",
        accommodation: "Riverside camp",
        reason: "Adventure sports and riverside music scene",
        cost: "₹9,000 per person",
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1549989476-69a92fa57c36?q=80&w=1470&auto=format&fit=crop"
      }
    );
  } else if (budget === 'moderate') {
    destinations.push(
      {
        name: "Phuket, Thailand",
        accommodation: "Beach resort",
        reason: "Beautiful beaches with entertainment and nightlife",
        cost: "₹35,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Bali, Indonesia",
        accommodation: "Villa with private pool",
        reason: "Beach clubs, water sports and cultural shows",
        cost: "₹38,000 per person",
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1438&auto=format&fit=crop"
      },
      {
        name: "Singapore City Experience",
        accommodation: "4-star city hotel",
        reason: "Theme parks, nightlife and entertainment districts",
        cost: "₹40,000 per person",
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1528&auto=format&fit=crop"
      }
    );
  } else {
    destinations.push(
      {
        name: "Las Vegas, USA",
        accommodation: "5-star casino resort",
        reason: "World-class entertainment, casinos and shows",
        cost: "₹110,000 per person",
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Ibiza, Spain",
        accommodation: "Luxury beachfront resort",
        reason: "Premium beach clubs and world-famous nightlife",
        cost: "₹95,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1607969886699-0a790dd83f38?q=80&w=1527&auto=format&fit=crop"
      },
      {
        name: "Macau, China",
        accommodation: "5-star integrated resort",
        reason: "Luxury entertainment, casinos and shows",
        cost: "₹90,000 per person",
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1555588746-5dcdfc8d9a12?q=80&w=1470&auto=format&fit=crop"
      }
    );
  }

  return destinations;
};
