
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { MapPin, Hotel, DollarSign, CalendarDays } from "lucide-react";
import { QuizAnswers } from '@/types/quiz';

interface Destination {
  name: string;
  accommodation: string;
  reason: string;
  cost: string;
  duration: string;
  image: string;
}

const Results = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswers | null>(null);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Retrieve quiz answers from session storage
    const storedAnswers = sessionStorage.getItem('quizAnswers');
    if (!storedAnswers) {
      toast({
        title: "No quiz data found",
        description: "Please complete the quiz first.",
        variant: "destructive",
      });
      navigate('/quiz');
      return;
    }

    const answers = JSON.parse(storedAnswers);
    setQuizAnswers(answers);
    
    // Generate destination recommendations based on answers
    generateRecommendations(answers);
  }, [navigate, toast]);

  const generateRecommendations = (answers: QuizAnswers) => {
    setLoading(true);
    
    // This is a mock implementation - in a real app, this would call an API
    // that uses a recommendation algorithm based on the user's preferences
    
    // Sample destinations based on preferences
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
    
    // Ensure we have exactly 3 recommendations
    while (mockDestinations.length < 3) {
      // Add default recommendations if we don't have enough
      if (answers.budget === 'budget') {
        mockDestinations.push({
          name: "Pondicherry",
          accommodation: "Boutique guesthouse",
          reason: "French colonial charm with beaches",
          cost: "₹9,500 per person",
          duration: "3 days",
          image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1470&auto=format&fit=crop"
        });
      } else if (answers.budget === 'moderate') {
        mockDestinations.push({
          name: "Darjeeling",
          accommodation: "Heritage hill resort",
          reason: "Colonial hill station with tea gardens and mountain views",
          cost: "₹22,000 per person",
          duration: "5 days",
          image: "https://images.unsplash.com/photo-1544134543-c774d5cbb4bc?q=80&w=1470&auto=format&fit=crop"
        });
      } else {
        mockDestinations.push({
          name: "Bali, Indonesia",
          accommodation: "Luxury villa with private pool",
          reason: "Tropical paradise with cultural experiences",
          cost: "₹70,000 per person",
          duration: "7 days",
          image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1438&auto=format&fit=crop"
        });
      }
    }
    
    // Limit to 3 destinations
    setDestinations(mockDestinations.slice(0, 3));
    setLoading(false);
  };

  const handleStartOver = () => {
    // Clear session storage and go back to first quiz page
    sessionStorage.removeItem('quizAnswers');
    navigate('/quiz');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-8">Finding your perfect destinations...</h1>
        <div className="animate-pulse space-y-4 w-full max-w-3xl">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-64 bg-gray-200 rounded-lg w-full"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-2">Your Perfect Destinations</h1>
      <p className="text-center text-muted-foreground mb-8">
        Based on your preferences, we've found these destinations for you
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {destinations.map((destination, index) => (
          <Card key={index} className="overflow-hidden h-full flex flex-col">
            <div className="h-48 overflow-hidden">
              <img 
                src={destination.image} 
                alt={destination.name}
                className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
              />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-travel-blue" />
                    {destination.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    <Hotel className="h-4 w-4" />
                    {destination.accommodation}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="space-y-3">
                <div>
                  <h4 className="text-sm font-medium">Why this destination?</h4>
                  <p className="text-sm text-muted-foreground">{destination.reason}</p>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium">{destination.cost}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-orange-500" />
                  <span className="text-sm font-medium">Recommended: {destination.duration}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-travel-blue hover:bg-travel-blue/90">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center">
        <Button variant="outline" onClick={handleStartOver} className="mr-4">
          Start Over
        </Button>
        <Button className="bg-travel-blue hover:bg-travel-blue/90">
          Save Favorites
        </Button>
      </div>
    </div>
  );
};

export default Results;
