
import { Destination } from "@/types/destination";
import { Budget } from "@/types/quiz";

export const getCulturalDestinations = (budget: Budget): Destination[] => {
  const destinations: Destination[] = [];
  
  if (budget === 'budget') {
    destinations.push(
      {
        name: "Varanasi, Uttar Pradesh",
        accommodation: "Heritage guesthouse",
        reason: "Spiritual and cultural experience on the Ganges",
        cost: "₹7,500 per person",
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Hampi, Karnataka",
        accommodation: "Budget heritage homestay",
        reason: "Ancient ruins and temple architecture",
        cost: "₹8,000 per person",
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1590050752117-32da007de227?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Pushkar, Rajasthan",
        accommodation: "Traditional haveli stay",
        reason: "Sacred lake and vibrant cultural festivities",
        cost: "₹7,000 per person",
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1584810359583-96fc3448beaa?q=80&w=1469&auto=format&fit=crop"
      }
    );
  } else if (budget === 'moderate') {
    destinations.push(
      {
        name: "Rajasthan Heritage Tour",
        accommodation: "Heritage haveli stays",
        reason: "Rich cultural experience through palaces and forts",
        cost: "₹30,000 per person",
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Kerala Cultural Trail",
        accommodation: "Plantation homestays",
        reason: "Traditional art forms and temple architecture",
        cost: "₹27,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1602308951223-90a14d7d6b26?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Sikkim Monastery Tour",
        accommodation: "Premium mountain lodges",
        reason: "Buddhist monasteries and Himalayan culture",
        cost: "₹32,000 per person",
        duration: "6-7 days",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1470&auto=format&fit=crop"
      }
    );
  } else {
    destinations.push(
      {
        name: "Kyoto, Japan",
        accommodation: "Traditional ryokan",
        reason: "Immersive cultural experience in ancient Japan",
        cost: "₹85,000 per person",
        duration: "10 days",
        image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Florence & Tuscany, Italy",
        accommodation: "Luxury boutique hotel",
        reason: "Renaissance art and culinary masterpieces",
        cost: "₹95,000 per person",
        duration: "9-10 days",
        image: "https://images.unsplash.com/photo-1543429257-3eb0b65d9c58?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Bhutan Royal Experience",
        accommodation: "5-star heritage properties",
        reason: "Exclusive access to monasteries and cultural sites",
        cost: "₹80,000 per person",
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1518439179742-f9de669251f9?q=80&w=1443&auto=format&fit=crop"
      }
    );
  }

  return destinations;
};
