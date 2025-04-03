
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/components/ui/use-toast";
import { DollarSign, CalendarDays } from "lucide-react";
import { QuizAnswers } from '@/types/quiz';

type Budget = 'budget' | 'moderate' | 'luxury' | 'unlimited';
type Duration = '1-3' | '4-7' | '8-14' | '15+';

const QuizBudget = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [budget, setBudget] = useState<Budget | null>(null);
  const [duration, setDuration] = useState<Duration | null>(null);
  const [prevAnswers, setPrevAnswers] = useState<QuizAnswers | null>(null);

  useEffect(() => {
    // Retrieve the previous answers from session storage
    const storedAnswers = sessionStorage.getItem('quizAnswers');
    if (storedAnswers) {
      setPrevAnswers(JSON.parse(storedAnswers));
    } else {
      // If no previous answers, redirect back to first quiz page
      navigate('/quiz');
    }
  }, [navigate]);

  const handleNext = () => {
    if (!budget) {
      toast({
        title: "Please select a budget range",
        description: "You need to choose your travel budget.",
        variant: "destructive",
      });
      return;
    }

    if (!duration) {
      toast({
        title: "Please select a trip duration",
        description: "You need to choose how long you plan to travel.",
        variant: "destructive",
      });
      return;
    }

    // Combine with previous answers
    const updatedAnswers = {
      ...prevAnswers,
      budget,
      duration
    };
    
    // Store in session storage
    sessionStorage.setItem('quizAnswers', JSON.stringify(updatedAnswers));
    
    // Show success toast since we don't have the next page yet
    toast({
      title: "Preferences saved!",
      description: "Your budget and duration preferences have been saved.",
    });
  };

  const handleBack = () => {
    navigate('/quiz');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-8">Travel Budget & Duration</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-6 w-6" />
            <span>What's your budget range?</span>
          </CardTitle>
          <CardDescription>Select the option that best fits your travel budget</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={budget || ""} onValueChange={(value) => setBudget(value as Budget)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="budget" id="budget" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="budget" className="text-sm font-medium">Budget-friendly</Label>
                  <p className="text-sm text-muted-foreground">₹0-₹1,00,000 per person</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="moderate" id="moderate" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="moderate" className="text-sm font-medium">Moderate</Label>
                  <p className="text-sm text-muted-foreground">₹1,00,000-₹2,50,000 per person</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="luxury" id="luxury" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="luxury" className="text-sm font-medium">Luxury</Label>
                  <p className="text-sm text-muted-foreground">₹2,50,000-₹4,00,000 per person</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="unlimited" id="unlimited" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="unlimited" className="text-sm font-medium">Unlimited</Label>
                  <p className="text-sm text-muted-foreground">₹4,00,000+ per person</p>
                </div>
              </div>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CalendarDays className="h-6 w-6" />
            <span>How long do you plan to travel?</span>
          </CardTitle>
          <CardDescription>Select your preferred trip duration</CardDescription>
        </CardHeader>
        <CardContent>
          <RadioGroup value={duration || ""} onValueChange={(value) => setDuration(value as Duration)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="1-3" id="short" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="short" className="text-sm font-medium">Weekend getaway</Label>
                  <p className="text-sm text-muted-foreground">1-3 days</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="4-7" id="medium" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="medium" className="text-sm font-medium">Short vacation</Label>
                  <p className="text-sm text-muted-foreground">4-7 days</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="8-14" id="long" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="long" className="text-sm font-medium">Extended trip</Label>
                  <p className="text-sm text-muted-foreground">8-14 days</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="15+" id="very-long" />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="very-long" className="text-sm font-medium">Long journey</Label>
                  <p className="text-sm text-muted-foreground">15+ days</p>
                </div>
              </div>
            </div>
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleBack}>
            Back
          </Button>
          <Button onClick={handleNext} className="bg-travel-blue hover:bg-travel-blue/90">
            Next
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default QuizBudget;
