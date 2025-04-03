
import React from 'react';
import HeroSection from '@/components/HeroSection';
import { useToast } from '@/components/ui/use-toast';

const Index = () => {
  const { toast } = useToast();

  const handleStartQuiz = () => {
    toast({
      title: "Coming soon!",
      description: "The quiz functionality will be implemented in the next update.",
    });
  };

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-travel-blue text-2xl font-display font-bold">WanderlustCompass</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-travel-blue transition-colors">How It Works</a>
            <a href="#" className="text-gray-600 hover:text-travel-blue transition-colors">Destinations</a>
            <a href="#" className="text-gray-600 hover:text-travel-blue transition-colors">About</a>
          </nav>
        </div>
      </header>

      <main>
        <HeroSection onStartQuiz={handleStartQuiz} />
      </main>

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
