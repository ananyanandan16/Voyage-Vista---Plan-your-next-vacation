
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { QuizAnswers } from '@/types/quiz';
import { Destination } from '@/types/destination';
import { generateRecommendations } from '@/utils/destinationRecommendations';
import DestinationCard from '@/components/destination/DestinationCard';
import DestinationSkeleton from '@/components/destination/DestinationSkeleton';

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
    const recommendedDestinations = generateRecommendations(answers);
    
    // Take at most 3 destinations
    setDestinations(recommendedDestinations.slice(0, 3));
    setLoading(false);
  }, [navigate, toast]);

  const handleStartOver = () => {
    // Clear session storage and go back to first quiz page
    sessionStorage.removeItem('quizAnswers');
    navigate('/quiz');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-8">Finding your perfect destinations...</h1>
        <DestinationSkeleton />
      </div>
    );
  }

  // Determine grid columns based on number of destinations
  const gridClass = destinations.length === 1 
    ? "grid-cols-1 max-w-md mx-auto" 
    : destinations.length === 2 
      ? "grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto" 
      : "grid-cols-1 md:grid-cols-3";

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <h1 className="text-3xl font-bold text-center mb-2">Your Perfect Destinations</h1>
      <p className="text-center text-muted-foreground mb-8">
        Based on your preferences, we found {destinations.length} {destinations.length === 1 ? 'destination' : 'destinations'} for you
      </p>
      
      <div className={`grid gap-6 mb-8 ${gridClass}`}>
        {destinations.map((destination, index) => (
          <DestinationCard key={index} destination={destination} />
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
