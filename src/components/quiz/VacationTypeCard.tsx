
import React from 'react';

interface VacationTypeCardProps {
  icon: React.ReactNode;
  title: string;
  selected: boolean;
  onClick: () => void;
}

const VacationTypeCard = ({ icon, title, selected, onClick }: VacationTypeCardProps) => {
  return (
    <div 
      className={`p-4 rounded-xl border-2 transition-all cursor-pointer hover:shadow-md flex flex-col items-center justify-center gap-2 ${
        selected 
          ? 'border-travel-blue bg-travel-light text-travel-blue' 
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={onClick}
    >
      <div className={`rounded-full p-2 ${selected ? 'bg-white' : 'bg-gray-100'}`}>
        {icon}
      </div>
      <span className="font-medium text-center">{title}</span>
    </div>
  );
};

export default VacationTypeCard;
