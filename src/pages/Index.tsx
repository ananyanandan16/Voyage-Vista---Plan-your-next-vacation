
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();
  const howItWorksRef = useRef<HTMLDivElement>(null);

  const scrollToHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    howItWorksRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-travel-blue text-2xl font-display font-bold">VoyageVista</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" onClick={scrollToHowItWorks} className="text-gray-600 hover:text-travel-blue transition-colors">How It Works</a>
            <Link to="/quiz" className="text-gray-600 hover:text-travel-blue transition-colors">Plan Your Next Vacation</Link>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection />
      </main>

      <div ref={howItWorksRef} id="how-it-works">
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

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} WanderlustCompass. All rights reserved.</p>
            <p className="text-gray-500 mt-2">Find your perfect travel destination with our personalized quiz.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
