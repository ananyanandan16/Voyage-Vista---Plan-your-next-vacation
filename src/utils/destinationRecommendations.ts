
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
      mockDestinations.push({
        name: "Gokarna, Karnataka",
        accommodation: "Budget beach hostel",
        reason: "Peaceful beaches with budget-friendly stays",
        cost: "₹8,000 per person",
        duration: "3-4 days",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1074&auto=format&fit=crop"
      });
    } else if (answers.budget === 'moderate') {
      mockDestinations.push({
        name: "Andaman Islands",
        accommodation: "3-star beachfront resort",
        reason: "Pristine beaches with crystal clear water",
        cost: "₹32,000 per person",
        duration: "5-6 days",
        image: "https://images.unsplash.com/photo-1583591749989-0d1e8beae6da?q=80&w=1471&auto=format&fit=crop"
      });
    } else {
      mockDestinations.push({
        name: "Maldives",
        accommodation: "Luxury overwater villa",
        reason: "Exclusive island experience with private beaches",
        cost: "₹95,000 per person",
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1365&auto=format&fit=crop"
      });
    }
  }
  
  if (answers.vacationType === 'cultural') {
    if (answers.budget === 'budget') {
      mockDestinations.push({
        name: "Varanasi, Uttar Pradesh",
        accommodation: "Heritage guesthouse",
        reason: "Spiritual and cultural experience on the Ganges",
        cost: "₹7,500 per person",
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=1470&auto=format&fit=crop"
      });
    } else if (answers.budget === 'moderate') {
      mockDestinations.push({
        name: "Rajasthan Heritage Tour",
        accommodation: "Heritage haveli stays",
        reason: "Rich cultural experience through palaces and forts",
        cost: "₹30,000 per person",
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1470&auto=format&fit=crop"
      });
    } else {
      mockDestinations.push({
        name: "Kyoto, Japan",
        accommodation: "Traditional ryokan",
        reason: "Immersive cultural experience in ancient Japan",
        cost: "₹85,000 per person",
        duration: "10 days",
        image: "https://images.unsplash.com/photo-1558862107-d49ef2a04d72?q=80&w=1470&auto=format&fit=crop"
      });
    }
  }
  
  if (answers.vacationType === 'nature') {
    if (answers.budget === 'budget') {
      mockDestinations.push({
        name: "Coorg, Karnataka",
        accommodation: "Homestay in coffee plantation",
        reason: "Lush green landscapes with waterfalls and trekking",
        cost: "₹9,000 per person",
        duration: "3 days",
        image: "https://images.unsplash.com/photo-1555952238-7d76789ba350?q=80&w=1470&auto=format&fit=crop"
      });
    } else if (answers.budget === 'moderate') {
      mockDestinations.push({
        name: "Himachal Pradesh",
        accommodation: "Mountain resort",
        reason: "Stunning mountain views with adventure activities",
        cost: "₹25,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1470&auto=format&fit=crop"
      });
    } else {
      mockDestinations.push({
        name: "Swiss Alps",
        accommodation: "Alpine luxury chalet",
        reason: "Breathtaking mountain scenery with premium experiences",
        cost: "₹90,000 per person",
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1531256379416-9f000e90aacc?q=80&w=1374&auto=format&fit=crop"
      });
    }
  }
  
  if (answers.vacationType === 'city') {
    if (answers.budget === 'budget') {
      mockDestinations.push({
        name: "Jaipur, Rajasthan",
        accommodation: "Budget heritage hotel",
        reason: "Pink city with rich history and architecture",
        cost: "₹9,500 per person",
        duration: "3-4 days",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1470&auto=format&fit=crop"
      });
    } else if (answers.budget === 'moderate') {
      mockDestinations.push({
        name: "Bangkok, Thailand",
        accommodation: "4-star city hotel",
        reason: "Vibrant city with shopping, culture and nightlife",
        cost: "₹30,000 per person",
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1563492065599-3520f775eeed?q=80&w=1974&auto=format&fit=crop"
      });
    } else {
      mockDestinations.push({
        name: "Dubai, UAE",
        accommodation: "Luxury high-rise hotel",
        reason: "Futuristic city with luxury shopping and experiences",
        cost: "₹85,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1583997052830-a631794e8a08?q=80&w=1378&auto=format&fit=crop"
      });
    }
  }
  
  if (answers.vacationType === 'entertainment') {
    if (answers.budget === 'budget') {
      mockDestinations.push({
        name: "Goa, India",
        accommodation: "Beach hostel",
        reason: "Beaches, nightlife and water activities",
        cost: "₹12,000 per person",
        duration: "4 days",
        image: "https://images.unsplash.com/photo-1614082242765-7c98ca0f3df3?q=80&w=1470&auto=format&fit=crop"
      });
    } else if (answers.budget === 'moderate') {
      mockDestinations.push({
        name: "Phuket, Thailand",
        accommodation: "Beach resort",
        reason: "Beautiful beaches with entertainment and nightlife",
        cost: "₹35,000 per person",
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=1374&auto=format&fit=crop"
      });
    } else {
      mockDestinations.push({
        name: "Las Vegas, USA",
        accommodation: "5-star casino resort",
        reason: "World-class entertainment, casinos and shows",
        cost: "₹110,000 per person",
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1374&auto=format&fit=crop"
      });
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
  return Array.from(new Map(mockDestinations.map(dest => [dest.name, dest])).values());
};
