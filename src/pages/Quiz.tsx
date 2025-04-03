import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Music, Building, Palmtree, Trees, UtensilsCrossed, ShoppingBag } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type VacationType = 'cultural' | 'nature' | 'beach' | 'city' | 'entertainment';
type Activity = 'sightseeing' | 'adventure' | 'nightlife' | 'food' | 'shopping';

const Quiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedVacationType, setSelectedVacationType] = useState<VacationType | null>(null);
  const [selectedActivities, setSelectedActivities] = useState<Activity[]>([]);

  const handleVacationTypeSelect = (type: VacationType) => {
    setSelectedVacationType(type);
  };

  const handleActivityToggle = (activity: Activity) => {
    setSelectedActivities(prev => 
      prev.includes(activity)
        ? prev.filter(a => a !== activity)
        : [...prev, activity]
    );
  };

  const handleNext = () => {
    if (!selectedVacationType) {
      toast({
        title: "Please select a vacation type",
        description: "You need to choose what type of vacation you prefer.",
        variant: "destructive",
      });
      return;
    }

    if (selectedActivities.length === 0) {
      toast({
        title: "Please select at least one activity",
        description: "You need to choose at least one activity you enjoy.",
        variant: "destructive",
      });
      return;
    }

    const quizAnswers = {
      vacationType: selectedVacationType,
      activities: selectedActivities
    };
    sessionStorage.setItem('quizAnswers', JSON.stringify(quizAnswers));
    
    navigate('/quiz-budget');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Find Your Perfect Destination</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What type of vacation do you prefer?</CardTitle>
          <CardDescription>Select the option that best describes your ideal getaway</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <VacationTypeCard
              icon={<Music size={24} />}
              title="Cultural & Historical"
              selected={selectedVacationType === 'cultural'}
              onClick={() => handleVacationTypeSelect('cultural')}
            />
            <VacationTypeCard
              icon={<Trees size={24} />}
              title="Nature & Adventure"
              selected={selectedVacationType === 'nature'}
              onClick={() => handleVacationTypeSelect('nature')}
            />
            <VacationTypeCard
              icon={<Palmtree size={24} />}
              title="Beach & Relaxation"
              selected={selectedVacationType === 'beach'}
              onClick={() => handleVacationTypeSelect('beach')}
            />
            <VacationTypeCard
              icon={<Building size={24} />}
              title="City Life"
              selected={selectedVacationType === 'city'}
              onClick={() => handleVacationTypeSelect('city')}
            />
            <VacationTypeCard
              icon={<ShoppingBag size={24} />}
              title="Theme Parks & Entertainment"
              selected={selectedVacationType === 'entertainment'}
              onClick={() => handleVacationTypeSelect('entertainment')}
            />
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What kind of activities do you enjoy?</CardTitle>
          <CardDescription>Select all that apply</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox 
                id="sightseeing" 
                checked={selectedActivities.includes('sightseeing')}
                onCheckedChange={() => handleActivityToggle('sightseeing')} 
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="sightseeing" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Sightseeing
                </Label>
                <p className="text-sm text-muted-foreground">
                  Visiting tourist attractions, monuments, and landmarks.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox 
                id="adventure" 
                checked={selectedActivities.includes('adventure')}
                onCheckedChange={() => handleActivityToggle('adventure')} 
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="adventure" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Adventure sports
                </Label>
                <p className="text-sm text-muted-foreground">
                  Hiking, surfing, scuba diving, and other outdoor activities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox 
                id="nightlife" 
                checked={selectedActivities.includes('nightlife')}
                onCheckedChange={() => handleActivityToggle('nightlife')} 
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="nightlife" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Nightlife
                </Label>
                <p className="text-sm text-muted-foreground">
                  Bars, clubs, and entertainment venues.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox 
                id="food" 
                checked={selectedActivities.includes('food')}
                onCheckedChange={() => handleActivityToggle('food')} 
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="food" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Food & culinary experiences
                </Label>
                <p className="text-sm text-muted-foreground">
                  Trying local cuisine, food tours, cooking classes.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3 space-y-0">
              <Checkbox 
                id="shopping" 
                checked={selectedActivities.includes('shopping')}
                onCheckedChange={() => handleActivityToggle('shopping')} 
              />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="shopping" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Shopping
                </Label>
                <p className="text-sm text-muted-foreground">
                  Markets, malls, boutiques, and souvenir hunting.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleNext} className="bg-travel-blue hover:bg-travel-blue/90">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

interface VacationTypeCardProps {
  icon: React.ReactNode;
  title: string;
  selected: boolean;
  onClick: () => void;
}

const VacationTypeCard = ({ icon, title, selected, onClick }: VacationTypeCardProps) => {
  return (
    <div 
      className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md flex flex-col items-center justify-center gap-2 ${
        selected 
          ? 'border-travel-blue bg-travel-light text-travel-blue' 
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <div className={`rounded-full p-2 ${selected ? 'bg-white' : 'bg-gray-100'}`}>
        {icon}
      </div>
      <span className="font-medium text-center">{title}</span>
    </div>
  );
};

export default Quiz;
