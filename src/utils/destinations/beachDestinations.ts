
import { Destination } from "@/types/destination";
import { Budget } from "@/types/quiz";

export const getBeachDestinations = (budget: Budget): Destination[] => {
  const destinations: Destination[] = [];
  
  if (budget === 'budget') {
    destinations.push(
      {
        name: "Gokarna, Karnataka",
        accommodation: "Budget beach hostel",
        reason: "Peaceful beaches with budget-friendly stays",
        cost: "₹8,000 per person",
        duration: "3-4 days",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1074&auto=format&fit=crop"
      },
      {
        name: "Varkala, Kerala",
        accommodation: "Beach guesthouse",
        reason: "Cliff-side beaches with stunning views",
        cost: "₹9,500 per person",
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1580331451062-99ff207873a5?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Puri, Odisha",
        accommodation: "Budget seaside hotel",
        reason: "Sacred beach town with cultural importance",
        cost: "₹7,500 per person",
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?q=80&w=1470&auto=format&fit=crop"
      }
    );
  } else if (budget === 'moderate') {
    destinations.push(
      {
        name: "Andaman Islands",
        accommodation: "3-star beachfront resort",
        reason: "Pristine beaches with crystal clear water",
        cost: "₹32,000 per person",
        duration: "5-6 days",
        image: "https://images.unsplash.com/photo-1583591749989-0d1e8beae6da?q=80&w=1471&auto=format&fit=crop"
      },
      {
        name: "Lakshadweep",
        accommodation: "Island cottage resort",
        reason: "Secluded coral islands with turquoise waters",
        cost: "₹35,000 per person",
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=1473&auto=format&fit=crop"
      },
      {
        name: "Goa Premium Experience",
        accommodation: "4-star beach resort",
        reason: "Vibrant beaches with premium amenities",
        cost: "₹28,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1074&auto=format&fit=crop"
      }
    );
  } else {
    destinations.push(
      {
        name: "Maldives",
        accommodation: "Luxury overwater villa",
        reason: "Exclusive island experience with private beaches",
        cost: "₹95,000 per person",
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1365&auto=format&fit=crop"
      },
      {
        name: "Seychelles",
        accommodation: "Luxury beachfront villa",
        reason: "Pristine beaches with exclusive privacy",
        cost: "₹110,000 per person",
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Bali Private Resort",
        accommodation: "5-star private villa resort",
        reason: "Exclusive beach access with personal butler",
        cost: "₹88,000 per person",
        duration: "7-9 days",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1438&auto=format&fit=crop"
      }
    );
  }

  return destinations;
};
