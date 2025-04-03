
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export type Activity = 'sightseeing' | 'adventure' | 'nightlife' | 'food' | 'shopping';

interface ActivitiesSectionProps {
  selectedActivities: Activity[];
  onActivityToggle: (activity: Activity) => void;
  onNext: () => void;
}

const ActivitiesSection = ({ selectedActivities, onActivityToggle, onNext }: ActivitiesSectionProps) => {
  return (
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
              onCheckedChange={() => onActivityToggle('sightseeing')} 
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
              onCheckedChange={() => onActivityToggle('adventure')} 
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
              onCheckedChange={() => onActivityToggle('nightlife')} 
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
              onCheckedChange={() => onActivityToggle('food')} 
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
              onCheckedChange={() => onActivityToggle('shopping')} 
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
        <Button onClick={onNext} className="bg-travel-blue hover:bg-travel-blue/90">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ActivitiesSection;
