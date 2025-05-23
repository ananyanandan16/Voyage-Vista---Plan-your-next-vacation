
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
    
    // Simulate a small delay to allow React to render the loading skeleton first
    const timer = setTimeout(() => {
      const recommendedDestinations = generateRecommendations(answers);
      setDestinations(recommendedDestinations.slice(0, 3));
      setLoading(false);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [navigate, toast]);

  const handleStartOver = () => {
    sessionStorage.removeItem('quizAnswers');
    navigate('/quiz');
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <h1 className="text-3xl font-bold text-center mb-2">Finding your perfect destinations...</h1>
        <p className="text-center text-muted-foreground mb-8">
          We're personalizing recommendations based on your preferences
        </p>
        <DestinationSkeleton />
      </div>
    );
  }

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
        <Button variant="outline" onClick={handleStartOver}>
          Start Over
        </Button>
      </div>
    </div>
  );
};

export default Results;
