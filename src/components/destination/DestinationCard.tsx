
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Hotel, DollarSign, CalendarDays } from "lucide-react";
import { Destination } from '@/utils/destinationRecommendations';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
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
  );
};

export default DestinationCard;
