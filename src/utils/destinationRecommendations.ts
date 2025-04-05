
import { QuizAnswers, VacationType, Budget } from "@/types/quiz";

export interface Destination {
  name: string;
  accommodation: string;
  reason: string;
  cost: string;
  duration: string;
  image: string;
}

export const generateRecommendations = (answers: QuizAnswers): Destination[] => {
  const mockDestinations: Destination[] = [];
  
  if (answers.vacationType === 'beach') {
    if (answers.budget === 'budget') {
      mockDestinations.push(
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
    } else if (answers.budget === 'moderate') {
      mockDestinations.push(
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
      mockDestinations.push(
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
  }
  
  if (answers.vacationType === 'cultural') {
    if (answers.budget === 'budget') {
      mockDestinations.push(
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
    } else if (answers.budget === 'moderate') {
      mockDestinations.push(
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
      mockDestinations.push(
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
  }
  
  if (answers.vacationType === 'nature') {
    if (answers.budget === 'budget') {
      mockDestinations.push(
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
    } else if (answers.budget === 'moderate') {
      mockDestinations.push(
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
      mockDestinations.push(
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
  }
  
  if (answers.vacationType === 'city') {
    if (answers.budget === 'budget') {
      mockDestinations.push(
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
    } else if (answers.budget === 'moderate') {
      mockDestinations.push(
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
      mockDestinations.push(
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
  }
  
  if (answers.vacationType === 'entertainment') {
    if (answers.budget === 'budget') {
      mockDestinations.push(
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
    } else if (answers.budget === 'moderate') {
      mockDestinations.push(
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
      mockDestinations.push(
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
  }
  
  // Default recommendations if no matches
  if (mockDestinations.length === 0) {
    mockDestinations.push(
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
    );
  }

  // Ensure we have unique recommendations (no duplicates)
  const uniqueDestinations = Array.from(new Map(mockDestinations.map(dest => [dest.name, dest])).values());
  
  // Return up to 3 destinations
  return uniqueDestinations.slice(0, 3);
};
