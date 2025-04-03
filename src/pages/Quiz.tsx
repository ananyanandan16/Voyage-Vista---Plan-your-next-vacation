
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import VacationTypeSection, { VacationType } from '@/components/quiz/VacationTypeSection';
import ActivitiesSection, { Activity } from '@/components/quiz/ActivitiesSection';

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
      
      <VacationTypeSection 
        selectedVacationType={selectedVacationType}
        onVacationTypeSelect={handleVacationTypeSelect}
      />

      <ActivitiesSection 
        selectedActivities={selectedActivities}
        onActivityToggle={handleActivityToggle}
        onNext={handleNext}
      />
    </div>
  );
};

export default Quiz;
