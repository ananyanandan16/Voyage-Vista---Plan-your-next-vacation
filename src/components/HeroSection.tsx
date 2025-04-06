
import React from 'react';
import { Button } from "@/components/ui/button";
import { MapPin, Compass, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import FeatureCard from './FeatureCard';

const HeroSection = () => {
  return (
    <div className="relative">
      {/* Hero section with background image */}
      <div 
        className="min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto text-center text-white px-4 py-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            Find Your Perfect Travel Destination
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md">
            Answer a few questions, and we'll suggest the best destinations based on your preferences and budget.
          </p>
          <Link to="/quiz">
            <Button 
              className="travel-button text-lg group"
            >
              Start Your Journey
              <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </Link>
          
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
    </div>
  );
};

export default HeroSection;
