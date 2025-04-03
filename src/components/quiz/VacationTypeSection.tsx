
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Palmtree, Trees, ShoppingBag } from "lucide-react";
import VacationTypeCard from './VacationTypeCard';
import { VacationType } from '@/types/quiz';

interface VacationTypeSectionProps {
  selectedVacationType: VacationType | null;
  onVacationTypeSelect: (type: VacationType) => void;
}

const VacationTypeSection = ({ selectedVacationType, onVacationTypeSelect }: VacationTypeSectionProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>What type of vacation do you prefer?</CardTitle>
        <CardDescription>Select the option that best describes your ideal getaway</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <VacationTypeCard
            icon={<Building size={24} />}
            title="Cultural & Historical"
            selected={selectedVacationType === 'cultural'}
            onClick={() => onVacationTypeSelect('cultural')}
          />
          <VacationTypeCard
            icon={<Trees size={24} />}
            title="Nature & Adventure"
            selected={selectedVacationType === 'nature'}
            onClick={() => onVacationTypeSelect('nature')}
          />
          <VacationTypeCard
            icon={<Palmtree size={24} />}
            title="Beach & Relaxation"
            selected={selectedVacationType === 'beach'}
            onClick={() => onVacationTypeSelect('beach')}
          />
          <VacationTypeCard
            icon={<Building size={24} />}
            title="City Life"
            selected={selectedVacationType === 'city'}
            onClick={() => onVacationTypeSelect('city')}
          />
          <VacationTypeCard
            icon={<ShoppingBag size={24} />}
            title="Theme Parks & Entertainment"
            selected={selectedVacationType === 'entertainment'}
            onClick={() => onVacationTypeSelect('entertainment')}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default VacationTypeSection;
