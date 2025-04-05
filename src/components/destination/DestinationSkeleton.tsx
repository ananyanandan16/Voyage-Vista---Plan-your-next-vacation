
import React from 'react';

const DestinationSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4 w-full">
      {[1, 2, 3].map((i) => (
        <div key={i} className="h-64 bg-gray-200 rounded-lg w-full"></div>
      ))}
    </div>
  );
};

export default DestinationSkeleton;
