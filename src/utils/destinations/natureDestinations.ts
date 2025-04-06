
import { Destination } from "@/types/destination";
import { Budget } from "@/types/quiz";

export const getNatureDestinations = (budget: Budget): Destination[] => {
  const destinations: Destination[] = [];
  
  if (budget === 'budget') {
    destinations.push(
      {
        name: "Coorg, Karnataka",
        accommodation: "Homestay in coffee plantation",
        reason: "Lush green landscapes with waterfalls and trekking",
        cost: "₹9,000 per person",
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1555952238-7d76789ba350?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Wayanad, Kerala",
        accommodation: "Budget treehouse stay",
        reason: "Wildlife sanctuary and rainforest trails",
        cost: "₹8,500 per person",
        duration: "3-4 days",
        image: "https://images.unsplash.com/photo-1595815771614-ade949af5a8d?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Parvati Valley, Himachal",
        accommodation: "Riverside cottage",
        reason: "Pristine mountain trails and traditional villages",
        cost: "₹7,500 per person",
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop"
      }
    );
  } else if (budget === 'moderate') {
    destinations.push(
      {
        name: "Himachal Pradesh",
        accommodation: "Mountain resort",
        reason: "Stunning mountain views with adventure activities",
        cost: "₹25,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Kaziranga, Assam",
        accommodation: "Wildlife lodge",
        reason: "One-horned rhino and wildlife safaris",
        cost: "₹28,000 per person",
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1471&auto=format&fit=crop"
      },
      {
        name: "Ladakh Valley Tour",
        accommodation: "Premium tent camps",
        reason: "High-altitude lakes and spectacular landscapes",
        cost: "₹32,000 per person",
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1533450718592-29d45635f0a9?q=80&w=1470&auto=format&fit=crop"
      }
    );
  } else {
    destinations.push(
      {
        name: "Swiss Alps",
        accommodation: "Alpine luxury chalet",
        reason: "Breathtaking mountain scenery with premium experiences",
        cost: "₹90,000 per person",
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Patagonia, Argentina",
        accommodation: "Exclusive wilderness lodge",
        reason: "Remote landscapes and glacier expeditions",
        cost: "₹110,000 per person",
        duration: "10 days",
        image: "https://images.unsplash.com/photo-1531429745839-52e76f851d35?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "New Zealand Alpine Tour",
        accommodation: "Luxury mountain retreats",
        reason: "Pristine wilderness with helicopter excursions",
        cost: "₹120,000 per person",
        duration: "12 days",
        image: "https://images.unsplash.com/photo-1518667140698-89237b2dd3c7?q=80&w=1470&auto=format&fit=crop"
      }
    );
  }

  return destinations;
};
