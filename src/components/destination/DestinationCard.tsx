
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Hotel, DollarSign, CalendarDays, AlertCircle } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Destination } from '@/types/destination';

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard = ({ destination }: DestinationCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleViewDetails = () => {
    const searchQuery = `plan a trip for me to ${destination.name} for ${destination.duration}`;
    const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
    window.open(googleSearchUrl, '_blank');
  };

  // Get a placeholder image based on the destination name
  const getPlaceholderImage = () => {
    // Generate a consistent placeholder image based on destination name
    const hash = destination.name.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    const placeholders = [
      "photo-1500375592092-40eb2168fd21",
      "photo-1470071459604-3b5ec3a7fe05",
      "photo-1482938289607-e9573fc25ebb",
      "photo-1506744038136-46273834b3fb"
    ];
    
    const index = Math.abs(hash) % placeholders.length;
    return `https://images.unsplash.com/${placeholders[index]}?auto=format&fit=crop&w=600&q=80`;
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true); // Consider the loading process complete even on error
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="h-48 overflow-hidden relative bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Skeleton className="w-full h-full absolute" />
          </div>
        )}
        
        {imageError ? (
          <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500">
            <AlertCircle className="h-8 w-8 mb-2" />
            <p className="text-sm font-medium">Image unavailable</p>
          </div>
        ) : (
          <img 
            src={destination.image} 
            alt={destination.name}
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={`w-full h-full object-cover transition-transform hover:scale-105 duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            srcSet={`${destination.image}?auto=format&fit=crop&w=400&q=75 400w, 
                    ${destination.image}?auto=format&fit=crop&w=600&q=80 600w, 
                    ${destination.image}?auto=format&fit=crop&w=800&q=80 800w`}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        )}
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
        <Button 
          className="w-full bg-travel-blue hover:bg-travel-blue/90"
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
