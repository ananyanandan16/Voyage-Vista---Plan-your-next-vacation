
import { Destination } from "@/types/destination";
import { Budget } from "@/types/quiz";

export const getCityDestinations = (budget: Budget): Destination[] => {
  const destinations: Destination[] = [];
  
  if (budget === 'budget') {
    destinations.push(
      {
        name: "Jaipur, Rajasthan",
        accommodation: "Budget heritage hotel",
        reason: "Pink city with rich history and architecture",
        cost: "₹9,500 per person",
        duration: "3-4 days",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Kolkata, West Bengal",
        accommodation: "Colonial-era guesthouse",
        reason: "Cultural hub with historic architecture",
        cost: "₹8,000 per person",
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Pondicherry",
        accommodation: "French quarter homestay",
        reason: "Indo-French architecture and beach promenade",
        cost: "₹9,000 per person",
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=1374&auto=format&fit=crop"
      }
    );
  } else if (budget === 'moderate') {
    destinations.push(
      {
        name: "Bangkok, Thailand",
        accommodation: "4-star city hotel",
        reason: "Vibrant city with shopping, culture and nightlife",
        cost: "₹30,000 per person",
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop"
      },
      {
        name: "Istanbul, Turkey",
        accommodation: "Boutique hotel in historic district",
        reason: "Where East meets West with stunning architecture",
        cost: "₹35,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1528&auto=format&fit=crop"
      },
      {
        name: "Kuala Lumpur, Malaysia",
        accommodation: "City center apartment hotel",
        reason: "Modern skyline with cultural diversity",
        cost: "₹28,000 per person",
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f11?q=80&w=1528&auto=format&fit=crop"
      }
    );
  } else {
    destinations.push(
      {
        name: "Dubai, UAE",
        accommodation: "Luxury high-rise hotel",
        reason: "Futuristic city with luxury shopping and experiences",
        cost: "₹85,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1583997052830-a631794e8a08?q=80&w=1378&auto=format&fit=crop"
      },
      {
        name: "Tokyo, Japan",
        accommodation: "5-star city center hotel",
        reason: "Ultra-modern city with Michelin-star dining",
        cost: "₹95,000 per person",
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1788&auto=format&fit=crop"
      },
      {
        name: "London, UK",
        accommodation: "Luxury city apartment",
        reason: "Historic metropolis with world-class experiences",
        cost: "₹100,000 per person",
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop"
      }
    );
  }

  return destinations;
};
