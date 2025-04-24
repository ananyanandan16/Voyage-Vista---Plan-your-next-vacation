
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const DestinationSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="overflow-hidden h-full flex flex-col">
          <div className="h-48 overflow-hidden">
            <Skeleton className="w-full h-full" />
          </div>
          <CardHeader className="pb-2">
            <Skeleton className="h-6 w-3/4 mb-2" />
            <Skeleton className="h-4 w-1/2" />
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-3">
              <div>
                <Skeleton className="h-4 w-1/3 mb-2" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full mt-1" />
              </div>
              <Skeleton className="h-4 w-1/4" />
              <Skeleton className="h-4 w-2/5" />
            </div>
          </CardContent>
          <CardFooter>
            <Skeleton className="h-10 w-full" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default DestinationSkeleton;
