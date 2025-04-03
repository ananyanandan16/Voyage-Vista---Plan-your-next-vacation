
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Compass, Globe } from "lucide-react";
import FeatureCard from './FeatureCard';

interface HeroSectionProps {
  onStartQuiz: () => void;
}

const HeroSection = ({ onStartQuiz }: HeroSectionProps) => {
  return (
    <div className="relative">
      {/* Hero section with background image */}
      <div className="bg-hero-pattern bg-cover bg-center min-h-[70vh] flex items-center justify-center">
        <div className="container mx-auto text-center text-white px-4 py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Find Your Perfect Travel Destination
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md">
            Answer a few questions, and we'll suggest the best destinations based on your preferences and budget.
          </p>
          <Button 
            onClick={onStartQuiz}
            className="travel-button text-lg group"
          >
            Start Your Journey
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </Button>
          
          <div className="mt-12 animate-float">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
              <path d="M12 5L12 19M12 19L19 12M12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="container mx-auto px-4 py-16 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            icon={<Compass className="w-6 h-6" />}
            title="Personalized Recommendations"
            description="Get tailored travel suggestions based on your unique preferences and interests."
          />
          <FeatureCard 
            icon={<MapPin className="w-6 h-6" />}
            title="Budget Options"
            description="Discover destinations that match your budget, from affordable escapes to luxury getaways."
          />
          <FeatureCard 
            icon={<Globe className="w-6 h-6" />}
            title="Detailed Insights"
            description="Learn about estimated costs and what makes each destination special for your travel style."
          />
        </div>
      </div>

      {/* How it works section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-travel-blue rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
            <h3 className="text-xl font-semibold mb-2">Answer Questions</h3>
            <p className="text-gray-600">Tell us about your travel preferences, interests, and budget constraints.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-travel-teal rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
            <h3 className="text-xl font-semibold mb-2">Get Matched</h3>
            <p className="text-gray-600">Our algorithm matches your profile with perfect destinations around the world.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-travel-orange rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
            <h3 className="text-xl font-semibold mb-2">Plan Your Trip</h3>
            <p className="text-gray-600">Choose from budget, moderate, or luxury options with detailed cost estimates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
